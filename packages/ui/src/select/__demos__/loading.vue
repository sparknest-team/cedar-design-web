<script setup lang="ts">
const inlineCopy = {
  beijing: "北京",
  shanghai: "上海",
  guangzhou: "广州"
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
      <c-form-item label="加载状态"
        ><c-switch v-model="busy"
      /></c-form-item>
      <c-form-item label="默认指示器"
        ><c-select
          v-model="value"
          :loading="busy"
          :options="options"
          edit-mode="direct"
          loading-mode="default"
      /></c-form-item>
      <c-form-item label="底部加载线"
        ><c-select
          v-model="value"
          :loading="busy"
          :options="options"
          edit-mode="direct"
          loading-mode="line"
      /></c-form-item>
      <c-form-item label="多选动作"
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
    <p>加载时保留选择，暂停选择、清空和移除；搜索仍可输入，关闭加载后恢复。</p>
  </c-space>
</template>
