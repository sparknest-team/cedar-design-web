import {
  cloneSchedulerEvent,
  schedulerDate,
  validateSchedulerEvent,
} from "./base";
import { expandSchedulerRecurrences } from "./recurrence";
import type {
  SchedulerOccurrence,
  SchedulerRecurringEvent,
  SchedulerRecurrenceException,
  SchedulerRecurrenceRule,
} from "./recurrence";
import { SchedulerError } from "./types";
import type { SchedulerEvent } from "./types";

export interface SchedulerRecurrenceSplitOptions {
  /** A scheduled seed with a fresh series ID; omitted to cancel this and following. */
  nextEvent?: SchedulerEvent;
  /** Complete replacement rule. Omitted preserves the old pattern and remaining count. */
  rule?: SchedulerRecurrenceRule;
  /** Default reject; discard explicitly removes exceptions at/after the original boundary. */
  exceptionPolicy?: "reject" | "discard";
  maxIterations?: number;
}
export interface SchedulerRecurrenceSplitResult {
  series: SchedulerRecurringEvent[];
  exceptions: SchedulerRecurrenceException[];
  removedExceptions: SchedulerRecurrenceException[];
}
const cloneRule = (rule: SchedulerRecurrenceRule): SchedulerRecurrenceRule => ({
  ...rule,
  businessCalendar: rule.businessCalendar
    ? {
        workingDays: rule.businessCalendar.workingDays
          ? [...rule.businessCalendar.workingDays]
          : undefined,
        overrides: rule.businessCalendar.overrides?.map((entry) => ({
          ...entry,
        })),
      }
    : undefined,
  daysOfWeek: rule.daysOfWeek ? [...rule.daysOfWeek] : undefined,
  until: rule.until instanceof Date ? new Date(rule.until) : rule.until,
});
const cloneException = (
  entry: SchedulerRecurrenceException,
): SchedulerRecurrenceException => ({
  ...entry,
  originalStart:
    entry.originalStart instanceof Date
      ? new Date(entry.originalStart)
      : entry.originalStart,
  event: entry.event ? cloneSchedulerEvent(entry.event) : undefined,
});
/** Build an immutable series-level proposal. Persist all returned records atomically. */
export function splitSchedulerRecurrence(
  series: readonly SchedulerRecurringEvent[],
  exceptions: readonly SchedulerRecurrenceException[],
  occurrence: SchedulerOccurrence,
  options: SchedulerRecurrenceSplitOptions = {},
): SchedulerRecurrenceSplitResult {
  const fail = (message: string): never => {
    throw new SchedulerError("invalid-event", message);
  };
  const source = series.find((item) => item.event.id === occurrence.seriesId);
  if (!source)
    throw new SchedulerError("missing-event", "Recurring series was not found");
  if (source.event.readonly)
    throw new SchedulerError("readonly", "Recurring series is readonly");
  if (new Set(series.map((item) => item.event.id)).size !== series.length)
    fail("Duplicate recurring series ID");
  if (
    options.exceptionPolicy !== undefined &&
    !["reject", "discard"].includes(options.exceptionPolicy)
  )
    fail("Invalid exception policy");
  if (!options.nextEvent && options.rule)
    fail("A replacement rule requires a new series seed");
  const boundary = +schedulerDate(occurrence.originalStart);
  const start = schedulerDate(source.event.start!);
  if (!Number.isFinite(boundary) || boundary < +start)
    fail("Invalid split boundary");
  const scanRange = { start, end: new Date(boundary + 1) };
  const budget = options.maxIterations ?? 100_000;
  // Expand without exceptions: cancelled/moved instances still consume the rule count.
  const originals = expandSchedulerRecurrences([source], scanRange, {
    maxIterations: budget,
    maxOccurrences: budget,
  });
  const index = originals.findIndex(
    (item) =>
      +schedulerDate(item.originalStart) === boundary &&
      item.id === occurrence.id,
  );
  if (index < 0) fail("Split boundary is not an occurrence of this series");
  // Validate records without expanding moved exceptions beyond the split boundary.
  const exceptionKeys = new Set<string>();
  for (const entry of exceptions) {
    const original = +schedulerDate(entry.originalStart);
    const key = JSON.stringify([entry.seriesId, original]);
    if (!Number.isFinite(original) || exceptionKeys.has(key))
      fail("Invalid or duplicate recurrence exception");
    exceptionKeys.add(key);
    if (entry.event) {
      validateSchedulerEvent(entry.event);
      if (entry.event.start == null || entry.event.end == null)
        fail("An exception must remain scheduled");
    }
  }
  const affected = exceptions.filter(
    (entry) =>
      entry.seriesId === source.event.id &&
      +schedulerDate(entry.originalStart) >= boundary,
  );
  if (affected.length && options.exceptionPolicy !== "discard")
    fail("Following exceptions require an explicit discard policy");
  const next = series
    .filter((item) => item !== source)
    .map((item) => ({
      event: cloneSchedulerEvent(item.event),
      rule: cloneRule(item.rule),
    }));
  if (index > 0)
    next.push({
      event: cloneSchedulerEvent(source.event),
      rule: { ...cloneRule(source.rule), count: index },
    });
  if (options.nextEvent) {
    if (
      !options.nextEvent.id ||
      series.some((item) => item.event.id === options.nextEvent!.id)
    )
      fail("The new series requires a fresh ID");
    const event = cloneSchedulerEvent(options.nextEvent);
    // Instance identity belongs to the projection, not to the new canonical seed.
    delete (event as Partial<SchedulerOccurrence>).seriesId;
    delete (event as Partial<SchedulerOccurrence>).originalStart;
    const rule = options.rule
      ? cloneRule(options.rule)
      : {
          ...cloneRule(source.rule),
          daysOfWeek:
            source.rule.frequency === "weekly" ||
            (source.rule.weekOfMonth !== undefined &&
              !source.rule.businessCalendar)
              ? [...(source.rule.daysOfWeek ?? [start.getDay()])]
              : undefined,
          dayOfMonth:
            (source.rule.frequency === "monthly" ||
              source.rule.frequency === "yearly") &&
            source.rule.weekOfMonth === undefined
              ? (source.rule.dayOfMonth ?? start.getDate())
              : undefined,
          monthOfYear:
            source.rule.frequency === "yearly"
              ? (source.rule.monthOfYear ?? start.getMonth() + 1)
              : undefined,
          count:
            source.rule.count === undefined
              ? undefined
              : source.rule.count - index,
        };
    const seedStart = schedulerDate(event.start!);
    const tail = { event, rule };
    const first = expandSchedulerRecurrences(
      [tail],
      { start: seedStart, end: new Date(+seedStart + 1) },
      { maxIterations: budget, maxOccurrences: budget },
    );
    if (!first.length || +schedulerDate(first[0].originalStart) !== +seedStart)
      fail("The new seed must match the replacement rule");
    next.push(tail);
  }
  const removed = new Set(affected);
  return {
    series: next,
    exceptions: exceptions
      .filter((entry) => !removed.has(entry))
      .map(cloneException),
    removedExceptions: affected.map(cloneException),
  };
}
