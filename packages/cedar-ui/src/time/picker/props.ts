import type { ExtractPropTypes, PropType } from 'vue'
import type { TriggerProps } from '../../trigger'
import type { ComponentSize } from '../../_utils/constant'
import { componentSizes } from '../../_utils/constant'
import type { FormControlVariant } from '../../_utils/form-control'
import { formControlVariants } from '../../_utils/form-control'

export const timePickerProps = {
    /**
     * @zh 选择器类型
     * @en Selector type
     */
    type: {
      type: String as PropType<'time' | 'time-range'>,
      default: 'time',
    },
    /**
     * @zh 绑定值
     * @en Value
     * */
    modelValue: {
      type: [String, Number, Date, Array] as PropType<string | number | Date | Array<string | number | Date>>,
    },
    /**
     * @zh 默认值
     * @en Default value
     * */
    defaultValue: {
      type: [String, Number, Date, Array] as PropType<string | number | Date | Array<string | number | Date>>,
    },
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
    },
    /**
     * @zh 是否允许清除
     * @en Whether to allow clear
     * */
    clearable: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否为只读模式
     * @en Whether it is read-only mode
     * */
    readonly: {
      type: Boolean,
    },
    /**
     * @zh 是否为错误状态
     * @en Whether it is an error state
     * */
    error: {
      type: Boolean,
    },
    /**
     * @zh 展示日期的格式，参考[字符串解析格式](#字符串解析格式)
     * @en Display the format of the date, refer to [String Parsing Format](#String Parsing Format)
     * */
    format: {
      type: String,
      default: 'HH:mm:ss',
    },
    /**
     * @zh 提示文案
     * @en Prompt copy
     * */
    placeholder: {
      type: [String, Array] as PropType<string | string[]>,
    },
    /**
     * @zh 输入框尺寸
     * @en Input box size
     * @values 'xs','sm','md','lg','xl'
     * @defaultValue 'md'
     * */
    size: {
      type: String as PropType<ComponentSize>,
      validator: (value: ComponentSize) => componentSizes.includes(value),
    },
    /**
     * @zh 输入框变体
     * @en Input variant
     * @values 'filled','outlined','standard'
     * @defaultValue 'filled'
     */
    variant: {
      type: String as PropType<FormControlVariant>,
      default: 'filled',
      validator: (value: FormControlVariant) => formControlVariants.includes(value),
    },
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for pop-up box
     * */
    popupContainer: {
      type: [String, Object] as PropType<string | HTMLElement>,
    },
    /**
     * @zh 12 小时制
     * @en 12 hour clock
     * */
    use12Hours: {
      type: Boolean,
    },
    /**
     * @zh 设置 时 / 分 / 秒 的选择间隔
     * @en Set the hour/minute/second selection interval
     * */
    step: {
      type: Object as PropType<{
        hour?: number
        minute?: number
        second?: number
      }>,
    },
    /**
     * @zh 禁用的部分小时选项
     * @en Disabled partial hour options
     * */
    disabledHours: {
      type: Function as PropType<() => number[]>,
    },
    /**
     * @zh 禁用的部分分钟选项
     * @en Disabled some minutes options
     * */
    disabledMinutes: {
      type: Function as PropType<(selectedHour?: number) => number[]>,
    },
    /**
     * @zh 禁用的部分秒数选项
     * @en Disabled partial seconds option
     * */
    disabledSeconds: {
      type: Function as PropType<(selectedHour?: number, selectedMinute?: number) => number[]>,
    },
    /**
     * @zh 隐藏禁止选择的选项
     * @en Hide prohibited options
     * */
    hideDisabledOptions: {
      type: Boolean,
    },
    /**
     * @zh 禁用确认步骤，开启后直接点选时间不需要点击确认按钮
     * @en Disable the confirmation step, click the time directly after opening, without clicking the confirmation button
     * */
    disableConfirm: {
      type: Boolean,
    },
    /**
     * @zh 弹出的位置
     * @en Pop-up placement
     * */
    placement: {
      type: String as PropType<'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'>,
      default: 'bl',
    },
    /**
     * @zh 控制弹出框打开或者关闭
     * @en Control the pop-up box to open or close
     * @vModel
     */
    open: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 弹出框默认打开或者关闭
     * @en The pop-up box is opened or closed by default
     * */
    defaultOpen: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 可以传入 `Trigger` 组件的参数
     * @en You can pass in the parameters of the `Trigger` component
     * */
    triggerProps: {
      type: Object as PropType<TriggerProps>,
    },
    /**
     * @zh 是否在关闭后销毁 dom 结构
     * @en Whether to destroy the dom structure after closing
     * */
    unmountOnClose: {
      type: Boolean,
    },
    /**
     * @zh 没有触发元素，只显示选择面板（默认 true）
     * @en Panel only without trigger (default true)
     */
    hideTrigger: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 结束时间早于开始时间时，在字段与面板结束侧显示「次日」，并关闭确认时的起止交换
     * @en Show next-day marker when end is earlier than start, and skip range sort on confirm
     */
    showNextDay: {
      type: Boolean,
    },
} 

export const timeRangePickerProps = {
    modelValue: {
      type: Array as PropType<Array<string | number | Date>>,
    },
    defaultValue: {
      type: Array as PropType<Array<string | number | Date>>,
    },
    open: {
      type: Boolean as PropType<boolean | undefined>,
      default: undefined,
    },
    defaultOpen: Boolean,
    clearable: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    readonly: Boolean,
    error: Boolean,
    format: String,
    size: {
      type: String as PropType<ComponentSize>,
      validator: (value: ComponentSize) => componentSizes.includes(value),
    },
    variant: {
      type: String as PropType<FormControlVariant>,
      default: 'filled',
      validator: (value: FormControlVariant) => formControlVariants.includes(value),
    },
    placeholder: {
      type: [String, Array] as PropType<string | string[]>,
    },
    use12Hours: Boolean,
    step: {
      type: Object as PropType<{
        hour?: number
        minute?: number
        second?: number
      }>,
    },
    disabledHours: {
      type: Function as PropType<() => number[]>,
    },
    disabledMinutes: {
      type: Function as PropType<(selectedHour?: number) => number[]>,
    },
    disabledSeconds: {
      type: Function as PropType<(selectedHour?: number, selectedMinute?: number) => number[]>,
    },
    hideDisabledOptions: Boolean,
    disableConfirm: Boolean,
    placement: {
      type: String as PropType<'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'>,
    },
    triggerProps: {
      type: Object as PropType<Record<string, unknown>>,
    },
    unmountOnClose: Boolean,
    hideTrigger: {
      type: Boolean,
      default: true,
    },
    showNextDay: Boolean,
} 

export type TimePickerProps = Partial<ExtractPropTypes<typeof timePickerProps>>
export type TimeRangePickerProps = Partial<ExtractPropTypes<typeof timeRangePickerProps>>

