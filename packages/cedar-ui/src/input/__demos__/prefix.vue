<template>
  <c-space direction="column">
    <c-input :style="{ width: '320px' }" placeholder="请输入">
      <template #prefix> +86 </template>
    </c-input>
    <c-input :style="{ width: '320px' }" placeholder="请输入">
      <template #suffix> RMB </template>
    </c-input>
    <c-input v-model="clearableValue" :style="{ width: '320px' }" clearable placeholder="自定义清除图标">
      <template #clear-icon="{ clear }">
        <button type="button" class="prefix-demo__clear" aria-label="清空" @click="clear">清空</button>
      </template>
    </c-input>
  </c-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clearableValue = ref('Cedar')
</script>

<style scoped>
.prefix-demo__clear {
  border: 0;
  background: transparent;
  color: var(--color-text-2);
  cursor: pointer;
  font-size: 12px;
}
</style>
