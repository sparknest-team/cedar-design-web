<template>
  <c-scheduler
    :default-value="events"
    default-date="2026-09-09"
    default-mode="agenda"
    :resources="resources"
    readonly
  >
    <template #event="{ event }">
      <span>{{ event.title }}</span>
      <c-tag size="sm" status="info"
        >{{ event.resourceIds?.length ?? 0 }} 人</c-tag
      >
    </template>
  </c-scheduler>
</template>
<script setup lang="ts">
import { createEvents, resources } from "./data";
const events = createEvents();
</script>
