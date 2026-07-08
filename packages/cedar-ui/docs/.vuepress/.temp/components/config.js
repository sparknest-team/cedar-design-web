import { hasGlobalComponent } from "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.63_typescript@4.9.5_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0_7g7k5mrtd2og6uawderyo3zcfi/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/@vueuse+core@12.8.2_typescript@4.9.5/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.60_sass-embedded@1.100.0_sass@1.101.0_typescript@4.9.5_vu_f5vwvjm2xn5hsbxoflfvlg2ily/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.60_sass-embedded@1.100.0_sass@1.101.0_typescript@4.9.5_vu_f5vwvjm2xn5hsbxoflfvlg2ily/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.60_sass-embedded@1.100.0_sass@1.101.0_typescript@4.9.5_vu_f5vwvjm2xn5hsbxoflfvlg2ily/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.63_typescript@4.9.5_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0_7g7k5mrtd2og6uawderyo3zcfi/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
};
