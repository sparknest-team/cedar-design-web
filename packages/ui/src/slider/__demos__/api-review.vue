<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-slider-1.vue";
import Case2 from "./api-review-c-slider-2.vue";
const cases = [
  { name: "main", label: "c-slider · 组合属性", component: markRaw(Case0) },
  {
    name: "c-slider-1",
    label: "c-slider · controlled-range",
    component: markRaw(Case1),
  },
  {
    name: "c-slider-2",
    label: "c-slider · keyboard-input",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
