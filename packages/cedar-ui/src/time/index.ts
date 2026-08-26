import { withInstall } from '../_utils/global-config'
import _Time from './time.vue'
import { timeProps } from './props'

const Time = withInstall(_Time, Object.assign(_Time, {
}), { components: [_Time] })

export type TimeInstance = InstanceType<typeof _Time>
export type { TimeProps } from './props'
export { Time, timeProps }
export const _TimeComponent = Time

export default Time
