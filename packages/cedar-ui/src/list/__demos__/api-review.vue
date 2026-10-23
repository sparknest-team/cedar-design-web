<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-list-1.vue";
import Case2 from "./api-review-c-list-2.vue";
const cases = [
  { name: "main", label: "c-list · 组合属性", component: markRaw(Case0) },
  {
    name: "c-list-1",
    label: "c-list · bounded-scroll",
    component: markRaw(Case1),
  },
  {
    name: "c-list-2",
    label: "c-list · virtual-lifecycle",
    component: markRaw(Case2),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
