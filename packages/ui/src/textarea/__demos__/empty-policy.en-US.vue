<script setup>

import { computed, ref } from "vue";
const sentinel = ref(false);
const emptyValue = computed(() => (sentinel.value ? "CLEARED" : null));
const emptyValues = [undefined, null, "", "CLEARED"];
const direct = ref("Direct draft");
const deferred = ref("Deferred draft");
function reset() {
  direct.value = "Direct draft";
  deferred.value = "Deferred draft";
}
</script>
<template>
  <c-space direction="column">
    <c-space>
      <c-button @click="sentinel = !sentinel">Toggle empty value</c-button>
      <c-button @click="reset">Reset values</c-button>
    </c-space>
    <p role="status">empty-value: {{ JSON.stringify(emptyValue) }}</p>
    <c-textarea
      v-model="direct"
      edit-mode="direct"
      :empty-value="emptyValue"
      :empty-values="emptyValues"
      clearable
      aria-label="Direct text"
      placeholder="Direct"
    />
    <c-textarea
      v-model="deferred"
      edit-mode="click"
      :empty-value="emptyValue"
      :empty-values="emptyValues"
      clearable
      aria-label="Deferred text"
      placeholder="Deferred"
    />
    <p>Change the policy before clearing; deferred changes publish on confirm.</p>
    <pre class="empty-policy-model">{{
      JSON.stringify({ direct, deferred })
    }}</pre>
  </c-space>
</template>
