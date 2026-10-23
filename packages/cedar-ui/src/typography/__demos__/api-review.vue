<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-typography-title-1.vue";
import Case2 from "./api-review-c-typography-paragraph-1.vue";
import Case3 from "./api-review-c-typography-paragraph-2.vue";
import Case4 from "./api-review-c-typography-text-1.vue";
const cases = [
  { name: "main", label: "c-typography · 组合属性", component: markRaw(Case0) },
  {
    name: "c-typography-title-1",
    label: "c-typography-title · ellipsis",
    component: markRaw(Case1),
  },
  {
    name: "c-typography-paragraph-1",
    label: "c-typography-paragraph · ellipsis",
    component: markRaw(Case2),
  },
  {
    name: "c-typography-paragraph-2",
    label: "c-typography-paragraph · basic",
    component: markRaw(Case3),
  },
  {
    name: "c-typography-text-1",
    label: "c-typography-text · basic",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
