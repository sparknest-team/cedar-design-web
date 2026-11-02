<template>
  <div @keydown="onColumnsKeydown" v-bind="$attrs" :class="`${prefixCls}-container`">
    <component
      :is="isRange ? 'RangePanel' : 'Panel'"
      v-bind="{ ...panelProps, ...(isRange ? { showNextDay } : {}) }"
      :value="panelValue"
      :visible="true"
      :format="computedFormat"
      :use12-hours="computedUse12Hours"
      :step="step"
      :min="min"
      :max="max"
      :disabled-hours="disabledHours"
      :disabled-minutes="disabledMinutes"
      :disabled-seconds="disabledSeconds"
      :hide-disabled-options="hideDisabledOptions"
      :hide-footer="disableConfirm"
      :confirm-disabled="!canConfirm"
      @select="onPanelSelect"
      @confirm="onPanelConfirm"
    >
      <template v-if="$slots.actions" #actions>
        <slot name="actions" :confirm="confirm" :can-confirm="canConfirm" :value="draft" />
      </template>
      <template v-if="$slots.extra" #extra-footer>
        <slot name="extra" />
      </template>
    </component>
  </div>
</template>

<script lang="ts">
import { navigateTemporalColumns } from '../../_utils/temporal-keyboard'
import { defineComponent, toRefs, type PropType, type ExtractPropTypes } from 'vue'
import { createNamespace } from '../../_utils/global-config'
import Panel from '../picker/Panel.vue'
import RangePanel from '../picker/RangePanel.vue'
import { timePickerProps } from '../picker/props'
import type { usePanelContent } from './use-panel-content'
import type { TimeValue } from '../time-value'
import type { TimePanelValue } from '../use-time-panel'

type ContentState = ReturnType<typeof usePanelContent<TimePanelValue>> | ReturnType<typeof usePanelContent<TimeValue[]>>

export default defineComponent({
  name: createNamespace('time-panel-content').name,
  components: { Panel, RangePanel },
  inheritAttrs: false,
  props: {
    options: { type: Object as PropType<Readonly<Omit<ExtractPropTypes<typeof timePickerProps>, 'type'>>>, required: true },
    state: { type: Object as PropType<ContentState>, required: true },
  },
  setup(props) {
    // Reuse the owner's refs: the view never creates a second model or draft.
    return {
      onColumnsKeydown: (event: KeyboardEvent) => navigateTemporalColumns(event, '[role=listbox]', '[role=option]'),
      ...toRefs(props.options),
      ...props.state,
    }
  },
})
</script>
