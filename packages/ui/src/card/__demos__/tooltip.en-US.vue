<script setup lang="ts">
const title = 'Project overview with a long title that does not fit on one line'
const description = 'Review the delivery schedule, dependencies and upcoming milestones for each team.'
</script>

<template>
  <c-card style="width: 100%; max-width: 280px">
    <template #title>
      <c-tooltip :content="title">
        <span tabindex="0" class="long-text">{{ title }}</span>
      </c-tooltip>
    </template>
    <template #description>
      <c-tooltip :content="description">
        <span tabindex="0" class="long-text">{{ description }}</span>
      </c-tooltip>
    </template>
    Hover over or focus the title or description to read the full text.
  </c-card>
</template>

<style scoped>
.long-text {
  display: block;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
