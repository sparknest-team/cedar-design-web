import { createNamespace } from '../_utils/global-config'
import { computed, CSSProperties, defineComponent, onMounted, PropType, ref, toRefs, watch } from 'vue'
import dayjs from 'dayjs'
import BTween from 'b-tween'
import NP from 'number-precision'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber, isUndefined } from '../_utils/is'
import { Data } from '../_utils/types'

export const statisticProps = {
    /**
     * @zh 数值显示的标题
     * @en Title of the numerical display
     */
    title: String,
    /**
     * @zh 数值显示的值
     * @en Numerical display value
     */
    value: {
      type: [Number, Object] as PropType<number | Date>,
    },
    /**
     * @zh 数值显示的格式 [dayjs](https://day.js.org/docs/en/display/format)（日期模式使用）
     * @en Format of numerical display [dayjs](https://day.js.org/docs/en/display/format) (used in date mode)
     */
    format: {
      type: String,
      default: 'HH:mm:ss',
    },
    /**
     * @zh 额外的显示内容
     * @en Additional display content
     */
    extra: String,
    /**
     * @zh 是否开始动画
     * @en Whether to start animation
     */
    start: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 小数保留位数（数字模式使用）
     * @en Decimal reserved digits (used in digital mode)
     */
    precision: {
      type: Number,
      default: 0,
    },
    /**
     * @zh 进位分隔符（数字模式使用）
     * @en Carry separator (used in number mode)
     */
    separator: String,
    /**
     * @zh 是否展示进位分隔符（数字模式使用）
     * @en Whether to display the carry separator (used in number mode)
     */
    showGroupSeparator: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否开启动画
     * @en Whether to turn on animation
     */
    animation: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 动画的过度时间
     * @en Animation's duration time
     */
    animationDuration: {
      type: Number,
      default: 2000,
    },
    /**
     * @zh 动画的起始值
     * @en The starting value of the animation
     */
    valueFrom: {
      type: Number,
      default: undefined,
    },
    /**
     * @zh 提示文字（当 value 为 undefined 时显示）
     * @en Prompt text (displayed when value is undefined )
     * @version 2.28.0
     */
    placeholder: {
      type: String,
    },
    /**
     * @zh 自定义显示值的样式
     * @en Custom value style
     * @version 2.32.0
     */
    valueStyle: {
      type: Object as PropType<CSSProperties>,
    },
  } 
