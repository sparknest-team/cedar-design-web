import { withInstall } from '../_utils/global-config'
import _Input from './base'
import _InputGroup from './InputGroup.vue'
import _InputGroupLabel from './InputGroupLabel.vue'
import _InputPassword from './InputPassword.vue'
import { inputProps } from './props'

const Input: import('../_utils/global-config').CedarComponentWithInstall<typeof _Input & { Password: typeof _InputPassword; Group: typeof _InputGroup; GroupLabel: typeof _InputGroupLabel }> = withInstall(
  _Input,
  Object.assign(_Input, {
    Password: _InputPassword,
    Group: _InputGroup,
    GroupLabel: _InputGroupLabel,
  }),
  { components: [_Input, _InputGroup, _InputPassword, _InputGroupLabel] },
)

export type InputInstance = InstanceType<typeof _Input>
export { inputProps }
export { inputPasswordProps, inputGroupProps } from './props'
export type {
  InputMaxLength,
  InputPasswordProps,
  InputGroupProps,
  InputProps,
  InputType,
  InputVariant,
  WordLength,
  WordSlice,
} from './props'
export type InputPasswordInstance = InstanceType<typeof _InputPassword>
export type InputGroupInstance = InstanceType<typeof _InputGroup>
export type InputGroupLabelInstance = InstanceType<typeof _InputGroupLabel>

export { Input, _InputPassword as InputPassword, _InputGroup as InputGroup, _InputGroupLabel as InputGroupLabel }

export const _InputComponent: typeof Input = Input
export const _InputPasswordComponent: typeof _InputPassword = _InputPassword
export const _InputGroupComponent: typeof _InputGroup = _InputGroup
export const _InputGroupLabelComponent: typeof _InputGroupLabel = _InputGroupLabel

export default Input

export type { InputEmits, InputSlots, InputExpose, InputGroupSlots, InputPasswordEmits, InputPasswordSlots, InputPasswordExpose } from './types'
