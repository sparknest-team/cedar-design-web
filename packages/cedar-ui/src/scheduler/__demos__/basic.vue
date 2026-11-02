<script setup lang="ts">
import { ref } from 'vue'
import type { SchedulerEvent } from '@cedar-design/ui'
const events = ref<SchedulerEvent[]>([
  { id: 'meeting', title: '项目同步', start: '2026-09-09T09:00:00', end: '2026-09-09T10:00:00' },
])
</script>
<template>
  <c-scheduler v-model="events" default-date="2026-09-09" />
</template>
