import { defineClientConfig } from '@vuepress/client'
import './configs/styles/index.scss'
import 'prismjs/themes/prism.css'
import Spin from '../../src/spin'
import Tooltip from '../../src/tooltip'
import { themeConfig } from './theme-config'

import '../../src/index.less'
import { onMounted } from 'vue'

export default defineClientConfig({
  async enhance({ app }) {
    app.directive('loading', Spin.directive)
    app.directive('tooltip', Tooltip.directive)
  },
  setup() {
    onMounted(() => {
      // Polyfill global
      window.global = window
      themeConfig()
    })
  },
})
