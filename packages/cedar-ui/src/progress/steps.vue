<template>
  <div role="progressbar" aria-valuemin="0" aria-valuemax="100" :aria-valuenow="percent" :class="classes(n('wrapper'))">
    <div :class="classes(n())" :style="{ height: typeof mergedStrokeWidth === 'number' ? `${mergedStrokeWidth}px` : mergedStrokeWidth }">
      <div
        v-for="(active, index) of stepList"
        :key="index"
        :class="classes(n('item'), [active, n('item--active')])"
        :style="{
          backgroundColor: (active ? color : trackColor) as any,
        }"
      />
    </div>
    <div v-if="showText" :class="classes(n('text'))">
      <slot name="text" :percent="percent">
        {{ text }}
        <icon-exclamation-circle-fill v-if="type === 'danger'" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import NP from 'number-precision'
import { createNamespace } from '../_utils/global-config'
import { IconExclamationCircleFill } from '@cedarjs/icons-vue/icon-exclamation-circle-fill'

const { name, n, classes } = createNamespace('progress-steps')

export default defineComponent({
  name,
  components: {
    IconExclamationCircleFill,
  },
  props: {
    steps: {
      type: Number,
      default: 0,
    },
    percent: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
    },
    color: {
      type: [String, Object],
      default: undefined,
    },
    trackColor: String,
    strokeWidth: {
      type: [Number, String],
    },
    type: {
      type: String,
      default: undefined,
    },
    showText: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const mergedStrokeWidth = computed(() => (props.strokeWidth ?? (props.size === 'sm' ? 3 : 4)))

    const stepList = computed(() =>
      [...Array(props.steps)].map((_, index) => {
        return props.percent > 0 && props.percent > (100 / props.steps) * index
      }),
    )

    const text = computed(() => `${props.percent}%`)

    return {
      classes,
      n,
      stepList,
      mergedStrokeWidth,
      text,
    }
  },
})
</script>
