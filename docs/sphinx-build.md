% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

% NOTE: Keep documentation in sync with sphinx-build/action.yaml.

# sphinx-build

> Document code with Sphinx.

:::{admonition} Guidance

Developers **MUST** run this action in a dedicated, unprivileged
workflow job to limit the risk of a supply chain attack.

:::

Generate versioned documentation in multiple formats from Sphinx
sources via GNU Make, and then store the results in a
[GitHub Actions workflow artifact](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts),
an immutable archive, for use by subsequent publish actions.  This
installs Python via
[actions/setup-python](https://github.com/actions/setup-python).  The
makefile targets `build-deps` (which runs as the superuser) and `docs`
handle any remaining build dependencies.

## Inputs

:file-that-does-not-exist: (***required***; default value:
  `"96AD5641-7C9D-4E65-81B4-F0889D389D76.does-not-exist"`)

  :::{admonition} Guidance

  Developers **MUST NOT** create this file to avoid a false positive
  should documentation building fail.

  :::

  This non-existent file forces
  [actions/upload-artifact](https://github.com/actions/upload-artifact)
  to preserve the directory structure of the workflow artifact
  containing the built documentation;
  cf. https://github.com/actions/upload-artifact/issues/174#issuecomment-2878874192.

  ---

:python-version: (***required***, default value: `"3.13"`)

  Specify the version of Python with which to run Sphinx.

  ---

:artifact-name: (default value: `"docs-artifacts"`)

  This names the workflow artifact containing the built documentation.
  Disable artifact creation by setting
  [a falsy value](https://docs.github.com/actions/reference/workflows-and-actions/expressions)
  (`false`, `0`, `-0`, `""`, `''`, `null`, `~`).

  ---

:skip-artifact-downloads: (default value: `false`)

  Set this to `true` when managing the contents of the runner's
  working directory outside of this action.

### Deprecations

:::{important}

The following inputs are no longer used and will be removed in a
future release.

:::

:release: This input will be removed after 2026-12-31.  The action now
  downloads all available workflow artifacts by default.  Use the
  `skip-artifact-downloads` input to change this behavior.

:requirements: This input will be removed after 2026-12-31.  The
  action now downloads all available workflow artifacts by default.
  Use the `skip-artifact-downloads` input to change this behavior.
