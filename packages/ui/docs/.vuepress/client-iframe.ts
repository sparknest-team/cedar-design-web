import { useDocsDirection } from '@sparknest/ui-doc-preview-vue'
import { defineClientConfig } from 'vuepress/client'
import { connectComponentLanguage } from './i18n/client'
import { vLoading } from '../../src/loading'
import { vTooltip } from '../../src/tooltip'
import '../../src/style/index.less'
import '../../src/loading/style'
import '../../src/tooltip/style'
import './configs/styles/iframe.scss'

export default defineClientConfig({
  setup() {
    useDocsDirection()
  },
  enhance({ app, router }) {
    connectComponentLanguage(router)
    app.directive('loading', vLoading)
    app.directive('tooltip', vTooltip)
  },
})
