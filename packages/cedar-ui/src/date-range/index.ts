import { withInstall } from '../_utils/global-config'
import _DateRange from './date-range.vue'
import { dateRangeProps } from './props'

const DateRange = withInstall(_DateRange, Object.assign(_DateRange, {
}), { components: [_DateRange] })

export type DateRangeInstance = InstanceType<typeof _DateRange>
export type { DateRangeProps } from './props'
export { DateRange, dateRangeProps }
export const _DateRangeComponent = DateRange

export default DateRange
