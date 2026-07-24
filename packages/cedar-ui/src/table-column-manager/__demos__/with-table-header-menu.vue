<template>
  <c-space direction="column" size="md">
    <c-alert type="info" :show-icon="false">
      Table 只提供扩展点：<code>extra-column</code>、<code>#header-cell-actions</code>、
      <code>v-model:columns</code> / <code>@column-resize</code>。列管理 UI 与算法在外部组合。列配置 mock
      会写入 <code>localStorage</code>，刷新可恢复；点「重置」清空。
    </c-alert>

    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <span style="color: var(--c-color-text-3)">本地缓存：</span>
      <c-tag size="sm" :color="saveStatus === 'saved' ? 'green' : saveStatus === 'saving' ? 'blue' : 'gray'">
        {{ saveStatusLabel }}
      </c-tag>
      <c-button type="secondary" size="sm" @click="managerVisible = true">列管理</c-button>
      <c-link @click="resetAll">重置</c-link>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <span style="color: var(--c-color-text-3)">当前叶子列（来自 columns 变更）：</span>
      <c-tag v-for="col in leafColumns" :key="col.dataIndex" size="sm" color="gray">
        {{ col.title }}
        <template v-if="col.width"> · {{ col.width }}px</template>
        <template v-if="col.fixed">（{{ col.fixed === 'left' ? '左冻' : '右冻' }}）</template>
      </c-tag>
    </div>

    <c-table
      v-model:columns="columns"
      extra-column
      column-resizable
      :data="data"
      :pagination="false"
      :bordered="{ cell: true, headerCell: true }"
      size="xs"
      @column-resize="handleColumnResize"
      @update:columns="handleColumnsUpdate"
    >
      <template #extra-column-header>
        <span class="c-table-extra-column-icon" @click="managerVisible = true">
          <c-icon-settings />
        </span>
      </template>
      <template #extra-column-cell />

      <template #header-cell-actions="{ column, dataIndex }">
        <c-dropdown trigger="click" position="br">
          <span class="c-table-header-cell-action" @click.stop>
            <c-icon-more />
          </span>
          <template #content>
            <c-doption @click="openInsert(dataIndex, 'left')">向左插入列</c-doption>
            <c-doption @click="openInsert(dataIndex, 'right')">向右插入列</c-doption>
            <c-doption :disabled="column.fixed === 'left'" @click="setColumnFixed(dataIndex, 'left')">
              冻结到左侧
            </c-doption>
            <c-doption :disabled="column.fixed === 'right'" @click="setColumnFixed(dataIndex, 'right')">
              冻结到右侧
            </c-doption>
            <c-doption :disabled="!column.fixed" @click="setColumnFixed(dataIndex)">
              取消冻结
            </c-doption>
            <c-doption @click="openEdit(dataIndex)">编辑列</c-doption>
            <c-doption :disabled="dataIndex === 'priority'" @click="removeColumn(dataIndex)">
              删除列
            </c-doption>
          </template>
        </c-dropdown>
      </template>

      <template #priorityTitle>
        <span style="display: inline-flex; align-items: center; gap: 4px">
          <span
            style="
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: rgb(var(--c-danger-6));
            "
          />
          优先级
        </span>
      </template>
      <template #priority="{ record }">
        <c-tag :color="priorityColor(record.priority)" size="sm">{{ record.priority }}</c-tag>
      </template>
      <template #status="{ record }">
        <c-tag :color="statusColor(record.status)" size="sm">{{ record.status }}</c-tag>
      </template>
      <template #action>
        <c-link>详情</c-link>
      </template>
    </c-table>

    <c-drawer
      v-model:visible="managerVisible"
      title="自定义列"
      :width="720"
      unmount-on-close
      @ok="handleManagerOk"
    >
      <div style="height: calc(100vh - 120px)">
        <c-table-column-manager
          ref="managerRef"
          v-model="managerKeys"
          v-model:fixed-map="managerFixedMap"
          :columns="columns"
          :options="catalog"
          :required-keys="['priority']"
        />
      </div>
    </c-drawer>

    <c-dialog
      v-model:show="insertVisible"
      :title="insertSide === 'left' ? '向左插入列' : '向右插入列'"
      :width="480"
      unmount-on-close
      @confirm="handleInsertOk"
    >
      <div v-if="!insertableItems.length" style="color: var(--c-color-text-3)">没有可插入的列</div>
      <c-checkbox-group v-else v-model="insertSelected" direction="vertical">
        <c-checkbox v-for="item in insertableItems" :key="item.dataIndex" :value="item.dataIndex">
          {{ item.title }}
        </c-checkbox>
      </c-checkbox-group>
    </c-dialog>

    <c-dialog v-model:show="editVisible" title="编辑列" :width="480" unmount-on-close @confirm="handleEditOk">
      <div style="display: flex; flex-direction: column; gap: 16px">
        <div>
          <div style="margin-bottom: 8px">一级分组标题</div>
          <c-input v-model="editGroupTitle" placeholder="留空表示不分组" clearable />
          <div style="margin-top: 6px; color: var(--c-color-text-3); font-size: 12px">
            相邻列的一级标题相同时会自动合并为同一分组
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px">列名称</div>
          <c-input v-model="editColumnTitle" placeholder="请输入列名称" />
        </div>
      </div>
    </c-dialog>
  </c-space>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import {
  applyColumnEdit,
  applyColumnFixed,
  buildColumnsFromState,
  buildColumnsResult,
  flattenCatalog,
  getColumnEditInitialValues,
  mapLeafColumns,
  stateFromColumns,
} from '@cedar/ui'
import type {
  ColumnCatalog,
  ColumnManagerState,
  TableColumnData,
  TableColumnManagerInstance,
  TableFilterable,
} from '@cedar/ui'

