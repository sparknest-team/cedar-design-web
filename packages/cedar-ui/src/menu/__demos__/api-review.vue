<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-menu-1.vue";
import Case2 from "./api-review-c-menu-2.vue";
const cases = [
  {
    name: "main",
    label: "c-menu · 组合属性",
    component: markRaw(Case0),
  },
  {
    name: "c-menu-1",
    label: "c-menu · footer",
    component: markRaw(Case1),
  },
  {
    name: "c-menu-2",
    label: "c-menu · placement",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
