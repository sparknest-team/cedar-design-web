<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
const content = ref(1)
</script>

<template>
  <c-space direction="column">
    <c-space wrap
      ><c-switch v-model="show" aria-label="Show badge" /><c-button @click="content++">Add</c-button
      ><c-button @click="content = Math.max(0, content - 1)">Subtract</c-button></c-space
    >
    <c-badge :content="0" :show="show" show-zero description="show-zero true" />
    <c-badge :content="0" :show="show" :show-zero="false" description="show-zero false" />
    <c-badge :content="content" :show="show" description="Messages" />
    <c-badge :content="content" :show="show" dot description="Activity" />
  </c-space>
</template>
