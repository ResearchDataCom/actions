selector_to_html = {"a[href=\"#opentofu-freeze\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">opentofu-freeze<a class=\"headerlink\" href=\"#opentofu-freeze\" title=\"Link to this heading\">#</a></h1><p>Pin OpenTofu providers and store them in a\n<a class=\"reference external\" href=\"https://docs.github.com/actions/concepts/workflows-and-actions/workflow-artifacts\">GitHub Actions workflow artifact</a>,\nan immutable archive, which facilitates reproducible deployments.\nThis action assumes that OpenTofu is installed and that private\nrepository access has been established (if needed), e.g., as if run\nafter the <a class=\"reference internal\" href=\"pre-commit.html\"><span class=\"doc std std-doc\">pre-commit</span></a> action in the same workflow job.</p>", "a[href=\"pre-commit.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">pre-commit<a class=\"headerlink\" href=\"#pre-commit\" title=\"Link to this heading\">#</a></h1><p>Check code syntax/style using the configured\n<a class=\"reference external\" href=\"https://pre-commit.com/\">pre-commit</a> hooks.  This action installs\nseveral common linter dependencies, including\n<a class=\"reference external\" href=\"https://opentofu.org/\">OpenTofu</a>,\n<a class=\"reference external\" href=\"https://github.com/suzuki-shunsuke/pinact/\">pinact</a>, and\n<a class=\"reference external\" href=\"https://trivy.dev/\">Trivy</a>.</p><p>To update the pinned version of pre-commit, remove\n<a class=\"github reference external\" href=\"https://github.com/ResearchDataCom/actions/blob/v4.0.0/pre-commit/requirements.txt#\">pre-commit/requirements.txt</a> and\nregenerate it with the command <code class=\"docutils literal notranslate\"><span class=\"pre\">pip-compile</span> <span class=\"pre\">--generate-hashes</span> <span class=\"pre\">--allow-unsafe</span> <span class=\"pre\">--uploaded-prior-to=P7D</span></code>, run from the\n<a class=\"github reference external\" href=\"https://github.com/ResearchDataCom/actions/blob/v4.0.0/pre-commit/#\">pre-commit/</a> directory.  Update the other\nnon-action version pins in\n<a class=\"github reference external\" href=\"https://github.com/ResearchDataCom/actions/blob/v4.0.0/pre-commit/action.yaml#\">pre-commit/action.yaml</a>.</p>", "a[href=\"#inputs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Inputs<a class=\"headerlink\" href=\"#inputs\" title=\"Link to this heading\">#</a></h2>"}
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
