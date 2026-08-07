# This work is marked CC0 1.0 Universal.  To view a copy of this mark,
# visit https://creativecommons.org/publicdomain/zero/1.0/.

"""Configure Sphinx."""

import json
import os
import tomllib
from pathlib import Path

import sphinx_book_theme

__metadata__ = tomllib.load(
    (Path(__file__).parent / ".." / "pyproject.toml").open("rb")
)
"""Configure Sphinx from dynamically loaded project metadata."""

project = "ResearchDataCom/actions"
"""The project name."""

release = __metadata__["project"]["version"]
"""The full version number, including the patch level (X.Y.Z)."""

version = ".".join(release.split(".")[0:2])
"""The short version number (X.Y)."""

author = "Research Data and Communication Technologies Benefit Corp."
"""Credits for this version."""

copyright = ""
"""The years over which the work was done."""

extensions = [
    "autodoc2",
    "myst_parser",
    "sphinx.ext.githubpages",
    "sphinx.ext.intersphinx",
    "sphinx.ext.viewcode",
    "sphinx_copybutton",
    "sphinx_design",
    "sphinx_pyscript",
    "sphinx_tippy",
    "sphinx_togglebutton",
    "sphinxcontrib.bibtex",
    "sphinxcontrib.cairosvgconverter",
    "sphinxext.opengraph",
    "sphinxext.rediraffe",
]
"""This documentation uses several Sphinx extensions.

<inv:autodoc2:std:doc#index>
: Generate API documentation automatically.

[myst-parser](inv:myst:std:doc#index)
: Render Markdown in documentation and docstrings.

[sphinx.ext.githubpages](inv:sphinx:std:doc#usage/extensions/githubpages)
: Publish HTML documentation in GitHub Pages.

[sphinx.ext.intersphinx](inv:sphinx:std:doc#usage/extensions/intersphinx)
: Link to other projects' documentation.

[sphinx.ext.viewcode](inv:sphinx:std:doc#usage/extensions/viewcode)
: Link to highlighted source code.

[sphinx-copybutton](inv:copybutton:std:doc#index)
: Add a `copy` button to code blocks.

<inv:sphinx-design:std:doc#index>
: Provide screen-size responsive web components.

<inv:sphinx-pyscript:std:doc#index>
: Use PyScript in built documentation.

<inv:sphinx-tippy:std:doc#index>
: Add rich hints (tooltips) to built documentation.

<inv:togglebutton:std:doc#index>
: Add collapsable admonitions (notes, warnings, etc.) to built
  documentation.

<inv:sphbibtex:std:doc#index sphinxcontrib-bibtex>
: Allow BibTeX citations to be inserted into documentation generated
  by Sphinx via a bibliography directive, along with `cite:p` and
  `cite:t` roles.

[sphinxcontrib.cairosvgconverter](https://pypi.org/project/sphinxcontrib-svg2pdfconverter/)
: Convert SVG diagrams to PDF for output formats that do not support
  SVG natively.

<inv:opengraph:std:doc#index>
: Turn web pages into Open Graph objects.

<inv:rediraffe:std:doc#index>
: Fix broken internal links due to deleted/renamed pages.

"""

intersphinx_mapping = {
    "autodoc2": ("https://sphinx-autodoc2.readthedocs.io/en/latest/", None),
    "black": ("https://black.readthedocs.io/en/stable/", None),
    "book-theme": ("https://sphinx-book-theme.readthedocs.io/en/stable/", None),
    "copybutton": ("https://sphinx-copybutton.readthedocs.io/en/latest/", None),
    "myst": ("https://myst-parser.readthedocs.io/en/latest/", None),
    "opengraph": ("https://sphinxext-opengraph.readthedocs.io/en/latest/", None),
    "pydata-theme": ("https://pydata-sphinx-theme.readthedocs.io/en/latest/", None),
    "pysaml2": ("https://pysaml2.readthedocs.io/en/latest", None),
    "pytest-selenium": ("https://pytest-selenium.readthedocs.io/en/latest/", None),
    "pytest": ("https://docs.pytest.org/en/latest/", None),
    "python": ("https://docs.python.org/3", None),
    "rediraffe": ("https://sphinxext-rediraffe.readthedocs.io/en/latest/", None),
    "sphinx-design": ("https://sphinx-design.readthedocs.io/en/latest/", None),
    "sphinx-pyscript": ("https://sphinx-pyscript.readthedocs.io/en/latest/", None),
    "sphinx-tippy": ("https://sphinx-tippy.readthedocs.io/en/latest/", None),
    "sphinx": ("https://www.sphinx-doc.org/en/master/", None),
    "sphobjinv": ("https://sphobjinv.readthedocs.io/en/latest/", None),
    "togglebutton": ("https://sphinx-togglebutton.readthedocs.io/en/latest/", None),
}
"""Cross-reference other Sphinx documentation projects.

Use the [`sphobjinv suggest`](inv:sphobjinv:std:doc#cli/suggest)
command to find intersphinx references using the documentation URL,
e.g., `sphobjinv suggest -u
https://sphobjinv.readthedocs.io/en/latest/cli/suggest.html suggest`.

"""

