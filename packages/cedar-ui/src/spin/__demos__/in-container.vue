<template>
  <c-spin :loading="loading" tip="This may take a while...">
    <c-card title="Arco Card">
      ByteDance's core product, Toutiao ('Headlines'), is a content platform in China and around the world. Toutiao
      started out as a news recommendation engine and gradually evolved into a platform delivering content in various
      formats.
    </c-card>
  </c-spin>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const loading = ref(true)
</script>
