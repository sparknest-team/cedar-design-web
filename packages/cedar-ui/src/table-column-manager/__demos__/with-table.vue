<template>
  <c-space direction="column" size="md">
    <c-alert type="info" :show-icon="false">
      外部控制抽屉 / 弹窗容器，确认后用 <code>getResult()</code> 回写
      <code>v-model:columns</code>。
    </c-alert>

    <div style="display: flex; justify-content: flex-end; gap: 8px">
      <c-button type="outline" @click="openAs('drawer')">抽屉管理列</c-button>
      <c-button type="outline" @click="openAs('dialog')">弹窗管理列</c-button>
    </div>

    <c-table v-model:columns="columns" :data="data" :pagination="false" size="xs" />

    <c-drawer
      v-if="container === 'drawer'"
      v-model:visible="visible"
      title="列管理"
      :width="720"
      unmount-on-close
      @ok="handleOk"
    >
      <div style="height: calc(100vh - 120px)">
        <c-table-column-manager
          ref="mgrRef"
          v-model="keys"
          v-model:fixed-map="fixedMap"
          :columns="columns"
          :options="catalog"
          :required-keys="['name']"
        />
      </div>
    </c-drawer>

    <c-dialog
      v-else
      v-model:show="visible"
      title="列管理"
      :width="720"
      :body-padding="false"
      unmount-on-close
      @confirm="handleOk"
    >
      <div style="height: 480px">
        <c-table-column-manager
          ref="mgrRef"
          v-model="keys"
          v-model:fixed-map="fixedMap"
          :columns="columns"
          :options="catalog"
          :required-keys="['name']"
        />
      </div>
    </c-dialog>
  </c-space>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { stateFromColumns } from '@cedar/ui'
import type {
  ColumnCatalog,
  TableColumnData,
  TableColumnManagerInstance,
} from '@cedar/ui'

const visible = ref(false)
const container = ref<'drawer' | 'dialog'>('drawer')
const mgrRef = ref<TableColumnManagerInstance>()
const keys = ref<string[]>([])
const fixedMap = ref<Record<string, 'left' | 'right'>>({})

const columns = ref<TableColumnData[]>([
  { dataIndex: 'name', title: '姓名', width: 120, fixed: 'left' },
  { dataIndex: 'salary', title: '薪资', width: 100 },
  { dataIndex: 'address', title: '地址', width: 200 },
])

const catalog: ColumnCatalog = [
  {
    label: '基础信息',
    key: 'basic',
    children: [
      { dataIndex: 'name', title: '姓名', required: true, tip: '必选列' },
      { dataIndex: 'salary', title: '薪资' },
      { dataIndex: 'email', title: '邮箱' },
    ],
  },
  {
    label: '扩展信息',
    key: 'extra',
    children: [
      { dataIndex: 'address', title: '地址' },
      { dataIndex: 'department', title: '部门' },
      { dataIndex: 'action', title: '操作', column: { fixed: 'right', width: 100 } },
    ],
  },
]

const syncManagerState = () => {
  const state = stateFromColumns(columns.value, catalog)
  keys.value = [...state.keys]
  fixedMap.value = { ...state.fixedMap }
}

watch(visible, (val) => {
  if (val) syncManagerState()
})

const openAs = (type: 'drawer' | 'dialog') => {
  container.value = type
  visible.value = true
}

const handleOk = () => {
  const result = mgrRef.value?.getResult?.()
  if (result) {
    columns.value = result.columns
  }
  visible.value = false
}

const data = ref([
  {
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    department: '设计',
    action: '编辑',
  },
  {
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
    department: '研发',
    action: '编辑',
  },
])
</script>
