<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("selectLoadingInline");

import { ref } from "vue";

const busy = ref(true);
const value = ref("beijing");
const selected = ref(["beijing"]);
const options = [
  {
    get label() {
      return inlineCopy.value.beijing;
    },
    value: "beijing",
  },
  {
    get label() {
      return inlineCopy.value.shanghai;
    },
    value: "shanghai",
  },
  {
    get label() {
      return inlineCopy.value.guangzhou;
    },
    value: "guangzhou",
  },
];
</script>
<template>
  <c-space direction="column" :size="16" style="width: 100%">
    <c-form layout="vertical">
      <c-form-item :label="inlineCopy.loading"
        ><c-switch v-model="busy"
      /></c-form-item>
      <c-form-item :label="inlineCopy.default"
        ><c-select
          v-model="value"
          :loading="busy"
          :options="options"
          edit-mode="direct"
          loading-mode="default"
      /></c-form-item>
      <c-form-item :label="inlineCopy.line"
        ><c-select
          v-model="value"
          :loading="busy"
          :options="options"
          edit-mode="direct"
          loading-mode="line"
      /></c-form-item>
      <c-form-item :label="inlineCopy.multipleActions"
        ><c-select
          v-model="selected"
          :loading="busy"
          :options="options"
          multiple
          clearable
          filterable
          edit-mode="direct"
      /></c-form-item>
    </c-form>
    <p>{{ inlineCopy.loadingPausesSelectionClearingAnd }}</p>
  </c-space>
</template>
