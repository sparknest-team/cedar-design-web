import { defineComponent, computed, PropType } from 'vue'
import type { Dayjs } from 'dayjs'
import Select from '../select'
import Button from '../button'
import Radio from '../radio'
import { IconLeft } from '@cedar-design/icons-vue/icon-left'
import { IconRight } from '@cedar-design/icons-vue/icon-right'
import { getNow } from '../_utils/date'
import { isArray } from '../_utils/is'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { useI18n } from '../locale'


const { name } = createNamespace('header')

export default defineComponent({
  name,
  props: {
    allowSelect: { type: Boolean, default: true },
    mode: {
      type: String as PropType<'day' | 'week' | 'month' | 'year'>,
    },
    dayStartOfWeek: {
      type: Number as PropType<0 | 1>,
    },
    isWeek: {
      type: Boolean,
    },
    panel: {
      type: Boolean,
    },
    modes: {
      type: Array as PropType<('day' | 'week' | 'month' | 'year')[]>,
    },
    headerType: {
      type: String,
    },
    pageShowData: {
      type: Object as PropType<Dayjs>,
      required: true,
    },
    move: {
      type: Function,
      required: true,
    },
    onYearChange: {
      type: Function,
      required: true,
    },
    onMonthChange: {
      type: Function,
      required: true,
    },
    changePageShowDate: {
      type: Function,
      required: true,
    },
    onModeChange: {
      type: Function as PropType<(value: any, ev?: Event) => void>,
      required: true,
    },
    headerValueFormat: {
      type: String,
      required: true,
    },
  },
  emits: ['yearChange', 'monthChange'],
  setup(props, { slots }) {
    // const {
    //   changePageShowDate,
    //   headerValueFormat,
    //   mergedPageShowDate,
    //   move,
    //   mode,
    //   changeMode,
    //   onChangeYear,
    //   onChangeMonth,
    // } = toRefs(props);
    // const getKeyboardEvents = useKeyboardEvent();
    const prefixCls = getPrefixCls('calendar')
    const { t } = useI18n()
    const modesOptions = computed(() => isArray(props.modes)
      ? props.modes.map((m) => ({
          label: t(`datePicker.view.${m}`),
          value: m,
        }))
      : [])

    const isSelectHeaderType = props.headerType === 'select'

    const pageShowDateYear = computed(() => props.pageShowData.year())
    const pageShowDateMonth = computed(() => props.pageShowData.month() + 1)
    const optionsYear = computed(() => {
      const options = [pageShowDateYear.value]
      for (let i = 1; i <= 10; i++) {
        options.unshift(pageShowDateYear.value - i)
      }
      for (let i = 1; i < 10; i++) {
        options.push(pageShowDateYear.value + i)
      }
      return options
    })
    const optionsMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return () => (
      <div class={`${prefixCls}-header`}>
        <div class={`${prefixCls}-header-left`}>
          {isSelectHeaderType ? (
            <>
              <Select
                size="sm"
                class={`${prefixCls}-header-value-year`}
                defaultValue={pageShowDateYear.value}
                options={optionsYear.value}
                onChange={props.onYearChange}
                popupContainer={`${prefixCls}-header`}
              />
              {props.mode === 'month' && (
                <Select
                  size="sm"
                  class={`${prefixCls}-header-value-month`}
                  defaultValue={pageShowDateMonth.value}
                  options={optionsMonth}
                  onChange={props.onMonthChange}
                  popupContainer={`${prefixCls}-header`}
                />
              )}
            </>
          ) : (
            <>
              <button
                type="button"
                class={`${prefixCls}-header-icon`}
                aria-label={t(props.mode === 'year' ? 'datePicker.previousYear' : 'datePicker.previousMonth')}
                onClick={() => props.changePageShowDate('prev', props.mode)}
              >
                <IconLeft />
              </button>
              <div class={`${prefixCls}-header-value`}>
                {slots.default
                  ? slots.default({
                      year: pageShowDateYear.value,
                      month: pageShowDateMonth.value,
                    })
                  : props.pageShowData.format(props.headerValueFormat)}
              </div>
              <button
                type="button"
                aria-label={t(props.mode === 'year' ? 'datePicker.nextYear' : 'datePicker.nextMonth')}
                class={`${prefixCls}-header-icon`}
                onClick={() => props.changePageShowDate('next', props.mode)}
              >
                <IconRight />
              </button>
            </>
          )}
          <Button size="sm" disabled={!props.allowSelect} onClick={() => props.move(getNow())}>
            {t(`datePicker.today`)}
          </Button>
        </div>
        <div class={`${prefixCls}-header-right`}>
          <Radio.Group
            size="sm"
            variant="button"
            options={modesOptions.value}
            onChange={props.onModeChange}
            modelValue={props.mode}
          />
        </div>
      </div>
    )
  },
})
