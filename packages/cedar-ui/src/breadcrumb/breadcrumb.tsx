import { computed, defineComponent, mergeProps } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { useBreadcrumbItems } from './provide'
import { getAllElements } from '../_utils/vue-utils'
import { breadcrumbProps } from './props'
import type { BreadcrumbRoute } from './types'
import BreadcrumbItem from './breadcrumb-item'
import Affix from '../affix'


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
    const needHide = computed(() => maxCount.value > 0 && length.value > maxCount.value + 1)

    bindBreadcrumbItems({
      length,
      maxCount,
      separator,
      needHide,
      slots,
    })

    const defaultItemRender = (route: BreadcrumbRoute, list: BreadcrumbRoute[], paths: string[]) => {
      if (list.indexOf(route) === list.length - 1) {
        return <span>{route.label}</span>
      }
      const href = props.customUrl?.(paths) ?? `#/${paths.join('/').replace(/^\//, '')}`

      return <a href={href}>{route.label}</a>
    }

    const renderByRoutes = () => {
      if (!props.routes?.length) return null

      const paths: string[] = []

      return props.routes.map((route, _idx, origin) => {
        paths.push((route.path || '').replace(/^\//, ''))
        const currentPaths = [...paths]
        return (
          <BreadcrumbItem key={route.path || route.label} droplist={route.children}>
            {slots['item-render']?.({
              route,
              routes: origin,
              paths: currentPaths,
            }) ?? defaultItemRender(route, origin, currentPaths)}
          </BreadcrumbItem>
        )
      })
    }

    const renderByChildren = () => {
      const children = getAllElements(slots.default?.() ?? [])

      return children.map((child) => {
        child.props = mergeProps(child.props ?? {})
        return child
      })
    }

    return () => {
      const content = (
        <div role="list" class={n()}>
          {slots.default ? renderByChildren() : renderByRoutes()}
        </div>
      )

      if (!props.sticky) return content

      return (
        <Affix
          target={props.target}
          targetContainer={props.targetContainer}
          offsetTop={props.offsetTop}
          offsetBottom={props.offsetBottom}
        >
          {content}
        </Affix>
      )
    }
  },
})
