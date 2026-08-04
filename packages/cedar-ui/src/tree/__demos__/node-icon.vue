<template>
  <c-tree :data="treeData">
    <template #icon>
      <c-icon-star />
    </template>
  </c-tree>
</template>

<script lang="ts" setup>
import { IconDriveFile } from '@cedar/ui'
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
        icon: () => h(IconDriveFile),
      },
      {
        title: 'Leaf',
        key: 'node5',
        icon: () => h(IconDriveFile),
      },
    ],
  },
]
</script>
