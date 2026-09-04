<template>
  <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }">
    <c-page-header :style="{ background: 'var(--color-bg-2)' }" title="Cedar Design" subtitle="带面包屑的页头">
      <template #header>
        <c-breadcrumb>
          <c-breadcrumb-item>Home</c-breadcrumb-item>
          <c-breadcrumb-item>Channel</c-breadcrumb-item>
          <c-breadcrumb-item>News</c-breadcrumb-item>
        </c-breadcrumb>
      </template>
      <template #extra>
        <c-radio-group type="button" default-value="md">
          <c-radio value="xs">xs</c-radio>
          <c-radio value="sm">sm</c-radio>
          <c-radio value="md">md</c-radio>
        </c-radio-group>
      </template>
    </c-page-header>
  </div>
</template>
