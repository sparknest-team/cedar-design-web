import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Empty from './empty'

const Empty = Object.assign(_Empty, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Empty.name, _Empty)
  },
})

export type EmptyInstance = InstanceType<typeof _Empty>

export default Empty
