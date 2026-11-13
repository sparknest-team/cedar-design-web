import { withInstall } from '../_utils/global-config'
import _Calendar from './calendar'
import { calendarProps } from './props'

const Calendar: import('../_utils/global-config').ComponentWithInstall<typeof _Calendar> = withInstall(_Calendar, Object.assign(_Calendar, {
}), { components: [_Calendar] })

export type CalendarInstance = InstanceType<typeof _Calendar>
export type { CalendarEmits, CalendarSlots } from './types'

export const _CalendarComponent: typeof Calendar = Calendar

export { Calendar }

export { calendarProps }

export default Calendar
export type CalendarProps = import('../_utils/public-props').CompatiblePublicProps<typeof import('./props').calendarProps>
