import { InjectionKey } from 'vue'
import { Orientation } from '../_utils/constant'
import type { ModeType, LabelPositionType } from './types'

export interface TimelineContext {
  items: number[]
  orientation: Orientation
  reverse: boolean
  labelPosition: LabelPositionType
  mode: ModeType
}

export const timelineInjectionKey: InjectionKey<TimelineContext> = Symbol('CedarTimeline')
