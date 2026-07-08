<template>
  <div
    :style="{
      padding: '24px',
      backgroundColor: 'var(--c-color-neutral-1)',
    }"
  >
    <c-card hoverable>
      <template #title>
        <c-page-header title="列表页标题132" subtitle="subtitle描述信息">
          <template #extra> xs </template>
        </c-page-header>
      </template>
      <div>Card content</div>
    </c-card>
  </div>
</template>

<script lang="ts"></script>
