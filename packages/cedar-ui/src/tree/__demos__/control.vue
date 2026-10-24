<template>
  <c-button-group style="margin-bottom: 20px">
    <c-button status="primary" @click="toggleChecked">
      {{ checkedValues?.length ? 'deselect all' : 'select all' }}
    </c-button>
    <c-button status="primary" @click="toggleExpanded">
      {{ expandedValues?.length ? 'fold' : 'unfold' }}
    </c-button>
  </c-button-group>
  <c-tree
    :checkable="true"
    v-model:selected-values="selectedValues"
    v-model:checked-values="checkedValues"
    v-model:expanded-values="expandedValues"
    @select="onSelect"
    @check="onCheck"
    @expand="onExpand"
    :data="treeData" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const allCheckedValues = ['0-0', '0-0-1', '0-0-2', '0-0-2-1', '0-1', '0-1-1', '0-1-2']
const allExpandedValues = ['0-0', '0-1', '0-0-2']
const selectedValues = ref([])
const checkedValues = ref([])
const expandedValues = ref([])

function toggleChecked() {
  checkedValues.value = checkedValues?.value.length ? [] : allCheckedValues
}

function toggleExpanded() {
  expandedValues.value = expandedValues?.value.length ? [] : allExpandedValues
}

function onSelect(newSelectedValues, event) {
  console.log('select: ', newSelectedValues, event)
}

function onCheck(newCheckedValues, event) {
  console.log('check: ', newCheckedValues, event)
}

function onExpand(newExpandedValues, event) {
  console.log('expand: ', newExpandedValues, event)
}

const treeData = [
  {
    label: 'Trunk 0-0',
    value: '0-0',
    children: [
      {
        label: 'Leaf 0-0-1',
        value: '0-0-1',
      },
      {
        label: 'Branch 0-0-2',
        value: '0-0-2',
        children: [
          {
            label: 'Leaf 0-0-2-1',
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
        label: 'Leaf 0-1-1',
        value: '0-1-1',
      },
      {
        label: 'Leaf 0-1-2',
        value: '0-1-2',
      },
    ],
  },
]
</script>
