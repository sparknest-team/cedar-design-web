<script setup lang="ts">
import { ref } from "vue";
const ripple = ref(true);
const elevation = ref(2);
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <c-checkbox v-model="ripple">Ripple</c-checkbox>
      <label
        >Elevation<c-input-number
          v-model="elevation"
          :min="0"
          :max="24"
          aria-label="Button elevation"
      /></label>
    </c-space>
    <c-button :ripple="ripple" :elevation="elevation"
      >Click to compare feedback</c-button
    >
  </c-space>
</template>
