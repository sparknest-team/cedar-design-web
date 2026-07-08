<template>
  <c-time-picker format="HH:mm" :default-value="defaultValue" style="width: 130px" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      defaultValue: '09:24',
    }
  },
})
</script>
