import { RRule } from "rrule";
import { Temporal } from "@js-temporal/polyfill";
import {
  cloneSchedulerEvent,
  schedulerDate,
  validateSchedulerEvent,
  isSchedulerEventInRange,
} from "../core";
import type {
  SchedulerEvent,
  SchedulerRange,
  SchedulerOccurrence,
} from "../core";
export type SchedulerTimeDisambiguation =
  "compatible" | "earlier" | "later" | "reject";
/** Resolve an explicit local date-time in an IANA zone, without depending on the host zone. */
export function schedulerZonedDate(
  local: string,
  timeZone: string,
  disambiguation: SchedulerTimeDisambiguation = "reject",
): Date {
  return new Date(
    Temporal.PlainDateTime.from(local).toZonedDateTime(timeZone, {
      disambiguation,
    }).epochMilliseconds,
  );
}
export function formatSchedulerZonedDate(
  value: Date | string | number,
  timeZone: string,
  locale = "zh-CN",
): string {
  return new Intl.DateTimeFormat(locale, {
    timeZone,
    dateStyle: "medium",
    timeStyle: "short",
  }).format(schedulerDate(value));
}
const wallDate = (instant: Date, timeZone: string) => {
  const wall =
    Temporal.Instant.fromEpochMilliseconds(+instant).toZonedDateTimeISO(
      timeZone,
    );
  return new Date(
    Date.UTC(
      wall.year,
      wall.month - 1,
      wall.day,
      wall.hour,
      wall.minute,
      wall.second,
    ),
  );
};
export interface SchedulerRRuleSeries {
  event: SchedulerEvent;
  /** One RFC RRULE value (optional RRULE: prefix). DTSTART comes exclusively from event.start. */
  rule: string;
  timeZone?: string;
}
export interface SchedulerRRuleOptions {
  disambiguation?: SchedulerTimeDisambiguation;
  maxOccurrences?: number;
  maxIterations?: number;
  /** Absolute instants, applied after expansion. */
  excludeDates?: readonly (Date | string | number)[];
  includeDates?: readonly (Date | string | number)[];
}
/** RFC rule parsing is isolated in an optional adapter; the core remains independent of this engine. */
export function expandSchedulerRRule(
  series: SchedulerRRuleSeries,
  range: SchedulerRange,
  options: SchedulerRRuleOptions = {},
): SchedulerOccurrence[] {
  const { event } = series;
  validateSchedulerEvent(event);
  if (event.start == null || event.end == null || event.allDay)
    throw new RangeError("RRULE adapter requires a timed seed");
  if (
    !Number.isFinite(+range.start) ||
    !Number.isFinite(+range.end) ||
    range.end <= range.start
  )
    throw new RangeError("Invalid recurrence window");
  const zone = series.timeZone ?? "UTC";
  const seed = schedulerDate(event.start),
    duration = +schedulerDate(event.end) - +seed;
  const parsed = RRule.parseString(series.rule.replace(/^RRULE:/i, ""));
  if (parsed.dtstart || parsed.tzid)
    throw new RangeError(
      "Use event.start and timeZone for recurrence identity",
    );
  const instantUntil = parsed.until;
  if (instantUntil) parsed.until = wallDate(instantUntil, zone);
  const rule = new RRule({ ...parsed, dtstart: wallDate(seed, zone) }, true);
  const max = options.maxOccurrences ?? 10000,
    iterations = options.maxIterations ?? 1000000;
  if (
    !Number.isSafeInteger(max) ||
    max < 1 ||
    !Number.isSafeInteger(iterations) ||
    iterations < 1
  )
    throw new RangeError("Invalid recurrence limits");
  const units = [
    365 * 86400000,
    28 * 86400000,
    7 * 86400000,
    86400000,
    3600000,
    60000,
    1000,
  ];
  if (
    Math.max(0, +range.end - +seed) /
      (units[rule.options.freq] * rule.options.interval) >
    iterations
  )
    throw new RangeError("Recurrence iteration budget exceeded");
  const excluded = new Set(
    (options.excludeDates ?? []).map((date) => +schedulerDate(date)),
  );
  const values = rule
    .between(
      wallDate(new Date(+range.start - duration - 2 * 86400000), zone),
      wallDate(new Date(+range.end + 2 * 86400000), zone),
      true,
      (_date, index) => {
        if (index > max)
          throw new RangeError("Recurrence occurrence budget exceeded");
        return true;
      },
    )
    .map((date) =>
      schedulerZonedDate(
        date.toISOString().slice(0, 19),
        zone,
        options.disambiguation,
      ),
    );
  const instants = [
    ...values.filter((date) => !instantUntil || date <= instantUntil),
    ...(options.includeDates ?? []).map(schedulerDate),
  ];
  const result: SchedulerOccurrence[] = [];
  const seen = new Set<number>();
  for (const date of instants) {
    if (!Number.isFinite(+date))
      throw new RangeError("Invalid recurrence inclusion");
    if (seen.has(+date) || excluded.has(+date)) continue;
    seen.add(+date);
    const occurrence = {
      ...cloneSchedulerEvent(event),
      id: JSON.stringify([event.id, +date]),
      seriesId: event.id,
      originalStart: date.toISOString(),
      start: date.toISOString(),
      end: new Date(+date + duration).toISOString(),
    };
    if (isSchedulerEventInRange(occurrence, range)) result.push(occurrence);
  }
  if (result.length > max)
    throw new RangeError("Recurrence occurrence budget exceeded");
  return result.sort(
    (a, b) => +schedulerDate(a.start!) - +schedulerDate(b.start!),
  );
}
