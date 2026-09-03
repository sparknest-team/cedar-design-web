import { withInstall } from '../_utils/global-config'
import _Statistic from './statistic.vue'
import { statisticProps } from './props'

const Statistic = withInstall(_Statistic)

export type StatisticInstance = InstanceType<typeof _Statistic>
export type { StatisticProps } from './props'

export { statisticProps }
export { Statistic }

export const _StatisticComponent = Statistic

export default Statistic
