<template>
  <div
    :style="{
      padding: '24px',
      backgroundColor: 'var(--c-color-neutral-1)',
    }"
  >
    <c-space direction="column">
      <c-card title="Card Title" subtitle="Card Sub Title" size="md">大 Card content </c-card>
      <c-card title="Card Title" subtitle="Card Sub Title" size="sm">小 Card content </c-card>
    </c-space>
  </div>
</template>
