import type { Option, OptionData } from '../select-panel/types'
import type { TableColumnData } from '../table/types'
import type {
  ColumnCatalog,
  ColumnCatalogGroup,
  ColumnCatalogItem,
  ColumnManagerInsertAt,
  ColumnManagerLayoutNode,
  ColumnManagerResult,
  ColumnManagerState,
} from './types'

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

export function catalogToOptions(catalog: ColumnCatalog = [], requiredKeys: string[] = []): Option[] {
  const requiredSet = new Set(requiredKeys)
  return catalog.map((item) => {
    if (isColumnCatalogGroup(item)) {
      return {
        label: item.label,
        value: item.key,
        options: (item.children ?? []).map((child) => catalogItemToOption(child, requiredSet)),
      }
    }
    return catalogItemToOption(item, requiredSet)
  })
}

function catalogItemToOption(item: ColumnCatalogItem, requiredSet: Set<string>): OptionData {
  const fixed = item.fixed === 'left' ? 'start' : item.fixed === 'right' ? 'end' : undefined
  return {
    label: item.title,
    value: item.dataIndex,
    required: item.required || requiredSet.has(item.dataIndex),
    disabled: item.disabled,
    tip: item.tip,
    fixed,
  }
}

export function fixedToInternal(fixed?: 'left' | 'right'): 'start' | 'end' | undefined {
  if (fixed === 'left') return 'start'
  if (fixed === 'right') return 'end'
  return undefined
}

export function fixedFromInternal(fixed?: 'start' | 'end'): 'left' | 'right' | undefined {
  if (fixed === 'start') return 'left'
  if (fixed === 'end') return 'right'
  return undefined
}

export function buildFixedMap(items: { value: string; fixed?: 'start' | 'end' }[]): Record<string, 'left' | 'right'> {
  const map: Record<string, 'left' | 'right'> = {}
  items.forEach((item) => {
    const fixed = fixedFromInternal(item.fixed)
    if (fixed) {
      map[item.value] = fixed
    }
  })
  return map
}

export function applyInsertAt(
  resultKeys: string[],
  prevKeys: string[],
  insertAt?: ColumnManagerInsertAt,
): string[] {
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
  addedKeys: string[],
): ColumnManagerLayoutNode[] | undefined {
  if (!addedKeys.length) return layout

  if (!layout?.length) {
    return undefined
  }

  const next: ColumnManagerLayoutNode[] = layout.map((node) =>
    node.type === 'group' ? { ...node, children: [...node.children] } : { ...node },
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
  keys: string[]
  fixedMap: Record<string, 'left' | 'right'>
  dataIndex: string
  fixed?: 'left' | 'right'
}): { keys: string[]; fixedMap: Record<string, 'left' | 'right'> } {
  const { keys, dataIndex, fixed } = params
  if (!dataIndex || !keys.includes(dataIndex)) {
    return { keys: [...keys], fixedMap: { ...params.fixedMap } }
  }

  const prevFixed = params.fixedMap[dataIndex]
  if (!fixed && !prevFixed) {
    return { keys: [...keys], fixedMap: { ...params.fixedMap } }
  }

  const left: string[] = []
  const other: string[] = []
  const right: string[] = []
  keys.forEach((key) => {
    if (key === dataIndex) return
    const side = params.fixedMap[key]
    if (side === 'left') left.push(key)
    else if (side === 'right') right.push(key)
    else other.push(key)
  })

  const fixedMap = { ...params.fixedMap }
  if (!fixed) {
    delete fixedMap[dataIndex]
    if (prevFixed === 'left') other.unshift(dataIndex)
    else other.push(dataIndex)
  } else if (fixed === 'left') {
    fixedMap[dataIndex] = 'left'
    left.push(dataIndex)
  } else {
    fixedMap[dataIndex] = 'right'
    right.unshift(dataIndex)
  }

  return { keys: [...left, ...other, ...right], fixedMap }
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
  dataIndex: string,
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
  layout?: ColumnManagerLayoutNode[],
): { key: string; title: string } | undefined {
  const layoutGroup = getLayoutGroupOf(layout, dataIndex)
  if (layoutGroup) {
    return { key: layoutGroup.key, title: layoutGroup.title }
  }
  const catalogGroup = getCatalogGroupOf(catalog, dataIndex)
  if (catalogGroup) {
    return { key: catalogGroup.key, title: catalogGroup.label }
  }
  return undefined
}

