<template>
  <c-space wrap align="start" :size="24">
    <section>
      <h4>Time</h4>
      <c-time v-model="value" format="HH:mm:ss" style="width: 200px" />
    </section>
    <section>
      <h4>TimePicker</h4>
      <c-time-picker v-model="value" format="HH:mm:ss" />
    </section>
  </c-space>
  <p><code>modelValue: {{ value }}</code></p>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('09:30:00')
</script>
