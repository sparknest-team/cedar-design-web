<template>
  <div :class="cls">
    <div ref="trackRef" :class="trackCls" @click="handleClick">
      <div :class="`${prefixCls}-bar`" :style="getBarStyle(computedValue)" />
      <slider-ticks v-if="showTicks" :value="computedValue" :step="step" :min="min" :max="max" :orientation="orientation" />
      <slider-dots v-if="marks" :data="markList" :min="min" :max="max" :orientation="orientation" />
      <slider-marks v-if="marks" :data="markList" :min="min" :max="max" :orientation="orientation" />
      <slider-button
        v-if="range"
        :style="getBtnStyle(computedValue[0])"
        :value="computedValue[0]"
        :orientation="orientation"
        :disabled="mergedDisabled"
        :min="min"
        :max="max"
        :format-tooltip="formatTooltip"
        :show-tooltip="showTooltip"
        @movestart="handleMoveStart"
        @moving="handleStartMoving"
        @moveend="handleMoveEnd"
      />
      <slider-button
        :style="getBtnStyle(computedValue[1])"
        :value="computedValue[1]"
        :orientation="orientation"
        :disabled="mergedDisabled"
        :min="min"
        :max="max"
        :format-tooltip="formatTooltip"
        :show-tooltip="showTooltip"
        @movestart="handleMoveStart"
        @moving="handleEndMoving"
        @moveend="handleMoveEnd"
      />
    </div>
    <slider-input
      v-if="showInput"
      :model-value="computedValue"
      :min="min"
      :max="max"
      :step="step"
      :range="range"
      :disabled="disabled"
      @start-change="handleStartChange"
      @end-change="handleEndChange"
    />
  </div>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue'
import { computed, defineComponent, ref, toRef, toRefs, watch } from 'vue'
import NP from 'number-precision'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import SliderButton from './SliderButton.vue'
import SliderDots from './SliderDots.vue'
import SliderMarks from './SliderMarks.vue'
import SliderTicks from './SliderTicks.vue'
import SliderInput from './SliderInput.vue'
import { isArray, isUndefined } from '../_utils/is'
import { getOffsetPercent, getPositionStyle } from './utils'
import { useFormItem } from '../_hooks/use-form-item'
import { sliderProps } from './props'

