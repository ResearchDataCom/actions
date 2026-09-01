% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.
%
% NOTE: Keep documentation in sync with cz-bump/action.yaml.

# cz-bump

> Release code using commitizen.

Determine the next version number, update project metadata, and tag
the new release.  Store the new release in a
[GitHub Actions workflow artifact](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts),
an immutable archive, for use by subsequent build and publish actions.
The calling GitHub Actions workflow job **MUST** have permission to
[create or update file contents](https://docs.github.com/en/rest/repos/contents)
(`contents: write`).

## Inputs

:artifact-name: (default value: `"release-artifacts"`)

  This names the workflow artifact containing the release.  Disable
  artifact creation by setting
  [a falsy value](https://docs.github.com/actions/reference/workflows-and-actions/expressions)
  (`false`, `0`, `-0`, `""`, `''`, `null`, `~`).

  ---

:changelog-fragment: (default value: `"body.md"`)

  The action will save Markdown-formatted release notes for just the
  new version in this file, which will be included in the workflow
  artifact containing the release.  Do not specify the name of the
  file containing the full release notes, `CHANGELOG.md`.  Disable
  changelog fragment generation by setting
  [a falsy value](https://docs.github.com/actions/reference/workflows-and-actions/expressions)
  (`false`, `0`, `-0`, `""`, `''`, `null`, `~`).  Note that this only
  affects the generation of the fragment, not `CHANGELOG.md`.

## Outputs

:release: This Boolean value signals whether the action tagged a new
  release.

  ---

:tag: This Git tag corresponds to the new release.
