<template>
  <component :is="componentTag" ref="wrapperRef" :class="classNames" v-bind="$attrs" :style="styles">
    <slot />
    <ResizeTrigger
      v-for="direction in allowDirections"
      :key="direction"
      :prefix-cls="`${prefixCls}-trigger`"
      :class="`${prefixCls}-direction-${direction}`"
      :orientation="isHorizontal(direction) ? 'horizontal' : 'vertical'"
      role="spinbutton"
      tabindex="0"
      :aria-label="t(`resizeBox.${direction}`)"
      :aria-valuemin="0"
      :aria-valuenow="handleValue(direction)"
      :aria-valuetext="t('resizeBox.valueText', handleValue(direction))"
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
import { computed, defineComponent, PropType, reactive, ref, toRefs, watch } from 'vue'
import { useDirection } from '@cedar-design/use-vue'
import ResizeTriggerComponent from '../_components/ResizeTrigger.vue'
import useMergeState from '../_hooks/use-merge-state'
import { useResizeGesture } from '../_hooks/use-resize-gesture'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { isNumber } from '../_utils/is'
import type { WithNativeAttributes } from '../_utils/native-listener-types'
import { useElementResize } from '../_utils/resize-observer'
import { useI18n } from '../locale'
import { resizeBoxProps } from './props'
import {
  resizeBoxDirections as allDirections,
  isResizeBoxSize,
  isResizeBoxTag,
  normalizeResizeBoxDirections,
  type ResizeBoxDirection,
} from './validation'

const ResizeTrigger = ResizeTriggerComponent as WithNativeAttributes<
  typeof ResizeTriggerComponent,
  | 'onKeydown'
  | 'onMousedown'
  | 'onPointerdown'
  | 'role'
  | 'tabindex'
  | 'aria-label'
  | 'aria-valuemin'
  | 'aria-valuenow'
  | 'aria-valuetext'
>

type PaddingCSSProperties = 'padding-left' | 'padding-right' | 'padding-top' | 'padding-bottom'

// Read the CSS dimension that width/height will write back under the current box model.
function readCssSize(element: HTMLElement | undefined, axis: 'width' | 'height'): number {
  if (!element) return 0
  const style = element.ownerDocument.defaultView?.getComputedStyle(element)
  const cssValue = style?.[axis]
  const size = Number.parseFloat(cssValue ?? '')
  if (cssValue?.endsWith('px') && Number.isFinite(size)) return Math.max(0, size)
  const horizontal = axis === 'width'
  const sides = horizontal ? ['left', 'right'] : ['top', 'bottom']
  const read = (property: string) => Number.parseFloat(style?.getPropertyValue(property) ?? '') || 0
  const padding = sides.reduce((total, side) => total + read(`padding-${side}`), 0)
  const border = sides.reduce((total, side) => total + read(`border-${side}-width`), 0)
  const client = horizontal ? element.clientWidth : element.clientHeight
  return Math.max(0, style?.boxSizing === 'border-box' ? client + border : client - padding)
}

function isHorizontal(direction: ResizeBoxDirection) {
  return direction === 'top' || direction === 'bottom'
}

