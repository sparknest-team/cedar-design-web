<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-col-1.vue";
const cases = [
  { name: "main", label: "c-col · 组合属性", component: markRaw(Case0) },
  { name: "c-col-1", label: "c-col · responsive", component: markRaw(Case1) },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
