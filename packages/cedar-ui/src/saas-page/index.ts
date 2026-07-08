import type { App } from 'vue'
import _SaasPage from './saas-page.vue'
import { getComponentPrefix } from '../_utils/global-config'

export const SaasPage = Object.assign(_SaasPage, {
  install: (app: App, options?: any) => {
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + SaasPage.name, SaasPage)
  },
})
export type SaasPageInstance = InstanceType<typeof SaasPage>
export default SaasPage
