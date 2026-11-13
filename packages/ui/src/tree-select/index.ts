import { withInstall } from '../_utils/global-config'
import _TreeSelect from './presentation'
import { treeSelectProps } from './props'

const TreeSelect: import('../_utils/global-config').ComponentWithInstall<typeof _TreeSelect> = withInstall(_TreeSelect, Object.assign(_TreeSelect, {}), { components: [_TreeSelect] })

export type TreeSelectInstance = InstanceType<typeof _TreeSelect> & import('./types').TreeSelectExpose

export const _TreeSelectComponent: typeof TreeSelect = TreeSelect

export { TreeSelect }

export { treeSelectProps }

export default TreeSelect
export type {
  TreeSelectProps,
  TreeSelectValue,
  TreeSelectLabelValue,
  TreeSelectReadScope,
  TreeSelectNodeStatus,
  TreeSelectEmits,
  TreeSelectSlots,
  TreeSelectExpose,
} from './types'

export type { TreeSelectTriggerOptions, TreeSelectTreeOptions } from './presentation-options'
