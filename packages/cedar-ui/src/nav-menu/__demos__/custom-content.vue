<template>
  <c-nav-menu :options="options">
    <template #label="{ option, selected }"><strong :style="{ fontWeight: selected ? 700 : 400 }">{{ option.label }}</strong></template>
    <template #extra="{ option }"><c-tag v-if="option.key === 'inbox'">3</c-tag></template>
  </c-nav-menu>
</template>
<script setup lang="ts">
import { h } from 'vue'
import type { NavMenuOption } from '..'
const options: NavMenuOption[] = [
  { key: 'workspace', type: 'group', label: '工作空间', children: [
    { key: 'inbox', label: '收件箱' }, { key: 'docs', label: '文档', icon: h('span', '文') },
  ] },
  { type: 'divider' }, { key: 'settings', label: '设置' },
]
</script>
