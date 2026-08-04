import type { TableColumnData } from '../table/types'
import type {
  ColumnCatalog,
  ColumnCatalogGroup,
  ColumnCatalogItem,
  ColumnManagerInsertAt,
  ColumnManagerLayoutNode,
  ColumnManagerItem,
  ColumnManagerResult,
  ColumnManagerState,
} from './types'
import { COLUMN_MANAGER_STATE_VERSION } from './types'

export function isColumnCatalogGroup(item: ColumnCatalogGroup | ColumnCatalogItem): item is ColumnCatalogGroup {
  return Array.isArray((item as ColumnCatalogGroup).children)
}

export function flattenCatalog(catalog: ColumnCatalog = []): ColumnCatalogItem[] {
  return catalog.flatMap((item) => {
    if (isColumnCatalogGroup(item)) {
      return item.children ?? []
    }
    return [item]
  })
}

/** 展开分组表头，得到叶子数据列（保序） */
export function flattenTableColumns(columns: TableColumnData[] = []): TableColumnData[] {
  const result: TableColumnData[] = []
  const walk = (cols: TableColumnData[]) => {
    cols.forEach((col) => {
      if (col.children?.length) {
        walk(col.children)
      } else if (col.dataIndex) {
        result.push(col)
      }
    })
  }
  walk(columns)
  return result
}

export function applyInsertAt(resultKeys: string[], prevKeys: string[], insertAt?: ColumnManagerInsertAt): string[] {
  if (!insertAt) {
    return resultKeys
  }
  const prevSet = new Set(prevKeys)
  const added = resultKeys.filter((key) => !prevSet.has(key))
  if (!added.length) {
    return resultKeys
  }
  const remaining = resultKeys.filter((key) => prevSet.has(key))
  const idx = remaining.indexOf(insertAt.dataIndex)
  if (idx === -1) {
    return resultKeys
  }
  const insertIdx = insertAt.side === 'left' ? idx : idx + 1
  const next = [...remaining]
  next.splice(insertIdx, 0, ...added)
  return next
}

/**
 * 向左 / 向右插入时，把新列写进锚点所在的一级分组（或紧挨无分组叶子），
 * 保证 nestLeaves 归组与 Table colspan 正确，而不是回落到 catalog 分组。
 */
export function applyInsertToLayout(
  layout: ColumnManagerLayoutNode[] | undefined,
  insertAt: ColumnManagerInsertAt,
  addedKeys: string[]
): ColumnManagerLayoutNode[] | undefined {
  if (!addedKeys.length) return layout

  if (!layout?.length) {
    return undefined
  }

  const next: ColumnManagerLayoutNode[] = layout.map((node) =>
    node.type === 'group' ? { ...node, children: [...node.children] } : { ...node }
  )

  for (let i = 0; i < next.length; i += 1) {
    const node = next[i]
    if (node.type === 'group') {
      const idx = node.children.indexOf(insertAt.dataIndex)
      if (idx === -1) continue
      const insertIdx = insertAt.side === 'left' ? idx : idx + 1
      node.children.splice(insertIdx, 0, ...addedKeys)
      return next
    }
    if (node.type === 'leaf' && node.dataIndex === insertAt.dataIndex) {
      const leafNodes: ColumnManagerLayoutNode[] = addedKeys.map((dataIndex) => ({
        type: 'leaf',
        dataIndex,
      }))
      const insertIdx = insertAt.side === 'left' ? i : i + 1
      next.splice(insertIdx, 0, ...leafNodes)
      return next
    }
  }

  return next
}

/**
 * 冻结 / 取消冻结，并按规则调整叶子列顺序：
 * - left：追加到左侧冻结队列末尾（尚无左冻则放到最前）
 * - right：插入到右侧冻结队列最前（尚无右冻则放到最后）
 * - undefined：取消冻结；原左冻插入非冻结区最前，原右冻插入非冻结区最后
 */
