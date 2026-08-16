# This work is marked CC0 1.0 Universal.  To view a copy of this mark,
# visit https://creativecommons.org/publicdomain/zero/1.0/.

# Avoid problems on systems where the SHELL variable might be
# inherited from the environment.
SHELL = /bin/sh

# Explicitly clear and then set the suffixes used in implicit rules.
.SUFFIXES:
# .SUFFIXES: .c .o

# Search a colon-separated list of directories for one of the given
# programs, returning the first match.
pathsearch = \
$(or \
	$(firstword \
		$(foreach a, $(2), \
			$(wildcard $(addsuffix /$(a), $(subst :, , $(1)))))), \
	$(3))

# Search the Python virtual environment and the executable search path
# for the programs in the listed order, returning the first match.
venvsearch = \
$(if $(call pathsearch,.venv/bin,$(1)), \
	. .venv/bin/activate; $(1), \
	$(call pathsearch,$(PATH),$(1),exit 1; echo $(1)))

# Develop using the latest available supported version of Python.
PYTHON = \
$(call pathsearch,$(PATH),python3.14 python3.13 python3.12,exit 1; echo python3)
PYTHON_VERSION = \
$(shell $(PYTHON) -c "import sys;print('{}.{}'.format(*sys.version_info[:2]))")

# Use these tools from the development environment, if available.
PRE_COMMIT  = $(call venvsearch,pre-commit)
SPHINXBUILD = $(call venvsearch,sphinx-build)
SPHINXINTL  = $(call venvsearch,sphinx-intl)
TOMLQ       = $(call venvsearch,tomlq)
YQ          = $(call venvsearch,yq)

# On Debian/Ubuntu, install these build dependencies via APT.
DEBIAN_BUILD_DEPS = \
	build-essential \
	devscripts \
	equivs \
	python3.13-full \

# On Debian/Ubuntu, install these Python packages' build dependencies.
APT_GET_INSTALL = \
apt-get -o Debug::pkgProblemResolver=yes -y --no-install-recommends install
DEBIAN_SOURCE_DEPS = \
	python3-cairosvg \

# On macOS, install these build dependencies via MacPorts.
MACPORTS_BUILD_DEPS = \
	act \
	actionlint \
	cairo \
	certsync \
	jq \
	libffi \
	pinact \
	py313-cairosvg \
	shellcheck \
	tflint \
	trivy \

# Get the Python egg name.  This kludge assumes package names are
# always in kebab-case, but the Right Way requires understanding of
# pip's or setuptools' internals.
EGG_NAME = $(shell $(TOMLQ) -r '.project.name|split("-")|join("_")' pyproject.toml)

# Recursively list code, content, and test articles (as well as
# related work in progress).
SOURCEISH ?= $(or $(shell git ls-tree --full-tree --name-only -r HEAD src))
UNTRACKED ?= $(or $(shell git ls-files --others --exclude-standard src))

# Prepare these translations of the documentation.
TRANSLATIONS =

# Configure Sphinx, optionally from an environment variable.
SPHINXOPTS ?=

# List in-use pre-commit hooks.
PRE_COMMIT_HOOKS = \
$(addprefix .git/hooks/, \
	$(shell \
		$(YQ) -r ".repos[].hooks[].stages | .[]?" .pre-commit-config.yaml \
			2>/dev/null \
		| sort -u \
	) \
	pre-commit \
)

# When adding an alias for a build artifact, add it to this list; cf.
# https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html.
# Sort the list alphabetically.
.PHONY: \
	all \
	build-deps \
	clean \
	clean-deps \
	docs \
	docsclean \
	gettext \
	html \
	lint \
	locale \
	locales \
	pre-commit \
	setup \
	venv \

# Set the default target when running `make`.
all: html

# Install build dependencies for local development.
build-deps:
	$(eval uname = $(or $(shell uname)))
	$(if $(filter Darwin, $(uname)), \
		sudo port -N install $(MACPORTS_BUILD_DEPS); \
	)
	$(if $(filter Linux, $(uname)), \
		$(eval distro = $(or $(shell lsb_release -is))))
	$(if $(filter Debian Ubuntu, $(distro)), \
		sudo sed -i '/deb-src/s/^# //' /etc/apt/sources.list; \
		sudo find /etc/apt/sources.list.d -name '*.sources' -exec \
			sed -i '/Types: deb$$/s/$$/ deb-src/' '{}' \; \
		; \
		sudo apt-get update; \
		sudo DEBIAN_FRONTEND=noninteractive \
			apt-get install -y --no-install-recommends \
				software-properties-common \
		; \
		sudo add-apt-repository -y ppa:deadsnakes/ppa; \
		sudo DEBIAN_FRONTEND=noninteractive \
			apt-get install -y --no-install-recommends \
				$(DEBIAN_BUILD_DEPS) \
		; \
		curl https://bootstrap.pypa.io/get-pip.py | python3.13 -; \
		sudo DEBIAN_FRONTEND=noninteractive \
			mk-build-deps -i -r -t "$(APT_GET_INSTALL)" \
				$(DEBIAN_SOURCE_DEPS) \
		; \
		rm -f *.buildinfo *.changes; \
	)

# Create the development environment.
venv .venv:
	$(PYTHON) -m venv .venv
	. .venv/bin/activate; python -m pip install -U pip-with-requires-python
	. .venv/bin/activate; python -m pip install -U pip setuptools
	touch .venv

