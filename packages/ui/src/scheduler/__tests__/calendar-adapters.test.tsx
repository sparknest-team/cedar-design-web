import { test, expect } from "vitest";
import {
  exportSchedulerICalendar,
  importSchedulerICalendar,
  createSchedulerPrintHtml,
} from "../adapters";
test("ICS Unicode folding, escapes, UTC and all-day boundaries round-trip", () => {
  const events = [
    {
      id: "a",
      title: "长标题".repeat(40) + ";会议,\n复核",
      start: "2026-09-22T09:00:00Z",
      end: "2026-09-22T10:00:00Z",
    },
    {
      id: "b",
      title: "休假",
      start: "2026-09-23",
      end: "2026-09-25",
      allDay: true,
    },
  ];
  const text = exportSchedulerICalendar(events, {
    stamp: "2026-09-01T00:00:00Z",
  });
  expect(
    text
      .split("\r\n")
      .every((line) => new TextEncoder().encode(line).length <= 75),
  ).toBe(true);
  const imported = importSchedulerICalendar(text).events;
  expect(imported[0].title).toBe(events[0].title);
  expect(imported[1].end).toBe("2026-09-25");
});
test("print output escapes user markup and unsupported calendars fail explicitly", () => {
  expect(
    createSchedulerPrintHtml([{ id: "a", title: "<script>alert(1)</script>" }]),
  ).not.toContain("<script>");
  expect(() =>
    importSchedulerICalendar(
      "BEGIN:VCALENDAR\nBEGIN:VTIMEZONE\nEND:VTIMEZONE\nEND:VCALENDAR",
    ),
  ).toThrow();
});

test("UTC recurrence ignores floating timezone fallback and milestones round-trip", () => {
  const text =
    "BEGIN:VCALENDAR\nBEGIN:VEVENT\nUID:weekly\nDTSTART:20260922T090000Z\nDTEND:20260922T100000Z\nRRULE:FREQ=WEEKLY;COUNT=2\nEND:VEVENT\nEND:VCALENDAR";
  expect(
    importSchedulerICalendar(text, { timeZone: "Asia/Shanghai" }).series[0]
      .timeZone,
  ).toBe("UTC");
  const milestone = {
    id: "m",
    title: "Release",
    start: "2026-09-22T09:00:00Z",
    end: "2026-09-22T09:00:00Z",
    milestone: true,
  };
  expect(
    importSchedulerICalendar(
      exportSchedulerICalendar([milestone], { stamp: milestone.start }),
    ).events[0].milestone,
  ).toBe(true);
  expect(() =>
    importSchedulerICalendar(
      text.replace("RRULE:FREQ=WEEKLY;COUNT=2", "BEGIN:VALARM"),
    ),
  ).toThrow("Unclosed");
});