export default defineComponent({
  name: createNamespace('slider').name,
  components: {
    SliderButton,
    SliderDots,
    SliderMarks,
    SliderTicks,
    SliderInput,
  },
  props: sliderProps,
  emits: {
    'update:modelValue': (value: number | [number, number]) => true,
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param {number | [number, number]} value
     */
    change: (value: number | [number, number]) => true,
    start: () => true,
    end: (value: number | [number, number]) => true,
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)
    const prefixCls = getPrefixCls('slider')
    const { mergedDisabled, eventHandlers } = useFormItem({
      disabled: toRef(props, 'disabled'),
    })

    const trackRef = ref<HTMLElement | null>(null)
    const trackRect = ref<DOMRect>()
    const defaultValue = props.modelValue ? props.modelValue : props.defaultValue

    const startValue = ref(isArray(defaultValue) ? defaultValue[0] : 0)

    const endValue = ref(isArray(defaultValue) ? defaultValue[1] : defaultValue)

    watch(modelValue, (value) => {
      if (isArray(value)) {
        startValue.value = value[0] ?? props.min ?? 0
        endValue.value = value[1] ?? props.min ?? 0
      } else {
        endValue.value = value ?? props.min ?? 0
      }
    })

    const handleChange = () => {
      if (props.range) {
        emit('update:modelValue', [startValue.value, endValue.value])
        emit('change', [startValue.value, endValue.value])
      } else {
        emit('update:modelValue', endValue.value)
        emit('change', endValue.value)
      }
      eventHandlers.value?.onChange?.()
    }

    const handleStartChange = (value?: number) => {
      value = value ?? props.min
      startValue.value = value
      handleChange()
    }

    const handleEndChange = (value?: number) => {
      value = value ?? props.min
      endValue.value = value
      handleChange()
    }

    const computedValue = computed<[number, number]>(() => {
      if (props.range) {
        if (isArray(props.modelValue)) {
          return props.modelValue
        }
        return [startValue.value, props.modelValue ?? endValue.value]
      }
      if (isUndefined(props.modelValue)) {
        return [startValue.value, endValue.value]
      }
      if (isArray(props.modelValue)) {
        return [props.min ?? 0, props.modelValue[1]]
      }
      return [props.min ?? 0, props.modelValue]
    })

    // 标签数组
    const markList = computed(() =>
      Object.keys(props.marks || {}).map((index) => {
        const key = Number(index)
        return {
          key,
          content: props.marks?.[key] ?? '',
          isActive: key >= computedValue.value[0] && key <= computedValue.value[1],
        }
      }),
    )

    const getBtnStyle = (value: number) =>
      getPositionStyle(getOffsetPercent(value, [props.min, props.max]), props.orientation)

    const isDragging = ref(false)

    const handleMoveStart = () => {
      if (mergedDisabled.value || isDragging.value) return
      isDragging.value = true
      emit('start')
      if (trackRef.value) {
        trackRect.value = trackRef.value.getBoundingClientRect()
      }
    }

    // 通过坐标获取value值
    function getValueByCoords(x: number, y: number): number {
      if (!trackRect.value) {
        return 0
      }
      const { left, top, width, height } = trackRect.value
      const trackLength = props.orientation === 'horizontal' ? width : height
      const stepLength = (trackLength * props.step) / (props.max - props.min)
      let diff = props.orientation === 'horizontal' ? x - left : top + height - y
      if (diff < 0) diff = 0
      if (diff > trackLength) diff = trackLength

      // 根据diff计算步数
      const steps = Math.round(diff / stepLength)

      return NP.plus(props.min, NP.times(steps, props.step))
    }

    const handleEndMoving = (x: number, y: number) => {
      endValue.value = getValueByCoords(x, y)
      handleChange()
    }

    const handleClick = (e: MouseEvent) => {
      if (mergedDisabled.value) {
        return
      }

      const { clientX, clientY } = e

      if (trackRef.value) {
        trackRect.value = trackRef.value.getBoundingClientRect()
      }

      endValue.value = getValueByCoords(clientX, clientY)
      handleChange()
    }

    function getBarStyle([start, end]: [number, number]): CSSProperties {
      if (start > end) {
        ;[start, end] = [end, start]
      }
      return props.orientation === 'vertical'
        ? {
            bottom: getOffsetPercent(start, [props.min, props.max]),
            top: getOffsetPercent(props.max + props.min - end, [props.min, props.max]),
          }
        : {
            left: getOffsetPercent(start, [props.min, props.max]),
            right: getOffsetPercent(props.max + props.min - end, [props.min, props.max]),
          }
    }

    const handleStartMoving = (x: number, y: number) => {
      startValue.value = getValueByCoords(x, y)
      handleChange()
    }

    const handleMoveEnd = () => {
      if (!isDragging.value) return
      isDragging.value = false
      emit('end', props.range ? [startValue.value, endValue.value] : endValue.value)
    }

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-vertical`]: props.orientation === 'vertical',
        [`${prefixCls}-with-marks`]: Boolean(props.marks),
      },
    ])

    const trackCls = computed(() => [
      `${prefixCls}-track`,
      {
        [`${prefixCls}-track-disabled`]: mergedDisabled.value,
        [`${prefixCls}-track-vertical`]: props.orientation === 'vertical',
      },
    ])

    return {
      prefixCls,
      cls,
      trackCls,
      trackRef,
      computedValue,
      mergedDisabled,
      markList,
      getBtnStyle,
      getBarStyle,
      handleClick,
      handleMoveStart,
      handleEndMoving,
      handleMoveEnd,
      handleStartMoving,
      handleStartChange,
      handleEndChange,
    }
  },
})
</script>
