import { withInstall } from '../_utils/global-config'
import _CascaderPanel from './CascaderPanel.vue'
import _Cascader from './presentation'
import { cascaderProps } from './props'
import { cascaderPanelProps } from './panel-props'

const Cascader: import('../_utils/global-config').ComponentWithInstall<typeof _Cascader & { CascaderPanel: typeof _CascaderPanel }> = withInstall(
  _Cascader,
  Object.assign(_Cascader, {
    CascaderPanel: _CascaderPanel,
  }),
  { components: [_Cascader, _CascaderPanel] },
)

export type CascaderInstance = InstanceType<typeof _Cascader> & import('./types').CascaderExpose
export type CascaderPanelInstance = InstanceType<typeof _CascaderPanel>
export type CascaderPanelProps = import('../_utils/public-props').CompatiblePublicProps<typeof cascaderPanelProps>
export { cascaderPanelProps }
export type { CascaderOption, CascaderFieldNames } from './types'

export { _CascaderPanel as CascaderPanel }
export const _CascaderComponent: typeof Cascader = Cascader
export const _CascaderPanelComponent = _CascaderPanel

export { Cascader }

export { cascaderProps }

export default Cascader
export type CascaderProps = import('../_utils/public-props').CompatiblePublicProps<typeof import('./props').cascaderProps>

export type { CascaderTriggerOptions } from './trigger-options'

export type { CascaderEditMode } from './props'

export type {CascaderBaseValue,CascaderOptionInfo,CascaderReadScope,CascaderEmits,CascaderSlots,CascaderExpose} from './types'
