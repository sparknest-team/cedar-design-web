<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-card-1.vue";
import Case2 from "./api-review-c-card-2.vue";
import Case3 from "./api-review-c-card-3.vue";
const cases = [
  { name: "main", label: "c-card · 组合属性", component: markRaw(Case0) },
  { name: "c-card-1", label: "c-card · slots", component: markRaw(Case1) },
  { name: "c-card-2", label: "c-card · floating", component: markRaw(Case2) },
  { name: "c-card-3", label: "c-card · no-padding", component: markRaw(Case3) },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
