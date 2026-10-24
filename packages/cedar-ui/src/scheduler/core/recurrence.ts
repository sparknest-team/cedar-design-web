import {
  cloneSchedulerEvent,
  isSchedulerEventInRange,
  schedulerDate,
  schedulerDateKey,
  validateSchedulerEvent,
} from "./base";
import { SchedulerError } from "./types";
import { createSchedulerRecurrenceMatcher } from "./recurrence-rule";
import type { SchedulerDate, SchedulerEvent, SchedulerRange } from "./types";

export interface SchedulerRecurrenceRule {
  frequency: "daily" | "weekly" | "monthly" | "yearly";
  interval?: number;
  /** Sunday = 0. Weekly rules default to the seed's weekday; weeks start Monday. */
  daysOfWeek?: number[];
  /** Monthly/yearly: 1–31, or -1 for the last calendar day. */
  dayOfMonth?: number;
  /** Monthly/yearly: nth matching weekday (1–5 or -1 for last). */
  weekOfMonth?: number;
  /** Yearly: 1–12; defaults to the seed month. */
  monthOfYear?: number;
  /** Invalid numeric month dates: skip (default) or use the last calendar day. */
  overflow?: "skip" | "last-day";
  /** Monthly/yearly ordinal dates from a business calendar instead of daysOfWeek. */
  businessCalendar?: import("./business-calendar").SchedulerBusinessCalendar;
  /** Total occurrences before exceptions, including the first matching date. */
  count?: number;
  /** Inclusive last occurrence start. */
  until?: SchedulerDate;
}
export interface SchedulerRecurringEvent {
  event: SchedulerEvent;
  rule: SchedulerRecurrenceRule;
}
export interface SchedulerOccurrence extends SchedulerEvent {
  seriesId: string;
  /** Date-only for all-day instances; ISO instant for timed instances. */
  originalStart: string;
}
export interface SchedulerRecurrenceException {
  seriesId: string;
  originalStart: SchedulerDate;
  /** Omitted means this occurrence was cancelled. */
  event?: SchedulerEvent;
}
export interface SchedulerRecurrenceOptions {
  exceptions?: readonly SchedulerRecurrenceException[];
  /** Safety limits throw instead of returning a silently truncated window. */
  maxOccurrences?: number;
  maxIterations?: number;
}
const dayNumber = (date: Date) =>
  Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000;
const occurrenceId = (id: string, start: SchedulerDate) =>
  JSON.stringify([id, +schedulerDate(start)]);
const fail = (message: string): never => {
  throw new SchedulerError("invalid-event", message);
};

