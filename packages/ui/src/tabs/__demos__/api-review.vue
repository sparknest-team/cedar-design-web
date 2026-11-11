<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-tabs-1.vue";
import Case2 from "./api-review-c-tab-pane-1.vue";
import Case3 from "./api-review-c-tab-nav-1.vue";
import Case4 from "./api-review-c-tab-item-1.vue";
import Case5 from "./api-review-c-tabs-navs-1.vue";
import Case6 from "./api-review-c-tabs-items-1.vue";
const cases = [
  { name: "main", label: "c-tabs · 组合属性", component: markRaw(Case0) },
  {
    name: "c-tabs-1",
    label: "c-tabs · custom-style",
    component: markRaw(Case1),
  },
  {
    name: "c-tab-pane-1",
    label: "c-tab-pane · basic",
    component: markRaw(Case2),
  },
  {
    name: "c-tab-nav-1",
    label: "c-tab-nav · icon-tabs",
    component: markRaw(Case3),
  },
  {
    name: "c-tab-item-1",
    label: "c-tab-item · custom-style",
    component: markRaw(Case4),
  },
  {
    name: "c-tabs-navs-1",
    label: "c-tabs-navs · navs-review",
    component: markRaw(Case5),
  },
  {
    name: "c-tabs-items-1",
    label: "c-tabs-items · custom-style",
    component: markRaw(Case6),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
