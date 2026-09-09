<template>
  <c-scheduler
    v-model="events"
    default-date="2026-09-09"
    default-mode="resource-day"
    :resources="resources"
    :start-hour="8"
    :end-hour="18"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { createEvents, resources } from "./data";
const events = ref(createEvents());
</script>
