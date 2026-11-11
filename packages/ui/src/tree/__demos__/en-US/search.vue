<template>
  <c-space direction="column">
    <c-input v-model="query" placeholder="Search nodes" clearable />
    <c-tree :data="nodes" :search-value="query" />
  </c-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')
const nodes = [
  { value: 'projects', label: 'Projects', children: [
    { value: 'design', label: 'Design review' },
    { value: 'release', label: 'Release plan' },
  ] },
  { value: 'team', label: 'Team', children: [
    { value: 'support', label: 'Customer support' },
  ] },
]
</script>
