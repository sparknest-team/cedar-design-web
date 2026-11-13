import { withInstall } from '../_utils/global-config'
import _Collapse from './Collapse.vue'
import _CollapseItem from './CollapseItem.vue'
import { collapseItemProps, collapseProps } from './props'

const Collapse: import('../_utils/global-config').CedarComponentWithInstall<typeof _Collapse & { Item: typeof _CollapseItem }> = withInstall(_Collapse, Object.assign(_Collapse, {
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
export const _CollapseComponent: typeof Collapse = Collapse
export const _CollapseItemComponent: typeof _CollapseItem = _CollapseItem

export { _CollapseItem as CollapseItem }

export default Collapse
