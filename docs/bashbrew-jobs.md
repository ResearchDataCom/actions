% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

% NOTE: Keep documentation in sync with bashbrew-jobs/action.yaml.

# bashbrew-jobs

> Generate Docker container image build jobs.

Output a GitHub Actions
[matrix strategy](https://docs.github.com/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations)
that builds and tests Docker Official Images Library-style container
images.

## Outputs

:strategy: This action outputs a single-dimension matrix strategy in
  JSON format with the following properties:

  `matrix.name`
  : The container's version number, e.g., "2.3.1".

  `matrix.os`
  : The target GitHub Actions runner, e.g., "ubuntu-latest".

  `matrix.runs.prepare`
  : The run-time environment setup process.

  `matrix.runs.pull`
  : Build dependencies to be downloaded.

  `matrix.runs.build`
  : How to build and tag the container image.

  `matrix.runs.history`
  : These commands pretty print the container image's build history
    for later review.

  `matrix.runs.test`
  : The container image test procedure.

  `matrix.runs.images`
  : Lists the image tag(s) created by this job.
