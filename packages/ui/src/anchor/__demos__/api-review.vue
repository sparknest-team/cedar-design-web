<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-anchor-1.vue";
import Case2 from "./api-review-c-anchor-link-1.vue";
const cases = [
  { name: "main", label: "c-anchor · 组合属性", component: markRaw(Case0) },
  {
    name: "c-anchor-1",
    label: "c-anchor · boundary",
    component: markRaw(Case1),
  },
  {
    name: "c-anchor-link-1",
    label: "c-anchor-link · affix",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
