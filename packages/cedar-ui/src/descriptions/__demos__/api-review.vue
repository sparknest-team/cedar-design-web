<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-descriptions-1.vue";
import Case2 from "./api-review-c-descriptions-item-1.vue";
const cases = [
  {
    name: "main",
    label: "c-descriptions · 组合属性",
    component: markRaw(Case0),
  },
  {
    name: "c-descriptions-1",
    label: "c-descriptions · label-text-alignment",
    component: markRaw(Case1),
  },
  {
    name: "c-descriptions-item-1",
    label: "c-descriptions-item · basic",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
