% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

% NOTE: Keep documentation in sync with pre-commit/action.yaml.

# pre-commit

> Lint code.

:::{admonition} Guidance

Developers **MUST** run this action in a dedicated, unprivileged
workflow job to limit the risk of a supply chain attack.

:::

Check code syntax/style using the configured
[pre-commit](https://pre-commit.com/) hooks.  This action installs
several common linter dependencies, including
[OpenTofu](https://opentofu.org/),
[pinact](https://github.com/suzuki-shunsuke/pinact/), and
[Trivy](https://trivy.dev/).

To update the pinned version of pre-commit, remove
[pre-commit/requirements.txt](github:pre-commit/requirements.txt) and
regenerate it with the command `pip-compile --generate-hashes
--allow-unsafe --uploaded-prior-to=P7D`, run from the
[pre-commit/](github:pre-commit/) directory.  Update the other
non-action version pins in
[pre-commit/actions.yaml](github:pre-commit/actions.yaml).

## Inputs

:python-version: (***required***, default value: `"3.13"`)

  Specify the version of Python with which to run pre-commit.

  ---

:access-app-id: (default value: `null`)

  Provide the app ID of a GitHub App used to access private
  repositories.  When
  [registering the app](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app)
  in the organization, disable webhook functionality and grant
  **read-only**
  [repository permissions for "Contents"](https://docs.github.com/en/rest/authentication/permissions-required-for-github-apps#repository-permissions-for-contents).
  After completing app registration,
  [generate a private key](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)
  and install the app, giving it access to selected repositories as
  appropriate.

  ---

:access-key: (default value: `null`)

  Log into the GitHub App used to access private repositories with
  this
  [private key](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps).

  ---

:owner: (default value: `null`)

  Access private repositories owned by this GitHub account or
  organization, overriding
  [github.repository_owner](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context).
