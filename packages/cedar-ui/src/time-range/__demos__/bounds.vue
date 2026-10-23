<script setup>
import { ref } from "vue";

const value = ref(["10:30:38", "10:31:02"]);
const narrow = ref(false);
</script>

<template>
  <c-space direction="column" :size="12" style="width: 100%">
    <p>
      包含边界：10:30:38–10:31:02。收紧边界不会改写已有模型，但越界值无法确认。
    </p>
    <c-checkbox v-model="narrow"> 将下限调整为 10:30:40</c-checkbox>
    <c-time-range
      v-model="value"
      format="HH:mm:ss"
      :min="narrow ? '10:30:40' : '10:30:38'"
      max="10:31:02"
    />
    <c-time-range-picker
      v-model="value"
      format="HH:mm:ss"
      :min="narrow ? '10:30:40' : '10:30:38'"
      max="10:31:02"
    />
    <span>{{ value }}</span>
  </c-space>
</template>
