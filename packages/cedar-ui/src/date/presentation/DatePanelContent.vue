<template>
  <RangeContent v-if="range" v-bind="{ ...$attrs, ...bindings }" :model-value="rangeValue" :disabled="options.disabled" @change="select">
    <template v-for="name in forwardedSlots" #[name]="scope"><slot :name="name" v-bind="scope || {}" /></template>
  </RangeContent>
  <CalendarContent v-else v-bind="{ ...$attrs, ...bindings }" :model-value="singleValue" :disabled="Boolean(options.disabled)" @change="select">
    <template v-for="(_, name) in $slots" #[name]="scope"><slot :name="name" v-bind="scope || {}" /></template>
  </CalendarContent>
  <div v-if="options.disableConfirm === false" :class="n('actions')"><slot name="actions" :confirm="() => emit('confirm')" :disabled="!canConfirm"><Button :disabled="!canConfirm" @click="emit('confirm')">{{ t('datePicker.confirmButtonText') }}</Button></slot></div>
</template>
<script setup lang="ts">
import { computed, useSlots } from 'vue'
import Button from '../../button'
import { useI18n } from '../../locale'
import { createNamespace } from '../../_utils/global-config'
import CalendarContent from '../picker/Picker.vue'
import RangeContent from '../picker/DateRangePicker.vue'
import type { DatePanelContentProps } from '../panel-state'
import { calendarValueFormat, fromCalendarValue, toCalendarValue } from '../calendar-value'
import { isDateDisabled } from '../date-rules'
import { dateTimeDisabledRules } from '../date-time-rules'
import { dateDisplayFormat, dateValueFormat, outputDateValue, type DateSelection, type DateSide } from '../date-value'
defineOptions({ name: createNamespace('date-panel-content').name, inheritAttrs: false })
const props = defineProps<DatePanelContentProps>()
const { n } = createNamespace('date-picker')
const slots = useSlots()
const forwardedSlots = computed(() => Object.keys(slots).filter((name) => name !== 'actions'))
const emit = defineEmits(['select', 'confirm'])
const { t } = useI18n()
const bindings = computed(() => {
  const { modelValue: _model, defaultValue: _default, disabled: _disabled, ...options } = props.options
  return ({
  ...options,
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
const calendarValue = computed(() => toCalendarValue(props.value, props.options))
const rangeValue = computed(() => Array.isArray(calendarValue.value) ? calendarValue.value.map((value) => value ?? '') : [])
const singleValue = computed(() => typeof calendarValue.value === 'string' ? calendarValue.value : undefined)
function select(value: DateSelection) { emit('select', fromCalendarValue(value, props.options)) }
</script>
