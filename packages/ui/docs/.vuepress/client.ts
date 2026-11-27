import { connectComponentLanguage } from './i18n/client'
import { defineClientConfig, useRouter } from 'vuepress/client'
import './configs/styles/index.scss'
import 'prismjs/themes/prism.css'
import { vLoading } from '../../src/loading'
import { vTooltip } from '../../src/tooltip'
import { themeConfig, docsTheme } from './theme-config'
import { ThemeProvider } from '../../src/theme-provider'
import HopeLayout from 'vuepress-theme-hope/layouts/base/Layout'
import HopeNotFound from 'vuepress-theme-hope/layouts/base/NotFound'
import '../../src/style/index.less'
import '../../src/loading/style'
import '../../src/tooltip/style'
import { defineAsyncComponent, defineComponent, h, onBeforeUnmount, onMounted } from 'vue'
import CedarThemeMenu from './components/CedarThemeMenu.vue'
import { installScrollHash } from '@sparknest/vuepress-plugins-vue/scroll-hash'
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
    const router = useRouter()
    let stopScrollHash: (() => void) | undefined
    let stopThemeSync: (() => void) | undefined
    onMounted(() => {
      // Polyfill global
      window.global = window
      stopThemeSync = themeConfig()
      stopScrollHash = installScrollHash(router, '.theme-hope-content')
    })
    onBeforeUnmount(() => {
      stopScrollHash?.()
      stopThemeSync?.()
    })
  },
})
