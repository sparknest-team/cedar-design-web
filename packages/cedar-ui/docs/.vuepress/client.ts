import { defineClientConfig } from '@vuepress/client'
import './configs/styles/index.scss'
import 'prismjs/themes/prism.css'
import { vLoading } from '../../src/loading'
import { vTooltip } from '../../src/tooltip'
import { themeConfig } from './theme-config'
import '../../src/style/index.less'
import '../../src/loading/style'
import '../../src/tooltip/style'
import { onMounted } from 'vue'

export default defineClientConfig({
  async enhance({ app }) {
    app.directive('loading', vLoading)
    app.directive('tooltip', vTooltip)
  },
  setup() {
    onMounted(() => {
      // Polyfill global
      window.global = window
      themeConfig()
    })
  },
})
