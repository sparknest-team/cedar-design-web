import type { Ref, Slots } from 'vue'
import type { TableCoreProps } from './props'
import type { TableColumnData } from '../types'
import type { useCoreLayout } from '../layout/use-core-layout'
import { orderPhysicalColumns } from '../column-direction'
import { getColumnLayoutKey } from '../extra-column'
import { getFixedCls, getStyle } from '../render/cell-layout'
import { renderCellElement, renderHeaderContent, renderBodyContent, renderTextContent } from '../render/cells'
import { renderDataContent } from '../render/cell-content'
import { buildHeaderAssociations } from '../header-association'
import TableSlot from '../TableSlot.vue'
import { forwardTableSlot } from '../forward-table-slot'

export function renderCoreTable(options: {
  props: TableCoreProps
  attrs: Record<string, unknown>
  slots: Slots
  emit: (...args: any[]) => void
  layout: ReturnType<typeof useCoreLayout>
  viewport: Ref<HTMLElement | undefined>
  table: Ref<HTMLTableElement | undefined>
  prefix: string
  headerId: string
  emptyText: string
}) {
  const { props, slots, emit, layout, prefix, headerId } = options
  const { class: rootClass, style: rootStyle, 'aria-label': label, ...attrs } = options.attrs
  const physical = (columns: TableColumnData[]) => orderPhysicalColumns(columns, column => column.fixed, layout.dir.value)
  const columns = physical(layout.dataColumns.value)
  const headers = layout.groupColumns.value.map(physical)
  const idFor = (row: number, index: number) => `${headerId}-${row}-${index}`
  const association = buildHeaderAssociations(headers.map((row, rowIndex) => row.map((column, index) => ({ id: idFor(rowIndex, index), colSpan: column.colSpan, rowSpan: column.rowSpan }))))
  const cellStyle = (column: TableColumnData) => ({
    ...(layout.mode.value === 'auto' && !column.children?.length ? {
      width: column.width === undefined ? undefined : `${column.width}px`,
      minWidth: column.minWidth === undefined ? undefined : `${column.minWidth}px`,
    } : {}),
    ...getStyle(column, { dataColumns: layout.dataColumns.value, operations: [] }, layout.mode.value, layout.dir.value),
  })
  const fixedClass = (column: TableColumnData) => getFixedCls(prefix, column)
  const size = (value: number | string | undefined) => typeof value === 'number' ? `${value}px` : value
  const renderTitle = (column: TableColumnData) => {
    const slot = slots.header ?? (column.titleSlotName ? slots[column.titleSlotName] : undefined)
    if (slot) return <TableSlot slotProps={{ column }} v-slots={forwardTableSlot(slot)} />
    return typeof column.title === 'function' ? column.title() : column.title
  }
  const rows = props.data ?? []
  return <div {...attrs} class={[
    prefix, `${prefix}-size-${props.size ?? 'md'}`,
    { [`${prefix}-bordered`]: props.bordered, [`${prefix}-stripe`]: props.stripe, [`${prefix}-hover`]: props.hoverable, [`${prefix}-sticky`]: props.stickyHeader }, rootClass,
  ]} style={rootStyle as any} aria-busy={props.loading || undefined}>
    <div ref={element => { options.viewport.value = element as HTMLElement }} class={`${prefix}-viewport`}
      role="region" aria-label={(label as string | undefined) ?? 'Table'} tabindex={0}
      style={{ height: size(props.height), maxHeight: size(props.maxHeight) }}
      onScroll={layout.onScroll} onKeydown={layout.onKeydown}>
      <table ref={element => { options.table.value = element as HTMLTableElement }} class={`${prefix}-table`}
        style={{ tableLayout: layout.mode.value, width: layout.mode.value === 'fixed' ? `${layout.bodyWidth.value}px` : '100%' }}>
        <colgroup>{layout.mode.value === 'fixed' && columns.map(column => <col key={getColumnLayoutKey(column)} width={column._realWidth ?? column.width} />)}</colgroup>
        {props.showHeader && <thead>{headers.map((row, rowIndex) => <tr key={rowIndex}>{row.map((column, index) =>
          renderCellElement('th', undefined, column, {
            key: `${rowIndex}-${index}`, id: idFor(rowIndex, index),
            class: [`${prefix}-th`, ...fixedClass(column), column.cellClass, column.headerCellClass],
            style: { ...cellStyle(column), ...(props.stickyHeader ? { top: `${layout.headerOffsets.value[rowIndex] ?? 0}px` } : {}), ...column.cellStyle, ...column.headerCellStyle },
            scope: column.children?.length ? 'colgroup' : 'col',
            colspan: (column.colSpan ?? 1) > 1 ? column.colSpan : undefined,
            rowspan: (column.rowSpan ?? 1) > 1 ? column.rowSpan : undefined,
            onClick: (event: Event) => emit('header-click', column, event),
          }, () => renderHeaderContent(prefix, {
            class: [`${prefix}-cell`, `${prefix}-cell-align-${column.align ?? (column.children ? 'center' : 'start')}`],
            title: () => <span class={[`${prefix}-th-title`, { [`${prefix}-text-ellipsis`]: column.ellipsis }]}>{renderTitle(column)}</span>,
          })),
        )}</tr>)}</thead>}
        <tbody>{rows.length ? rows.map((record, rowIndex) => <tr key={record[props.rowKey ?? 'key'] ?? rowIndex} class={`${prefix}-tr`}
          onClick={(event: Event) => emit('row-click', record, event)}>
          {columns.map((column, columnIndex) => renderCellElement('td', undefined, column, {
            key: getColumnLayoutKey(column),
            class: [`${prefix}-td`, ...fixedClass(column), column.cellClass, typeof column.bodyCellClass === 'function' ? column.bodyCellClass(record) : column.bodyCellClass],
            style: { ...cellStyle(column), ...column.cellStyle, ...(typeof column.bodyCellStyle === 'function' ? column.bodyCellStyle(record) : column.bodyCellStyle) },
            headers: props.showHeader ? association.headersForSpan(columnIndex).join(' ') || undefined : undefined,
            onClick: (event: Event) => emit('cell-click', record, column, event),
          }, () => renderBodyContent(prefix, {
            align: column.align,
            content: () => renderTextContent(prefix, renderDataContent({ record: { raw: record }, column, rowIndex }, { cell: slots.cell }, slots), column.ellipsis),
          })))}
        </tr>) : <tr class={`${prefix}-empty`}><td colspan={Math.max(1, columns.length)}>
          {slots.empty ? <TableSlot v-slots={forwardTableSlot(slots.empty)} /> : options.emptyText}
        </td></tr>}</tbody>
      </table>
    </div>
    {slots.footer && <div class={`${prefix}-footer`}><TableSlot v-slots={forwardTableSlot(slots.footer)} /></div>}
  </div>
}
