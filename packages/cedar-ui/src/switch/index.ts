import { withInstall } from '../_utils/global-config'
import _Switch from './switch.vue'
import { switchProps } from './props'

const Switch = withInstall(_Switch, Object.assign(_Switch, {
}), { components: [_Switch] })

export type SwitchInstance = InstanceType<typeof _Switch>
export { switchProps }
export type { SwitchBeforeChange, SwitchProps, SwitchValue, SwitchVariant } from './props'
export { Switch }
export const _SwitchComponent = Switch

export default Switch
