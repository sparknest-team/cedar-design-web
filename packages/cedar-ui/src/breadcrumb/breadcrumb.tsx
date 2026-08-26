import { computed, defineComponent, mergeProps } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { useBreadcrumbItems } from './provide'
import { getAllElements } from '../_utils/vue-utils'
import { breadcrumbProps } from './props'
import type { BreadcrumbRoute } from './types'
import BreadcrumbItem from './breadcrumb-item'


const { name, n } = createNamespace('breadcrumb')

export default defineComponent({
  name,
  props: breadcrumbProps,
  /**
   * @zh 自定义分隔符
   * @slot separator
   */
  /**
   * @zh routes 设置时生效，自定义渲染面包屑
   * @binding {BreadcrumbRoute} route
   * @binding {BreadcrumbRoute[]} routes
   * @binding {string[]} paths
   * @slot item-render
   */
  /**
   * @zh 自定义更多图标
   * @slot more-icon
   */
  setup(props, { slots }) {
    const { length, bindBreadcrumbItems } = useBreadcrumbItems()

    const maxCount = computed(() => props.maxCount)
    const separator = computed(() => props.separator)
    const total = computed(() => props.routes?.length ?? length.value)
    const needHide = computed(() => maxCount.value > 0 && total.value > maxCount.value + 1)
    const moreSlotData = computed(() => {
      const end = needHide.value ? total.value - maxCount.value : 0
      return {
        omittedItems: props.routes?.slice(1, end + 1) ?? [],
        count: needHide.value ? end : 0,
        start: needHide.value ? 1 : -1,
        end: needHide.value ? end : -1,
      }
    })

    bindBreadcrumbItems({
      length: total,
      maxCount,
      separator,
      needHide,
      moreSlotData,
      slots,
    } as any)

    const defaultItemRender = (route: BreadcrumbRoute, _list: BreadcrumbRoute[], _paths: string[]) => {
      return route.label
    }

    const renderByRoutes = () => {
      if (!props.routes?.length) return null

      const paths: string[] = []

      return props.routes.map((route, idx, origin) => {
        paths.push((route.path || '').replace(/^\//, ''))
        const currentPaths = [...paths]
        return (
          <BreadcrumbItem
            key={route.path || route.label}
            index={idx}
            droplist={route.children}
            href={slots['item-render'] || idx === origin.length - 1 ? undefined : route.path}
            v-slots={{
              default: () =>
                slots['item-render']?.({ route, routes: origin, paths: currentPaths }) ??
                defaultItemRender(route, origin, currentPaths),
            }}
          />
        )
      })
    }

    const renderByChildren = () => {
      const children = getAllElements(slots.default?.() ?? [])

      return children.map((child, index) => {
        child.props = mergeProps(child.props ?? {}, { index })
        return child
      })
    }

    return () => {
      return (
        <div role="navigation" aria-label="Breadcrumb" class={n()}>
          {props.routes?.length ? renderByRoutes() : renderByChildren()}
        </div>
      )
    }
  },
})
