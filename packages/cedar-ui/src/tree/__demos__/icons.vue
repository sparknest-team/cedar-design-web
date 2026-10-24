<template>
  <c-tree :data="treeData" show-line>
    <template #switcher-icon="{ children }">
      <c-icon-down v-if="children?.length" />
      <c-icon-star v-else />
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
        switcherIcon: () => h(IconDriveFile),
      },
      {
        label: 'Leaf',
        value: 'node5',
        switcherIcon: () => h(IconDriveFile),
      },
    ],
  },
]
</script>
