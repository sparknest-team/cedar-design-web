<template>
  <c-space direction="column" size="md">
    <c-alert type="info" :show-icon="false">
      弹窗候选列由 <code>columnSource.search</code> 远程搜索；恢复缓存遇到本地未知列时，通过
      <code>columnSource.resolve</code> 批量反显。远程接口只返回 dataIndex、title 和分组信息。
    </c-alert>

    <div class="demo-toolbar">
      <c-button status="secondary" size="sm" @click="open">远程管理列</c-button>
      <c-link @click="resetToDefault">恢复本地默认列</c-link>
    </div>

    <c-table v-model:columns="columns" :data="data" :pagination="false" size="xs" />
    <c-table-column-manager v-bind="managerProps" />
  </c-space>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTableColumnManager } from '@cedar-design/ui'
import type { ColumnDefinition, ColumnDefinitionSource, ManagedTableColumn } from '@cedar-design/ui'

const defaultColumns: ManagedTableColumn[] = [
  { dataIndex: 'id', title: '编号', width: 100, fixed: 'left', manager: { required: true } },
  { dataIndex: 'name', title: '名称', minWidth: 180 },
]

// 模拟服务端保存的轻量字段目录。
const remoteFields: Array<ColumnDefinition & { group?: string }> = [
  { dataIndex: 'id', title: '编号', group: '基础信息' },
  { dataIndex: 'name', title: '名称', group: '基础信息' },
  { dataIndex: 'owner', title: '负责人', group: '基础信息' },
  { dataIndex: 'remoteConfig1', title: '远程配置 1', group: '远程配置' },
  { dataIndex: 'remoteConfig2', title: '远程配置 2', group: '远程配置' },
  { dataIndex: 'remoteStatus', title: '远程状态', group: '远程配置' },
]

const wait = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration))
const groupDefinitions = (items: typeof remoteFields) =>
  [...new Set(items.map((item) => item.group ?? '其他'))].map((group) => ({
    key: group,
    title: group,
    children: items
      .filter((item) => (item.group ?? '其他') === group)
      .map(({ group: _group, ...definition }) => definition),
  }))

const columnSource: ColumnDefinitionSource = {
  async search({ keyword }) {
    await wait(300)
    const normalized = keyword.trim().toLowerCase()
    const matched = normalized
      ? remoteFields.filter(
          (item) => item.title.toLowerCase().includes(normalized) || item.dataIndex.toLowerCase().includes(normalized)
        )
      : remoteFields
    return { items: groupDefinitions(matched), total: matched.length }
  },
  async resolve(dataIndexes) {
    await wait(200)
    const keys = new Set(dataIndexes)
    return remoteFields.filter((item) => keys.has(item.dataIndex)).map(({ group: _group, ...item }) => item)
  },
}

const { columns, managerProps, open, restore, resetToDefault } = useTableColumnManager({
  defaultColumns,
  columnSource,
  columnDefaults: { width: 140, ellipsis: true },
  createColumn: (definition) =>
    definition.dataIndex === 'remoteStatus'
      ? { dataIndex: definition.dataIndex, title: definition.title, width: 110 }
      : { dataIndex: definition.dataIndex, title: definition.title },
})

onMounted(async () => {
  // 模拟缓存中包含一个不在本地 defaultColumns 里的远程列。
  await restore({
    version: 2,
    items: [{ dataIndex: 'id', fixed: 'left' }, { dataIndex: 'name' }, { dataIndex: 'remoteConfig2' }],
  })
})

const data = ref([
  {
    id: 'T-001',
    name: '远程字段示例',
    owner: '张三',
    remoteConfig1: '配置 A',
    remoteConfig2: '配置 B',
    remoteStatus: '已同步',
  },
])
</script>

<style scoped>
.demo-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
