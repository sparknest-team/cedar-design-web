<script setup lang="ts">
import { ref } from "vue";
const animation = ref(true);
</script>

<template>
  <c-switch v-model="animation" />
  <c-skeleton title avatar :animation="animation">加载的数据</c-skeleton>
</template>
