<script setup lang="ts">
import { ref } from "vue";
const loading = ref(true);
</script>

<template>
  <c-skeleton
    title
    :rows="3"
    :loading="loading"
    :rows-width="['200px', '100px', '50px']"
  >
    加载的数据
  </c-skeleton>
</template>
