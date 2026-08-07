% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

% NOTE: Keep documentation in sync with publish-ghpages/action.yaml.

# publish-ghpages

> Publish documentation on GitHub Pages.

Retrieve a project's publication-ready documentation from GitHub
Actions artifact storage, and then upload it to project's `gh-pages`
branch.  The calling GitHub Actions workflow job **MUST** have
permission to
[create or update file contents](https://docs.github.com/en/rest/repos/contents)
(`contents: write`).

## Inputs

:artifact-path: (***required***; default value: `"build/docs"`)

  Publish the contents of this directory using GitHub Pages.

  ---

:gh-token: (***required***; default value: `${{ github.token }}`)

  Provide or override the
  [API token used by the GitHub Actions workflow](https://docs.github.com/actions/concepts/security/github_token).

  ---

:cname: (default value: `null`)

  Set a
  [custom domain](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)
  for the GitHub Pages site.

  ---

:skip-artifact-downloads: (default value: `false`)

  Set this to `true` when managing the contents of the runner's
  working directory outside of this action.