export function applyColumnFixed(params: {
  items: ColumnManagerItem[]
  dataIndex: string
  fixed?: 'left' | 'right'
}): ColumnManagerItem[] {
  const { items, dataIndex, fixed } = params
  const current = items.find((item) => item.dataIndex === dataIndex)
  if (!dataIndex || !current) {
    return items.map((item) => ({ ...item }))
  }

  const prevFixed = current.fixed
  if (!fixed && !prevFixed) {
    return items.map((item) => ({ ...item }))
  }

  const left: ColumnManagerItem[] = []
  const other: ColumnManagerItem[] = []
  const right: ColumnManagerItem[] = []
  items.forEach((item) => {
    if (item.dataIndex === dataIndex) return
    if (item.fixed === 'left') left.push({ ...item })
    else if (item.fixed === 'right') right.push({ ...item })
    else other.push({ ...item })
  })

  const changed: ColumnManagerItem = { ...current, fixed }
  if (!fixed) {
    delete changed.fixed
    if (prevFixed === 'left') other.unshift(changed)
    else other.push(changed)
  } else if (fixed === 'left') {
    left.push(changed)
  } else {
    right.unshift(changed)
  }

  return [...left, ...other, ...right]
}

function getCatalogGroupOf(catalog: ColumnCatalog, dataIndex: string): ColumnCatalogGroup | undefined {
  for (const item of catalog) {
    if (isColumnCatalogGroup(item) && item.children?.some((child) => child.dataIndex === dataIndex)) {
      return item
    }
  }
  return undefined
}

/** 从 layout 反查叶子所属分组 */
function getLayoutGroupOf(
  layout: ColumnManagerLayoutNode[] | undefined,
  dataIndex: string
): Extract<ColumnManagerLayoutNode, { type: 'group' }> | undefined {
  if (!layout?.length) return undefined
  for (const node of layout) {
    if (node.type === 'group' && node.children.includes(dataIndex)) {
      return node
    }
  }
  return undefined
}

function resolveGroupMeta(
  dataIndex: string,
  catalog: ColumnCatalog,
  layout?: ColumnManagerLayoutNode[]
): { key: string; title: string } | undefined {
  const layoutGroup = getLayoutGroupOf(layout, dataIndex)
  if (layoutGroup) {
    return { key: layoutGroup.key, title: layoutGroup.title }
  }
  const catalogGroup = getCatalogGroupOf(catalog, dataIndex)
  if (catalogGroup) {
    return { key: catalogGroup.key, title: catalogGroup.title }
  }
  return undefined
}

function buildLeafColumn(
  item: ColumnManagerItem,
  columnMap: Map<string, TableColumnData>,
  catalogMap: Map<string, ColumnCatalogItem>,
  columnDefaults: Partial<TableColumnData> = {},
  createColumn?: (definition: ColumnCatalogItem) => TableColumnData
): TableColumnData {
  const key = item.dataIndex
  const existing = columnMap.get(key)
  const catalogItem = catalogMap.get(key)
  const base: TableColumnData = existing
    ? { ...existing, children: undefined }
    : {
        ...columnDefaults,
        dataIndex: key,
        title: catalogItem?.title ?? key,
        ...(catalogItem && createColumn ? createColumn(catalogItem) : {}),
      }
  // 丢弃 Table 运行期写入的内部状态，避免 manager 重建后的列携带过时的 _realWidth / _resizeWidth 等，
  // 导致列宽、分组、固定列偏移在插入/删除后计算异常。
  delete (base as any).isLastLeftFixed
  delete (base as any).isFirstRightFixed
  delete (base as any).colSpan
  delete (base as any).rowSpan
  delete (base as any).index
  delete (base as any).parent
  delete (base as any)._resizeWidth
  delete (base as any)._realWidth
  if (!existing && catalogItem?.title && base.title === undefined) {
    base.title = catalogItem.title
  }
  if (item.title != null) {
    base.title = item.title
    delete base.titleSlotName
  }
  if (item.width != null) {
    base.width = item.width
  }
  const fixed = item.fixed
  if (fixed) {
    base.fixed = fixed
  } else {
    delete base.fixed
  }
  return base
}

