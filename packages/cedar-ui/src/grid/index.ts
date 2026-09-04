import { withInstall } from '../_utils/global-config'
import _GridRow from './grid-row.vue'
import _GridCol from './grid-col.vue'
import _Grid from './grid.vue'
import _GridItem from './grid-item.vue'
import { gridProps } from './props'

const Grid = withInstall(_Grid, Object.assign(_Grid, {
  Row: _GridRow,
  Col: _GridCol,
  Item: _GridItem,
}), { components: [_GridRow, _GridCol, _Grid, _GridItem] })

export type GridRowInstance = InstanceType<typeof _GridRow>
export type GridColInstance = InstanceType<typeof _GridCol>
export type GridInstance = InstanceType<typeof _Grid>
export type GridItemInstance = InstanceType<typeof _GridItem>

export type { ResponsiveValue, RowProps, ColProps, GridProps, GridItemProps } from './types'

export { _GridRow as Row, _GridCol as Col, _GridItem as GridItem }
export const _GridComponent = Grid
export const _RowComponent = _GridRow
export const _ColComponent = _GridCol
export const _GridItemComponent = _GridItem

export { Grid }

export { gridProps }

export default Grid
