import type { PropType, VNode } from 'vue'
import { computed, defineComponent, mergeProps, onMounted, ref, watch } from 'vue'
import ResizeObserver from '../_components/resize-observer-v2'
import { getAllElements } from '../_utils/vue-utils'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import Tag from '../tag'
import { getReverse } from '../_utils/array'

export const overflowListProps = {
    /**
     * @zh 最少展示的元素个数
     * @en Minimum number of elements to display
     */
    min: {
      type: Number,
      default: 0,
    },
    /**
     * @zh 项目间隔
     * @en Item Margin
     */
    margin: {
      type: Number,
      default: 8,
    },
    /**
     * @zh 折叠方向
     * @en Overflow From
     */
    from: {
      type: String as PropType<'start' | 'end'>,
      default: 'end',
    },
  } 
