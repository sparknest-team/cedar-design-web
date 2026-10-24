<template>
  <div style="display: flex; justify-content: flex-end; margin-bottom: 8px; gap: 12px">
    <c-link @click="open">列管理</c-link>
    <c-link @click="resetColumns">重置列</c-link>
  </div>

  <c-table v-model:columns="columns" :data="data" :pagination="false" size="xs" />

  <c-table-column-manager v-bind="managerProps" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useTableColumnManager } from '@cedar-design/ui'
import type { ColumnDefinitions, ManagedTableColumn } from '@cedar-design/ui'

const STORAGE_KEY = 'cedar-demo-table-columns'
let storage: Storage | undefined
const storageReady = ref(false)

const defaultColumns: ManagedTableColumn[] = [
  {
    dataIndex: 'connectorId',
    title: '枪ID',
    width: 100,
    fixed: 'left',
    manager: { required: true },
  },
  { dataIndex: 'connectorName', title: '枪名称', width: 120 },
  { dataIndex: 'deviceName', title: '设备名称', width: 140, manager: { required: true } },
]

const columnDefinitions: ColumnDefinitions = [
  {
    title: '枪基本信息',
    key: 'connectorBasicInfo',
    children: [
      {
        dataIndex: 'connectorId',
        title: '枪ID',
        tip: '必选列',
      },
      { dataIndex: 'connectorName', title: '枪名称' },
      { dataIndex: 'connectorNo', title: '枪序号' },
      { dataIndex: 'workingStatus', title: '工作状态' },
      { dataIndex: 'connectStatus', title: '连接状态' },
      { dataIndex: 'parkNo', title: '停车位' },
    ],
  },
  {
    title: '桩基本信息',
    key: 'chargerBasicInfo',
    children: [
      { dataIndex: 'deviceId', title: '设备ID' },
      { dataIndex: 'deviceName', title: '设备名称', tip: '必选规则来自 defaultColumns' },
      { dataIndex: 'lockStatus', title: '地锁' },
      { dataIndex: 'ratedVoltage', title: '额定电压' },
    ],
  },
  {
    title: '其他信息',
    key: 'other',
    children: [
      { dataIndex: 'batteryStatus', title: '电池状态' },
      { dataIndex: 'temperature', title: '温度' },
      { dataIndex: 'current', title: '电流' },
      { dataIndex: 'power', title: '功率' },
      { dataIndex: 'action', title: '操作' },
    ],
  },
]

const { columns, state, restore, managerProps, open, resetToDefault } = useTableColumnManager({
  defaultColumns,
  columnDefinitions,
  columnDefaults: { width: 110, ellipsis: true },
  createColumn: (definition) => ({
    dataIndex: definition.dataIndex,
    title: definition.title,
    ...(definition.dataIndex === 'action' ? { width: 100, fixed: 'right' } : {}),
  }),
})

onMounted(async () => {
  storage = window.localStorage
  try {
    const raw = storage.getItem(STORAGE_KEY)
    if (raw) await restore(JSON.parse(raw))
  } catch {
    storage.removeItem(STORAGE_KEY)
  } finally {
    storageReady.value = true
  }
})

watch(
  state,
  (value) => {
    if (!storageReady.value) return
    storage?.setItem(STORAGE_KEY, JSON.stringify(value))
  },
  { deep: true }
)

const resetColumns = () => {
  try {
    storage?.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
  resetToDefault()
}

const data = ref([
  {
    connectorId: '1',
    connectorName: 'Jane Doe',
    connectorNo: '001',
    workingStatus: '正常',
    connectStatus: '连接中',
    parkNo: 'A1',
    deviceId: 'D001',
    deviceName: 'Device A',
    lockStatus: '解锁',
    ratedVoltage: '220V',
    batteryStatus: '良好',
    temperature: '36',
    current: '10A',
    power: '2kW',
    action: '详情',
  },
])
</script>
