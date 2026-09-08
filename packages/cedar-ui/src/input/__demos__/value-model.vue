<template>
  <c-space direction="column">
    <c-input v-model="controlledValue" placeholder="受控值" />
    <c-input default-value="初始值" placeholder="非受控初始值" />
    <span class="value-model-demo__value">当前受控值：{{ controlledValue || '（空）' }}</span>
  </c-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const controlledValue = ref('Cedar')
</script>

<style scoped>
.value-model-demo__value {
  color: var(--color-text-2);
  font-size: 13px;
}
</style>
