import { createNamespace } from '../_utils/global-config'
import { computed, CSSProperties, defineComponent, onMounted, PropType, ref, StyleValue } from 'vue'
import { ThumbData } from './types'
import ResizeObserver from '../_components/resize-observer-v2'
import Thumb from './thumb.vue'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber, isObject } from '../_utils/is'

export const scrollbarProps = {
    /**
     * @zh 类型
     * @en Type
     */
    type: {
      type: String as PropType<'track' | 'embed'>,
      default: 'embed',
    },
    /**
     * @zh 外层的类名
     * @en Outer class
     */
    outerClass: [String, Object, Array],
    /**
     * @zh 外层的样式
     * @en Outer style
     */
    outerStyle: {
      type: [String, Object, Array] as PropType<StyleValue>,
    },
    // private
    hide: {
      type: Boolean,
      default: false,
    },
    disableHorizontal: {
      type: Boolean,
      default: false,
    },
    disableVertical: {
      type: Boolean,
      default: false,
    },
  } 
