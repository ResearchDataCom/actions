# GitHub Actions Workflows

Simplify project release engineering with actions that feature
privilege separation, automate testing, facilitate reproducible
builds, support matrix strategies, and mitigate supply chain attacks.

> [!NOTE]
>
> Workflows in other private repositories in this organization
> **MUST** be able to access this repository.  For more information,
> refer to
> [Sharing actions and workflows from your private repository](https://docs.github.com/en/actions/how-tos/reuse-automations/share-across-private-repositories).

[_Good DevOps Practice_](https://github.com/ResearchDataCom/good-devops-practice)
describes the underlying methodology and recommended tooling in
greater detail.  For an example of how to use these in GitHub Actions
workflows, refer to the
[python-template continuous integration (CI) workflow](https://github.com/ResearchDataCom/good-devops-practice/blob/main/python-template/%7B%7B%20cookiecutter.package_slug%20%7D%7D/.github/workflows/ci.yaml).

## Available Actions

Actions are listed in alphabetical order.  Refer to the linked action
definitions for additional details.

<dl>

<dt><a href="cz-bump/action.yaml">cz-bump</a></dt>
<dd>Determines the next version number, updates project metadata, and
tags the new release; requires <code>contents: write</code>
permissions.</dd>

<dt><a href="pre-commit/action.yaml">pre-commit</a></dt>
<dd>Checks code syntax/style using the configured pre-commit
hooks.</dd>

<dt><a href="opentofu-freeze/action.yaml">opentofu-freeze</a></dt>
<dd>Generates dependency pins for OpenTofu modules.</dd>

<dt><a href="publish-github/action.yaml">publish-github</a></dt>
<dd>Retrieves build artifacts and uploads them to the corresponding
GitHub release; requires <code>contents: write</code>
permissions.</dd>

<dt><a href="python-freeze/action.yaml">python-freeze</a></dt>
<dd>Generates dependency pins for Python projects.</dd>

<dt><a href="python-test/action.yaml">python-test</a></dt>
<dd>Runs pytest via GNU Make.</dd>

<dt><a href="python-build/action.yaml">python-build</a></dt>
<dd>Builds a Python distribution via GNU Make and stores the results
in a workflow artifact.</dd>

</dl>

## References

[GitHub Actions Variables Reference](https://docs.github.com/en/actions/reference/workflows-and-actions/variables)

[Migrate Git from SHA-1 to a stronger hash function](https://git-scm.com/docs/hash-function-transition)

[The Right Way to Handle Permissions in GitHub Actions](https://shreyapohekar.com/blogs/the-right-way-to-handle-permissions-in-github-actions-a-practical-guide-to-staying-secure/)

[Running variations of jobs in a workflow](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations)

[Securing GitHub Actions Workflows](https://wellarchitected.github.com/library/application-security/recommendations/actions-security/)

["Specifying Revisions" in the `git rev-parse` command documentation](https://git-scm.com/docs/git-rev-parse#_specifying_revisions)

[Status of Python versions](https://devguide.python.org/versions/)

["Using third-party actions" in the GitHub Actions secure use reference](https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions)

[We should all be using dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns)
