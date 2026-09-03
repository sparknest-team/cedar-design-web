import type { ExtractPropTypes, PropType } from "vue";
import type { VirtualListProps } from "../_components/virtual-list-v2/interface";
import type { ScrollbarProps } from "../scrollbar";

export const listProps = {
  /**
   * @zh 列表数据，需要和 `item` 插槽同时使用
   * @en List data, need to be used with `item` slot at the same time
   */
  data: {
    type: Array as PropType<unknown[]>,
  },
  /**
   * @zh 列表大小
   * @en List size
   */
  size: {
    type: String as PropType<"sm" | "md" | "lg">,
    default: "md",
  },
  /**
   * @zh 是否显示边框
   * @en Whether to show the border
   */
  bordered: {
    type: Boolean,
    default: true,
  },
  /**
   * @zh 是否显示分割线
   * @en Whether to show the dividing line
   */
  split: {
    type: Boolean,
    default: true,
  },
  /**
   * @zh 是否为加载中状态
   * @en Whether it is loading state
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 列表的最大高度
   * @en Maximum height of the list
   */
  maxHeight: {
    type: [String, Number] as PropType<string | number>,
    default: 0,
  },
  /**
   * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)
   * @en Pass virtual list properties, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)
   */
  virtualListProps: {
    type: Object as PropType<VirtualListProps>,
  },
  /**
   * @zh 是否开启虚拟滚动条
   * @en Whether to enable virtual scroll bar
   */
  scrollbar: {
    type: [Object, Boolean] as PropType<boolean | ScrollbarProps>,
    default: true,
  },
};

export type ListProps = Partial<ExtractPropTypes<typeof listProps>>;
