import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Alert from './alert.vue'
import { alertProps } from './props'

const Alert = Object.assign(_Alert, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Alert.name, _Alert)
  },
})

export type AlertInstance = InstanceType<typeof _Alert>
export type { AlertProps, AlertType, AlertVariant } from './props'

export { alertProps }
export { Alert }

export const _AlertComponent = Alert

export default Alert
