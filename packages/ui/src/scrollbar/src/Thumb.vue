<template>
  <transition>
    <div
      ref="trackRef"
      :class="[`${prefixCls}-track`, `${prefixCls}-track-direction-${orientation}`]"
      @mousedown.self="handleTrackClick"
    >
      <div ref="thumbRef" :class="thumbCls" :style="thumbStyle" @mousedown="handleThumbMouseDown">
        <div :class="`${prefixCls}-thumb-bar`" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, onActivated, onBeforeUnmount, onDeactivated, ref, watch, type PropType } from 'vue'
import { type Orientation } from '../../_utils/constant'
import { createNamespace, getPrefixCls } from '../../_utils/global-config'
import type { ThumbData, ThumbMap } from './types'

export default defineComponent({
  name: createNamespace('thumb').name,
  props: {
    data: {
      type: Object as PropType<ThumbData>,
    },
    orientation: {
      type: String as PropType<Orientation>,
      default: 'horizontal',
    },
    alwaysShow: {
      type: Boolean,
      default: false,
    },
    both: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('scrollbar')

    const visible = ref(false)
    const trackRef = ref<HTMLElement>()
    const thumbRef = ref<HTMLElement>()

    const thumbMap = computed<ThumbMap>(() => {
      if (props.orientation === 'horizontal') {
        return {
          size: 'width',
          direction: 'left',
          offset: 'offsetWidth',
          client: 'clientX',
        }
      }
      return {
        size: 'height',
        direction: 'top',
        offset: 'offsetHeight',
        client: 'clientY',
      }
    })

    const offset = ref(0)

    const isDragging = ref(false)

    const thumbStyle = computed(() => {
      return {
        [thumbMap.value.size]: `${props.data?.thumbSize ?? 0}px`,
        [thumbMap.value.direction]: `${offset.value}px`,
      }
    })

    let active = true
    let disposed = false
    let generation = 0
    interface DragSession {
      token: number
      view: Window
      track: HTMLElement
      thumb: HTMLElement
      listeners: (method: 'addEventListener' | 'removeEventListener') => void
    }
    let drag: DragSession | undefined
    const available = () => active && !disposed
    const valid = (session: DragSession) =>
      available() &&
      drag === session &&
      generation === session.token &&
      trackRef.value === session.track &&
      thumbRef.value === session.thumb &&
      session.track.ownerDocument.defaultView === session.view &&
      session.thumb.ownerDocument.defaultView === session.view

    function cancelDrag() {
      const previous = drag
      drag = undefined
      const token = ++generation
      previous?.listeners('removeEventListener')
      // Listener removal or reactive notification can synchronously start new work.
      if (token === generation) {
        isDragging.value = false
      }
    }
    const getLegalOffset = (value: number) => {
      if (value < 0) {
        return 0
      }
      if (props.data && value > props.data.max) {
        return props.data.max
      }
      return value
    }
    const handleThumbMouseDown = (event: MouseEvent) => {
      if (!available() || event.button !== 0) {
        return
      }
      cancelDrag()
      if (!available() || drag) {
        return
      }
      const thumb = thumbRef.value
      const track = trackRef.value
      const view = thumb?.ownerDocument.defaultView
      if (!thumb || !track || !view || track.ownerDocument.defaultView !== view) {
        return
      }
      const token = generation
      const map = thumbMap.value
      event.preventDefault()
      const start = event[map.client] - thumb.getBoundingClientRect()[map.direction]
      if (
        !available() ||
        token !== generation ||
        thumbRef.value !== thumb ||
        trackRef.value !== track ||
        thumb.ownerDocument.defaultView !== view ||
        track.ownerDocument.defaultView !== view
      ) {
        return
      }
      const session: DragSession = { token, view, track, thumb, listeners }
      function move(event: Event) {
        if (!valid(session)) {
          return
        }
        const next = getLegalOffset(
          (event as MouseEvent)[map.client] - session.track.getBoundingClientRect()[map.direction] - start,
        )
        if (!valid(session)) {
          return
        }
        if (next !== offset.value) {
          offset.value = next
          if (valid(session)) {
            emit('scroll', next)
          }
        }
      }
      function end() {
        if (drag === session) {
          cancelDrag()
        }
      }
      drag = session
      isDragging.value = true
      if (!valid(session)) {
        return
      }
      listeners('addEventListener')
      if (drag !== session) {
        listeners('removeEventListener')
      }
      function listeners(method: 'addEventListener' | 'removeEventListener') {
        session.view[method]('mousemove', move)
        session.view[method]('mouseup', end)
        session.view[method]('contextmenu', end)
        session.view[method]('blur', end)
      }
    }
    const handleTrackClick = (event: MouseEvent) => {
      if (!available() || event.button !== 0) {
        return
      }
      cancelDrag()
      if (!available() || drag) {
        return
      }
      const thumb = thumbRef.value
      const track = trackRef.value
      if (!thumb || !track) {
        return
      }
      const token = generation
      const map = thumbMap.value
      event.preventDefault()
      const leading = thumb.getBoundingClientRect()[map.direction]
      const next = getLegalOffset(
        event[map.client] > leading
          ? offset.value + (props.data?.thumbSize ?? 0)
          : offset.value - (props.data?.thumbSize ?? 0),
      )
      if (!available() || token !== generation || thumbRef.value !== thumb || trackRef.value !== track) {
        return
      }
      if (next !== offset.value) {
        offset.value = next
        if (available() && token === generation) {
          emit('scroll', next)
        }
      }
    }
    const setOffset = (value: number) => {
      if (!available() || drag) {
        return
      }
      const token = generation
      const next = getLegalOffset(value)
      if (available() && token === generation && !drag && next !== offset.value) {
        offset.value = next
      }
    }
    watch(
      [() => props.orientation, () => props.data?.max, () => props.data?.thumbSize, () => props.data?.ratio],
      cancelDrag,
      { flush: 'sync' },
    )
    onDeactivated(() => {
      active = false
      cancelDrag()
    })
    onBeforeUnmount(() => {
      disposed = true
      active = false
      cancelDrag()
    })
    onActivated(() => {
      if (!disposed && !active) {
        active = true
        generation++
      }
    })

    const thumbCls = computed(() => [
      `${prefixCls}-thumb`,
      `${prefixCls}-thumb-direction-${props.orientation}`,
      {
        [`${prefixCls}-thumb-dragging`]: isDragging.value,
      },
    ])

    return {
      visible,
      trackRef,
      thumbRef,
      prefixCls,
      thumbCls,
      thumbStyle,
      handleThumbMouseDown,
      handleTrackClick,
      setOffset,
    }
  },
})
</script>
