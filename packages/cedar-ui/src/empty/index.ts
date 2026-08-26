import { withInstall } from '../_utils/global-config'
import _Empty from './empty'
import { emptyProps } from './props'

const Empty = withInstall(_Empty, Object.assign(_Empty, {
}), { components: [_Empty] })

export type EmptyInstance = InstanceType<typeof _Empty>
export { emptyProps }
export type { EmptyImageSize, EmptyProps } from './props'
export { Empty }
export const _EmptyComponent = Empty

export default Empty
