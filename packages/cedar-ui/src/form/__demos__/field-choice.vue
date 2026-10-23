<script setup>
import ModelOutput from "../__demo-utils__/ModelOutput.vue";
import { ref } from "vue";
const presentation = ref("inline");
const presentations = ["inline", "click", "dblclick"].map((value) => ({
  value,
  label: value,
}));
const choices = [
  { label: "研发", value: "dev" },
  { label: "设计", value: "design" },
  { label: "运营", value: "ops" },
];
const model = ref({
  enabled: true,
  agreed: true,
  teams: ["dev", "design"],
  role: "dev",
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
      <c-form-item field="enabled" label="启用"
        ><c-switch v-model="model.enabled"
      /></c-form-item>
      <c-form-item field="agreed" label="确认状态"
        ><c-checkbox v-model="model.agreed">已阅读说明</c-checkbox></c-form-item
      >
      <c-form-item field="teams" label="协作部门"
        ><c-checkbox-group v-model="model.teams" :options="choices"
      /></c-form-item>
      <c-form-item field="role" label="所属部门"
        ><c-radio-group v-model="model.role" :options="choices"
      /></c-form-item>
    </c-form>
    <ModelOutput aria-label="当前模型">{{
      JSON.stringify(model, null, 2)
    }}</ModelOutput>
  </c-space>
</template>