function buildLeafColumn(
  key: string,
  columnMap: Map<string, TableColumnData>,
  catalogMap: Map<string, ColumnCatalogItem>,
  fixedMap: Record<string, 'left' | 'right'>,
  widthMap?: Record<string, number>,
  titleMap?: Record<string, string>,
): TableColumnData {
  const existing = columnMap.get(key)
  const catalogItem = catalogMap.get(key)
  const base: TableColumnData = existing
    ? { ...existing, children: undefined }
    : {
        dataIndex: key,
        title: catalogItem?.title ?? key,
        ...(catalogItem?.column ?? {}),
      }
  if (!existing && catalogItem?.title && base.title === undefined) {
    base.title = catalogItem.title
  }
  if (titleMap?.[key] != null) {
    base.title = titleMap[key]
    delete base.titleSlotName
  }
  if (widthMap?.[key] != null) {
    base.width = widthMap[key]
  }
  const fixed = fixedMap[key]
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
  layout?: ColumnManagerLayoutNode[],
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
    const groupFixed =
      children[0].fixed === 'left' || children[0].fixed === 'right' ? children[0].fixed : undefined
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
  catalog: ColumnCatalog = [],
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
          title: typeof col.title === 'string' ? col.title : (catalogGroup?.label ?? ''),
          children: childKeys,
        }
      }
      if (!col.dataIndex) return null
      return { type: 'leaf', dataIndex: col.dataIndex }
    })
    .filter(Boolean) as ColumnManagerLayoutNode[]
}

export function buildColumnsResult(params: {
  keys: string[]
  fixedMap: Record<string, 'left' | 'right'>
  columns: TableColumnData[]
  catalog: ColumnCatalog
  insertAt?: ColumnManagerInsertAt
  prevKeys?: string[]
  widthMap?: Record<string, number>
  titleMap?: Record<string, string>
  layout?: ColumnManagerLayoutNode[]
}): ColumnManagerResult {
  const prevKeys = params.prevKeys ?? params.keys
  const keys = applyInsertAt(params.keys, prevKeys, params.insertAt)
  const prevState = stateFromColumns(params.columns, params.catalog)
  const widthMap = { ...prevState.widthMap, ...params.widthMap }
  const titleMap = { ...prevState.titleMap, ...params.titleMap }
  let layout = params.layout ?? prevState.layout

  // 插入时把新列写入锚点所在分组，一级标题 / colspan 才能正确
  if (params.insertAt) {
    const prevSet = new Set(prevKeys)
    const added = keys.filter((key) => !prevSet.has(key))
    layout = applyInsertToLayout(layout, params.insertAt, added)
  }

  const columnMap = new Map(flattenTableColumns(params.columns).map((col) => [col.dataIndex as string, col]))
  const catalogMap = new Map(flattenCatalog(params.catalog).map((item) => [item.dataIndex, item]))

  const leaves = keys.map((key) =>
    buildLeafColumn(key, columnMap, catalogMap, params.fixedMap, widthMap, titleMap),
  )
  const columns = nestLeaves(leaves, params.catalog, layout)
  const state = stateFromColumns(columns, params.catalog)

  return {
    columns,
    keys: state.keys,
    fixedMap: state.fixedMap,
    widthMap: state.widthMap,
    titleMap: state.titleMap,
    layout: state.layout,
  }
}

