<script setup lang="ts">
import { reactive, ref } from "vue";
const model = reactive({ department: -1 as number | null | undefined });
const form = ref();
const result = ref("Not validated");
const options = [
  { value: 1, label: "Engineering" },
  { value: 2, label: "Product" },
];
async function validate() {
  const errors = await form.value.validate();
  result.value = errors ? "Required error" : "Valid";
}
</script>
<template>
  <c-space direction="column">
    <p>
      Validate the initial -1, then select a department and validate again.
      Clearing restores -1.
    </p>
    <c-form
      ref="form"
      :model="model"
      layout="vertical"
      :empty-values="[null, undefined, -1]"
    >
      <c-form-item field="department" label="Department" required>
        <c-select
          v-model="model.department"
          :options="options"
          edit-mode="direct"
          clearable
          :empty-value="-1"
        />
      </c-form-item>
    </c-form>
    <c-button @click="validate">Validate</c-button>
    <p role="status">{{ result }}</p>
    <p>
      Current model: <output>{{ String(model.department) }}</output>
    </p>
  </c-space>
</template>
