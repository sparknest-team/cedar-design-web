<template>
  <div>
    <c-split
      :style="{
        height: '200px',
        width: '100%',
        minWidth: '500px',
        border: '1px solid var(--color-border)',
      }"
    >
      <template #first>
        <c-typography-paragraph>Left</c-typography-paragraph>
      </template>
      <template #second>
        <div>
          <c-split direction="column" :style="{ height: '200px' }">
            <template #first>
              <c-typography-paragraph>Top</c-typography-paragraph>
            </template>
            <template #second>
              <c-typography-paragraph>Bottom</c-typography-paragraph>
            </template>
          </c-split>
        </div>
      </template>
    </c-split>
  </div>
</template>

<script lang="ts" setup>
</script>
