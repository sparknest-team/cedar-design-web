import type { PropType } from 'vue'
import { fieldPresentationProps } from '../_components/field-presentation/props'
import type { SelectOptionData, SelectOptionGroup } from '../select/types'

export const mentionProps = {
  ...fieldPresentationProps,
  /**
   * @zh 绑定值
   * @en Value
   * @v-model
   */
  modelValue: String,
  /**
   * @zh 默认值（非受控状态）
   * @en Default value (uncontrolled state)
   */
  defaultValue: {
    type: String,
    default: '',
  },
  /**
   * @zh 用于自动补全的数据
   * @en Data for automatic completion
   */
  data: {
    type: Array as PropType<(string | number | SelectOptionData | SelectOptionGroup)[]>,
    default: () => [],
  },
  /**
   * @zh 触发自动补全的关键字
   * @en Keywords that trigger auto-completion
   */
  prefix: {
    type: [String, Array] as PropType<string | string[]>,
    default: '@',
  },
  /**
   * @zh 选中项的前后分隔符
   * @en Before and after the selected item separator
   */
  split: {
    type: String,
    default: ' ',
  },
  /**
   * @zh 输入框或文本域
   * @en default input or textarea
   */
  type: {
    type: String as PropType<'input' | 'textarea'>,
    default: 'input',
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: false,
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
}
