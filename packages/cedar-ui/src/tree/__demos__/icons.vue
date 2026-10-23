<template>
  <c-tree :data="treeData" show-line>
    <template #switcher-icon="{ children }">
      <c-icon-down v-if="children?.length" />
      <c-icon-star v-else />
    </template>
  </c-tree>
</template>

<script lang="ts" setup>
import { IconDriveFile } from '@cedarjs/icons-vue'
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
