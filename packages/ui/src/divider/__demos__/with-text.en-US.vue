<script setup>

import { ref } from "vue";

const rtl = ref(false);
</script>

<template>
  <div>
    <c-checkbox v-model="rtl">RTL</c-checkbox>
    <div :dir="rtl ? 'rtl' : 'ltr'">
      <c-divider text-align="start" description="Start" />
      <c-divider description="Center" />
      <c-divider text-align="end" description="End" />
    </div>
  </div>
</template>
