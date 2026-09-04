<template>
  <c-button style="margin-bottom: 8px" @click="loading = !loading">
    {{ loading ? "关闭" : "打开" }}
  </c-button>
  <c-loading tip="LOADING" :loading="loading">
    <c-card
      title="介绍"
      description="Cedar 是一个基于 Vue 3 的企业级桌面端组件库。"
    />
  </c-loading>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const loading = ref(false);
</script>
