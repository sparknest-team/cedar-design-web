import { withInstall } from '../_utils/global-config'
import _Date from './date.vue'
import { dateProps } from './props'

const Date = withInstall(_Date, Object.assign(_Date, {
}), { components: [_Date] })

export type DateInstance = InstanceType<typeof _Date>
export type { DateProps } from './props'
export { Date, dateProps }
export const _DateComponent = Date

export default Date
