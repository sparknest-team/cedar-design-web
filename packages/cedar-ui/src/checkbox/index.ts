import { withInstall } from '../_utils/global-config'
import _Checkbox from './checkbox.vue'
import _CheckboxGroup from './checkbox-group.vue'
import { checkboxGroupProps, checkboxProps } from './props'

const Checkbox = withInstall(_Checkbox, Object.assign(_Checkbox, {
  Group: _CheckboxGroup,
}), { components: [_Checkbox, _CheckboxGroup] })

export type CheckboxInstance = InstanceType<typeof _Checkbox> & import('./props').CheckboxMethods
export type CheckboxGroupInstance = InstanceType<typeof _CheckboxGroup> & import('./use-checkbox-group-methods').CheckboxGroupMethods
export { checkboxGroupProps, checkboxProps }
export type { CheckboxGroupProps, CheckboxProps, CheckboxValue } from './props'
export type { CheckboxOption } from './types'

export { Checkbox, _CheckboxGroup as CheckboxGroup }
export const _CheckboxComponent = Checkbox
export const _CheckboxGroupComponent = _CheckboxGroup

export default Checkbox

export type { CheckboxMethods, CheckboxModel } from './props'

export type { ChoiceFieldNames } from './choice-options'

export type { CheckboxGroupMethods } from './use-checkbox-group-methods'
