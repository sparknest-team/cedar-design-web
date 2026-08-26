<template>
  <div :class="classes(n('items-wrapper'))">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../_utils/global-config'

const { n, classes } = createNamespace('tabs')

export default defineComponent({
  name: createNamespace('tabs-items').name,
  setup() {
    return { classes, n }
  },
})
</script>
