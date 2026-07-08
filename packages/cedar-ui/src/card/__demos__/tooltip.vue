<template>
  <div
    :style="{
      padding: '24px',
      backgroundColor: 'var(--c-color-neutral-1)',
    }"
    class="flex justify-space-between"
  >
    <c-card :style="{ width: '270px' }">
      <template #title>
        <c-typography-text :ellipsis="{ rows: 2, showTooltip: true }">
          title title title title title title title
        </c-typography-text>
      </template>
      Card content
    </c-card>
    <c-card :style="{ width: '270px' }">
      <template #title>
        <c-typography-text :ellipsis="{ rows: 2, showTooltip: true }">
          title title title title title title title
        </c-typography-text>
      </template>
      <template #description>
        <c-typography-text :ellipsis="{ rows: 2, showTooltip: true }">
          description description description description
        </c-typography-text>
      </template>
      Card content
    </c-card>
  </div>
</template>

<script lang="ts" setup></script>
