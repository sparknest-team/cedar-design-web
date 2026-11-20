<script setup lang="ts">
const inlineCopy = {
  beijing: "Beijing",
  shanghai: "Shanghai",
  guangzhou: "Guangzhou"
};

import { ref } from "vue";

const busy = ref(true);
const value = ref("beijing");
const selected = ref(["beijing"]);
const options = [
  {
    get label() {
      return inlineCopy.beijing;
    },
    value: "beijing",
  },
  {
    get label() {
      return inlineCopy.shanghai;
    },
    value: "shanghai",
  },
  {
    get label() {
      return inlineCopy.guangzhou;
    },
    value: "guangzhou",
  },
];
</script>
<template>
  <c-space direction="column" :size="16" style="width: 100%">
    <c-form layout="vertical">
      <c-form-item label="Loading"
        ><c-switch v-model="busy"
      /></c-form-item>
      <c-form-item label="Default"
        ><c-select
          v-model="value"
          :loading="busy"
          :options="options"
          edit-mode="direct"
          loading-mode="default"
      /></c-form-item>
      <c-form-item label="Line"
        ><c-select
          v-model="value"
          :loading="busy"
          :options="options"
          edit-mode="direct"
          loading-mode="line"
      /></c-form-item>
      <c-form-item label="Multiple actions"
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
    <p>Loading pauses selection, clearing and removal while search remains editable.</p>
  </c-space>
</template>
