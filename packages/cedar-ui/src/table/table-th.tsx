import {
  computed,
  createVNode,
  defineComponent,
  inject,
  PropType,
  toRefs,
} from "vue";
import { getPrefixCls, createNamespace } from "../_utils/global-config";
import Checkbox from "../checkbox";
import Radio from "../radio";
import Button from "../button";
import Trigger from "../trigger";
import { IconCaretDown } from '@cedar-design/icons-vue/icon-caret-down'
import { IconCaretUp } from '@cedar-design/icons-vue/icon-caret-up'
import { IconFilter } from '@cedar-design/icons-vue/icon-filter'
import { TableColumnData, TableOperationColumn } from "./types";
import { useColumnSorter } from "./hooks/use-column-sorter";
import { useColumnFilter } from "./hooks/use-column-filter";
import { getFixedCls, getStyle } from "./utils";
import { isBoolean, isFunction, isObject } from "../_utils/is";
import { TableContext, tableInjectionKey } from "./context";
import AutoTooltip from "../_components/auto-tooltip/auto-tooltip";
import IconHover from "../_components/IconHover.vue";
import { TABLE_EXTRA_COLUMN_KEY } from "./extra-column";
import { useI18n } from "../locale";

const { name } = createNamespace("th");

export default defineComponent({
  name,
  props: {
    column: {
      type: Object as PropType<TableColumnData>,
      default: () => ({}),
    },
    operations: {
      type: Array as PropType<TableOperationColumn[]>,
      default: () => [],
    },
    dataColumns: {
      type: Array as PropType<TableColumnData[]>,
      default: () => [],
    },
    resizable: Boolean,
  },
  setup(props, { slots }) {
    const { column } = toRefs(props);
    const prefixCls = getPrefixCls("table");
    const { t } = useI18n();

    const tableCtx = inject<Partial<TableContext>>(tableInjectionKey, {});

    const resizing = computed(
      () =>
        props.column?.dataIndex &&
        tableCtx.resizingColumn === props.column.dataIndex,
    );

    const tooltipProps = computed(() => {
      if (isObject(props.column?.tooltip)) {
        return props.column.tooltip;
      }
      return undefined;
    });

    const filterIconAlignLeft = computed(() => {
      if (
        props.column?.filterable &&
        isBoolean(props.column.filterable.alignLeft)
      ) {
        return props.column.filterable.alignLeft;
      }
      return tableCtx.filterIconAlignLeft;
    });

    const {
      sortOrder,
      hasSorter,
      hasAscendBtn,
      hasDescendBtn,
      nextSortOrder,
      handleClickSorter,
      // @ts-ignore
    } = useColumnSorter({
      column,
      tableCtx,
    });

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
    });

    const renderFilterContent = () => {
      const { filterable } = props.column;

      if (props.column.slots?.["filter-content"]) {
        return props.column.slots?.["filter-content"]({
          filterValue: columnFilterValue.value,
          setFilterValue,
          handleFilterConfirm,
          handleFilterReset,
        });
      }

      if (filterable?.slotName) {
        return tableCtx?.slots?.[filterable?.slotName]?.({
          filterValue: columnFilterValue.value,
          setFilterValue,
          handleFilterConfirm,
          handleFilterReset,
        });
      }

      if (filterable?.renderContent) {
        return filterable.renderContent({
          filterValue: columnFilterValue.value,
          setFilterValue,
          handleFilterConfirm,
          handleFilterReset,
        });
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
                      modelValue={columnFilterValue.value[0] ?? ""}
                      uninjectGroupContext
                      // @ts-ignore
                      onChange={handleRadioFilterChange}
                    >
                      {item.text}
                    </Radio>
                  )}
                </li>
              );
            })}
          </ul>
          <div class={`${prefixCls}-filters-bottom`}>
            <Button size="xs" onClick={handleFilterReset}>
              {t("table.resetText")}
            </Button>
            <Button status="primary" size="xs" onClick={handleFilterConfirm}>
              {t("table.confirmButtonText")}
            </Button>
          </div>
        </div>
      );
    };

    const renderFilter = () => {
      const { filterable } = props.column;

      if (!filterable) {
        return null;
      }

      return (
        <Trigger
          v-slots={{ content: renderFilterContent }}
          open={filterOpen.value}
          trigger="click"
          autoFitPosition
          popupOffset={inlineFilter.value ? 4 : 0}
          onUpdate:open={handleFilterOpenChange}
          {...filterable.triggerProps}
        >
          <IconHover
            class={[
              `${prefixCls}-filters`,
              {
                [`${prefixCls}-filters-active`]: isFilterActive.value,
                [`${prefixCls}-filters-open`]: filterOpen.value,
                [`${prefixCls}-filters-align-left`]: inlineFilter.value,
              },
            ]}
            // @ts-ignore
            onClick={(ev: Event) => ev.stopPropagation()}
          >
            {props.column.slots?.["filter-icon"]?.() ?? filterable.icon?.() ?? (
              <IconFilter />
            )}
          </IconHover>
        </Trigger>
      );
    };

    const cellCls = computed(() => {
      const cls: any[] = [
        `${prefixCls}-cell`,
        `${prefixCls}-cell-align-${props.column?.align ?? (props.column.children ? "center" : "start")}`,
      ];

      if (hasSorter.value) {
        cls.push(`${prefixCls}-cell-with-sorter`, {
          [`${prefixCls}-cell-next-ascend`]: nextSortOrder.value === "ascend",
          [`${prefixCls}-cell-next-descend`]: nextSortOrder.value === "descend",
        });
      }

      if (filterIconAlignLeft.value) {
        cls.push(`${prefixCls}-cell-with-filter`);
      }

      if (showHeaderActions.value) {
        cls.push(`${prefixCls}-cell-with-actions`);
      }

      return cls;
    });

    const renderTitle = () => {
      if (slots.default) {
        return slots.default();
      }
      if (
        props.column?.titleSlotName &&
        tableCtx.slots?.[props.column.titleSlotName]
      ) {
        return tableCtx.slots[props.column.titleSlotName]?.({
          column: props.column,
        });
      }
      if (props.column?.slots?.title) {
        return props.column.slots.title();
      }
      if (isFunction(props.column.title)) {
        return props.column.title();
      }
      return props.column.title;
    };

    const isExtraColumn = computed(() => {
      const key = tableCtx.extraColumnDataIndex ?? TABLE_EXTRA_COLUMN_KEY;
      return props.column?.dataIndex === key;
    });

    /** 叶子列且外部提供了 #header-cell-actions 时展示操作区（插槽在 render 时再调用） */
    const showHeaderActions = computed(() => {
      if (
        isExtraColumn.value ||
        props.column?.children?.length ||
        !props.column?.dataIndex
      ) {
        return false;
      }
      return Boolean(tableCtx.slots?.["header-cell-actions"]);
    });

    const renderHeaderActions = () => {
      if (!showHeaderActions.value || !props.column?.dataIndex) return null;
      return tableCtx.slots?.["header-cell-actions"]?.({
        column: props.column,
        dataIndex: props.column.dataIndex,
      });
    };

    // 表头操作区（筛选 + 外部 actions）固定在右侧；显式 alignLeft 时筛选仍跟在标题旁
    const filterInActions = computed(() => {
      return Boolean(
        showHeaderActions.value &&
        props.column?.filterable &&
        !filterIconAlignLeft.value,
      );
    });

    const inlineFilter = computed(
      () => filterIconAlignLeft.value || filterInActions.value,
    );

    const renderTitleNode = () => {
      if (props.column?.ellipsis && props.column?.tooltip) {
        return (
          <AutoTooltip
            class={`${prefixCls}-th-title`}
            tooltipProps={tooltipProps.value}
          >
            {renderTitle()}
          </AutoTooltip>
        );
      }
      return (
        <span
          class={[
            `${prefixCls}-th-title`,
            { [`${prefixCls}-text-ellipsis`]: props.column?.ellipsis },
          ]}
        >
          {renderTitle()}
        </span>
      );
    };

    const renderSorterNode = () => {
      if (!hasSorter.value) return null;
      return (
        <span class={`${prefixCls}-sorter`}>
          {hasAscendBtn.value && (
            <div
              class={[
                `${prefixCls}-sorter-icon`,
                {
                  [`${prefixCls}-sorter-icon-active`]:
                    sortOrder.value === "ascend",
                },
              ]}
            >
              <IconCaretUp />
            </div>
          )}
          {hasDescendBtn.value && (
            <div
              class={[
                `${prefixCls}-sorter-icon`,
                {
                  [`${prefixCls}-sorter-icon-active`]:
                    sortOrder.value === "descend",
                },
              ]}
            >
              <IconCaretDown />
            </div>
          )}
        </span>
      );
    };

    const renderCell = () => {
      if (isExtraColumn.value) {
        const extraHeader =
          tableCtx.slots?.["extra-column-header"]?.({
            column: props.column,
          }) ?? renderTitle();
        return (
          <span class={[`${prefixCls}-cell`, `${prefixCls}-cell-align-center`]}>
            {extraHeader}
          </span>
        );
      }

      return (
        <span
          class={cellCls.value}
          role={hasSorter.value ? 'button' : undefined}
          tabindex={hasSorter.value ? 0 : undefined}
          onClick={hasSorter.value ? handleClickSorter : undefined}
          onKeydown={
            hasSorter.value
              ? (event: KeyboardEvent) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    handleClickSorter(event as unknown as MouseEvent)
                  }
                }
              : undefined
          }
        >
          <span class={`${prefixCls}-th-main`}>
            {renderTitleNode()}
            {renderSorterNode()}
            {filterIconAlignLeft.value && renderFilter()}
          </span>
          {showHeaderActions.value && (
            <span
              class={`${prefixCls}-th-actions`}
              role="presentation"
              // @ts-ignore
              onClick={(ev: Event) => ev.stopPropagation()}
            >
              {filterInActions.value && renderFilter()}
              {renderHeaderActions()}
            </span>
          )}
        </span>
      );
    };

    const style = computed(() => {
      const baseStyle = getStyle(
        props.column,
        {
          dataColumns: props.dataColumns,
          operations: props.operations,
        },
        tableCtx.tableLayout,
        tableCtx.readingDirection,
      );
      return {
        ...baseStyle,
        ...props.column?.cellStyle,
        ...props.column?.headerCellStyle,
      };
    });

    const cls = computed(() => [
      `${prefixCls}-th`,
      {
        [`${prefixCls}-col-sorted`]: Boolean(sortOrder.value),
        [`${prefixCls}-th-resizing`]: resizing.value,
      },
      ...getFixedCls(prefixCls, props.column, tableCtx.readingDirection === 'rtl' && tableCtx.hasPhysicalLeftOperations),
      props.column?.cellClass,
      props.column?.headerCellClass,
    ]);

    const handleMouseDown = (ev: MouseEvent) => {
      if (props.column?.dataIndex) {
        tableCtx.onThMouseDown?.(props.column?.dataIndex, ev);
      }
    };

    return () => {
      const colSpan = props.column.colSpan ?? 1;
      const rowSpan = props.column.rowSpan ?? 1;

      return createVNode(
        slots.th?.({
          column: props.column,
        })[0] ?? "th",
        {
          class: cls.value,
          style: style.value,
          colspan: colSpan > 1 ? colSpan : undefined,
          rowspan: rowSpan > 1 ? rowSpan : undefined,
          // auto 布局下渲染后按此 key 量宽回写，修正冻结列 sticky 偏移
          "data-column-key": props.column.dataIndex,
        },
        {
          default: () => [
            renderCell(),
            !inlineFilter.value && renderFilter(),
            props.resizable && (
              <span
                class={`${prefixCls}-column-handle`}
                role="separator"
                tabindex={0}
                aria-label={`Resize ${typeof props.column.title === 'string' ? props.column.title : props.column.dataIndex} column`}
                aria-orientation="vertical"
                aria-valuemin={40}
                aria-valuenow={props.column._resizeWidth ?? props.column._realWidth ?? props.column.width}
                onPointerdown={handleMouseDown}
                onMousedown={handleMouseDown}
                onKeydown={(event: KeyboardEvent) => { if (props.column.dataIndex) tableCtx.onThKeydown?.(props.column.dataIndex, event) }}
              />
            ),
          ],
        },
      );
    };
  },
});
