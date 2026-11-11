import { withInstall } from '../_utils/global-config'
import _Collapse from './Collapse.vue'
import _CollapseItem from './CollapseItem.vue'
import { collapseItemProps, collapseProps } from './props'

const Collapse = withInstall(_Collapse, Object.assign(_Collapse, {
  Item: _CollapseItem,
}), { components: [_Collapse, _CollapseItem] })

export type CollapseInstance = InstanceType<typeof _Collapse>
export type CollapseItemInstance = InstanceType<typeof _CollapseItem>
export type {
  CollapseExpandIconSlotProps,
  CollapseSlots,
  CollapseItemSlots,
  CollapseActiveNames,
  CollapseItemProps,
  CollapseName,
  CollapseProps,
  CollapseToggleAllOptions,
  ExpandIconPosition,
} from './props'
export { Collapse, collapseItemProps, collapseProps }
export const _CollapseComponent = Collapse
export const _CollapseItemComponent = _CollapseItem

export { _CollapseItem as CollapseItem }

export default Collapse
