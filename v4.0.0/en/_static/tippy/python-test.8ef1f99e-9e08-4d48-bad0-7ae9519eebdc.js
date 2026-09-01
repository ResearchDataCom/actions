selector_to_html = {"a[href=\"#inputs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Inputs<a class=\"headerlink\" href=\"#inputs\" title=\"Link to this heading\">#</a></h2><h3>Deprecations<a class=\"headerlink\" href=\"#deprecations\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#deprecations\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Deprecations<a class=\"headerlink\" href=\"#deprecations\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#python-test\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">python-test<a class=\"headerlink\" href=\"#python-test\" title=\"Link to this heading\">#</a></h1><p>Run tests via GNU Make.  This action installs Python along with\nmatching versions of Google Chrome and ChromeDriver for use with\nSelenium.  The makefile targets <code class=\"docutils literal notranslate\"><span class=\"pre\">build-deps</span></code> (which runs as the\nsuperuser) and <code class=\"docutils literal notranslate\"><span class=\"pre\">test</span></code> handle other test dependencies.</p>"}
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
