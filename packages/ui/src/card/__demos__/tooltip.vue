<script setup lang="ts">
const title = '项目进度总览：本季度各团队的交付计划与关键里程碑'
const description = '查看各团队的交付时间、任务依赖，以及下个阶段需要关注的里程碑。'
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
    将指针移到标题或说明上，或用 Tab 键聚焦，即可查看全文。
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
