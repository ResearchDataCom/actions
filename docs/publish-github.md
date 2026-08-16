% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

% NOTE: Keep documentation in sync with publish-github/action.yaml.

# publish-github

> Publish the release on GitHub.

Retrieve a release's source and binary distributions from GitHub
Actions artifact storage, and then upload them to the
[project's release page](https://docs.github.com/en/repositories/releasing-projects-on-github).
The calling GitHub Actions workflow job **MUST** have permission to
[create or update file contents](https://docs.github.com/en/rest/repos/contents)
(`contents: write`).

## Inputs

:tag: (***required***)

  Specify the version tag of the release, e.g., `"v1.2.3"`.

  ---

:artifact-paths: (default value: `""`)

  List the files to upload as part of the release, separated by
  commas; supports globbing.  For example,
  `"release.tar.gz,foo/*.txt"` would upload `release.tar.gz` plus all
  of the text files in the `foo/` directory as part of the release.

  ---

:changelog-fragment: (default value: `"body.md"`)

  Publish the Markdown-formatted release notes for this version found
  in the named file.  Do not specify the name of the file containing
  the full release notes, `CHANGELOG.md`.  Disable this behavior by
  setting
  [a falsy value](https://docs.github.com/actions/reference/workflows-and-actions/expressions)
  (`false`, `0`, `-0`, `""`, `''`, `null`, `~`).

  ---

:skip-artifact-downloads: Set this to `true` when managing the
  contents of the runner's working directory outside of this action.
