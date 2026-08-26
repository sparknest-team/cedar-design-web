import { withInstall } from '../_utils/global-config'
import _Rate from './rate'
import { rateProps } from './props'

const Rate = withInstall(_Rate, Object.assign(_Rate, {
}), { components: [_Rate] })

export type RateInstance = InstanceType<typeof _Rate>
export { Rate, rateProps }
export type { RateColor, RateProps } from './props'
export const _RateComponent = Rate

export default Rate
