<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-transfer-1.vue";
import Case2 from "./api-review-c-transfer-2.vue";
import Case3 from "./api-review-c-transfer-3.vue";
import Case4 from "./api-review-c-transfer-4.vue";
const cases = [
  { name: "main", label: "c-transfer · 组合属性", component: markRaw(Case0) },
  {
    name: "c-transfer-1",
    label: "c-transfer · custom-header",
    component: markRaw(Case1),
  },
  {
    name: "c-transfer-2",
    label: "c-transfer · custom",
    component: markRaw(Case2),
  },
  {
    name: "c-transfer-3",
    label: "c-transfer · grouped",
    component: markRaw(Case3),
  },
  {
    name: "c-transfer-4",
    label: "c-transfer · tree",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
