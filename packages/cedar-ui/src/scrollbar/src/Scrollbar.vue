<template>
  <div :class="cls" :style="style">
    <ResizeObserver @resize="handleResize">
      <div ref="containerRef" :class="`${prefixCls}-container`" v-bind="$attrs" @scroll="handleScroll">
        <ResizeObserver @resize="handleResize">
          <slot />
        </ResizeObserver>
      </div>
    </ResizeObserver>
    <thumb
      v-if="!hide && hasHorizontalScrollbar"
      ref="horizontalThumbRef"
      :data="horizontalData"
      :style="horizontalTrackStyle"
      orientation="horizontal"
      :both="isBoth"
      @scroll="handleHorizontalScroll"
    />
    <thumb
      v-if="!hide && hasVerticalScrollbar"
      ref="verticalThumbRef"
      :data="verticalData"
      :style="verticalTrackStyle"
      orientation="vertical"
      :both="isBoth"
      @scroll="handleVerticalScroll"
    />
  </div>
</template>

<script lang="ts">
import { physicalScrollLeft, nativeScrollLeft, useDirection } from '../../_utils/direction'

import { useElementResize } from '../../_utils/resize-observer'

import { createNamespace } from '../../_utils/global-config'
import { computed, type CSSProperties, defineComponent, onActivated, onBeforeUnmount, onDeactivated, onMounted, onUpdated, type PropType, ref, watch, type StyleValue } from 'vue'
import type { ThumbData } from './types'
import type { ClassName } from '../../_utils/types'
import ResizeObserver from '../../_components/resize-observer-v2'
import Thumb from './Thumb.vue'
import { getPrefixCls } from '../../_utils/global-config'
import { isObject } from '../../_utils/is'

const THUMB_MIN_SIZE = 20
const TRACK_SIZE = 15

