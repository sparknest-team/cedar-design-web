import { withInstall } from '../_utils/global-config'
import _Ellipsis from './src/ellipsis.vue'
import { ellipsisProps } from './src/props'

const Ellipsis = withInstall(_Ellipsis, Object.assign(_Ellipsis, {
}), { components: [_Ellipsis] })

export type EllipsisInstance = InstanceType<typeof _Ellipsis>
export type { EllipsisProps, EllipsisExpandTrigger } from './src/props'

export { ellipsisProps }
export { Ellipsis }

export const _EllipsisComponent = Ellipsis

export default Ellipsis
