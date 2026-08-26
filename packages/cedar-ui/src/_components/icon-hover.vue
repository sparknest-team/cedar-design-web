<template>
  <span
    :class="
      classes(n(), prefix && `${prefix}-icon-hover`, [size !== 'md', n(`--size-${size}`)], [disabled, n('--disabled')])
    "
  >
    <slot />
  </span>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { ComponentSize } from '../_utils/constant'
import { createNamespace } from '../_utils/global-config'

const { name, n, classes } = createNamespace('icon-hover')

export default defineComponent({
  name,
  props: {
    prefix: {
      type: String,
    },
    size: {
      type: String as PropType<ComponentSize>,
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      classes,
      n,
    }
  },
})
</script>
