<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-time-range-1.vue";
import Case2 from "./api-review-c-time-range-2.vue";
const cases = [
  { name: "main", label: "c-time-range · 组合属性", component: markRaw(Case0) },
  {
    name: "c-time-range-1",
    label: "c-time-range · default-state",
    component: markRaw(Case1),
  },
  {
    name: "c-time-range-2",
    label: "c-time-range · field-appearance",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
