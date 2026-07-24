import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _OverflowList from './overflow-list'

const OverflowList = Object.assign(_OverflowList, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _OverflowList.name, _OverflowList)
  },
})

export type OverflowListInstance = InstanceType<typeof _OverflowList>

export default OverflowList