type LeafInfo = { dataIndex: string; title: string; width?: number; fixed?: 'left' | 'right' }

const STORAGE_KEY = 'cedar-demo:table-column-manager:with-table-header-menu'

const saveStatus = ref<'idle' | 'saving' | 'saved'>('idle')
let saveHintTimer: ReturnType<typeof setTimeout> | undefined

const saveStatusLabel = computed(() => {
  if (saveStatus.value === 'saving') return '正在保存…'
  if (saveStatus.value === 'saved') return '已写入 localStorage'
  return '等待变动'
})

const readStoredState = (): ColumnManagerState | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as ColumnManagerState
  } catch {
    return null
  }
}

const writeStoredState = (state: ColumnManagerState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

const clearStoredState = () => {
  localStorage.removeItem(STORAGE_KEY)
}

/** 从 columns 树收集叶子信息（demo 内本地函数，不依赖 flatten 公共 API） */
const collectLeaves = (cols: TableColumnData[] = []): LeafInfo[] => {
  const result: LeafInfo[] = []
  const walk = (list: TableColumnData[]) => {
    list.forEach((col) => {
      if (col.children?.length) {
        walk(col.children)
      } else if (col.dataIndex) {
        result.push({
          dataIndex: col.dataIndex,
          title: typeof col.title === 'string' ? col.title : col.dataIndex,
          width: typeof col.width === 'number' ? col.width : undefined,
          fixed: col.fixed === 'left' || col.fixed === 'right' ? col.fixed : undefined,
        })
      }
    })
  }
  walk(cols)
  return result
}

const leafColumns = ref<LeafInfo[]>([])

const priorityFilterable: TableFilterable = {
  filters: [
    { text: 'P0', value: 'P0' },
    { text: 'P00', value: 'P00' },
    { text: 'P1', value: 'P1' },
  ],
  filter: (value, record) => value.includes(record.priority),
  multiple: true,
}

const bizLineFilterable: TableFilterable = {
  filters: [
    { text: '充电运营', value: '充电运营' },
    { text: '场站建设', value: '场站建设' },
    { text: '用户增长', value: '用户增长' },
  ],
  filter: (value, record) => value.includes(record.bizLine),
  multiple: true,
}

const statusFilterable: TableFilterable = {
  filters: [
    { text: '进行中', value: '进行中' },
    { text: '已完成', value: '已完成' },
    { text: '已阻塞', value: '已阻塞' },
  ],
  filter: (value, record) => value.includes(record.status),
  multiple: true,
}

const createDefaultColumns = (): TableColumnData[] => [
  {
    title: '任务信息',
    children: [
      {
        dataIndex: 'priority',
        title: '优先级',
        width: 150,
        slotName: 'priority',
        titleSlotName: 'priorityTitle',
        sortable: { sortDirections: ['ascend', 'descend'] },
        filterable: priorityFilterable,
      },
      {
        dataIndex: 'bizLine',
        title: '业务线名称（含组织与经营单元完整路径）',
        width: 160,
        ellipsis: true,
        tooltip: true,
        filterable: bizLineFilterable,
      },
      {
        dataIndex: 'status',
        title: '当前状态',
        width: 140,
        slotName: 'status',
        filterable: statusFilterable,
      },
    ],
  },
  {
    title: '人员与时间',
    children: [
      { dataIndex: 'owner', title: '负责人', width: 100 },
      {
        dataIndex: 'updatedAt',
        title: '最近一次状态更新时间（精确到分钟）',
        width: 140,
        ellipsis: true,
        tooltip: true,
      },
    ],
  },
]

const catalog: ColumnCatalog = [
  {
    label: '任务信息',
    key: 'task',
    children: [
      {
        dataIndex: 'priority',
        title: '优先级',
        required: true,
        tip: '必选列',
        column: {
          width: 150,
          slotName: 'priority',
          titleSlotName: 'priorityTitle',
          sortable: { sortDirections: ['ascend', 'descend'] },
          filterable: priorityFilterable,
        },
      },
      {
        dataIndex: 'bizLine',
        title: '业务线名称（含组织与经营单元完整路径）',
        column: { width: 160, ellipsis: true, tooltip: true, filterable: bizLineFilterable },
      },
      {
        dataIndex: 'status',
        title: '当前状态',
        column: { width: 140, slotName: 'status', filterable: statusFilterable },
      },
      { dataIndex: 'assignee', title: '执行人', column: { width: 100 } },
    ],
  },
  {
    label: '人员与时间',
    key: 'peopleTime',
    children: [
      { dataIndex: 'owner', title: '负责人', column: { width: 100 } },
      {
        dataIndex: 'updatedAt',
        title: '最近一次状态更新时间（精确到分钟）',
        column: { width: 140, ellipsis: true, tooltip: true },
      },
      { dataIndex: 'createdAt', title: '创建时间', column: { width: 160 } },
    ],
  },
  {
    label: '其他',
    key: 'other',
    children: [
      { dataIndex: 'remark', title: '备注', column: { width: 180, ellipsis: true, tooltip: true } },
      { dataIndex: 'action', title: '操作', column: { fixed: 'right', width: 88, slotName: 'action' } },
    ],
  },
]

const restoreColumns = (): TableColumnData[] => {
  const stored = readStoredState()
  if (!stored?.keys?.length) return createDefaultColumns()
  try {
    return buildColumnsFromState({
      state: stored,
      catalog,
      columns: createDefaultColumns(),
    })
  } catch {
    clearStoredState()
    return createDefaultColumns()
  }
}

const columns = ref<TableColumnData[]>(restoreColumns())
leafColumns.value = collectLeaves(columns.value)

const persist = async (cols: TableColumnData[]) => {
  const state = stateFromColumns(cols, catalog)
  // eslint-disable-next-line no-console
  console.log('[columns change]', state)
  saveStatus.value = 'saving'
  await new Promise((r) => setTimeout(r, 160))
  writeStoredState(state)
  saveStatus.value = 'saved'
  if (saveHintTimer) clearTimeout(saveHintTimer)
  saveHintTimer = setTimeout(() => {
    saveStatus.value = 'idle'
  }, 1000)
}

const handleColumnsUpdate = (cols: TableColumnData[]) => {
  leafColumns.value = collectLeaves(cols)
  void persist(cols)
}

const managerVisible = ref(false)
const managerRef = ref<TableColumnManagerInstance>()
const managerKeys = ref<string[]>([])
const managerFixedMap = ref<Record<string, 'left' | 'right'>>({})

watch(managerVisible, (visible) => {
  if (!visible) return
  const state = stateFromColumns(columns.value, catalog)
  managerKeys.value = [...state.keys]
  managerFixedMap.value = { ...state.fixedMap }
})

const handleManagerOk = () => {
  const result = managerRef.value?.getResult?.()
  if (result) {
    columns.value = result.columns
    handleColumnsUpdate(result.columns)
  }
  managerVisible.value = false
}

const handleColumnResize = (dataIndex: string, width: number) => {
  columns.value = mapLeafColumns(columns.value, (col) =>
    col.dataIndex === dataIndex ? { ...col, width } : col,
  )
  handleColumnsUpdate(columns.value)
}

const insertVisible = ref(false)
const insertSide = ref<'left' | 'right'>('right')
const insertAtKey = ref('')
const insertSelected = ref<string[]>([])

const currentKeySet = computed(() => new Set(collectLeaves(columns.value).map((c) => c.dataIndex)))
const insertableItems = computed(() =>
  flattenCatalog(catalog).filter((item) => !currentKeySet.value.has(item.dataIndex)),
)

const openInsert = (dataIndex: string, side: 'left' | 'right') => {
  insertAtKey.value = dataIndex
  insertSide.value = side
  insertSelected.value = []
  insertVisible.value = true
}

const handleInsertOk = () => {
  if (!insertSelected.value.length) {
    insertVisible.value = false
    return
  }
  const state = stateFromColumns(columns.value, catalog)
  const result = buildColumnsResult({
    keys: [...state.keys, ...insertSelected.value],
    prevKeys: state.keys,
    insertAt: { dataIndex: insertAtKey.value, side: insertSide.value },
    fixedMap: state.fixedMap,
    widthMap: state.widthMap,
    titleMap: state.titleMap,
    layout: state.layout,
    columns: columns.value,
    catalog,
  })
  columns.value = result.columns
  handleColumnsUpdate(result.columns)
  insertVisible.value = false
}

const editVisible = ref(false)
const editDataIndex = ref('')
const editGroupTitle = ref('')
const editColumnTitle = ref('')

const openEdit = (dataIndex: string) => {
  editDataIndex.value = dataIndex
  const initial = getColumnEditInitialValues({
    columns: columns.value,
    catalog,
    dataIndex,
  })
  editGroupTitle.value = initial.groupTitle
  editColumnTitle.value = initial.columnTitle
  editVisible.value = true
}

const handleEditOk = () => {
  const result = applyColumnEdit({
    columns: columns.value,
    catalog,
    edit: {
      dataIndex: editDataIndex.value,
      groupTitle: editGroupTitle.value,
      columnTitle: editColumnTitle.value,
    },
  })
  columns.value = result.columns
  handleColumnsUpdate(result.columns)
  editVisible.value = false
}

const setColumnFixed = (dataIndex: string, fixed?: 'left' | 'right') => {
  if (!dataIndex) return
  const state = stateFromColumns(columns.value, catalog)
  const next = applyColumnFixed({
    keys: state.keys,
    fixedMap: state.fixedMap,
    dataIndex,
    fixed,
  })
  const result = buildColumnsResult({
    keys: next.keys,
    fixedMap: next.fixedMap,
    widthMap: state.widthMap,
    titleMap: state.titleMap,
    layout: state.layout,
    columns: columns.value,
    catalog,
  })
  columns.value = result.columns
  handleColumnsUpdate(result.columns)
}

const removeColumn = (dataIndex: string) => {
  if (dataIndex === 'priority') return
  columns.value = mapLeafColumns(columns.value, (col) => (col.dataIndex === dataIndex ? null : col))
  handleColumnsUpdate(columns.value)
}

const resetAll = () => {
  clearStoredState()
  columns.value = createDefaultColumns()
  handleColumnsUpdate(columns.value)
}

const priorityColor = (value: string) => {
  if (value === 'P0') return 'red'
  if (value === 'P00') return 'orangered'
  if (value === 'P1') return 'orange'
  return 'gray'
}

const statusColor = (value: string) => {
  if (value === '进行中') return 'blue'
  if (value === '已完成') return 'green'
  if (value === '已阻塞') return 'red'
  return 'gray'
}

const data = ref([
  {
    priority: 'P0',
    bizLine: '充电运营',
    status: '进行中',
    owner: '张三',
    assignee: '李四',
    updatedAt: '2026-07-20 14:20',
    createdAt: '2026-07-01 09:00',
    remark: '优先保障高峰时段',
  },
  {
    priority: 'P00',
    bizLine: '场站建设',
    status: '已阻塞',
    owner: '王五',
    assignee: '赵六',
    updatedAt: '2026-07-22 11:05',
    createdAt: '2026-06-18 16:30',
    remark: '等待审批',
  },
  {
    priority: 'P1',
    bizLine: '用户增长',
    status: '已完成',
    owner: '陈七',
    assignee: '周八',
    updatedAt: '2026-07-18 18:40',
    createdAt: '2026-07-10 10:12',
    remark: '-',
  },
])
</script>
