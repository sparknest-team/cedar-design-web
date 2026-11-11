<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-calendar-1.vue";
import Case2 from "./api-review-c-calendar-2.vue";
import Case3 from "./api-review-c-calendar-3.vue";
const cases = [
  { name: "main", label: "c-calendar · 组合属性", component: markRaw(Case0) },
  {
    name: "c-calendar-1",
    label: "c-calendar · custom-cell",
    component: markRaw(Case1),
  },
  {
    name: "c-calendar-2",
    label: "c-calendar · custom-header",
    component: markRaw(Case2),
  },
  {
    name: "c-calendar-3",
    label: "c-calendar · modes",
    component: markRaw(Case3),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
