import { connectComponentLanguage } from './i18n/client'
import { defineClientConfig } from '@vuepress/client'
import './configs/styles/index.scss'
import 'prismjs/themes/prism.css'
import { vLoading } from '../../src/loading'
import { vTooltip } from '../../src/tooltip'
import { themeConfig } from './theme-config'
import '../../src/style/index.less'
import '../../src/loading/style'
import '../../src/tooltip/style'
import { onBeforeUnmount, onMounted } from 'vue'
import CedarThemeMenu from './components/CedarThemeMenu.vue'

export default defineClientConfig({
  rootComponents: [CedarThemeMenu],
  async enhance({ app, router }) {
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
