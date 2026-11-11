<template>
  <c-transfer
    source-filterable
    target-filterable
    :data="data"
    v-model="value"
    target-draggable
    source-filter-placeholder="搜索待选项"
    target-filter-placeholder="搜索已选项"
  />
  <p role="status">当前顺序：{{ value.map(item => item.value).join(' → ') }}</p>
  <p>在已选项搜索 Option 后拖拽，隐藏的必选字段仍保留在完整列表中。</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const data = Array(8)
  .fill(undefined)
  .map((_, index) => ({
    value: `option${index + 1}`,
    label: index === 2 ? '必选字段' : `Option ${index + 1}`,
    required: index === 2,
  }))
const value = ref([{ value: 'option1' }, { value: 'option3' }, { value: 'option5' }])
</script>
