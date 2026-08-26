<template>
  <c-space direction="column" fill size="lg">
    <div>
      <div class="label">背景 c-bg-*</div>
      <div class="row">
        <div
          v-for="item in bgItems"
          :key="item.cls"
          class="swatch"
          :style="item.style"
        >
          <code>{{ item.cls }}</code>
        </div>
      </div>
    </div>
    <div>
      <div class="label">文字 c-text-*</div>
      <div class="row text-row">
        <span
          v-for="item in textItems"
          :key="item.cls"
          class="text-chip"
          :style="item.style"
        >
          {{ item.cls }}
        </span>
      </div>
    </div>
    <div>
      <div class="label">边框 c-border-*</div>
      <div class="row">
        <div
          v-for="item in borderItems"
          :key="item.cls"
          class="border-chip"
          :style="item.style"
        >
          <code>{{ item.cls }}</code>
        </div>
      </div>
    </div>
  </c-space>
</template>

<script lang="ts" setup>
const bgItems = [
  {
    cls: "c-bg-body",
    style: {
      background: "var(--c-color-body)",
      color: "var(--c-color-text-1)",
    },
  },
  {
    cls: "c-bg-primary",
    style: { background: "var(--c-color-primary)", color: "#fff" },
  },
  {
    cls: "c-bg-info",
    style: { background: "var(--c-color-info)", color: "#fff" },
  },
  {
    cls: "c-bg-success",
    style: { background: "var(--c-color-success)", color: "#fff" },
  },
  {
    cls: "c-bg-warning",
    style: { background: "var(--c-color-warning)", color: "#fff" },
  },
  {
    cls: "c-bg-danger",
    style: { background: "var(--c-color-danger)", color: "#fff" },
  },
  {
    cls: "c-bg-disabled",
    style: {
      background: "var(--c-color-disabled)",
      color: "var(--c-color-text-1)",
    },
  },
];

const textItems = [
  { cls: "c-text-primary", style: { color: "var(--c-color-primary)" } },
  { cls: "c-text-info", style: { color: "var(--c-color-info)" } },
  { cls: "c-text-success", style: { color: "var(--c-color-success)" } },
  { cls: "c-text-warning", style: { color: "var(--c-color-warning)" } },
  { cls: "c-text-danger", style: { color: "var(--c-color-danger)" } },
  { cls: "c-text-disabled", style: { color: "var(--c-color-disabled)" } },
];

const borderItems = [
  { cls: "c-border-primary", style: { borderColor: "var(--c-color-primary)" } },
  { cls: "c-border-info", style: { borderColor: "var(--c-color-info)" } },
  { cls: "c-border-success", style: { borderColor: "var(--c-color-success)" } },
  { cls: "c-border-warning", style: { borderColor: "var(--c-color-warning)" } },
  { cls: "c-border-danger", style: { borderColor: "var(--c-color-danger)" } },
];
</script>

<style scoped lang="scss">
.label {
  margin-bottom: 8px;
  color: var(--c-color-text-3);
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.swatch {
  min-width: 110px;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid var(--c-color-border-2);
  font-size: 12px;
  text-align: center;
}

.text-row {
  gap: 16px;
  align-items: center;
}

.text-chip {
  font-size: 14px;
  font-weight: 500;
}

.border-chip {
  min-width: 110px;
  padding: 10px 12px;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  text-align: center;
}
</style>
