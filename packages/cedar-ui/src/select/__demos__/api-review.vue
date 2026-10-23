<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-select-1.vue";
import Case2 from "./api-review-c-select-2.vue";
import Case3 from "./api-review-c-select-3.vue";
import Case4 from "./api-review-c-option-1.vue";
import Case5 from "./api-review-c-optgroup-1.vue";
const cases = [
  { name: "main", label: "c-select · 组合属性", component: markRaw(Case0) },
  {
    name: "c-select-1",
    label: "c-select · slots-review",
    component: markRaw(Case1),
  },
  {
    name: "c-select-2",
    label: "c-select · async-devices",
    component: markRaw(Case2),
  },
  {
    name: "c-select-3",
    label: "c-select · variant",
    component: markRaw(Case3),
  },
  {
    name: "c-option-1",
    label: "c-option · options-review",
    component: markRaw(Case4),
  },
  {
    name: "c-optgroup-1",
    label: "c-optgroup · options-review",
    component: markRaw(Case5),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
