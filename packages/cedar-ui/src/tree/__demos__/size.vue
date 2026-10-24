<template>
  <div style="margin-bottom: 20px">
    <c-radio-group v-model="size" type="button">
      <c-radio value="xs">xs</c-radio>
      <c-radio value="sm">sm</c-radio>
      <c-radio value="md">md</c-radio>
      <c-radio value="lg">lg</c-radio>
      <c-radio value="xl">xl</c-radio>
    </c-radio-group>
  </div>
  <c-tree style="margin-right: 20px" :blockNode="true" :checkable="true" :size="size" :data="treeData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref('md')
const treeData = [
  {
    label: 'Trunk 0-0',
    value: '0-0',
    children: [
      {
        label: 'Branch 0-0-0',
        value: '0-0-0',
        children: [
          {
            label: 'Leaf',
            value: '0-0-0-0',
          },
          {
            label: 'Leaf',
            value: '0-0-0-1',
          },
        ],
      },
      {
        label: 'Branch 0-0-1',
        value: '0-0-1',
        children: [
          {
            label: 'Leaf',
            value: '0-0-1-0',
          },
        ],
      },
    ],
  },
]
</script>
