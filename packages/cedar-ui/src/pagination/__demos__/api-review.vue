<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-pagination-1.vue";
import Case2 from "./api-review-c-pagination-2.vue";
import Case3 from "./api-review-c-pagination-3.vue";
import Case4 from "./api-review-c-pagination-4.vue";
const cases = [
  { name: "main", label: "c-pagination · 组合属性", component: markRaw(Case0) },
  {
    name: "c-pagination-1",
    label: "c-pagination · custom-page-button",
    component: markRaw(Case1),
  },
  {
    name: "c-pagination-2",
    label: "c-pagination · show-jumper",
    component: markRaw(Case2),
  },
  {
    name: "c-pagination-3",
    label: "c-pagination · show-page-size",
    component: markRaw(Case3),
  },
  {
    name: "c-pagination-4",
    label: "c-pagination · show-total",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
