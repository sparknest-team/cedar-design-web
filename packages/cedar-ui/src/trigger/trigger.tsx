import { triggerProps } from './props'
import type { CSSProperties } from 'vue'
import {
  defineComponent,
  ref,
  computed,
  nextTick,
  watch,
  inject,
  Teleport,
  onUpdated,
  onMounted,
  onBeforeUnmount,
  toRefs,
  onDeactivated,
  onActivated,
} from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { getPopupStyle, getScrollElements, getTransformOrigin } from './utils'
import ResizeObserverFallback from 'resize-observer-polyfill'
import { getPositioningSpace, getRelativeRect } from './geometry'
import { useTriggerResize } from './resize'
import TriggerPopup from './popup'
import { useTriggerRender } from './render'
import { getArrowStyle } from './arrow'
import { off, on } from '../_utils/dom'
import { isEmptyChildren, mergeFirstChild } from '../_utils/vue-utils'
import usePickSlots from '../_hooks/use-pick-slots'
import { throttleByRaf } from '../_utils/throttle-by-raf'
import usePopupManager from '../_hooks/use-popup-manager'
import ClientOnly from '../_components/client-only'
import { useTeleportContainer } from '../_hooks/use-teleport-container'
import { configProviderInjectionKey } from '../config-provider/context'
import { useTriggerReference, useTriggerTarget } from './reference'
import { useTriggerState } from './state'
import { useTriggerInteraction } from './interaction'
import { omit } from '../_utils/omit'

const TRIGGER_EVENTS = ['onClick', 'onMouseenter', 'onMouseleave', 'onFocusin', 'onFocusout', 'onContextmenu']

const { name } = createNamespace('trigger')

