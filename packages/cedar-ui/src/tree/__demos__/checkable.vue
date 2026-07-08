<template>
  <c-checkbox
    style="margin-bottom: 24px"
    v-model="checkStrictly"
    @change="
      () => {
        checkedKeys = []
      }
    "
  >
    checkStrictly
  </c-checkbox>
  <c-tree :checkable="true" v-model:checked-keys="checkedKeys" :check-strictly="checkStrictly" :data="treeData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkedKeys = ref([])
const checkStrictly = ref(false)

const treeData = [
  {
    title: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        title: 'Leaf',
        key: '0-0-1',
      },
      {
        title: 'Branch 0-0-2',
        key: '0-0-2',
        disabled: true,
        children: [
          {
            title: 'Leaf',
            key: '0-0-2-1',
          },
          {
            title: 'Leaf',
            key: '0-0-2-2',
            disableCheckbox: true,
          },
        ],
      },
    ],
  },
  {
    title: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        title: 'Branch 0-1-1',
        key: '0-1-1',
        children: [
          {
            title: 'Leaf ',
            key: '0-1-1-1',
          },
          {
            title: 'Leaf ',
            key: '0-1-1-2',
          },
        ],
      },
      {
        title: 'Leaf',
        key: '0-1-2',
      },
    ],
  },
]
</script>
