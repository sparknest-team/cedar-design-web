import { withInstall } from '../_utils/global-config'
import _RadioGroup from './group-presentation'
import _Radio from './presentation'
import { radioGroupProps, radioProps } from './props'

const Radio: import('../_utils/global-config').CedarComponentWithInstall<
  typeof _Radio & { Group: typeof _RadioGroup }
> = withInstall(
  _Radio,
  Object.assign(_Radio, {
    Group: _RadioGroup,
  }),
  { components: [_Radio, _RadioGroup] },
)

export type RadioInstance = InstanceType<typeof _Radio> & import('./props').RadioMethods
export type RadioGroupInstance = InstanceType<typeof _RadioGroup>
export { radioGroupProps, radioProps }
export type { RadioGroupProps, RadioProps, RadioValue } from './props'
export type { RadioVariant } from './variant'

export { Radio, _RadioGroup as RadioGroup }
export const _RadioComponent: typeof Radio = Radio
export const _RadioGroupComponent: typeof _RadioGroup = _RadioGroup

export default Radio

export type { RadioMethods } from './props'

export type { RadioOption } from './types'

export type { RadioEmits, RadioGroupEmits, RadioSlots, RadioGroupSlots } from './props'
