import { CSSProperties, PropType, computed, defineComponent, onMounted, ref, shallowRef, toRefs, watch } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { WatermarkFont } from './types'
import { useMutationObserver } from './hooks/use-mutation-observer'
import { useTheme } from './hooks/use-theme'
import { styleToString, canvasToGray } from './utils'
import { isArray } from '../_utils/is'

export const watermarkProps = {
    /**
     * @zh 水印文字内容
     * @en Watermark text content
     */
    content: {
      type: [String, Array] as PropType<string | string[]>,
    },
    /**
     * @zh 图片源，建议使用 2 倍或 3 倍图
     * @en Image watermark address
     */
    image: {
      type: String,
    },
    /**
     * @zh 水印宽度（默认为内容宽度）
     * @en Watermark width
     */
    width: {
      type: Number,
    },
    /**
     * @zh 水印高度（默认为内容高度）
     * @en Watermark height
     */
    height: {
      type: Number,
    },
    /**
     * @zh 水印间的间距
     * @en Watermark spacing
     */
    gap: {
      type: Array as unknown as PropType<[number, number]>,
      default: () => [90, 90],
    },
    /**
     * @zh 距离容器左上角的偏移量，默认为水印间距的一半
     * @en The offset from the upper left corner of the container, the default is half the watermark spacing
     * @defaultValue [gap[0]/2, gap[1]/2]
     */
    offset: {
      type: Array as unknown as PropType<[number, number]>,
    },
    /**
     * @zh 旋转角度
     * @en Watermark rotation angle
     */
    rotate: {
      type: Number,
      default: -22,
    },
    /**
     * @zh 水印字体样式，具体参数配置看 [WatermarkFont](#WatermarkFont)
     * @en Watermark font style, specific parameter configuration see [WatermarkFont](#WatermarkFont)
     */
    font: {
      type: Object as PropType<WatermarkFont>,
    },
    /**
     * @zh 水印层级
     * @en Watermark z-index
     */
    zIndex: {
      type: Number,
      default: 6,
    },
    /**
     * @zh 透明度
     * @en Watermark opacity
     */
    alpha: {
      type: Number,
      default: 1,
    },
    /**
     * @zh 水印防篡改
     * @en Watermark anti-tampering
     */
    antiTamper: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 灰阶水印
     * @en Grayscale watermark
     */
    grayscale: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否重复水印
     * @en Whether to repeat the watermark
     */
    repeat: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否错开排列
     * @en Whether to stagger the arrangement layout
     */
    staggered: {
      type: Boolean,
      default: true,
    },
  } 
