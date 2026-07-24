<template>
  <TimeRangePicker
    v-bind="{ ...$attrs, ...pickerProps }"
    :model-value="modelValue"
    :default-value="defaultValue"
    :format="format"
    :popup-visible="popupVisible"
    :default-popup-visible="defaultPopupVisible"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :size="size"
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
    @update:popup-visible="onUpdatePopupVisible"
    @change="onChange"
    @select="onSelect"
    @clear="onClear"
    @popup-visible-change="onPopupVisibleChange"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </TimeRangePicker>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { TimeRangePicker } from '../time-picker'
import { createNamespace } from '../_utils/global-config'
import type { Size } from '../_utils/constant'

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
  props: {
    modelValue: {
      type: Array as PropType<Array<string | number | Date>>,
    },
    defaultValue: {
      type: Array as PropType<Array<string | number | Date>>,
    },
    popupVisible: {
      type: Boolean as PropType<boolean | undefined>,
      default: undefined,
    },
    defaultPopupVisible: Boolean,
    clearable: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    readonly: Boolean,
    size: {
      type: String as PropType<Size>,
    },
    placeholder: {
      type: [String, Array] as PropType<string | string[]>,
    },
    format: String,
    use12Hours: Boolean,
    step: {
      type: Object as PropType<{
        hour?: number
        minute?: number
        second?: number
      }>,
    },
    disabledHours: {
      type: Function as PropType<() => number[]>,
    },
    disabledMinutes: {
      type: Function as PropType<(selectedHour?: number) => number[]>,
    },
    disabledSeconds: {
      type: Function as PropType<(selectedHour?: number, selectedMinute?: number) => number[]>,
    },
    disableConfirm: Boolean,
    error: Boolean,
    showNextDay: Boolean,
    timeRangePickerProps: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
  },
  emits: {
    'update:modelValue': (value: Array<string | undefined> | undefined) => true,
    'update:popupVisible': (visible: boolean) => true,
    change: (
      timeString: Array<string | undefined> | undefined,
      time: Array<Date | undefined> | undefined,
    ) => true,
    select: (timeString: Array<string | undefined>, time: Array<Date | undefined>) => true,
    clear: () => true,
    'popup-visible-change': (visible: boolean) => true,
  },
  setup(props, { emit }) {
    const pickerProps = computed(() => props.timeRangePickerProps || {})

    return {
      pickerProps,
      onUpdateModelValue: (value: Array<string | undefined> | undefined) => emit('update:modelValue', value),
      onUpdatePopupVisible: (visible: boolean) => emit('update:popupVisible', visible),
      onChange: (
        timeString: Array<string | undefined> | undefined,
        time: Array<Date | undefined> | undefined,
      ) => emit('change', timeString, time),
      onSelect: (timeString: Array<string | undefined>, time: Array<Date | undefined>) =>
        emit('select', timeString, time),
      onClear: () => emit('clear'),
      onPopupVisibleChange: (visible: boolean) => emit('popup-visible-change', visible),
    }
  },
})
</script>
