selector_to_html = {"a[href=\"#get-started\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Get Started<a class=\"headerlink\" href=\"#get-started\" title=\"Link to this heading\">#</a></h1><p>For examples of how to apply these actions to new or existing\nprojects, refer to the\n<a class=\"reference external\" href=\"https://github.com/ResearchDataCom/templates\">RDCT Templates Library</a>.</p>"}
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
