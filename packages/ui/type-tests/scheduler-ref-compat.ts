import type { ComputedRef, Ref } from 'vue'
import type { SchedulerEvent, SchedulerError } from '../src/scheduler/core'
import type { useScheduler } from '../src/scheduler/use-scheduler'
import type { useSchedulerDataSource } from '../src/scheduler/use-data-source'

declare const controller: ReturnType<typeof useScheduler>
declare const source: ReturnType<typeof useSchedulerDataSource>
const events: Ref<SchedulerEvent[]> = source.events
const pending: Ref<boolean> = controller.pending
const warnings: Ref<SchedulerError[]> = controller.warnings
const error: Ref<SchedulerError | undefined> = controller.error
const locked: ComputedRef<boolean> = controller.locked
source.events.value = [{ id: 'one', title: 'Event' }]
// @ts-expect-error event lists require event objects
source.events.value = ['invalid']
// @ts-expect-error locked is readonly
controller.locked.value = false
void [events, pending, warnings, error, locked]
