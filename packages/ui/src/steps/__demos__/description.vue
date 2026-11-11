<template>
  <c-radio-group
    v-model="currentStatus"
    variant="button"
    style="margin-bottom: 16px"
  >
    <c-radio v-for="status in statuses" :key="status" :value="status">{{
      status
    }}</c-radio>
  </c-radio-group>
  <c-steps :model-value="2" :status="currentStatus">
    <c-step>Succeeded</c-step>
    <c-step>Processing</c-step>
    <c-step>Pending</c-step>
  </c-steps>
  <c-divider />
  <div style="line-height: 140px; color: #c9cdd4; text-align: center">
    Step 2 Content
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const statuses = ["wait", "process", "finish", "error"] as const;
const currentStatus = ref<(typeof statuses)[number]>("process");
</script>
