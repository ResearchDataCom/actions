% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

# Contribution Guidelines

The project practices [test-driven development](https://tdd.mooc.fi/)
in
[Git feature (topic) branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
Please maintain a [linear commit history](https://archive.is/VpWTs) by
rebasing changes on the latest HEAD of the main branch before
submitting them for review as a
[GitHub pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests).

## Development Environment

:::{admonition} Guidance

This project **REQUIRES**
[GNU Make](https://www.gnu.org/software/make/) and
[Python](https://www.python.org/) 3.13 or newer.

:::

Additionally, on Linux it needs
[lsb-release](https://refspecs.linuxfoundation.org/lsb.shtml).  On
macOS it uses the
[Command Line Tools for Xcode](https://developer.apple.com/documentation/xcode/installing-the-command-line-tools)
and [MacPorts](https://www.macports.org/).  Several of the available
make targets are listed below.  Review the
[makefile](github:GNUmakefile) for additional details.

`make build-deps`
: Install the remaining system-level build dependencies.  Requires
  root access via [sudo](https://www.sudo.ws/).

`make setup`
: Create (or update) a
  [Python virtual environment](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments)
  named `.venv` in the project root directory and perform an editable
  installation of this project that includes development and testing
  tools.

`make pre-commit`
: Configure optional pre-commit hooks, which require the virtual
  environment to be active in your code editor or
  [Git porcelain](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain).

`make lint`
: Check code syntax and style.

`make clean`
: Reset the development environment, which includes removing the
  pre-commit hooks.

## Code Style

:::{admonition} Guidance

Changes **MUST** be self-contained and buildable, with updated tests
and documentation.

:::

This project follows these code styles:

- [Python Black](https://black.readthedocs.io/)
  and [isort](https://pycqa.github.io/isort/)

- [the Google Markdown style guide](https://google.github.io/styleguide/docguide/style.html),
  but with a more traditional 70-character line limit

- [the Home Assistant YAML style guide](https://developers.home-assistant.io/docs/documenting/yaml-style-guide/)

For actions:

- Name the folder containing a composite action after the primary
  tool, e.g., [`pre-commit/`](github:pre-commit/), the
  [runtime](wiki:Runtime_system) and operation, e.g.,
  [`sphinx-build/`](github:sphinx-build/), or in special cases, the
  scenario and target, e.g.,
  [`setup-bashbrew/`](github:setup-bashbrew/).

- Define the composite action in a file named `action.yaml`, not
  `action.yml`.

- Specify top-level keys in the order `name`, `description`, `inputs`,
  `runs`, and `outputs`.  Group the `name` and `description` keys.
  Put a single blank line between the rest.

- Name the action and each step with a short sentence in the
  imperative mood that succinctly explains what the action or that
  step does.  Format names using plain text.

- For each input, list fields in the order `required`, `default`,
  `description`, and `deprecationMessage`.  Specify fields only when
  overriding default values.  Sort inputs first by whether they are
  required and then alphabetically by input name.

- For each output, list fields in the order `description` and `value`.
  Sort outputs by name.

- Describe the action, its inputs, and its outputs in detail.  Format
  descriptions using
  [MyST Markdown](https://myst-parser.readthedocs.io/).

- If specified, the
  [default value of an input parameter](https://docs.github.com/actions/reference/workflows-and-actions/metadata-syntax#inputsinput_iddefault)
  is a string.  The GitHub Actions runner will
  [cast other value types to a string](https://stackoverflow.com/a/76294014).
  For example, specifying a default value of `false` results in the
  input parameter defaulting to `"false"`,
  [a truthy value](https://docs.github.com/actions/reference/workflows-and-actions/expressions).

- The GitHub Actions runner
  [does not check for missing required inputs](https://github.com/actions/runner/issues/1070).
  Doing so is the responsibility of the action itself.

- Manually create a corresponding entry in the documentation for each
  action.  List inputs and outputs in the same order as in the action,
  and keep documentation in sync with the action, input, and output
  descriptions.

- Use [field lists](inv:myst#syntax/fieldlists) for inputs and
  outputs, with a horizontal rule at the end of each definition to
  separate entries a little without breaking apart the list.

## Commit Messages

:::{admonition} Guidance

This project **REQUIRES**
[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/),
with which it implements
[Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).

:::

In commit messages:

- Please use English.

- Limit the first line to at most 100 characters.  Wrap the rest of
  the commit message at column 70.

- Summarize the changes with a one-sentence commit description in the
  imperative mood, lowercasing the starting verb and omitting ending
  punctuation.

- For the commit type, specify one of {term}`build`, {term}`chore`,
  {term}`ci`, {term}`docs`, {term}`feat`, {term}`fix`, {term}`perf`,
  {term}`style`, {term}`refactor`, or {term}`test`.

## Commit Scopes

:::{admonition} Guidance

Per _Conventional Commits_, a commit scope is an **OPTIONAL**
abbreviation, acronym, codename, or keyword that provides additional
context to reviewers by naming the essential component of the change.
Changes covering multiple scopes or changes not specific to one scope
**MUST NOT** specify a scope.

:::

An atomic commit can alter multiple files.  For example, an interface
change could require modifications to class definitions, method calls,
property references, and unit tests throughout the project.  The
commit scope tells reviewers where to focus their analysis.  In change
logs, commit scopes help sponsors understand the structure of the work
going into fixes, features, or breaking changes.  Because actions
interface with one another (usually indirectly, via workflow artifacts
or output/input conventions), commit scopes follow actions' base
names, e.g., `pre-commit`, not `actions/pre-commit`, nor
`ResearchDataCom/actions/pre-commit`.

## Commit Types

{.glossary}
`build`
: a change to the build system or external dependencies, e.g., the
  makefile

{.glossary}
`chore`
: a miscellaneous tooling or tool configuration change, e.g., the
  .gitignore file, or a change not covered by the other commit types

{.glossary}
`ci`
: a change to continuous integration/continuous delivery (CI/CD)
  processes, e.g., GitHub Actions

{.glossary}
`docs`
: a documentation-only change, including edits to in-line
  documentation and comments

{.glossary}
`feat`
: a new feature

{.glossary}
`fix`
: a bug fix

{.glossary}
`perf`
: a code change that improves performance

{.glossary}
`refactor`
: a code change that neither fixes a bug nor adds a feature

{.glossary}
`style`
: a change that only affects formatting, or a change related to the
  linter configuration

{.glossary}
`test`
: a new test or a correction to an existing test