# Set up the development environment.
setup $(EGG_NAME).egg-info: pyproject.toml .venv
	. .venv/bin/activate; python -m pip install -e .[dev]
	touch $(EGG_NAME).egg-info
	-rm -f .egg-info

# Install the pre-commit hooks.
pre-commit: $(PRE_COMMIT_HOOKS)
.git/hooks/%: .pre-commit-config.yaml $(EGG_NAME).egg-info
	$(PRE_COMMIT) validate-config
	$(PRE_COMMIT) validate-manifest
	$(PRE_COMMIT) install --install-hooks --hook-type $*

# Check code syntax and style.
lint: $(PRE_COMMIT_HOOKS)
	$(PRE_COMMIT) run --show-diff-on-failure --all-files

# Route these targets to Sphinx using its "make mode" option.
gettext html: | $(EGG_NAME).egg-info
	$(SPHINXBUILD) -M $@ docs build $(SPHINXOPTS) $(O)

# Prepare or update message catalogs for translation.
locale locales: $(addprefix docs/_locales/, $(TRANSLATIONS))
docs/_locales/%: gettext | $(EGG_NAME).egg-info
	$(SPHINXINTL) -c docs/conf.py update -p build -l $*

# Build the documentation.
docs: | $(EGG_NAME).egg-info
# Create missing remote-tracking branches.
	LOCAL_BRANCHES=$$(git branch \
		| grep -E -v '^..(HEAD|gh-pages|main|master|releases?(/.*)?)$$' \
		| cut -c 3-); \
	REMOTE_BRANCHES=$$(git branch -r \
		| grep -E -v '^.*/(HEAD|gh-pages|main|master|releases?(/.*)?)$$' \
		| cut -c 3-); \
	for rb in $$REMOTE_BRANCHES; do \
		lb=`echo $$rb | sed -e 's|[^/]*/||'`; \
		echo "$$LOCAL_BRANCHES" | grep ^$$lb\$$ > /dev/null \
		|| git branch $$lb $$rb; \
	done
# Generate the index.  Filter out versions with no documentation.
	mkdir -p build/docs
	cat /dev/null > build/versions.txt
	VERSIONS=$$( \
		for v in $$(git tag | sort -r); do \
			if [ -n "$$(git ls-tree -r --name-only $$v docs)" ]; then \
				echo $$v; \
			fi; \
		done \
	); \
	for v in $$VERSIONS; do \
		TRANSLATIONS=$$( \
			echo en; \
			git ls-tree -r --name-only $$v docs/_locales \
			| xargs -n 1 basename \
			| grep -v '^.gitignore$$' \
		); \
		echo { \"$$v\": $$(echo "$$TRANSLATIONS" | jq -cRn '[inputs]') } \
		>> build/versions.txt; \
	done
	LATEST_VERSION=$$(git tag | sort -r | head -1); \
	sed -e s/LATEST_VERSION/$$LATEST_VERSION/ \
		docs/.index.html > build/docs/index.html
	cat build/versions.txt | jq -s add > build/versions.json
# Copy the repository to a temporary directory.  Stash the Sphinx
# configuration from the real work tree for later use.
	$(eval TMP := $(shell mktemp -d))
	git clone --mirror . $(TMP)/.git
	mkdir -p $(TMP)/build/docs
	cp build/versions.json docs/conf.py docs/_templates/versions.html \
		$(TMP)/build
# Build the documentation for each translation of each version.
	set -eux; \
	. .venv/bin/activate; \
	cd $(TMP); \
	for v in $$(jq -r 'keys[]' build/versions.json); do \
		env GIT_WORK_TREE=$(TMP) git checkout -f $$v; \
		cp build/conf.py docs/conf.py; \
		cp build/versions.html docs/_templates/versions.html; \
		for l in $$(jq -r --arg v $$v '.[$$v][]' build/versions.json); do \
			env CURRENT_VERSION=$$v CURRENT_LANGUAGE=$$l \
				sphinx-build -M html docs build -D language=$$l; \
			mkdir -p build/docs/$$v; \
			mv build/html build/docs/$$v/$$l; \
		done; \
	done
	(cd $(TMP)/build; tar cf - docs) | (cd build; tar xf -)
# Clean up.
	rm -rf $(TMP)

docsclean:
	rm -rf docs/apidocs build/{docs,gettext,html} build/versions*

# Remove build artifacts and reset the development environment.
clean: docsclean
	rm -rf build* .coverage cov_* .pytest_cache .venv* $(PRE_COMMIT_HOOKS)
	find . -type d -name __pycache__ -print | xargs rm -rf
	find . -type d -name \*.egg-info -print | xargs rm -rf

# This could remove packages other that the ones listed, so keep any
# confirmation prompts (requires local administrator rights).
clean-deps:
	$(eval uname = $(or $(shell uname)))
	$(if $(filter Darwin, $(uname)), \
		sudo port uninstall $(MACPORTS_BUILD_DEPS); \
	)
	$(if $(filter Linux, $(uname)), \
		$(eval distro = $(or $(shell lsb_release -is))))
	$(if $(filter Debian Ubuntu, $(distro)), \
		sudo apt-mark auto \
			$(DEBIAN_BUILD_DEPS) \
			$(addsuffix -build-deps, $(DEBIAN_SOURCE_DEPS)) \
		; \
		sudo apt-get autoremove; \
	)
