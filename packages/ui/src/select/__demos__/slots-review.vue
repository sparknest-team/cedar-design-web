<script setup lang="ts">
import { ref } from 'vue'
const value = ref<string[]>(['dev'])
const selectedSlot = ref(false)
const triggerSlot = ref(false)
const clears = ref(0)
const options = [{ value: 'dev', label: '研发' }, { value: 'design', label: '设计' }, { value: 'ops', label: '运营', disabled: true }]
function onClear(clear: (event: MouseEvent) => void, event: MouseEvent) {
  clears.value++
  clear(event)
}
</script>
<template>
  <c-space direction="column">
    <c-space>
      <c-checkbox v-model="selectedSlot">自定义已选区</c-checkbox>
      <c-checkbox v-model="triggerSlot">自定义触发器</c-checkbox>
    </c-space>
    <c-select v-model="value" :options="options" multiple filterable clearable placeholder="复杂插槽审查" :style="{ width: '320px' }">
      <template #prefix><c-tag>前缀</c-tag></template>
      <template #suffix><c-tag>后缀</c-tag></template>
      <template #header><c-tag>菜单页头</c-tag></template>
      <template #footer><c-tag>菜单页脚</c-tag></template>
      <template #option="{ data }"><c-tag>选项：{{ data.label }}</c-tag></template>
      <template #label="{ data }"><c-tag>已选：{{ data.label }}</c-tag></template>
      <template #clear-icon="{ clear }"><c-button size="xs" @mousedown.prevent @click.stop="onClear(clear, $event)">插槽清空</c-button></template>
      <template #arrow-icon><c-tag>展开</c-tag></template>
      <template #search-icon><c-tag>搜索</c-tag></template>
      <template #loading-icon><c-tag>加载</c-tag></template>
      <template #empty><c-tag>无匹配选项</c-tag></template>
      <template #read="{ text }"><c-tag>阅读：{{ text }}</c-tag></template>
      <template v-if="selectedSlot" #selected><c-tag>已选区域：{{ value.join(' / ') }}</c-tag></template>
      <template v-if="triggerSlot" #trigger><c-button>插槽打开选择器</c-button></template>
    </c-select>
    <p role="status">当前值：{{ JSON.stringify(value) }}；插槽清空：{{ clears }}</p>
  </c-space>
</template>
