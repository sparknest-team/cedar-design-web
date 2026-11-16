import type { VNode, CSSProperties } from 'vue'
import { computed, defineComponent, isVNode, toRefs } from 'vue'
import { useId } from '../_utils/vue-compat'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { isFunction, isObject } from '../_utils/is'
import { DescData, RenderData } from './types'
import { getAllElements, isSlotsChildren } from '../_utils/vue-utils'
import { useResponsiveState } from '../grid/hook/use-responsive-state'
import { useSize } from '../_hooks/use-size'
import { descriptionsProps, isPositiveInteger } from './props'


const { name } = createNamespace('descriptions')

export default defineComponent({
  name,
  props: descriptionsProps,
  /**
   * @zh 标题
   * @en Title
   * @slot title
   */
  /**
   * @zh 数据标签
   * @en Data label
   * @slot label
   * @binding {string} label
   * @binding {number} index
   * @binding {DescData} data
   */
  /**
   * @zh 数据内容
   * @en Data value
   * @slot value
   * @binding {string} value
   * @binding {number} index
   * @binding {DescData} data
   */
  setup(props, { slots }) {
    const { column, size } = toRefs(props)
    const prefixCls = getPrefixCls('descriptions')
    const { mergedSize } = useSize(size)

    const safeColumn = computed(() => typeof column.value === 'number' || (column.value && typeof column.value === 'object') ? column.value : 3)
    const responsiveColumn = useResponsiveState(safeColumn, 3, true)
    const computedColumn = computed(() => isPositiveInteger(responsiveColumn.value) ? responsiveColumn.value : 3)
    const titleId = `descriptions-title-${useId()}`

    const labelAlign = computed(() => (isObject(props.align) ? props.align.label : props.align) ?? 'left')
    const valueAlign = computed(() => (isObject(props.align) ? props.align.value : props.align) ?? 'left')

    const labelStyle = computed<CSSProperties>(() => ({
      textAlign: labelAlign.value,
      ...props.labelStyle,
    }))

    const valueStyle = computed<CSSProperties>(() => ({
      textAlign: valueAlign.value,
      ...props.valueStyle,
    }))

    const getItemSpan = (item: DescData | VNode) => {
      const span = isVNode(item) ? item.props?.span : item.span
      return Math.min(isPositiveInteger(span) ? span : 1, computedColumn.value)
    }

    const getGroupedData = (data: (DescData | VNode)[]) => {
      if (props.layout === 'inline-auto') {
        return [data.map((item, index) => ({ data: item, span: getItemSpan(item), index }))]
      }

      const groupedData: RenderData[][] = []
      let currentRow: RenderData[] = []
      let currentSpan = 0

      const addRow = () => {
        if (currentRow.length) {
          // fill the rest span，not needed, can be removed.
          const restSpan = computedColumn.value - currentSpan
          currentRow[currentRow.length - 1].span += restSpan
          groupedData.push(currentRow)
        }
      }

      data.forEach((item, index) => {
        const itemSpan = getItemSpan(item)

        // add item to new row
        if (currentSpan + itemSpan > computedColumn.value) {
          addRow()

          currentRow = []
          currentSpan = 0
        }

        currentRow.push({
          data: item,
          span: itemSpan,
          index,
        })
        currentSpan += itemSpan
      })

      addRow()

      return groupedData
    }

    const groupedData = computed(() => getGroupedData(props.data ?? []))

    const renderLabel = (item: DescData | VNode, index: number) => {
      if (isVNode(item)) {
        return (isSlotsChildren(item, item.children) && item.children.label?.()) || item.props?.label
      }
      return (
        slots.label?.({ label: item.label, index, data: item }) ?? (isFunction(item.label) ? item.label() : item.label)
      )
    }

    const renderValue = (item: DescData | VNode, index: number) => {
      if (isVNode(item)) {
        return item
      }
      return (
        slots.value?.({ value: item.value, index, data: item }) ?? (isFunction(item.value) ? item.value() : item.value)
      )
    }

    const renderVerticalItems = (data: RenderData[]) => (
      <>
        <tr class={`${prefixCls}-row`}>
          {data.map((item, index) => (
            <th
              scope="col"
              key={`label-${index}`}
              class={[`${prefixCls}-item-label`, `${prefixCls}-item-label-block`]}
              style={labelStyle.value}
              colspan={item.span}
            >
              {renderLabel(item.data, item.index)}
            </th>
          ))}
        </tr>
        <tr class={`${prefixCls}-row`}>
          {data.map((item, index) => (
            <td
              key={`value-${index}`}
              class={[`${prefixCls}-item-value`, `${prefixCls}-item-value-block`]}
              style={valueStyle.value}
              colspan={item.span}
            >
              {renderValue(item.data, item.index)}
            </td>
          ))}
        </tr>
      </>
    )

    const renderHorizontalItems = (data: RenderData[], index: number) => (
      <tr class={`${prefixCls}-row`} key={`tr-${index}`}>
        {data.map((item) => (
          <>
            <th scope="row" class={[`${prefixCls}-item-label`, `${prefixCls}-item-label-block`]} style={labelStyle.value}>
              {renderLabel(item.data, item.index)}
            </th>
            <td
              class={[`${prefixCls}-item-value`, `${prefixCls}-item-value-block`]}
              style={valueStyle.value}
              colspan={item.span * 2 - 1}
            >
              {renderValue(item.data, item.index)}
            </td>
          </>
        ))}
      </tr>
    )

    const renderInlineItems = (data: RenderData[], index: number) => (
      <tr class={`${prefixCls}-row`} key={`inline-${index}`}>
        {data.map((item, index) => (
          <td key={`item-${index}`} class={`${prefixCls}-item`} colspan={item.span}>
            <div class={[`${prefixCls}-item-label`, `${prefixCls}-item-label-inline`]} style={labelStyle.value}>
              {renderLabel(item.data, item.index)}
            </div>
            <div class={[`${prefixCls}-item-value`, `${prefixCls}-item-value-inline`]} style={valueStyle.value}>
              {renderValue(item.data, item.index)}
            </div>
          </td>
        ))}
      </tr>
    )

    const renderItems = (data: RenderData[], index: number) => {
      if (['inline-horizontal', 'inline-vertical', 'inline-auto'].includes(props.layout)) {
        return renderInlineItems(data, index)
      }
      if (props.layout === 'vertical') {
        return renderVerticalItems(data)
      }
      return renderHorizontalItems(data, index)
    }

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-layout-${props.layout}`,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-border`]: props.bordered,
      },
      {
        [`${prefixCls}-table-layout-fixed`]: props.tableLayout === 'fixed',
      },
    ])

    const renderTitle = () => {
      const title = slots.title?.() ?? props.title
      if (title) {
        return <div id={slots.title ? titleId : undefined} class={`${prefixCls}-title`}>{title}</div>
      }
      return null
    }

    return () => {
      const _groupedData = slots.default ? getGroupedData(getAllElements(slots.default())) : groupedData.value

      return (
        <div class={cls.value}>
          {renderTitle()}
          <div class={`${prefixCls}-body`}>
            <table class={`${prefixCls}-table`} aria-label={props.ariaLabel ?? (slots.title ? undefined : props.title)} aria-labelledby={props.ariaLabel == null && slots.title ? titleId : undefined}>
              <tbody>{_groupedData.map((data, index) => renderItems(data, index))}</tbody>
            </table>
          </div>
        </div>
      )
    }
  },
})
