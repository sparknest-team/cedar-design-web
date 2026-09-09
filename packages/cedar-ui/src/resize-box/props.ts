import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, PropType, toRefs, ref, reactive } from 'vue'
import ResizeTrigger from '../_components/resize-trigger.vue'
import useMergeState from '../_hooks/use-merge-state'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'
import { off, on } from '../_utils/dom'

export const resizeBoxProps = {
    /**
     * @zh 宽度
     * @en Width
     * @v-model
     */
    width: {
      type: Number,
    },
    /**
     * @zh 高度
     * @en Height
     * @v-model
     */
    height: {
      type: Number,
    },
    /**
     * @zh 伸缩框的 html 标签
     * @en The html tag of the telescopic box
     */
    component: {
      type: String,
      default: 'div',
    },
    /**
     * @zh 可以进行伸缩的边，有上、下、左、右可以使用
     * @en Can be stretched side, there are up, down, left and right can be used
     * */
    directions: {
      type: Array as PropType<('left' | 'right' | 'top' | 'bottom')[]>,
      default: () => ['right'],
    },
  } 
