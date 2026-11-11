import { withInstall } from "../_utils/global-config";
import _List from "./list.vue";
import _ListItem from "./list-item.vue";
import { listProps } from "./props";

const List = withInstall(
  _List,
  Object.assign(_List, {
    Item: _ListItem,
  }),
  { components: [_List, _ListItem] },
);

export type ListInstance = InstanceType<typeof _List>;
export type ListItemInstance = InstanceType<typeof _ListItem>;
export type { ListProps, ListSize, ListVirtualListProps, ListScrollbarProps, ListExpose, ListSlots, ListEmits } from "./props";

export { _ListItem as ListItem };

export const _ListComponent = List;
export const _ListItemComponent = _ListItem;

export { List };

export { listProps };

export default List;
