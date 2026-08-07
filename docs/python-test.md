% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

% NOTE: Keep documentation in sync with python-test/action.yaml.

# python-test

> Test Python code.

:::{admonition} Guidance

Developers **MUST** run this action in a dedicated, unprivileged
workflow job to limit the risk of a supply chain attack.

:::

Run tests via GNU Make.  This action installs Python along with
matching versions of Google Chrome and ChromeDriver for use with
Selenium.  The makefile targets `build-deps` (which runs as the
superuser) and `test` handle other test dependencies.

## Inputs

:python-version: (***required***, default value: `"3.13"`)

  Specify the version of Python with which to run pytest.

  ---

:skip-artifact-downloads: (default value: `false`)

  Set this to `true` when managing the contents of the runner's
  working directory outside of this action.

### Deprecations

:::{important}

The following inputs are no longer used and will be removed in a
future release.

:::

:requirements: This input will be removed after 2026-12-31.  The
  action now downloads all available workflow artifacts by default.
  Use the `skip-artifact-downloads` input to change this behavior.
