<script setup lang="ts">
import { reactive, ref } from "vue";
const model = reactive({ status: "" as string | null });
const multiple = ref(["active"]);
const optional = ref<string | undefined>("active");
const options = [
  { value: "", label: "All" },
  { value: "active", label: "Active" },
];
</script>
<template>
  <c-space direction="column">
    <p>
      All uses an empty string as a valid option value. Clearing produces null.
    </p>
    <c-form :model="model" layout="vertical">
      <c-form-item field="status" label="Status">
        <c-select
          v-model="model.status"
          :options="options"
          edit-mode="direct"
          clearable
          :empty-values="[null, undefined]"
          :empty-value="null"
        />
      </c-form-item>
    </c-form>
    <c-button @click="model.status = ''">Choose All</c-button>
    <p>
      Current model: <output>{{ JSON.stringify(model.status) }}</output>
    </p>
    <c-form layout="vertical">
      <c-form-item label="Multiple: clear to []">
        <c-select
          v-model="multiple"
          :options="options"
          edit-mode="direct"
          multiple
          clearable
          :empty-value="() => []"
        />
        <output>{{ JSON.stringify(multiple) }}</output>
      </c-form-item>
      <c-form-item label="Single: clear to undefined">
        <c-select
          v-model="optional"
          :options="options"
          edit-mode="direct"
          clearable
          :empty-value="() => undefined"
        />
        <output>{{ String(optional) }}</output>
      </c-form-item>
    </c-form>
  </c-space>
</template>
