<template>
  <TimePicker
    v-bind="{ ...$attrs, ...pickerProps }"
    :popup-container="popupContainer !== undefined ? popupContainer : pickerProps.popupContainer"
    :model-value="modelValue"
    :default-value="defaultValue"
    type="time"
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
import { computed, defineComponent } from 'vue'
import TimePicker from './picker/TimePicker.vue'
import { createNamespace } from '../_utils/global-config'
import { timeProps } from './props'

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
  props: timeProps,
  emits: {
    'update:modelValue': (value: string | undefined) => true,
    'update:open': (visible: boolean) => true,
    change: (timeString: string | undefined, time: Date | undefined) => true,
    select: (timeString: string, time: Date) => true,
    clear: () => true,
    'open-change': (visible: boolean) => true,
  },
  setup(props, { emit }) {
    const pickerProps = computed(() => props.timePickerProps || {})

    return {
      pickerProps,
      onUpdateModelValue: (value: string | (string | undefined)[] | undefined) =>
        emit('update:modelValue', value as string | undefined),
      onUpdateOpen: (visible: boolean) => emit('update:open', visible),
      onChange: (
        timeString: string | (string | undefined)[] | undefined,
        time: Date | (Date | undefined)[] | undefined,
      ) => emit('change', timeString as string | undefined, time as Date | undefined),
      onSelect: (timeString: string | (string | undefined)[], time: Date | (Date | undefined)[]) =>
        emit('select', timeString as string, time as Date),
      onClear: () => emit('clear'),
      onOpenChange: (visible: boolean) => emit('open-change', visible),
    }
  },
})
</script>
