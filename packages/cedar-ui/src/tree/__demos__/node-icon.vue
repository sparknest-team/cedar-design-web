<template>
  <c-tree :data="treeData">
    <template #icon>
      <c-icon-star />
    </template>
  </c-tree>
</template>

<script lang="ts" setup>
import { IconDriveFile } from '@cedar-design/icons-vue'
import { h } from 'vue'

const treeData = [
  {
    label: 'Trunk',
    value: 'node1',
    children: [
      {
        label: 'Leaf',
        value: 'node2',
      },
    ],
  },
  {
    label: 'Trunk',
    value: 'node3',
    children: [
      {
        label: 'Leaf',
        value: 'node4',
        icon: () => h(IconDriveFile),
      },
      {
        label: 'Leaf',
        value: 'node5',
        icon: () => h(IconDriveFile),
      },
    ],
  },
]
</script>
