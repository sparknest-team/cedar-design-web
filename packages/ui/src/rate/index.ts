import { withInstall } from '../_utils/global-config'
import _Rate from './presentation'
import { rateProps } from './props'

const Rate: import('../_utils/global-config').ComponentWithInstall<typeof _Rate> = withInstall(_Rate, Object.assign(_Rate, {}), { components: [_Rate] })

export type RateInstance = import('./props').RateExpose & InstanceType<typeof _Rate>
export { Rate, rateProps }
export type { RateColor, RateIcon, RateProps, RateExpose, RateEmits, RateCharacterSlotProps, RateSlots, RateReadScope } from './props'
export const _RateComponent: typeof Rate = Rate

export default Rate
