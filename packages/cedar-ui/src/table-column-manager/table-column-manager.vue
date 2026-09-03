<template>
  <component :is="props.inline ? 'div' : Drawer" v-bind="props.inline ? {} : drawerProps">
    <Transfer
      v-model="targetItems"
      :class="prefixCls"
      :data="transferData"
      :disabled="loading"
      source-filterable
      :source-filter-placeholder="props.placeholder"
      target-draggable
      target-operation="menu"
      clear-text="清空"
      @search="handleSearch"
      @target-action="handleTargetAction"
    >
      <template v-if="$slots.tooltip" #item="slotProps">
        <slot name="tooltip" v-bind="slotProps" />
        <span>{{ slotProps.label }}</span>
      </template>
    </Transfer>
  </component>

  <c-dialog
    v-if="ctx"
    v-model:open="insertVisible"
    :title="insertSide === 'left' ? '向左插入列' : '向右插入列'"
    :width="480"
    unmount-on-close
    @confirm="handleInsertConfirm"
  >
    <div v-if="!insertableItems.length" style="color: var(--c-color-text-3)">没有可插入的列</div>
    <c-checkbox-group v-else v-model="insertSelected" direction="vertical">
      <c-checkbox v-for="item in insertableItems" :key="item.dataIndex" :value="item.dataIndex">
        {{ item.title }}
      </c-checkbox>
    </c-checkbox-group>
  </c-dialog>

  <c-dialog v-if="ctx" v-model:open="editVisible" title="编辑列" :width="480" unmount-on-close @confirm="handleEditConfirm">
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
</template>

<script lang="ts" setup>
import { computed, inject, ref, watch } from 'vue'
import { cloneDeep } from 'lodash-es'
import Drawer from '../drawer'
import Transfer from '../transfer'
import type { TransferItem, TransferTargetItem, TransferValue } from '../transfer'
import { getPrefixCls } from '../_utils/global-config'
import type { TableColumnManagerDrawerProps } from './props'
import type { ColumnCatalog, ColumnManagerItem, ColumnManagerResult } from './types'
import { buildColumnsResult, isColumnCatalogGroup } from './utils'
import { TableColumnManagerContextKey } from './use-table-column-manager'

defineOptions({ name: 'TableColumnManager' })

const props = withDefaults(defineProps<TableColumnManagerDrawerProps>(), {
  options: () => [],
  columns: () => [],
  drawerTitle: '自定义列',
  drawerWidth: 720,
  inline: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: ColumnManagerItem[]): void
  (e: 'update:open', value: boolean): void
  (e: 'confirm', result: ColumnManagerResult): void
  (e: 'change', value: ColumnManagerItem[]): void
}>()

const prefixCls = getPrefixCls('table-column-manager')
const ctx = inject(TableColumnManagerContextKey, null)
const innerCatalog = ref<ColumnCatalog>(cloneDeep(props.options))
const innerItems = ref<ColumnManagerItem[]>(cloneDeep(props.defaultValue ?? props.modelValue ?? []))
const initialKeys = ref(innerItems.value.map((item) => item.dataIndex))
const loading = ref(false)

const targetItems = computed<TransferTargetItem[]>({
  get: () =>
    (props.modelValue ?? innerItems.value).map((item) => ({
      value: item.dataIndex,
      label: item.title,
      fixed: item.fixed,
    })),
  set: (items) => {
    const currentMap = new Map((props.modelValue ?? innerItems.value).map((item) => [item.dataIndex, item]))
    const next = items.map((item) => {
      const current = currentMap.get(String(item.value))
      return {
        dataIndex: String(item.value),
        ...(item.label ? { title: item.label } : {}),
        ...(item.fixed ? { fixed: item.fixed } : {}),
        ...(current?.width != null ? { width: current.width } : {}),
      }
    })
    innerItems.value = next
    emit('update:modelValue', next)
    emit('change', next)
  },
})

