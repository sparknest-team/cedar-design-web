import { withInstall } from '../_utils/global-config'
import _Select from './select'
import _Option from './Option.vue'
import _Optgroup from './Optgroup.vue'
import { selectProps } from './props'

const Select = withInstall(_Select, Object.assign(_Select, {
  Option: _Option,
  OptGroup: _Optgroup,
}), { components: [_Select, _Option, _Optgroup] })

export type SelectInstance = InstanceType<typeof _Select>
export type OptionInstance = InstanceType<typeof _Option>
export type OptgroupInstance = InstanceType<typeof _Optgroup>
export type OptionProps = import('vue').ExtractPublicPropTypes<typeof _Option.props>
export type OptgroupProps = import('vue').ExtractPublicPropTypes<typeof _Optgroup.props>
export const optionProps = _Option.props
export const optgroupProps = _Optgroup.props
export { selectProps }
export type {
  SelectOption,
  SelectOptionData,
  SelectOptionGroup,
  SelectFieldNames,
  FilterOption,
} from './types'
export type { SelectProps } from './props'

export { Select, _Option as Option, _Optgroup as Optgroup }
export const _SelectComponent = Select
export const _OptionComponent = _Option
export const _OptgroupComponent = _Optgroup

export default Select
