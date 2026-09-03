import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
  Transition,
  TransitionProps,
  watch,
} from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { CollapseContext, collapseKey } from './context'
import IconHover from '../_components/icon-hover.vue'
import { IconCaretRight } from '@cedarjs/icons-vue/icon-caret-right'
import { IconCaretLeft } from '@cedarjs/icons-vue/icon-caret-left'
import { collapseItemProps } from './props'
import type { CollapseName } from './props'

const { name: componentName } = createNamespace('collapse-item')

export default defineComponent({
  name: componentName,
  components: { IconHover, IconCaretRight, IconCaretLeft },
  props: collapseItemProps,
  /**
   * @zh 面板的标题
   * @en The title of the panel
   * @slot title
   */
  /**
   * @zh 展开图标
   * @en Expand icon
   * @slot expand-icon
   * @binding {boolean} active
   * @binding {boolean} disabled
   * @binding {'left' | 'right'} position
   */
  /**
   * @zh 额外内容
   * @en Extra Content
   * @slot extra
   */
  setup(props, { slots }) {
    const prefixCls = getPrefixCls('collapse-item')
    const collapseCtx = inject<Partial<CollapseContext>>(collapseKey, {})
    const itemName = computed(() => props.name as CollapseName)

    const isActive = computed(() => collapseCtx.activeNames?.includes(itemName.value))
    const mergedDestroyOnHide = computed(() => collapseCtx.destroyOnHide || props.destroyOnHide)
    const mergedShowExpandIcon = computed(() => collapseCtx?.showExpandIcon ?? props.showExpandIcon)
    const mounted = ref(mergedDestroyOnHide.value ? isActive.value : true)
    const expandIconPosition = computed(() => collapseCtx?.expandIconPosition ?? 'left')
    const disabledRef = computed(() => props.disabled)

    onMounted(() => {
      collapseCtx.addItem?.({
        name: itemName.value,
        disabled: disabledRef,
      })
    })

    onBeforeUnmount(() => {
      collapseCtx.removeItem?.(itemName.value)
    })

    watch(
      itemName,
      (name, prevName) => {
        if (prevName !== undefined) {
          collapseCtx.removeItem?.(prevName)
        }
        collapseCtx.addItem?.({
          name,
          disabled: disabledRef,
        })
      },
    )

    const handleClick = (e: Event) => {
      if (!props.disabled) {
        collapseCtx.handleClick?.(itemName.value, e)
      }
    }

    watch(isActive, (active) => {
      if (active && !mounted.value) {
        mounted.value = true
      }
    })

    const transitionEvents: TransitionProps = {
      onEnter: (el: Element) => {
        ;(el as HTMLDivElement).style.height = `${el.scrollHeight}px`
      },
      onAfterEnter: (el: Element) => {
        ;(el as HTMLDivElement).style.height = 'auto'
      },
      onBeforeLeave: (el: Element) => {
        ;(el as HTMLDivElement).style.height = `${el.scrollHeight}px`
      },
      onLeave: (el: Element) => {
        ;(el as HTMLDivElement).style.height = '0'
      },
      onAfterLeave: () => {
        if (mergedDestroyOnHide.value) {
          mounted.value = false
        }
      },
    }

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-active`]: isActive.value,
      },
    ])

    const headerCls = computed(() => [
      `${prefixCls}-header`,
      `${prefixCls}-header-${collapseCtx?.expandIconPosition}`,
      {
        [`${prefixCls}-header-disabled`]: props.disabled,
      },
    ])

    const iconCls = computed(() => [
      {
        [`${prefixCls}-icon-right`]: collapseCtx?.expandIconPosition === 'right',
      },
    ])

    const contentCls = computed(() => [
      `${prefixCls}-content`,
      {
        [`${prefixCls}-content-expend`]: isActive.value,
      },
    ])

    const idBase = computed(() => `${prefixCls}-${String(itemName.value).replace(/[^\w-]/g, '-')}`)

    const defaultExpandIcon = () =>
      expandIconPosition.value === 'right' ? (
        <icon-caret-left class={`${prefixCls}-expand-icon`} />
      ) : (
        <icon-caret-right class={`${prefixCls}-expand-icon`} />
      )

    const expandIconRender = () =>
      mergedShowExpandIcon.value && (
        <icon-hover prefix={prefixCls} class={iconCls.value} disabled={props.disabled}>
          {(slots['expand-icon'] ?? collapseCtx?.slots?.['expand-icon'])?.({
            active: isActive.value,
            disabled: props.disabled,
            position: expandIconPosition.value,
          }) ?? defaultExpandIcon()}
        </icon-hover>
      )

    return () => {
      return (
        <div class={cls.value}>
          <div
            role="button"
            aria-disabled={props.disabled}
            aria-expanded={isActive.value}
            aria-controls={`${idBase.value}-panel`}
            id={`${idBase.value}-header`}
            tabindex={props.disabled ? -1 : 0}
            class={headerCls.value}
            onClick={handleClick}
            onKeydown={(event: KeyboardEvent) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                handleClick(event)
              }
            }}
          >
            {expandIconRender()}
            <div class={`${prefixCls}-header-title`}>{slots.title?.() ?? props.title}</div>
            {slots.extra && (
              <div class={`${prefixCls}-header-extra`} onClick={(event: MouseEvent) => event.stopPropagation()}>
                {slots.extra?.()}
              </div>
            )}
          </div>
          <Transition name="collapse-slider" {...transitionEvents}>
            <div
              v-show={isActive.value}
              id={`${idBase.value}-panel`}
              role="region"
              aria-labelledby={`${idBase.value}-header`}
              class={contentCls.value}
            >
              {mounted.value && (
                <div ref="contentBoxRef" class={`${prefixCls}-content-box`}>
                  {slots.default?.()}
                </div>
              )}
            </div>
          </Transition>
        </div>
      )
    }
  },
})
