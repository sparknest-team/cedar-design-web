<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-form-1.vue";
import Case2 from "./api-review-c-form-2.vue";
import Case3 from "./api-review-c-form-item-1.vue";
import Case4 from "./api-review-c-form-item-2.vue";
const cases = [
  { name: "main", label: "c-form · 组合属性", component: markRaw(Case0) },
  {
    name: "c-form-1",
    label: "c-form · review-hook",
    component: markRaw(Case1),
  },
  {
    name: "c-form-2",
    label: "c-form · label-columns",
    component: markRaw(Case2),
  },
  {
    name: "c-form-item-1",
    label: "c-form-item · async-fields",
    component: markRaw(Case3),
  },
  {
    name: "c-form-item-2",
    label: "c-form-item · decoration",
    component: markRaw(Case4),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
