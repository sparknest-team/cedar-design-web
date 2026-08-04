<template>
  <c-space>
    <c-button @click="openDrawer = true">抽屉中管理列</c-button>
    <c-button @click="openDialog = true">弹窗中管理列</c-button>
  </c-space>

  <c-table-column-manager
    v-model:visible="openDrawer"
    v-model="items"
    :columns="columns"
    :options="columnDefinitions"
    :fallback-item="fallbackItem"
    @confirm="applyResult"
  >
    <template #tooltip="{ item }">
      <c-tooltip v-if="item.value === 'areaCompany'" background-color="#fff" :content-style="{ color: 'red' }">
        <div style="margin-left: 4px">
          <c-icon-info-circle />
        </div>
        <template #content>
          <div>{{ item.tip ?? 'tooltip' }}</div>
        </template>
      </c-tooltip>
    </template>
  </c-table-column-manager>

  <c-dialog v-model:show="openDialog" title="列管理" :width="720" :body-padding="false" unmount-on-close>
    <div style="height: 480px">
      <c-table-column-manager
        inline
        v-model:visible="openDialog"
        v-model="items"
        :columns="columns"
        :options="columnDefinitions"
        @confirm="applyResult"
      />
    </div>
  </c-dialog>

  <pre style="margin-top: 16px; font-size: 12px">
items: {{ items }}
columns: {{ columns.map((c) => c.dataIndex).join(', ') }}</pre
  >
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type {
  ColumnDefinition,
  ColumnDefinitions,
  ColumnManagerItem,
  ColumnManagerResult,
  TableColumnData,
} from '@cedar/ui'

const openDrawer = ref(false)
const openDialog = ref(false)

const items = ref<ColumnManagerItem[]>([
  { dataIndex: 'connectorId', fixed: 'left' },
  { dataIndex: 'connectorName' },
  { dataIndex: 'deviceName' },
])

const columns = ref<TableColumnData[]>([
  { dataIndex: 'connectorId', title: '枪ID', width: 100, fixed: 'left' },
  { dataIndex: 'connectorName', title: '枪名称', width: 120 },
  { dataIndex: 'deviceName', title: '设备名称', width: 120 },
])

const columnDefinitions = ref<ColumnDefinitions>([
  {
    title: '基本信息',
    key: 'basic',
    children: [
      {
        dataIndex: 'connectorId',
        title: '枪ID',
        required: true,
        tip: '必选列',
      },
      {
        dataIndex: 'connectorName',
        title: '枪名称',
      },
      {
        dataIndex: 'areaCompany',
        title: '区域公司区域公司区域公司区域公司区域公司区域公司',
        tip: '区域公司说明',
      },
    ],
  },
  {
    title: '设备信息',
    key: 'device',
    children: [
      { dataIndex: 'deviceId', title: '设备ID' },
      { dataIndex: 'deviceName', title: '设备名称' },
      { dataIndex: 'lockStatus', title: '地锁' },
    ],
  },
  { dataIndex: 'workingStatus', title: '工作状态' },
  { dataIndex: 'connectStatus', title: '连接状态' },
])

const fallbackItem = (dataIndex: string): ColumnDefinition => {
  return { dataIndex, title: `${dataIndex}` }
}

const applyResult = (result: ColumnManagerResult) => {
  columns.value = result.columns
  items.value = result.items
}
</script>
