<template>
  <div style="width: 500px; padding: 2px; overflow: auto">
    <c-space wrap>
      <c-checkbox v-model="leafChecksOnly">Leaf checkboxes only</c-checkbox>
      <c-checkbox v-model="leafSelectionOnly">Leaf selection only</c-checkbox>
      <c-checkbox v-model="strict">Strict checks</c-checkbox>
      <c-tag>Checked: {{ checkedValues.join(', ') || '-' }}</c-tag>
      <c-tag>Selected: {{ selectedValues.join(', ') || '-' }}</c-tag>
    </c-space>
    <c-tree
      :block-node="true"
      :checkable="leafChecksOnly ? isLeafNode : true"
      :selectable="leafSelectionOnly ? isLeafNode : true"
      :check-strictly="strict"
      :data="treeData"
      @check="keys => checkedValues = keys"
      @select="keys => selectedValues = keys"
    >
      <template #extra="nodeData">
        <c-button
          variant="text"
          size="xs"
          :aria-label="'Add child to ' + nodeData.title + ' (' + nodeData.key + ')'"
          style="position: absolute; right: 8px; top: 2px"
          @click.stop="onIconClick(nodeData)"
        >
          <template #icon><c-icon-plus /></template>
        </c-button>
      </template>
    </c-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const leafChecksOnly = ref(false)
const leafSelectionOnly = ref(false)
const strict = ref(false)
const checkedValues = ref<(string | number)[]>([])
const selectedValues = ref<(string | number)[]>([])
const isLeafNode = (_node: unknown, info: { isLeaf: boolean }) => info.isLeaf

function onIconClick(nodeData) {
  const children = nodeData.children || []
  children.push({
    label: 'new tree node',
    value: nodeData.key + '-' + (children.length + 1),
  })
  nodeData.children = children

  treeData.value = [...treeData.value]
}

const treeData = ref([
  {
    label: 'Trunk',
    value: '0-0',
    children: [
      {
        label: 'Leaf',
        value: '0-0-1',
      },
      {
        label: 'Branch',
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
    label: 'Trunk',
    value: '0-1',
    children: [
      {
        label: 'Branch',
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
])
</script>
