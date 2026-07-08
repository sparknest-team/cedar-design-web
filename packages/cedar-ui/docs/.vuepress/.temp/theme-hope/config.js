import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.61_2wxjsy5rzx223m47kjpf455o3i/node_modules/vuepress-theme-hope/lib/client/export.js";

import { defineCatalogInfoGetter } from "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.63_typescript@4.9.5_vuepress@2.0.0-rc.18_@vuepress+bundler-_khvvbdulhmfek7lr6o6ij4ql5e/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"

import "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.63_typescript@4.9.5_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0_7g7k5mrtd2og6uawderyo3zcfi/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.63_typescript@4.9.5_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0_7g7k5mrtd2og6uawderyo3zcfi/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.63_typescript@4.9.5_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0_7g7k5mrtd2og6uawderyo3zcfi/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.61_2wxjsy5rzx223m47kjpf455o3i/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
