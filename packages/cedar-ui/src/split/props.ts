import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, PropType, reactive, ref, toRefs, onMounted, nextTick } from 'vue'
import ResizeTrigger from '../_components/resize-trigger.vue'
import useMergeState from '../_hooks/use-merge-state'
import { getPrefixCls } from '../_utils/global-config'
import { off, on } from '../_utils/dom'
import { isNumber, isString } from '../_utils/is'
import { SplitProps } from './types'

export const splitProps = {
    /**
     * @zh 分割框的 html 标签
     * @en The html tag of the split box
     */
    component: {
      type: String,
      default: 'div',
    },
    /**
     * @zh 分割的方向
     * @en Direction of division
     */
    orientation: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
    },
    /**
     * @zh 分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en The size of the segmentation, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     * @v-model
     */
    size: {
      type: [Number, String],
      default: undefined,
    },
    /**
     * @zh 默认分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en Default split size, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     */
    defaultSize: {
      type: [Number, String],
      default: 0.5,
    },
    /**
     * @zh 最小阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en Minimum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     */
    min: {
      type: [Number, String],
    },
    /**
     * @zh 最大阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en Maximum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     * */
    max: {
      type: [Number, String],
    },
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  } 
