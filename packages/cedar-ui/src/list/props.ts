import { computed, defineComponent, inject, isVNode, onMounted, PropType, ref, toRefs } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { configProviderInjectionKey } from '../config-provider/context'
import Spin from '../spin'
import Grid from '../grid'
import Pagination, { PaginationProps } from '../pagination'
import Empty from '../empty'
import VirtualList from '../_components/virtual-list-v2'
import type { ScrollIntoViewOptions, VirtualListProps } from '../_components/virtual-list-v2/interface'
import { usePagination } from './use-pagination'
import { omit } from '../_utils/omit'
import { getAllElements } from '../_utils/vue-utils'
import Scrollbar, { ScrollbarProps } from '../scrollbar'
import { useComponentRef } from '../_hooks/use-component-ref'
import { useScrollbar } from '../_hooks/use-scrollbar'
import { isNumber } from '../_utils/is'

export const listProps = {
    /**
     * @zh 列表数据，需要和 `item` 插槽同时使用
     * @en List data, need to be used with `item` slot at the same time
     */
    data: {
      type: Array as PropType<any[]>,
    },
    /**
     * @zh 列表大小
     * @en List size
     */
    size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
      default: 'md',
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
     * @zh 是否显示选中样式
     * @en Whether to display the selected style
     */
    hoverable: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 列表分页配置
     * @en List pagination configuration
     */
    paginationProps: {
      type: Object as PropType<PaginationProps>,
    },
    /**
     * @zh 列表栅格配置
     * @en List grid configuration
     */
    gridProps: {
      type: Object,
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
     * @zh 触发到达底部的距离阈值
     * @en Trigger the distance threshold to reach the bottom
     */
    bottomOffset: {
      type: Number,
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
     * @version 2.38.0
     */
    scrollbar: {
      type: [Object, Boolean] as PropType<boolean | ScrollbarProps>,
      default: true,
    },
  } 
