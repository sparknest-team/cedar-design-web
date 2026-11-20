<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-back-top-1.en-US.vue";
const cases = [
  { name: "main", label: "c-back-top · 组合属性", component: markRaw(Case0) },
  {
    name: "c-back-top-1",
    label: "c-back-top · scheduler-lifecycle",
    component: markRaw(Case1),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
