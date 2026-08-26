import { withInstall } from '../_utils/global-config'
import _Statistic from './statistic.vue'
import _Countdown from './countdown.vue'
import { statisticProps } from './props'

const Statistic = withInstall(_Statistic, Object.assign(_Statistic, {
  Countdown: _Countdown,
}), { components: [_Statistic, _Countdown] })

export type StatisticInstance = InstanceType<typeof _Statistic>
export type CountdownInstance = InstanceType<typeof _Countdown>

export { _Countdown as Countdown }

export const _StatisticComponent = Statistic

export { Statistic }

export { statisticProps }

export default Statistic
