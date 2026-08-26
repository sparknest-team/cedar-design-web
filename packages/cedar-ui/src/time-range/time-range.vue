<template>
  <TimeRangePicker
    v-bind="{ ...$attrs, ...pickerProps }"
    :model-value="modelValue"
    :default-value="defaultValue"
    :format="format"
    :open="open"
    :default-open="defaultOpen"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :size="size"
    :variant="variant"
    :placeholder="placeholder"
    :use12-hours="use12Hours"
    :step="step"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    :disable-confirm="disableConfirm"
    :error="error"
    :hide-trigger="false"
    :show-next-day="showNextDay"
    @update:model-value="onUpdateModelValue"
    @update:open="onUpdateOpen"
    @change="onChange"
    @select="onSelect"
    @clear="onClear"
    @open-change="onOpenChange"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </TimeRangePicker>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { TimeRangePicker } from '../time-picker'
import { createNamespace } from '../_utils/global-config'
import { timeRangeProps } from './props'

const { name } = createNamespace('time-range')

/**
 * 表单时间范围字段。内部使用 TimeRangePicker（带触发器）。
 * 面板能力请直接使用 TimeRangePicker（默认无触发器）。
 */
export default defineComponent({
  name,
  components: {
    TimeRangePicker,
  },
  inheritAttrs: false,
  props: timeRangeProps,
  emits: {
    'update:modelValue': (value: Array<string | undefined> | undefined) => true,
    'update:open': (visible: boolean) => true,
    change: (
      timeString: Array<string | undefined> | undefined,
      time: Array<Date | undefined> | undefined,
    ) => true,
    select: (timeString: Array<string | undefined>, time: Array<Date | undefined>) => true,
    clear: () => true,
    'open-change': (visible: boolean) => true,
  },
  setup(props, { emit }) {
    const pickerProps = computed(() => props.timeRangePickerProps || {})

    return {
      pickerProps,
      onUpdateModelValue: (value: Array<string | undefined> | undefined) => emit('update:modelValue', value),
      onUpdateOpen: (visible: boolean) => emit('update:open', visible),
      onChange: (
        timeString: Array<string | undefined> | undefined,
        time: Array<Date | undefined> | undefined,
      ) => emit('change', timeString, time),
      onSelect: (timeString: Array<string | undefined>, time: Array<Date | undefined>) =>
        emit('select', timeString, time),
      onClear: () => emit('clear'),
      onOpenChange: (visible: boolean) => emit('open-change', visible),
    }
  },
})
</script>
