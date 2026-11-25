import type { Ref } from 'vue'
import { IconFilter } from '@cedar-design/icons-vue/icon-filter'
import IconHover from '../../_components/IconHover.vue'
import Button from '../../button'
import Checkbox from '../../checkbox/base'
import Radio from '../../radio/presentation'
import Trigger from '../../trigger'
import { isComponentColumn } from '../column-slot-source'
import type { TableContext } from '../context'
import { useColumnFilter } from '../features/filter/use-column-filter'
import { forwardTableColumnSlot, forwardTableSlot } from '../forward-table-slot'
import TableSlot from '../TableSlot.vue'
import type { TableColumnData } from '../types'

export function useDesktopHeaderFilter({
  props,
  column,
  tableCtx,
  prefixCls,
  inline,
  t,
}: {
  props: { readonly column: TableColumnData }
  column: Ref<TableColumnData>
  tableCtx: Partial<TableContext>
  prefixCls: string
  inline: () => boolean
  t: (key: string, ...args: any[]) => string
}) {
  const {
    filterOpen,
    isFilterActive,
    isMultipleFilter,
    columnFilterValue,
    handleFilterOpenChange,
    setFilterValue,
    handleCheckboxFilterChange,
    handleRadioFilterChange,
    handleFilterConfirm,
    handleFilterReset,
  } = useColumnFilter({
    column,
    tableCtx,
  })

  const renderFilterContent = () => {
    const { filterable } = props.column

    if (props.column.slots?.['filter-content']) {
      return (
        <TableSlot
          slotProps={{ filterValue: columnFilterValue.value, setFilterValue, handleFilterConfirm, handleFilterReset }}
          v-slots={forwardTableColumnSlot(props.column.slots['filter-content'])}
        />
      )
    }

    if (filterable?.slotName && tableCtx.slots?.[filterable.slotName]) {
      return (
        <TableSlot
          slotProps={{ filterValue: columnFilterValue.value, setFilterValue, handleFilterConfirm, handleFilterReset }}
          v-slots={forwardTableSlot(tableCtx.slots[filterable.slotName])}
        />
      )
    }

    if (filterable?.renderContent) {
      return filterable.renderContent({
        filterValue: columnFilterValue.value,
        setFilterValue,
        handleFilterConfirm,
        handleFilterReset,
      })
    }

    return (
      <div class={`${prefixCls}-filters-content`}>
        <ul class={`${prefixCls}-filters-list`}>
          {filterable?.filters?.map((item, index) => {
            return (
              <li class={`${prefixCls}-filters-item`} key={index}>
                {isMultipleFilter.value ? (
                  <Checkbox
                    value={item.value}
                    modelValue={columnFilterValue.value}
                    uninjectGroupContext
                    // @ts-ignore
                    onChange={handleCheckboxFilterChange}
                  >
                    {item.text}
                  </Checkbox>
                ) : (
                  <Radio
                    value={item.value}
                    modelValue={columnFilterValue.value[0] ?? ''}
                    uninjectGroupContext
                    // @ts-ignore
                    onChange={handleRadioFilterChange}
                  >
                    {item.text}
                  </Radio>
                )}
              </li>
            )
          })}
        </ul>
        <div class={`${prefixCls}-filters-bottom`}>
          <Button size="xs" onClick={handleFilterReset}>
            {t('table.resetText')}
          </Button>
          <Button status="primary" size="xs" onClick={handleFilterConfirm}>
            {t('table.confirmButtonText')}
          </Button>
        </div>
      </div>
    )
  }

  const renderFilter = () => {
    const { filterable } = props.column

    if (!filterable) {
      return null
    }

    const iconSlot = props.column.slots?.['filter-icon']
    const icon =
      iconSlot && isComponentColumn(props.column) ? (
        <TableSlot v-slots={forwardTableColumnSlot(iconSlot)} />
      ) : (
        (iconSlot?.() ?? filterable.icon?.() ?? <IconFilter />)
      )

    return (
      <Trigger
        v-slots={{ content: renderFilterContent }}
        open={filterOpen.value}
        trigger="click"
        autoFitPosition
        popupOffset={inline() ? 4 : 0}
        onUpdate:open={handleFilterOpenChange}
        {...filterable.triggerProps}
      >
        <IconHover
          class={[
            `${prefixCls}-filters`,
            {
              [`${prefixCls}-filters-active`]: isFilterActive.value,
              [`${prefixCls}-filters-open`]: filterOpen.value,
              [`${prefixCls}-filters-align-left`]: inline(),
            },
          ]}
          // @ts-ignore
          onClick={(ev: Event) => ev.stopPropagation()}
        >
          {icon}
        </IconHover>
      </Trigger>
    )
  }

  return { renderFilter }
}
