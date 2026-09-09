import { tabsProps } from './props'
import type { PropType } from 'vue'
import { computed, defineComponent, nextTick, provide, reactive, ref, toRefs, inject, toRef } from 'vue'
import type { ComponentSize } from '../_utils/constant'
import type { TabVariant, TabData, TabTriggerEvent, ScrollPosition } from './types'
import { createNamespace } from '../_utils/global-config'
import { tabsInjectionKey, tabsNavInjectionKey } from './context'
import { isUndefined } from '../_utils/is'
import { useSize } from '../_hooks/use-size'
import { configProviderInjectionKey } from '../config-provider/context'

export default defineComponent({
  name: createNamespace('tabs').name,
  props: tabsProps,
  emits: {
    'update:active': (key: string | number) => true,
    /**
     * @zh 当前标签值改变时触发
     * @en Triggered when the current tag value changes
     * @property { string | number } key
     */
    change: (key: string | number) => true,
    /**
     * @zh 用户点击标签时触发
     * @en Triggered when the user clicks on the tab
     * @property { string | number } key
     */
    "tab-click": (key: string | number, ev: Event) => true,
    /**
     * @zh 用户点击增加按钮时触发
     * @en Triggered when the user clicks the add button
     */
    add: (ev: Event) => true,
    /**
     * @zh 用户点击删除按钮时触发
     * @en Triggered when the user clicks the delete button
     * @property { string | number } key
     */
    delete: (key: string | number, ev: Event) => true,
  },
  /**
   * @zh 选项卡前缀内容
   * @en Prefix tab content
   * @slot prefix
   */
  /**
   * @zh 选项卡后缀内容
   * @en Suffix tab content
   * @slot suffix
   */

  setup(props, { emit, slots }) {
    const { size, lazyLoad, destroyOnHide, trigger, indicatorPosition } = toRefs(props)
    const vertical = computed(() => props.orientation === 'vertical')
    const { classes, n } = createNamespace('tabs')
    const { mergedSize } = useSize(size)

    const tabMap = reactive(new Map<number, TabData>())
    // Track UIDs in registration order
    const tabUidOrder = ref<number[]>([])
    // Trigger ref to force re-render when tabs mount/unmount (for JSX reactivity)
    const tabVersion = ref(0)

    const addItem = (id: number, data: any) => {
      tabMap.set(id, data)
      if (!tabUidOrder.value.includes(id)) {
        tabUidOrder.value.push(id)
      }
      tabVersion.value++
    }

    const removeItem = (id: number) => {
      tabMap.delete(id)
      tabUidOrder.value = tabUidOrder.value.filter((uid) => uid !== id)
      tabVersion.value++
    }

    // tabKeys is updated in the render function from VNode key order
    const tabKeys = ref<(string | number)[]>([])
    // sortedTabs is a computed that re-evaluates when tabKeys or tabVersion changes
    // (tabVersion is bumped in addItem/removeItem, ensuring reactivity for tabMap changes)
    const sortedTabs = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      tabVersion.value
      return tabKeys.value
        .map((key) => {
          for (const [, tab] of tabMap) {
            if (tab.key === key) return tab
          }
          return null
        })
        .filter(Boolean) as TabData[]
    })

    const _activeKey = ref(props.defaultActive)

    const computedActiveKey = computed(() => {
      const activeKey = props.active ?? _activeKey.value
      if (isUndefined(activeKey)) {
        return tabKeys.value[0]
      }
      return activeKey
    })

    const activeIndex = computed(() => {
      const index = tabKeys.value.indexOf(computedActiveKey.value)
      if (index === -1) {
        return 0
      }
      return index
    })

    provide(
      tabsInjectionKey,
      reactive({
        lazyLoad,
        destroyOnHide,
        activeKey: computedActiveKey,
        addItem,
        removeItem,
        trigger,
      }),
    )

    const handleChange = (key: string | number) => {
      if (key !== computedActiveKey.value) {
        _activeKey.value = key
        emit('update:active', key)
        emit('change', key)
      }
    }

    const handleClick = (key: string | number, e: Event) => {
      handleChange(key)
      emit('tab-click', key, e)
    }

    const handleAdd = (ev: Event) => {
      emit('add', ev)
      if (props.autoSwitch) {
        nextTick(() => {
          const lastKey = tabKeys.value[tabKeys.value.length - 1]
          handleChange(lastKey)
        })
      }
    }

    const handleDelete = (key: string | number, ev: Event) => {
      emit('delete', key, ev)
    }

    provide(tabsNavInjectionKey, reactive({
      tabs: sortedTabs,
      activeKey: computedActiveKey,
      activeIndex,
      vertical,
      indicatorPosition,
      size: mergedSize,
      variant: toRef(props, 'variant'),
      editable: toRef(props, 'editable'),
      animation: toRef(props, 'animation'),
      showAddButton: toRef(props, 'showAddButton'),
      headerPadding: toRef(props, 'headerPadding'),
      scrollPosition: toRef(props, 'scrollPosition'),
      onTabClick: handleClick,
      onAdd: handleAdd,
      onDelete: handleDelete,
    }))

    const configCtx = inject(configProviderInjectionKey, undefined)
    const rtl = computed(() => configCtx?.rtl ?? false)

    const renderContent = (contentVNodes?: any[]) => {
      return (
        <div class={classes(n('content'), [props.hideContent, n('--content-hide')])}>
          <div
            class={classes(n('content-list'), [props.animation, n('--content-animation')])}
            style={
              rtl.value
                ? { marginRight: `-${activeIndex.value * 100}%` }
                : { marginLeft: `-${activeIndex.value * 100}%` }
            }
          >
            {contentVNodes}
          </div>
        </div>
      )
    }

    const cls = computed(() =>
      classes(
        n(),
        [vertical.value, n('--vertical')],
        [indicatorPosition.value, n(`--indicator-${indicatorPosition.value}`)],
        [props.variant, n(`--variant-${props.variant}`)],
        [mergedSize.value, n(`--size-${mergedSize.value}`)],
        [props.justify, n('--justify')],
        [rtl.value, n('--rtl')],
      ),
    )

    return () => {
      // Create reactivity dependency on tab registration changes
      tabVersion.value

      const defaultVNodes = slots.default?.() ?? []

      // Extract keys from c-tabs-navs slot VNodes for tab ordering.
      // v-for wraps items in a Fragment, so we need to flatten children.
      for (const vn of defaultVNodes) {
        if ((vn as any)?.type?.name === 'CTabsNavs') {
          const navVNodes: any[] = ((vn as any).children as any)?.default?.() ?? []
          const flatKeys: (string | number)[] = []
          const flatten = (nodes: any[]) => {
            for (const n of nodes) {
              // Fragment: check children array
              if (Array.isArray(n.children)) {
                flatten(n.children)
              } else {
                const k = n.key ?? n.props?.key
                if (k !== undefined && k !== null) flatKeys.push(k)
              }
            }
          }
          flatten(navVNodes)
          tabKeys.value = flatKeys
          break
        }
      }

      // Replace c-tabs-items with content area, pass everything else through
      const rendered = defaultVNodes.map((vn: any) => {
        if (vn.type?.name === 'CTabsItems') {
          const itemChildren: any[] = (vn.children as any)?.default?.() ?? []
          return renderContent(itemChildren)
        }
        return vn
      })

      return <div class={cls.value}>{rendered}</div>
    }
  },
})
