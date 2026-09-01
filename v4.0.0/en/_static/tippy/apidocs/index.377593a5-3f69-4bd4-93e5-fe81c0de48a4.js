selector_to_html = {"a[href=\"#api-reference\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">API Reference<a class=\"headerlink\" href=\"#api-reference\" title=\"Link to this heading\">#</a></h1><p>This page contains auto-generated API reference documentation <a class=\"footnote-reference brackets\" href=\"#f1\" id=\"id1\" role=\"doc-noteref\"><span class=\"fn-bracket\">[</span>1<span class=\"fn-bracket\">]</span></a>.</p>", "a[href=\"docs/docs.conf.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-docs.conf\" title=\"docs.conf\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">docs.conf</span></code></a><a class=\"headerlink\" href=\"#module-docs.conf\" title=\"Link to this heading\">#</a></h1><p>Configure Sphinx.</p>", "a[href=\"#f1\"]": "<aside class=\"footnote brackets\" id=\"f1\" role=\"doc-footnote\">\n<span class=\"label\"><span class=\"fn-bracket\">[</span><a href=\"#id1\" role=\"doc-backlink\">1</a><span class=\"fn-bracket\">]</span></span>\n<p>Created with <a class=\"reference external\" href=\"https://github.com/chrisjsewell/sphinx-autodoc2\">sphinx-autodoc2</a></p>\n</aside>", "a[href=\"docs/docs.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference internal\" href=\"#module-docs\" title=\"docs\"><code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">docs</span></code></a><a class=\"headerlink\" href=\"#module-docs\" title=\"Link to this heading\">#</a></h1><p>Project documentation, rendered using Sphinx.</p>"}
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
