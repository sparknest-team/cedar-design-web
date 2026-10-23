<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-count-to-1.vue";
import Case2 from "./api-review-c-count-to-2.vue";
const cases = [
  { name: "main", label: "c-count-to · 组合属性", component: markRaw(Case0) },
  {
    name: "c-count-to-1",
    label: "c-count-to · custom",
    component: markRaw(Case1),
  },
  {
    name: "c-count-to-2",
    label: "c-count-to · timing-function",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
