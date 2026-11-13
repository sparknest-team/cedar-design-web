<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const topDivider = ref(false)
const bottomDivider = ref(false)
</script>

<template>
  <c-button @click="open = true">分割线 / Dividers</c-button>
  <c-dialog v-model:open="open" title="分割线 / Dividers" :top-divider="topDivider" :bottom-divider="bottomDivider">
    <c-space direction="column">
      <c-checkbox v-model="topDivider">top-divider</c-checkbox>
      <c-checkbox v-model="bottomDivider">bottom-divider</c-checkbox>
      <p>分割线默认关闭，可分别开启。 / Dividers are off by default and can be enabled independently.</p>
    </c-space>
  </c-dialog>
</template>