export default defineComponent({
  name,
  inheritAttrs: false,
  props: triggerProps,
  emits: {
    'update:open': (visible: boolean) => true,
    /**
     * @zh 弹出框显示状态改变时触发
     * @en Emitted when the status of the popup changes
     * @param {boolean} visible
     */
    "open-change": (visible: boolean) => true,
    /**
     * @zh 弹出框显示后（动画结束）触发
     * @en Triggered after the trigger is shown (the animation ends)
     * @version 2.18.0
     */
    opened: () => true,
    open: () => true,
    close: () => true,
    /**
     * @zh 弹出框隐藏后（动画结束）触发
     * @en Triggered after the popup is hidden (the animation ends)
     * @version 2.18.0
     */
    closed: () => true,
    /**
     * @zh 点击弹出框外部时触发
     * @en Triggered when clicking outside the popup
     */
    "click-outside": (event: Event) => true,
    // for internal
    resize: () => true,
  },
  /**
   * @zh 弹出框内容
   * @en Popup content
   * @slot content
   */
  setup(props, { emit, slots, attrs, expose }) {
    const { popupContainer } = toRefs(props)
    const prefixCls = getPrefixCls('trigger')
    const popupAttrs = computed(() => omit(attrs, TRIGGER_EVENTS))
    const configCtx = inject(configProviderInjectionKey, undefined)

    // trigger相关变量
    const { nodes: children, element: slotElement } = useTriggerReference()
    const { element: firstElement, setReference, getReference } = useTriggerTarget(slotElement, () => props.reference)
    // popup相关变量
    const popupRef = ref<HTMLElement>()
    const popupPosition = ref(props.placement)
    const popupStyle = ref<CSSProperties>({})
    const transformStyle = ref<CSSProperties>({})
    const arrowStyle = ref<CSSProperties>({})
    // 鼠标相关变量
    const mousePosition = ref({
      top: 0,
      left: 0,
    })

    let scrollPositions = new WeakMap<Element, [number, number]>()
    let windowScrollPosition: [number, number] | null = null

    const { visible: computedVisible, request: requestVisible, cancel: cleanDelayTimer } = useTriggerState(props, (event, visible) => {
      if (event === 'update:open') emit('update:open', visible)
      else emit('open-change', visible)
    })

    const renderState = useTriggerRender(computedVisible, () => props.unmountOnClose, event => {
      switch (event) {
        case 'open': emit('open'); break
        case 'close': emit('close'); break
        case 'opened': emit('opened'); break
        case 'closed': emit('closed'); break
      }
    })
    const setPopup = (element: any) => { popupRef.value = element ?? undefined }

    const { teleportContainer, containerRef } = useTeleportContainer({
      popupContainer,
      visible: computedVisible,
      documentContainer: true,
    })

    const { zIndex, onStackTop } = usePopupManager('popup', { visible: computedVisible })

    let windowListener = false

    const updateMousePosition = (e: MouseEvent) => {
      if (props.alignPoint) {
        const { clientX, clientY } = e
        mousePosition.value = {
          top: clientY,
          left: clientX,
        }
        nextTick(() => { if (computedVisible.value) updatePopupStyle() })
      }
    }

    const updatePopupStyle = () => {
      if (!firstElement.value || !popupRef.value || !containerRef.value) {
        return
      }
      const space = getPositioningSpace(popupRef.value)
      const containerRect = { top: space.y / space.scaleY, left: space.x / space.scaleX } as DOMRect
      const referenceRect = props.alignPoint
        ? { top: mousePosition.value.top, bottom: mousePosition.value.top, left: mousePosition.value.left, right: mousePosition.value.left, width: 0, height: 0 }
        : firstElement.value.getBoundingClientRect()
      const triggerRect = getRelativeRect(referenceRect, space)
      const getPopupRect = () => getRelativeRect(popupRef.value!.getBoundingClientRect(), space)
      const popupRect = getPopupRect()
      // Fit width before calculating end/center alignment, including the first frame.
      if (props.autoFitPopupMinWidth) popupRect.width = Math.max(popupRect.width, triggerRect.width)
      else if (props.autoFitPopupWidth) popupRect.width = triggerRect.width
      const { style, position } = getPopupStyle(props.placement, containerRect, triggerRect, popupRect, {
        offset: props.popupOffset - (props.cover ? (/^(left|right)/.test(props.placement) ? triggerRect.width : triggerRect.height) : 0),
        translate: props.popupTranslate,
        customStyle: props.popupStyle,
        autoFitPosition: props.autoFitPosition,
        scaleX: space.scaleX,
        scaleY: space.scaleY,
        view: popupRef.value.ownerDocument.defaultView,
      })
      transformStyle.value = props.autoFitTransformOrigin ? { transformOrigin: getTransformOrigin(position) } : {}
      if (props.autoFitPopupMinWidth) {
        style.minWidth = `${triggerRect.width}px`
      } else if (props.autoFitPopupWidth) {
        style.width = `${triggerRect.width}px`
      }

      if (popupPosition.value !== position) {
        popupPosition.value = position
      }
      popupStyle.value = style
      if (props.showArrow) {
        nextTick(() => {
          if (!popupRef.value || !props.showArrow) return
          arrowStyle.value = getArrowStyle(position, triggerRect, getPopupRect(), {
            customStyle: props.arrowStyle,
          })
        })
      }
    }

    const changeVisible = (visible: boolean, delay = 0) => {
      if (!visible) {
        scrollPositions = new WeakMap()
        windowScrollPosition = null
      }
      requestVisible(visible, delay)
    }

    const interaction = useTriggerInteraction(props, {
      visible: computedVisible,
      reference: firstElement,
      popup: popupRef,
      request: changeVisible,
      isTopLayer: onStackTop,
      onPoint: updateMousePosition,
      onOutside: event => emit('click-outside', event),
      onReferenceEvent: (name, event) => {
        const handlers = (attrs as Record<string, any>)[name]
        for (const handler of Array.isArray(handlers) ? handlers : [handlers]) handler?.(event)
      },
    })

    const contentSlot = usePickSlots(slots, 'content')

    const hidePopup = computed(() => {
      return props.hideEmpty && isEmptyChildren(contentSlot.value?.())
    })

    const isExceedThreshold = (oldPosition: [number, number], element: Element) => {
      const [scrollTop, scrollLeft] = oldPosition
      const { scrollTop: newScrollTop, scrollLeft: newScrollLeft } = element
      return (
        Math.abs(newScrollTop - scrollTop) >= props.scrollToCloseDistance ||
        Math.abs(newScrollLeft - scrollLeft) >= props.scrollToCloseDistance
      )
    }

    const handleScroll = throttleByRaf((e) => {
      if (computedVisible.value) {
        if (props.scrollToClose || configCtx?.scrollToClose) {
          const element = e.target as HTMLElement
          const initial = scrollPositions.get(element) ?? [element.scrollTop, element.scrollLeft]
          scrollPositions.set(element, initial)
          if (isExceedThreshold(initial, element)) {
            changeVisible(false)
          } else {
            updatePopupStyle()
          }
        } else {
          updatePopupStyle()
        }
      }
    })

    const removeWindowScroll = () => {
      off(window, 'scroll', onWindowScroll)
      windowListener = false
    }

    const onWindowScroll = throttleByRaf((e) => {
      const element = document.scrollingElement ?? document.documentElement
      if (!windowScrollPosition) {
        windowScrollPosition = [element.scrollTop, element.scrollLeft]
      }
      if ((props.scrollToClose || configCtx?.scrollToClose) && isExceedThreshold(windowScrollPosition, element)) {
        changeVisible(false)
        removeWindowScroll()
      } else if (computedVisible.value) {
        updatePopupStyle()
      }
    })

    const handleResize = () => {
      if (computedVisible.value) {
        updatePopupStyle()
      }
    }

    expose({
      resize: updatePopupStyle,
      isTopLayer: onStackTop,
      open: interaction.open,
      close: interaction.close,
      allowClose: interaction.allowClose,
      getReference,
      focusReference: interaction.focusReference,
      setReference,
    })

    const handlePopupMouseDown = (e: Event) => {
      if (props.preventFocus) {
        e.preventDefault()
      }
    }


    const triggerCls = computed(() => {
      return computedVisible.value ? props.openedClass : undefined
    })

    let scrollElements: HTMLElement[] | undefined

    let suspended = false
    const clearScrollListeners = () => {
      handleScroll.cancel()
      onWindowScroll.cancel()
      if (windowListener) removeWindowScroll()
      for (const element of scrollElements ?? []) element.removeEventListener('scroll', handleScroll)
      scrollElements = undefined
    }
    const bindScrollListeners = () => {
      clearScrollListeners()
      if (!computedVisible.value || suspended || typeof window === 'undefined') return
      if (props.scrollToClose || configCtx?.scrollToClose || props.updateAtScroll || configCtx?.updateAtScroll) {
        const root = document.scrollingElement ?? document.documentElement
        windowScrollPosition = [root.scrollTop, root.scrollLeft]
        on(window, 'scroll', onWindowScroll)
        windowListener = true
      }
      if (props.updateAtScroll || configCtx?.updateAtScroll || props.scrollToClose || configCtx?.scrollToClose) {
        scrollElements = getScrollElements(firstElement.value)
        scrollPositions = new WeakMap()
        for (const element of scrollElements) {
          scrollPositions.set(element, [element.scrollTop, element.scrollLeft])
          element.addEventListener('scroll', handleScroll)
        }
      }
    }
    watch([computedVisible, firstElement, () => props.scrollToClose, () => props.updateAtScroll,
      () => configCtx?.scrollToClose, () => configCtx?.updateAtScroll], bindScrollListeners, { flush: 'post' })
    onActivated(() => { suspended = false; bindScrollListeners() })
    onDeactivated(() => { suspended = true; clearScrollListeners() })

    // 影响popup显示的参数变化时，更新popup样式
    watch(
      () => [props.autoFitPopupWidth, props.autoFitPopupMinWidth],
      () => {
        if (computedVisible.value) {
          updatePopupStyle()
        }
      },
    )

    useTriggerResize(
      () => [props.autoFixPosition ? firstElement.value : undefined, popupRef.value, containerRef.value, popupRef.value?.offsetParent],
      () => computedVisible.value,
      entries => {
        handleResize()
        if (entries.some(entry => entry.target === firstElement.value)) emit('resize')
      },
      ResizeObserverFallback,
    )

    onMounted(() => {
      bindScrollListeners()

      // 默认显示时，更新popup位置
      if (computedVisible.value) {
        updatePopupStyle()

      }
    })

    onUpdated(() => {
      if (computedVisible.value) {
        updatePopupStyle()
      }
    })

    onBeforeUnmount(() => {
      cleanDelayTimer()
      clearScrollListeners()
    })

    return () => {
      children.value = slots.default?.() ?? []

      mergeFirstChild(children.value, {
        class: triggerCls.value,
      })

      return (
        <>
          {children.value}
          <ClientOnly>
            <Teleport to={teleportContainer.value} disabled={props.popupContainer === false}>
              <TriggerPopup options={{
                rendered: renderState.rendered.value && !hidePopup.value,
                displayed: renderState.displayed.value,
                visible: computedVisible.value,
                animating: renderState.animating.value,
                placement: popupPosition.value,
                setPopup,
                popupClass: [`${prefixCls}-popup`, `${prefixCls}-position-${popupPosition.value}`, props.popupClass],
                wrapperClass: `${prefixCls}-popup-wrapper`,
                contentClass: [`${prefixCls}-content`, props.contentClass],
                arrowClass: [`${prefixCls}-arrow`, props.arrowClass],
                popupStyle: { ...popupStyle.value, zIndex: zIndex.value },
                wrapperStyle: transformStyle.value,
                contentStyle: props.contentStyle,
                arrowStyle: arrowStyle.value,
                showArrow: props.showArrow,
                animationName: props.animationName,
                duration: props.duration,
                hooks: renderState.hooks,
                attrs: popupAttrs.value,
                handlers: {
                  onMouseenter: interaction.popupEnter, onMouseleave: interaction.popupLeave,
                  onFocusin: interaction.popupFocus, onFocusout: interaction.popupBlur,
                  onMousedown: handlePopupMouseDown,
                },
              }} v-slots={{ content: slots.content }} />
            </Teleport>
          </ClientOnly>
        </>
      )
    }
  },
})
