import { withInstall } from '../_utils/global-config'
import _Countdown from './countdown.vue'
import { countdownProps } from './props'

const Countdown = withInstall(_Countdown)

export type CountdownInstance = InstanceType<typeof _Countdown>
export type { CountdownProps, TimeData } from './props'

export { countdownProps }
export { Countdown }

export const _CountdownComponent = Countdown

export default Countdown
