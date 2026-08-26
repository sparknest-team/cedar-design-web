import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'

export const colorProps = {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: String,
    /**
     * @zh 默认值
     * @en Default value
     */
    defaultValue: String,
    /**
     * @zh 颜色值的格式
     * @en Color value format
     */
    format: {
      type: String as PropType<'hex' | 'rgb'>,
    },
    /**
     * @zh 尺寸
     * @en ComponentSize
     */
    size: {
      type: String as PropType<ComponentSize>,
      default: 'md',
      validator: (value: ComponentSize) => componentSizes.includes(value),
    },
    /**
     * @zh 显示颜色值
     * @en Show color value
     */
    showText: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 显示历史颜色
     * @en Show history colors
     */
    showHistory: Boolean,
    /**
     * @zh 显示预设颜色
     * @en Show preset colors
     */
    showPreset: Boolean,
    /**
     * @zh 禁用
     * @en Disabled
     */
    disabled: Boolean,
    /**
     * @zh 禁用透明通道
     * @en Disable alpha
     */
    disabledAlpha: Boolean,
    /**
     * @zh 历史颜色
     * @en History colors
     */
    historyColors: {
      type: Array as PropType<string[]>,
    },
    /**
     * @zh 预设颜色
     * @en Preset colors
     */
    presetColors: {
      type: Array as PropType<string[]>,
    },
    /**
     * @zh 透传给 ColorPicker 的其余属性
     * @en Extra props passed to ColorPicker
     */
    colorPickerProps: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
} 

export type ColorProps = Partial<ExtractPropTypes<typeof colorProps>>
