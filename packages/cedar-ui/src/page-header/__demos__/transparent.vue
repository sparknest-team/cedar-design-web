<template>
  <div
    :style="{
      backgroundImage: 'radial-gradient(var(--color-fill-3) 1px, rgba(0, 0, 0, 0) 1px)',
      backgroundSize: '16px 16px',
      padding: '28px',
    }"
  >
    <c-page-header title="Cedar Design" subtitle="默认无底色，可通过 style 自定义">
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
