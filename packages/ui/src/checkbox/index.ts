import { withInstall } from '../_utils/global-config'
import _Checkbox from './base'
import _CheckboxGroup from './group-presentation'
import { checkboxGroupProps, checkboxProps } from './props'

const Checkbox: import('../_utils/global-config').CedarComponentWithInstall<
  typeof _Checkbox & { Group: typeof _CheckboxGroup }
> = withInstall(
  _Checkbox,
  Object.assign(_Checkbox, {
    Group: _CheckboxGroup,
  }),
  { components: [_Checkbox, _CheckboxGroup] },
)

export type CheckboxInstance = InstanceType<typeof _Checkbox> & import('./props').CheckboxMethods
export type CheckboxGroupInstance = InstanceType<typeof _CheckboxGroup> &
  import('./use-checkbox-group-methods').CheckboxGroupMethods
export { checkboxGroupProps, checkboxProps }
export type { CheckboxGroupProps, CheckboxProps, CheckboxValue } from './props'
export type { CheckboxOption } from './types'

export { Checkbox, _CheckboxGroup as CheckboxGroup }
export const _CheckboxComponent: typeof Checkbox = Checkbox
export const _CheckboxGroupComponent: typeof _CheckboxGroup = _CheckboxGroup

export default Checkbox

export type { CheckboxMethods } from './props'

export type { ChoiceFieldNames } from './choice-options'

export type { CheckboxGroupMethods } from './use-checkbox-group-methods'

export type { CheckboxSlots, CheckboxGroupSlots } from './types'
