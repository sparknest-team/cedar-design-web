<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-upload-1.vue";
import Case2 from "./api-review-c-upload-2.vue";
import Case3 from "./api-review-c-upload-3.vue";
import Case4 from "./api-review-c-upload-4.vue";
const cases = [
  { name: "main", label: "c-upload · 组合属性", component: markRaw(Case0) },
  {
    name: "c-upload-1",
    label: "c-upload · custom-request",
    component: markRaw(Case1),
  },
  {
    name: "c-upload-2",
    label: "c-upload · before-remove",
    component: markRaw(Case2),
  },
  {
    name: "c-upload-3",
    label: "c-upload · before-upload",
    component: markRaw(Case3),
  },
  {
    name: "c-upload-4",
    label: "c-upload · state-controls",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
