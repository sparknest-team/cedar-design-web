<template>
  <component :is="component" ref="wrapperRef" :class="classNames">
    <div :class="[`${prefixCls}-pane`, `${prefixCls}-pane-first`]" :style="firstPaneStyles">
      <slot name="first" />
    </div>
    <ResizeTrigger
      v-if="!disabled"
      ref="triggerRef"
      :prefix-cls="`${prefixCls}-trigger`"
      :orientation="isHorizontal ? 'vertical' : 'horizontal'"
      role="separator"
      tabindex="0"
      :aria-label="separatorLabel"
      :aria-orientation="isHorizontal ? 'vertical' : 'horizontal'"
      :aria-valuemin="separatorRange.min"
      :aria-valuemax="separatorRange.max"
      :aria-valuenow="separatorRange.now"
      @keydown="onKeydown"
      @pointerdown="gesture.begin"
      @mousedown="gesture.begin"
      @resize="onTriggerResize"
    >
      <template #default>
        <slot name="resize-trigger" />
      </template>
      <template #icon>
        <slot name="resize-trigger-icon" />
      </template>
    </ResizeTrigger>
    <div :class="[`${prefixCls}-pane`, `${prefixCls}-pane-second`]">
      <slot name="second" />
    </div>
  </component>
</template>
<script lang="ts">
import { useDirection } from '@cedar-design/use'
import { useResizeGesture } from '../_hooks/use-resize-gesture'
import { useElementResize } from '../_utils/resize-observer'
import { splitProps } from './props'
import { createNamespace } from '../_utils/global-config'
import { computed, defineComponent, reactive, ref, toRefs, onMounted, watch } from 'vue'
import ResizeTrigger from '../_components/ResizeTrigger.vue'
import useMergeState from '../_hooks/use-merge-state'
import { getPrefixCls } from '../_utils/global-config'
import { legalSplitSize, parseSplitSize, splitBounds, splitSizeToPx } from './sizing'
import { useI18n } from '../locale'

