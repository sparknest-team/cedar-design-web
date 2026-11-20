<script setup>

import { ref } from "vue";

const rtl = ref(false);
</script>

<template>
  <div>
    <c-checkbox v-model="rtl">RTL</c-checkbox>
    <div :dir="rtl ? 'rtl' : 'ltr'">
      <c-divider text-align="start" description="起点" />
      <c-divider description="居中" />
      <c-divider text-align="end" description="终点" />
    </div>
  </div>
</template>
