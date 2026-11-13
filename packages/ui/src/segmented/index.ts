import { withInstall } from '../_utils/global-config'
import _Segmented from './segmented'
import { segmentedProps } from './props'

const Segmented: import('../_utils/global-config').ComponentWithInstall<typeof _Segmented> = withInstall(_Segmented, Object.assign(_Segmented, {
}), { components: [_Segmented] })

export type SegmentedInstance = InstanceType<typeof _Segmented>
export { segmentedProps }
export type { SegmentedOption, SegmentedProps, SegmentedValue } from './props'
export { Segmented }
export const _SegmentedComponent: typeof Segmented = Segmented
export default Segmented
