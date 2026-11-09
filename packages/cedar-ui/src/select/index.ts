import { withInstall } from '../_utils/global-config'
import _Optgroup from './Optgroup.vue'
import _Option from './Option.vue'
import { selectProps, optionProps } from './props'
import _Select from './select'

const Select = withInstall(
  _Select,
  Object.assign(_Select, {
    Option: _Option,
    OptGroup: _Optgroup,
  }),
  { components: [_Select, _Option, _Optgroup] },
)

export type SelectInstance = InstanceType<typeof _Select> & import('./types').SelectExpose
export type OptionInstance = InstanceType<typeof _Option>
export type OptgroupInstance = InstanceType<typeof _Optgroup>
export type OptionProps = import('vue').ExtractPublicPropTypes<typeof optionProps>
export type OptgroupProps = import('vue').ExtractPublicPropTypes<typeof _Optgroup.props>

export const optgroupProps = _Optgroup.props
export { selectProps, optionProps }
export type {
  SelectOptionsLoader,
  SelectValue,
  SelectEmptyValue,
  OptionSearchField,
  SelectOption,
  SelectOptionData,
  SelectOptionGroup,
  SelectFieldNames,
  FilterOption,
} from './types'
export type { SelectProps, SelectEditMode } from './props'

export { Select, _Option as Option, _Optgroup as Optgroup }
export const _SelectComponent = Select
export const _OptionComponent = _Option
export const _OptgroupComponent = _Optgroup

export default Select

export type { SelectEmits, SelectSlots, SelectExpose } from './types'

export type { SelectTriggerOptions } from './trigger-options'
