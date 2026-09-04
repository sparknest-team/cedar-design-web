import type { ComputedRef, InjectionKey, Slots } from 'vue'
import type { Direction } from '../_utils/constant'
import type { StepStatus, StepsContentPlacement, StepsSize, StepsType } from './props'

export interface StepsContext {
  current: ComputedRef<number>
  direction: ComputedRef<Direction>
  contentPlacement: ComputedRef<StepsContentPlacement>
  size: ComputedRef<StepsSize>
  type: ComputedRef<StepsType>
  showLine: ComputedRef<boolean>
  changeable: ComputedRef<boolean>
  slots: Slots
  getStatus: (index: number, status?: StepStatus) => StepStatus
  select: (index: number, event: Event) => void
}

export const stepsInjectionKey: InjectionKey<StepsContext> = Symbol('Steps')
