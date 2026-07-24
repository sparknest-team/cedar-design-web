import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _CountTo from './count-to.vue'
import { countToProps } from './props'

const CountTo = Object.assign(_CountTo, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _CountTo.name, _CountTo)
  },
})

export type CountToInstance = InstanceType<typeof _CountTo>
export type { CountToProps } from './props'

export { countToProps }
export { CountTo }

export const _CountToComponent = CountTo

export default CountTo
