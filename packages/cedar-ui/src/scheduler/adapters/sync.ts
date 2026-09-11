import {
  applySchedulerTransaction,
  cloneSchedulerEvent,
  isSchedulerEventInRange,
  SchedulerError,
  validateSchedulerEvent,
} from "../core";
import type { SchedulerEvent, SchedulerRange, SchedulerChange } from "../core";
export interface SchedulerCalendarSnapshot {
  revision: number;
  events: SchedulerEvent[];
}
export interface SchedulerCalendarProvider {
  load(
    range: SchedulerRange,
    signal: AbortSignal,
  ): Promise<SchedulerCalendarSnapshot>;
  commit(
    changes: readonly SchedulerChange[],
    expectedRevision: number,
    origin?: string,
  ): Promise<SchedulerCalendarSnapshot>;
  subscribe?(
    listener: (snapshot: SchedulerCalendarSnapshot, origin?: string) => void,
  ): () => void;
}
/** In-memory reference provider for demos/tests; replace with authenticated backend transport. */
export function createSchedulerMemoryProvider(
  initial: readonly SchedulerEvent[],
  validate?: (events: readonly SchedulerEvent[]) => void,
): SchedulerCalendarProvider {
  let events = initial.map(cloneSchedulerEvent),
    revision = 0;
  initial.forEach(validateSchedulerEvent);
  if(new Set(initial.map(event=>event.id)).size!==initial.length)throw new RangeError("Duplicate initial calendar IDs");
  const listeners = new Set<
    (snapshot: SchedulerCalendarSnapshot, origin?: string) => void
  >();
  const snapshot = () => ({
    revision,
    events: events.map(cloneSchedulerEvent),
  });
  return {
    async load(range, signal) {
      if(!Number.isFinite(+range.start)||!Number.isFinite(+range.end)||range.end<=range.start)throw new RangeError("Invalid calendar range");
      if (signal.aborted) throw new DOMException("Aborted", "AbortError");
      const result = snapshot();
      result.events = result.events.filter(
        (event) => event.start == null || isSchedulerEventInRange(event, range),
      );
      return result;
    },
    async commit(changes, expectedRevision, origin) {
      if (expectedRevision !== revision)
        throw new SchedulerError("stale", "Calendar revision changed");
      const proposal = applySchedulerTransaction(events, changes);
      validate?.(proposal.map(cloneSchedulerEvent));
      events = proposal.map(cloneSchedulerEvent);
      revision++;
      for (const listener of listeners) {
        try {
          listener(snapshot(), origin);
        } catch {
          /* A failing subscriber must not roll back an accepted commit. */
        }
      }
      return snapshot();
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
