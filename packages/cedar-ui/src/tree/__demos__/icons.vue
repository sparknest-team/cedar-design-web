<template>
  <c-tree :data="treeData" show-line>
    <template #switcher-icon="{ isLeaf }">
      <c-icon-down v-if="!isLeaf" />
      <c-icon-star v-if="isLeaf" />
    </template>
  </c-tree>
</template>

<script lang="ts" setup>
import { h } from 'vue'

const treeData = [
  {
    title: 'Trunk',
    key: 'node1',
    children: [
      {
        title: 'Leaf',
        key: 'node2',
      },
    ],
  },
  {
    title: 'Trunk',
    key: 'node3',
    children: [
      {
        title: 'Leaf',
        key: 'node4',
        switcherIcon: () => h(IconDriveFile),
      },
      {
        title: 'Leaf',
        key: 'node5',
        switcherIcon: () => h(IconDriveFile),
      },
    ],
  },
]
</script>
