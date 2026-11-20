<script setup lang="ts">

import { ref } from "vue";

const wrap = ref(true);
const direction = ref<"row" | "column">("row");
const items = ref(["A", "B", "C"]);
</script>
<template>
  <c-space wrap :size="8">
    <c-button data-space-toggle-wrap @click="wrap = !wrap">Wrap</c-button>
    <c-button
      data-space-toggle-direction
      @click="direction = direction === 'row' ? 'column' : 'row'"
      >Direction</c-button
    >
    <c-button data-space-reorder @click="items = [...items].reverse()">Reorder</c-button>
  </c-space>
  <p>Drafts stay with their items.</p>
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
            placeholder="Draft"
          />
        </label>
      </template>
      <template #split><span aria-hidden="true">/</span></template>
    </c-space>
  </div>
  <p>Separators stay with the preceding item.</p>
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
