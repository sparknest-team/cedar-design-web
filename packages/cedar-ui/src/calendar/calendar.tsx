import { useDirection } from '../_utils/direction'
import { calendarProps } from './props'
import { defineComponent, computed, toRefs, PropType, ref, provide, nextTick, watch } from 'vue'
import type { Dayjs, UnitType } from 'dayjs'
import Month, { getAllDaysByTime } from './month'
import Year from './year'
import Header from './header'
import { getDayjsValue, getNow, methods, pickDataAttributes } from '../_utils/date'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { useI18n } from '../locale'
import { positiveLength } from '../_utils/size-length'
import { resolveDirection } from '../_utils/direction'
import { calendarKeyboardKey } from './keyboard'

function getFormat(mode: 'day' | 'week' | 'month' | 'year', panel?: boolean) {
  return mode === 'month' || (mode === 'year' && !panel) ? 'YYYY-MM-DD' : 'YYYY-MM'
}

// const defaultProps: CalendarProps = {
//   dayStartOfWeek: 0,
//   panelWidth: 265,
//   defaultMode: 'month',
//   headerType: 'button',
//   modes: ['month', 'year'],
// };


const { name } = createNamespace('calendar')

export default defineComponent({
  name,
  props: calendarProps,
  emits: {
    'update:modelValue': (date: Date) => true,
    'update:mode': (mode: 'month' | 'year') => true,
    /**
     * @zh 选择的日期改变时触发
     * @en Emitted when the selected date changes
     * @property {Date} date
     */
    change: (date: Date) => true,
    /**
     * @zh 日期面板改变时触发
     * @en Emitted when the displayed date changes
     * @property {Date} date
     */
    "panel-change": (date: Date) => true,
  },
  /**
   * @zh 自定义单元格内容
   * @en Custom cell content
   * @slot default
   * @binding {number} year
   * @binding {number} month
   * @binding {number} date
   */
  /**
   * @zh 自定义头部内容
   * @en Custom header content
   * @slot header
   * @binding {number} year
   * @binding {number} month
   */
  setup(props, { emit, slots }) {
    const { isRtl } = useDirection()
    const { dayStartOfWeek, isWeek } = toRefs(props)
    const prefixCls = getPrefixCls('calendar')
    const _mode = ref(props.defaultMode)
    const { t } = useI18n()
    const computedMode = computed(() => {
      if (props.mode) {
        return props.mode
      }

      return _mode.value
    })
    const format = computed(() => getFormat(computedMode.value, props.panel))
    const _value = ref(getDayjsValue(props.defaultValue || Date.now(), format.value))
    const computedValue = computed(() => {
      if (props.modelValue) {
        return getDayjsValue(props.modelValue, format.value)
      }
      return _value.value
    })

    const pageShowDate = ref(computedValue.value || getNow())
    watch(() => props.modelValue?.getTime(), value => {
      if (value !== undefined && Number.isFinite(value)) pageShowDate.value = getDayjsValue(value, format.value)
    })
    const root = ref<HTMLElement>()
    const focusedDate = ref(pageShowDate.value)
    watch(pageShowDate, value => { focusedDate.value = value }, { flush: 'sync' })

    provide(calendarKeyboardKey, {
      cell(time, unit, current = true) {
        const pattern = unit === 'day' ? 'YYYY-MM-DD' : 'YYYY-MM'
        const value = time.format(pattern)
        return {
          role: 'button',
          'aria-label': value,
          'aria-disabled': !props.allowSelect || undefined,
          'data-calendar-cell': value,
          'data-calendar-current': current ? '' : undefined,
          tabindex: current && focusedDate.value.format(pattern) === value ? 0 : -1,
          onFocus: () => { focusedDate.value = time },
          onKeydown: (event: KeyboardEvent) => {
            if (event.target !== event.currentTarget || event.altKey || event.ctrlKey || event.metaKey || event.isComposing) return
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              if (props.allowSelect) (event.currentTarget as HTMLElement).click()
              return
            }
            const horizontal = resolveDirection(event.currentTarget as HTMLElement) === 'rtl' ? -1 : 1
            const step = event.key === 'ArrowRight' ? horizontal : event.key === 'ArrowLeft' ? -horizontal : event.key === 'ArrowDown' ? (unit === 'day' ? 7 : 3) : event.key === 'ArrowUp' ? (unit === 'day' ? -7 : -3) : 0
            if (!step) return
            event.preventDefault()
            const next = methods.add(time, step, unit)
            focusedDate.value = next
            const viewUnit = computedMode.value === 'month' ? 'month' : 'year'
            if (!next.isSame(pageShowDate.value, viewUnit)) onChangePageDate(next)
            nextTick(() => root.value?.querySelector<HTMLElement>(`[data-calendar-cell="${next.format(pattern)}"][data-calendar-current]`)?.focus())
          },
        }
      },
    })

    // page data list
    const pageData = computed(() => {
      return getAllDaysByTime(pageShowDate.value, {
        dayStartOfWeek: dayStartOfWeek.value,
        isWeek: isWeek.value,
      })
    })

    function onChangePageDate(time: Dayjs) {
      pageShowDate.value = time
      emit('panel-change', time.toDate())
    }

    // value / pageShowDate / pageData
    function move(time: Dayjs) {
      if (!props.allowSelect) return
      _value.value = time
      emit('change', time.toDate())
      emit('update:modelValue', time.toDate())
      onChangePageDate(time)
    }

    function selectHandler(time: Dayjs, disabled = false) {
      if (!disabled) {
        move(time)
      }
    }

    const headerValueFormat = computed(() => t(computedMode.value === 'month' ? 'calendar.formatMonth' : 'calendar.formatYear'))

    function changePageShowDate(type: 'prev' | 'next', unit: UnitType) {
      if (type === 'prev') {
        pageShowDate.value = methods.subtract(pageShowDate.value, 1, unit)
      }
      if (type === 'next') {
        pageShowDate.value = methods.add(pageShowDate.value, 1, unit)
      }
      emit('panel-change', pageShowDate.value.toDate())
    }

    function onChangeYear(year: number) {
      const newValue = methods.set(pageShowDate.value, 'year', year)
      pageShowDate.value = newValue
      emit('panel-change', newValue.toDate())
    }

    function onChangeMonth(month: number) {
      const newValue = methods.set(pageShowDate.value, 'month', month - 1)
      pageShowDate.value = newValue
      emit('panel-change', newValue.toDate())
    }

    function changeMode(mode: 'month' | 'year') {
      if (props.mode === undefined) _mode.value = mode
      emit('update:mode', mode)
    }

    const cls = computed(() => [
      { [`${prefixCls}-rtl`]: isRtl.value },
      prefixCls,
      computedMode.value === 'month' ? `${prefixCls}-mode-month` : `${prefixCls}-mode-year`,
      {
        [`${prefixCls}-panel`]: props.panel && (computedMode.value === 'month' || computedMode.value === 'year'),
      },
    ])

    const baseStyle = computed(() => props.panel && props.panelWidth !== undefined ? { width: positiveLength(props.panelWidth, '') } : {})

    // const baseHeaderProps = {
    //   prefixCls,
    //   changePageShowDate,
    //   headerValueFormat,
    //   mergedPageShowDate,
    //   innerMode,
    //   panelOperations,
    // };

    return () => (
      <div ref={root} class={cls.value} style={baseStyle.value} {...pickDataAttributes(props)}>
        <Header
          move={move}
          allowSelect={props.allowSelect}
          headerValueFormat={headerValueFormat.value}
          modes={props.modes}
          mode={computedMode.value}
          pageShowData={pageShowDate.value}
          dayStartOfWeek={props.dayStartOfWeek}
          isWeek={props.isWeek}
          onModeChange={changeMode}
          onYearChange={onChangeYear}
          onMonthChange={onChangeMonth}
          changePageShowDate={changePageShowDate}
          v-slots={{ default: slots.header }}
        />
        {computedMode.value === 'month' && (
          <div class={`${prefixCls}-body`}>
            <Month
              panel={props.panel}
              key={pageShowDate.value.month()}
              pageData={pageData.value}
              value={computedValue.value}
              mode={computedMode.value}
              selectHandler={selectHandler}
              isWeek={props.isWeek}
              dayStartOfWeek={props.dayStartOfWeek}
              pageShowDate={pageShowDate.value}
              v-slots={{ default: slots.default }}
            />
          </div>
        )}
        {computedMode.value === 'year' && (
          <div class={`${prefixCls}-body`}>
            <Year
              panel={props.panel}
              key={pageShowDate.value.year()}
              pageData={pageData.value}
              pageShowData={pageShowDate.value}
              mode={computedMode.value}
              isWeek={props.isWeek}
              value={computedValue.value}
              dayStartOfWeek={props.dayStartOfWeek}
              selectHandler={selectHandler}
              v-slots={{ default: slots.default }}
            />
          </div>
        )}
        {props.panel && props.panelTodayBtn && <div class={`${prefixCls}-footer-btn-wrapper`}><button type="button" disabled={!props.allowSelect} onClick={() => move(getNow())}>{t('calendar.today')}</button></div>}
      </div>
    )
  },
})
