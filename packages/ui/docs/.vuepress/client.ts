import { connectComponentLanguage } from './i18n/client'
import { defineClientConfig } from '@vuepress/client'
import './configs/styles/index.scss'
import 'prismjs/themes/prism.css'
import { vLoading } from '../../src/loading'
import { vTooltip } from '../../src/tooltip'
import { themeConfig, docsTheme } from './theme-config'
import { ThemeProvider } from '../../src/theme-provider'
import HopeLayout from 'vuepress-theme-hope/layouts/Layout.js'
import HopeNotFound from 'vuepress-theme-hope/layouts/NotFound.js'
import '../../src/style/index.less'
import '../../src/loading/style'
import '../../src/tooltip/style'
import { defineAsyncComponent, defineComponent, h, onBeforeUnmount, onMounted } from 'vue'
import CedarThemeMenu from './components/CedarThemeMenu.vue'
import ShowcaseOverview from './components/ShowcaseOverview.vue'

const themedLayout = (Layout: any) => defineComponent({
  setup: () => () => h(ThemeProvider, { theme: docsTheme.value, style: { display: 'contents' } }, () => h(Layout)),
})

export default defineClientConfig({
  layouts: { Layout: themedLayout(HopeLayout), NotFound: themedLayout(HopeNotFound) },
  rootComponents: [CedarThemeMenu],
  async enhance({ app, router }) {
    app.component('ShowcaseOverview', ShowcaseOverview)
    app.component('PlatformComparison', defineAsyncComponent(() => import('./components/PlatformComparison.vue')))
    app.component('ComponentComparison', defineAsyncComponent(() => import('./components/ComponentComparison.vue')))
    connectComponentLanguage(router)
    app.directive('loading', vLoading)
    app.directive('tooltip', vTooltip)
  },
  setup() {
    let stopThemeSync: (() => void) | undefined
    onMounted(() => {
      // Polyfill global
      window.global = window
      stopThemeSync = themeConfig()
    })
    onBeforeUnmount(() => stopThemeSync?.())
  },
})
