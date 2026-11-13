import { withInstall } from '../_utils/global-config'
import _Alert from './Alert.vue'
import { alertProps } from './props'

const Alert: import('../_utils/global-config').ComponentWithInstall<typeof _Alert> = withInstall(_Alert, Object.assign(_Alert, {
}), { components: [_Alert] })

export type AlertInstance = InstanceType<typeof _Alert>
export type { AlertProps, AlertStatus, AlertVariant } from './props'

export { alertProps }
export { Alert }

export const _AlertComponent: typeof Alert = Alert

export default Alert
