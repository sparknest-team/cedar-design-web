<template>
  <TimePanelContent v-bind="$attrs" :options="options" :state="content">
    <template v-if="$slots.extra" #extra><slot name="extra" /></template>
    <template v-if="$slots.actions" #actions="scope"><slot name="actions" v-bind="scope" /></template>
  </TimePanelContent>
</template>

<script setup lang="ts">
import type { TimeRangePickerSlots } from '../picker-contract'
import { timeRangePanelEmits as timePanelEmits } from '../panel-emits'
import { createNamespace } from '../../_utils/global-config'
import { timeRangePickerProps as panelProps } from './props'
import TimePanelContent from '../presentation/TimePanelContent.vue'
import { usePanelContent } from '../presentation/use-panel-content'
import type { TimeValue } from '../time-value'
import { useTimePanel } from '../use-time-panel'

defineOptions({ name: createNamespace('time-range-picker').name, inheritAttrs: false })
const options = defineProps(panelProps)
const emit = defineEmits(timePanelEmits)
defineSlots<TimeRangePickerSlots>()
const panel = useTimePanel<TimeValue[]>(
  options,
  {
    select: (value, dates) => emit('select', value, dates),
    confirm: (value, dates) => emit('confirm', value, dates),
    change: (value, dates) => {
      emit('update:modelValue', value)
      emit('change', value, dates)
    },
  },
  () => true,
)
const content = usePanelContent(options, panel, () => true)
</script>
