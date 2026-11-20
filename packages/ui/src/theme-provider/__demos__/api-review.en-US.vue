<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.en-US.vue";
const cases = [
  {
    name: "main",
    label: "c-theme-provider · 组合属性",
    component: markRaw(Case0),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
