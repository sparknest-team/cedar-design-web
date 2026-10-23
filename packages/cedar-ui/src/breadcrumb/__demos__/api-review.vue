<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-breadcrumb-1.vue";
import Case2 from "./api-review-c-breadcrumb-item-1.vue";
const cases = [
  { name: "main", label: "c-breadcrumb · 组合属性", component: markRaw(Case0) },
  {
    name: "c-breadcrumb-1",
    label: "c-breadcrumb · custom-split",
    component: markRaw(Case1),
  },
  {
    name: "c-breadcrumb-item-1",
    label: "c-breadcrumb-item · basic",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
