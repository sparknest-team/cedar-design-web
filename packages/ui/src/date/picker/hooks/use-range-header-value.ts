import { computed, nextTick, reactive, toRefs, watch } from 'vue'
import type { Dayjs } from 'dayjs'
import { getDayjsValue, getSortedDayjsArray, methods } from '../../../_utils/date'
import { CalendarValue, Mode } from '../types'
import useHeaderValue from './use-header-value'
import usePanelSpan from './use-panel-span'

interface RangeHeaderValueProps {
  mode: Mode
  startHeaderMode?: Mode
  endHeaderMode?: Mode
  value: CalendarValue[] | undefined
  defaultValue: CalendarValue[] | undefined
  selectedValue: (Dayjs | undefined)[]
  format: string
  onChange?: (newVal: Dayjs[]) => void
}

export default function useRangeHeaderValue(props: RangeHeaderValueProps) {
  const { startHeaderMode, endHeaderMode, mode, value, defaultValue, selectedValue, format, onChange } = toRefs(props)

  const isDateOrWeek = computed(() => ['date', 'week'].includes(mode.value))

  const unit = computed(() => (isDateOrWeek.value ? 'M' : 'y'))

  const isSame = (current: Dayjs, target: Dayjs) => current.isSame(target, unit.value)

  const { span, superSpan } = usePanelSpan(
    reactive({
      mode,
    }),
  )

  const startMode = computed(() => startHeaderMode?.value || mode.value)
  const endMode = computed(() => endHeaderMode?.value || mode.value)

  const controlledViewport = computed(() => {
    const dates = value.value?.map((part) => getDayjsValue(part, format.value))
    if (dates?.length === 2 && dates[0] && dates[1]) {
      return getFixedValue([dates[0], dates[1]]).map((part) => part.toDate())
    }
    return value.value
  })
  const startValue = computed(() => controlledViewport.value?.[0])
  const endValue = computed(() => controlledViewport.value?.[1])

  const startDefaultValue = computed(() => defaultValue.value?.[0])
  const endDefaultValue = computed(() => defaultValue.value?.[1])

  const emitChange = (newVal: Dayjs[]) => {
    onChange?.value && onChange.value(newVal)
  }
  const {
    headerValue: startHeaderValue,
    setHeaderValue: setStartHeaderValue,
    getDefaultLocalValue: getDefaultStartHeaderValue,
  } = useHeaderValue(
    reactive({
      mode: startMode,
      value: startValue,
      defaultValue: startDefaultValue,
      selectedValue: undefined,
      format,
      onChange: (newVal: Dayjs) => {
        emitChange([newVal, endHeaderValue.value])
      },
    }),
  )

  const {
    headerValue: endHeaderValue,
    setHeaderValue: setEndHeaderValue,
    getDefaultLocalValue: getDefaultEndHeaderValue,
  } = useHeaderValue(
    reactive({
      mode: endMode,
      value: endValue,
      defaultValue: endDefaultValue,
      selectedValue: undefined,
      format,
      onChange: (newVal: Dayjs) => {
        emitChange([startHeaderValue.value, newVal])
      },
    }),
  )

  const setHeaderValue = (newVal: Dayjs[]) => {
    const startChanged = !isSame(startHeaderValue.value, newVal[0])
    const endChanged = !isSame(endHeaderValue.value, newVal[1])
    if (startChanged && !endChanged) {
      newVal = [newVal[0], methods.add(newVal[0], span.value, 'M')]
    } else if (endChanged && !startChanged) {
      newVal = [methods.subtract(newVal[1], span.value, 'M'), newVal[1]]
    } else {
      newVal = getFixedValue(newVal)
    }
    const isSameStartValue = isSame(startHeaderValue.value, newVal[0])
    const isSameEndValue = isSame(endHeaderValue.value, newVal[1])

    setStartHeaderValue(newVal[0], false)
    setEndHeaderValue(newVal[1], false)

    if (!isSameStartValue || !isSameEndValue) {
      onChange?.value && onChange?.value(newVal)
    }
  }

  function getFixedValue(values: Dayjs[]) {
    // eslint-disable-next-line prefer-const
    let [header0, header1] = getSortedDayjsArray(values)

    const nextHeader = methods.add(header0, span.value, 'M')

    if (header1.isBefore(nextHeader, unit.value)) {
      header1 = nextHeader
    }

    return [header0, header1]
  }

  function getFormSelectedValue() {
    let selected0 = selectedValue.value?.[0]
    let selected1 = selectedValue.value?.[1]

    if (selected0 && selected1) {
      ;[selected0, selected1] = getSortedDayjsArray([selected0, selected1])
    }

    return [selected0, selected1]
  }

  // 1. 目前为此，在非受控情况下，start 和 end 的值是一样的，所以需要 fix 一下
  // 2. 附加 selectedValue 处理
  const [selected0, selected1] = getFormSelectedValue()
  const [header0, header1] = getFixedValue([selected0 || startHeaderValue.value, selected1 || endHeaderValue.value])
  setStartHeaderValue(header0, false)
  setEndHeaderValue(header1, false)

  const resetHeaderValue = (isCurrent: () => boolean = () => true) => {
    // Controlled viewports are owned by the parent, including on open/reopen.
    if (!isCurrent() || value.value !== undefined) return
    const defaultStartHeaderValue = getDefaultStartHeaderValue()
    const defaultEndHeaderValue = getDefaultEndHeaderValue()
    if (!isCurrent()) return
    let pending = true

    // Because selectedValue is used, it may not be updated in time, so add nextTick
    nextTick(() => {
      if (!pending || !isCurrent()) return
      pending = false
      const [selected0, selected1] = getFormSelectedValue()
      const [header0, header1] = getFixedValue([
        selected0 || defaultStartHeaderValue,
        selected1 || defaultEndHeaderValue,
      ])
      if (isCurrent()) setHeaderValue([header0, header1])
    })
  }

  // The outer arrows move the viewport pair together; navigation never changes selection.
  const shiftViewport = (months: number) =>
    setHeaderValue([methods.add(startHeaderValue.value, months, 'M'), methods.add(endHeaderValue.value, months, 'M')])
  const computedStartHeaderOperations = computed(() => ({
    onSuperPrev: () => shiftViewport(-superSpan.value),
    ...(isDateOrWeek.value ? { onPrev: () => shiftViewport(-span.value) } : {}),
  }))
  const computedEndHeaderOperations = computed(() => ({
    onSuperNext: () => shiftViewport(superSpan.value),
    ...(isDateOrWeek.value ? { onNext: () => shiftViewport(span.value) } : {}),
  }))

  return {
    startHeaderValue,
    endHeaderValue,
    startHeaderOperations: computedStartHeaderOperations,
    endHeaderOperations: computedEndHeaderOperations,
    setHeaderValue,
    resetHeaderValue,
  }
}
