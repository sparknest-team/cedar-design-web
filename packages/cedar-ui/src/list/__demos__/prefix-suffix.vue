<template>
  <c-list>
    <c-list-item v-for="item in items" :key="item.title">
      <template #prefix>
        <c-avatar shape="square">{{ item.initial }}</c-avatar>
      </template>
      <template #suffix>
        <c-button size="sm">编辑</c-button>
      </template>
      <div class="list-item-title">{{ item.title }}</div>
      <div class="list-item-description">{{ item.description }}</div>
    </c-list-item>
  </c-list>
</template>

<script lang="ts" setup>
const items = [
  {
    initial: 'B',
    title: 'Beijing Bytedance Technology Co., Ltd.',
    description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
  },
  {
    initial: 'T',
    title: 'Beijing Toutiao Technology Co., Ltd.',
    description: 'Toutiao is a content platform under ByteDance.',
  },
  {
    initial: 'V',
    title: 'Beijing Volcengine Technology Co., Ltd.',
    description: 'Volcengine provides cloud and AI infrastructure.',
  },
]
</script>

<style scoped>
.list-item-title {
  font-weight: var(--c-font-weight-500);
}

.list-item-description {
  margin-top: 4px;
  color: var(--c-color-text-2);
}
</style>
