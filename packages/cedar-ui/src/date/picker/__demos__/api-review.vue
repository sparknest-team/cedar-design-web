<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-date-picker-1.vue";
import Case2 from "./api-review-c-date-picker-2.vue";
import Case3 from "./api-review-c-date-picker-3.vue";
import Case4 from "./api-review-c-date-picker-4.vue";
const cases = [
  {
    name: "main",
    label: "c-date-picker · 组合属性",
    component: markRaw(Case0),
  },
  {
    name: "c-date-picker-1",
    label: "c-date-picker · entry-boundary",
    component: markRaw(Case1),
  },
  {
    name: "c-date-picker-2",
    label: "c-date-picker · time-presentation",
    component: markRaw(Case2),
  },
  {
    name: "c-date-picker-3",
    label: "c-date-picker · disabled",
    component: markRaw(Case3),
  },
  {
    name: "c-date-picker-4",
    label: "c-date-picker · show-time",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
