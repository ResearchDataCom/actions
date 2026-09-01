selector_to_html = {"a[href=\"#submodules\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Submodules<a class=\"headerlink\" href=\"#submodules\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#module-docs\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-docs\" title=\"docs\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">docs</span></code></a><a class=\"headerlink\" href=\"#module-docs\" title=\"Link to this heading\">#</a></h1><p>Project documentation, rendered using Sphinx.</p>", "a[href=\"docs.conf.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-docs.conf\" title=\"docs.conf\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">docs.conf</span></code></a><a class=\"headerlink\" href=\"#module-docs.conf\" title=\"Link to this heading\">#</a></h1><p>Configure Sphinx.</p>"}
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
