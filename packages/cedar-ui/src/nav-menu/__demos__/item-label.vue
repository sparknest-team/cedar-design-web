<script setup lang="ts">
import { computed, ref } from "vue";
import type { NavMenuKey } from "../types";

const options = [
  { key: 0, label: "全部分类" },
  { key: "design", label: "设计" },
  { key: "development", label: "开发" },
];
const activeItem = ref<NavMenuKey | null>(null);
const automatic = ref<NavMenuKey | null>(null);
const fixed = ref<NavMenuKey | null>(null);
const manual = ref<NavMenuKey | null>(null);
const manualLabel = ref("手动标题");
const appliedValue = ref<NavMenuKey | null>(null);
const automaticLabel = computed(
  () =>
    options.find((option) => option.key === automatic.value)?.label ?? "未选择",
);
const fixedLabel = computed(
  () => options.find((option) => option.key === fixed.value)?.label ?? "未选择",
);
const selectedLabel = computed(
  () =>
    options.find((option) => option.key === manual.value)?.label ?? "未选择",
);
const pending = computed(() => manual.value !== appliedValue.value);

function applyLabel() {
  if (manual.value === null) return;
  manualLabel.value = `当前：${selectedLabel.value}`;
  appliedValue.value = manual.value;
}

function reset() {
  manual.value = appliedValue.value = null;
  manualLabel.value = "手动标题";
}
</script>

<template>
  <div class="item-label-demo">
    <c-nav-menu v-model:active-item="activeItem" mode="horizontal">
      <c-nav-menu-item
        v-model="automatic"
        name="automatic"
        label="自动标题"
        :options="options"
      />
      <c-nav-menu-item v-model="fixed" name="fixed" :options="options">
        <template #label>固定标题</template>
      </c-nav-menu-item>
      <c-nav-menu-item v-model="manual" name="manual" :options="options">
        <template #label>{{ manualLabel }}</template>
      </c-nav-menu-item>
    </c-nav-menu>

    <div class="item-label-demo__status" aria-live="polite">
      <p>
        <strong>自动标题：</strong>选择后入口直接显示“{{ automaticLabel }}”。
      </p>
      <p>
        <strong>固定标题：</strong>入口始终显示“固定标题”，当前选择“{{
          fixedLabel
        }}”。
      </p>
      <p>
        <strong>手动标题：</strong>当前选择“{{ selectedLabel }}”，入口显示“{{
          manualLabel
        }}”。
        <span v-if="pending">选择尚未应用到标题。</span>
      </p>
    </div>

    <c-space>
      <c-button :disabled="!pending || manual === null" @click="applyLabel">
        {{ pending ? `应用手动标题：${selectedLabel}` : "手动标题已同步" }}
      </c-button>
      <c-button @click="reset">重置手动标题</c-button>
    </c-space>

    <p class="item-label-demo__tip">
      当前激活入口：{{ activeItem ?? "暂无" }}。打开入口不会激活，选择叶子节点后才会统一切换高亮；各面板内部数据仍各自保留。
    </p>
  </div>
</template>

<style scoped>
.item-label-demo {
  display: grid;
  gap: 16px;
  min-height: 220px;
}

.item-label-demo__status {
  display: grid;
  gap: 8px;
}

.item-label-demo__status p,
.item-label-demo__tip {
  margin: 0;
}

.item-label-demo__tip {
  color: var(--c-color-text-3);
}
</style>
