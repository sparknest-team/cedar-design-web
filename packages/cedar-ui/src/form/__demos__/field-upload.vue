<script setup>
import ModelOutput from "../__demo-utils__/ModelOutput.vue";
import { ref } from "vue";
const editMode = ref("direct");
const presentations = ["direct", "click", "dblclick"].map((value) => ({
  value,
  label: value,
}));
const model = ref({
  attachments: [],
});
</script>

<template>
  <c-space direction="column" align="stretch" :size="16">
    <c-form-item layout="vertical" size="sm" label="字段展示方式">
      <c-radio-group
        v-model="editMode"
        aria-label="字段展示方式"
        :options="presentations"
        variant="button"
        size="sm"
      />
    </c-form-item>
    <c-form :model="model" :edit-mode="editMode">
      <c-form-item field="attachments" label="附件"
        ><c-upload v-model="model.attachments" :auto-upload="false"
      /></c-form-item>
    </c-form>
    <ModelOutput aria-label="当前模型">{{
      JSON.stringify(model, null, 2)
    }}</ModelOutput>
  </c-space>
</template>
