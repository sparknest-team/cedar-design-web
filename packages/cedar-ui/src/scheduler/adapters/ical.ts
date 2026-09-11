import {
  cloneSchedulerEvent,
  schedulerDate,
  validateSchedulerEvent,
} from "../core";
import type { SchedulerEvent, SchedulerDate } from "../core";
import { schedulerZonedDate } from "./rrule";
import type {
  SchedulerTimeDisambiguation,
  SchedulerRRuleSeries,
} from "./rrule";
const escapeText = (value: string) =>
  value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
const unescapeText = (value: string) =>
  value.replace(/\\([nN,;\\])/g, (_, char) =>
    char.toLowerCase() === "n" ? "\n" : char,
  );
const stamp = (value: SchedulerDate) =>
  schedulerDate(value)
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
function fold(line: string): string {
  let result = "",
    bytes = 0;
  for (const char of line) {
    const size = new TextEncoder().encode(char).length;
    if (bytes + size > 75) {
      result += "\r\n ";
      bytes = 1;
    }
    result += char;
    bytes += size;
  }
  return result;
}
export function exportSchedulerICalendar(
  events: readonly SchedulerEvent[],
  options: { stamp: SchedulerDate; name?: string },
): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Cedar//Scheduler//EN",
    "CALSCALE:GREGORIAN",
  ];
  if (options.name) lines.push(`X-WR-CALNAME:${escapeText(options.name)}`);
  const ids = new Set<string>();
  for (const event of events) {
    validateSchedulerEvent(event);
    if (event.start == null)
      throw new RangeError("Unscheduled events cannot be exported to ICS");
    if (ids.has(event.id)) throw new RangeError("Duplicate calendar UID");
    ids.add(event.id);
    lines.push(
      "BEGIN:VEVENT",
      `UID:${escapeText(event.id)}`,
      `DTSTAMP:${stamp(options.stamp)}`,
      `SUMMARY:${escapeText(event.title)}`,
    );
    if (event.description)
      lines.push(`DESCRIPTION:${escapeText(event.description)}`);
    if (event.allDay)
      lines.push(
        `DTSTART;VALUE=DATE:${String(event.start).replace(/-/g, "")}`,
        `DTEND;VALUE=DATE:${String(event.end).replace(/-/g, "")}`,
      );
    else
      lines.push(`DTSTART:${stamp(event.start)}`, `DTEND:${stamp(event.end!)}`);
    lines.push("END:VEVENT");
  }
  return [...lines, "END:VCALENDAR"].map(fold).join("\r\n") + "\r\n";
}
export interface SchedulerCalendarImport {
  events: SchedulerEvent[];
  series: SchedulerRRuleSeries[];
}
/** Import individual VEVENTs and RRULE seeds. Custom VTIMEZONE definitions are rejected, not guessed. */
export function importSchedulerICalendar(
  text: string,
  options: {
    timeZone?: string;
    disambiguation?: SchedulerTimeDisambiguation;
  } = {},
): SchedulerCalendarImport {
  const lines = text.replace(/\r?\n[ \t]/g, "").split(/\r?\n/);
  if (!lines.includes("BEGIN:VCALENDAR") || !lines.includes("END:VCALENDAR"))
    throw new RangeError("Invalid iCalendar envelope");
  if (lines.includes("BEGIN:VTIMEZONE"))
    throw new RangeError(
      "Import with custom VTIMEZONE definitions requires a calendar provider adapter",
    );
  const result: SchedulerCalendarImport = { events: [], series: [] };
  let fields: Map<string, { value: string; params: string }> | undefined;
  let nested = 0;
  const ids = new Set<string>();
  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      if (fields) throw new RangeError("Nested VEVENT");
      fields = new Map();
      continue;
    }
    if (!fields) continue;
    if (line === "END:VEVENT") {
      const uid = fields.get("UID"),
        summary = fields.get("SUMMARY"),
        start = fields.get("DTSTART"),
        end = fields.get("DTEND");
      if (nested) throw new RangeError("Unclosed VEVENT component");
      if (!uid || !start || !end)
        throw new RangeError("VEVENT requires UID, DTSTART and DTEND");
      const read = (field: { value: string; params: string }): string => {
        if (/VALUE=DATE(?:;|$)/i.test(field.params)) {
          if (!/^\d{8}$/.test(field.value))
            throw new RangeError("Invalid DATE");
          return field.value.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
        }
        const match = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z?)$/.exec(
          field.value,
        );
        if (!match) throw new RangeError("Invalid DATE-TIME");
        const local = `${match[1]}-${match[2]}-${match[3]}T${match[4]}:${match[5]}:${match[6]}`;
        const zone = match[7]
          ? "UTC"
          : (/TZID=([^;]+)/i.exec(field.params)?.[1].replace(/^"|"$/g, "") ??
            options.timeZone);
        if (!zone)
          throw new RangeError("Floating date-time requires a timeZone");
        return schedulerZonedDate(
          local,
          zone,
          options.disambiguation,
        ).toISOString();
      };
      const event: SchedulerEvent = {
        id: unescapeText(uid.value),
        title: unescapeText(summary?.value ?? "Untitled"),
        start: read(start),
        end: read(end),
        allDay: /VALUE=DATE(?:;|$)/i.test(start.params),
        description: fields.get("DESCRIPTION")
          ? unescapeText(fields.get("DESCRIPTION")!.value)
          : undefined,
      };
      if (!event.allDay && event.start === event.end) event.milestone = true;
      validateSchedulerEvent(event);
      if (ids.has(event.id))
        throw new RangeError(
          "Duplicate UID or recurrence exceptions require a provider adapter",
        );
      ids.add(event.id);
      if (
        ["RECURRENCE-ID", "RDATE", "EXDATE", "EXRULE", "DURATION"].some((key) =>
          fields!.has(key),
        )
      )
        throw new RangeError(
          "This iCalendar feature requires a provider adapter",
        );
      const rule = fields.get("RRULE");
      if (rule && event.allDay)
        throw new RangeError("All-day RRULE requires a provider adapter");
      if (rule)
        result.series.push({
          event,
          rule: rule.value,
          timeZone: start.value.endsWith("Z")
            ? "UTC"
            : (/TZID=([^;]+)/i.exec(start.params)?.[1].replace(/^"|"$/g, "") ??
              options.timeZone ??
              "UTC"),
        });
      else result.events.push(cloneSchedulerEvent(event));
      fields = undefined;
      continue;
    }
    if (line.startsWith("BEGIN:")) {
      nested++;
      continue;
    }
    if (line.startsWith("END:")) {
      if (!nested) throw new RangeError("Unexpected component end");
      nested--;
      continue;
    }
    if (nested) continue;
    const colon = line.indexOf(":");
    if (colon < 0) continue;
    const [key, ...params] = line.slice(0, colon).split(";");
    if (fields.has(key.toUpperCase()))
      throw new RangeError("Duplicate VEVENT property");
    fields.set(key.toUpperCase(), {
      value: line.slice(colon + 1),
      params: params.join(";"),
    });
  }
  if (fields) throw new RangeError("Unclosed VEVENT");
  return result;
}
