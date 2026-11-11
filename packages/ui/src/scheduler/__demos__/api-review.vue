<script setup>
import { markRaw } from "vue";
import DemoApiReviewSuite from "../../../docs/.vuepress/components/ApiReviewSuite.vue";
import Case0 from "./api-review-main.vue";
import Case1 from "./api-review-c-scheduler-1.vue";
import Case2 from "./api-review-c-scheduler-2.vue";
import Case3 from "./api-review-c-scheduler-3.vue";
import Case4 from "./api-review-c-scheduler-4.vue";
import Case5 from "./api-review-c-scheduler-5.vue";
import Case6 from "./api-review-c-scheduler-6.vue";
import Case7 from "./api-review-c-scheduler-7.vue";
const cases = [
  { name: "main", label: "c-scheduler · 组合属性", component: markRaw(Case0) },
  {
    name: "c-scheduler-1",
    label: "c-scheduler · task-calendar-workbench",
    component: markRaw(Case1),
  },
  {
    name: "c-scheduler-2",
    label: "c-scheduler · async-resources",
    component: markRaw(Case2),
  },
  {
    name: "c-scheduler-3",
    label: "c-scheduler · custom-event",
    component: markRaw(Case3),
  },
  {
    name: "c-scheduler-4",
    label: "c-scheduler · equipment",
    component: markRaw(Case4),
  },
  {
    name: "c-scheduler-5",
    label: "c-scheduler · advanced-planning",
    component: markRaw(Case5),
  },
  {
    name: "c-scheduler-6",
    label: "c-scheduler · assignment-load",
    component: markRaw(Case6),
  },
  {
    name: "c-scheduler-7",
    label: "c-scheduler · independent-assignments",
    component: markRaw(Case7),
  },
];
</script>
<template><DemoApiReviewSuite :cases="cases" /></template>
