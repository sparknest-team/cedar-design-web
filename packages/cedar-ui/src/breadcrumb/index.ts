import type { App } from 'vue'
import type { ArcoOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Breadcrumb from './breadcrumb'
import _BreadcrumbItem from './breadcrumb-item'
import { breadcrumbProps, breadcrumbItemProps } from './props'

const Breadcrumb = Object.assign(_Breadcrumb, {
  Item: _BreadcrumbItem,
  install: (app: App, options?: ArcoOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Breadcrumb.name, _Breadcrumb)
    app.component(componentPrefix + _BreadcrumbItem.name, _BreadcrumbItem)
  },
})

export type BreadcrumbInstance = InstanceType<typeof _Breadcrumb>
export type BreadcrumbItemInstance = InstanceType<typeof _BreadcrumbItem>
export type { BreadcrumbRoute } from './types'
export type { BreadcrumbProps, BreadcrumbItemProps } from './props'

export { breadcrumbProps, breadcrumbItemProps }
export { _BreadcrumbItem as BreadcrumbItem }
export { _Breadcrumb as Breadcrumb }

export const _BreadcrumbComponent = Breadcrumb
export const _BreadcrumbItemComponent = _BreadcrumbItem

export default Breadcrumb
