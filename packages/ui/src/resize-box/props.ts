import type { PropType } from 'vue'
import { isResizeBoxDirections, isResizeBoxSize, isResizeBoxTag, type ResizeBoxDirection } from './validation'
export type { ResizeBoxDirection } from './validation'

export const resizeBoxProps = {
  /**
   * @zh 当前盒模型下的 CSS 宽度（px）
   * @en CSS width in pixels under the current box model
   * @v-model
   */
  width: { type: Number, validator: process.env.NODE_ENV !== 'production' ? isResizeBoxSize : undefined },
  /**
   * @zh 当前盒模型下的 CSS 高度（px）
   * @en CSS height in pixels under the current box model
   * @v-model
   */
  height: { type: Number, validator: process.env.NODE_ENV !== 'production' ? isResizeBoxSize : undefined },
  /** Root HTML tag. */
  component: { type: String, default: 'div', validator: process.env.NODE_ENV !== 'production' ? isResizeBoxTag : undefined },
  /** Enabled physical edges; an empty list disables all handles. */
  directions: {
    type: Array as PropType<ResizeBoxDirection[]>,
    default: (): ResizeBoxDirection[] => ['right'],
    validator: process.env.NODE_ENV !== 'production' ? isResizeBoxDirections : undefined,
  },
}
export type ResizeBoxProps = InstanceType<(typeof import('./ResizeBox.vue'))['default']>['$props']