export default defineComponent({
  name: createNamespace("split").name,
  components: {
    ResizeTrigger,
  },
  props: splitProps,
  emits: {
    /**
     * @zh 开始拖拽之前触发
     * @en Triggered before dragging
     * */
    "move-start": (ev: MouseEvent) => true,
    /**
     * @zh 拖拽时触发
     * @en Triggered when dragging
     */
    moving: (ev: MouseEvent) => true,
    /**
     * @zh 拖拽结束之后触发
     * @en Triggered after dragging ends
     */
    "move-end": (ev: MouseEvent) => true,
    'update:size': (size: number | string) => true,
  },
  /**
   * @zh 第一个面板的内容
   * @en The contents of the first panel
   * @slot first
   */
  /**
   * @zh 第二个面板的内容
   * @en The contents of the second panel
   * @slot second
   */
  /**
   * @zh 伸缩杆的内容
   * @en The contents of the resize pole
   * @slot resize-trigger
   */
  /**
   * @zh 伸缩杆的图标
   * @en Resize pole icon
   * @slot resize-trigger-icon
   */
  setup(props, { emit }) {
    const { t } = useI18n()
    const separatorLabel = computed(() => props.ariaLabel?.trim() || t('split.resizeLabel'))
    const { orientation, size: propSize, defaultSize, min, max } = toRefs(props)
    const triggerSize = ref(0)
    const triggerRef = ref<InstanceType<typeof ResizeTrigger>>()
    const wrapperRef = ref<HTMLDivElement>()
    const { dir, isRtl } = useDirection(() => wrapperRef.value)
    const extent = ref(0)
    const prefixCls = getPrefixCls('split')
    const [size, setSize] = useMergeState(
      defaultSize.value,
      reactive({
        value: propSize,
      }),
    )
    const sizeConfig = computed(() => parseSplitSize(size.value) ?? { value: 0.5, isPx: false })
    const isHorizontal = computed(() => orientation.value === 'horizontal')
    const classNames = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-horizontal`]: isHorizontal.value,
        [`${prefixCls}-vertical`]: !isHorizontal.value,
      },
    ])
    const effectiveSize = computed(() => extent.value > 0
      ? legalSplitSize(size.value, min.value, max.value, extent.value)
      : splitSizeToPx(size.value, 1, 0.5))
    const firstPaneStyles = computed(() => {
      const { value, isPx } = sizeConfig.value
      const amount = extent.value > 0 ? effectiveSize.value / (isPx ? 1 : extent.value) : value
      const handle = props.disabled ? 0 : Math.min(triggerSize.value, extent.value || triggerSize.value)
      return {
        // Clip the half-handle adjustment at the container edges, including tiny containers.
        flex: `0 0 calc(${isPx ? amount : amount * 100}${isPx ? 'px' : '%'} - ${handle / 2}px)`,
        [isHorizontal.value ? 'minWidth' : 'minHeight']: '0px',
        [isHorizontal.value ? 'maxWidth' : 'maxHeight']: `calc(100% - ${handle}px)`,
      }
    })
    const record: {
      startPageX: number
      startPageY: number
      startContainerSize: number
      startSize: number | string
    } = {
      startPageX: 0,
      startPageY: 0,
      startContainerSize: 0,
      startSize: 0,
    }

    function updateSize(newPxSize: number, containerSize: number) {
      if (containerSize <= 0) return
      const newSize = sizeConfig.value.isPx ? `${newPxSize}px` : newPxSize / containerSize
      if (size.value === newSize) return
      setSize(newSize)
      emit('update:size', newSize)
    }
    const measure = () => {
      extent.value = (isHorizontal.value ? wrapperRef.value?.clientWidth : wrapperRef.value?.clientHeight) ?? 0
      const rect = (triggerRef.value?.$el as HTMLElement | undefined)?.getBoundingClientRect()
      if (props.disabled) triggerSize.value = 0
      else if (rect) triggerSize.value = isHorizontal.value ? rect.width : rect.height
    }
    useElementResize(() => [wrapperRef.value, triggerRef.value?.$el], () => true, measure)
    watch([orientation, () => props.disabled], measure, { flush: 'post' })
    watch([size, min, max, extent], () => {
      if (extent.value <= 0) return
      const raw = splitSizeToPx(size.value, extent.value, 0.5)
      if (!parseSplitSize(size.value) || raw !== effectiveSize.value) updateSize(effectiveSize.value, extent.value)
    }, { flush: 'post' })
    const separatorRange = computed(() => {
      const total = extent.value || 1
      const bounds = splitBounds(min.value, max.value, total)
      return { min: bounds.min / total * 100, max: bounds.max / total * 100, now: legalSplitSize(size.value, min.value, max.value, total) / total * 100 }
    })
    const gesture = useResizeGesture({
      element: () => wrapperRef.value,
      cursor: () => isHorizontal.value ? 'col-resize' : 'row-resize',
      start(event) {
        if (props.disabled) return false
        measure()
        if (!extent.value) return false
        record.startContainerSize = extent.value
        record.startSize = effectiveSize.value
        emit('move-start', event)
        return true
      },
      move(dx, dy, event) {
        const delta = isHorizontal.value ? (isRtl.value ? -dx : dx) : dy
        const initial = Number(record.startSize)
        updateSize(legalSplitSize(`${Math.max(0, initial + delta)}px`, min.value, max.value, record.startContainerSize), record.startContainerSize)
        emit('moving', event)
      },
      end: event => emit('move-end', event),
      cancel: event => emit('move-end', event),
    })
    watch([dir, orientation, min, max, () => props.disabled], gesture.cancel, { flush: 'sync' })
    function onKeydown(event: KeyboardEvent) {
      if (props.disabled || event.target !== event.currentTarget) return
      const grow = isHorizontal.value ? (isRtl.value ? 'ArrowLeft' : 'ArrowRight') : 'ArrowDown'
      const shrink = isHorizontal.value ? (isRtl.value ? 'ArrowRight' : 'ArrowLeft') : 'ArrowUp'
      if (!['Home', 'End', grow, shrink].includes(event.key)) return
      event.preventDefault()
      measure()
      const total = extent.value
      const current = effectiveSize.value
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? total : current + (event.key === grow ? 1 : -1) * (event.shiftKey ? 50 : 10)
      updateSize(legalSplitSize(`${Math.max(0, next)}px`, min.value, max.value, total), total)
    }

    function onTriggerResize(entry: ResizeObserverEntry) {
      if (props.disabled) return
      const { width, height } = entry.contentRect
      triggerSize.value = isHorizontal.value ? width : height
    }

    onMounted(measure)

    return {
      prefixCls,
      classNames,
      isHorizontal,
      wrapperRef,
      triggerRef,
      gesture,
      separatorRange,
      separatorLabel,
      onKeydown,
      onTriggerResize,
      firstPaneStyles,
    }
  },
})
</script>
