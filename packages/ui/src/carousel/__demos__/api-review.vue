<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-carousel-1.vue";
import Case2 from "./api-review-c-carousel-2.vue";
import Case3 from "./api-review-c-carousel-3.vue";
const cases = [
  { name: "main", label: "c-carousel · 组合属性", component: markRaw(Case0) },
  {
    name: "c-carousel-1",
    label: "c-carousel · auto-play-hover",
    component: markRaw(Case1),
  },
  {
    name: "c-carousel-2",
    label: "c-carousel · auto-sized",
    component: markRaw(Case2),
  },
  {
    name: "c-carousel-3",
    label: "c-carousel · custom-indicator",
    component: markRaw(Case3),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