/** 按 layout 分组归属（优先）或 catalog，将连续「一级标题相同且冻结状态相同」的叶子收成组 */
function nestLeaves(
  leaves: TableColumnData[],
  catalog: ColumnCatalog,
  layout?: ColumnManagerLayoutNode[]
): TableColumnData[] {
  const hasGroups = Boolean(layout?.some((n) => n.type === 'group')) || catalog.some(isColumnCatalogGroup)
  if (!hasGroups) {
    return leaves
  }
  const sameFixed = (a?: TableColumnData['fixed'], b?: TableColumnData['fixed']) =>
    (a === 'left' || a === 'right' ? a : undefined) === (b === 'left' || b === 'right' ? b : undefined)

  const columns: TableColumnData[] = []
  let index = 0
  while (index < leaves.length) {
    const key = leaves[index].dataIndex!
    const group = resolveGroupMeta(key, catalog, layout)
    if (!group || !group.title.trim()) {
      columns.push(leaves[index])
      index += 1
      continue
    }
    const groupTitle = group.title.trim()
    const children: TableColumnData[] = []
    while (index < leaves.length) {
      const childKey = leaves[index].dataIndex!
      const childGroup = resolveGroupMeta(childKey, catalog, layout)
      if (!childGroup || childGroup.title.trim() !== groupTitle) break
      // 冻结 / 非冻结不可收进同一分组，否则分组表头无法跟随固定列
      if (children.length && !sameFixed(children[0].fixed, leaves[index].fixed)) break
      children.push(leaves[index])
      index += 1
    }
    const groupFixed = children[0].fixed === 'left' || children[0].fixed === 'right' ? children[0].fixed : undefined
    columns.push({
      title: groupTitle,
      children,
      ...(groupFixed ? { fixed: groupFixed } : {}),
    })
  }
  return columns
}

/** 从当前 columns 树提取顶层 layout */
export function layoutFromColumns(
  columns: TableColumnData[] = [],
  catalog: ColumnCatalog = []
): ColumnManagerLayoutNode[] {
  return columns
    .map((col, index): ColumnManagerLayoutNode | null => {
      if (col.children?.length) {
        const childKeys = col.children.map((child) => child.dataIndex).filter(Boolean) as string[]
        if (!childKeys.length) return null
        const firstKey = childKeys[0]
        const catalogGroup = getCatalogGroupOf(catalog, firstKey)
        return {
          type: 'group',
          key: catalogGroup?.key ?? `group-${index}`,
          title: typeof col.title === 'string' ? col.title : catalogGroup?.title ?? '',
          children: childKeys,
        }
      }
      if (!col.dataIndex) return null
      return { type: 'leaf', dataIndex: col.dataIndex }
    })
    .filter(Boolean) as ColumnManagerLayoutNode[]
}

export function buildColumnsResult(params: {
  items: ColumnManagerItem[]
  columns: TableColumnData[]
  registryColumns?: TableColumnData[]
  catalog: ColumnCatalog
  insertAt?: ColumnManagerInsertAt
  prevKeys?: string[]
  layout?: ColumnManagerLayoutNode[]
  columnDefaults?: Partial<TableColumnData>
  createColumn?: (definition: ColumnCatalogItem) => TableColumnData
}): ColumnManagerResult {
  const inputKeys = params.items.map((item) => item.dataIndex)
  const prevKeys = params.prevKeys ?? inputKeys
  const keys = applyInsertAt(inputKeys, prevKeys, params.insertAt)
  const itemMap = new Map(params.items.map((item) => [item.dataIndex, item]))
  const items = keys.map((key) => itemMap.get(key) ?? { dataIndex: key })
  const prevState = stateFromColumns(params.columns, params.catalog)
  let layout = params.layout ?? prevState.layout

  // 插入时把新列写入锚点所在分组，一级标题 / colspan 才能正确
  if (params.insertAt) {
    const prevSet = new Set(prevKeys)
    const added = keys.filter((key) => !prevSet.has(key))
    layout = applyInsertToLayout(layout, params.insertAt, added)
  }

  const columnMap = new Map(
    [...flattenTableColumns(params.registryColumns), ...flattenTableColumns(params.columns)].map((col) => [
      col.dataIndex as string,
      col,
    ])
  )
  const catalogMap = new Map(flattenCatalog(params.catalog).map((item) => [item.dataIndex, item]))

  const leaves = items.map((item) =>
    buildLeafColumn(item, columnMap, catalogMap, params.columnDefaults, params.createColumn)
  )
  const columns = nestLeaves(leaves, params.catalog, layout)
  const widthKeys = new Set(items.filter((item) => item.width != null).map((item) => item.dataIndex))
  const state = stateFromColumns(columns, params.catalog, { widthKeys })

  return {
    columns,
    version: state.version,
    items: state.items,
    layout: state.layout,
  }
}

