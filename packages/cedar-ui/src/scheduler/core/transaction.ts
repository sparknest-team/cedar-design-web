import {
  applySchedulerChange,
  cloneSchedulerEvent,
  SchedulerError,
} from "./index";
import type {
  SchedulerEvent,
  SchedulerChange,
  SchedulerChangeContext,
} from "./types";
export type SchedulerTransactionAction = "change" | "undo" | "redo";
export interface SchedulerTransactionContext {
  action: SchedulerTransactionAction;
  changes: SchedulerChangeContext[];
  previousValue: SchedulerEvent[];
  value: SchedulerEvent[];
}
/** Build a detached proposal. Validate cross-event rules against this final value. */
export function applySchedulerTransaction(
  events: readonly SchedulerEvent[],
  changes: readonly SchedulerChange[],
): SchedulerEvent[] {
  if (!changes.length)
    throw new SchedulerError("invalid-event", "Empty transaction");
  const ids = new Set<string>();
  let next = events.map(cloneSchedulerEvent);
  for (const change of changes) {
    if (ids.has(change.event.id))
      throw new SchedulerError(
        "duplicate-id",
        "Multiple changes for the same event",
      );
    ids.add(change.event.id);
    next = applySchedulerChange(next, change);
  }
  return next;
}
/** Derive compensating changes; callers may restore target ordering afterwards. */
export function diffSchedulerEvents(
  from: readonly SchedulerEvent[],
  to: readonly SchedulerEvent[],
): SchedulerChange[] {
  const old = new Map(from.map((e) => [e.id, e]));
  const target = new Set(to.map((e) => e.id));
  return [
    ...from
      .filter((e) => !target.has(e.id))
      .map((event) => ({
        type: "remove" as const,
        event: cloneSchedulerEvent(event),
      })),
    ...to.flatMap<SchedulerChange>((event) =>
      !old.has(event.id)
        ? [{ type: "create" as const, event: cloneSchedulerEvent(event) }]
        : JSON.stringify(old.get(event.id)) === JSON.stringify(event)
          ? []
          : [{ type: "update" as const, event: cloneSchedulerEvent(event) }],
    ),
  ];
}
