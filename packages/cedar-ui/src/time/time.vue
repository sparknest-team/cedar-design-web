<template>
  <TimePicker
    v-bind="{ ...$attrs, ...pickerProps }"
    :model-value="modelValue"
    :default-value="defaultValue"
    type="time"
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
  </TimePicker>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import TimePicker from '../time-picker'
import { createNamespace } from '../_utils/global-config'
import type { Size } from '../_utils/constant'

const { name } = createNamespace('time')

/**
 * 表单时间字段。内部使用 TimePicker（带触发器）。
 * 面板能力请直接使用 TimePicker（默认无触发器）。
 */
export default defineComponent({
  name,
  components: {
    TimePicker,
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Date] as PropType<string | number | Date>,
    },
    defaultValue: {
      type: [String, Number, Date] as PropType<string | number | Date>,
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
    placeholder: String,
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
    timePickerProps: {
      type: Object as PropType<Record<string, unknown>>,
      default: () => ({}),
    },
  },
  emits: {
    'update:modelValue': (value: string | undefined) => true,
    'update:popupVisible': (visible: boolean) => true,
    change: (timeString: string | undefined, time: Date | undefined) => true,
    select: (timeString: string, time: Date) => true,
    clear: () => true,
    'popup-visible-change': (visible: boolean) => true,
  },
  setup(props, { emit }) {
    const pickerProps = computed(() => props.timePickerProps || {})

    return {
      pickerProps,
      onUpdateModelValue: (value: string | undefined) => emit('update:modelValue', value),
      onUpdatePopupVisible: (visible: boolean) => emit('update:popupVisible', visible),
      onChange: (timeString: string | undefined, time: Date | undefined) => emit('change', timeString, time),
      onSelect: (timeString: string, time: Date) => emit('select', timeString, time),
      onClear: () => emit('clear'),
      onPopupVisibleChange: (visible: boolean) => emit('popup-visible-change', visible),
    }
  },
})
</script>
