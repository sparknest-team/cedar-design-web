<template>
  <c-space direction="column" fill size="md">
    <div class="hint">
      缩小浏览器窗口可观察当前命中的断点；类名形如
      <code>sm:c-bg-info</code>。
    </div>
    <div class="box">
      <div class="label">当前 ≥</div>
      <strong class="value">{{ active }}</strong>
    </div>
    <c-table :columns="columns" :data="rows" :pagination="false" />
  </c-space>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

const width = ref(typeof window !== "undefined" ? window.innerWidth : 0);

const onResize = () => {
  width.value = window.innerWidth;
};

onMounted(() => {
  width.value = window.innerWidth;
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

const active = computed(() => {
  const w = width.value;
  if (w >= 1920) return "xl (1920px)";
  if (w >= 1200) return "lg (1200px)";
  if (w >= 992) return "md (992px)";
  if (w >= 768) return "sm (768px)";
  return "base (< sm)";
});

const columns = [
  { title: "前缀", dataIndex: "prefix" },
  { title: "最小宽度", dataIndex: "min" },
  { title: "示例类", dataIndex: "cls" },
];

const rows = [
  { prefix: "sm:", min: "768px", cls: "sm:c-bg-info" },
  { prefix: "md:", min: "992px", cls: "md:c-bg-warning" },
  { prefix: "lg:", min: "1200px", cls: "lg:c-bg-danger" },
  { prefix: "xl:", min: "1920px", cls: "xl:c-bg-success" },
];
</script>

<style scoped lang="scss">
.hint {
  font-size: 13px;
  color: var(--c-color-text-3);
}

.box {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 4px;
  background: var(--c-color-primary);
  color: #fff;
}

.label {
  opacity: 0.85;
  font-size: 13px;
}

.value {
  font-size: 18px;
}
</style>
