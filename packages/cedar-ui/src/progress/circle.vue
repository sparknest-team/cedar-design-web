<template>
  <div
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="1"
    :aria-valuenow="percent"
    :class="classes(n('wrapper'))"
    :style="{ width: `${mergedWidth}px`, height: `${mergedWidth}px` }"
  >
    <div :class="classes(n())">
      <icon-check
        v-if="mode === 'circle' && size === 'xs' && type === 'success'"
        :style="{ fontSize: mergedWidth - 2, color }"
      />
      <svg v-else :viewBox="`0 0 ${mergedWidth} ${mergedWidth}`" :class="classes(n('svg'))">
        <defs v-if="isLinearGradient">
          <linearGradient :id="linearGradientId" x1="0" y1="1" x2="0" y2="0">
            <stop v-for="key of Object.keys(color)" :key="key" :offset="key" :stop-color="color[key]" />
          </linearGradient>
        </defs>
        <circle
          :class="classes(n('bg'))"
          fill="none"
          :cx="center"
          :cy="center"
          :r="radius"
          :stroke-width="mergedPathStrokeWidth"
          :style="{
            stroke: trackColor,
          }"
        />
        <circle
          :class="classes(n('bar'))"
          fill="none"
          :cx="center"
          :cy="center"
          :r="radius"
          :stroke-width="mergedStrokeWidth"
          :style="{
            stroke: (isLinearGradient ? `url(#${linearGradientId})` : color) as any,
            strokeDasharray: perimeter,
            strokeDashoffset: (percent >= 1 ? 0 : 1 - percent) * perimeter,
          }"
        />
      </svg>
      <div v-if="showText && size !== 'xs'" :class="classes(n('text'))">
        <slot name="text" :percent="percent">
          <icon-exclamation v-if="type === 'danger'" />
          <icon-check v-else-if="type === 'success'" />
          <template v-else>
            {{ text }}
          </template>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import NP from 'number-precision'
import { createNamespace } from '../_utils/global-config'
import { isObject } from '../_utils/is'
import { componentSizes } from '../_utils/constant'
import { IconExclamation } from '@cedarjs/icons-vue/icon-exclamation'
import { IconCheck } from '@cedarjs/icons-vue/icon-check'

let __ARCO_PROGRESS_SEED = 0

const DEFAULT_WIDTH = {
  xs: 16,
  sm: 48,
  md: 64,
  lg: 80,
}

const DEFAULT_STROKE_WIDTH = {
  xs: 4,
  sm: 3,
  md: 4,
  lg: 4,
}

const { name, n, classes } = createNamespace('progress-circle')
export default defineComponent({
  name,
  components: {
    IconExclamation,
    IconCheck,
  },
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    mode: {
      type: String as PropType<'line' | 'circle'>,
    },
    size: {
      type: String as PropType<(typeof componentSizes)[number]>,
      default: 'md',
    },
    strokeWidth: {
      type: Number,
    },
    width: {
      type: Number,
      default: undefined,
    },
    color: {
      type: [String, Object],
      default: undefined,
    },
    trackColor: String,
    type: {
      type: String,
      default: undefined,
    },
    showText: {
      type: Boolean,
      default: true,
    },
    pathStrokeWidth: {
      type: Number,
    },
  },
  setup(props) {
    const isLinearGradient = isObject(props.color)

    const mergedWidth = computed(() => {
      return props.width ?? DEFAULT_WIDTH[props.size]
    })

    const mergedStrokeWidth = computed(
      () => props.strokeWidth ?? (props.size === 'xs' ? mergedWidth.value / 2 : DEFAULT_STROKE_WIDTH[props.size]),
    )

    const mergedPathStrokeWidth = computed(
      () =>
        props.pathStrokeWidth ??
        (props.size === 'xs' ? mergedStrokeWidth.value : Math.max(2, mergedStrokeWidth.value - 2)),
    )

    const radius = computed(() => (mergedWidth.value - mergedStrokeWidth.value) / 2)
    const perimeter = computed(() => Math.PI * 2 * radius.value)
    const center = computed(() => mergedWidth.value / 2)

    const linearGradientId = computed(() => {
      __ARCO_PROGRESS_SEED += 1
      return `${n('linear-gradient')}-${__ARCO_PROGRESS_SEED}`
    })

    const text = computed(() => `${NP.times(props.percent, 100)}%`)

    return {
      classes,
      n,
      isLinearGradient,
      radius,
      text,
      perimeter,
      center,
      mergedWidth,
      mergedStrokeWidth,
      mergedPathStrokeWidth,
      linearGradientId,
    }
  },
})
</script>
