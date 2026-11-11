<template>
  <c-tree :data="treeData" :load-more="loadMore" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const treeData = ref([
  {
    label: 'Trunk 0-0',
    value: '0-0',
  },
  {
    label: 'Trunk 0-1',
    value: '0-1',
    children: [
      {
        label: 'Branch 0-1-1',
        value: '0-1-1',
      },
    ],
  },
])

const loadMore = (nodeData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      nodeData.children = [{ label: `leaf`, value: `${nodeData.value}-1`, isLeaf: true }]
      resolve()
    }, 1000)
  })
}
</script>
