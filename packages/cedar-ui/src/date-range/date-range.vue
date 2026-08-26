<template>
  <DateRangePicker
    v-bind="{ ...$attrs, ...pickerProps }"
    :model-value="modelValue"
    :default-value="defaultValue"
    :open="open"
    :default-open="defaultOpen"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :size="size"
    :variant="variant"
    :separator="separator"
    :placeholder="placeholder"
    :disabled-date="disabledDate"
    :mode="type"
    :format="format"
    :show-time="showTime"
    :error="error"
    :hide-trigger="false"
    @update:model-value="onUpdateModelValue"
    @update:open="onUpdateOpen"
    @change="onChange"
    @clear="onClear"
    @open-change="onOpenChange"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </DateRangePicker>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { DateRangePicker } from '../date-picker'
import { createNamespace } from '../_utils/global-config'
import type { CalendarValue } from '../date-picker/types'
import { dateRangeProps } from './props'

const { name } = createNamespace('date-range')

/**
 * 表单日期范围字段。内部使用 DateRangePicker（带触发器）。
 * 面板能力请直接使用 DateRangePicker（默认无触发器）。
 */
export default defineComponent({
  name,
  components: {
    DateRangePicker,
  },
  inheritAttrs: false,
  props: dateRangeProps,
  emits: {
    'update:modelValue': (value: CalendarValue[] | undefined) => true,
    'update:open': (visible: boolean) => true,
    change: (value: CalendarValue[] | undefined) => true,
    clear: () => true,
    'open-change': (visible: boolean) => true,
  },
  setup(props, { emit }) {
    const pickerProps = computed(() => props.dateRangePickerProps || {})

    return {
      pickerProps,
      onUpdateModelValue: (value: (CalendarValue | undefined)[] | undefined) =>
        emit('update:modelValue', value as CalendarValue[] | undefined),
      onUpdateOpen: (visible: boolean) => emit('update:open', visible),
      onChange: (value: (CalendarValue | undefined)[] | undefined) =>
        emit('change', value as CalendarValue[] | undefined),
      onClear: () => emit('clear'),
      onOpenChange: (visible: boolean) => emit('open-change', visible),
    }
  },
})
</script>
