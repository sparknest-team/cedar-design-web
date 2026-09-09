import { withInstall } from '../_utils/global-config'
import Component from './col.vue'
import { colProps } from './props'
const Col = withInstall(Component)
export { Col, colProps }
export type { ColProps, ColBreakpoint, ColSizeDescriptor, FlexType } from './props'
export type ColInstance = InstanceType<typeof Component>
export const _ColComponent = Col
export default Col
