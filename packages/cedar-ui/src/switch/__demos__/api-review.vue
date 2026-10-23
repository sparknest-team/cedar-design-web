<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-switch-1.vue";
import Case2 from "./api-review-c-switch-2.vue";
import Case3 from "./api-review-c-switch-3.vue";
import Case4 from "./api-review-c-switch-4.vue";
const cases = [
  { name: "main", label: "c-switch · 组合属性", component: markRaw(Case0) },
  {
    name: "c-switch-1",
    label: "c-switch · custom-icon",
    component: markRaw(Case1),
  },
  {
    name: "c-switch-2",
    label: "c-switch · custom-text",
    component: markRaw(Case2),
  },
  {
    name: "c-switch-3",
    label: "c-switch · custom-value",
    component: markRaw(Case3),
  },
  {
    name: "c-switch-4",
    label: "c-switch · switch-interception",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
