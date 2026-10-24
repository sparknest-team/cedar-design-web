<template>
  <c-radio-group
    type="button"
    v-model="checkedStrategy"
    @change="
      (value) => {
        checkedValues = []
      }
    "
  >
    <c-radio v-for="item in strategyOptions" :key="item?.value" :value="item?.value">
      {{ item?.label }}
    </c-radio>
  </c-radio-group>
  <br />
  <c-typography-text style="margin: 24px 0; display: inline-block">
    Current: {{ checkedValues?.join(' , ') }}
  </c-typography-text>
  <br />
  <c-tree :checkable="true" v-model:checked-values="checkedValues" :checked-strategy="checkedStrategy" :data="treeData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkedValues = ref([])
const checkedStrategy = ref('all')

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

const strategyOptions = [
  {
    value: 'all',
    label: 'show all',
  },
  {
    value: 'parent',
    label: 'show parent',
  },
  {
    value: 'child',
    label: 'show child',
  },
]
</script>