export default defineComponent({
  name: createNamespace("scrollbar").name,
  components: {
    ResizeObserver,
    Thumb,
  },
  inheritAttrs: false,
  props: {
    /**
     * @zh 类型
     * @en Type
     */
    type: {
      type: String as PropType<'track' | 'embed'>,
      default: 'embed',
    },
    /**
     * @zh 外层的类名
     * @en Outer class
     */
    outerClass: [String, Object, Array] as PropType<ClassName>,
    /**
     * @zh 外层的样式
     * @en Outer style
     */
    outerStyle: {
      type: [String, Object, Array, Boolean] as PropType<StyleValue>,
      default: undefined,
      validator: (value: unknown) => value !== true,
    },
    // private
    hide: {
      type: Boolean,
      default: false,
    },
    disableHorizontal: {
      type: Boolean,
      default: false,
    },
    disableVertical: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    /**
     * @zh 滚动时触发
     * @en Triggered when scroll
     */
    scroll: (ev: Event) => true,
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('scrollbar')

    const containerRef = ref<HTMLElement>()
    const { dir } = useDirection(() => containerRef.value)
    const horizontalData = ref<ThumbData>()
    const verticalData = ref<ThumbData>()
    const horizontalThumbRef = ref()
    const verticalThumbRef = ref()
    const _hasHorizontalScrollbar = ref(false)
    const _hasVerticalScrollbar = ref(false)
    const hasHorizontalScrollbar = computed(() => _hasHorizontalScrollbar.value && !props.disableHorizontal)
    const hasVerticalScrollbar = computed(() => _hasVerticalScrollbar.value && !props.disableVertical)
    const isBoth = ref(false)
    const trackSize = ref(TRACK_SIZE)
    const viewport = ref({ left: 0, top: 0, width: 0, height: 0 })
    const horizontalTrackStyle = computed(() => ({
      left: `${viewport.value.left}px`,
      top: `${viewport.value.top + Math.max(0, viewport.value.height - (props.type === 'embed' ? trackSize.value : 0))}px`,
      width: `${(horizontalData.value?.thumbSize ?? 0) + (horizontalData.value?.max ?? 0)}px`,
      right: 'auto', bottom: 'auto',
    }))
    const verticalTrackStyle = computed(() => ({
      left: `${viewport.value.left + Math.max(0, viewport.value.width - (props.type === 'embed' ? trackSize.value : 0))}px`,
      top: `${viewport.value.top}px`,
      height: `${(verticalData.value?.thumbSize ?? 0) + (verticalData.value?.max ?? 0)}px`,
      right: 'auto', bottom: 'auto',
    }))

    let active = true
    let disposed = false
    let operation = 0
    const binding = ref(0)
    const available = () => active && !disposed
    const current = (token: number, element: HTMLElement) =>
      available() && token === operation && containerRef.value === element
    function axisData(client: number, track: number, content: number): ThumbData {
      if (![client, track, content].every(Number.isFinite) || client <= 0 || track <= 0 || content <= client) {
        return { ratio: 1, thumbSize: Number.isFinite(track) ? Math.max(0, track) : 0, max: 0 }
      }
      const thumbSize = Math.min(track, Math.round(track / Math.min(content / client, track / THUMB_MIN_SIZE)))
      const max = Math.max(0, track - thumbSize)
      return { ratio: max > 0 ? (content - client) / max : 1, thumbSize, max }
    }
    const thumbOffset = (value: number, data: ThumbData) =>
      Math.max(0, Math.min(data.max, Math.round((Number.isFinite(value) ? value : 0) / data.ratio)))
    const getContainerSize = () => {
      const element = containerRef.value
      if (!available() || !element) { return }
      const token = ++operation
      const { clientWidth, clientHeight, offsetWidth, offsetHeight, scrollWidth, scrollHeight, scrollTop, scrollLeft, offsetLeft, offsetTop } = element
      if (!current(token, element)) { return }
      const track = horizontalThumbRef.value?.$el ?? verticalThumbRef.value?.$el
      const axis = horizontalThumbRef.value ? 'height' : 'width'
      const resolved = track?.ownerDocument.defaultView?.getComputedStyle(track)[axis]
      const measuredTrackSize = Number.parseFloat(resolved ?? '')
      const thickness = Number.isFinite(measuredTrackSize) && measuredTrackSize >= 0 ? measuredTrackSize : trackSize.value
      if (!current(token, element)) { return }
      const horizontal = clientWidth > 0 && offsetWidth > 0 && scrollWidth > clientWidth
      const vertical = clientHeight > 0 && offsetHeight > 0 && scrollHeight > clientHeight
      const both = horizontal && !props.disableHorizontal && vertical && !props.disableVertical
      const hData = axisData(clientWidth, props.type === 'embed' && both ? offsetWidth - thickness : offsetWidth, scrollWidth)
      const vData = axisData(clientHeight, props.type === 'embed' && both ? offsetHeight - thickness : offsetHeight, scrollHeight)
      _hasHorizontalScrollbar.value = horizontal
      if (!current(token, element)) { return }
      _hasVerticalScrollbar.value = vertical
      if (!current(token, element)) { return }
      isBoth.value = both
      if (!current(token, element)) { return }
      trackSize.value = thickness
      if (!current(token, element)) { return }
      viewport.value = { left: offsetLeft, top: offsetTop, width: offsetWidth, height: offsetHeight }
      if (!current(token, element)) { return }
      horizontalData.value = hData
      if (!current(token, element)) { return }
      verticalData.value = vData
      if (!current(token, element)) { return }
      // Zero is a real position; do not leave a stale thumb at the previous offset.
      verticalThumbRef.value?.setOffset(thumbOffset(scrollTop, vData))
      if (!current(token, element)) { return }
      const horizontalOffset = physicalScrollLeft(element)
      if (!current(token, element)) { return }
      horizontalThumbRef.value?.setOffset(thumbOffset(horizontalOffset, hData))
    }
    const handleResize = computed(() => {
      const epoch = binding.value
      return () => {
        if (available() && epoch === binding.value) { getContainerSize() }
      }
    })
    useElementResize(() => [horizontalThumbRef.value?.$el, verticalThumbRef.value?.$el], () => !props.hide, getContainerSize)
    const handleScroll = computed(() => {
      const epoch = binding.value
      return (event: Event) => {
        const element = containerRef.value
        if (!available() || epoch !== binding.value || !element) { return }
        const token = ++operation
        if (hasHorizontalScrollbar.value && horizontalData.value) {
          const offset = thumbOffset(physicalScrollLeft(element), horizontalData.value)
          if (!current(token, element)) { return }
          horizontalThumbRef.value?.setOffset(offset)
        }
        if (!current(token, element)) { return }
        if (hasVerticalScrollbar.value && verticalData.value) {
          const offset = thumbOffset(element.scrollTop, verticalData.value)
          if (!current(token, element)) { return }
          verticalThumbRef.value?.setOffset(offset)
        }
        if (current(token, element)) { emit('scroll', event) }
      }
    })
    const handleHorizontalScroll = computed(() => {
      const epoch = binding.value
      return (offset: number) => {
        if (available() && epoch === binding.value && !props.hide && hasHorizontalScrollbar.value) {
          const token = ++operation
          const element = containerRef.value
          if (!element) { return }
          const left = nativeScrollLeft(element, offset * (horizontalData.value?.ratio ?? 1))
          if (current(token, element)) { element.scrollTo({ left }) }
        }
      }
    })
    const handleVerticalScroll = computed(() => {
      const epoch = binding.value
      return (offset: number) => {
        if (available() && epoch === binding.value && !props.hide && hasVerticalScrollbar.value) {
          operation++
          containerRef.value?.scrollTo({ top: offset * (verticalData.value?.ratio ?? 1) })
        }
      }
    })
    function scrollTo(options?: number | ScrollToOptions, y?: number) {
      if (!available()) { return }
      operation++
      if (isObject(options)) {
        containerRef.value?.scrollTo(options)
      } else if (typeof options === 'number' || typeof y === 'number') {
        containerRef.value?.scrollTo(options ?? 0, y ?? 0)
      }
    }
    function scrollTop(top: number) {
      if (available()) { operation++; containerRef.value?.scrollTo({ top }) }
    }
    function scrollLeft(left: number) {
      if (available()) { operation++; containerRef.value?.scrollTo({ left }) }
    }
    function suspend() {
      active = false
      operation++
      binding.value++
    }
    onUpdated(() => {
      const element = containerRef.value
      if (available() && element && (element.offsetLeft !== viewport.value.left || element.offsetTop !== viewport.value.top)) {
        getContainerSize()
      }
    })
    watch([dir, () => props.type, () => props.disableHorizontal, () => props.disableVertical], getContainerSize, { flush: 'post' })
    watch([hasHorizontalScrollbar, hasVerticalScrollbar], getContainerSize, { flush: 'post' })
    onMounted(getContainerSize)
    onDeactivated(suspend)
    onBeforeUnmount(() => { disposed = true; suspend() })
    onActivated(() => {
      if (!disposed && !active) {
        active = true
        operation++
        binding.value++
        getContainerSize()
      }
    })

    const style = computed(() => {
      const style: CSSProperties = {}
      if (props.type === 'track') {
        if (hasHorizontalScrollbar.value) {
          style.paddingBottom = 'var(--c-scrollbar-track-size)'
        }
        if (hasVerticalScrollbar.value) {
          style.paddingRight = 'var(--c-scrollbar-track-size)'
        }
      }
      return [style, props.outerStyle]
    })

    const cls = computed(() => [
      `${prefixCls}`,
      `${prefixCls}-type-${props.type}`,
      {
        [`${prefixCls}-both`]: isBoth.value,
      },
      props.outerClass,
    ])

    return {
      prefixCls,
      cls,
      style,
      containerRef,
      horizontalThumbRef,
      verticalThumbRef,
      horizontalData,
      horizontalTrackStyle,
      verticalTrackStyle,
      verticalData,
      isBoth,
      hasHorizontalScrollbar,
      hasVerticalScrollbar,
      handleResize,
      handleScroll,
      handleHorizontalScroll,
      handleVerticalScroll,
      scrollTo,
      scrollTop,
      scrollLeft,
    }
  },
})
</script>
