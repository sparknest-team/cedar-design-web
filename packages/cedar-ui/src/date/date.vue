<template>
  <DatePicker
    v-bind="{ ...$attrs, ...pickerProps }"
    :model-value="modelValue"
    :default-value="defaultValue"
    :mode="type"
    :format="format"
    :open="open"
    :default-open="defaultOpen"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :size="size"
    :variant="variant"
    :placeholder="placeholder"
    :disabled-date="disabledDate"
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
  </DatePicker>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import DatePicker from '../date-picker'
import { createNamespace } from '../_utils/global-config'
import type { CalendarValue, Mode } from '../date-picker/types'
import { dateProps } from './props'

const { name } = createNamespace('date')

const TYPE_FORMAT: Partial<Record<Mode, string>> = {
  week: 'gggg-wo',
  month: 'YYYY-MM',
  year: 'YYYY',
  quarter: 'YYYY-[Q]Q',
}

/**
 * 表单日期字段。内部使用 DatePicker（带触发器）。
 * 面板能力请直接使用 DatePicker（默认无触发器）。
 */
export default defineComponent({
  name,
  components: {
    DatePicker,
  },
  inheritAttrs: false,
  props: dateProps,
  emits: {
    'update:modelValue': (value: CalendarValue | undefined) => true,
    'update:open': (visible: boolean) => true,
    change: (value: CalendarValue | undefined) => true,
    clear: () => true,
    'open-change': (visible: boolean) => true,
  },
  setup(props, { emit }) {
    const format = computed(() => {
      if (props.format !== undefined) return props.format
      return TYPE_FORMAT[props.type]
    })

    const pickerProps = computed(() => props.datePickerProps || {})

    return {
      format,
      pickerProps,
      onUpdateModelValue: (value: CalendarValue | undefined) => emit('update:modelValue', value),
      onUpdateOpen: (visible: boolean) => emit('update:open', visible),
      onChange: (value: CalendarValue | undefined) => emit('change', value),
      onClear: () => emit('clear'),
      onOpenChange: (visible: boolean) => emit('open-change', visible),
    }
  },
})
</script>
