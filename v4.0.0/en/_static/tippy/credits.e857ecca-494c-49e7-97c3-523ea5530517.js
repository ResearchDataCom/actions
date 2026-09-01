selector_to_html = {"a[href=\"#coding-with-thomas\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"reference external\" href=\"https://www.codingwiththomas.com\">Coding with Thomas</a><a class=\"headerlink\" href=\"#coding-with-thomas\" title=\"Link to this heading\">#</a></h2><p>Thomas Sedlmair\u2019s article\n<a class=\"reference external\" href=\"https://www.codingwiththomas.com/blog/my-sphinx-best-practice-for-a-multiversion-documentation-in-different-languages\">\u201cMy Sphinx Best Practice Guide for Multi-version Documentation in Different Languages\u201d</a>\ninspired this project\u2019s versioned documentation build process.</p>", "a[href=\"#credits\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Credits<a class=\"headerlink\" href=\"#credits\" title=\"Link to this heading\">#</a></h1><p>This work is marked CC0 1.0 Universal.  To view a copy of this mark,\nvisit <a class=\"reference external\" href=\"https://creativecommons.org/publicdomain/zero/1.0/\">https://creativecommons.org/publicdomain/zero/1.0/</a>.</p>"}
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
