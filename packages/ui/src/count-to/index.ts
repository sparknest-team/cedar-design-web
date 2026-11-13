import { withInstall } from '../_utils/global-config'
import _CountTo from './CountTo.vue'
import { countToProps } from './props'

const CountTo: import('../_utils/global-config').ComponentWithInstall<typeof _CountTo> = withInstall(_CountTo, Object.assign(_CountTo, {
}), { components: [_CountTo] })

export type CountToInstance = InstanceType<typeof _CountTo>
export type { CountToProps, CountToSlots, CountToEmits, CountToExpose } from './props'

export { countToProps }
export { CountTo }

export const _CountToComponent: typeof CountTo = CountTo

export default CountTo