/** 仅用 state + catalog（及可选的当前列作元数据兜底）重建 columns */
export function buildColumnsFromState(params: {
  state: unknown
  catalog: ColumnCatalog
  columns?: TableColumnData[]
}): TableColumnData[] {
  const state = normalizeColumnManagerState({
    state: params.state,
    catalog: params.catalog,
  })
  return buildColumnsResult({
    items: state.items,
    layout: state.layout,
    columns: params.columns ?? [],
    catalog: params.catalog,
  }).columns
}

function defaultStateFromCatalog(catalog: ColumnCatalog): ColumnManagerState {
  const items: ColumnManagerItem[] = []
  const layout: ColumnManagerLayoutNode[] = []
  catalog.forEach((entry) => {
    if (isColumnCatalogGroup(entry)) {
      const children = entry.children
        .filter(() => true)
        .map((item) => {
          items.push({ dataIndex: item.dataIndex })
          return item.dataIndex
        })
      if (children.length) layout.push({ type: 'group', key: entry.key, title: entry.title, children })
      return
    }
    items.push({ dataIndex: entry.dataIndex })
    layout.push({ type: 'leaf', dataIndex: entry.dataIndex })
  })
  return { version: COLUMN_MANAGER_STATE_VERSION, items, ...(layout.length ? { layout } : {}) }
}

/** 从唯一列目录生成初始/重置状态，并清洗可选的业务默认状态。 */
export function stateFromCatalog(
  catalog: ColumnCatalog,
  defaultState?: Omit<ColumnManagerState, 'version'>
): ColumnManagerState {
  const fallback = defaultStateFromCatalog(catalog)
  if (!defaultState) return normalizeColumnManagerState({ state: fallback, catalog })
  return normalizeColumnManagerState({
    state: { ...defaultState, version: COLUMN_MANAGER_STATE_VERSION },
    catalog,
  })
}

export function stateFromColumns(
  columns: TableColumnData[] = [],
  catalog: ColumnCatalog = [],
  options: { widthKeys?: ReadonlySet<string> } = {}
): ColumnManagerState {
  const items: ColumnManagerItem[] = []
  const catalogMap = new Map(flattenCatalog(catalog).map((item) => [item.dataIndex, item]))

  flattenTableColumns(columns).forEach((col) => {
    if (!col.dataIndex) return
    const item: ColumnManagerItem = { dataIndex: col.dataIndex }
    if (col.fixed === 'left' || col.fixed === 'right') item.fixed = col.fixed
    if (typeof col.title === 'string' && col.title !== catalogMap.get(col.dataIndex)?.title) {
      item.title = col.title
    }
    if (options.widthKeys?.has(col.dataIndex) && Number.isFinite(col.width) && col.width! > 0) item.width = col.width
    items.push(item)
  })

  const layout = layoutFromColumns(columns, catalog)
  const state: ColumnManagerState = { version: COLUMN_MANAGER_STATE_VERSION, items }
  if (layout.length) state.layout = layout
  return state
}

