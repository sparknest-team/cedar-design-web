<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-inner`">
      <PanelHeader
        v-bind="{
          ...headerOperations,
          icons: headerIcons,
        }"
        :prefix-cls="pickerPrefixCls"
        :title="headerTitle"
        mode="month"
        :value="headerValue"
        :on-label-click="onHeaderLabelClick"
      />
      <PanelBody
        mode="month"
        :prefix-cls="pickerPrefixCls"
        :rows="rows"
        :value="value"
        :range-values="rangeValues"
        :disabled-date="disabledDate"
        :is-same-time="isSameTime"
        :date-render="dateRender"
        @cell-click="onCellClick"
        @cell-mouse-enter="onCellMouseEnter"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { createNamespace } from '../../../../_utils/global-config'
import { computed, defineComponent, PropType, toRefs } from 'vue'
import type { Dayjs } from 'dayjs'
import { RenderFunc } from '../../../../_components/render-function'
import { getPrefixCls } from '../../../../_utils/global-config'
import { dayjs } from '../../../../_utils/date'
import type { Cell, DisabledDate, HeaderIcons, HeaderOperations, IsSameTime } from '../../types'
import { newArray } from '../../utils'
import PanelHeader, { HeaderLabelClickFunc } from '../Header.vue'
import PanelBody from '../Body.vue'
import useInjectDatePickerTransform from '../../hooks/use-inject-datepicker-transform'

import { dateMonthLabel } from '../../../date-labels'

const MONTH_LIST = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const CELL_COUNT = 12
const ROW_COUNT = 4
const COL_COUNT = 3

export default defineComponent({
  name: createNamespace('date-picker-month-panel').name,
  components: {
    PanelHeader,
    PanelBody,
  },
  props: {
    headerValue: {
      type: Object as PropType<Dayjs>,
      required: true,
    },
    headerOperations: {
      type: Object as PropType<HeaderOperations>,
      default: () => ({}),
    },
    headerIcons: {
      type: Object as PropType<HeaderIcons>,
      default: () => ({}),
    },
    value: {
      type: Object as PropType<Dayjs>,
    },
    disabledDate: {
      type: Function as PropType<DisabledDate>,
    },
    rangeValues: {
      type: Array as PropType<Array<Dayjs | undefined>>,
    },
    dateRender: {
      type: Function as PropType<RenderFunc>,
    },
    onHeaderLabelClick: {
      type: Function as PropType<HeaderLabelClickFunc>,
    },
    abbreviation: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['select', 'cell-mouse-enter'],
  setup(props, { emit }) {
    const datePickerT = useInjectDatePickerTransform()

    const { headerValue } = toRefs(props)
    const prefixCls = computed(() => getPrefixCls('panel-month'))
    const pickerPrefixCls = getPrefixCls('picker')

    const headerTitle = computed(() => headerValue.value.format('YYYY'))

    const rows = computed(() => {
      const year = headerValue.value.year()
      const flatData = newArray<Cell>(CELL_COUNT).map((_, index) => ({
        label: dateMonthLabel(props.abbreviation,
          datePickerT(`datePicker.month.short.${MONTH_LIST[index]}`),
          datePickerT(`datePicker.month.long.${MONTH_LIST[index]}`)),
        value: dayjs(`${year}-${index + 1}`, 'YYYY-M'),
      }))
      const rows = newArray(ROW_COUNT).map((_, index) => flatData.slice(index * COL_COUNT, (index + 1) * COL_COUNT))

      return rows
    })

    const isSameTime: IsSameTime = (current, target) => current.isSame(target, 'month')

    function onCellClick(cellData: Cell) {
      emit('select', cellData.value)
    }

    function onCellMouseEnter(cellData: Cell) {
      emit('cell-mouse-enter', cellData.value)
    }

    return {
      prefixCls,
      pickerPrefixCls,
      headerTitle,
      rows,
      isSameTime,
      onCellClick,
      onCellMouseEnter,
    }
  },
})
</script>
