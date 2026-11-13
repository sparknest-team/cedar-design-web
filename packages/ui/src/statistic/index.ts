import { withInstall } from '../_utils/global-config'
import _Statistic from './Statistic.vue'
import { statisticProps } from './props'

const Statistic: import('../_utils/global-config').ComponentWithInstall<typeof _Statistic> = withInstall(_Statistic)

export type StatisticInstance = InstanceType<typeof _Statistic>
export type { StatisticProps, StatisticSlots } from './props'

export { statisticProps }
export { Statistic }

export const _StatisticComponent: typeof Statistic = Statistic

export default Statistic
