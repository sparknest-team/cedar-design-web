<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-cascader-1.vue";
import Case2 from "./api-review-c-cascader-panel-1.vue";
const cases = [
  { name: "main", label: "c-cascader · 组合属性", component: markRaw(Case0) },
  {
    name: "c-cascader-1",
    label: "c-cascader · async-devices",
    component: markRaw(Case1),
  },
  {
    name: "c-cascader-panel-1",
    label: "c-cascader-panel · panel-review",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
