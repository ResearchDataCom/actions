selector_to_html = {"a[href=\"#outputs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Outputs<a class=\"headerlink\" href=\"#outputs\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#setup-bashbrew\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">setup-bashbrew<a class=\"headerlink\" href=\"#setup-bashbrew\" title=\"Link to this heading\">#</a></h1><p>Install the\n<a class=\"reference external\" href=\"https://docs.docker.com/docker-hub/repos/manage/trusted-content/official-images/\">Docker Official Images</a>\nbuild tools.</p>"}
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
