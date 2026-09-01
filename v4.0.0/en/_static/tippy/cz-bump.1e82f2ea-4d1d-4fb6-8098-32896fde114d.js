selector_to_html = {"a[href=\"#inputs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Inputs<a class=\"headerlink\" href=\"#inputs\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#outputs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Outputs<a class=\"headerlink\" href=\"#outputs\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#cz-bump\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">cz-bump<a class=\"headerlink\" href=\"#cz-bump\" title=\"Link to this heading\">#</a></h1><p>Determine the next version number, update project metadata, and tag\nthe new release.  Store the new release in a\n<a class=\"reference external\" href=\"https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts\">GitHub Actions workflow artifact</a>,\nan immutable archive, for use by subsequent build and publish actions.\nThe calling GitHub Actions workflow job <strong>MUST</strong> have permission to\n<a class=\"reference external\" href=\"https://docs.github.com/en/rest/repos/contents\">create or update file contents</a>\n(<code class=\"docutils literal notranslate\"><span class=\"pre\">contents:</span> <span class=\"pre\">write</span></code>).</p>"}
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
