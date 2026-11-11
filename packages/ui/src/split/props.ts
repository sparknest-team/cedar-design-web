import type { PropType } from 'vue'
import { orientations, type Orientation } from '../_utils/constant'
import { isSplitSize } from './sizing'

export const splitProps = {
    /**
     * @zh 分隔手柄的可访问名称；空白时使用当前语言的默认名称
     * @en Accessible name of the separator handle; blank values use the current locale default
     */
    ariaLabel: String,
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
      type: String as PropType<Orientation>,
      default: 'horizontal',
      validator: (value: string) => orientations.includes(value as Orientation),
    },
    /**
     * @zh 分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en The size of the segmentation, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     * @v-model
     */
    size: {
      type: [Number, String],
      validator: isSplitSize,
      default: undefined,
    },
    /**
     * @zh 默认分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en Default split size, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     */
    defaultSize: {
      type: [Number, String],
      validator: isSplitSize,
      default: 0.5,
    },
    /**
     * @zh 最小阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en Minimum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     */
    min: {
      type: [Number, String],
      validator: isSplitSize,
    },
    /**
     * @zh 最大阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en Maximum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     * */
    max: {
      type: [Number, String],
      validator: isSplitSize,
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
