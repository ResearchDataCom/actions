selector_to_html = {"a[href=\"#objectives\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Objectives<a class=\"headerlink\" href=\"#objectives\" title=\"Link to this heading\">#</a></h2><p>This project aims to reduce teams\u2019 administrative overhead by\npackaging an internally consistent set of GitHub Actions workflow jobs\nas composite actions <span class=\"bibtex-citation\" id=\"id2\">[<a class=\"reference internal\" href=\"bibliography.html#id2\" title=\"GitHub Inc. Creating a composite action. https://docs.github.com/actions/tutorials/create-actions/create-a-composite-action, 2026. Accessed: 2026-08-03.\">5</a>]</span>.</p>", "a[href=\"#stakeholders\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Stakeholders<a class=\"headerlink\" href=\"#stakeholders\" title=\"Link to this heading\">#</a></h2><p>This advances the state of the art by giving the general public ready\naccess to the free/libre/open source technologies and techniques\nmembers of the Research Data and Communication Technologies\nEngineering team uses to securely lint, test, release, build, publish,\ndeploy, and document a variety of projects.</p>", "a[href=\"#success-criteria\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Success Criteria<a class=\"headerlink\" href=\"#success-criteria\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#project-priorities\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Project Priorities<a class=\"headerlink\" href=\"#project-priorities\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#vision\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Vision<a class=\"headerlink\" href=\"#vision\" title=\"Link to this heading\">#</a></h2><p>Ongoing software supply chain attacks like Shai-Hulud highlight the\nrisks posed by continuous integration and continuous delivery (CI/CD)\ntools, which \u201cinherently provide remote code execution as a service,\nmaking them a prime attack vector for malicious actors\u201d\n<span class=\"bibtex-citation\" id=\"id1\">[<a class=\"reference internal\" href=\"bibliography.html#id5\" title=\"Greg Mohler and Kitty Chiu. Securing GitHub Actions workflows. https://learn.github.com/well-architected/application-security/recommendations/actions-security/, July 2026. Accessed: 2026-08-03.\">9</a>]</span>.  However, securing CI/CD workflows across\nmultiple projects introduces significant maintenance costs for small\nsoftware engineering teams.  By centralizing workflow job definitions,\nexisting linters can automate updates to CI/CD workflows, reducing\nmuch (but not all) of those costs.</p>", "a[href=\"#project-charter\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Project Charter<a class=\"headerlink\" href=\"#project-charter\" title=\"Link to this heading\">#</a></h1><p>Refer to\n<a class=\"reference external\" href=\"http://web.archive.org/web/20100412014125/http://analytical-mind.com/2009/08/12/project-charter-agile-project/\">\u201cProject Charter - Agile Project\u201d</a>,\n<a class=\"reference external\" href=\"https://www.infoq.com/news/2010/05/agile-project-charter/\">\u201cWhat Should an Agile Project Charter Contain?\u201d</a>,\nand\n<a class=\"reference external\" href=\"https://www.indeed.com/career-advice/career-development/project-priorities-matrix\">\u201cA Guide to the Project Priorities (Prioritization) Matrix\u201d</a>\nfor additional guidance.</p>", "a[href=\"#risks\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Risks<a class=\"headerlink\" href=\"#risks\" title=\"Link to this heading\">#</a></h2><p>This project is not an immediate priority of any of the current\ncontributors, so the required development usally happens when it\ndirectly supports funded work.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
