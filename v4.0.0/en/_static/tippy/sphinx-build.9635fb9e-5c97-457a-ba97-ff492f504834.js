selector_to_html = {"a[href=\"#inputs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Inputs<a class=\"headerlink\" href=\"#inputs\" title=\"Link to this heading\">#</a></h2><h3>Deprecations<a class=\"headerlink\" href=\"#deprecations\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#sphinx-build\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">sphinx-build<a class=\"headerlink\" href=\"#sphinx-build\" title=\"Link to this heading\">#</a></h1><p>Generate versioned documentation in multiple formats from Sphinx\nsources via GNU Make, and then store the results in a\n<a class=\"reference external\" href=\"https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts\">GitHub Actions workflow artifact</a>,\nan immutable archive, for use by subsequent publish actions.  This\ninstalls Python via\n<a class=\"reference external\" href=\"https://github.com/actions/setup-python\">actions/setup-python</a>.  The\nmakefile targets <code class=\"docutils literal notranslate\"><span class=\"pre\">build-deps</span></code> (which runs as the superuser) and <code class=\"docutils literal notranslate\"><span class=\"pre\">docs</span></code>\nhandle any remaining build dependencies.</p>", "a[href=\"#deprecations\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Deprecations<a class=\"headerlink\" href=\"#deprecations\" title=\"Link to this heading\">#</a></h3>"}
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
