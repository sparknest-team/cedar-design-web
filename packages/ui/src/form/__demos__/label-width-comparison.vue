<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
import { computed, reactive, ref } from "vue";
const copy = useDemoLocale("labelWidthComparison");
const mode = ref<"auto" | "columns" | "fixed">("auto");
const showExtra = ref(true);
const customLabel = ref("");
const model = reactive({ name: "", department: "", contact: "" });

const choices = computed(() =>
  (["auto", "columns", "fixed"] as const).map((value) => ({
    label: copy.value.labels[value],
    value,
  })),
);
</script>
<template>
  <div class="label-width-comparison" data-config-comparison="form-label-width">
    <c-radio-group
      v-model="mode"
      :options="choices"
      :aria-label="copy.labels.strategy"
    />
    <p>{{ copy.labels.hint }}</p>
    <c-checkbox v-model="showExtra">{{ copy.labels.extra }}</c-checkbox>
    <label
      >{{ copy.labels.edit
      }}<c-input v-model="customLabel" :placeholder="copy.labels.contact"
    /></label>
    <c-form
      :model="model"
      layout="horizontal"
      label-align="left"
      :auto-label-width="mode === 'auto'"
      :label-col-flex="mode === 'fixed' ? '6rem' : undefined"
      :label-col-props="
        mode === 'columns' ? { span: 6, xs: 24, sm: 6 } : undefined
      "
      :wrapper-col-props="
        mode === 'columns' ? { span: 18, xs: 24, sm: 18 } : undefined
      "
    >
      <c-form-item field="name" :label="copy.labels.name"
        ><c-input v-model="model.name"
      /></c-form-item>
      <c-form-item field="department" :label="copy.labels.department"
        ><c-input v-model="model.department"
      /></c-form-item>
      <c-form-item
        v-if="showExtra"
        field="contact"
        :label="customLabel || copy.labels.contact"
        :label-col-flex="mode === 'fixed' ? '8rem' : undefined"
        ><c-input v-model="model.contact"
      /></c-form-item>
    </c-form>
    <p role="status">{{ copy.labels.model }}: {{ JSON.stringify(model) }}</p>
  </div>
</template>
<style scoped>
.label-width-comparison {
  display: grid;
  gap: 12px;
  min-width: 0;
  max-width: 100%;
}
p {
  margin: 0;
  overflow-wrap: anywhere;
}
</style>
