<template>
  <RangeContent v-if="range" v-bind="{ ...$attrs, ...bindings }" :model-value="rangeValue" :picker-value="rangePickerValue" :disabled="options.disabled" @change="select" @update:picker-value="navigate">
    <template v-for="name in forwardedSlots" #[name]="scope"><slot :name="name" v-bind="scope || {}" /></template>
  </RangeContent>
  <CalendarContent v-else v-bind="{ ...$attrs, ...bindings }" :model-value="singleValue" :picker-value="singlePickerValue" :disabled="Boolean(options.disabled)" @change="select" @update:picker-value="navigate">
    <template v-for="(_, name) in $slots" #[name]="scope"><slot :name="name" v-bind="scope || {}" /></template>
  </CalendarContent>
</template>
<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { dateTimePickerOptions } from '../time-picker-options'
import { createNamespace } from '../../_utils/global-config'
import CalendarContent from '../picker/Picker.vue'
import RangeContent from '../picker/DateRangePicker.vue'
import type { DatePanelContentProps } from '../panel-state'
import { calendarValueFormat, fromCalendarValue, toCalendarValue } from '../calendar-value'
import { isDateDisabled } from '../date-rules'
import { dateTimeDisabledRules } from '../date-time-rules'
import { dateDisplayFormat, dateUsesSeconds, dateValueFormat, outputDateValue, type DateSelection, type DateSide } from '../date-value'
defineOptions({ name: createNamespace('date-panel-content').name, inheritAttrs: false })
const props = defineProps<DatePanelContentProps>()
const { n } = createNamespace('date-picker')
const slots = useSlots()
const forwardedSlots = computed(() => Object.keys(slots).filter((name) => name !== 'actions'))
const emit = defineEmits(['select', 'confirm', 'navigate'])
const bindings = computed(() => {
  const { modelValue: _model, defaultValue: _default, disabled: _disabled, shortcuts: _shortcuts, shortcutsPosition: _position, previewShortcut: _preview, pickerValue: _picker, defaultPickerValue: _defaultPicker, ...options } = props.options
  return ({
  ...options,
  timePickerProps: { ...dateTimePickerOptions('timePickerProps' in options ? options.timePickerProps as Record<string, unknown> : undefined), format: dateUsesSeconds(options) ? 'HH:mm:ss' : 'HH:mm' },
  defaultPickerValue: undefined,
  showNowButton: false,
  mode: props.options.type,
  format: dateDisplayFormat(props.options),
  defaultValue: undefined,
  valueFormat: calendarValueFormat(props.options),
  open: true,
  disableConfirm: true,
  disabledDate: (date: Date | undefined, side: DateSide = 'start') => !date || isDateDisabled(outputDateValue(date, props.options), { ...props.options, valueFormat: dateValueFormat(props.options), showTime: false }, side),
  disabledTime: (date: Date, side: DateSide = 'start') => {
    const rules = dateTimeDisabledRules(date, props.options, side)
    return {
      disabledHours: rules?.disabledHours,
      disabledMinutes: () => rules?.disabledMinutes?.(date.getHours()) ?? [],
      disabledSeconds: () => rules?.disabledSeconds?.(date.getHours(), date.getMinutes()) ?? [],
    }
  },
}) })
const viewport = computed(() => toCalendarValue(props.pickerValue, props.options))
const rangePickerValue = computed(() => Array.isArray(viewport.value) ? viewport.value.map(part => part ?? '') : undefined)
const singlePickerValue = computed(() => typeof viewport.value === 'string' ? viewport.value : undefined)
const calendarValue = computed(() => toCalendarValue(props.value, props.options))
const rangeValue = computed(() => Array.isArray(calendarValue.value) ? calendarValue.value.map((value) => value ?? '') : [])
const singleValue = computed(() => typeof calendarValue.value === 'string' ? calendarValue.value : undefined)
function navigate(value: DateSelection) { emit('navigate', fromCalendarValue(value, props.options)) }
function select(value: DateSelection) { emit('select', fromCalendarValue(value, props.options)) }
</script>
