## v2.2.0 (2026-06-02)

### Bug Fixes

- skip release artifact downloads in selected cases
- **cz-bump**: include hidden files in the release artifact
- cache pinned dependencies
- **publish-github**: publish a change log fragment by default
- update browser-actions/setup-chrome to v2.1.2
- update actions/create-github-app-token to v3.2.0
- update opentofu/setup-opentofu to v2.0.1

### New Features

- define common Sphinx CI workflows

## v2.1.2 (2026-04-29)

### Bug Fixes

- update rhysd/actionlint to v1.7.12
- update commitizen-tools/commitizen to v4.13.10
- update de-vri-es/setup-git-credentials to v2.2.0
- update actions/create-github-app-token to v3.1.1
- update actions/cache to v5.0.5
- update actions/upload-artifact to v7.0.1
- **python-test**: force Selenium to use the Chrome version that matches ChromeDriver

## v2.1.1 (2026-03-31)

### Bug Fixes

- **pre-commit**: enable Python dependency caching only for Python projects

## v2.1.0 (2026-03-30)

### New Features

- **opentofu-freeze**: pin OpenTofu module dependencies

### Refactoring

- standardize workflow file extensions
- **python-freeze**: control pip-tools' behavior via a configuration file

## v2.0.1 (2026-03-28)

### Bug Fixes

- **pre-commit**: give pinact read-only access to private workflows

## v2.0.0 (2026-03-28)

### BREAKING CHANGE

- This separates language-specific dependency pinning
  from linter installation, configuration, and execution.

### Bug Fixes

- **python-build**: preserve the directory structure of build artifacts
- update the default Python version to 3.13
- mitigate supply chain attacks by pinning actions to commit objects

### New Features

- **pre-commit**: run linters from a dedicated common workflow

## v1.0.0 (2026-03-20)

### Bug Fixes

- mark required inputs and their default values
- **cz-bump**: correct the output release tag

### New Features

- control the generation and naming of changelog fragments
- define common Python CI workflows
