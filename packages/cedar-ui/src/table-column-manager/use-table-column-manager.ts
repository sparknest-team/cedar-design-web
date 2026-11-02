import { createNamespace } from '../_utils/global-config'
import { createRequestGuard } from '../_utils/async-request'
import {
  getCurrentScope,
  onScopeDispose,
  type Ref,
  type ComputedRef,
  type MaybeRefOrGetter,
  computed,
  defineComponent,
  h,
  type PropType,
  ref,
  toRef,
  toValue,
  watch,
  triggerRef,
  shallowRef,
  provide,
  inject,
  type InjectionKey,
  type ShallowRef,
} from 'vue'
import type { TableColumnData } from '../table/types'
import Menu, { MenuOption } from '../menu'
import { IconMore } from '@cedar-design/icons-vue'
import { cloneDeep } from 'lodash-es'
import type {
  ColumnCatalog,
  ColumnDefinition,
  ColumnDefinitionSource,
  ColumnDefinitions,
  ColumnManagerResult,
  ColumnManagerState,
  ManagedTableColumn,
} from './types'
import {
  applyColumnEdit,
  applyColumnFixed,
  buildColumnsResult,
  flattenCatalog,
  getColumnEditInitialValues,
  mapLeafColumns,
  normalizeColumnManagerState,
  stateFromColumns,
} from './utils'
import type { ColumnEditInput } from './utils'
import type { TableColumnManagerProps } from './props'

/** 表头操作 key */
export type HeaderActionKey =
  | 'insert-left'
  | 'insert-right'
  | 'freeze-left'
  | 'freeze-right'
  | 'unfreeze'
  | 'edit'
  | 'delete'

export interface TableColumnManagerContext {
  /** 当前启用的表头操作 key 集合 */
  headerActions: HeaderActionKey[]
  /** 打开插入列弹窗 */
  openInsert: (dataIndex: string, side: 'left' | 'right') => void
  /** 打开编辑列弹窗 */
  openEdit: (dataIndex: string) => void
  /** 冻结/取消冻结列 */
  freezeColumn: (dataIndex: string, fixed?: 'left' | 'right') => void
  /** 删除列 */
  removeColumn: (dataIndex: string) => void
  // 弹窗状态（供 table-column-manager 组件内部渲染弹窗）
  insertVisible: Ref<boolean>
  insertSide: Ref<'left' | 'right'>
  insertableItems: Ref<{ dataIndex: string; title: string }[]>
  insertSelected: Ref<string[]>
  handleInsertConfirm: () => void
  editVisible: Ref<boolean>
  editGroupTitle: Ref<string>
  editColumnTitle: Ref<string>
  handleEditConfirm: () => void
}

export const TableColumnManagerContextKey: InjectionKey<TableColumnManagerContext> = Symbol('tableColumnManager')

export interface UseTableColumnManagerOptions {
  /** Table 初次展示和重置使用的完整列。 */
  defaultColumns: MaybeRefOrGetter<ManagedTableColumn[]>
  /** 本地弹窗候选列，与 columnSource 二选一；可以只包含 dataIndex/title。 */
  columnDefinitions?: MaybeRefOrGetter<ColumnDefinitions | undefined>
  /** 远程搜索与恢复反显数据源。 */
  columnSource?: ColumnDefinitionSource
  /** 新添加普通列的默认 Table 属性。 */
  columnDefaults?: Partial<TableColumnData>
  /** 将轻量候选定义转换成特殊 Table 列。 */
  createColumn?: (definition: ColumnDefinition) => TableColumnData
  /**
   * 表头下拉菜单操作项。
   * 默认 `['insert-left', 'insert-right', 'freeze-left', 'freeze-right', 'unfreeze', 'edit', 'delete']`
   */
  headerActions?: HeaderActionKey[]
}

export interface EditColumnState {
  dataIndex: string
  groupTitle: string
  columnTitle: string
}

export interface InsertColumnContext {
  dataIndex: string
  side: 'left' | 'right'
}

export interface UseTableColumnManagerReturn {
  /** 表格列（直接 v-model:columns 绑定到 c-table） */
  columns: Ref<TableColumnData[]>
  /** 列管理弹层可见性 */
  managerVisible: Ref<boolean>
  /** 列管理器 ref（传给 c-table-column-manager） */
  managerRef: ShallowRef<TableColumnManagerExposed | undefined>
  /** v-bind 到 c-table-column-manager 的 props */
  managerProps: ComputedRef<TableColumnManagerBindings>
  /** 可直接持久化的规范化状态。 */
  state: ComputedRef<ColumnManagerState>
  /** 当前叶子列简要信息 */
  leafColumns: Ref<{ dataIndex: string; title: string; width?: number; fixed?: 'left' | 'right' }[]>

