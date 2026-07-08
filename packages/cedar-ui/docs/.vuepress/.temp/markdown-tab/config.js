import { CodeTabs } from "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.63_markdown-it@14.3.0_typescript@4.9.5_vuepress@2.0.0-_p2xh4osgsgw6qy47vwwpqsyazu/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.63_markdown-it@14.3.0_typescript@4.9.5_vuepress@2.0.0-_p2xh4osgsgw6qy47vwwpqsyazu/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/mengshuai/github-ui/cedar/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.63_markdown-it@14.3.0_typescript@4.9.5_vuepress@2.0.0-_p2xh4osgsgw6qy47vwwpqsyazu/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