/** Expand local-calendar recurrence rules; timed durations use elapsed milliseconds. */
export function expandSchedulerRecurrences(
  series: readonly SchedulerRecurringEvent[],
  range: SchedulerRange,
  options: SchedulerRecurrenceOptions = {},
): SchedulerOccurrence[] {
  if (
    !Number.isFinite(+range.start) ||
    !Number.isFinite(+range.end) ||
    range.end <= range.start
  )
    fail("Invalid recurrence range");
  const maxOccurrences = options.maxOccurrences ?? 10_000;
  const maxIterations = options.maxIterations ?? 100_000;
  if (
    ![maxOccurrences, maxIterations].every(
      (value) => Number.isInteger(value) && value > 0,
    )
  )
    fail("Recurrence limits must be positive integers");
  const exceptions = new Map<string, SchedulerRecurrenceException>();
  for (const exception of options.exceptions ?? []) {
    const key = occurrenceId(exception.seriesId, exception.originalStart);
    if (
      !Number.isFinite(+schedulerDate(exception.originalStart)) ||
      exceptions.has(key)
    )
      fail("Invalid or duplicate recurrence exception");
    if (exception.event) {
      validateSchedulerEvent(exception.event);
      if (exception.event.start == null || exception.event.end == null)
        fail("An exception must remain scheduled");
    }
    exceptions.set(key, exception);
  }
  const result: SchedulerOccurrence[] = [];
  const ids = new Set<string>();
  let iterations = 0;
  for (const { event, rule } of series) {
    validateSchedulerEvent(event);
    if (event.start == null || event.end == null || ids.has(event.id))
      fail("Recurring events require unique IDs and scheduled dates");
    ids.add(event.id);
    const start = schedulerDate(event.start!);
    const end = schedulerDate(event.end!);
    const matchesDate = createSchedulerRecurrenceMatcher(rule, start);
    const until =
      rule.until === undefined ? Infinity : +schedulerDate(rule.until);
    // Moved exceptions may originate after this window. Scan through their original starts
    // too, so only actual rule members can reappear in the requested range.
    let scanEnd = +range.end;
    for (const exception of exceptions.values()) {
      if (
        exception.seriesId === event.id &&
        exception.event &&
        isSchedulerEventInRange(exception.event, range)
      ) {
        scanEnd = Math.max(
          scanEnd,
          +schedulerDate(exception.originalStart) + 1,
        );
      }
    }
    const cursor = new Date(start);
    let count = 0;
    while (
      +cursor < scanEnd &&
      +cursor <= until &&
      count < (rule.count ?? Infinity)
    ) {
      if (++iterations > maxIterations)
        fail("Recurrence iteration limit exceeded");
      if (matchesDate(cursor)) {
        count++;
        const originalStart = event.allDay
          ? schedulerDateKey(cursor)
          : cursor.toISOString();
        const id = occurrenceId(event.id, originalStart);
        const exception = exceptions.get(id);
        let occurrence: SchedulerEvent | undefined;
        if (exception) occurrence = exception.event;
        else {
          const occurrenceEnd = new Date(cursor);
          if (event.allDay)
            occurrenceEnd.setDate(
              occurrenceEnd.getDate() + dayNumber(end) - dayNumber(start),
            );
          else occurrenceEnd.setTime(+cursor + (+end - +start));
          occurrence = {
            ...cloneSchedulerEvent(event),
            start: event.allDay ? originalStart : new Date(cursor),
            end: event.allDay ? schedulerDateKey(occurrenceEnd) : occurrenceEnd,
          };
        }
        if (occurrence && isSchedulerEventInRange(occurrence, range)) {
          if (result.length >= maxOccurrences)
            fail("Recurrence occurrence limit exceeded");
          result.push({
            ...cloneSchedulerEvent(occurrence),
            id,
            seriesId: event.id,
            originalStart,
          });
        }
      }
      // Reset wall-clock time from the seed after DST normalization on the previous day.
      cursor.setDate(cursor.getDate() + 1);
      cursor.setHours(
        start.getHours(),
        start.getMinutes(),
        start.getSeconds(),
        start.getMilliseconds(),
      );
    }
  }
  return result.sort(
    (a, b) =>
      +schedulerDate(a.start!) - +schedulerDate(b.start!) ||
      a.id.localeCompare(b.id),
  );
}

/** Immutably replace one exception. Undefined replacement cancels this occurrence. */
export function setSchedulerRecurrenceException(
  exceptions: readonly SchedulerRecurrenceException[],
  occurrence: SchedulerOccurrence,
  replacement?: SchedulerEvent,
): SchedulerRecurrenceException[] {
  if (
    !occurrence.seriesId ||
    !Number.isFinite(+schedulerDate(occurrence.originalStart))
  )
    fail("Invalid occurrence identity");
  if (replacement) {
    validateSchedulerEvent(replacement);
    if (replacement.start == null || replacement.end == null)
      fail("An occurrence must remain scheduled");
  }
  const key = occurrenceId(occurrence.seriesId, occurrence.originalStart);
  const clone = (
    entry: SchedulerRecurrenceException,
  ): SchedulerRecurrenceException => ({
    seriesId: entry.seriesId,
    originalStart:
      entry.originalStart instanceof Date
        ? new Date(entry.originalStart)
        : entry.originalStart,
    event: entry.event ? cloneSchedulerEvent(entry.event) : undefined,
  });
  return [
    ...exceptions
      .filter(
        (entry) => occurrenceId(entry.seriesId, entry.originalStart) !== key,
      )
      .map(clone),
    clone({
      seriesId: occurrence.seriesId,
      originalStart: occurrence.originalStart,
      event: replacement,
    }),
  ];
}
