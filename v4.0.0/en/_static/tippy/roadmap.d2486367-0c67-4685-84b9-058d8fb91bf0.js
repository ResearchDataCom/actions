selector_to_html = {"a[href=\"#product-roadmap\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Product Roadmap<a class=\"headerlink\" href=\"#product-roadmap\" title=\"Link to this heading\">#</a></h1><p>For the current list of product backlog items, refer to the\n<a class=\"reference external\" href=\"https://github.com/ResearchDataCom/actions/issues?q=is%3Aissue%20state%3Aopen%20type%3AFeature\">issue tracker</a>.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference external image-reference\" href=\"_images/ci-workflow.jpg\"><img alt=\"_images/ci-workflow.jpg\" src=\"_images/ci-workflow.jpg\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Continuous Integration Workflow</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n<div class=\"legend\">\n<p>The RDCT Actions Library, in concert with the build tooling showcased\nby the RDCT Templates Library, implements a process that results in\ntested, documented releases of a variety of projects.</p>\n</div>\n</figcaption>\n</figure>"}
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
