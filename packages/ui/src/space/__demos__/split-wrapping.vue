<script setup lang="ts">

import { ref } from "vue";

const wrap = ref(true);
const direction = ref<"row" | "column">("row");
const items = ref(["A", "B", "C"]);
</script>
<template>
  <c-space wrap :size="8">
    <c-button data-space-toggle-wrap @click="wrap = !wrap">换行</c-button>
    <c-button
      data-space-toggle-direction
      @click="direction = direction === 'row' ? 'column' : 'row'"
      >方向</c-button
    >
    <c-button data-space-reorder @click="items = [...items].reverse()">重排</c-button>
  </c-space>
  <p>输入草稿后切换布局或重排，文字仍跟随对应项。</p>
  <div style="max-width: 100%; overflow: auto">
    <c-space
      data-space-split-demo
      :size="12"
      :wrap="wrap"
      :direction="direction"
      style="width: 260px; max-width: 100%"
    >
      <template v-for="item in items" :key="item">
        <label class="space-split-field">
          <span>Item {{ item }}</span>
          <c-input
            edit-mode="direct"
            :aria-label="'Draft ' + item"
            placeholder="草稿"
          />
        </label>
      </template>
      <template #split><span aria-hidden="true">/</span></template>
    </c-space>
  </div>
  <p>分隔符跟随前项，允许位于行尾。</p>
</template>
<style scoped>
.space-split-field {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  width: 110px;
}
.space-split-field :deep(input) {
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
}
</style>
