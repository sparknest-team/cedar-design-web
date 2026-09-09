<script setup lang="ts">
const variants = ['default', 'outline'] as const
const statuses = ['default', 'success', 'warning', 'danger', 'primary', 'info'] as const
</script>

<template>
  <c-space direction="column" :size="24">
    <c-space v-for="variant in variants" :key="variant" wrap :size="24">
      <c-badge v-for="status in statuses" :key="status" :variant="variant" :status="status" :content="1"
        ><span
          style="display: inline-block; padding: 12px; border: 1px solid currentColor; border-radius: 4px"
          >Inbox</span
        ></c-badge
      >
    </c-space>
    <c-space wrap
      ><c-badge
        v-for="status in statuses"
        :key="status"
        :status="status"
        variant="outline"
        mode="inline"
        :content="1"
        :description="status"
    /></c-space>
    <c-space wrap
      ><c-badge
        v-for="status in statuses"
        :key="status"
        :status="status"
        variant="outline"
        mode="inline"
        dot
        :content="1"
        :description="status"
    /></c-space>
  </c-space>
</template>
