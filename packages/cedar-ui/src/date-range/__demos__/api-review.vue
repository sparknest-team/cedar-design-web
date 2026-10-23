<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-date-range-1.vue";
import Case2 from "./api-review-c-date-range-2.vue";
import Case3 from "./api-review-c-date-range-3.vue";
const cases = [
  { name: "main", label: "c-date-range · 组合属性", component: markRaw(Case0) },
  {
    name: "c-date-range-1",
    label: "c-date-range · boundaries",
    component: markRaw(Case1),
  },
  {
    name: "c-date-range-2",
    label: "c-date-range · entry-boundary",
    component: markRaw(Case2),
  },
  {
    name: "c-date-range-3",
    label: "c-date-range · status",
    component: markRaw(Case3),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
