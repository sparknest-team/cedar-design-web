<template>
  <TimePicker
    v-bind="{ ...$attrs }"
    :popup-container="popupContainer"
    :model-value="modelValue"
    :default-value="defaultValue"
    type="time-range"
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
    :hide-disabled-options="hideDisabledOptions"
    :disable-confirm="disableConfirm"
    :error="error"
    :placement="placement"
    :trigger-props="triggerProps"
    :unmount-on-close="unmountOnClose"
    :hide-trigger="hideTrigger"
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
  </TimePicker>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimePicker from './TimePicker.vue'
import { createNamespace } from '../../_utils/global-config'
import { timeRangePickerProps } from './props'

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
  props: timeRangePickerProps,
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
  setup(_, { emit }) {
    return {
      onUpdateModelValue: (value: string | (string | undefined)[] | undefined) =>
        emit('update:modelValue', value as Array<string | undefined> | undefined),
      onUpdateOpen: (visible: boolean) => emit('update:open', visible),
      onChange: (
        timeString: string | (string | undefined)[] | undefined,
        time: Date | (Date | undefined)[] | undefined,
      ) =>
        emit(
          'change',
          timeString as Array<string | undefined> | undefined,
          time as Array<Date | undefined> | undefined,
        ),
      onSelect: (timeString: string | (string | undefined)[], time: Date | (Date | undefined)[]) =>
        emit('select', timeString as Array<string | undefined>, time as Array<Date | undefined>),
      onClear: () => emit('clear'),
      onOpenChange: (visible: boolean) => emit('open-change', visible),
    }
  },
})
</script>
