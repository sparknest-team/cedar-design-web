import { withInstall } from '../_utils/global-config'
import _Switch from './presentation'
import { switchProps } from './props'

const Switch: import('../_utils/global-config').ComponentWithInstall<typeof _Switch> = withInstall(_Switch, Object.assign(_Switch, {}), { components: [_Switch] })

export type SwitchInstance = InstanceType<typeof _Switch>
export { switchProps }
export type { SwitchBeforeChange, SwitchProps, SwitchValue, SwitchVariant, SwitchSize } from './props'
export { Switch }
export const _SwitchComponent: typeof Switch = Switch

export default Switch
