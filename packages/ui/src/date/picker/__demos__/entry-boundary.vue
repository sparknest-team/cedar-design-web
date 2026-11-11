<script setup lang="ts">
import { ref } from "vue";
import type { DateSelection } from "@cedar-design/ui-vue";
const limited = ref(true);
const fieldValue = ref<DateSelection>("2025-02-12");
const panelValue = ref<DateSelection>("2025-02-12");
const week = ref<0 | 1 | 6>(1);
</script>

<template>
  <div class="entry-demo">
    <p>仅允许选择 2025 年 2 月；移除限制不会改变已有选中值。</p>
    <c-button @click="limited = !limited">{{
      limited ? "移除日期限制" : "恢复日期限制"
    }}</c-button>
    <c-space wrap>
      <c-button @click="week = 0">周日起始</c-button>
      <c-button @click="week = 1">周一起始</c-button>
      <c-button @click="week = 6">周六起始</c-button>
    </c-space>
    <div>
      <p>字段：管理输入与浮层；面板参数放在 date-picker-props。</p>
      <c-date
        :min="limited ? '2025-02-01' : undefined"
        :max="limited ? '2025-02-28' : undefined"
        v-model="fieldValue"
        :date-picker-props="{ dayStartOfWeek: week }"
        placeholder="选择日期"
      />
    </div>
    <div>
      <p>纯面板：直接嵌入页面，不使用 open / popup-container。</p>
      <c-date-picker
        :min="limited ? '2025-02-01' : undefined"
        :max="limited ? '2025-02-28' : undefined"
        v-model="panelValue"
        :day-start-of-week="week"
        :disable-confirm="false"
      />
      <p>已提交：{{ panelValue }}</p>
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
