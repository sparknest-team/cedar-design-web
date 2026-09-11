<template>
  <c-dropdown-menu :options="options">
    <c-button>多级菜单</c-button>
  </c-dropdown-menu>
</template>

<script setup lang="ts">
const options = [
  { label: '首页', value: 'home' },
  { label: '产品', children: [
    { label: '产品概览', value: 'overview' },
    { label: '解决方案', children: [{ label: '企业版', value: 'enterprise' }, { label: '团队版', value: 'team' }] },
  ] },
  { label: '关于我们', value: 'about' },
]
</script>
