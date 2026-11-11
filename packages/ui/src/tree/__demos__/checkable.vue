<template>
  <c-checkbox
    style="margin-bottom: 24px"
    v-model="checkStrictly"
    @change="
      () => {
        checkedValues = []
      }
    "
  >
    checkStrictly
  </c-checkbox>
  <c-tree :checkable="true" v-model:checked-values="checkedValues" :check-strictly="checkStrictly" :data="treeData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkedValues = ref([])
const checkStrictly = ref(false)

const treeData = [
  {
    label: 'Trunk 0-0',
    value: '0-0',
    children: [
      {
        label: 'Leaf',
        value: '0-0-1',
      },
      {
        label: 'Branch 0-0-2',
        value: '0-0-2',
        disabled: true,
        children: [
          {
            label: 'Leaf',
            value: '0-0-2-1',
          },
          {
            label: 'Leaf',
            value: '0-0-2-2',
            disableCheckbox: true,
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
            label: 'Leaf ',
            value: '0-1-1-1',
          },
          {
            label: 'Leaf ',
            value: '0-1-1-2',
          },
        ],
      },
      {
        label: 'Leaf',
        value: '0-1-2',
      },
    ],
  },
]
</script>
