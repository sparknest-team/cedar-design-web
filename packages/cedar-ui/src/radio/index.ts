import { withInstall } from '../_utils/global-config'
import _Radio from './radio'
import _RadioGroup from './radio-group'
import { radioGroupProps, radioProps } from './props'

const Radio = withInstall(_Radio, Object.assign(_Radio, {
  Group: _RadioGroup,
}), { components: [_Radio, _RadioGroup] })

export type RadioInstance = InstanceType<typeof _Radio>
export type RadioGroupInstance = InstanceType<typeof _RadioGroup>
export { radioGroupProps, radioProps }
export type { RadioGroupProps, RadioProps, RadioValue } from './props'
export type { RadioVariant } from './context'

export { Radio, _RadioGroup as RadioGroup }
export const _RadioComponent = Radio
export const _RadioGroupComponent = _RadioGroup

export default Radio
