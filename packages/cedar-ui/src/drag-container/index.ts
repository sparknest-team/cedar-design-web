import { withInstall } from '../_utils/global-config'
import _DragContainer from './drag-container'
import { dragContainerProps } from './props'

const DragContainer = withInstall(_DragContainer, Object.assign(_DragContainer, {
}), { components: [_DragContainer] })

export type DragContainerInstance = InstanceType<typeof _DragContainer>
export type { DragContainerProps, DragOptions } from './props'

export { dragContainerProps }
export { DragContainer }

export const _DragContainerComponent = DragContainer

export default DragContainer
