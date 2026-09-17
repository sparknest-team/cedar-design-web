import { withInstall } from '../_utils/global-config'
import _Alert from './Alert.vue'
import { alertProps } from './props'

const Alert = withInstall(_Alert, Object.assign(_Alert, {
}), { components: [_Alert] })

export type AlertInstance = InstanceType<typeof _Alert>
export type { AlertProps, AlertStatus, AlertVariant } from './props'

export { alertProps }
export { Alert }

export const _AlertComponent = Alert

export default Alert
