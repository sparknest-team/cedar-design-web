import { withInstall } from '../_utils/global-config'
import _CountTo from './count-to.vue'
import { countToProps } from './props'

const CountTo = withInstall(_CountTo, Object.assign(_CountTo, {
}), { components: [_CountTo] })

export type CountToInstance = InstanceType<typeof _CountTo>
export type { CountToProps } from './props'

export { countToProps }
export { CountTo }

export const _CountToComponent = CountTo

export default CountTo
