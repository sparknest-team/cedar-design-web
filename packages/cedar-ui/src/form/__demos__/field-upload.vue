<script setup>
import ModelOutput from "../__demo-utils__/ModelOutput.vue";
import { ref } from "vue";
const presentation = ref("inline");
const presentations = ["inline", "click", "dblclick"].map((value) => ({
  value,
  label: value,
}));
const model = ref({
  attachments: [],
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
      <c-form-item field="attachments" label="附件"
        ><c-upload v-model="model.attachments" :auto-upload="false"
      /></c-form-item>
    </c-form>
    <ModelOutput aria-label="当前模型">{{
      JSON.stringify(model, null, 2)
    }}</ModelOutput>
  </c-space>
</template>
