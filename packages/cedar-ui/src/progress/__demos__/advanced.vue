<script setup>
import { ref } from "vue";

const gradient = ref(false);
</script>
<template>
  <c-space direction="column" size="16px">
    <c-switch v-model="gradient" aria-label="Gradient" />
    <c-progress
      :percent="65"
      :color="gradient ? { '0%': '#722ed1', '100%': '#0fc6c2' } : '#722ed1'"
      buffer-color="#eee5ff"
    />
    <c-space wrap size="24px">
      <c-progress
        mode="circle"
        :percent="65"
        :rotate="90"
        :color="gradient ? { '0%': '#722ed1', '100%': '#0fc6c2' } : '#722ed1'"
      />
      <c-progress mode="circle" :percent="65" :track="false"
        ><template #text="{ percent }"
          >{{ percent }} / 100</template
        ></c-progress
      >
    </c-space>
  </c-space>
</template>
