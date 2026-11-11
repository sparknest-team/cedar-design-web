<template>
  <c-space direction="column" :size="16">
    <c-space align="center" :size="16" wrap>
      <c-space direction="column" align="center" :size="8">
        <c-avatar>{{ text }}</c-avatar>
        <span class="label">圆形 · 自适应</span>
      </c-space>
      <c-space direction="column" align="center" :size="8">
        <c-avatar shape="square">{{ text }}</c-avatar>
        <span class="label">方形 · 自适应</span>
      </c-space>
      <c-space direction="column" align="center" :size="8">
        <c-avatar :auto-fix-font-size="false">{{ text }}</c-avatar>
        <span class="label">关闭自适应</span>
      </c-space>
    </c-space>
    <c-input v-model="text" :style="{ width: '240px' }" placeholder="输入更长的文字看缩放" clearable />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('Cedar')
</script>

<style scoped>
.label {
  color: var(--c-color-text-3);
  font-size: var(--c-font-size-sm);
}
</style>
