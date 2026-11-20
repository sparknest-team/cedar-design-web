<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-dialog-1.vue";
import Case2 from "./api-review-c-dialog-2.vue";
import Case3 from "./api-review-c-dialog-3.vue";
import Case4 from "./api-review-service.en-US.vue";
const cases = [
  { name: "main", label: "c-dialog · 组合属性", component: markRaw(Case0) },
  {
    name: "c-dialog-1",
    label: "c-dialog · custom-footer",
    component: markRaw(Case1),
  },
  {
    name: "c-dialog-2",
    label: "c-dialog · advanced",
    component: markRaw(Case2),
  },
  { name: "c-dialog-3", label: "c-dialog · async", component: markRaw(Case3) },
  {
    name: "service",
    label: "Dialog · 函数调用与返回句柄",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
