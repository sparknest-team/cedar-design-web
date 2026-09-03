import {
  defineComponent, computed, ref, watch, onMounted, onBeforeUnmount, provide, nextTick, onActivated,
} from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { carouselInjectionKey } from './context'
import { isNumber, isObject } from '../_utils/is'
import { useChildrenComponents } from '../_hooks/use-children-components'
import { useResizeObserver } from '../_hooks/use-resize-observer'
import { IconLeft } from '@cedarjs/icons-vue/icon-left'
import { IconRight } from '@cedarjs/icons-vue/icon-right'
import { IconUp } from '@cedarjs/icons-vue/icon-up'
import { IconDown } from '@cedarjs/icons-vue/icon-down'
import { carouselProps } from './props'

function toSizeUnit(v: unknown): string | undefined {
  if (v == null) return undefined
  if (typeof v === 'number' || /^\d+(\.\d+)?$/.test(String(v))) return `${v}px`
  return String(v)
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

export default defineComponent({
  name: createNamespace('carousel').name,
  props: carouselProps,
  emits: ['update:current', 'change'],
  setup(props, { emit, expose, slots }) {
    const prefixCls = getPrefixCls('carousel')
    const elRef = ref<HTMLElement>()
    const size = ref(0)
    const trackSize = ref(0)
    const trackTranslate = ref(0)
    const lockDuration = ref(false)
    const index = ref(0)
    const prevIndex = ref(-1)
    const hovering = ref(false)
    const isPause = ref(false)
    const { children, components } = useChildrenComponents(createNamespace('carousel-item').name)
    const length = computed(() => components.value.length)
    const vertical = computed(() => props.direction === 'vertical')
    const showArrowComputed = computed(() => {
      if (props.showArrow === 'never') return false
      return props.showArrow === 'always' || (props.showArrow === 'hover' && hovering.value)
    })

    const slideSize = computed(() => {
      if (props.slidesPerView === 'auto') return size.value
      return size.value / Math.max(1, Number(props.slidesPerView))
    })

    // Item translate tracking
    const itemTransforms = new Map<number, (v: number) => void>()
    function registerItem(uid: number, setTranslate: (v: number) => void) {
      itemTransforms.set(uid, setTranslate)
    }
    function unregisterItem(uid: number) {
      itemTransforms.delete(uid)
    }
    function resetItemTransforms() {
      itemTransforms.forEach((fn) => fn(0))
    }
    function findItemTransform(idx: number) {
      const uid = components.value[idx]
      if (uid === undefined) return undefined
      return itemTransforms.get(uid)
    }

    // Provide for CarouselItem
    provide(carouselInjectionKey, { items: components, current: index, size, vertical, registerItem, unregisterItem })

    let initialized = false
    let timer = -1

    function clampIndex(i: number) {
      if (!length.value) return 0
      if (props.loop) {
        if (i < 0) return length.value + i
        if (i >= length.value) return i - length.value
        return i
      }
      return clamp(i, 0, length.value - 1)
    }

    function initIndex() {
      if (initialized) return
      const start = props.current !== undefined ? props.current : props.defaultCurrent
      index.value = clampIndex(start)
      initialized = true
    }

    function dispatchCarouselItems() {
      if (!props.loop || length.value <= 1) return
      const sv = props.slidesPerView === 'auto' ? size.value : slideSize.value
      const sp = Number(props.spaceBetween) || 0
      if (trackTranslate.value >= 0) {
        findItemTransform(length.value - 1)?.(-(trackSize.value))
      }
      if (trackTranslate.value <= -(trackSize.value - size.value)) {
        findItemTransform(0)?.(trackSize.value)
      }
      if (trackTranslate.value > -(trackSize.value - size.value) && trackTranslate.value < 0) {
        findItemTransform(length.value - 1)?.(0)
        findItemTransform(0)?.(0)
      }
    }

    async function fixPosition() {
      const sv = props.slidesPerView === 'auto' ? size.value : slideSize.value
      const sp = Number(props.spaceBetween) || 0
      const overLeft = trackTranslate.value >= sv + sp
      const overRight = trackTranslate.value <= -trackSize.value
      lockDuration.value = true
      if (overLeft || overRight) {
        trackTranslate.value = overRight ? 0 : -(trackSize.value - size.value)
        findItemTransform(0)?.(0)
        findItemTransform(length.value - 1)?.(0)
      }
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
      lockDuration.value = false
    }

    async function slideTo(targetIdx: number, isManual: boolean) {
      if (length.value <= 1) return
      const prev = index.value
      const next = clampIndex(targetIdx)
      if (next === prev) return
      prevIndex.value = prev
      index.value = next
      const sv = props.slidesPerView === 'auto' ? size.value : slideSize.value
      const sp = Number(props.spaceBetween) || 0

      // If track is in abnormal position (from previous loop animation), snap it back first
      if (trackTranslate.value <= -trackSize.value || trackTranslate.value >= sv + sp) {
        lockDuration.value = true
        trackTranslate.value = -(prev * (sv + sp))
        resetItemTransforms()
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
        lockDuration.value = false
      }

      // Seamless loop: offset item to opposite end for smooth transition
      if (prev === length.value - 1 && next === 0 && props.loop) {
        // Forward wrap: last → first
        resetItemTransforms()
        findItemTransform(0)?.(trackSize.value)
        trackTranslate.value = length.value * -(sv + sp)
      } else if (prev === 0 && next === length.value - 1 && props.loop) {
        // Backward wrap: first → last — offset last item to left for seamless loop
        resetItemTransforms()
        findItemTransform(length.value - 1)?.(-trackSize.value)
        trackTranslate.value = sv + sp
      } else {
        resetItemTransforms()
        trackTranslate.value = -(next * (sv + sp))
      }
      emit('update:current', next)
      emit('change', next, prev, isManual)
    }

    async function next() { await slideTo(index.value + 1, true) }
    async function prev() { await slideTo(index.value - 1, true) }
    async function to(idx: number) { await slideTo(idx, true) }

    // Autoplay
    const autoPlayConfig = computed(() => {
      if (!props.autoPlay) return { interval: 0, hoverToPause: false }
      if (isObject(props.autoPlay)) {
        return {
          interval: Number(props.autoPlay.interval) || 3000,
          hoverToPause: props.autoPlay.hoverToPause ?? true,
        }
      }
      if (isNumber(props.autoPlay) && props.autoPlay > 0) {
        return { interval: props.autoPlay, hoverToPause: false }
      }
      return { interval: 3000, hoverToPause: true }
    })

    function start() {
      const { interval } = autoPlayConfig.value
      if (!interval || interval <= 0 || length.value <= 1 || isPause.value) return
      stop()
      timer = window.setTimeout(() => {
        slideTo(index.value + 1, false)
        start()
      }, interval)
    }

    function stop() {
      if (timer !== -1) { clearTimeout(timer); timer = -1 }
    }

    function resize() {
      if (!elRef.value || !length.value) return
      lockDuration.value = true
      size.value = vertical.value ? elRef.value.offsetHeight : elRef.value.offsetWidth
      const sv = props.slidesPerView === 'auto' ? size.value : slideSize.value
      const sp = Number(props.spaceBetween) || 0
      trackSize.value = length.value * (sv + sp) - sp
      trackTranslate.value = -(index.value * (sv + sp))
      resetItemTransforms()
      start()
      nextTick(() => { lockDuration.value = false })
    }

    // ResizeObserver
    const { createResizeObserver, destroyResizeObserver } = useResizeObserver({
      elementRef: elRef,
      onResize: () => nextTick(() => resize()),
    })

    // Lifecycle
    watch(() => length.value, async () => {
      await nextTick()
      initIndex()
      resize()
    })

    onMounted(() => {
      initIndex()
      requestAnimationFrame(() => resize())
      createResizeObserver()
      setupWheelListener()
    })

    onActivated(resize)

    onBeforeUnmount(() => {
      stop()
      destroyResizeObserver()
      if (wheelHandler && elRef.value) {
        elRef.value.removeEventListener('wheel', wheelHandler, wheelEventOptions)
      }
    })

    // Touch state
    const touchStartX = ref(0)
    const touchStartY = ref(0)
    const touchStartTime = ref(0)
    const touchDeltaX = ref(0)
    const touchDeltaY = ref(0)
    const touching = ref(false)

    async function onTouchstart(e: TouchEvent) {
      if (!props.touchable || length.value <= 1) return
      touchStartX.value = e.touches[0].clientX
      touchStartY.value = e.touches[0].clientY
      touchDeltaX.value = 0
      touchDeltaY.value = 0
      touchStartTime.value = Date.now()
      touching.value = true
      stop()
      await fixPosition()
      lockDuration.value = true
    }

    function onTouchmove(e: TouchEvent) {
      if (!props.touchable || length.value <= 1 || !touching.value) return
      const dx = e.touches[0].clientX - touchStartX.value
      const dy = e.touches[0].clientY - touchStartY.value
      touchDeltaX.value = dx
      touchDeltaY.value = dy
      const sv = props.slidesPerView === 'auto' ? size.value : slideSize.value
      const sp = Number(props.spaceBetween) || 0
      trackTranslate.value = -(index.value * (sv + sp)) + (vertical.value ? dy : dx)
      dispatchCarouselItems()
    }

    function onTouchend() {
      if (!props.touchable || length.value <= 1 || !touching.value) return
      touching.value = false
      const dx = touchDeltaX.value
      const dy = touchDeltaY.value
      const diff = vertical.value ? dy : dx
      const sv = props.slidesPerView === 'auto' ? size.value : slideSize.value
      const sp = Number(props.spaceBetween) || 0
      const quickSwiping = Date.now() - touchStartTime.value <= 250 && Math.abs(diff) >= 20
      const targetIdx = quickSwiping
        ? clampIndex(diff < 0 ? index.value + 1 : index.value - 1)
        : index.value
      const prevIdx = index.value
      index.value = targetIdx
      lockDuration.value = false
      if (prevIdx === length.value - 1 && targetIdx === 0 && props.loop) {
        // Forward wrap: last → first
        resetItemTransforms()
        findItemTransform(0)?.(trackSize.value)
        trackTranslate.value = length.value * -(sv + sp)
      } else if (prevIdx === 0 && targetIdx === length.value - 1 && props.loop) {
        // Backward wrap: first → last
        resetItemTransforms()
        findItemTransform(length.value - 1)?.(-trackSize.value)
        trackTranslate.value = sv + sp
      } else {
        resetItemTransforms()
        trackTranslate.value = -(targetIdx * (sv + sp))
      }
      if (prevIdx !== index.value) {
        emit('update:current', index.value)
        emit('change', index.value, prevIdx, true)
      }
      start()
    }

    // Drag state
    const isDragging = ref(false)
    const dragStartX = ref(0)
    const dragStartY = ref(0)

    async function onMousedown(e: MouseEvent) {
      if (!props.draggable || props.touchable || length.value <= 1) return
      isDragging.value = true
      dragStartX.value = e.clientX
      dragStartY.value = e.clientY
      stop()
      await fixPosition()
      lockDuration.value = true

      const handleMousemove = (ev: MouseEvent) => {
        if (!isDragging.value) return
        const dx = ev.clientX - dragStartX.value
        const dy = ev.clientY - dragStartY.value
        const sv = props.slidesPerView === 'auto' ? size.value : slideSize.value
        const sp = Number(props.spaceBetween) || 0
        trackTranslate.value = -(index.value * (sv + sp)) + (vertical.value ? dy : dx)
        dispatchCarouselItems()
      }

      const handleMouseup = (ev: MouseEvent) => {
        if (!isDragging.value) return
        isDragging.value = false
        document.removeEventListener('mousemove', handleMousemove)
        document.removeEventListener('mouseup', handleMouseup)
        const dx = ev.clientX - dragStartX.value
        const dy = ev.clientY - dragStartY.value
        const diff = vertical.value ? dy : dx
        const sv = props.slidesPerView === 'auto' ? size.value : slideSize.value
        const sp = Number(props.spaceBetween) || 0
        const quickSwiping = Math.abs(diff) >= 20
        const targetIdx = quickSwiping
          ? clampIndex(diff < 0 ? index.value + 1 : index.value - 1)
          : index.value
        const prevIdx = index.value
        index.value = targetIdx
        lockDuration.value = false
        if (prevIdx === length.value - 1 && targetIdx === 0 && props.loop) {
          // Forward wrap: last → first
          resetItemTransforms()
          findItemTransform(0)?.(trackSize.value)
          trackTranslate.value = length.value * -(sv + sp)
        } else if (prevIdx === 0 && targetIdx === length.value - 1 && props.loop) {
          // Backward wrap: first → last
          resetItemTransforms()
          findItemTransform(length.value - 1)?.(-trackSize.value)
          trackTranslate.value = sv + sp
        } else {
          resetItemTransforms()
          trackTranslate.value = -(targetIdx * (sv + sp))
        }
        if (prevIdx !== index.value) {
          emit('update:current', index.value)
          emit('change', index.value, prevIdx, true)
        }
        start()
      }

      document.addEventListener('mousemove', handleMousemove)
      document.addEventListener('mouseup', handleMouseup)
    }

    // Keyboard
    function handleKeydown(e: KeyboardEvent) {
      if (!props.keyboard || length.value <= 1) return
      const key = e.key
      if (props.direction === 'horizontal') {
        if (key === 'ArrowLeft') slideTo(index.value - 1, true)
        else if (key === 'ArrowRight') slideTo(index.value + 1, true)
      } else {
        if (key === 'ArrowUp') slideTo(index.value - 1, true)
        else if (key === 'ArrowDown') slideTo(index.value + 1, true)
      }
    }

    // Manual wheel listener (Vue 3 registers wheel as passive by default)
    let wheelHandler: ((e: WheelEvent) => void) | null = null

    const isMousewheelDisabled = computed(() => !props.mousewheel || length.value <= 1)

    // Handle wheel event — calls slideTo for consistent loop behavior
    function handleWheel(e: WheelEvent) {
      if (isMousewheelDisabled.value) return
      const delta = e.deltaY
      if (Math.abs(delta) < 10) return
      e.preventDefault()
      slideTo(index.value + (delta > 0 ? 1 : -1), true)
    }

    let wheelEventOptions: AddEventListenerOptions = { passive: false }

    function setupWheelListener() {
      if (wheelHandler && elRef.value) {
        elRef.value.removeEventListener('wheel', wheelHandler, wheelEventOptions)
        wheelHandler = null
      }
      if (!props.mousewheel || !elRef.value) return
      wheelHandler = (e: WheelEvent) => {
        handleWheel(e)
      }
      elRef.value.addEventListener('wheel', wheelHandler, wheelEventOptions)
    }

    // Set up wheel listener when mousewheel prop changes
    watch(() => props.mousewheel, setupWheelListener)

    expose({ next, prev, to, resize })

    const slotScope = computed(() => ({
      index: index.value,
      length: length.value,
      prev, next, to,
      hovering: hovering.value,
    }))

    const hasIndicator = computed(() => props.indicator && length.value > 1)

    return () => {
      children.value = slots.default?.()

      const sv = props.slidesPerView === 'auto' ? size.value : slideSize.value
      const sp = Number(props.spaceBetween) || 0

      return (
        <div
          ref={elRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={props.ariaLabel}
          tabindex={props.keyboard ? 0 : undefined}
          class={[
            prefixCls,
            `${prefixCls}-indicator-position-${props.indicatorPosition}`,
          ]}
          style={props.height ? { height: props.height } : undefined}
          onMouseenter={() => { hovering.value = true; if (autoPlayConfig.value.hoverToPause) stop() }}
          onMouseleave={() => { hovering.value = false; if (autoPlayConfig.value.hoverToPause) start() }}
          onKeydown={props.keyboard ? handleKeydown : undefined}
        >
          {/* Track */}
          <div
            class={[`${prefixCls}-track`, vertical.value ? `${prefixCls}-track-vertical` : '']}
            style={{
              width: !vertical.value ? toSizeUnit(trackSize.value) : undefined,
              height: vertical.value ? toSizeUnit(trackSize.value) : undefined,
              transform: `translate${vertical.value ? 'Y' : 'X'}(${toSizeUnit(trackTranslate.value)})`,
              transitionDuration: lockDuration.value ? '0ms' : `${props.moveSpeed}ms`,
              transitionTimingFunction: props.transitionTimingFunction,
              gap: props.spaceBetween ? toSizeUnit(props.spaceBetween) : undefined,
            }}
            onTouchstart={props.touchable ? onTouchstart : undefined}
            onTouchmove={props.touchable ? onTouchmove : undefined}
            onTouchend={props.touchable ? onTouchend : undefined}
            onMousedown={props.draggable ? onMousedown : undefined}
          >
            {children.value}
          </div>

          {/* Indicator */}
          {hasIndicator.value && (slots.indicator
            ? slots.indicator(slotScope.value)
            : (
            <div class={`${prefixCls}-indicator-wrapper ${prefixCls}-indicator-wrapper-${props.indicatorPosition}`}>
              <div class={[`${prefixCls}-indicator`, `${prefixCls}-indicator-${props.indicatorType}`, `${prefixCls}-indicator-${props.indicatorPosition}`, props.indicatorClass]}>
                {props.indicatorType === 'slider' ? (
                  <button
                    type="button"
                    aria-label={`Go to slide ${index.value + 1}`}
                    aria-current="true"
                    class={[`${prefixCls}-indicator-item`, `${prefixCls}-indicator-item-active`]}
                    style={{ width: `${100 / length.value}%`, left: `${index.value * (100 / length.value)}%` }}
                  />
                ) : Array.from({ length: length.value }).map((_, i) => (
                  <span
                    key={i}
                    role="button"
                    tabindex={0}
                    aria-label={`切换到第 ${i + 1} 页`}
                    aria-current={i === index.value ? 'true' : undefined}
                    class={[
                      `${prefixCls}-indicator-item`,
                      { [`${prefixCls}-indicator-item-active`]: i === index.value },
                    ]}
                    style={props.indicatorColor ? { background: props.indicatorColor } : undefined}
                    onClick={() => slideTo(i, true)}
                    onKeydown={(event: KeyboardEvent) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        slideTo(i, true)
                      }
                    }}
                    onMouseover={props.trigger === 'hover' ? () => slideTo(i, true) : undefined}
                  />
                ))}
              </div>
            </div>
            )
          )}

          {/* Arrows */}
          {showArrowComputed.value && (
            <div class={`${prefixCls}-arrow`}>
              {slots.prev ? slots.prev(slotScope.value) : (
                <button type="button" aria-label={props.previousButtonAriaLabel} class={[`${prefixCls}-arrow-left`, props.arrowClass]} onClick={prev}>
                  {vertical.value ? <IconUp /> : <IconLeft />}
                </button>
              )}
              {slots.next ? slots.next(slotScope.value) : (
                <button type="button" aria-label={props.nextButtonAriaLabel} class={[`${prefixCls}-arrow-right`, props.arrowClass]} onClick={next}>
                  {vertical.value ? <IconDown /> : <IconRight />}
                </button>
              )}
            </div>
          )}
        </div>
      )
    }
  },
})
