<script setup>
import ModelOutput from "../__demo-utils__/ModelOutput.vue";
import { ref } from "vue";
const presentation = ref("inline");
const presentations = ["inline", "click", "dblclick"].map((value) => ({
  value,
  label: value,
}));
const model = ref({
  name: "表单输入示例",
  notes: "每个字段都继承上方的展示与触发方式",
  count: 3,
  code: "123456",
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
      <c-form-item field="name" label="单行文本"
        ><c-input v-model="model.name"
      /></c-form-item>
      <c-form-item field="notes" label="多行文本"
        ><c-textarea v-model="model.notes"
      /></c-form-item>
      <c-form-item field="count" label="数量"
        ><c-input-number v-model="model.count" :min="0" :max="100"
      /></c-form-item>
      <c-form-item field="code" label="验证码"
        ><c-verification-code v-model="model.code" :length="6"
      /></c-form-item>
    </c-form>
    <ModelOutput aria-label="当前模型">{{
      JSON.stringify(model, null, 2)
    }}</ModelOutput>
  </c-space>
</template>
