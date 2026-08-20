<!---

This work is marked CC0 1.0 Universal.  To view a copy of this mark,
visit https://creativecommons.org/publicdomain/zero/1.0/.

--->

# Contribution Guidelines

The project practices [test-driven development](https://tdd.mooc.fi/)
in
[Git feature (topic) branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow),
using
[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
to implement
[Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).
Please maintain a [linear commit history](https://archive.is/VpWTs) by
rebasing self-contained, buildable changes (with updated tests and
documentation) on the latest HEAD of the main branch before submitting
them for review as a
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

Because actions interface with one another (albeit indirectly, via
workflow artifacts or output/input conventions), commit scopes follow
actions' base names, e.g., `pre-commit`, not `actions/pre-commit`, nor
`ResearchDataCom/actions/pre-commit`.

### [Refer to the detailed contribution guidelines for more information.](https://docs.rdctdev.us/actions)
