import type { BreadcrumbInstance, BreadcrumbRoute } from '@cedar-design/ui'

function select(instance: BreadcrumbInstance, route: BreadcrumbRoute, event: Event) {
  instance.$emit('select', route, event)
  instance.$emit('select', route)
  // @ts-expect-error A selected child must be a breadcrumb route.
  instance.$emit('select', 'child')
}
void select

import { breadcrumbProps, breadcrumbItemProps } from '@cedar-design/ui'
import { breadcrumbProps as subProps, breadcrumbItemProps as subItemProps } from '@cedar-design/ui/breadcrumb'
const rootProps: typeof subProps = breadcrumbProps
const rootItemProps: typeof subItemProps = breadcrumbItemProps
void [rootProps, rootItemProps]
