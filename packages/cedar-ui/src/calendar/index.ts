import { withInstall } from '../_utils/global-config'
import _Calendar from './calendar'
import { calendarProps } from './props'

const Calendar = withInstall(_Calendar, Object.assign(_Calendar, {
}), { components: [_Calendar] })

export type CalendarInstance = InstanceType<typeof _Calendar>

export const _CalendarComponent = Calendar

export { Calendar }

export { calendarProps }

export default Calendar
