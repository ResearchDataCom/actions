<!---

This work is marked CC0 1.0 Universal.  To view a copy of this mark,
visit https://creativecommons.org/publicdomain/zero/1.0/.

--->

# Contribution Guidelines

This project implements
[Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) using
[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).
The project uses
[Git feature (topic) branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
to maintain a [linear commit history](https://archive.is/VpWTs).
Changes must be self-contained.  Please rebase changes on the latest
HEAD of the main branch before submitting them for review as a
[GitHub pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests).

Mitigate supply chain attacks by
[pinning third-party actions](https://github.com/suzuki-shunsuke/pinact)
to Git commit object references.  Unlike symbolic references like
`v1.2.3` or `main`, Git commit hashes are immutable barring a crack of
the underlying hash function (SHA-1 by default).  For Python packages
like [pre-commit](https://pre-commit.com/), pin both the version and
the SHA-256 hash of the package plus all of its dependencies using
[pip-compile](https://pip-tools.rtfd.io/).  For binaries downloaded
from GitHub Releases like
[pinact](https://github.com/suzuki-shunsuke/pinact), verify artifact
attestations if available or SHA-512 checksums generated out of band.
Periodically update version pins, but ignore releases created within
the last seven (7) days.  When updating the default Python version,
specify the second most recent release, e.g., Python 3.13 if Python
3.14 is the latest release.  Remember to check the release notes for
breaking changes.

A commit's scope **SHOULD** be the name of the action, e.g.,
`pre-commit`.  Changes covering multiple scopes or changes not
specific to one scope **MUST NOT** specify a scope.

### [Refer to the detailed contribution guidelines for more information.](https://docs.rdctdev.us/actions)
