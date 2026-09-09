<template>
  <tooltip :open="open" :placement="mergedTooltipPosition" :content="tooltipContent">
    <div
      v-bind="$attrs"
      tabindex="0"
      role="slider"
      :aria-disabled="disabled"
      :aria-valuemax="max"
      :aria-valuemin="min"
      :aria-valuenow="value"
      :aria-valuetext="tooltipContent"
      :class="cls"
      @mousedown="handleMouseDown"
      @touchstart="handleMouseDown"
      @contextmenu.prevent
      @click.stop
    />
  </tooltip>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import Tooltip from '../tooltip'
import { off, on } from '../_utils/dom'
import { DIRECTIONS } from '../_utils/constant'

export default defineComponent({
  name: createNamespace('slider-button').name,
  components: {
    Tooltip,
  },
  inheritAttrs: false,
  props: {
    orientation: {
      type: String as PropType<(typeof DIRECTIONS)[number]>,
      default: 'horizontal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    formatTooltip: {
      type: Function,
    },
    value: [String, Number],
    tooltipPlacement: {
      type: String,
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['movestart', 'moving', 'moveend'],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('slider-btn')
    const isDragging = ref(false)

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      if (props.disabled) {
        return
      }
      e.preventDefault()

      isDragging.value = true
      on(window, 'mousemove', handleMouseMove)
      on(window, 'touchmove', handleMouseMove)
      on(window, 'mouseup', handleMouseUp)
      on(window, 'contextmenu', handleMouseUp)
      on(window, 'touchend', handleMouseUp)
      emit('movestart')
    }

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      let clientX: number
      let clientY: number
      if (e.type.startsWith('touch')) {
        clientY = (e as TouchEvent).touches[0].clientY
        clientX = (e as TouchEvent).touches[0].clientX
      } else {
        clientY = (e as MouseEvent).clientY
        clientX = (e as MouseEvent).clientX
      }
      emit('moving', clientX, clientY)
    }

    const handleMouseUp = () => {
      isDragging.value = false
      off(window, 'mousemove', handleMouseMove)
      off(window, 'mouseup', handleMouseUp)
      off(window, 'touchend', handleMouseUp)
      emit('moveend')
    }

    const cls = computed(() => [prefixCls])

    const mergedTooltipPosition = computed(() =>
      (props.tooltipPlacement ?? props.orientation === 'vertical') ? 'right' : 'top',
    )

    const tooltipContent = computed(() => props.formatTooltip?.(props.value) ?? `${props.value}`)

    const open = computed(() => (props.showTooltip ? (isDragging.value ? true : undefined) : false))

    return {
      prefixCls,
      cls,
      tooltipContent,
      mergedTooltipPosition,
      open,
      handleMouseDown,
    }
  },
})
</script>
