<script setup lang="ts">
import { reactive, ref } from "vue";
import { useDemoLocale } from "../../__demos__/locale";
const copy = useDemoLocale("section");
const model = reactive({ sop: "", safety: "", points: "", skill: "L3" });
const feedback = ref<"applied" | "cleared" | "">("");
function applyTemplate() {
  Object.assign(model, {
    sop: copy.value.templateSop,
    safety: copy.value.templateSafety,
    points: copy.value.templatePoints,
  });
  feedback.value = "applied";
}
function clearSection() {
  Object.assign(model, { sop: "", safety: "", points: "" });
  feedback.value = "cleared";
}
</script>
<template>
  <div data-form-section-demo="actions">
    <c-form
      :model="model"
      layout="horizontal"
      label-col-flex="7rem"
      edit-mode="direct"
    >
      <c-form-section
        :title="copy.text.section"
        :description="copy.actionsDescription"
        show-end-divider
      >
        <template #extra>
          <c-space size="sm" wrap>
            <c-button variant="text" size="sm" @click="applyTemplate">{{
              copy.applyTemplate
            }}</c-button>
            <c-button variant="text" size="sm" @click="clearSection">{{
              copy.clearSection
            }}</c-button>
          </c-space>
        </template>
        <c-form-item field="sop" :label="copy.text.onsite"
          ><c-input v-model="model.sop"
        /></c-form-item>
        <c-form-item field="safety" :label="copy.text.safety"
          ><c-textarea v-model="model.safety" :max-length="200" show-word-limit
        /></c-form-item>
        <c-form-item field="points" :label="copy.text.points"
          ><c-textarea v-model="model.points" :max-length="200" show-word-limit
        /></c-form-item>
      </c-form-section>
      <c-form-item field="skill" :label="copy.text.skill"
        ><c-input v-model="model.skill"
      /></c-form-item>
    </c-form>
    <p v-if="feedback" role="status">{{ copy[feedback] }}</p>
  </div>
</template>
