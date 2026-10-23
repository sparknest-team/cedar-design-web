<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-statistic-1.vue";
import Case2 from "./api-review-c-statistic-2.vue";
const cases = [
  { name: "main", label: "c-statistic · 组合属性", component: markRaw(Case0) },
  {
    name: "c-statistic-1",
    label: "c-statistic · animation",
    component: markRaw(Case1),
  },
  {
    name: "c-statistic-2",
    label: "c-statistic · extra",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
