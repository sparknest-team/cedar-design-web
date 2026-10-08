<template>
  <TimePanelContent v-bind="$attrs" :options="options" :state="content">
    <template v-for="(_, slotName) in $slots" #[slotName]="scope">
      <slot :name="slotName" v-bind="scope || {}" />
    </template>
  </TimePanelContent>
</template>

<script setup lang="ts">
import { timePanelEmits } from '../panel-emits'
import { createNamespace } from '../../_utils/global-config'
import { timePickerProps as panelProps } from './props'
import TimePanelContent from '../presentation/TimePanelContent.vue'
import { usePanelContent } from '../presentation/use-panel-content'
import type { TimePanelValue } from '../use-time-panel'
import { useTimePanel } from '../use-time-panel'

defineOptions({ name: createNamespace('time-picker').name, inheritAttrs: false })
const options = defineProps(panelProps)
const emit = defineEmits(timePanelEmits)
const panel = useTimePanel<TimePanelValue>(options, {
  select: (value, dates) => emit('select', value, dates),
  confirm: (value, dates) => emit('confirm', value, dates),
  change: (value, dates) => {
    emit('update:modelValue', value)
    emit('change', value, dates)
  },
}, () => options.type === 'time-range')
const content = usePanelContent(options, panel, () => options.type === 'time-range')
</script>
