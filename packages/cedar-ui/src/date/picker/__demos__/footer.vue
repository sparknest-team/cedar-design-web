<template>
  <c-date-picker style="margin-bottom: 20px">
    <template #extra>Extra footer</template>
  </c-date-picker>
  <br />
  <c-date-range-picker showTime>
    <template #extra>Extra footer</template>
  </c-date-range-picker>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  })
</script>
