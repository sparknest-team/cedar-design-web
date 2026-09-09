<template>
  <c-button @click="collapsed = !collapsed">切换折叠</c-button>
  <c-nav-menu :options="options" :collapsed="collapsed" default-value="cloud" style="width: 240px" />
</template>
<script setup lang="ts">
import { options } from './data'
import { ref } from 'vue'
const collapsed = ref(false)
</script>
