<template>
  <div :class="cls">
    <progress-steps
      v-if="steps > 0"
      :stroke-width="resolvedStroke"
      :percent="normalizedPercent"
      :color="color"
      :track-color="trackColor"

      :steps="steps"
      :size="mergedSize"
      :show-text="showText"
      :type="computedStatus"
    >
      <template v-if="$slots.text" #text="scope">
        <slot name="text" v-bind="scope"></slot>
      </template>
    </progress-steps>
    <progress-line
      v-else-if="mode === 'line'"
      :stroke-width="resolvedStroke"
      :animation="animation"
      :percent="normalizedPercent"
      :color="color"
      :track-color="trackColor"
      :size="(mergedSize === 'xl' ? 'lg' : mergedSize) as 'sm' | 'md' | 'lg'"
      :buffer-color="bufferColor"

      :show-text="showText"
      :type="computedStatus"
      :indeterminate="indeterminate"
    >
      <template v-if="$slots.text" #text="scope">
        <slot name="text" v-bind="scope"></slot>
      </template>
    </progress-line>
    <progress-circle
      v-else
      :mode="mode"
      :stroke-width="resolvedStroke"
      :path-stroke-width="resolvedStroke"
      :width="dimensions.diameter"
      :percent="normalizedPercent"
      :color="color"
      :track-color="trackColor"
      :size="mergedSize"
      :show-text="showText"
      :type="computedStatus"
    >
      <template v-if="$slots.text" #text="scope">
        <slot name="text" v-bind="scope"></slot>
      </template>
    </progress-circle>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import ProgressLine from './Line.vue'
import ProgressCircle from './Circle.vue'
import ProgressSteps from './Steps.vue'
import { createNamespace } from '../_utils/global-config'
import { useSize } from '../_hooks/use-size'
import { resolveProgressSize, positiveLength, progressSizeMap } from './size'
import type { ComponentSize } from '../_utils/constant'
import { normalizePercent } from './percent'
import { progressProps } from './props'

const { name, n, classes } = createNamespace('progress')

export default defineComponent({
  name,
  components: {
    ProgressLine,
    ProgressCircle,
    ProgressSteps,
  },
  props: progressProps,
  setup(props) {
    const normalizedPercent = computed(() => normalizePercent(props.percent))
    const size = computed(() => typeof props.size === 'string' && props.size in progressSizeMap ? props.size as ComponentSize : undefined)
    const displayMode = computed(() => (props.steps > 0 ? 'steps' : props.mode))
    const computedStatus = computed(() => {
      return props.status === 'default' && normalizedPercent.value >= 100 ? 'success' : props.status
    })
    const { mergedSize: configSize } = useSize(size)
    const dimensions = computed(() => resolveProgressSize(props.size ?? configSize.value, props.mode))
    const mergedSize = computed(() => dimensions.value.preset)
    const resolvedStroke = computed(() => positiveLength(props.strokeWidth, dimensions.value.stroke))

    const cls = computed(() =>
      classes(n(), n(`--${displayMode.value}`), n(`--${mergedSize.value}`), n(`--${computedStatus.value}`)),
    )

    return {
      cls,
      normalizedPercent,
      dimensions,
      resolvedStroke,
      computedStatus,
      mergedSize,
    }
  },
})
</script>
