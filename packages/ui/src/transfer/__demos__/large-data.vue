<template>
  <c-transfer
    v-model="value"
    :data="data"
    virtual-scroll
    source-filterable
    source-filter-placeholder="搜索 42,000 项"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = Array.from({ length: 42000 }, (_, index) => ({
  value: index,
  label: `Option ${index}`,
  disabled: index % 5 === 0,
}))
const value = ref(Array.from({ length: 50 }, (_, index) => ({ value: index })))
</script>
