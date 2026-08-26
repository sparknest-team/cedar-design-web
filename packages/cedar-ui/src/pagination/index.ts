import { withInstall } from '../_utils/global-config'
import _Pagination from './pagination'
import { paginationProps } from './props'

const Pagination = withInstall(_Pagination, Object.assign(_Pagination, {
}), { components: [_Pagination] })

export type PaginationInstance = InstanceType<typeof _Pagination>
export { paginationProps }
export type { PaginationProps } from './props'
export { Pagination }
export const _PaginationComponent = Pagination

export default Pagination
