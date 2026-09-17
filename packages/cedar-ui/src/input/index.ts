import { withInstall } from '../_utils/global-config'
import _Input from './input'
import _InputPassword from './InputPassword.vue'
import _InputGroup from './InputGroup.vue'
import _InputGroupLabel from './InputGroupLabel.vue'
import { inputProps } from './props'

const Input = withInstall(_Input, Object.assign(_Input, {
  Password: _InputPassword,
  Group: _InputGroup,
  GroupLabel: _InputGroupLabel,
}), { components: [_Input, _InputGroup, _InputPassword] })

export type InputInstance = InstanceType<typeof _Input>
export { inputProps }
export { inputPasswordProps } from './props'
export type { InputPasswordProps, InputProps, InputType } from './props'
export type InputPasswordInstance = InstanceType<typeof _InputPassword>
export type InputGroupInstance = InstanceType<typeof _InputGroup>
export type InputGroupLabelInstance = InstanceType<typeof _InputGroupLabel>

export {
  Input,
  _InputPassword as InputPassword,
  _InputGroup as InputGroup,
  _InputGroupLabel as InputGroupLabel,
}

export const _InputComponent = Input
export const _InputPasswordComponent = _InputPassword
export const _InputGroupComponent = _InputGroup
export const _InputGroupLabelComponent = _InputGroupLabel

export default Input