/** 仅用 state + catalog（及可选的当前列作元数据兜底）重建 columns */
export function buildColumnsFromState(params: {
  state: ColumnManagerState
  catalog: ColumnCatalog
  columns?: TableColumnData[]
}): TableColumnData[] {
  return buildColumnsResult({
    keys: params.state.keys,
    fixedMap: params.state.fixedMap ?? {},
    widthMap: params.state.widthMap,
    titleMap: params.state.titleMap,
    layout: params.state.layout,
    columns: params.columns ?? [],
    catalog: params.catalog,
  }).columns
}

export function stateFromColumns(
  columns: TableColumnData[] = [],
  catalog: ColumnCatalog = [],
): ColumnManagerState {
  const keys: string[] = []
  const fixedMap: Record<string, 'left' | 'right'> = {}
  const widthMap: Record<string, number> = {}
  const titleMap: Record<string, string> = {}

  flattenTableColumns(columns).forEach((col) => {
    if (!col.dataIndex) return
    keys.push(col.dataIndex)
    if (col.fixed === 'left' || col.fixed === 'right') {
      fixedMap[col.dataIndex] = col.fixed
    }
    if (typeof col.width === 'number') {
      widthMap[col.dataIndex] = col.width
    }
    if (typeof col.title === 'string') {
      titleMap[col.dataIndex] = col.title
    }
  })

  const layout = layoutFromColumns(columns, catalog)
  const state: ColumnManagerState = { keys, fixedMap }
  if (Object.keys(widthMap).length) state.widthMap = widthMap
  if (Object.keys(titleMap).length) state.titleMap = titleMap
  if (layout.length) state.layout = layout
  return state
}

/** 递归更新 / 删除叶子列；空分组会被移除 */
export function mapLeafColumns(
  columns: TableColumnData[],
  mapper: (col: TableColumnData) => TableColumnData | null,
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

export function findLeafColumn(
  columns: TableColumnData[] = [],
  dataIndex: string,
): TableColumnData | undefined {
  return flattenTableColumns(columns).find((col) => col.dataIndex === dataIndex)
}

/** 稳定的一级分组 key（按标题合并时使用） */
export function groupKeyFromTitle(title: string): string {
  return `title:${title.trim()}`
}

/** 读取每个叶子当前的一级分组标题（无分组则为空串） */
export function getLeafGroupTitles(
  keys: string[],
  layout?: ColumnManagerLayoutNode[],
): string[] {
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
export function mergeLayoutByAdjacentGroupTitles(
  keys: string[],
  groupTitles: string[],
): ColumnManagerLayoutNode[] {
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
  const focusIndex = state.keys.indexOf(params.edit.dataIndex)
  if (focusIndex === -1) {
    return buildColumnsResult({
      keys: state.keys,
      fixedMap: state.fixedMap,
      widthMap: state.widthMap,
      titleMap: state.titleMap,
      layout: state.layout,
      columns: params.columns,
      catalog: params.catalog,
    })
  }

  const groupTitles = getLeafGroupTitles(state.keys, state.layout)
  groupTitles[focusIndex] = params.edit.groupTitle.trim()
  const layout = mergeLayoutByAdjacentGroupTitles(state.keys, groupTitles)

  const titleMap = { ...(state.titleMap ?? {}) }
  if (params.edit.columnTitle != null) {
    const nextTitle = params.edit.columnTitle.trim()
    if (nextTitle) {
      titleMap[params.edit.dataIndex] = nextTitle
    }
  }

  return buildColumnsResult({
    keys: state.keys,
    fixedMap: state.fixedMap,
    widthMap: state.widthMap,
    titleMap,
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
  const idx = state.keys.indexOf(params.dataIndex)
  const groupTitles = getLeafGroupTitles(state.keys, state.layout)
  const groupTitle = idx >= 0 ? groupTitles[idx] : ''
  const columnTitle =
    (typeof leaf?.title === 'string' ? leaf.title : undefined) ??
    state.titleMap?.[params.dataIndex] ??
    flattenCatalog(params.catalog).find((item) => item.dataIndex === params.dataIndex)?.title ??
    params.dataIndex
  return { groupTitle, columnTitle }
}
