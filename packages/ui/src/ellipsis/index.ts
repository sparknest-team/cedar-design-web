import { withInstall } from '../_utils/global-config'
import _Ellipsis from './Ellipsis.vue'
import { ellipsisProps } from './props'

const Ellipsis: import('../_utils/global-config').CedarComponentWithInstall<typeof _Ellipsis> = withInstall(_Ellipsis, _Ellipsis, { components: [_Ellipsis] })
export type EllipsisInstance = InstanceType<typeof _Ellipsis>
export type { EllipsisProps, EllipsisExpandTrigger } from './props'
export { Ellipsis, ellipsisProps }
export const _EllipsisComponent: typeof Ellipsis = Ellipsis
export default Ellipsis
