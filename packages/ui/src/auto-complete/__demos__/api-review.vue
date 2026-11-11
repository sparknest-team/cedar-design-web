<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-auto-complete-1.vue";
import Case2 from "./api-review-c-auto-complete-2.vue";
import Case3 from "./api-review-c-auto-complete-3.vue";
import Case4 from "./api-review-c-auto-complete-4.vue";
import Case5 from "./api-review-c-auto-complete-5.vue";
import Case6 from "./api-review-c-auto-complete-6.vue";
const cases = [
  {
    name: "main",
    label: "c-auto-complete · 组合属性",
    component: markRaw(Case0),
  },
  {
    name: "c-auto-complete-1",
    label: "c-auto-complete · decorator",
    component: markRaw(Case1),
  },
  {
    name: "c-auto-complete-2",
    label: "c-auto-complete · footer",
    component: markRaw(Case2),
  },
  {
    name: "c-auto-complete-3",
    label: "c-auto-complete · group-spacing",
    component: markRaw(Case3),
  },
  {
    name: "c-auto-complete-4",
    label: "c-auto-complete · opening-policy",
    component: markRaw(Case4),
  },
  {
    name: "c-auto-complete-5",
    label: "c-auto-complete · virtual-list",
    component: markRaw(Case5),
  },
  {
    name: "c-auto-complete-6",
    label: "c-auto-complete · accessibility",
    component: markRaw(Case6),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
