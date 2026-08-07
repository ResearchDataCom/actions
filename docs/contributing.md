% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

# Contribution Guidelines

This project combines
[atomic commits](https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits/),
a [linear commit history](https://archive.is/VpWTs), and the
[Git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
Please rebase changes on the latest HEAD of the main branch before
submitting them for review as a
[GitHub pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests).

## Development Environment

This project requires Python 3.13 or newer.  To set up your
development environment on Linux or macOS, run these
[GNU Make](https://www.gnu.org/software/make/) commands from the
project root directory.

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

`make clean`
: Reset the development environment, which includes removing the
  pre-commit hooks.

Additional targets are available, several of which are listed below.
Review the makefile for details.

`make lint`
: Check code syntax and style.

## Code Style

This project follows these code styles:

- [Python Black](https://black.readthedocs.io/)
  and [isort](https://pycqa.github.io/isort/)

- [the Google Markdown style guide](https://google.github.io/styleguide/docguide/style.html),
  but with a more traditional 70-character line limit

- [the Home Assistant YAML style guide](https://developers.home-assistant.io/docs/documenting/yaml-style-guide/)

For actions:

- Name the file `actions.yaml`, not `actions.yml`.

- Specify top-level keys in the order `name`, `description`, `inputs`,
  `runs`, and `outputs`.  Group the `name` and `description` keys.
  Put a blank line between the rest.

- Name each action or step with a short sentence in the imperative
  mood that succinctly explains what it does.  Format names using
  plain text.

- Describe each action or step in detail.  Format descriptions using
  [MyST Markdown](https://myst-parser.readthedocs.io/).

- Sort inputs first by whether they are required and then
  alphabetically by input name.  For each input, specify in order
  whether it is required, the default value (use `null` or `~` for an
  optional input), and its description.

  The GitHub Actions runner
  [does not check for missing required inputs](https://github.com/actions/runner/issues/1070).
  Doing so is the responsibility of the action itself.

- Sort outputs by name.

Manually create a corresponding entry in the documentation for each
action.  Use [field lists](inv:myst#syntax/fieldlists) for inputs and
outputs, with a horizontal rule at the end of each definition to
separate entries a little without breaking apart the list.  List
inputs and outputs in the same order as in the action, and keep
documentation in sync with the action, input, and output descriptions.

## Commit Messages

This project implements
[Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) using
[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/):

- Please use English in commit messages.

- The first line of the commit message **SHOULD** be at most 100
  characters, while the rest of the commit message **SHOULD** be
  wrapped at column 70.

- The commit description **SHOULD** be an imperative sentence that
  summarizes the changes, with the starting verb in lower case and no
  ending punctuation.

- The commit type **MUST** be one of {term}`build`, {term}`chore`,
  {term}`ci`, {term}`docs`, {term}`feat`, {term}`fix`, {term}`perf`,
  {term}`style`, {term}`refactor`, or {term}`test`.

## Commit Scopes

An atomic commit can alter multiple files.  For example, an interface
change would require modifications the class definitions, method
calls, and property references throughout the codebase.  Per
_Conventional Commits_, a commit scope is an **OPTIONAL**
abbreviation, acronym, codename, or keyword that provides additional
context to reviewers by naming the essential component of the change.

A commit's scope **SHOULD** be the name of the action, e.g.,
`pre-commit`.  Changes covering multiple scopes or changes not
specific to one scope **MUST NOT** specify a scope.

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