/** 清洗外部状态、补齐必选列，并修复冻结区与布局。版本不兼容时返回默认状态。 */
export function normalizeColumnManagerState(params: {
  state: unknown
  catalog: ColumnCatalog
  defaultState?: Omit<ColumnManagerState, 'version'>
}): ColumnManagerState {
  const catalogDefaultState = defaultStateFromCatalog(params.catalog)
  const fallbackState = params.defaultState
    ? { ...params.defaultState, version: COLUMN_MANAGER_STATE_VERSION }
    : catalogDefaultState
  const candidate = params.state as Partial<ColumnManagerState> | null
  const input =
    candidate?.version === COLUMN_MANAGER_STATE_VERSION && Array.isArray(candidate.items) ? candidate : fallbackState

  const catalogItems = flattenCatalog(params.catalog)
  const catalogMap = new Map(catalogItems.map((item) => [item.dataIndex, item]))
  const validKeys = new Set(catalogMap.keys())
  const seen = new Set<string>()
  const items: ColumnManagerItem[] = []

  input.items.forEach((raw) => {
    if (!raw || typeof raw.dataIndex !== 'string' || !validKeys.has(raw.dataIndex) || seen.has(raw.dataIndex)) return
    seen.add(raw.dataIndex)
    const item: ColumnManagerItem = { dataIndex: raw.dataIndex }
    if (typeof raw.title === 'string' && raw.title.trim() && raw.title !== catalogMap.get(raw.dataIndex)?.title) {
      item.title = raw.title.trim()
    }
    if (raw.fixed === 'left' || raw.fixed === 'right') item.fixed = raw.fixed
    if (Number.isFinite(raw.width) && raw.width! > 0) item.width = raw.width
    items.push(item)
  })

  const missingRequired: ColumnManagerItem[] = []
  catalogItems.forEach((catalogItem) => {
    if (!catalogItem.required || seen.has(catalogItem.dataIndex)) return
    seen.add(catalogItem.dataIndex)
    missingRequired.push(
      fallbackState.items.find((item) => item.dataIndex === catalogItem.dataIndex) ?? {
        dataIndex: catalogItem.dataIndex,
      }
    )
  })
  const completeItems = [...missingRequired, ...items]
  const orderedItems = [
    ...completeItems.filter((item) => item.fixed === 'left'),
    ...completeItems.filter((item) => !item.fixed),
    ...completeItems.filter((item) => item.fixed === 'right'),
  ]
  const selectedKeys = new Set(orderedItems.map((item) => item.dataIndex))
  const layoutSeen = new Set<string>()
  const layout = Array.isArray(input.layout)
    ? (input.layout
        .map((node): ColumnManagerLayoutNode | undefined => {
          if (!node || typeof node !== 'object') return undefined
          if (node.type === 'leaf') {
            if (
              typeof node.dataIndex !== 'string' ||
              !selectedKeys.has(node.dataIndex) ||
              layoutSeen.has(node.dataIndex)
            ) {
              return undefined
            }
            layoutSeen.add(node.dataIndex)
            return { type: 'leaf', dataIndex: node.dataIndex }
          }
          if (node.type !== 'group' || !Array.isArray(node.children)) return undefined
          const children = node.children.filter((key) => {
            if (typeof key !== 'string' || !selectedKeys.has(key) || layoutSeen.has(key)) return false
            layoutSeen.add(key)
            return true
          })
          return children.length
            ? {
                type: 'group',
                key: typeof node.key === 'string' ? node.key : `group:${children[0]}`,
                title: typeof node.title === 'string' ? node.title : '',
                children,
              }
            : undefined
        })
        .filter(Boolean) as ColumnManagerLayoutNode[])
    : undefined

  const state: ColumnManagerState = { version: COLUMN_MANAGER_STATE_VERSION, items: orderedItems }
  if (layout?.length) state.layout = layout
  return state
}

/** 递归更新 / 删除叶子列；空分组会被移除 */
export function mapLeafColumns(
  columns: TableColumnData[],
  mapper: (col: TableColumnData) => TableColumnData | null
): TableColumnData[] {
  const next: TableColumnData[] = []
  columns.forEach((col) => {
    if (col.children?.length) {
      const children = mapLeafColumns(col.children, mapper)
      if (children.length) {
        next.push({ ...col, children })
      }
      return
    }
    const mapped = mapper(col)
    if (mapped) next.push(mapped)
  })
  return next
}

export function findLeafColumn(columns: TableColumnData[] = [], dataIndex: string): TableColumnData | undefined {
  return flattenTableColumns(columns).find((col) => col.dataIndex === dataIndex)
}

