<template>
  <c-space direction="column" fill size="md">
    <div
      v-for="item in items"
      :key="item.className"
      class="line"
      :style="{ fontSize: item.size }"
    >
      <code class="tag">{{ item.className }}</code>
      <span>Cedar Design — {{ item.label }}</span>
    </div>
  </c-space>
</template>

<script lang="ts" setup>
const items = [
  { label: "xs / 10px", className: "c-text-xs", size: "var(--c-font-size-xs)" },
  { label: "sm / 12px", className: "c-text-sm", size: "var(--c-font-size-sm)" },
  { label: "md / 14px", className: "c-text-md", size: "var(--c-font-size-md)" },
  { label: "lg / 16px", className: "c-text-lg", size: "var(--c-font-size-lg)" },
];
</script>

<style scoped lang="scss">
.line {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
  color: var(--c-color-text-1);
}

.tag {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--c-color-fill-2);
  color: var(--c-color-text-2);
}
</style>
