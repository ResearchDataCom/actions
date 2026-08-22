% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.
%
% NOTE: Keep documentation in sync with bashbrew-jobs/action.yaml.
% Synchronize the descriptions of the `matrix.runs` properties in the
% `strategy` output with the corresponding input descriptions of the
% bashbrew-build action, as well.

# bashbrew-jobs

> Generate Docker container image build jobs.

Output a GitHub Actions
[matrix strategy](https://docs.github.com/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations)
that builds and tests Docker Official Images Library-style container
bimages.

## Outputs

:strategy: This action outputs a single-dimension matrix strategy in
  JSON format.  Decode this output with
  [`fromJSON()`](https://docs.github.com/actions/reference/workflows-and-actions/expressions#fromjson)
  and assign the result to
  [`jobs.<job_id>.strategy`](https://docs.github.com/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategy).
  Reference the following
  [`matrix` context](https://docs.github.com/actions/reference/workflows-and-actions/contexts#matrix-context)
  properties in the job definition.

  `matrix.name`
  : This provides container's version number, e.g., `"2.3.1"`.  Assign
    its value to
    [`jobs.<job_id>.name`](https://docs.github.com/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idname).

  `matrix.os`
  : This identifies the target GitHub Actions runner, e.g.,
    `"ubuntu-latest"`.  Assign its value to
    [`jobs.<job_id>.runs-on`](https://docs.github.com/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idruns-on).

  The `matrix.runs` property specifies each step of the container
  image build/test procedure.  This simplifies monitoring and lets
  developers selectively override the process.  Set the inputs of
  [](bashbrew-build) to the corresponding properties below.

  `matrix.runs.prepare`
  : This sets up the run-time environment.

  `matrix.runs.pull`
  : This specifies the build dependencies to download.

  `matrix.runs.build`
  : Build and tag the container image with these commands.

  `matrix.runs.history`
  : These commands pretty print the container image's build history
    for later review.

  `matrix.runs.test`
  : This procedure tests the container image.

  `matrix.runs.images`
  : This lists the image tag(s) created by this job.
