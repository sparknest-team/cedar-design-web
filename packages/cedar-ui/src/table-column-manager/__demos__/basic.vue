<template>
  <c-space>
    <c-button @click="openDrawer = true">抽屉中管理列</c-button>
    <c-button @click="openDialog = true">弹窗中管理列</c-button>
  </c-space>

  <c-drawer v-model:visible="openDrawer" title="列管理" :width="720" unmount-on-close @ok="handleDrawerOk">
    <div style="height: calc(100vh - 120px)">
      <c-table-column-manager
        ref="drawerMgr"
        v-model="keys"
        v-model:fixed-map="fixedMap"
        :columns="columns"
        :options="catalog"
        :required-keys="['connectorId']"
        :fallback-item="fallbackItem"
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
    </div>
  </c-drawer>

  <c-dialog
    v-model:show="openDialog"
    title="列管理"
    :width="720"
    :body-padding="false"
    unmount-on-close
    @confirm="handleDialogOk"
  >
    <div style="height: 480px">
      <c-table-column-manager
        ref="dialogMgr"
        v-model="keys"
        v-model:fixed-map="fixedMap"
        :columns="columns"
        :options="catalog"
        :required-keys="['connectorId']"
      />
    </div>
  </c-dialog>

  <pre style="margin-top: 16px; font-size: 12px">keys: {{ keys }}
fixedMap: {{ fixedMap }}
columns: {{ columns.map((c) => c.dataIndex).join(', ') }}</pre>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ColumnCatalog, ColumnCatalogItem, TableColumnData, TableColumnManagerInstance } from '@cedar/ui'

const openDrawer = ref(false)
const openDialog = ref(false)
const drawerMgr = ref<TableColumnManagerInstance>()
const dialogMgr = ref<TableColumnManagerInstance>()

const keys = ref(['connectorId', 'connectorName', 'deviceName'])
const fixedMap = ref<Record<string, 'left' | 'right'>>({
  connectorId: 'left',
})

const columns = ref<TableColumnData[]>([
  { dataIndex: 'connectorId', title: '枪ID', width: 100, fixed: 'left' },
  { dataIndex: 'connectorName', title: '枪名称', width: 120 },
  { dataIndex: 'deviceName', title: '设备名称', width: 120 },
])

const catalog = ref<ColumnCatalog>([
  {
    label: '基本信息',
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
    label: '设备信息',
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

const fallbackItem = (dataIndex: string): ColumnCatalogItem => {
  return { dataIndex, title: `${dataIndex}` }
}

const applyResult = (mgr?: TableColumnManagerInstance | null) => {
  const result = mgr?.getResult?.()
  if (!result) return
  columns.value = result.columns
  keys.value = result.keys
  fixedMap.value = result.fixedMap
}

const handleDrawerOk = () => {
  applyResult(drawerMgr.value)
  openDrawer.value = false
}

const handleDialogOk = () => {
  applyResult(dialogMgr.value)
  openDialog.value = false
}
</script>
