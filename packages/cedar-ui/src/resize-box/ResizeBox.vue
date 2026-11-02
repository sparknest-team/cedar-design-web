<template>
  <component :is="component" ref="wrapperRef" :class="classNames" v-bind="$attrs" :style="styles">
    <slot />
    <ResizeTrigger
      v-for="direction in allowDirections"
      :key="direction"
      :prefix-cls="`${prefixCls}-trigger`"
      :class="`${prefixCls}-direction-${direction}`"
      :orientation="isHorizontal(direction) ? 'horizontal' : 'vertical'"
      role="separator"
      tabindex="0"
      :aria-label="`Resize ${direction} edge`"
      :aria-orientation="isHorizontal(direction) ? 'horizontal' : 'vertical'"
      :aria-valuemin="0"
      :aria-valuenow="isHorizontal(direction) ? (height ?? measuredHeight) : (width ?? measuredWidth)"
      @keydown="onKeydown(direction, $event)"
      @pointerdown="onMoveStart(direction, $event)"
      @mousedown="onMoveStart(direction, $event)"
      @resize="
        (entry) => {
          onTiggerResize(direction, entry)
        }
      "
    >
      <slot v-if="$slots['resize-trigger']" name="resize-trigger" :direction="direction" />
      <template v-if="$slots['resize-trigger-icon']" #icon>
        <slot name="resize-trigger-icon" :direction="direction" />
      </template>
    </ResizeTrigger>
  </component>
</template>
<script lang="ts">
import { useDirection } from '@cedar-design/use'
import { useElementResize } from '../_utils/resize-observer'
import { useResizeGesture } from '../_hooks/use-resize-gesture'
import { resizeBoxProps } from './props'
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, PropType, toRefs, ref, reactive, watch } from 'vue'
import ResizeTrigger from '../_components/ResizeTrigger.vue'
import useMergeState from '../_hooks/use-merge-state'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'

export type DirectionType = 'left' | 'right' | 'top' | 'bottom'

type PaddingCSSProperties = 'padding-left' | 'padding-right' | 'padding-top' | 'padding-bottom'

const DIRECTION_LEFT = 'left'
const DIRECTION_RIGHT = 'right'
const DIRECTION_TOP = 'top'
const DIRECTION_BOTTOM = 'bottom'

const allDirections: DirectionType[] = [DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_TOP, DIRECTION_BOTTOM]

function getRealSize(pageSize: number, padding: number) {
  if (pageSize === 0) return 0

  const res = pageSize - padding
  return res <= 0 ? 0 : res
}

function isHorizontal(direction: DirectionType) {
  return [DIRECTION_TOP, DIRECTION_BOTTOM].indexOf(direction) > -1
}

