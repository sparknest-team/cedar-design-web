<template>
  <c-transfer
    source-filterable
    target-filterable
    :data="data"
    :default-value="value"
    source-filter-placeholder="搜索待选项"
    target-filter-placeholder="搜索已选项"
  />
</template>

<script lang="ts" setup>
const data = Array(8)
  .fill(undefined)
  .map((_, index) => ({
    value: `option${index + 1}`,
    label: `Option ${index + 1}`,
  }))
const value = [{ value: 'option1' }, { value: 'option3' }, { value: 'option5' }]
</script>
