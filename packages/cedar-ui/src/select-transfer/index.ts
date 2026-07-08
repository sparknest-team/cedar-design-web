import type { App } from 'vue'
import type { ArcoOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _SelectTransfer from './select-transfer.vue'

const SelectTransfer = Object.assign(_SelectTransfer, {
  install: (app: App, options?: ArcoOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _SelectTransfer.name, _SelectTransfer)
  },
})

export type SelectTransferInstance = InstanceType<typeof _SelectTransfer>
export type { SelectTransferProps } from './props'

export { SelectTransfer }

export const _SelectTransferComponent = SelectTransfer

export default SelectTransfer
