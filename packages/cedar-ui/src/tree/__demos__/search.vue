<template>
  <div>
    <c-search style="margin-bottom: 8px; max-width: 240px" v-model="searchKey" />
    <c-tree :data="treeData">
      <template #label="nodeData">
        <template v-if="(index = getMatchIndex(nodeData?.title)) < 0">
          {{ nodeData?.title }}
        </template>
        <span v-else>
          {{ nodeData?.label?.substr(0, index) }}
          <span style="color: var(--color-primary-light-4)">
            {{ nodeData?.label?.substr(index, searchKey.length) }} </span
          >{{ nodeData?.label?.substr(index + searchKey.length) }}
        </span>
      </template>
    </c-tree>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

let index

const originTreeData = [
  {
    label: 'Trunk 0-0',
    value: '0-0',
    children: [
      {
        label: 'Branch 0-0-1',
        value: '0-0-1',
        children: [
          {
            label: 'Leaf 0-0-1-1',
            value: '0-0-1-1',
          },
          {
            label: 'Leaf 0-0-1-2',
            value: '0-0-1-2',
          },
        ],
      },
    ],
  },
  {
    label: 'Trunk 0-1',
    value: '0-1',
    children: [
      {
        label: 'Branch 0-1-1',
        value: '0-1-1',
        children: [
          {
            label: 'Leaf 0-1-1-0',
            value: '0-1-1-0',
          },
        ],
      },
      {
        label: 'Branch 0-1-2',
        value: '0-1-2',
        children: [
          {
            label: 'Leaf 0-1-2-0',
            value: '0-1-2-0',
          },
        ],
      },
    ],
  },
]
const searchKey = ref('')
const treeData = computed(() => {
  if (!searchKey.value) return originTreeData
  return searchData(searchKey.value)
})

function searchData(keyword) {
  const loop = (data) => {
    const result = []
    data.forEach((item) => {
      if (item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
        result.push({ ...item })
      } else if (item.children) {
        const filterData = loop(item.children)
        if (filterData.length) {
          result.push({
            ...item,
            children: filterData,
          })
        }
      }
    })
    return result
  }

  return loop(originTreeData)
}

function getMatchIndex(title) {
  if (!searchKey.value) return -1
  return title.toLowerCase().indexOf(searchKey.value.toLowerCase())
}
</script>
