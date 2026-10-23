<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-tree-1.vue";
import Case2 from "./api-review-c-tree-2.vue";
import Case3 from "./api-review-c-tree-3.vue";
import Case4 from "./api-review-c-tree-4.vue";
import Case5 from "./api-review-c-tree-5.vue";
import Case6 from "./api-review-c-tree-6.vue";
import Case7 from "./api-review-c-tree-7.vue";
const cases = [
  { name: "main", label: "c-tree · 组合属性", component: markRaw(Case0) },
  {
    name: "c-tree-1",
    label: "c-tree · render-extra",
    component: markRaw(Case1),
  },
  { name: "c-tree-2", label: "c-tree · virtual", component: markRaw(Case2) },
  {
    name: "c-tree-3",
    label: "c-tree · field-names",
    component: markRaw(Case3),
  },
  { name: "c-tree-4", label: "c-tree · icons", component: markRaw(Case4) },
  { name: "c-tree-5", label: "c-tree · load-more", component: markRaw(Case5) },
  { name: "c-tree-6", label: "c-tree · node-icon", component: markRaw(Case6) },
  { name: "c-tree-7", label: "c-tree · search", component: markRaw(Case7) },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
