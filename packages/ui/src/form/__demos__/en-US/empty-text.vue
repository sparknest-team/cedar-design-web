<script setup lang="ts">
import { reactive, ref } from "vue";
const reading = ref(true);
const emptyText = ref("-");
const model = reactive({
  name: null as string | null,
  code: null as string | null,
  nickname: null as string | null,
  quantity: 0 as number | null | undefined,
});
</script>
<template>
  <c-space direction="column">
    <p>
      Initially, reading mode shows “-” for Name, overrides for Code and
      Nickname, and the valid number 0 for Quantity.
    </p>
    <c-space wrap>
      <c-button @click="reading = !reading">Toggle reading/editing</c-button>
      <c-button @click="emptyText = 'No data'">Use “No data”</c-button>
      <c-button @click="emptyText = '-'">Use default “-”</c-button>
    </c-space>
    <c-form
      :model="model"
      layout="vertical"
      :read-pretty="reading"
      :empty-text="emptyText"
    >
      <c-form-item field="name" label="Name: inherits Form"
        ><c-input v-model="model.name"
      /></c-form-item>
      <c-form-item
        field="code"
        label="Code: FormItem override"
        empty-text="Unassigned"
        ><c-input v-model="model.code"
      /></c-form-item>
      <c-form-item
        field="nickname"
        label="Nickname: field override"
        empty-text="Unassigned"
        ><c-input v-model="model.nickname" empty-text="Anonymous"
      /></c-form-item>
      <c-form-item field="quantity" label="Quantity"
        ><c-input-number v-model="model.quantity"
      /></c-form-item>
    </c-form>
    <p>
      Current model: <output>{{ JSON.stringify(model) }}</output>
    </p>
  </c-space>
</template>
