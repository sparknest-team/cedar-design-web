import { hopeTheme } from 'vuepress-theme-hope'

import { zhNavBar } from './configs/navbar/index'
import { zhSideBar } from './configs/sidebar/index'

const hostname = process.env.HOSTNAME ?? 'https://xxx.com/pages/cedar-design-web'

export default hopeTheme(
  {
    hostname,

    author: {
      name: 'shuai.meng, jiaming.wu, qinglin.wang',
    },

    iconAssets: 'fontawesome-with-brands',

    logo: 'https://xxx.com/pe-fe-statics/cedar/logo.png',

    repo: 'https://xxx/pe.frontend/cedar/cedar-design-web',

    // docsDir: 'demo/theme-docs/src',

    locales: {
      '/': {
        // Navbar
        navbar: zhNavBar,

        // Sidebar
        sidebar: zhSideBar,

        prevLink: false,
        nextLink: false,
      },
    },

    plugins: {
      photoSwipe: false,
      components: {
        components: ['Badge', 'VPCard'],
      },
      // markdownImage: {
      //   figure: true,
      //   lazyload: true,
      //   size: true,
      // },

      // prismjs: false,
      // markdownMath: true,
      slimsearch: {
        suggestion: false,
      },

      // // All features are enabled for demo, only preserve features you need here
      // mdEnhance: {
      //   align: true,
      //   attrs: true,
      //   // chart: true,
      //   component: true,
      //   demo: true,
      //   // echarts: true,
      //   // flowchart: true,
      //   gfm: true,
      //   include: true,
      //   kotlinPlayground: true,
      //   mark: true,
      //   // markmap: true,
      //   // mermaid: true,
      //   playground: {
      //     presets: ['ts', 'vue', 'unocss'],
      //   },
      //   sandpack: true,
      //   spoiler: true,
      //   stylize: [
      //     {
      //       matcher: 'Recommended',
      //       replacer: ({
      //         tag,
      //       }): {
      //         tag: string
      //         attrs: Record<string, string>
      //         content: string
      //       } | void => {
      //         if (tag === 'em')
      //           return {
      //             tag: 'Badge',
      //             attrs: { type: 'tip' },
      //             content: 'Recommended',
      //           }
      //       },
      //     },
      //   ],
      //   sub: true,
      //   sup: true,
      //   tasklist: true,
      //   vPre: true,
      //   vuePlayground: true,
      // },
    },
    markdown: {
      codeTabs: true,
      tabs: true,
    },
  },
  { custom: true },
)
