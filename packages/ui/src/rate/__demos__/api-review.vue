<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-rate-1.vue";
import Case2 from "./api-review-c-rate-2.vue";
const cases = [
  { name: "main", label: "c-rate · 组合属性", component: markRaw(Case0) },
  { name: "c-rate-1", label: "c-rate · character", component: markRaw(Case1) },
  { name: "c-rate-2", label: "c-rate · color", component: markRaw(Case2) },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
