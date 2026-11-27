<template>
  <component :is="props.inline ? 'div' : Drawer" v-bind="props.inline ? {} : drawerProps">
    <Transfer
      :model-value="targetItems"
      @update:model-value="targetItems = $event ?? []"
      :class="prefixCls"
      :data="transferData"
      :disabled="loading"
      source-filterable
      :source-filter-placeholder="props.placeholder"
      target-draggable
      target-operation="menu"
      clear-text="清空"
      @search="handleSearch"
    />
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
    <c-checkbox-group
      v-else
      :model-value="insertSelected"
      orientation="vertical"
      @update:model-value="updateInsertSelected"
    >
      <c-checkbox v-for="item in insertableItems" :key="item.dataIndex" :value="item.dataIndex">
        {{ item.title }}
      </c-checkbox>
    </c-checkbox-group>
  </c-dialog>

  <c-dialog
    v-if="ctx"
    v-model:open="editVisible"
    title="编辑列"
    :width="480"
    unmount-on-close
    @confirm="handleEditConfirm"
  >
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div>
        <div style="margin-bottom: 8px">一级分组标题</div>
        <c-input
          :model-value="editGroupTitle"
          @update:model-value="editGroupTitle = $event ?? ''"
          placeholder="留空表示不分组"
          clearable
        />
        <div style="margin-top: 6px; color: var(--c-color-text-3); font-size: 12px">
          相邻列的一级标题相同时会自动合并为同一分组
        </div>
      </div>
      <div>
        <div style="margin-bottom: 8px">列名称</div>
        <c-input
          :model-value="editColumnTitle"
          @update:model-value="editColumnTitle = $event ?? ''"
          placeholder="请输入列名称"
        />
      </div>
    </div>
  </c-dialog>
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, ref, watch } from 'vue'
import { cloneDeep, isEqual } from 'lodash-es'
import { createRequestGuard } from '../_utils/async-request'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import CCheckbox, { CheckboxGroup as CCheckboxGroup } from '../checkbox'
import CDialog from '../dialog'
import Drawer from '../drawer'
import CInput from '../input'
import Transfer from '../transfer'
import type { TransferItem, TransferTargetItem, TransferValue } from '../transfer'
import type { TableColumnManagerDrawerProps } from './props'
import type { ColumnCatalog, ColumnManagerItem, ColumnManagerResult } from './types'
import { TableColumnManagerContextKey } from './use-table-column-manager'
import { buildColumnsResult, isColumnCatalogGroup } from './utils'

defineOptions({ name: createNamespace('table-column-manager').name })

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
  (e: 'load-error', error: unknown, source: 'catalog' | 'search'): void
}>()

const prefixCls = getPrefixCls('table-column-manager')
const ctx = inject(TableColumnManagerContextKey, null)
const innerCatalog = ref<ColumnCatalog>(cloneDeep(props.options))
let lastOptions = cloneDeep(props.options)
const innerItems = ref<ColumnManagerItem[]>(cloneDeep(props.defaultValue ?? props.modelValue ?? []))
const initialKeys = ref(innerItems.value.map((item) => item.dataIndex))
const catalogPending = ref(false)
const searchPending = ref(false)
const loading = computed(() => catalogPending.value || searchPending.value)
const catalogRequest = createRequestGuard()
const searchRequest = createRequestGuard()
let disposed = false
onBeforeUnmount(() => {
  disposed = true
  catalogRequest.invalidate()
  searchRequest.invalidate()
  catalogPending.value = false
  searchPending.value = false
})

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
  if (disposed) return
  const loader = props.loadOptions
  const isCurrent = catalogRequest.begin()
  catalogPending.value = false
  if (!loader) return
  catalogPending.value = true
  try {
    const result = await loader()
    if (isCurrent()) innerCatalog.value = cloneDeep(result)
  } catch (error) {
    if (isCurrent()) emit('load-error', error, 'catalog')
    throw error
  } finally {
    if (isCurrent()) catalogPending.value = false
  }
}
const handleSearch = async (value: string, type: 'source' | 'target') => {
  if (disposed || type !== 'source') return
  const search = props.remoteSearch
  const isCurrent = searchRequest.begin()
  searchPending.value = false
  if (!search) return
  searchPending.value = true
  try {
    await search(value)
  } catch (error) {
    if (isCurrent()) emit('load-error', error, 'search')
  } finally {
    if (isCurrent()) searchPending.value = false
  }
}
watch(
  () => props.loadOptions,
  () => {
    void loadCatalog().catch(() => {})
  },
  { immediate: true },
)
watch(
  () => props.remoteSearch,
  () => {
    searchRequest.invalidate()
    searchPending.value = false
  },
)

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
function updateInsertSelected(keys: (string | number | boolean)[] | null | undefined) {
  insertSelected.value = (keys ?? []).filter((key): key is string => typeof key === 'string')
}
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
    if (isEqual(value, lastOptions)) return
    lastOptions = cloneDeep(value)
    catalogRequest.invalidate()
    catalogPending.value = false
    innerCatalog.value = cloneDeep(value ?? [])
  },
  { deep: true },
)
watch(
  () => props.modelValue,
  (value) => {
    if (value) innerItems.value = cloneDeep(value)
  },
  { deep: true },
)

defineExpose({
  getResult,
  loadCatalog,
  resetInitialKeys: () => {
    initialKeys.value = targetItems.value.map((item) => String(item.value))
  },
})
</script>
