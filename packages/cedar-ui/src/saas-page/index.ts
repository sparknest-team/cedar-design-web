import _SaasPage from './saas-page.vue'
import { withInstall } from '../_utils/global-config'
import { saasPageProps } from './props'

export const SaasPage = withInstall(_SaasPage)
export type SaasPageInstance = InstanceType<typeof _SaasPage>
export const _SaasPageComponent = SaasPage

export { saasPageProps }

export default SaasPage
