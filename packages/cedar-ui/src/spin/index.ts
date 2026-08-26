import { withInstall } from '../_utils/global-config'
import _Spin from './spin'
import { spinProps } from './props'

const Spin = withInstall(_Spin, Object.assign(_Spin, {
}), { components: [_Spin] })

export type SpinInstance = InstanceType<typeof _Spin>

export const _SpinComponent = Spin

export { Spin }

export { spinProps }

export default Spin
