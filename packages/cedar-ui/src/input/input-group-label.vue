<template>
  <div :class="classes(n())">
    <slot />
    <div :class="classes(n('border'))"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../_utils/global-config'

export default defineComponent({
  name: 'CInputGroupLabel',
  setup() {
    const { n, classes } = createNamespace('input-group-label')
    return {
      n,
      classes,
    }
  },
})
</script>
