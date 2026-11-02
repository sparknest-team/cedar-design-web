<template>
  <component :is="component" ref="wrapperRef" :class="classNames">
    <div :class="[`${prefixCls}-pane`, `${prefixCls}-pane-first`]" :style="firstPaneStyles">
      <slot name="first" />
    </div>
    <ResizeTrigger
      v-if="!disabled"
      :prefix-cls="`${prefixCls}-trigger`"
      :orientation="isHorizontal ? 'vertical' : 'horizontal'"
      role="separator"
      tabindex="0"
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
import { computed, defineComponent, PropType, reactive, ref, toRefs, onMounted, nextTick, watch } from 'vue'
import ResizeTrigger from '../_components/ResizeTrigger.vue'
import useMergeState from '../_hooks/use-merge-state'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber, isString } from '../_utils/is'
import { SplitProps } from './types'

function getSizeConfig(size: number | string) {
  const numberSize = isString(size) ? parseFloat(size) : size
  let unit = ''

  if (isNumber(size) || String(numberSize) === size) {
    unit = numberSize > 1 ? 'px' : '%'
  } else {
    unit = 'px'
  }

  return {
    size: numberSize,
    unit,
    isPx: unit === 'px',
  }
}

function getPxSize({
  size,
  defaultSize,
  containerSize,
}: {
  size: number | string | undefined
  defaultSize?: string | number
  containerSize: number
}) {
  const config = getSizeConfig(size ?? defaultSize ?? 0)
  if (config.isPx) {
    return config.size
  }
  return config.size * containerSize
}

function px2percent(numerator: number | string, denominator: number | string) {
  return parseFloat(numerator as string) / parseFloat(denominator as string)
}

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
  setup(props: SplitProps, { emit }) {
    const { orientation, size: propSize, defaultSize, min, max } = toRefs(props)
    const triggerSize = ref(0)
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
    const sizeConfig = computed(() => getSizeConfig(size.value))
    const isHorizontal = computed(() => orientation.value === 'horizontal')
    const classNames = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-horizontal`]: isHorizontal.value,
        [`${prefixCls}-vertical`]: !isHorizontal.value,
      },
    ])
    const firstPaneStyles = computed(() => {
      const { size: numberSize, unit, isPx } = sizeConfig.value
      const baseVal = isPx ? numberSize : numberSize * 100
      return {
        flex: `0 0 calc(${baseVal}${unit} - ${triggerSize.value / 2}px)`,
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

    async function getContainerSize() {
      const getSize = () => {
        return (isHorizontal.value ? wrapperRef.value?.clientWidth : wrapperRef.value?.clientHeight) || 0
      }

      if (!wrapperRef.value || getSize()) {
        await nextTick()
      }

      return getSize()
    }

    function updateSize(newPxSize: number, containerSize: number) {
      if (!containerSize) {
        return
      }

      const newSize = sizeConfig.value.isPx ? `${newPxSize}px` : px2percent(newPxSize, containerSize)

      if (size.value === newSize) return
      setSize(newSize)
      emit('update:size', newSize)
    }

    function getLegalPxSize(size: number | string, containerSize: number) {
      const pxSize = getPxSize({
        size,
        containerSize,
      })
      const minPxSize = getPxSize({
        size: min.value,
        defaultSize: '0px',
        containerSize,
      })
      const maxPxSize = getPxSize({
        size: max.value,
        defaultSize: `${containerSize}px`,
        containerSize,
      })

      let legalPxSize = pxSize
      legalPxSize = Math.max(legalPxSize, minPxSize)
      legalPxSize = Math.min(legalPxSize, maxPxSize)

      return legalPxSize
    }

    const measure = () => { extent.value = (isHorizontal.value ? wrapperRef.value?.clientWidth : wrapperRef.value?.clientHeight) ?? 0 }
    useElementResize(() => [wrapperRef.value], () => true, measure)
    const separatorRange = computed(() => {
      const total = extent.value || 1
      return { min: getLegalPxSize('0px', total) / total * 100, max: getLegalPxSize(`${total}px`, total) / total * 100, now: getLegalPxSize(size.value ?? 0, total) / total * 100 }
    })
    const gesture = useResizeGesture({
      element: () => wrapperRef.value,
      cursor: () => isHorizontal.value ? 'col-resize' : 'row-resize',
      start(event) {
        if (props.disabled) return false
        measure()
        record.startContainerSize = extent.value
        record.startSize = size.value ?? 0
        emit('move-start', event)
        return !!record.startContainerSize
      },
      move(dx, dy, event) {
        const delta = isHorizontal.value ? (isRtl.value ? -dx : dx) : dy
        const initial = getPxSize({ size: record.startSize, containerSize: record.startContainerSize })
        updateSize(getLegalPxSize(`${initial + delta}px`, record.startContainerSize), record.startContainerSize)
        emit('moving', event)
      },
      end: event => emit('move-end', event),
    })
    watch([dir, orientation, () => props.disabled], gesture.cancel, { flush: 'sync' })
    function onKeydown(event: KeyboardEvent) {
      if (props.disabled || event.target !== event.currentTarget) return
      const grow = isHorizontal.value ? (isRtl.value ? 'ArrowLeft' : 'ArrowRight') : 'ArrowDown'
      const shrink = isHorizontal.value ? (isRtl.value ? 'ArrowRight' : 'ArrowLeft') : 'ArrowUp'
      if (!['Home', 'End', grow, shrink].includes(event.key)) return
      event.preventDefault()
      measure()
      const total = extent.value
      const current = getPxSize({ size: size.value, containerSize: total })
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? total : current + (event.key === grow ? 1 : -1) * (event.shiftKey ? 50 : 10)
      updateSize(getLegalPxSize(`${next}px`, total), total)
    }

    function onTriggerResize(entry: ResizeObserverEntry) {
      const { width, height } = entry.contentRect
      triggerSize.value = isHorizontal.value ? width : height
    }

    onMounted(async () => {
      const containerSize = await getContainerSize()
      const fixedPxSize = getLegalPxSize(size.value ?? 0, containerSize)
      updateSize(fixedPxSize, containerSize)
    })

    return {
      prefixCls,
      classNames,
      isHorizontal,
      wrapperRef,
      gesture,
      separatorRange,
      onKeydown,
      onTriggerResize,
      firstPaneStyles,
    }
  },
})
</script>
