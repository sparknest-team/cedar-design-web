<template>
  <c-space direction="column" size="md">
    <c-alert type="info" :show-icon="false">
      <code>c-table-column-manager</code> 自身包含抽屉；弹窗场景传入
      <code>inline</code> 后以内联面板形式放入自定义容器。
    </c-alert>

    <div style="display: flex; justify-content: flex-end; gap: 8px">
      <c-button type="outline" @click="openAs('drawer')">抽屉管理列</c-button>
      <c-button type="outline" @click="openAs('dialog')">弹窗管理列</c-button>
    </div>

    <c-table v-model:columns="columns" :data="data" :pagination="false" size="xs" />

    <!-- 抽屉模式：组件自带抽屉 -->
    <c-table-column-manager
      v-if="container === 'drawer'"
      v-model:visible="visible"
      v-model="items"
      :columns="columns"
      :options="columnDefinitions"
      drawer-title="列管理"
      @confirm="handleOk"
    />

    <!-- 弹窗模式：inline 内联面板放入 c-dialog -->
    <c-dialog v-else v-model:show="visible" title="列管理" :width="720" :body-padding="false" unmount-on-close>
      <div style="height: 480px">
        <c-table-column-manager
          inline
          v-model:visible="visible"
          v-model="items"
          :columns="columns"
          :options="columnDefinitions"
          @confirm="handleOk"
        />
      </div>
    </c-dialog>
  </c-space>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { stateFromColumns } from '@cedar/ui'
import type { ColumnDefinitions, ColumnManagerResult, TableColumnData } from '@cedar/ui'

const visible = ref(false)
const container = ref<'drawer' | 'dialog'>('drawer')
const items = ref([])

const columns = ref<TableColumnData[]>([
  { dataIndex: 'name', title: '姓名', width: 120, fixed: 'left' },
  { dataIndex: 'salary', title: '薪资', width: 100 },
  { dataIndex: 'address', title: '地址' },
])

const columnDefinitions: ColumnDefinitions = [
  {
    title: '基础信息',
    key: 'basic',
    children: [
      { dataIndex: 'name', title: '姓名', required: true, tip: '必选列' },
      { dataIndex: 'salary', title: '薪资' },
      { dataIndex: 'email', title: '邮箱' },
    ],
  },
  {
    title: '扩展信息',
    key: 'extra',
    children: [
      { dataIndex: 'address', title: '地址' },
      { dataIndex: 'department', title: '部门' },
      {
        dataIndex: 'action',
        title: '操作',
      },
    ],
  },
]

const syncManagerState = () => {
  const state = stateFromColumns(columns.value, columnDefinitions)
  items.value = state.items
}

watch(visible, (val) => {
  if (val) syncManagerState()
})

const openAs = (type: 'drawer' | 'dialog') => {
  container.value = type
  visible.value = true
}

const handleOk = (result: ColumnManagerResult) => {
  columns.value = result.columns
}
</script>
