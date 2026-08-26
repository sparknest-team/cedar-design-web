import { withInstall } from '../_utils/global-config'
import _Breadcrumb from './breadcrumb'
import _BreadcrumbItem from './breadcrumb-item'
import { breadcrumbProps, breadcrumbItemProps } from './props'

const Breadcrumb = withInstall(_Breadcrumb, Object.assign(_Breadcrumb, {
  Item: _BreadcrumbItem,
}), { components: [_Breadcrumb, _BreadcrumbItem] })

export type BreadcrumbInstance = InstanceType<typeof _Breadcrumb>
export type BreadcrumbItemInstance = InstanceType<typeof _BreadcrumbItem>
export type { BreadcrumbRoute, BreadcrumbMoreIconSlotData } from './types'
export type { BreadcrumbProps, BreadcrumbItemProps } from './props'

export { breadcrumbProps, breadcrumbItemProps }
export { _BreadcrumbItem as BreadcrumbItem }
export { _Breadcrumb as Breadcrumb }

export const _BreadcrumbComponent = Breadcrumb
export const _BreadcrumbItemComponent = _BreadcrumbItem

export default Breadcrumb
