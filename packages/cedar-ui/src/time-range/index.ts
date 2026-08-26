import { withInstall } from '../_utils/global-config'
import _TimeRange from './time-range.vue'
import { timeRangeProps } from './props'

const TimeRange = withInstall(_TimeRange, Object.assign(_TimeRange, {
}), { components: [_TimeRange] })

export type TimeRangeInstance = InstanceType<typeof _TimeRange>
export type { TimeRangeProps } from './props'
export { TimeRange, timeRangeProps }
export const _TimeRangeComponent = TimeRange

export default TimeRange
