<template>
  <c-menu :options="options">
    <c-button>自定义选项内容</c-button>
  </c-menu>
</template>

<script setup lang="ts">
import { h } from 'vue'

const icon = (text: string) => h('span', { 'aria-hidden': 'true' }, text)
const options = [
  { label: '编辑', value: 'edit', icon: icon('✎'), extra: '⌘ E' },
  { label: ({ active }: { active: boolean }) => h('strong', active ? '已复制' : '复制'), value: 'copy', icon: icon('⧉'), extra: '⌘ C' },
  { label: '删除', value: 'delete', icon: icon('⌫'), extra: '⌫', disabled: true },
]
</script>
