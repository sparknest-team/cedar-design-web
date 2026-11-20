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
      <c-button @click="sentinel = !sentinel">切换清空值</c-button>
      <c-button @click="reset">重置示例</c-button>
    </c-space>
    <p role="status">empty-value: {{ JSON.stringify(emptyValue) }}</p>
    <c-textarea
      v-model="direct"
      edit-mode="direct"
      :empty-value="emptyValue"
      :empty-values="emptyValues"
      clearable
      aria-label="Direct text"
      placeholder="直接编辑"
    />
    <c-textarea
      v-model="deferred"
      edit-mode="click"
      :empty-value="emptyValue"
      :empty-values="emptyValues"
      clearable
      aria-label="Deferred text"
      placeholder="确认后保存"
    />
    <p>先切换清空值再清空；延迟编辑确认后回写。</p>
    <pre class="empty-policy-model">{{
      JSON.stringify({ direct, deferred })
    }}</pre>
  </c-space>
</template>
