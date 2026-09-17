import { withInstall } from '../_utils/global-config'
import Component from './Row.vue'
import { rowProps } from './props'
const Row = withInstall(Component)
export { Row, rowProps }
export type { RowProps, RowGutter, RowAlign, RowJustify } from './props'
export type RowInstance = InstanceType<typeof Component>
export const _RowComponent = Row
export default Row
