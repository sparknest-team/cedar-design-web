<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-empty-1.vue";
import Case2 from "./api-review-c-empty-2.vue";
const cases = [
  { name: "main", label: "c-empty · 组合属性", component: markRaw(Case0) },
  { name: "c-empty-1", label: "c-empty · extra", component: markRaw(Case1) },
  {
    name: "c-empty-2",
    label: "c-empty · user-define",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