/** 稳定的一级分组 key（按标题合并时使用） */
export function groupKeyFromTitle(title: string): string {
  return `title:${title.trim()}`
}

/** 读取每个叶子当前的一级分组标题（无分组则为空串） */
export function getLeafGroupTitles(keys: string[], layout?: ColumnManagerLayoutNode[]): string[] {
  const map = new Map<string, string>()
  layout?.forEach((node) => {
    if (node.type === 'group') {
      node.children.forEach((key) => map.set(key, node.title))
    }
  })
  return keys.map((key) => map.get(key) ?? '')
}

/**
 * 按叶子顺序，将相邻且一级标题相同的列合并为分组；空标题表示顶层独立列。
 */
export function mergeLayoutByAdjacentGroupTitles(keys: string[], groupTitles: string[]): ColumnManagerLayoutNode[] {
  const layout: ColumnManagerLayoutNode[] = []
  let index = 0
  while (index < keys.length) {
    const title = (groupTitles[index] ?? '').trim()
    if (!title) {
      layout.push({ type: 'leaf', dataIndex: keys[index] })
      index += 1
      continue
    }
    const children = [keys[index]]
    let cursor = index + 1
    while (cursor < keys.length && (groupTitles[cursor] ?? '').trim() === title) {
      children.push(keys[cursor])
      cursor += 1
    }
    layout.push({
      type: 'group',
      key: groupKeyFromTitle(title),
      title,
      children,
    })
    index = cursor
  }
  return layout
}

export type ColumnEditInput = {
  dataIndex: string
  /** 一级分组标题；空字符串表示取消分组 */
  groupTitle: string
  /** 当前列名称（叶子 title） */
  columnTitle?: string
}

/** 编辑列：更新分组标题（相邻同名自动合并）及可选列名 */
export function applyColumnEdit(params: {
  columns: TableColumnData[]
  catalog: ColumnCatalog
  edit: ColumnEditInput
}): ColumnManagerResult {
  const state = stateFromColumns(params.columns, params.catalog)
  const keys = state.items.map((item) => item.dataIndex)
  const focusIndex = keys.indexOf(params.edit.dataIndex)
  if (focusIndex === -1) {
    return buildColumnsResult({
      items: state.items,
      layout: state.layout,
      columns: params.columns,
      catalog: params.catalog,
    })
  }

  const groupTitles = getLeafGroupTitles(keys, state.layout)
  groupTitles[focusIndex] = params.edit.groupTitle.trim()
  const layout = mergeLayoutByAdjacentGroupTitles(keys, groupTitles)

  let items = state.items.map((item) => ({ ...item }))
  if (params.edit.columnTitle != null) {
    const nextTitle = params.edit.columnTitle.trim()
    if (nextTitle) {
      items = items.map((item) => (item.dataIndex === params.edit.dataIndex ? { ...item, title: nextTitle } : item))
    }
  }

  return buildColumnsResult({
    items,
    layout,
    columns: params.columns,
    catalog: params.catalog,
  })
}

/** 读取编辑列弹窗的初始值 */
export function getColumnEditInitialValues(params: {
  columns: TableColumnData[]
  catalog: ColumnCatalog
  dataIndex: string
}): { groupTitle: string; columnTitle: string } {
  const state = stateFromColumns(params.columns, params.catalog)
  const leaf = findLeafColumn(params.columns, params.dataIndex)
  const keys = state.items.map((item) => item.dataIndex)
  const idx = keys.indexOf(params.dataIndex)
  const groupTitles = getLeafGroupTitles(keys, state.layout)
  const groupTitle = idx >= 0 ? groupTitles[idx] : ''
  const columnTitle =
    (typeof leaf?.title === 'string' ? leaf.title : undefined) ??
    state.items.find((item) => item.dataIndex === params.dataIndex)?.title ??
    flattenCatalog(params.catalog).find((item) => item.dataIndex === params.dataIndex)?.title ??
    params.dataIndex
  return { groupTitle, columnTitle }
}
