<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
const options = ['Cedar', 'Maple']
</script>
<template>
  <c-space direction="column" size="md">
    <c-auto-complete v-for="variant in (['filled', 'outline', 'standard'] as const)" :key="variant"
      v-model="value" :options="options" :variant="variant" :placeholder="variant" hint clearable />
    <c-auto-complete v-model="value" :options="options" hint placeholder="自定义颜色"
      focus-color="#6750a4" text-color="#386a20" enterkeyhint="search">
      <template #prefix>@</template><template #suffix>.com</template>
    </c-auto-complete>
  </c-space>
</template>
