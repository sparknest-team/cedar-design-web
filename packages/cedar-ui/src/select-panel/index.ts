import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _SelectPanel from './select-panel.vue'

const SelectPanel = Object.assign(_SelectPanel, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _SelectPanel.name, _SelectPanel)
  },
})

export type SelectPanelInstance = InstanceType<typeof _SelectPanel>
export type { SelectPanelProps } from './props'

export { SelectPanel }

export const _SelectPanelComponent = SelectPanel

export default SelectPanel
