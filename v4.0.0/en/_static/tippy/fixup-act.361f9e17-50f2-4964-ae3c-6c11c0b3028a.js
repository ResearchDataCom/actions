selector_to_html = {"a[href=\"#fixup-act\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">fixup-act<a class=\"headerlink\" href=\"#fixup-act\" title=\"Link to this heading\">#</a></h1><p>Work around the limitations of or workflow compatibility issues with\n<a class=\"reference external\" href=\"https://nektosact.com/\">act</a>, a local GitHub Actions runner.  Guard\ninvocations with <code class=\"docutils literal notranslate\"><span class=\"pre\">if:</span> <span class=\"pre\">${{</span> <span class=\"pre\">env.ACT</span> <span class=\"pre\">}}</span></code>.</p>"}
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
