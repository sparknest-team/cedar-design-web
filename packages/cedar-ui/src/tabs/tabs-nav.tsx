import { computed, defineComponent, nextTick, onMounted, onUnmounted, PropType, ref, toRefs, watch, inject } from 'vue'
import { updateScrollOffset } from './utils'
import { createNamespace } from '../_utils/global-config'
import TabsTab from './tabs-tab.vue'
import TabsNavButton from './tabs-nav-button'
import TabsNavInk from './tabs-nav-ink.vue'
import type { TabData, TabVariant, ScrollPosition } from './types'
import IconHover from '../_components/icon-hover.vue'
import IconPlus from '../icon/icon-plus'
import ResizeObserver from '../_components/resize-observer'
import { isUndefined, isNumber } from '../_utils/is'
import { off, on } from '../_utils/dom'
import { configProviderInjectionKey } from '../config-provider/context'

export default defineComponent({
  name: 'CTabsNav',
  props: {
    tabs: {
      type: Array as PropType<TabData[]>,
      required: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String as PropType<TabVariant>,
      required: true,
    },
    activeKey: {
      type: [String, Number],
    },
    activeIndex: {
      type: Number,
      required: true,
    },
    indicatorPosition: {
      type: String as PropType<'normal' | 'reverse'>,
      default: 'normal',
    },
    size: {
      type: String,
      required: true,
    },
    showAddButton: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: Boolean,
      required: true,
    },
    headerPadding: {
      type: Boolean,
      default: true,
    },
    scrollPosition: {
      type: String as PropType<ScrollPosition>,
      default: 'auto',
    },
  },
  emits: ['click', 'add', 'delete'],
  setup(props, { emit, slots }) {
    const { tabs, activeKey, activeIndex, vertical, scrollPosition } = toRefs(props)
    const { classes, n } = createNamespace('tabs-nav')
    const configCtx = inject(configProviderInjectionKey, undefined)
    const rtl = computed(() => configCtx?.rtl ?? false)

    const wrapperRef = ref<HTMLElement>()
    const listRef = ref<HTMLElement>()
    const tabsRef = ref<Record<string | number, HTMLElement>>({})
    const activeTabRef = computed(() => {
      if (!isUndefined(activeKey.value)) {
        return tabsRef.value[activeKey.value]
      }
      return undefined
    })
    const isRtlHorizontal = computed(() => rtl.value && !vertical.value)
    const inkRef = ref<InstanceType<typeof TabsNavInk>>()

    const mergedEditable = computed(() => props.editable)
    const isScroll = ref(false)
    const wrapperLength = ref(0)
    const maxOffset = ref(0)
    const offset = ref(0)

    const getWrapperLength = () => {
      return (vertical.value ? wrapperRef.value?.offsetHeight : wrapperRef.value?.offsetWidth) ?? 0
    }

    const getMaxOffset = () => {
      if (!listRef.value || !wrapperRef.value) {
        return 0
      }

      if (vertical.value) {
        return listRef.value.scrollHeight - wrapperRef.value.offsetHeight
      }
      return listRef.value.scrollWidth - wrapperRef.value.offsetWidth
    }

    const getSize = () => {
      const overflow = isOverflow()
      const max = overflow ? getMaxOffset() : 0
      // Only enable scroll if there's meaningful overflow (>1px to avoid sub-pixel flicker)
      isScroll.value = max > 1
      if (isScroll.value) {
        wrapperLength.value = getWrapperLength()
        maxOffset.value = max
        if (offset.value > maxOffset.value) {
          offset.value = maxOffset.value
        }
      } else {
        offset.value = 0
      }
    }

    const isOverflow = () => {
      if (wrapperRef.value && listRef.value) {
        return vertical.value
          ? listRef.value.scrollHeight > wrapperRef.value.offsetHeight
          : listRef.value.scrollWidth > wrapperRef.value.offsetWidth
      }
      return false
    }

    const setOffset = (newOffset: number) => {
      if (!wrapperRef.value || !listRef.value || newOffset < 0) {
        newOffset = 0
      }
      offset.value = Math.min(newOffset, maxOffset.value)
    }

    const setActiveTabOffset = () => {
      if (!activeTabRef.value || !wrapperRef.value || !isScroll.value) return

      // 纠正浏览器默认行为导致的滚动偏移， 比如 Tab 聚焦
      updateScrollOffset(wrapperRef.value, vertical.value ? 'vertical' : 'horizontal')

      const isHorizontal = !vertical.value
      const sizeProperty = isHorizontal ? 'offsetWidth' : 'offsetHeight'
      const wrapperSize = wrapperRef.value[sizeProperty]
      const tabSize = activeTabRef.value[sizeProperty]

      // 计算标签位置（考虑 RTL 模式）
      let tabPosition = 0
      if (isRtlHorizontal.value) {
        const listWidth = listRef.value?.offsetWidth || 0
        const { offsetLeft } = activeTabRef.value
        // 对于 RTL 模式，计算从右侧开始的位置
        tabPosition = listWidth - offsetLeft - tabSize
      } else {
        // 对于 LTR 模式或垂直方向，直接使用标准偏移
        tabPosition = isHorizontal ? activeTabRef.value.offsetLeft : activeTabRef.value.offsetTop
      }

      const marginSide = isHorizontal
        ? isRtlHorizontal.value
          ? scrollPosition.value === 'end'
            ? 'marginLeft'
            : 'marginRight'
          : scrollPosition.value === 'end'
            ? 'marginRight'
            : 'marginLeft'
        : scrollPosition.value === 'end'
          ? 'marginBottom'
          : 'marginTop'

      const tabStyle = window.getComputedStyle(activeTabRef.value)
      const tabMargin = parseFloat(tabStyle[marginSide]) || 0

      let targetOffset = 0
      switch (scrollPosition.value) {
        case 'auto':
          if (tabPosition < offset.value) {
            targetOffset = tabPosition - tabMargin
          } else if (tabPosition + tabSize > offset.value + wrapperSize) {
            targetOffset = tabPosition + tabSize - wrapperSize + tabMargin
          }
          break
        case 'center':
          targetOffset = tabPosition + (tabSize - wrapperSize + tabMargin) / 2
          break
        case 'start':
          targetOffset = tabPosition - tabMargin
          break
        case 'end':
          targetOffset = tabPosition + tabSize - wrapperSize + tabMargin
          break
        default:
          if (isNumber(scrollPosition.value)) {
            targetOffset = tabPosition - scrollPosition.value
          }
      }

      setOffset(targetOffset)
    }

    const handleWheel = (ev: WheelEvent) => {
      if (!isScroll.value) return
      ev.preventDefault()

      const { deltaX, deltaY } = ev
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        setOffset(offset.value + deltaX)
      } else {
        setOffset(offset.value + deltaY)
      }
    }

    const handleClick = (key: string | number, ev: Event) => {
      emit('click', key, ev)
    }

    const handleDelete = (key: string | number, ev: Event) => {
      emit('delete', key, ev)
      nextTick(() => {
        delete tabsRef.value[key]
      })
    }

    const handleButtonClick = (type: string) => {
      const scrollorientation = (type === 'previous') !== isRtlHorizontal.value ? -1 : 1
      const nextOffset = offset.value + scrollorientation * wrapperLength.value

      setOffset(nextOffset)
    }

    const handleResize = () => {
      getSize()
      if (inkRef.value) {
        inkRef.value.$forceUpdate()
      }
    }

    watch(tabs, () => {
      nextTick(() => {
        getSize()
        setActiveTabOffset()
      })
    })

    watch([activeIndex, scrollPosition, rtl], () => {
      setTimeout(() => {
        setActiveTabOffset()
        if (inkRef.value) {
          inkRef.value.getInkStyle()
        }
      }, 0)
    })

    onMounted(() => {
      getSize()
      if (wrapperRef.value) {
        on(wrapperRef.value, 'wheel', handleWheel, { passive: false })
      }
    })

    onUnmounted(() => {
      if (wrapperRef.value) {
        off(wrapperRef.value, 'wheel', handleWheel)
      }
    })

    const renderAddBtn = () => {
      if (!mergedEditable.value || !props.showAddButton) {
        return null
      }
      return (
        <div class={classes(n('add-btn'))} onClick={(ev: Event) => emit('add', ev)}>
          <IconHover>
            <IconPlus />
          </IconHover>
        </div>
      )
    }

    const orientation = computed(() => (vertical.value ? 'horizontal' : 'vertical'))

    const cls = computed(() =>
      classes(n(), [orientation.value, n(`--${orientation.value}`)], [props.indicatorPosition, n(`--${props.indicatorPosition}`)]),
    )

    const listCls = computed(() =>
      classes(n('tab-list'), [
        !props.headerPadding && ['line', 'plain'].includes(props.variant) && vertical.value,
        n('--tab-list-no-padding'),
      ]),
    )

    const listStyle = computed(() => ({
      transform:
        vertical.value
          ? `translateY(${-offset.value}px)`
          : `translateX(${rtl.value ? offset.value : -offset.value}px)`,
    }))

    const tabCls = computed(() => classes(n('tab'), [isScroll.value, n('--tab-scroll')]))

    return () => (
      <div class={cls.value}>
        <div class={classes(n('prefix'))}>{slots.prefix?.()}</div>
        <div class={classes(n('button-wrapper'))}>
          {isScroll.value && (
            <TabsNavButton
              type={isRtlHorizontal.value ? 'next' : 'previous'}
              orientation={orientation.value}
              disabled={offset.value <= 0}
              onClick={handleButtonClick}
            />
          )}
        </div>
        <ResizeObserver onResize={() => getSize()}>
          <div class={tabCls.value} ref={wrapperRef}>
            <ResizeObserver onResize={handleResize}>
              <div ref={listRef} class={listCls.value} style={listStyle.value}>
                {props.tabs.map((tab) => (
                  <TabsTab
                    key={tab.key}
                    ref={(component: any) => {
                      if (component?.$el) {
                        tabsRef.value[tab.key] = component.$el
                      }
                    }}
                    active={tab.key === activeKey.value}
                    tab={tab}
                    editable={props.editable}
                    onClick={handleClick}
                    onDelete={handleDelete}
                    v-slots={{ default: () => tab.slots.title?.() ?? tab.title, icon: tab.slots.icon }}
                  />
                ))}
                {props.variant === 'line' && activeTabRef.value && (
                  <TabsNavInk
                    ref={inkRef}
                    activeTabRef={activeTabRef.value}
                    orientation={orientation.value}
                    disabled={false}
                    animation={props.animation}
                  />
                )}
                {!isScroll.value && renderAddBtn()}
              </div>
            </ResizeObserver>
          </div>
        </ResizeObserver>
        <div class={classes(n('button-wrapper'))}>
          {isScroll.value && (
            <TabsNavButton
              type={isRtlHorizontal.value ? 'previous' : 'next'}
              orientation={orientation.value}
              disabled={offset.value >= maxOffset.value}
              onClick={handleButtonClick}
            />
          )}
          {isScroll.value && renderAddBtn()}
        </div>
        <div class={classes(n('suffix'))}>{slots.suffix?.()}</div>
      </div>
    )
  },
})
