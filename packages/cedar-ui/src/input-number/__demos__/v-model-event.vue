<template>
  <c-input-number
    v-model="value"
    :style="{ width: '320px' }"
    placeholder="Please Enter"
    class="input-demo"
    :min="10"
    :max="100"
    model-event="input"
  />
  <div>value: {{ value }}</div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const value = ref(15);
    return {
      value,
    };
  },
};
</script>
