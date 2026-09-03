<template>
  <h3 :style="{ color: 'var(--c-color-text-2)' }">10000 items</h3>
  <c-list
    :style="{ width: `600px` }"
    :virtualListProps="{
      height: 560,
    }"
    :data="list"
  >
    <template #item="{ item, index }">
      <c-list-item :key="index">
        <template #prefix>
          <c-avatar shape="square">A</c-avatar>
        </template>
        <div>{{ item.title }}</div>
        <div class="list-item-description">{{ item.description }}</div>
      </c-list-item>
    </template>
  </c-list>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const list = reactive(
  Array(10000)
    .fill(null)
    .map((_, index) => {
      const prefix = `0000${index}`.slice(-5)
      return {
        title: 'Beijing Bytedance Technology Co., Ltd.',
        description: `(${prefix}) Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.`,
      }
    }),
)
</script>

<style scoped>
.list-item-description {
  margin-top: 4px;
  color: var(--c-color-text-2);
}
</style>
