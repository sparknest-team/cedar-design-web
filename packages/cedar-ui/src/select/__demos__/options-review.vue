<script setup lang="ts">
import { ref, watch } from 'vue'
const multiple = ref(true)
const filterable = ref(true)
const disabled = ref(false)
const value = ref<string | string[] | undefined>([])
watch(multiple, (next) => { value.value = next ? [] : undefined })
</script>
<template>
  <c-space direction="column">
    <c-space>
      <c-checkbox v-model="multiple">多选</c-checkbox>
      <c-checkbox v-model="filterable">允许搜索</c-checkbox>
      <c-checkbox v-model="disabled">禁用研发选项</c-checkbox>
      <c-button @click="value = multiple ? [] : undefined">清空选择</c-button>
    </c-space>
    <c-select v-model="value" :multiple="multiple" :filterable="filterable" clearable placeholder="子组件选项审查" :style="{ width: '280px' }">
      <c-optgroup label="研发组">
        <template #label><c-tag>研发组插槽</c-tag></template>
        <c-option value="dev" label="研发" :disabled="disabled" :tag-props="{ size: 'sm' }" :index="0">
          <template #default="{ selected }"><c-tag>{{ selected ? '已选研发' : '选择研发' }}</c-tag></template>
          <template #icon><c-tag>图标</c-tag></template>
          <template #suffix><c-tag>后缀</c-tag></template>
        </c-option>
      </c-optgroup>
    </c-select>
    <p role="status">当前值：{{ JSON.stringify(value) }}</p>
  </c-space>
</template>
