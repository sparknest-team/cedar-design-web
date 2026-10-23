<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-progress-1.vue";
import Case2 from "./api-review-c-progress-2.vue";
const cases = [
  { name: "main", label: "c-progress · 组合属性", component: markRaw(Case0) },
  {
    name: "c-progress-1",
    label: "c-progress · advanced",
    component: markRaw(Case1),
  },
  {
    name: "c-progress-2",
    label: "c-progress · mini",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
