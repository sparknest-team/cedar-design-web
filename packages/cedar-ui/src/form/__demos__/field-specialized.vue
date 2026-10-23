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
  mention: "@设计 请确认",
  color: "#36b5ac",
  tags: ["Vue", "TypeScript"],
  transferred: [{ value: "dev", label: "研发" }],
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
      <c-form-item field="mention" label="提及"
        ><c-mention v-model="model.mention" :options="['研发', '设计', '运营']"
      /></c-form-item>
      <c-form-item field="color" label="颜色"
        ><c-color v-model="model.color"
      /></c-form-item>
      <c-form-item field="tags" label="标签"
        ><c-input-tag v-model="model.tags"
      /></c-form-item>
      <c-form-item field="transferred" label="穿梭选择"
        ><c-transfer v-model="model.transferred" :data="choices"
      /></c-form-item>
    </c-form>
    <ModelOutput aria-label="当前模型">{{
      JSON.stringify(model, null, 2)
    }}</ModelOutput>
  </c-space>
</template>
