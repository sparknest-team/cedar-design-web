import type { CompatiblePublicProps } from '../_utils/public-props'
import { withInstall } from '../_utils/global-config'
import _Optgroup from './Optgroup.vue'
import _Option from './Option.vue'
import { selectProps, optionProps } from './props'
import { optgroupProps } from './optgroup-props'
import _Select from './select'

const Select: import('../_utils/global-config').ComponentWithInstall<typeof _Select & { Option: typeof _Option; OptGroup: typeof _Optgroup }> = withInstall(
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
export type OptionProps = CompatiblePublicProps<typeof optionProps>
export type OptgroupProps = CompatiblePublicProps<typeof optgroupProps>

export { optgroupProps }
export { selectProps, optionProps }
export type {
  SelectOptionsLoader,
  SelectValue,
  SelectEmptyValue,
  OptionSearchField,
  SelectOption,
  SelectOptionData,
  SelectOptionTagProps,
  SelectOptionGroup,
  SelectFieldNames,
  FilterOption,
} from './types'
export type { SelectProps, SelectEditMode } from './props'

export { Select, _Option as Option, _Optgroup as Optgroup }
export const _SelectComponent: typeof Select = Select
export const _OptionComponent = _Option
export const _OptgroupComponent = _Optgroup

export default Select

export type { SelectEmits, SelectSlots, SelectExpose } from './types'

export type { SelectTriggerOptions } from './trigger-options'