  /** 打开列管理面板（自动同步 columns -> manager） */
  open: () => void
  /** 关闭面板（不保存） */
  close: () => void
  /** 确认并应用列变更 */
  confirm: (result?: ColumnManagerResult) => void
  /** 插入列 */
  insertColumns: (ctx: InsertColumnContext & { insertKeys: string[] }) => void
  /** 获取插入时可选的列（不在当前 columns 中的 catalog 项） */
  getInsertableItems: () => { dataIndex: string; title: string }[]
  /** 获取编辑列初始值 */
  getEditInitialValues: (dataIndex: string) => EditColumnState
  /** 应用编辑列 */
  applyEdit: (edit: ColumnEditInput) => void
  /** 冻结/取消冻结列 */
  freezeColumn: (dataIndex: string, fixed?: 'left' | 'right') => void
  /** 删除列 */
  removeColumn: (dataIndex: string) => void
  /** 重置为默认列 */
  resetToDefault: () => void
  /** 恢复外部持久化状态；会自动校验版本、补齐必选列并清洗无效数据。 */
  restore: (state: unknown) => Promise<void>
  /** 列宽变更处理（直接传给 Table @column-resize） */
  handleColumnResize: (dataIndex: string, width: number) => void
  /** 当前启用的表头操作 key 集合（由 options.headerActions 控制） */
  headerActions: HeaderActionKey[]
  /**
   * 获取表头下拉菜单的预绑定 props，配合 `HeaderAction` 组件使用：
   * ```html
   * <template #header-cell-actions="{ column, dataIndex }">
   *   <HeaderAction :data-index="dataIndex" :column="column" v-bind="columnActions(dataIndex)" />
   * </template>
   * ```
   */
  columnActions: (dataIndex: string) => TableColumnHeaderActionBindings
  /** 表头操作按钮组件（内联定义，可直接在模板中使用） */
  HeaderAction: typeof TableColumnHeaderAction
  /** 打开插入列弹窗 */
  openInsert: (dataIndex: string, side: 'left' | 'right') => void
  /** 打开编辑列弹窗 */
  openEdit: (dataIndex: string) => void
  // 插入弹窗状态（直接 v-model / v-bind 到 c-dialog）
  insertVisible: Ref<boolean>
  insertSide: Ref<'left' | 'right'>
  insertableItems: Ref<{ dataIndex: string; title: string }[]>
  insertSelected: Ref<string[]>
  handleInsertConfirm: () => void
  // 编辑弹窗状态
  editVisible: Ref<boolean>
  editGroupTitle: Ref<string>
  editColumnTitle: Ref<string>
  handleEditConfirm: () => void
}

export interface TableColumnManagerExposed {
  getResult: () => ColumnManagerResult
  loadCatalog: () => Promise<void>
  resetInitialKeys: () => void
}

export type TableColumnManagerBindings = TableColumnManagerProps & {
  'onUpdate:modelValue': (value: ColumnManagerState['items']) => void
  'onUpdate:open': (value: boolean) => void
  onConfirm: (result: ColumnManagerResult) => void
}

export interface TableColumnHeaderActionBindings {
  actions: HeaderActionKey[]
  onInsert: (side: 'left' | 'right') => void
  onFreeze: (fixed: 'left' | 'right') => void
  onUnfreeze: () => void
  onEdit: () => void
  onDelete: () => void
}

