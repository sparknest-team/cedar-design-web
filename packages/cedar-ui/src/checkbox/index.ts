import { withInstall } from '../_utils/global-config'
import _Checkbox from './checkbox'
import _CheckboxGroup from './checkbox-group'
import { checkboxGroupProps, checkboxProps } from './props'

const Checkbox = withInstall(_Checkbox, Object.assign(_Checkbox, {
  Group: _CheckboxGroup,
}), { components: [_Checkbox, _CheckboxGroup] })

export type CheckboxInstance = InstanceType<typeof _Checkbox>
export type CheckboxGroupInstance = InstanceType<typeof _CheckboxGroup>
export { checkboxGroupProps, checkboxProps }
export type { CheckboxGroupProps, CheckboxProps, CheckboxValue } from './props'
export type { CheckboxOption } from './types'

export { Checkbox, _CheckboxGroup as CheckboxGroup }
export const _CheckboxComponent = Checkbox

export default Checkbox
