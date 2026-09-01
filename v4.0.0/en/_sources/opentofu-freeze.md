% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.
%
% NOTE: Keep documentation in sync with opentofu-freeze/action.yaml.

# opentofu-freeze

> Pin OpenTofu providers.

Pin OpenTofu providers and store them in a
[GitHub Actions workflow artifact](https://docs.github.com/actions/concepts/workflows-and-actions/workflow-artifacts),
an immutable archive, which facilitates reproducible deployments.
This action assumes that OpenTofu is installed and that private
repository access has been established (if needed), e.g., as if run
after the [pre-commit](pre-commit) action in the same workflow job.

## Inputs

:artifact-name: (***required***, default-value:
  `"tofu-providers-lock-artifacts"`)

  This names the workflow artifact containing the dependency pins.