const transferData = computed<TransferItem[]>(() => {
  const catalogItems = innerCatalog.value.flatMap((entry) => {
    if (isColumnCatalogGroup(entry)) {
      return entry.children.map((item) => ({
        value: item.dataIndex,
        label: item.title,
        group: entry.title,
        disabled: item.disabled,
        required: item.required,
        tip: item.tip,
      }))
    }
    return [
      {
        value: entry.dataIndex,
        label: entry.title,
        disabled: entry.disabled,
        required: entry.required,
        tip: entry.tip,
      },
    ]
  })
  const known = new Set<TransferValue>(catalogItems.map((item) => item.value))
  const fallbackItems = targetItems.value.flatMap((target) => {
    if (known.has(target.value)) return []
    const fallback = props.fallbackItem?.(String(target.value))
    return [
      {
        value: target.value,
        label: target.label ?? fallback?.title ?? String(target.value),
        disabled: fallback?.disabled,
        required: fallback?.required,
        tip: fallback?.tip,
      },
    ]
  })
  return [...catalogItems, ...fallbackItems]
})

const getResult = (): ColumnManagerResult =>
  buildColumnsResult({
    items: targetItems.value.map((item) => {
      const current = (props.modelValue ?? innerItems.value).find((entry) => entry.dataIndex === String(item.value))
      return {
        dataIndex: String(item.value),
        ...(item.label ? { title: item.label } : {}),
        ...(item.fixed ? { fixed: item.fixed } : {}),
        ...(current?.width != null ? { width: current.width } : {}),
      }
    }),
    columns: props.columns,
    registryColumns: props.registryColumns,
    catalog: innerCatalog.value,
    columnDefaults: props.columnDefaults,
    createColumn: props.createColumn,
    insertAt: props.insertAt,
    prevKeys: initialKeys.value,
  })

const handleDrawerConfirm = () => {
  emit('confirm', getResult())
  emit('update:open', false)
}

const drawerProps = computed(() => ({
  open: props.open ?? false,
  'onUpdate:open': (value: boolean) => emit('update:open', value),
  title: props.drawerTitle,
  width: props.drawerWidth,
  unmountOnClose: false,
  onConfirm: handleDrawerConfirm,
}))

const loadCatalog = async () => {
  if (!props.loadOptions) return
  loading.value = true
  try {
    innerCatalog.value = cloneDeep(await props.loadOptions())
  } finally {
    loading.value = false
  }
}

const handleSearch = async (value: string, type: 'source' | 'target') => {
  if (type !== 'source' || !props.remoteSearch) return
  loading.value = true
  try {
    await props.remoteSearch(value)
  } finally {
    loading.value = false
  }
}

const handleTargetAction = (_key: string) => undefined

const insertVisible = computed({
  get: () => ctx?.insertVisible.value ?? false,
  set: (value) => {
    if (ctx) ctx.insertVisible.value = value
  },
})
const insertSide = computed(() => ctx?.insertSide.value ?? 'right')
const insertableItems = computed(() => ctx?.insertableItems.value ?? [])
const insertSelected = computed({
  get: () => ctx?.insertSelected.value ?? [],
  set: (value) => {
    if (ctx) ctx.insertSelected.value = value
  },
})
const editVisible = computed({
  get: () => ctx?.editVisible.value ?? false,
  set: (value) => {
    if (ctx) ctx.editVisible.value = value
  },
})
const editGroupTitle = computed({
  get: () => ctx?.editGroupTitle.value ?? '',
  set: (value) => {
    if (ctx) ctx.editGroupTitle.value = value
  },
})
const editColumnTitle = computed({
  get: () => ctx?.editColumnTitle.value ?? '',
  set: (value) => {
    if (ctx) ctx.editColumnTitle.value = value
  },
})
const handleInsertConfirm = () => ctx?.handleInsertConfirm()
const handleEditConfirm = () => ctx?.handleEditConfirm()

watch(
  () => props.options,
  (value) => {
    innerCatalog.value = cloneDeep(value ?? [])
  },
  { deep: true }
)
watch(
  () => props.modelValue,
  (value) => {
    if (value) innerItems.value = cloneDeep(value)
  },
  { deep: true }
)

void loadCatalog()

defineExpose({
  getResult,
  loadCatalog,
  resetInitialKeys: () => {
    initialKeys.value = targetItems.value.map((item) => String(item.value))
  },
})
</script>
