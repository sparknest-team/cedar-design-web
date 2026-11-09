import type { PropType } from 'vue'
import { isNumber } from '../_utils/is'

const BOUNDARY_POSITIONS = ['start', 'end', 'center', 'nearest'] as const
export type AnchorBoundaryPosition = (typeof BOUNDARY_POSITIONS)[number]

export const anchorProps = {
    /**
     * @zh 滚动边界值，设置该值为数字后，将会在距离滚动容器 `boundary` 距离时停止滚动。
     * @en Scrolling boundary value. After setting the value to a number, it will stop scrolling when the distance is `boundary` from the scrolling container.
     * @values 'start', 'end', 'center', 'nearest', number
     */
    boundary: {
      type: [Number, String] as PropType<AnchorBoundaryPosition | number>,
      default: 'start',
      validator: (value: any) => {
        return (isNumber(value) && Number.isFinite(value)) || (BOUNDARY_POSITIONS as readonly string[]).includes(value)
      },
    },
    /**
     * @zh 是否显示左侧轴线
     * @en Whether to show the left axis
     */
    showLine: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否显示背景
     * @en Whether to show the background
     */
    showBackground: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 滚动容器
     * @en Scroll container
     */
    scrollContainer: {
      type: [String, Object] as PropType<string | HTMLElement | Window>,
    },
    /**
     * @zh 是否改变hash。设置为 `false` 时点击锚点不会改变页面的 hash
     * @en Whether to change the hash. When set to `false`, clicking on the anchor will not change the hash of the page
     */
    changeHash: {
      type: Boolean,
      default: true,
    },
  } 
