import type { VNodeChild } from 'vue'
import type { TimeRangeSlots as FieldSlots } from '../time/public-types'
/** Desktop direct mode supports replacing its trigger; custom triggers own accessibility. */
export interface TimeRangeSlots extends FieldSlots { default?: () => VNodeChild }
