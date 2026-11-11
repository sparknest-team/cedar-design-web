<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-radio-1.vue";
import Case2 from "./api-review-c-radio-group-1.vue";
import Case3 from "./api-review-c-radio-group-2.vue";
const cases = [
  { name: "main", label: "c-radio · 组合属性", component: markRaw(Case0) },
  {
    name: "c-radio-1",
    label: "c-radio · custom-radio",
    component: markRaw(Case1),
  },
  {
    name: "c-radio-group-1",
    label: "c-radio-group · group-state",
    component: markRaw(Case2),
  },
  {
    name: "c-radio-group-2",
    label: "c-radio-group · option-data",
    component: markRaw(Case3),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
