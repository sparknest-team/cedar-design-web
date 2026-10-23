<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-input-1.vue";
import Case2 from "./api-review-c-input-2.vue";
import Case3 from "./api-review-c-input-3.vue";
import Case4 from "./api-review-c-input-password-1.vue";
import Case5 from "./api-review-c-input-group-1.vue";
const cases = [
  { name: "main", label: "c-input · 组合属性", component: markRaw(Case0) },
  { name: "c-input-1", label: "c-input · prefix", component: markRaw(Case1) },
  {
    name: "c-input-2",
    label: "c-input · accessibility",
    component: markRaw(Case2),
  },
  {
    name: "c-input-3",
    label: "c-input · word-limit",
    component: markRaw(Case3),
  },
  {
    name: "c-input-password-1",
    label: "c-input-password · group-state",
    component: markRaw(Case4),
  },
  {
    name: "c-input-group-1",
    label: "c-input-group · group-state",
    component: markRaw(Case5),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
