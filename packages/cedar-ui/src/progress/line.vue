<template>
  <div role="progressbar" aria-valuemin="0" aria-valuemax="1" :aria-valuenow="percent" :class="classes(n('wrapper'))">
    <div :class="classes(n())" :style="style">
      <div :class="classes(n('bar-buffer'))" />
      <div v-if="indeterminate" :class="classes(n('indeterminate'))" >
        <div :class="classes(n('indeterminate-long'))"></div>
        <div :class="classes(n('indeterminate-short'))"></div>
      </div>
      <div v-else :class="classes(n('bar'))" :style="barStyle" />
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
import { isObject } from '../_utils/is'
import { IconExclamationCircleFill } from '@cedarjs/icons-vue/icon-exclamation-circle-fill'
import { SemanticStatus } from '../_utils/constant'

const DEFAULT_STROKE_WIDTH = {
  sm: 3,
  md: 4,
  lg: 8,
}

const getBackground = (color?: string | Record<string, string>) => {
  if (!color) {
    return undefined
  }

  if (isObject(color)) {
    const val = Object.keys(color)
      .map((key) => `${color[key]} ${key}`)
      .join(',')
    return {
      backgroundImage: `linear-gradient(to right, ${val})`,
    }
  }
  return {
    backgroundColor: color,
  }
}

const { name, n, classes } = createNamespace('progress-line')

export default defineComponent({
  name,
  components: {
    IconExclamationCircleFill,
  },
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    animation: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md',
    },
    strokeWidth: {
      type: Number,
      default: 4,
    },
    width: {
      type: [Number, String],
      default: '100%',
    },
    color: {
      type: [String, Object],
      default: undefined,
    },
    trackColor: String,
    formatText: {
      type: Function,
      default: undefined,
    },
    type: {
      type: String as PropType<SemanticStatus>,
    },
    showText: Boolean,
    indeterminate: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const strokeWidth = computed(() => {
      if (props.strokeWidth !== 4) {
        return props.strokeWidth
      }
      return DEFAULT_STROKE_WIDTH[props.size]
    })

    const text = computed(() => `${NP.times(props.percent, 100)}%`)

    const style = computed(() => ({
      width: props.width,
      height: `${strokeWidth.value}px`,
      backgroundColor: props.trackColor,
    }))

    // const computedText = computed(() => {
    //   if (isFunction(props.formatText)) {
    //     return props.formatText(props.percent);
    //   }
    //   return `${props.percent}%`;
    // });

    const barStyle = computed(() => ({
      width: `${props.percent * 100}%`,
      ...getBackground(props.color),
    }))

    return {
      classes,
      n,
      style,
      barStyle,
      text,
    }
  },
})
</script>
