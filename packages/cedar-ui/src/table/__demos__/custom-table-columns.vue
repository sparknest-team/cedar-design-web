<template>
  <div style="display: flex; justify-content: flex-end; margin-bottom: 8px; gap: 12px">
    <c-link @click="visible = true">列管理</c-link>
    <c-link @click="resetColumns">重置列</c-link>
  </div>

  <c-table v-model:columns="columns" :data="data" :pagination="false" size="xs" />

  <c-drawer v-model:visible="visible" title="列管理" :width="720" unmount-on-close @ok="handleOk">
    <div style="height: calc(100vh - 120px)">
      <c-table-column-manager
        ref="mgrRef"
        v-model="keys"
        v-model:fixed-map="fixedMap"
        :columns="columns"
        :options="catalog"
        :required-keys="['connectorId', 'deviceName']"
      />
    </div>
  </c-drawer>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { stateFromColumns } from '@cedar/ui'
import type {
  ColumnCatalog,
  TableColumnData,
  TableColumnManagerInstance,
} from '@cedar/ui'

const STORAGE_KEY = 'cedar-demo-table-columns'
const visible = ref(false)
const mgrRef = ref<TableColumnManagerInstance>()
const keys = ref<string[]>([])
const fixedMap = ref<Record<string, 'left' | 'right'>>({})

const defaultColumns: TableColumnData[] = [
  { dataIndex: 'connectorId', title: '枪ID', width: 100, fixed: 'left' },
  { dataIndex: 'connectorName', title: '枪名称', width: 120 },
  { dataIndex: 'deviceName', title: '设备名称', width: 140 },
]

const columns = ref<TableColumnData[]>([...defaultColumns])

const catalog: ColumnCatalog = [
  {
    label: '枪基本信息',
    key: 'connectorBasicInfo',
    children: [
      { dataIndex: 'connectorId', title: '枪ID', required: true, tip: '必选列' },
      { dataIndex: 'connectorName', title: '枪名称' },
      { dataIndex: 'connectorNo', title: '枪序号' },
      { dataIndex: 'workingStatus', title: '工作状态' },
      { dataIndex: 'connectStatus', title: '连接状态' },
      { dataIndex: 'parkNo', title: '停车位' },
    ],
  },
  {
    label: '桩基本信息',
    key: 'chargerBasicInfo',
    children: [
      { dataIndex: 'deviceId', title: '设备ID' },
      { dataIndex: 'deviceName', title: '设备名称', required: true },
      { dataIndex: 'lockStatus', title: '地锁' },
      { dataIndex: 'ratedVoltage', title: '额定电压', column: { width: 100 } },
    ],
  },
  {
    label: '其他信息',
    key: 'other',
    children: [
      { dataIndex: 'batteryStatus', title: '电池状态', column: { width: 100 } },
      { dataIndex: 'temperature', title: '温度', column: { width: 80 } },
      { dataIndex: 'current', title: '电流', column: { width: 80 } },
      { dataIndex: 'power', title: '功率', column: { width: 80 } },
      { dataIndex: 'action', title: '操作', column: { fixed: 'right', width: 100 } },
    ],
  },
]

watch(visible, (val) => {
  if (!val) return
  const state = stateFromColumns(columns.value, catalog)
  keys.value = [...state.keys]
  fixedMap.value = { ...state.fixedMap }
})

const handleOk = () => {
  const result = mgrRef.value?.getResult?.()
  if (result) {
    columns.value = result.columns
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          keys: result.keys,
          fixedMap: result.fixedMap,
          widthMap: result.widthMap,
          titleMap: result.titleMap,
          layout: result.layout,
        }),
      )
    } catch {
      // ignore
    }
  }
  visible.value = false
}

const resetColumns = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
  columns.value = [...defaultColumns]
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
