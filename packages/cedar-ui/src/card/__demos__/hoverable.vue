<template>
  <div
    :style="{
      padding: '24px',
      backgroundColor: 'var(--c-color-neutral-1)',
    }"
  >
    <c-card hoverable>
      Card content
      <br />
      Card content
    </c-card>
    <br />
    <c-card class="card-demo" hoverable>
      <template #title>
        <c-typography-text :ellipsis="{ rows: 2, showTooltip: true }">
          title title title title title title title
        </c-typography-text>
      </template>
      Card content
      <br />
      Card content
    </c-card>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.card-demo {
  width: 360px;
  transition-property: all;
}

.card-demo:hover {
  transform: translateY(-4px);
}
</style>
