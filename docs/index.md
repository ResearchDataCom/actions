---
sd_hide_title: True
---
% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

# Overview

::::{grid}
:reverse:
:gutter: 3 4 4 4
:margin: 1 2 1 2

:::{grid-item}
:columns: 12 4 4 4

```{image} _static/logo-square.svg
:width: 200px
:class: sd-m-auto
:name: landing-page-logo
```

:::

:::{grid-item}
:columns: 12 8 8 8
:child-align: justify
:class: sd-fs-5

```{rubric} RDCT Actions Library
```

Simplify project release engineering with composite actions that
feature privilege separation, automate testing, facilitate
reproducible builds, support matrix strategies, and mitigate supply
chain attacks.

````{div} sd-d-flex-row

```{button-ref} intro
:ref-type: doc
:color: primary
:class: sd-rounded-pill sd-mr-3

Get Started
```

```{button-ref} roadmap
:ref-type: doc
:color: secondary
:class: sd-rounded-pill

Learn More
```

````

:::

::::

---

## Conventions

:::{admonition} Guidance

Interpret the key words **MUST**, **MUST NOT**, **REQUIRED**,
**SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**,
**MAY**, and **OPTIONAL** as described in
[RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

:::

Authoritative guidance using these key words appear in admonitions
titled "Guidance", like above.  An explanation of the rationale for
the rule plus supporting material appears after in separate
paragraphs, like this.  Usually, each rule falls under its own
subheading, which facilitates cross-referencing.  Top-level headings
provide a content summary or a quick reference.

## Scope

Research Data and Communication Technologies (RDCT) uses this library
in the development and operation of accredited, validated systems for
government, for research and education, and for commerce.  This is not
limited to pure software engineering and can include, for example,
documentation or system integrations.

## Audience

As part of RDCT's commitment to the public benefit, this advances the
state of the art by giving the general public ready access to the
free/libre/open source technologies and techniques the company uses to
securely lint, test, release, build, publish, deploy, and document a
variety of projects.

## Authoring

This document is written using
[MyST Markdown](https://myst-parser.readthedocs.io/), a strict
superset of the
[CommonMark syntax specification](https://spec.commonmark.org/) that
adds features focused on scientific and technical documentation
authoring.  Markdown is specifically designed to be readable across
multiple devices in a variety of formats without requiring an online
Internet connection.  Formatting, collaborative editing, and
publishing follows the same standards and practices described herein.

## Structure

This document contains three major sections.  The frontmatter
introduces the project.  The main body of the work explains how to use
the composite actions included in this release of the project.
Appendices organize key reference materials.

```{toctree}
:hidden:

intro
roadmap
charter
contributing
```

```{toctree}
:hidden:
:caption: General Purpose

pre-commit
cz-bump
publish-github
sphinx-build
publish-ghpages
```

```{toctree}
:hidden:
:caption: OpenTofu

opentofu-freeze
```

```{toctree}
:hidden:
:caption: Python

python-freeze
python-test
python-build
```

```{toctree}
:hidden:
:caption: Miscellaneous

fixup-act
setup-bashbrew
```

```{toctree}
:hidden:
:caption: Appendices

bibliography
credits
```
