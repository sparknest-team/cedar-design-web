<template>
  <c-calendar v-model="value">
    <template #default="{ year, month, date }">
      <div v-if="items[key(year, month, date)]" class="cell-items">
        <span
          v-for="item in items[key(year, month, date)]"
          :key="item.label"
          class="cell-item"
          :style="{ '--item-color': item.color }"
          >{{ item.label }}</span
        >
      </div>
    </template>
  </c-calendar>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref(new Date());
const today = new Date();
const key = (year: number, month: number, date: number) =>
  `${year}-${month}-${date}`;
const relativeKey = (offset: number) => {
  const date = new Date(today);
  date.setDate(date.getDate() + offset);
  return key(date.getFullYear(), date.getMonth() + 1, date.getDate());
};
const items: Record<string, Array<{ label: string; color: string }>> = {
  [relativeKey(0)]: [
    { label: "产品评审", color: "rgb(var(--c-primary-6))" },
    { label: "版本发布", color: "rgb(var(--c-success-6))" },
  ],
  [relativeKey(2)]: [{ label: "客户回访", color: "rgb(var(--c-warning-6))" }],
  [relativeKey(5)]: [{ label: "团队周会", color: "rgb(var(--c-purple-6))" }],
};
</script>

<style scoped>
.cell-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
}
.cell-item {
  overflow: hidden;
  color: var(--c-color-text-2);
  font-size: 12px;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cell-item::before {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 6px;
  background: var(--item-color);
  border-radius: 50%;
  content: "";
}
</style>
