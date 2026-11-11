import type { VNodeChild } from 'vue'
import type { TimeSlots as FieldSlots } from './public-types'
/** Desktop direct mode supports replacing its trigger; custom triggers own accessibility. */
export interface TimeSlots extends FieldSlots { default?: () => VNodeChild }
