import { withInstall } from '../_utils/global-config'
import _Empty from './Empty.vue'
import { emptyProps } from './props'

const Empty: import('../_utils/global-config').ComponentWithInstall<typeof _Empty> = withInstall(_Empty, Object.assign(_Empty, {
}), { components: [_Empty] })

export type EmptyInstance = InstanceType<typeof _Empty>
export { emptyProps }
export type { EmptyImageSize, EmptyProps } from './props'
export { Empty }
export const _EmptyComponent: typeof Empty = Empty

export default Empty
