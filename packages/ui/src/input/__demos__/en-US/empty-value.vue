<script setup lang="ts">
import { reactive } from "vue";
const model = reactive({ text: "Hello" as string | null });
</script>
<template>
  <c-space direction="column">
    <p>
      The clear icon produces null; Backspace to empty produces an empty string.
    </p>
    <c-form :model="model" layout="vertical">
      <c-form-item field="text" label="Keyword">
        <c-input
          v-model="model.text"
          edit-mode="direct"
          clearable
          :empty-value="null"
        />
      </c-form-item>
    </c-form>
    <c-button @click="model.text = 'Hello'">Restore initial value</c-button>
    <p>
      Current model: <output>{{ JSON.stringify(model.text) }}</output>
    </p>
  </c-space>
</template>
