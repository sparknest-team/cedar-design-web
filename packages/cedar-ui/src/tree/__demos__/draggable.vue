<template>
  <c-checkbox v-model="checked" style="margin-bottom: 20px"> checkable </c-checkbox>
  <c-tree class="tree-demo" draggable blockNode :checkable="checked" :data="treeData" @drop="onDrop" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const defaultTreeData = [
  {
    title: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        title: 'Leaf 0-0-1',
        key: '0-0-1',
      },
      {
        title: 'Branch 0-0-2',
        key: '0-0-2',
        disableCheckbox: true,
        children: [
          {
            draggable: false,
            title: 'Leaf 0-0-2-1 (Drag disabled)',
            key: '0-0-2-1',
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
        checkable: false,
        children: [
          {
            title: 'Leaf 0-1-1-1',
            key: '0-1-1-1',
          },
          {
            title: 'Leaf 0-1-1-2',
            key: '0-1-1-2',
          },
        ],
      },
      {
        title: 'Leaf 0-1-2',
        key: '0-1-2',
      },
    ],
  },
]

const treeData = ref(defaultTreeData)
const checkedKeys = ref([])
const checked = ref(false)

function onDrop({ dragNode, dropNode, dropPosition }) {
  const data = treeData.value
  const loop = (data, key, callback) => {
    data.some((item, index, arr) => {
      if (item.key === key) {
        callback(item, index, arr)
        return true
      }
      if (item.children) {
        return loop(item.children, key, callback)
      }
      return false
    })
  }

  loop(data, dragNode.key, (_, index, arr) => {
    arr.splice(index, 1)
  })

  if (dropPosition === 0) {
    loop(data, dropNode.key, (item) => {
      item.children = item.children || []
      item.children.push(dragNode)
    })
  } else {
    loop(data, dropNode.key, (_, index, arr) => {
      arr.splice(dropPosition < 0 ? index : index + 1, 0, dragNode)
    })
  }
}
</script>