const collectLeaves = (
  columns: TableColumnData[] = []
): { dataIndex: string; title: string; width?: number; fixed?: 'left' | 'right' }[] => {
  const result: { dataIndex: string; title: string; width?: number; fixed?: 'left' | 'right' }[] = []
  const walk = (cols: TableColumnData[]) => {
    cols.forEach((col) => {
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
  walk(columns)
  return result
}

// ---- 表头操作按钮组件（内联定义，避免文件分离导致的解析问题） ----
const TableColumnHeaderAction = defineComponent({
  name: createNamespace("table-column-header-action").name,
  props: {
    dataIndex: String,
    column: Object as PropType<TableColumnData>,
    /** 要展示的表头操作 key，不传则使用 useTableColumnManager 全局配置 */
    actions: { type: Array as PropType<HeaderActionKey[]>, default: undefined },
  },
  setup(props) {
    const ctx = inject(TableColumnManagerContextKey)

    const actions = computed(() => props.actions ?? ctx?.headerActions ?? [])
    const has = (key: HeaderActionKey) => actions.value.includes(key)

    const handleInsert = (side: 'left' | 'right') => {
      if (props.dataIndex) ctx?.openInsert(props.dataIndex, side)
    }
    const handleFreeze = (fixed: 'left' | 'right') => {
      if (props.dataIndex) ctx?.freezeColumn(props.dataIndex, fixed)
    }
    const handleUnfreeze = () => {
      if (props.dataIndex) ctx?.freezeColumn(props.dataIndex)
    }
    const handleEdit = () => {
      if (props.dataIndex) ctx?.openEdit(props.dataIndex)
    }
    const handleDelete = () => {
      if (props.dataIndex) ctx?.removeColumn(props.dataIndex)
    }

    const options = () => {
      const items: any[] = []
      if (has('insert-left')) items.push(h(MenuOption, { onClick: () => handleInsert('left') }, () => '向左插入列'))
      if (has('insert-right')) items.push(h(MenuOption, { onClick: () => handleInsert('right') }, () => '向右插入列'))
      if (has('freeze-left'))
        items.push(
          h(
            MenuOption,
            {
              disabled: props.column?.fixed === 'left',
              onClick: () => handleFreeze('left'),
            },
            () => '冻结到左侧'
          )
        )
      if (has('freeze-right'))
        items.push(
          h(
            MenuOption,
            {
              disabled: props.column?.fixed === 'right',
              onClick: () => handleFreeze('right'),
            },
            () => '冻结到右侧'
          )
        )
      if (has('unfreeze'))
        items.push(
          h(
            MenuOption,
            {
              disabled: !props.column?.fixed,
              onClick: () => handleUnfreeze(),
            },
            () => '取消冻结'
          )
        )
      if (has('edit')) items.push(h(MenuOption, { onClick: () => handleEdit() }, () => '编辑列'))
      if (has('delete')) items.push(h(MenuOption, { onClick: () => handleDelete() }, () => '删除列'))
      return items
    }

    return () =>
      h(
        Menu,
        { trigger: 'click', placement: 'bottom-end' },
        {
          default: () =>
            h(
              'span',
              {
                class: 'c-table-header-cell-action',
                onClick: (e: Event) => e.stopPropagation(),
              },
              [h(IconMore)]
            ),
          content: options,
        }
      )
  },
})

export function useTableColumnManager(options: UseTableColumnManagerOptions): UseTableColumnManagerReturn {
  const catalogRequest = createRequestGuard()
  const restoreRequest = createRequestGuard()
  let active = true
  if (getCurrentScope()) onScopeDispose(() => {
    active = false
    catalogRequest.invalidate()
    restoreRequest.invalidate()
  })
  const rawDefaultColumns = computed(() => toValue(options.defaultColumns))
  const stripManager = (input: ManagedTableColumn[]): TableColumnData[] =>
    input.map(({ manager: _manager, children, ...column }) => ({
      ...column,
      ...(children?.length ? { children: stripManager(children) } : {}),
    }))
  const defaultColumns = computed(() => stripManager(rawDefaultColumns.value))
  const defaultManagedLeaves = computed(() => {
    const result: ManagedTableColumn[] = []
    const walk = (input: ManagedTableColumn[]) =>
      input.forEach((column) => (column.children?.length ? walk(column.children) : column.dataIndex && result.push(column)))
    walk(rawDefaultColumns.value)
    return result
  })
  const remoteSearchDefinitions = ref<ColumnDefinitions>([])
  const resolvedDefinitions = ref<ColumnDefinition[]>([])
  const catalog = computed<ColumnCatalog>(() => {
    const provided = toValue(options.columnDefinitions) ?? remoteSearchDefinitions.value
    const defaultMap = new Map(defaultManagedLeaves.value.map((column) => [column.dataIndex!, column]))
    const known = new Set<string>()
    const enrich = (definitions: ColumnDefinitions): ColumnDefinitions =>
      definitions.map((entry) => {
        if ('children' in entry) return { ...entry, children: enrich(entry.children) as ColumnDefinition[] }
        known.add(entry.dataIndex)
        return { ...entry, ...(defaultMap.get(entry.dataIndex)?.manager?.required ? { required: true } : {}) }
      })
    const definitions = enrich(provided)
    const missingResolved = resolvedDefinitions.value.filter((definition) => !known.has(definition.dataIndex))
    missingResolved.forEach((definition) => known.add(definition.dataIndex))
    const missingDefaults: ColumnDefinition[] = defaultManagedLeaves.value.flatMap((column) => {
      if (!column.dataIndex || known.has(column.dataIndex)) return []
      return [
        {
          dataIndex: column.dataIndex,
          title: typeof column.title === 'string' ? column.title : column.dataIndex,
          ...(column.manager?.required ? { required: true } : {}),
        },
      ]
    })
    return [...definitions, ...missingResolved, ...missingDefaults]
  })
  const defaultState = computed(() => stateFromColumns(defaultColumns.value, catalog.value))
  const requiredSet = computed(
    () =>
      new Set(
        defaultManagedLeaves.value.filter((item) => item.manager?.required).map((item) => item.dataIndex!)
      )
  )

  // ---- state ----
  const createDefaultColumns = () => cloneDeep(defaultColumns.value)
  const columns = ref<TableColumnData[]>(cloneDeep(createDefaultColumns())) as Ref<TableColumnData[]>
  // Any newer public column edit owns the state over an older restore request.
  watch(columns, () => restoreRequest.invalidate(), { deep: true, flush: 'sync' })
  const resizedKeys = ref<Set<string>>(new Set())
  const managerVisible = ref(false)

  // manager internal state
  const _managerItems = ref<ColumnManagerState['items']>([])
  const managerRef = shallowRef<TableColumnManagerExposed>()

  // leaf info
  const leafColumns = computed(() => collectLeaves(columns.value))
  const state = computed(() => stateFromColumns(columns.value, catalog.value, { widthKeys: resizedKeys.value }))

  // ---- sync columns to manager state ----
  const syncToManager = () => {
    _managerItems.value = state.value.items.map((item) => ({ ...item }))
  }

  // Stable callbacks avoid treating catalog/open updates as a different loader.
  const loadCatalogOptions = async () => {
    const source = options.columnSource
    if (!active || !source) return catalog.value
    const isCurrent = catalogRequest.begin()
    const result = await source.search({ keyword: '' })
    if (isCurrent() && source === options.columnSource) remoteSearchDefinitions.value = result.items
    return catalog.value
  }
  const remoteSearchOptions = async (keyword: string) => {
    const source = options.columnSource
    if (!active || !source) return
    const isCurrent = catalogRequest.begin()
    const result = await source.search({ keyword })
    if (isCurrent() && source === options.columnSource) remoteSearchDefinitions.value = result.items
  }

  // ---- manager props ----
  const managerProps = computed(() => ({
    modelValue: _managerItems.value,
    'onUpdate:modelValue': (val: ColumnManagerState['items']) => {
      _managerItems.value = val
    },
    columns: columns.value,
    registryColumns: defaultColumns.value,
    columnDefaults: options.columnDefaults,
    createColumn: options.createColumn,
    options: catalog.value,
    ...(options.columnSource
      ? {
          loadOptions: loadCatalogOptions,
          remoteSearch: remoteSearchOptions,
        }
      : {}),
    open: managerVisible.value,
    'onUpdate:open': (val: boolean) => {
      managerVisible.value = val
    },
    onConfirm: confirm,
  }))

  // ---- actions ----
  const open = () => {
    syncToManager()
    managerVisible.value = true
  }

  const close = () => {
    managerVisible.value = false
  }

  const confirm = (result?: ColumnManagerResult) => {
    const res = result ?? (managerRef.value?.getResult?.() as ColumnManagerResult | undefined)
    if (res) {
      columns.value = res.columns
      resizedKeys.value = new Set(res.items.filter((item) => item.width != null).map((item) => item.dataIndex))
    }
    managerVisible.value = false
  }

  const insertColumns = (ctx: InsertColumnContext & { insertKeys: string[] }) => {
    if (!ctx.insertKeys.length) return
    const { dataIndex, side, insertKeys } = ctx
    const currentState = state.value
    const anchorFixed = currentState.items.find((item) => item.dataIndex === dataIndex)?.fixed
    const addedItems = insertKeys.map((key) => ({ dataIndex: key, ...(anchorFixed ? { fixed: anchorFixed } : {}) }))
    const result = buildColumnsResult({
      items: [...currentState.items, ...addedItems],
      prevKeys: currentState.items.map((item) => item.dataIndex),
      insertAt: { dataIndex, side },
      layout: currentState.layout,
      columns: columns.value,
      catalog: catalog.value,
      columnDefaults: options.columnDefaults,
      createColumn: options.createColumn,
    })
    columns.value = result.columns
  }

  const getInsertableItems = (): { dataIndex: string; title: string }[] => {
    const currentSet = new Set(collectLeaves(columns.value).map((c) => c.dataIndex))
    return flattenCatalog(catalog.value).filter((item) => !currentSet.has(item.dataIndex))
  }

  const getEditInitialValues = (dataIndex: string): EditColumnState => {
    const result = getColumnEditInitialValues({
      columns: columns.value,
      catalog: catalog.value,
      dataIndex,
    })
    return { ...result, dataIndex }
  }

  const applyEdit = (edit: ColumnEditInput) => {
    const result = applyColumnEdit({
      columns: columns.value,
      catalog: catalog.value,
      edit,
    })
    columns.value = result.columns
  }

  const freezeColumn = (dataIndex: string, fixed?: 'left' | 'right') => {
    if (!dataIndex) return
    const currentState = state.value
    const next = applyColumnFixed({
      items: currentState.items,
      dataIndex,
      fixed,
    })
    const result = buildColumnsResult({
      items: next,
      layout: currentState.layout,
      columns: columns.value,
      catalog: catalog.value,
      columnDefaults: options.columnDefaults,
      createColumn: options.createColumn,
    })
    columns.value = result.columns
  }

  const removeColumn = (dataIndex: string) => {
    if (requiredSet.value.has(dataIndex)) return
    const nextKeys = new Set(resizedKeys.value)
    nextKeys.delete(dataIndex)
    resizedKeys.value = nextKeys
    columns.value = mapLeafColumns(columns.value, (col) => (col.dataIndex === dataIndex ? null : col))
  }

  const resetToDefault = () => {
    columns.value = cloneDeep(createDefaultColumns())
    resizedKeys.value = new Set()
  }

  const restore = async (value: unknown) => {
    if (!active) return
    const isCurrent = restoreRequest.begin()
    const source = options.columnSource
    if (source) {
      const candidate = value as Partial<ColumnManagerState> | null
      const known = new Set(flattenCatalog(catalog.value).map((item) => item.dataIndex))
      const missing = Array.isArray(candidate?.items)
        ? candidate.items.map((item) => item?.dataIndex).filter((key): key is string => !!key && !known.has(key))
        : []
      if (missing.length) {
        const resolved = await source.resolve([...new Set(missing)])
        if (!isCurrent() || source !== options.columnSource) return
        const existing = resolvedDefinitions.value
        const resolvedKeys = new Set(resolved.map((item) => item.dataIndex))
        resolvedDefinitions.value = [...existing.filter((item) => !resolvedKeys.has(item.dataIndex)), ...resolved]
      }
    }
    if (!isCurrent() || source !== options.columnSource) return
    const normalized = normalizeColumnManagerState({
      state: value,
      catalog: catalog.value,
      defaultState: defaultState.value,
    })
    const itemMap = new Map(normalized.items.map((item) => [item.dataIndex, item]))
    requiredSet.value.forEach((key) => {
      if (!itemMap.has(key)) {
        const required = defaultState.value.items.find((item) => item.dataIndex === key) ?? { dataIndex: key }
        itemMap.set(key, required)
      }
    })
    const completeItems = [...itemMap.values()]
    const orderedItems = [
      ...completeItems.filter((item) => item.fixed === 'left'),
      ...completeItems.filter((item) => !item.fixed),
      ...completeItems.filter((item) => item.fixed === 'right'),
    ]
    resizedKeys.value = new Set(orderedItems.filter((item) => item.width != null).map((item) => item.dataIndex))
    columns.value = buildColumnsResult({
      items: orderedItems,
      layout: normalized.layout,
      columns: defaultColumns.value,
      catalog: catalog.value,
      columnDefaults: options.columnDefaults,
      createColumn: options.createColumn,
    }).columns
  }

  const handleColumnResize = (dataIndex: string, width: number) => {
    resizedKeys.value = new Set(resizedKeys.value).add(dataIndex)
    columns.value = mapLeafColumns(columns.value, (col) => (col.dataIndex === dataIndex ? { ...col, width } : col))
  }

  const DEFAULT_HEADER_ACTIONS: HeaderActionKey[] = [
    'insert-left',
    'insert-right',
    'freeze-left',
    'freeze-right',
    'unfreeze',
    'edit',
    'delete',
  ]
  const headerActions = options.headerActions ?? DEFAULT_HEADER_ACTIONS

  // ---- 插入列弹窗（composable 自管理，不依赖 manager 是否挂载） ----
  const insertVisible = ref(false)
  const insertSide = ref<'left' | 'right'>('right')
  const insertAtKey = ref('')
  const insertSelected = ref<string[]>([])

  const insertableItems = computed(() => {
    const currentSet = new Set(collectLeaves(columns.value).map((c) => c.dataIndex))
    return flattenCatalog(catalog.value).filter((item) => !currentSet.has(item.dataIndex))
  })

  const openInsert = (dataIndex: string, side: 'left' | 'right') => {
    insertAtKey.value = dataIndex
    insertSide.value = side
    insertSelected.value = []
    insertVisible.value = true
  }

  const handleInsertConfirm = () => {
    if (!insertSelected.value.length) {
      insertVisible.value = false
      return
    }
    const currentState = state.value
    const anchorFixed = currentState.items.find((item) => item.dataIndex === insertAtKey.value)?.fixed
    const addedItems = insertSelected.value.map((key) => ({
      dataIndex: key,
      ...(anchorFixed ? { fixed: anchorFixed } : {}),
    }))
    const result = buildColumnsResult({
      items: [...currentState.items, ...addedItems],
      prevKeys: currentState.items.map((item) => item.dataIndex),
      insertAt: { dataIndex: insertAtKey.value, side: insertSide.value },
      layout: currentState.layout,
      columns: columns.value,
      catalog: catalog.value,
      columnDefaults: options.columnDefaults,
      createColumn: options.createColumn,
    })
    columns.value = result.columns
    insertVisible.value = false
  }

  // ---- 编辑列弹窗 ----
  const editVisible = ref(false)
  const editDataIndex = ref('')
  const editGroupTitle = ref('')
  const editColumnTitle = ref('')

  const openEdit = (dataIndex: string) => {
    editDataIndex.value = dataIndex
    const initial = getColumnEditInitialValues({
      columns: columns.value,
      catalog: catalog.value,
      dataIndex,
    })
    editGroupTitle.value = initial.groupTitle
    editColumnTitle.value = initial.columnTitle
    editVisible.value = true
  }

  const handleEditConfirm = () => {
    const result = applyColumnEdit({
      columns: columns.value,
      catalog: catalog.value,
      edit: {
        dataIndex: editDataIndex.value,
        groupTitle: editGroupTitle.value,
        columnTitle: editColumnTitle.value,
      },
    })
    columns.value = result.columns
    editVisible.value = false
  }

  const columnActions = (dataIndex: string) => ({
    actions: headerActions,
    onInsert: (side: 'left' | 'right') => {
      openInsert(dataIndex, side)
    },
    onFreeze: (fixed: 'left' | 'right') => {
      freezeColumn(dataIndex, fixed)
    },
    onUnfreeze: () => {
      freezeColumn(dataIndex)
    },
    onEdit: () => {
      openEdit(dataIndex)
    },
    onDelete: () => {
      removeColumn(dataIndex)
    },
  })

  provide(TableColumnManagerContextKey, {
    headerActions,
    openInsert,
    openEdit,
    freezeColumn,
    removeColumn,
    insertVisible,
    insertSide,
    insertableItems,
    insertSelected,
    handleInsertConfirm,
    editVisible,
    editGroupTitle,
    editColumnTitle,
    handleEditConfirm,
  })

  return {
    columns,
    managerVisible,
    managerRef,
    managerProps,
    state,
    leafColumns,
    open,
    close,
    confirm,
    insertColumns,
    getInsertableItems,
    getEditInitialValues,
    applyEdit,
    freezeColumn,
    removeColumn,
    resetToDefault,
    restore,
    handleColumnResize,
    headerActions,
    columnActions,
    HeaderAction: TableColumnHeaderAction,
    openInsert,
    openEdit,
    // 插入弹窗状态
    insertVisible,
    insertSide,
    insertableItems,
    insertSelected,
    handleInsertConfirm,
    // 编辑弹窗状态
    editVisible,
    editGroupTitle,
    editColumnTitle,
    handleEditConfirm,
  }
}
