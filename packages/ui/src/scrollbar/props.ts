import type { CompatibleStyleValue as StyleValue } from '../_utils/style-value'
import type { PropType } from 'vue'
import type { ClassName } from '../_utils/types'

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
    outerClass: [String, Object, Array] as PropType<ClassName>,
    /**
     * @zh 外层的样式
     * @en Outer style
     */
    outerStyle: {
      type: [String, Object, Array, Boolean] as PropType<StyleValue>,
      default: undefined,
      validator: (value: unknown) => value !== true,
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
