<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-skeleton-1.vue";
import Case2 from "./api-review-c-skeleton-2.vue";
import Case3 from "./api-review-c-skeleton-line-1.vue";
import Case4 from "./api-review-c-skeleton-shape-1.vue";
const cases = [
  { name: "main", label: "c-skeleton · 组合属性", component: markRaw(Case0) },
  {
    name: "c-skeleton-1",
    label: "c-skeleton · custom-template",
    component: markRaw(Case1),
  },
  {
    name: "c-skeleton-2",
    label: "c-skeleton · title-and-rows",
    component: markRaw(Case2),
  },
  {
    name: "c-skeleton-line-1",
    label: "c-skeleton-line · custom-template",
    component: markRaw(Case3),
  },
  {
    name: "c-skeleton-shape-1",
    label: "c-skeleton-shape · custom-template",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
