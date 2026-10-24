<template>
  <c-transfer :data="transferData" :default-value="value">
    <template #source="{ data, selectedKeys, onSelect }">
      <c-tree
        :checkable="true"
        checked-strategy="child"
        :checked-values="selectedKeys"
        :data="getTreeData(data)"
        @check="onSelect"
      />
    </template>
  </c-transfer>
</template>

<script lang="ts" setup>
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
          {
            label: 'Leaf 0-0-2-2',
            value: '0-0-2-2',
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
            label: 'Leaf 0-1-1-1',
            value: '0-1-1-1',
          },
          {
            label: 'Leaf 0-1-1-2',
            value: '0-1-1-2',
          },
        ],
      },
      {
        label: 'Leaf 0-1-2',
        value: '0-1-2',
      },
    ],
  },
]

const getTransferData = (treeData = [], transferDataSource = []) => {
  treeData.forEach((item) => {
    if (item.children) getTransferData(item.children, transferDataSource)
    else transferDataSource.push({ label: item.label, value: item.value })
  })
  return transferDataSource
}

const getTreeData = (data = []) => {
  const values = data.map((item) => item.value)

  const travel = (_treeData = []) => {
    const treeDataSource = []
    _treeData.forEach((item) => {
      if (item.children || values.includes(item.value)) {
        treeDataSource.push({ label: item.label, value: item.value, children: travel(item.children) })
      }
    })
    return treeDataSource
  }

  return travel(treeData)
}

const transferData = getTransferData(treeData)

const value = [{ value: '0-0-2-1' }]
</script>
