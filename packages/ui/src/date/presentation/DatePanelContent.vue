<template>
  <RangeContent
    v-if="range"
    v-bind="{ ...$attrs, ...bindings }"
    :model-value="rangeValue"
    :picker-value="rangePickerValue"
    :disabled="options.disabled"
    @select="selectDraft"
    @change="select"
    @update:picker-value="navigate"
  >
    <template v-for="name in forwardedSlots" #[name]="scope"><slot :name="name" v-bind="scope || {}" /></template>
  </RangeContent>
  <CalendarContent
    v-else
    v-bind="{ ...$attrs, ...bindings }"
    :model-value="singleValue"
    :picker-value="singlePickerValue"
    :disabled="Boolean(options.disabled)"
    @change="select"
    @update:picker-value="navigate"
  >
    <template v-for="(_, name) in $slots" #[name]="scope"><slot :name="name" v-bind="scope || {}" /></template>
  </CalendarContent>
</template>
<script setup lang="ts">
import { computed, shallowRef, useSlots, watch } from 'vue'
import dayjs from 'dayjs'
import { createNamespace } from '../../_utils/global-config'
import { calendarValueFormat, fromCalendarValue, toCalendarValue } from '../calendar-value'
import { isCalendarDateDisabled } from '../date-rules'
import { dateTimeDisabledRules } from '../date-time-rules'
import { dateDisplayFormat, dateUsesSeconds, parseDateValue, sameDateSelection, type DateSide } from '../date-value'
import { normalizeDateRange } from '../normalize-date-range'
import type { DatePanelContentProps } from '../panel-state'
import RangeContent from '../picker/DateRangePicker.vue'
import CalendarContent from '../picker/Picker.vue'
import { dateTimePickerOptions } from '../time-picker-options'

defineOptions({ name: createNamespace('date-panel-content').name, inheritAttrs: false })
const props = defineProps<DatePanelContentProps>()
const { n } = createNamespace('date-picker')
const slots = useSlots()
const forwardedSlots = computed(() => Object.keys(slots).filter((name) => name !== 'actions'))
const emit = defineEmits(['select', 'confirm', 'navigate'])
const bindings = computed(() => {
  const {
    modelValue: _model,
    defaultValue: _default,
    disabled: _disabled,
    shortcuts: _shortcuts,
    shortcutsPosition: _position,
    previewShortcut: _preview,
    pickerValue: _picker,
    defaultPickerValue: _defaultPicker,
    ...options
  } = props.options
  const instant = (date: Date) =>
    options.timeZone
      ? parseDateValue(dayjs(date).format('YYYY-MM-DD HH:mm:ss'), {
          ...options,
          valueFormat: 'YYYY-MM-DD HH:mm:ss',
        })?.toDate()
      : date
  return {
    ...options,
    timePickerProps: {
      ...dateTimePickerOptions(
        'timePickerProps' in options ? (options.timePickerProps as Record<string, unknown>) : undefined,
      ),
      format: dateUsesSeconds(options) ? 'HH:mm:ss' : 'HH:mm',
    },
    defaultPickerValue: undefined,
    showNowButton: false,
    mode: props.options.type,
    format: dateDisplayFormat(props.options),
    defaultValue: undefined,
    valueFormat: calendarValueFormat(props.options),
    open: true,
    disableConfirm: true,
    disabledDate: (date: Date | undefined, side: DateSide = 'start') =>
      !date || !instant(date) || isCalendarDateDisabled(instant(date)!, props.options, side),
    disabledTime: (date: Date, side: DateSide = 'start') => {
      const rules = dateTimeDisabledRules(instant(date) ?? new Date(NaN), props.options, side)
      return {
        disabledHours: rules?.disabledHours,
        disabledMinutes: () => rules?.disabledMinutes?.(date.getHours()) ?? [],
        disabledSeconds: () => rules?.disabledSeconds?.(date.getHours(), date.getMinutes()) ?? [],
      }
    },
  }
})
const viewport = computed(() => toCalendarValue(props.pickerValue, props.options))
const rangePickerValue = computed(() =>
  Array.isArray(viewport.value) ? viewport.value.map((part) => part ?? '') : undefined,
)
const singlePickerValue = computed(() => (typeof viewport.value === 'string' ? viewport.value : undefined))
const calendarValue = computed(() => toCalendarValue(props.value, props.options))
// Keep the renderer's in-progress click state; a partial draft only disables outer confirmation.
const rangeValue = shallowRef<string[]>([])
watch(
  calendarValue,
  (value) => {
    if (Array.isArray(value) && (value.length === 0 || (value.length === 2 && value.every(Boolean)))) {
      rangeValue.value = value.map((part) => String(part ?? ''))
    }
  },
  { immediate: true },
)
const singleValue = computed(() => (typeof calendarValue.value === 'string' ? calendarValue.value : undefined))
function navigate(value: Date | string | number | (Date | string | number | null | undefined)[] | null | undefined) {
  emit('navigate', fromCalendarValue(value, props.options))
}
function selectDraft(value: Date | string | number | (Date | string | number | null | undefined)[] | null | undefined) {
  const candidate = fromCalendarValue(value, props.options, props.value)
  const normalized = normalizeDateRange(candidate, props.options)
  // The renderer suppresses change for the existing range, but restarting and
  // choosing it again must still complete the outer draft transaction.
  if (
    (Array.isArray(candidate) && candidate.filter((part) => part !== undefined && part !== '').length === 1) ||
    sameDateSelection(normalized, fromCalendarValue(rangeValue.value, props.options), props.options)
  ) {
    emit('select', normalized)
  }
}
function select(value: Date | string | number | (Date | string | number | null | undefined)[] | null | undefined) {
  const candidate = fromCalendarValue(value, props.options, props.value)
  emit('select', props.range ? normalizeDateRange(candidate, props.options) : candidate)
}
</script>
