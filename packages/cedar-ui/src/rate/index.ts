import { withInstall } from '../_utils/global-config'
import _Rate from './presentation'
import { rateProps } from './props'

const Rate = withInstall(_Rate, Object.assign(_Rate, {}), { components: [_Rate] })

export type RateInstance = import('./props').RateExpose & InstanceType<typeof _Rate>
export { Rate, rateProps }
export type { RateColor, RateIcon, RateProps, RateExpose, RateEmits, RateCharacterSlotProps } from './props'
export const _RateComponent = Rate

export default Rate
