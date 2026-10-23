<template>
  <c-menu :options="options">
    <c-button>选项分组</c-button>
  </c-menu>
</template>

<script setup lang="ts">
const options = [
  { type: 'group', label: '文件操作', children: [{ label: '新建', value: 'new' }, { label: '打开', value: 'open' }] },
  { type: 'group', label: '编辑操作', children: [{ label: '复制', value: 'copy' }, { label: '粘贴', value: 'paste' }] },
]
</script>
