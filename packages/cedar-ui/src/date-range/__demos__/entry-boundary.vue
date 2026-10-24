<script setup lang="ts">
import { ref } from "vue";
import type { DateValue } from "@cedar-design/ui";
const limited = ref(true);
const blockEnd20 = ref(false);
const disabledEnd = (date: Date, side: "start" | "end") =>
  side === "end" && blockEnd20.value && date.getDate() === 20;
const fieldValue = ref<DateValue[]>(["2025-02-12", "2025-02-14"]);
const panelValue = ref<DateValue[]>(["2025-02-12", "2025-02-14"]);
</script>

<template>
  <div class="entry-demo">
    <p>仅允许选择 2025 年 2 月；移除限制不会改变已有选中值。</p>
    <c-button @click="limited = !limited">{{
      limited ? "移除日期限制" : "恢复日期限制"
    }}</c-button>
    <div>
      <p>范围字段：管理输入、浮层和确认流程。</p>
      <c-date-range
        :min="limited ? '2025-02-01' : undefined"
        :max="limited ? '2025-02-28' : undefined"
        v-model="fieldValue"
        :date-range-picker-props="{ dayStartOfWeek: 1 }"
      />
    </div>
    <div>
      <p>范围面板：日历从周一开始，点击确认后才提交。</p>
      <c-checkbox v-model="blockEnd20">
        禁用20日结束（不改已提交值）</c-checkbox
      >
      <c-date-range-picker
        :min="limited ? '2025-02-01' : undefined"
        :max="limited ? '2025-02-28' : undefined"
        v-model="panelValue"
        :day-start-of-week="1"
        :disable-confirm="false"
        :disabled-date="disabledEnd"
      >
        <template #actions="{ confirm, disabled }">
          <c-button :disabled="disabled" @click="confirm"
            >提交日期范围</c-button
          >
        </template>
      </c-date-range-picker>
      <p>已提交：{{ panelValue.join(" ~ ") }}</p>
    </div>
  </div>
</template>

<style scoped>
.entry-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
