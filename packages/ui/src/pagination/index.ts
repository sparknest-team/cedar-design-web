import { withInstall } from '../_utils/global-config'
import _Pagination from './Pagination.vue'
import { paginationProps } from './props'

const Pagination: import('../_utils/global-config').ComponentWithInstall<typeof _Pagination> = withInstall(_Pagination, Object.assign(_Pagination, {}), { components: [_Pagination] })

export type PaginationInstance = InstanceType<typeof _Pagination>
export { paginationProps }
export type { PaginationProps } from './props'
export { Pagination }
export const _PaginationComponent: typeof Pagination = Pagination

export default Pagination

export type { PaginationPageSizeProps } from './types'
