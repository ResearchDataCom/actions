% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

% NOTE: Keep documentation in sync with python-freeze/action.yaml.

# python-freeze

> Pin Python project dependencies.

Pin dependencies and store them in a
[GitHub Actions workflow artifact](https://docs.github.com/actions/concepts/workflows-and-actions/workflow-artifacts),
an immutable archive, which facilitates reproducible builds.  This
action assumes that Python is installed and that private repository
access has been established (if needed), e.g., as if run after the
[pre-commit](pre-commit) action in the same workflow job.

To update the pinned version of pip-compile, remove
[python-freeze/requirements.txt](github:python-freeze/requirements.txt)
and regenerate it with the command `pip-compile --generate-hashes
--allow-unsafe --uploaded-prior-to=P7D`, run from the
[python-freeze/](github:python-freeze/) directory.

## Inputs

:artifact-name: (***required***, default-value:
  `"pip-compile-artifacts"`)

  This names the workflow artifact containing the dependency pins.
