<template>
  <TimePicker
    v-bind="{ ...$attrs }"
    :model-value="modelValue"
    :default-value="defaultValue"
    type="time-range"
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
    :hide-disabled-options="hideDisabledOptions"
    :disable-confirm="disableConfirm"
    :error="error"
    :position="position"
    :trigger-props="triggerProps"
    :unmount-on-close="unmountOnClose"
    :hide-trigger="hideTrigger"
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
  </TimePicker>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TimePicker from './time-picker.vue'
import { createNamespace } from '../_utils/global-config'
import type { Size } from '../_utils/constant'

const { name } = createNamespace('time-range-picker')

/**
 * 时间范围选择面板（默认无触发器）。
 * 表单字段请使用 TimeRange。
 */
export default defineComponent({
  name,
  components: {
    TimePicker,
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
    error: Boolean,
    format: String,
    size: {
      type: String as PropType<Size>,
    },
    placeholder: {
      type: [String, Array] as PropType<string | string[]>,
    },
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
    hideDisabledOptions: Boolean,
    disableConfirm: Boolean,
    position: {
      type: String as PropType<'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'>,
    },
    triggerProps: {
      type: Object as PropType<Record<string, unknown>>,
    },
    unmountOnClose: Boolean,
    hideTrigger: {
      type: Boolean,
      default: true,
    },
    showNextDay: Boolean,
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
  setup(_, { emit }) {
    return {
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
