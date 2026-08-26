import { withInstall } from '../_utils/global-config'
import _List from './list'
import _ListItem from './list-item'
import _ListItemMeta from './list-item-meta.vue'
import { listProps } from './props'

const List = withInstall(_List, Object.assign(_List, {
  Item: Object.assign(_ListItem, {
    Meta: _ListItemMeta,
  }),
}), { components: [_List, _ListItem, _ListItemMeta] })

export type ListInstance = InstanceType<typeof _List>
export type ListItemInstance = InstanceType<typeof _ListItem>
export type ListItemMetaInstance = InstanceType<typeof _ListItemMeta>

export { _ListItem as ListItem, _ListItemMeta as ListItemMeta }

export const _ListComponent = List

export { List }

export { listProps }

export default List