export default defineComponent({
  name: createNamespace('resize-box').name,
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
    'moving-start': (ev: MouseEvent) => true,
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
    'moving-end': (ev: MouseEvent) => true,
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
    const { t } = useI18n()
    const { height: propHeight, width: propWidth, directions } = toRefs(props)

    const validWidth = computed(() => (isResizeBoxSize(propWidth.value) ? propWidth.value : undefined))
    const validHeight = computed(() => (isResizeBoxSize(propHeight.value) ? propHeight.value : undefined))
    const [width, setWidth] = useMergeState<number | null>(
      null,
      reactive({
        value: validWidth,
      }),
    )

    const [height, setHeight] = useMergeState<number | null>(
      null,
      reactive({
        value: validHeight,
      }),
    )

    const wrapperRef = ref<HTMLDivElement>()

    const { dir } = useDirection(() => wrapperRef.value)
    const paddingStyles = reactive<Partial<Record<PaddingCSSProperties, string>>>({})

    const prefixCls = getPrefixCls('resizebox')
    const classNames = computed(() => [prefixCls])
    const componentTag = computed(() => (isResizeBoxTag(props.component) ? props.component.trim() : 'div'))
    const styles = computed(() => {
      return {
        ...(isNumber(width.value) ? { width: `${width.value}px` } : {}),
        ...(isNumber(height.value) ? { height: `${height.value}px` } : {}),
        ...paddingStyles,
      }
    })
    const allowDirections = computed(() => normalizeResizeBoxDirections(directions.value))

    const record = {
      direction: '',
      startPageX: 0,
      startPageY: 0,
      startWidth: 0,
      startHeight: 0,
      moving: false,
    }

    function applyDelta(
      direction: ResizeBoxDirection,
      dx: number,
      dy: number,
      initialWidth: number,
      initialHeight: number,
      event?: MouseEvent,
    ) {
      const horizontal = direction === 'left' || direction === 'right'
      const value = Math.max(
        0,
        horizontal
          ? initialWidth + (direction === 'left' ? -dx : dx)
          : initialHeight + (direction === 'top' ? -dy : dy),
      )
      if (horizontal) {
        setWidth(value)
        emit('update:width', value)
      } else {
        setHeight(value)
        emit('update:height', value)
      }
      if (event)
        emit('moving', { width: horizontal ? value : initialWidth, height: horizontal ? initialHeight : value }, event)
    }
    const measuredWidth = ref(0),
      measuredHeight = ref(0)
    function measure() {
      record.startWidth = readCssSize(wrapperRef.value, 'width')
      record.startHeight = readCssSize(wrapperRef.value, 'height')
    }
    useElementResize(
      () => [wrapperRef.value],
      () => true,
      () => {
        measuredWidth.value = readCssSize(wrapperRef.value, 'width')
        measuredHeight.value = readCssSize(wrapperRef.value, 'height')
      },
    )
    const gesture = useResizeGesture({
      element: () => wrapperRef.value,
      cursor: () => (isHorizontal(record.direction as ResizeBoxDirection) ? 'row-resize' : 'col-resize'),
      start(event) {
        measure()
        emit('moving-start', event)
      },
      move: (dx, dy, event) =>
        applyDelta(record.direction as ResizeBoxDirection, dx, dy, record.startWidth, record.startHeight, event),
      end: (event) => emit('moving-end', event),
      cancel: (event) => emit('moving-end', event),
    })
    function onMoveStart(direction: ResizeBoxDirection, event: MouseEvent) {
      if (gesture.active() || !allowDirections.value.includes(direction)) return
      // Do not replace the active edge on a compatibility mouse event.
      if (event.type === 'mousedown' && 'PointerEvent' in window) return
      record.direction = direction
      gesture.begin(event)
    }
    function handleValue(direction: ResizeBoxDirection) {
      return isHorizontal(direction) ? (height.value ?? measuredHeight.value) : (width.value ?? measuredWidth.value)
    }
    function onKeydown(direction: ResizeBoxDirection, event: KeyboardEvent) {
      if (
        event.target !== event.currentTarget ||
        !allowDirections.value.includes(direction) ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      )
        return
      const vertical = isHorizontal(direction)
      const numericKeys = ['ArrowUp', 'ArrowDown', 'Home', 'PageUp', 'PageDown']
      const physical = !vertical && ['ArrowLeft', 'ArrowRight'].includes(event.key)
      if (!numericKeys.includes(event.key) && !physical) return
      event.preventDefault()
      measure()
      const sign = direction === 'left' || direction === 'top' ? -1 : 1
      const step = event.shiftKey || event.key.startsWith('Page') ? 50 : 10
      const delta =
        event.key === 'Home'
          ? -(vertical ? record.startHeight : record.startWidth)
          : physical
            ? step * (event.key === 'ArrowRight' ? 1 : -1) * sign
            : step * (event.key === 'ArrowUp' || event.key === 'PageUp' ? 1 : -1)
      applyDelta(
        direction,
        vertical ? 0 : delta * sign,
        vertical ? delta * sign : 0,
        record.startWidth,
        record.startHeight,
      )
    }
    watch(
      [dir, allowDirections],
      () => {
        gesture.cancel()
        for (const direction of allDirections)
          if (!allowDirections.value.includes(direction)) {
            delete paddingStyles[`padding-${direction}`]
          }
      },
      { flush: 'sync' },
    )

    function onTiggerResize(direction: ResizeBoxDirection, entry: ResizeObserverEntry) {
      const { width, height } = entry.contentRect
      const size = isHorizontal(direction) ? height : width
      paddingStyles[`padding-${direction}` as PaddingCSSProperties] = `${size}px`
    }

    return {
      prefixCls,
      t,
      handleValue,
      width,
      height,
      measuredWidth,
      measuredHeight,
      onKeydown,
      classNames,
      componentTag,
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
