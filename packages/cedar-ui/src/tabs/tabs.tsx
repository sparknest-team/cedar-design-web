import type { PropType } from 'vue'
import { computed, defineComponent, nextTick, provide, reactive, ref, toRefs, inject, toRef } from 'vue'
import type { Size } from '../_utils/constant'
import type { TabVariant, TabData, TabTriggerEvent, ScrollPosition } from './types'
import { createNamespace } from '../_utils/global-config'
import { tabsInjectionKey, tabsNavInjectionKey } from './context'
import { isUndefined } from '../_utils/is'
import { useSize } from '../_hooks/use-size'
import { configProviderInjectionKey } from '../config-provider/context'

export default defineComponent({
  name: 'CTabs',
  props: {
    /**
     * @zh 当前选中的标签的 `key`
     * @en The `key` of the currently selected label
     * @vModel
     */
    active: {
      type: [String, Number],
      default: undefined,
    },
    /**
     * @zh 默认选中的标签的`key`（非受控状态，为空时选中第一个标签页）
     * @en The `key` of the tab selected by default (uncontrolled state, select the first tab page when it is empty)
     */
    defaultActive: {
      type: [String, Number],
      default: undefined,
    },
    /**
     * @zh 指示器位置
     * @en Indicator position
     * @values 'normal', 'reverse'
     */
    indicatorPosition: {
      type: String as PropType<'normal' | 'reverse'>,
      default: 'normal',
    },
    /**
     * @zh 选项卡的大小
     * @en The size of the tab
     * @values 'xs', 'sm', 'md', 'lg', 'xl'
     * @defaultValue 'md'
     */
    size: {
      type: String as PropType<Size>,
    },
    /**
     * @zh 选项卡的变体
     * @en The variant of tab
     * @values 'line', 'card', 'outline', 'plain', 'capsule', 'enclosed'
     */
    variant: {
      type: String as PropType<TabVariant>,
      default: 'line',
    },
    /**
     * @zh 是否垂直展示
     * @en Whether to display vertically
     */
    vertical: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否开启可编辑模式
     * @en Whether to enable editable mode
     */
    editable: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否显示增加按钮（仅在可编辑模式可用）
     * @en Whether to display the add button (only available in editable mode)
     */
    showAddButton: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在不显示标签时销毁内容
     * @en Whether to destroy the content when the label is not displayed
     * @version 2.27.0
     */
    destroyOnHide: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在首次展示标签时挂载内容
     * @en Whether to mount the content when the label is first displayed
     */
    lazyLoad: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 高度撑满容器，只在水平模式下生效。
     * @en The height of the container is fully supported, and it only takes effect in horizontal mode.
     */
    justify: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否开启选项内容过渡动画
     * @en Whether to enable option content transition animation
     */
    animation: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 选项卡头部是否存在水平边距。仅对 `type` 等于 `line`、`text` 类型的选项卡生效
     * @en Whether there is a horizontal margin on the header of the tab. Only valid for tabs with `type` equal to `line` and `text` type
     * @version 2.10.0
     */
    headerPadding: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 创建标签后是否切换到新标签（最后一个）
     * @en Whether to switch to a new tab after creating a tab (the last one)
     * @version 2.18.0
     */
    autoSwitch: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否隐藏内容
     * @en Whether to hide content
     * @version 2.25.0
     */
    hideContent: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 触发方式
     * @en Trigger method
     * @values 'hover','click'
     * @version 2.34.0
     */
    trigger: {
      type: String as PropType<TabTriggerEvent>,
      default: 'click',
    },
    /**
     * @zh 被选中 tab 的滚动位置，默认 auto 即会将 activeTab 滚动到可见区域，但不会特意做位置调整
     * @en The scroll position of the selected tab, the default auto will scroll the activeTab to the visible area, but will not adjust the position intentionally
     * @values 'start', 'end', 'center', 'auto', number
     */
    scrollPosition: {
      type: [String, Number] as PropType<ScrollPosition>,
      default: 'auto',
    },
  },
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
    tabClick: (key: string | number, ev: Event) => true,
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
    const { size, lazyLoad, destroyOnHide, trigger, indicatorPosition, vertical } = toRefs(props)
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
      emit('tabClick', key, e)
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
