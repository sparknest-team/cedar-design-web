<script setup>
import ModelOutput from "../__demo-utils__/ModelOutput.vue";
import { ref } from "vue";
const presentation = ref("inline");
const presentations = ["inline", "click", "dblclick"].map((value) => ({
  value,
  label: value,
}));
const model = ref({
  datetime: "2026-10-20 09:30:00",
  dateTimes: ["2026-10-20 09:30:00", "2026-10-22 18:00:00"],
  day: "2026-10-19",
  days: ["2026-10-19", "2026-10-22"],
});
</script>

<template>
  <c-space direction="column" :size="16">
    <c-select
      v-model="presentation"
      :options="presentations"
      :clearable="false"
      aria-label="字段展示方式"
    />
    <c-form :model="model" :presentation="presentation">
      <c-form-item field="day" label="日期"
        ><c-date v-model="model.day" value-format="YYYY-MM-DD"
      /></c-form-item>
      <c-form-item field="days" label="日期范围"
        ><c-date-range v-model="model.days" value-format="YYYY-MM-DD"
      /></c-form-item>
      <c-form-item field="datetime" label="日期时间"
        ><c-date v-model="model.datetime" show-time
      /></c-form-item>
      <c-form-item field="dateTimes" label="日期时间范围"
        ><c-date-range v-model="model.dateTimes" show-time
      /></c-form-item>
    </c-form>
    <ModelOutput aria-label="当前模型">{{
      JSON.stringify(model, null, 2)
    }}</ModelOutput>
  </c-space>
</template>
