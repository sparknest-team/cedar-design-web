<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-avatar-1.vue";
import Case2 from "./api-review-c-avatar-2.vue";
import Case3 from "./api-review-c-avatar-group-1.vue";
const cases = [
  { name: "main", label: "c-avatar · 组合属性", component: markRaw(Case0) },
  {
    name: "c-avatar-1",
    label: "c-avatar · fallback",
    component: markRaw(Case1),
  },
  {
    name: "c-avatar-2",
    label: "c-avatar · trigger",
    component: markRaw(Case2),
  },
  {
    name: "c-avatar-group-1",
    label: "c-avatar-group · group-vertical",
    component: markRaw(Case3),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
