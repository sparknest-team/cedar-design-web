<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-checkbox-1.vue";
import Case2 from "./api-review-c-checkbox-2.vue";
import Case3 from "./api-review-c-checkbox-3.vue";
import Case4 from "./api-review-c-checkbox-group-1.vue";
import Case5 from "./api-review-c-checkbox-group-2.vue";
import Case6 from "./api-review-c-checkbox-group-3.vue";
const cases = [
  { name: "main", label: "c-checkbox · 组合属性", component: markRaw(Case0) },
  {
    name: "c-checkbox-1",
    label: "c-checkbox · custom-control",
    component: markRaw(Case1),
  },
  {
    name: "c-checkbox-2",
    label: "c-checkbox · checked-custom",
    component: markRaw(Case2),
  },
  {
    name: "c-checkbox-3",
    label: "c-checkbox · control-value",
    component: markRaw(Case3),
  },
  {
    name: "c-checkbox-group-1",
    label: "c-checkbox-group · custom-control",
    component: markRaw(Case4),
  },
  {
    name: "c-checkbox-group-2",
    label: "c-checkbox-group · option-data",
    component: markRaw(Case5),
  },
  {
    name: "c-checkbox-group-3",
    label: "c-checkbox-group · group-state",
    component: markRaw(Case6),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
