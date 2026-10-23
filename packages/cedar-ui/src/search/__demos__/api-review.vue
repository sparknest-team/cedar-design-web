<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-search-1.vue";
import Case2 from "./api-review-c-search-2.vue";
import Case3 from "./api-review-c-search-3.vue";
const cases = [
  { name: "main", label: "c-search · 组合属性", component: markRaw(Case0) },
  { name: "c-search-1", label: "c-search · slots", component: markRaw(Case1) },
  {
    name: "c-search-2",
    label: "c-search · presentation",
    component: markRaw(Case2),
  },
  {
    name: "c-search-3",
    label: "c-search · controlled-fields",
    component: markRaw(Case3),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
