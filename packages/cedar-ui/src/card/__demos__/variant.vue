<template>
  <div
    :style="{
      padding: '24px',
      backgroundColor: 'var(--c-color-neutral-1)',
    }"
  >
    <c-select v-model="variant">
      <c-option value="default">Default</c-option>
      <c-option value="outlined">Outlined</c-option>
      <c-option value="tonal">Tonal</c-option>
    </c-select>
    <div
      :style="{
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        padding: '40px',
        backgroundColor: 'var(--color-fill-1)',
      }"
    >
      <c-card :title="variant" :variant="variant" :style="{ width: '360px' }">
        <template #title-action>
          <c-link>More</c-link>
        </template>
        Card content
        <br />
        Card content
      </c-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const variant = ref('outlined')
</script>
