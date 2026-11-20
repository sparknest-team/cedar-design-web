<script setup lang="ts">

import { ref } from "vue";

const open = ref(false);
const topDivider = ref(false);
const bottomDivider = ref(false);
</script>

<template>
  <c-button @click="open = true">分割线</c-button>
  <c-drawer
    v-model:open="open"
    title="分割线"
    :top-divider="topDivider"
    :bottom-divider="bottomDivider"
  >
    <c-space direction="column">
      <c-checkbox v-model="topDivider">top-divider</c-checkbox>
      <c-checkbox v-model="bottomDivider">bottom-divider</c-checkbox>
      <p>分割线默认关闭，可分别开启。</p>
    </c-space>
  </c-drawer>
</template>
