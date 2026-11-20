import { computed, onMounted, onUpdated, ref, watch } from 'vue'
import type { Ref } from 'vue'
import { useElementResize } from '../../_utils/resize-observer'
import { useDirection, inlineScrollLeft, setInlineScrollLeft } from '../../_utils/direction'
import { getGroupColumns } from '../render/columns'
import { updateColumnsWidth } from '../hooks/use-columns-layout'
import { getColumnLayoutKey } from '../extra-column'
import type { TableColumnData } from '../types'
import type { TableCoreProps } from '../core/props'

/** Native viewport adapter; common geometry stays in the shared layout kernel. */
export interface CoreLayout {
  dataColumns: Ref<TableColumnData[]>
  groupColumns: Ref<TableColumnData[][]>
  bodyWidth: Ref<number>
  headerOffsets: Ref<number[]>
  mode: Readonly<Ref<'fixed' | 'auto'>>
  dir: Readonly<Ref<'ltr' | 'rtl'>>
  measure: () => void
  onScroll: () => void
  onKeydown: (event: KeyboardEvent) => void
}

export function useCoreLayout(props: TableCoreProps, viewport: Ref<HTMLElement | undefined>, table: Ref<HTMLTableElement | undefined>, explicitDirection: () => unknown): CoreLayout {
  const dataColumns = ref<TableColumnData[]>([]) as Ref<TableColumnData[]>
  const groupColumns = ref<TableColumnData[][]>([]) as Ref<TableColumnData[][]>
  const width = ref(0)
  const bodyWidth = ref(0)
  const targets = ref<Element[]>([])
  const headerOffsets = ref<number[]>([])
  const { dir } = useDirection(() => viewport.value, explicitDirection)
  const mode = computed(() => props.tableLayout ?? 'fixed')
  let readingOffset = 0
  watch([() => props.columns, dir], () => {
    const result = getGroupColumns((props.columns ?? []) as unknown as TableColumnData[], new Map(), {}, dir.value)
    dataColumns.value = result.dataColumns
    groupColumns.value = result.groupColumns
  }, { deep: true, immediate: true, flush: 'sync' })
  watch([dataColumns, width, () => props.fit, mode], () => {
    const result = updateColumnsWidth({ containerWidth: width.value, dataColumns: dataColumns.value, operations: [], fit: props.fit ?? true })
    bodyWidth.value = result.bodyWidth
  }, { immediate: true })

  const measure = () => {
    const element = viewport.value
    if (!element || !table.value) return
    const next = Math.floor(element.clientWidth)
    if (next !== width.value) width.value = next
    const heads = Array.from(table.value.querySelectorAll<HTMLTableCellElement>('thead th[data-column-key]'))
    const firstRow = Array.from(table.value.tBodies[0]?.rows[0]?.cells ?? [])
    let top = 0
    const offsets = Array.from(table.value.tHead?.rows ?? []).map(row => { const offset = top; top += row.getBoundingClientRect().height; return offset })
    if (offsets.length !== headerOffsets.value.length || offsets.some((offset, index) => offset !== headerOffsets.value[index])) headerOffsets.value = offsets
    const cells = [...heads, ...firstRow]
    const observed = [element, ...cells]
    if (observed.length !== targets.value.length || observed.some((target, index) => target !== targets.value[index])) targets.value = observed
    if (mode.value !== 'auto') return
    for (const column of dataColumns.value) {
      const key = getColumnLayoutKey(column)
      const cell = cells.find(cell => (cell.getAttribute('data-column-layout-key') ?? cell.getAttribute('data-column-key')) === key)
      const actual = cell?.getBoundingClientRect().width
      if (actual !== undefined && actual > 0 && actual !== column._realWidth) column._realWidth = actual
    }
  }
  useElementResize(() => targets.value.length ? targets.value : [viewport.value], () => true, measure)
  onMounted(measure)
  onUpdated(measure)
  watch([dataColumns, mode, () => props.showHeader, () => props.data, () => props.height, () => props.maxHeight, () => props.size], measure, { flush: 'post', deep: true })
  watch(dir, () => { if (viewport.value) setInlineScrollLeft(viewport.value, readingOffset) }, { flush: 'post' })
  const onScroll = () => { if (viewport.value) readingOffset = inlineScrollLeft(viewport.value) }
  const onKeydown = (event: KeyboardEvent) => {
    if (event.target !== event.currentTarget || !viewport.value || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    const element = viewport.value
    const maximum = Math.max(0, element.scrollWidth - element.clientWidth)
    if (!maximum) return
    event.preventDefault()
    const grow = dir.value === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
    setInlineScrollLeft(element, event.key === 'Home' ? 0 : event.key === 'End' ? maximum : inlineScrollLeft(element) + (event.key === grow ? 40 : -40))
  }
  return { dataColumns, groupColumns, bodyWidth, headerOffsets, mode, dir, measure, onScroll, onKeydown }
}
