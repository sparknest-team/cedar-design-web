import { withInstall } from '../_utils/global-config'
import _Collapse from './collapse.vue'
import _CollapseItem from './collapse-item'
import { collapseItemProps, collapseProps } from './props'

const Collapse = withInstall(_Collapse, Object.assign(_Collapse, {
  Item: _CollapseItem,
}), { components: [_Collapse, _CollapseItem] })

export type CollapseInstance = InstanceType<typeof _Collapse>
export type CollapseItemInstance = InstanceType<typeof _CollapseItem>
export type { CollapseToggleAllOptions } from './types'
export type { CollapseItemProps, CollapseName, CollapseProps, ExpandIconPosition } from './props'
export { Collapse, collapseItemProps, collapseProps }
export const _CollapseComponent = Collapse

export { _CollapseItem as CollapseItem }

export default Collapse
