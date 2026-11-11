<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-table-1.vue";
import Case2 from "./api-review-c-table-2.vue";
import Case3 from "./api-review-c-table-3.vue";
import Case4 from "./api-review-c-table-4.vue";
import Case5 from "./api-review-c-table-5.vue";
import Case6 from "./api-review-c-table-6.vue";
import Case7 from "./api-review-c-table-7.vue";
import Case8 from "./api-review-c-table-8.vue";
import Case9 from "./api-review-c-table-9.vue";
import Case10 from "./api-review-c-table-column-1.vue";
const cases = [
  { name: "main", label: "c-table · 组合属性", component: markRaw(Case0) },
  { name: "c-table-1", label: "c-table · summary", component: markRaw(Case1) },
  {
    name: "c-table-2",
    label: "c-table · customize-table-elements",
    component: markRaw(Case2),
  },
  {
    name: "c-table-3",
    label: "c-table · form-attribute",
    component: markRaw(Case3),
  },
  {
    name: "c-table-4",
    label: "c-table · virtual-list-props",
    component: markRaw(Case4),
  },
  { name: "c-table-5", label: "c-table · scroll", component: markRaw(Case5) },
  {
    name: "c-table-6",
    label: "c-table · span-method",
    component: markRaw(Case6),
  },
  {
    name: "c-table-7",
    label: "c-table · column-review",
    component: markRaw(Case7),
  },
  {
    name: "c-table-8",
    label: "c-table · droppable-anchor",
    component: markRaw(Case8),
  },
  {
    name: "c-table-9",
    label: "c-table · load-more",
    component: markRaw(Case9),
  },
  {
    name: "c-table-column-1",
    label: "c-table-column · column-review",
    component: markRaw(Case10),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
