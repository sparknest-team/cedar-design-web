<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-alert-1.vue";
import Case2 from "./api-review-c-alert-2.vue";
import Case3 from "./api-review-c-alert-3.vue";
import Case4 from "./api-review-c-alert-4.vue";
const cases = [
  { name: "main", label: "c-alert · 组合属性", component: markRaw(Case0) },
  { name: "c-alert-1", label: "c-alert · action", component: markRaw(Case1) },
  { name: "c-alert-2", label: "c-alert · closable", component: markRaw(Case2) },
  {
    name: "c-alert-3",
    label: "c-alert · close-icon",
    component: markRaw(Case3),
  },
  {
    name: "c-alert-4",
    label: "c-alert · custom-icon",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
