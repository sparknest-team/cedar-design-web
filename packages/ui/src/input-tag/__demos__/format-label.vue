<script setup lang="ts">
const selected = [{ value: 'alice', label: 'Alice', department: '设计' }]
const formatLabel = (item: { label?: string; department?: string }) => `${item.label} · ${item.department}`
</script>

<template>
  <c-space direction="column" style="width: 100%" :size="12">
    <p>格式化文字 / Format selected text</p>
    <c-input-tag :default-value="['alice']" :options="selected" :format-label="formatLabel" />
    <p>自定义内容 / Customize selected content</p>
    <c-input-tag :default-value="['alice']" :options="selected">
      <template #label="{ data }"><strong>{{ data.label }}</strong> · {{ data.department }}</template>
    </c-input-tag>
  </c-space>
</template>
