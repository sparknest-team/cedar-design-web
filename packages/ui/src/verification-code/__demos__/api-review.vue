<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-verification-code-1.vue";
import Case2 from "./api-review-c-verification-code-2.vue";
const cases = [
  {
    name: "main",
    label: "c-verification-code · 组合属性",
    component: markRaw(Case0),
  },
  {
    name: "c-verification-code-1",
    label: "c-verification-code · formatting",
    component: markRaw(Case1),
  },
  {
    name: "c-verification-code-2",
    label: "c-verification-code · separator",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
