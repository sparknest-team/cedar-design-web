import type { VNodeChild } from 'vue'
import type { TimePanelPublicEmits } from './panel-emits'
import type { TimeValue } from './time-value'
import type { TimePanelValue } from './use-time-panel'

export type TimePickerEmits = TimePanelPublicEmits<TimePanelValue>
export type TimeRangePickerEmits = TimePanelPublicEmits<TimeValue[]>
interface PanelActionsScope<Value> {
  confirm: () => boolean
  canConfirm: boolean
  value: Value | undefined
}

export interface TimePickerSlots {
  extra?: () => VNodeChild
  actions?: (scope: PanelActionsScope<TimePanelValue>) => VNodeChild
}
export interface TimeRangePickerSlots {
  extra?: () => VNodeChild
  actions?: (scope: PanelActionsScope<Array<TimeValue | undefined>>) => VNodeChild
}
