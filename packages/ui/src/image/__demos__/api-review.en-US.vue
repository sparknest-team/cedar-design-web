<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-image-1.vue";
import Case2 from "./api-review-c-image-2.vue";
import Case3 from "./api-review-c-image-3.vue";
import Case4 from "./api-review-c-image-4.vue";
import Case5 from "./api-review-c-image-5.vue";
import Case6 from "./api-review-c-image-preview-1.en-US.vue";
import Case7 from "./api-review-c-image-preview-group-1.vue";
import Case8 from "./api-review-c-image-preview-action-1.en-US.vue";
import Case9 from "./api-review-service.en-US.vue";
const cases = [
  { name: "main", label: "c-image · 组合属性", component: markRaw(Case0) },
  { name: "c-image-1", label: "c-image · error", component: markRaw(Case1) },
  { name: "c-image-2", label: "c-image · extra", component: markRaw(Case2) },
  {
    name: "c-image-3",
    label: "c-image · hide-footer-never",
    component: markRaw(Case3),
  },
  { name: "c-image-4", label: "c-image · loader", component: markRaw(Case4) },
  {
    name: "c-image-5",
    label: "c-image · overlay-closable",
    component: markRaw(Case5),
  },
  {
    name: "c-image-preview-1",
    label: "c-image-preview · controller-lifecycle",
    component: markRaw(Case6),
  },
  {
    name: "c-image-preview-group-1",
    label: "c-image-preview-group · preview-features",
    component: markRaw(Case7),
  },
  {
    name: "c-image-preview-action-1",
    label: "c-image-preview-action · controller-lifecycle",
    component: markRaw(Case8),
  },
  {
    name: "service",
    label: "imagePreview · 函数调用与返回句柄",
    component: markRaw(Case9),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