export default defineComponent({
  name: createNamespace("resize-box").name,
  components: {
    ResizeTrigger,
  },
  inheritAttrs: false,
  props: resizeBoxProps,
  emits: {
    'update:width': (width: number) => true,
    'update:height': (height: number) => true,
    /**
     * @zh 拖拽开始时触发
     * @en Triggered when dragging starts
     * @param {MouseEvent} ev
     */
    "moving-start": (ev: MouseEvent) => true,
    /**
     * @zh 拖拽时触发
     * @en Triggered when dragging
     * @param {{ width: number; height: number; }} size
     * @param {MouseEvent} ev
     */
    moving: (size: { width: number; height: number }, ev: MouseEvent) => true,
    /**
     * @zh 拖拽结束时触发
     * @en Triggered when the drag ends
     * @param {MouseEvent} ev
     */
    "moving-end": (ev: MouseEvent) => true,
  },
  /**
   * @zh 伸缩杆的内容
   * @en The contents of the resize pole
   * @slot resize-trigger
   * @binding {'left' | 'right' | 'top' | 'bottom'} direction
   */
  /**
   * @zh 伸缩杆的图标
   * @en Resize pole icon
   * @slot resize-trigger-icon
   * @binding {'left' | 'right' | 'top' | 'bottom'} direction
   */
  setup(props, { emit }) {
    const { height: propHeight, width: propWidth, directions } = toRefs(props)

    const [width, setWidth] = useMergeState<number | null>(
      null,
      reactive({
        value: propWidth,
      }),
    )

    const [height, setHeight] = useMergeState<number | null>(
      null,
      reactive({
        value: propHeight,
      }),
    )

    const wrapperRef = ref<HTMLDivElement>()

    const { dir } = useDirection(() => wrapperRef.value)
    const paddingStyles = reactive<Partial<Record<PaddingCSSProperties, string>>>({})

    const prefixCls = getPrefixCls('resizebox')
    const classNames = computed(() => [prefixCls])
    const styles = computed(() => {
      return {
        ...(isNumber(width.value) ? { width: `${width.value}px` } : {}),
        ...(isNumber(height.value) ? { height: `${height.value}px` } : {}),
        ...paddingStyles,
      }
    })
    const allowDirections = computed(() => directions.value.filter((direction) => allDirections.includes(direction)))

    const record = {
      direction: '',
      startPageX: 0,
      startPageY: 0,
      startWidth: 0,
      startHeight: 0,
      moving: false,
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    }

    function applyDelta(direction: DirectionType, dx: number, dy: number, initialWidth: number, initialHeight: number, event?: MouseEvent) {
      const horizontal = direction === 'left' || direction === 'right'
      const value = Math.max(0, horizontal ? initialWidth + (direction === 'left' ? -dx : dx) : initialHeight + (direction === 'top' ? -dy : dy))
      if (horizontal) { setWidth(value); emit('update:width', value) }
      else { setHeight(value); emit('update:height', value) }
      if (event) emit('moving', { width: horizontal ? value : initialWidth, height: horizontal ? initialHeight : value }, event)
    }
    const measuredWidth = ref(0), measuredHeight = ref(0)
    function measure() {
      const { left, right, top, bottom } = record.padding
      record.startWidth = getRealSize(wrapperRef.value?.clientWidth || 0, left + right)
      record.startHeight = getRealSize(wrapperRef.value?.clientHeight || 0, top + bottom)
    }
    useElementResize(() => [wrapperRef.value], () => true, () => {
      const { left, right, top, bottom } = record.padding
      measuredWidth.value = getRealSize(wrapperRef.value?.clientWidth || 0, left + right)
      measuredHeight.value = getRealSize(wrapperRef.value?.clientHeight || 0, top + bottom)
    })
    const gesture = useResizeGesture({
      element: () => wrapperRef.value,
      cursor: () => isHorizontal(record.direction as DirectionType) ? 'row-resize' : 'col-resize',
      start(event) { measure(); emit('moving-start', event) },
      move: (dx, dy, event) => applyDelta(record.direction as DirectionType, dx, dy, record.startWidth, record.startHeight, event),
      end: event => emit('moving-end', event),
    })
    function onMoveStart(direction: DirectionType, event: MouseEvent) {
      if (gesture.active() || !allowDirections.value.includes(direction)) return
      // Do not replace the active edge on a compatibility mouse event.
      if (event.type === 'mousedown' && 'PointerEvent' in window) return
      record.direction = direction
      gesture.begin(event)
    }
    function onKeydown(direction: DirectionType, event: KeyboardEvent) {
      if (event.target !== event.currentTarget || !allowDirections.value.includes(direction)) return
      const vertical = isHorizontal(direction)
      if (!(vertical ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight']).includes(event.key)) return
      event.preventDefault()
      measure()
      const step = (event.shiftKey ? 50 : 10) * (event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1)
      applyDelta(direction, vertical ? 0 : step, vertical ? step : 0, record.startWidth, record.startHeight)
    }
    watch([dir, allowDirections], () => {
      gesture.cancel()
      for (const direction of allDirections) if (!allowDirections.value.includes(direction)) { delete paddingStyles[`padding-${direction}`]; record.padding[direction] = 0 }
    }, { flush: 'sync' })

    function onTiggerResize(direction: DirectionType, entry: ResizeObserverEntry) {
      const { width, height } = entry.contentRect
      const size = isHorizontal(direction) ? height : width
      record.padding[direction] = size
      paddingStyles[`padding-${direction}` as PaddingCSSProperties] = `${size}px`
    }

    return {
      prefixCls,
      width,
      height,
      measuredWidth,
      measuredHeight,
      onKeydown,
      classNames,
      styles,
      wrapperRef,
      onMoveStart,
      isHorizontal,
      allowDirections,
      onTiggerResize,
    }
  },
})
</script>