nitpicky = True

suppress_warnings = ["myst.strikethrough"]

locale_dirs = ["_locales"]

templates_path = ["_templates"]
"""These directories contain documentation templates.

Paths are relative to this file's parent directory.

"""

exclude_patterns = [".*", "Thumbs.db", ".DS_Store"]
"""Ignore these files/folders when sourcing content."""

autodoc2_packages = [
    {"module": m, "path": p}
    for m, p in [
        ("docs", "../docs/"),
        ("tests", "../tests/"),
        ("actions", "../src/actions/"),
    ]
    if (Path(p) / "__init__.py").exists()
]
"""Search these locations for code to document."""

autodoc2_render_plugin = "myst"
"""Render docstrings using [MyST Markdown](inv:myst:std:doc#index)."""

autodoc2_sort_names = True
"""When documenting the API, sort by name."""

myst_enable_extensions = [
    "amsmath",
    "attrs_block",
    "attrs_inline",
    "colon_fence",
    "deflist",
    "dollarmath",
    "fieldlist",
    "html_admonition",
    "html_image",
    "linkify",
    "replacements",
    "smartquotes",
    "strikethrough",
    "substitution",
    "tasklist",
]
"""Enable all MyST parser extensions.

For more information, refer to
[the documentation](inv:myst:std:label#syntax/extensions).

"""

myst_dmath_double_inline = True

myst_enable_checkboxes = True

myst_footnote_transition = True

myst_heading_anchors = 2

bibtex_bibfiles = ["refs.bib"]
"""[BibTeX](http://www.bibtex.org/) citations."""

html_theme = "sphinx_book_theme"
"""Use the Sphinx Book Theme template for web content."""

html_theme_path = [sphinx_book_theme.get_html_theme_path()]

html_theme_options = {
    "home_page_in_toc": True,
    "repository_url": (repo_url := "https://github.com/ResearchDataCom/actions"),
    "path_to_docs": "docs",
    "use_edit_page_button": True,
    "use_repository_button": True,
    "use_issues_button": True,
    "use_fullscreen_button": True,
}
"""Configure web content generation.

[`home_page_in_toc`](inv:book-theme:std:doc#sections/sidebar-primary)
: Add the home page to the table of contents.

[`repository_url`, `path_to_docs`, `use_edit_page_button`, `use_repository_button`, `use_issues_button`](inv:book-theme:std:doc#components/source-files)
: Link to doc sources and include buttons for suggesting edits or
  creating new issues.

[`use_fullscreen_button`](inv:book-theme:std:doc#reference)
: Add a button to show the site full screen.

"""  # noqa: B950

html_title = f"{project}"
"""The title for HTML documentation;
cf. <inv:sphinx:std:confval#html_title>.

"""

html_favicon = "_static/favicon-32x32.png"

html_static_path = ["_static"]

html_sidebars = {
    "**": [
        "navbar-logo.html",
        "versions.html",
        "icon-links.html",
        "search-button-field.html",
        "sbt-sidebar-nav.html",
    ]
}

try:
    _versions = json.load(
        (Path(__file__).parent / ".." / "build" / "versions.json").open()
    )
except Exception:
    _versions = {"latest": ["en"]}
html_context = {
    "current_version": os.environ.get("CURRENT_VERSION", "latest"),
    "current_language": os.environ.get("CURRENT_LANGUAGE", "en"),
    "versions": _versions,
}

myst_url_schemes = {
    "http": None,
    "https": None,
    "mailto": None,
    "ftp": None,
    "doi": "https://doi.org/{{ path }}",
    "github": {
        "classes": ["github"],
        "url": (
            f"{repo_url}/blob/{html_context['current_version']}"
            "/{{ path }}#{{ fragment }}"
        ),
    },
    "wiki": "https://en.wikipedia.org/wiki/{{ path }}#{{ fragment }}",
}
"""Define custom URL schemes;
cf. <inv:myst:std:doc#syntax/cross-referencing>.

:::{note}

Preview builds of the documentation, e.g., created by the `make html`
command, will not have valid links to source code on GitHub.  The
`github:` scheme only correctly accounts for the project's current
version when performing a multi-version build of the documentation via
the `make docs` command.

:::

"""

viewcode_line_numbers = True
"""Add line numbers to embedded source code listings."""
