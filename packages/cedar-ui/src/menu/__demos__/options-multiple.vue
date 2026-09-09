<template>
  <c-menu v-model="selected" :options="options" multiple>
    <c-button>选择菜单项</c-button>
  </c-menu>
  <p>选中值：{{ selected }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const selected = ref<string[]>([])
const options = [
  { label: '项目', value: 'project', children: [
    { label: '文档', value: 'docs' },
    { label: '设置', value: 'settings' },
    { label: '归档', value: 'archive', disabled: true },
  ] },
  { label: '帮助', value: 'help' },
]
</script>
