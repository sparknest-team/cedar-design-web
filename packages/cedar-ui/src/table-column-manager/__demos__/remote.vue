<template>
  <c-button @click="open = true">远程搜索列目录</c-button>
  <c-drawer v-model:visible="open" title="列管理" :width="720" unmount-on-close @ok="open = false">
    <c-table-column-manager
      v-model="keys"
      :options="catalog"
      :load-options="loadOptions"
      :remote-search="remoteSearch"
      :fallback-item="fallbackItem"
    />
  </c-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ColumnCatalog, ColumnCatalogItem } from '@cedar/ui'

const open = ref(false)
const keys = ref(['remoteConfig1'])
const catalog = ref<ColumnCatalog>([])

const allCatalog: ColumnCatalog = [
  {
    label: '远程配置',
    key: 'remote',
    children: [
      { dataIndex: 'remoteConfig1', title: '远程配置1', tip: '远程配置1说明' },
      { dataIndex: 'remoteConfig2', title: '远程配置2' },
    ],
  },
  { dataIndex: 'noGroup1', title: '不分组内容1' },
  { dataIndex: 'noGroup2', title: '不分组内容2' },
  { dataIndex: 'noGroup3', title: '不分组内容3' },
]

const loadOptions = async () => {
  await new Promise((r) => setTimeout(r, 400))
  catalog.value = allCatalog
  return allCatalog
}

const remoteSearch = async (keyword: string) => {
  await new Promise((r) => setTimeout(r, 300))
  const kw = keyword.trim().toLowerCase()
  if (!kw) {
    catalog.value = allCatalog
    return
  }
  catalog.value = allCatalog
    .map((item) => {
      if ('children' in item && item.children) {
        const children = item.children.filter(
          (child) => child.title.toLowerCase().includes(kw) || child.dataIndex.toLowerCase().includes(kw),
        )
        return children.length ? { ...item, children } : null
      }
      const leaf = item as ColumnCatalogItem
      return leaf.title.toLowerCase().includes(kw) || leaf.dataIndex.toLowerCase().includes(kw) ? leaf : null
    })
    .filter(Boolean) as ColumnCatalog
}

const fallbackItem = (dataIndex: string): ColumnCatalogItem => ({
  dataIndex,
  title: dataIndex,
})
</script>
