<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-layout-header-1.vue";
import Case2 from "./api-review-c-layout-content-1.vue";
import Case3 from "./api-review-c-layout-footer-1.vue";
import Case4 from "./api-review-c-layout-sider-1.vue";
const cases = [
  { name: "main", label: "c-layout · 组合属性", component: markRaw(Case0) },
  {
    name: "c-layout-header-1",
    label: "c-layout-header · basic",
    component: markRaw(Case1),
  },
  {
    name: "c-layout-content-1",
    label: "c-layout-content · basic",
    component: markRaw(Case2),
  },
  {
    name: "c-layout-footer-1",
    label: "c-layout-footer · basic",
    component: markRaw(Case3),
  },
  {
    name: "c-layout-sider-1",
    label: "c-layout-sider · basic",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
