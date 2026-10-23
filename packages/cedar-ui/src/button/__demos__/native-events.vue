<script setup lang="ts">
import { ref } from 'vue'
const value = ref('Editable')
const submissions = ref(0)
const event = ref('Use Tab, Enter or touch')
</script>
<template>
  <c-form @submit="submissions++" @reset="value = 'Editable'" style="display: flex; flex-wrap: wrap; gap: 12px">
    <c-input v-model="value" aria-label="Example field" placeholder="Example field" style="width: 100%; max-width: 280px" />
    <c-button html-type="submit">Submit</c-button>
    <c-button html-type="reset">Reset</c-button>
    <c-button :focusable="false">Skip Tab</c-button>
    <c-button @touchstart="event = 'touchstart'" @focus="event = 'focus'" @blur="event = 'blur'" @click="event = 'click'">Event target</c-button>
  </c-form>
  <p aria-live="polite">Submissions: {{ submissions }}; {{ event }}</p>
</template>
