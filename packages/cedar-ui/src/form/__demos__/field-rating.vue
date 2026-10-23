<script setup>
import ModelOutput from "../__demo-utils__/ModelOutput.vue";
import { ref } from "vue";
const presentation = ref("inline");
const presentations = ["inline", "click", "dblclick"].map((value) => ({
  value,
  label: value,
}));
const model = ref({
  progress: 40,
  score: 4,
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
      <c-form-item field="progress" label="进度"
        ><c-slider v-model="model.progress"
      /></c-form-item>
      <c-form-item field="score" label="评分"
        ><c-rate v-model="model.score"
      /></c-form-item>
    </c-form>
    <ModelOutput aria-label="当前模型">{{
      JSON.stringify(model, null, 2)
    }}</ModelOutput>
  </c-space>
</template>
