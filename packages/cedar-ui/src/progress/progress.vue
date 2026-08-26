<template>
  <div :class="cls">
    <progress-steps
      v-if="steps > 0"
      :stroke-width="strokeWidth"
      :percent="percent"
      :color="color"
      :track-color="trackColor"
      :width="width"
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
      v-else-if="mode === 'line' && mergedSize !== 'xs'"
      :stroke-width="strokeWidth"
      :animation="animation"
      :percent="percent"
      :color="color"
      :track-color="trackColor"
      :size="(mergedSize === 'xl' ? 'lg' : mergedSize) as 'sm' | 'md' | 'lg'"
      :buffer-color="bufferColor"
      :width="width"
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
      :stroke-width="mode === 'line' ? Number(strokeWidth) || 4 : (strokeWidth as number | undefined)"
      :path-stroke-width="mode === 'line' ? Number(strokeWidth) || 4 : (strokeWidth as number | undefined)"
      :width="(width as number | undefined)"
      :percent="percent"
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
import ProgressLine from './line.vue'
import ProgressCircle from './circle.vue'
import ProgressSteps from './steps.vue'
import { createNamespace } from '../_utils/global-config'
import { useSize } from '../_hooks/use-size'
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
    const { size } = toRefs(props)
    const displayMode = computed(() => (props.steps > 0 ? 'steps' : props.mode))
    const computedStatus = computed(() => {
      return props.status === 'default' && props.percent >= 1 ? 'success' : props.status
    })
    const { mergedSize } = useSize(size)

    const cls = computed(() =>
      classes(n(), n(`--${displayMode.value}`), n(`--${mergedSize.value}`), n(`--${computedStatus.value}`)),
    )

    return {
      cls,
      computedStatus,
      mergedSize,
    }
  },
})
</script>
