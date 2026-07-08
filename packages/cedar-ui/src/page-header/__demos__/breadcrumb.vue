<template>
  <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }">
    <c-breadcrumb>
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item>Channel</c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
    </c-breadcrumb>
    <c-page-header :style="{ background: 'var(--color-bg-2)' }" title="ArcoDesign" subtitle="ArcoDesign Vue 2.0">
      <template #prefix>
        <c-button type="text" shape="round" status="normal">
          <template #icon><icon-left /></template>
        </c-button>
      </template>
      <template #extra>
        <c-radio-group type="button" default-value="lg">
          <c-radio value="xs">xs</c-radio>
          <c-radio value="sm">sm</c-radio>
          <c-radio value="md">md</c-radio>
        </c-radio-group>
      </template>
    </c-page-header>
  </div>
</template>

<script lang="ts" setup>
</script>
