<template>
  <c-space wrap>
    <c-tooltip v-for="status in statuses" :key="status" :status="status" :content="status">
      <c-button :status="status === 'default' ? undefined : status">{{ status }}</c-button>
    </c-tooltip>
  </c-space>
</template>

<script setup lang="ts">
import type { TooltipStatus } from '../props'

const statuses: TooltipStatus[] = ['default', 'primary', 'info', 'success', 'warning', 'danger']
</script>
