<template>
  <c-checkbox
    style="margin-bottom: 24px"
    v-model="multiple"
    @change="
      () => {
        selectedValues = []
      }
    "
  >
    multiple
  </c-checkbox>
  <br />
  <c-typography-text> Current: {{ selectedValues?.join(' , ') }} </c-typography-text>
  <br />
  <c-tree v-model:selected-values="selectedValues" :multiple="multiple" :data="treeData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedValues = ref([])
const multiple = ref(true)
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
        children: [
          {
            label: 'Leaf',
            value: '0-0-2-1',
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
            label: 'Leaf',
            value: '0-1-1-1',
          },
          {
            label: 'Leaf',
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
