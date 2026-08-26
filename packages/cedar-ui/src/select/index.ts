import { withInstall } from '../_utils/global-config'
import _Select from './select'
import _Option from './option.vue'
import _Optgroup from './optgroup.vue'
import { selectProps } from './props'

const Select = withInstall(_Select, Object.assign(_Select, {
  Option: _Option,
  OptGroup: _Optgroup,
}), { components: [_Select, _Option, _Optgroup] })

export type SelectInstance = InstanceType<typeof _Select>
export type SelectOptionInstance = InstanceType<typeof _Option>
export type SelectOptGroupInstance = InstanceType<typeof _Optgroup>
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

export default Select
