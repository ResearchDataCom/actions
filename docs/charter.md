% This work is marked CC0 1.0 Universal.  To view a copy of this mark,
% visit https://creativecommons.org/publicdomain/zero/1.0/.

# Project Charter

Refer to
["Project Charter - Agile Project"](http://web.archive.org/web/20100412014125/http://analytical-mind.com/2009/08/12/project-charter-agile-project/),
["What Should an Agile Project Charter Contain?"](https://www.infoq.com/news/2010/05/agile-project-charter/),
and
["A Guide to the Project Priorities (Prioritization) Matrix"](https://www.indeed.com/career-advice/career-development/project-priorities-matrix)
for additional guidance.

## Vision

> Why do this work?  What challenges do we face?

Ongoing software supply chain attacks like Shai-Hulud highlight the
risks posed by continuous integration and continuous delivery (CI/CD)
tools, which "inherently provide remote code execution as a service,
making them a prime attack vector for malicious actors"
{cite:p}`2026:security`.  However, securing CI/CD workflows across
multiple projects introduces significant maintenance costs for small
software engineering teams.  By centralizing workflow job definitions,
existing linters can automate updates to CI/CD workflows, reducing
much (but not all) of those costs.

## Objectives

> What will this project do?  What's our mission?

This project aims to reduce teams' administrative overhead by
packaging an internally consistent set of GitHub Actions workflow jobs
as composite actions {cite:p}`2026:tutorial`.

## Success Criteria

> What effects or outcomes should this project have?

- Publish well-documented composite actions for use across mulitple
  projects with similar build tools, namely GNU Make.

- Promote current good software engineering techniques like
  test-driven development, semantic versioning, reproducible builds,
  and system component analysis.

- Facilitate the development of project templates that simplify the
  application of these standards and practices to new work.

## Project Priorities

> How is this project constrained?

|                                 | Time<br>(Schedule) | Cost<br>(Budget) | Scope<br>(Boundary) |
|--------------------------------:|--------------------|------------------|---------------------|
|   Constrain<br>(Not negotiable) |                    | ✅               |                     |
| Accept<br>(Difficult to Change) |                    |                  | ✅                  |
|         Enhance<br>(Negotiable) | ✅                 |                  |                     |

## Risks

> What might make the project exceed a constraint or alter a priority?

This project is not an immediate priority of any of the current
contributors, so the required development usally happens when it
directly supports funded work.

## Stakeholders

> Who depends on the project's success?

This advances the state of the art by giving the general public ready
access to the free/libre/open source technologies and techniques
members of the Research Data and Communication Technologies
Engineering team uses to securely lint, test, release, build, publish,
deploy, and document a variety of projects.
