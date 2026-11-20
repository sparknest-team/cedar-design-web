<script setup lang="ts">
import { computed, reactive, ref } from "vue";
const copy = {
  labels: {
    strategy: "Label width strategy",
    auto: "Measured labels",
    columns: "Responsive columns",
    fixed: "Fixed width",
    name: "Name",
    department: "Department",
    contact: "Contact details",
    extra: "Show extra field",
    edit: "Change the longest label",
    hint: "Switch label sizing with the same model. Responsive columns stack below 576px; fixed labels use 6rem, with an 8rem override on the contact field.",
    model: "Current model"
  }
};
const mode = ref<"auto" | "columns" | "fixed">("auto");
const showExtra = ref(true);
const customLabel = ref("");
const model = reactive({ name: "", department: "", contact: "" });

const choices = computed(() =>
  (["auto", "columns", "fixed"] as const).map((value) => ({
    label: copy.labels[value],
    value,
  })),
);
</script>
<template>
  <div class="label-width-comparison" data-config-comparison="form-label-width">
    <c-radio-group
      v-model="mode"
      :options="choices"
      aria-label="Label width strategy"
    />
    <p>Switch label sizing with the same model. Responsive columns stack below 576px; fixed labels use 6rem, with an 8rem override on the contact field.</p>
    <c-checkbox v-model="showExtra">Show extra field</c-checkbox>
    <label
      >Change the longest label<c-input v-model="customLabel" placeholder="Contact details"
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
      <c-form-item field="name" label="Name"
        ><c-input v-model="model.name"
      /></c-form-item>
      <c-form-item field="department" label="Department"
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
    <p role="status">Current model: {{ JSON.stringify(model) }}</p>
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
