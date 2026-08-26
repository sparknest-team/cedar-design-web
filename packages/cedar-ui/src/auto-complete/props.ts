import type { ExtractPropTypes, PropType } from 'vue'
import type { TriggerProps } from '../trigger'
import type { FilterOption, SelectOptionData, SelectOptionGroup } from '../select/types'
import type { VirtualListProps } from '../_components/virtual-list-v2/interface'
import type { ComponentSize } from '../_utils/constant'
import { componentSizes } from '../_utils/constant'

export const autoCompleteProps = {
    /**
     * @zh 绑定值
     * @en Value
     * @vModel
     */
    modelValue: {
      type: String,
      default: undefined,
    },
    /**
     * @zh 默认值（非受控模式）
     * @en Default value (uncontrolled mode)
     */
    defaultValue: {
      type: String,
      default: '',
    },
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
      type: Boolean,
    },
    variant: {
      type: String as PropType<'filled' | 'outlined' | 'standard'>,
      validator: (value: string) => ['filled', 'outlined', 'standard'].includes(value),
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: (value: ComponentSize) => componentSizes.includes(value),
    },
    /**
     * @zh 用于自动提示的数据
     * @en Data used for auto-complete
     */
    options: {
      type: Array as PropType<(string | number | SelectOptionData | SelectOptionGroup)[]>,
      default: () => [],
    },
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for popup
     */
    popupContainer: {
      type: [String, Object] as PropType<string | HTMLElement | null | undefined>,
    },
    /**
     * @zh 是否为严格校验模式
     * @en Whether it is strict verification mode
     */
    strict: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 自定义选项过滤方法
     * @en Custom option filtering method
     */
    filterOption: {
      type: [Boolean, Function] as PropType<FilterOption>,
      default: true,
    },
    /**
     * @zh trigger 组件属性
     * @en trigger props
     * @version 2.14.0
     */
    triggerProps: {
      type: Object as PropType<TriggerProps>,
    },
    /**
     * @zh 是否允许清空输入框
     * @en Whether to allow the input to be cleared
     * @version 2.23.0
     */
    clearable: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)
     * @en Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)
     * @type VirtualListProps
     * @version 2.50.0
     */
    virtualListProps: {
      type: Object as PropType<VirtualListProps>,
    },
} 

export type AutoCompleteProps = Partial<ExtractPropTypes<typeof autoCompleteProps>>
