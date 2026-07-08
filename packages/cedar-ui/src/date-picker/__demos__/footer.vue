<template>
  <c-date-picker style="width: 200px; margin-bottom: 20px">
    <template #extra>Extra footer</template>
  </c-date-picker>
  <br />
  <c-range-picker showTime style="width: 360px">
    <template #extra>Extra footer</template>
  </c-range-picker>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  })
</script>
