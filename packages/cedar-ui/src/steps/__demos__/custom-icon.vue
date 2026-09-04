<template>
  <c-radio-group v-model="currentStatus" variant="button" style="margin-bottom: 16px">
    <c-radio v-for="status in statuses" :key="status" :value="status">{{ status }}</c-radio>
  </c-radio-group>
  <c-steps :status="currentStatus">
    <c-step description="This is a description">
      Succeeded
      <template #icon>
        <c-icon-home />
      </template>
    </c-step>
    <c-step description="This is a description">
      Processing
      <template #icon>
        <c-icon-loading />
      </template>
    </c-step>
    <c-step description="This is a description">
      Pending
      <template #icon>
        <c-icon-thumb-up />
      </template>
    </c-step>
  </c-steps>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const statuses = ['wait', 'process', 'finish', 'error'] as const
const currentStatus = ref<(typeof statuses)[number]>('process')
</script>
