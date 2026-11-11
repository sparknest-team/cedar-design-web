<script setup lang="ts">
import { ref } from "vue";
import ModelOutput from "../__demo-utils__/ModelOutput.vue";
const model = ref<{
  days: [string, string];
  months: [string, string];
  years: [string, string];
}>({
  days: ["2026-12-29", "2027-01-03"],
  months: ["2026-11", "2027-02"],
  years: ["2098", "2102"],
});
const disabledDay = (date: Date) =>
  date.getFullYear() === 2027 && date.getMonth() === 0 && date.getDate() === 1;
const disabledMonth = (date: Date) =>
  date.getFullYear() === 2026 && date.getMonth() === 11;
const disabledYear = (date: Date) => date.getFullYear() === 2100;
</script>
<template>
  <c-space direction="column" :size="16">
    <c-form :model="model">
      <c-form-item field="days" label="跨月日期"
        ><c-date-range
          v-model="model.days"
          value-format="YYYY-MM-DD"
          :disabled-date="disabledDay"
      /></c-form-item>
      <c-form-item field="months" label="跨年月份"
        ><c-date-range
          v-model="model.months"
          type="month"
          value-format="YYYY-MM"
          :disabled-date="disabledMonth"
      /></c-form-item>
      <c-form-item field="years" label="跨页年份"
        ><c-date-range
          v-model="model.years"
          type="year"
          value-format="YYYY"
          :disabled-date="disabledYear"
      /></c-form-item>
    </c-form>
    <ModelOutput>{{ JSON.stringify(model, null, 2) }}</ModelOutput>
  </c-space>
</template>
