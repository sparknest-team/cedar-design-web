<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-textarea-1.vue";
import Case2 from "./api-review-c-textarea-2.vue";
import Case3 from "./api-review-c-textarea-3.vue";
const cases = [
  { name: "main", label: "c-textarea · 组合属性", component: markRaw(Case0) },
  {
    name: "c-textarea-1",
    label: "c-textarea · slots",
    component: markRaw(Case1),
  },
  {
    name: "c-textarea-2",
    label: "c-textarea · body-contract",
    component: markRaw(Case2),
  },
  {
    name: "c-textarea-3",
    label: "c-textarea · native-attrs",
    component: markRaw(Case3),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
