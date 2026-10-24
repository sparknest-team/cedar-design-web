import { translateNavigation } from './i18n/navigation'
import { hopeTheme } from 'vuepress-theme-hope'

import { zhNavBar } from './configs/navbar/index'
import { zhSideBar } from './configs/sidebar/index'

const hostname = process.env.HOSTNAME ?? 'https://xxx.com/pages/cedar-design-web'

export default hopeTheme(
  {
    hostname,

    author: {
      name: '孟帅、吴甲明',
    },

    iconAssets: 'fontawesome-with-brands',

    logo: 'https://xxx.com/pe-fe-statics/cedar/logo.png',

    repo: 'https://xxx/pe.frontend/cedar/cedar-design-web',

    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Language', 'Repo', 'Search'],
    },

    // docsDir: 'demo/theme-docs/src',

    locales: {
      '/en/': {
        selectLanguageName: 'English',
        navbar: translateNavigation(zhNavBar),
        sidebar: { '/en/': translateNavigation((zhSideBar as any)['/']) },
        prevLink: false, nextLink: false,
      },
      '/': {
        selectLanguageName: '简体中文',
        // Navbar
        navbar: zhNavBar,

        // Sidebar
        sidebar: zhSideBar,

        prevLink: false,
        nextLink: false,
      },
    },

    plugins: {
      redirect: { switchLocale: false },
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
      highlighter: { type: 'prismjs', themes: { light: 'one-light', dark: 'one-dark' } },
      codeTabs: true,
      tabs: true,
    },
  },
  { custom: true },
)
