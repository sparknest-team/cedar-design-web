import { describe, expect, test } from "vitest";
import {
  expandSchedulerRecurrences,
  splitSchedulerRecurrence,
  setSchedulerRecurrenceException,
  schedulerDateKey,
} from "../core";
import type { SchedulerRecurringEvent } from "../core";
const range = {
  start: new Date("2026-09-01T00:00:00"),
  end: new Date("2026-10-01T00:00:00"),
};
const fixture = (): SchedulerRecurringEvent => ({
  event: {
    id: "old",
    title: "Original",
    start: "2026-09-07T09:00:00",
    end: "2026-09-07T10:00:00",
    resourceIds: ["a"],
  },
  rule: { frequency: "weekly", interval: 2, daysOfWeek: [1, 3, 5], count: 6 },
});
describe("Scheduler split this and following", () => {
  test("preserves prefix identity and remaining count with weekly interval phase", () => {
    const source = fixture();
    const before = expandSchedulerRecurrences([source], range);
    const selected = before[1];
    const result = splitSchedulerRecurrence([source], [], selected, {
      nextEvent: { ...selected, id: "new", title: "Following" },
    });
    const after = expandSchedulerRecurrences(result.series, range);
    expect(after.map((item) => schedulerDateKey(item.start!))).toEqual(
      before.map((item) => schedulerDateKey(item.start!)),
    );
    expect(after[0].id).toBe(before[0].id);
    expect(after.slice(1).every((item) => item.seriesId === "new")).toBe(true);
    expect(result.series.map((item) => item.rule.count)).toEqual([1, 5]);
    expect(source.rule.count).toBe(6);
    expect(result.series[1].event).not.toHaveProperty("originalStart");
  });
  test("split first replaces source; cancel last preserves all previous occurrences", () => {
    const source = fixture();
    const before = expandSchedulerRecurrences([source], range);
    const first = splitSchedulerRecurrence([source], [], before[0], {
      nextEvent: { ...before[0], id: "new" },
    });
    expect(first.series.map((item) => item.event.id)).toEqual(["new"]);
    const last = splitSchedulerRecurrence([source], [], before[5]);
    expect(expandSchedulerRecurrences(last.series, range)).toHaveLength(5);
    expect(splitSchedulerRecurrence([source], [], before[0]).series).toEqual(
      [],
    );
  });
  test("rejects future exceptions by default and returns explicit discarded records", () => {
    const source = fixture();
    const before = expandSchedulerRecurrences([source], range);
    let exceptions = setSchedulerRecurrenceException([], before[0], {
      ...before[0],
      title: "Past exception",
    });
    exceptions = setSchedulerRecurrenceException(exceptions, before[3]);
    expect(() =>
      splitSchedulerRecurrence([source], exceptions, before[1]),
    ).toThrow("explicit discard");
    const result = splitSchedulerRecurrence([source], exceptions, before[1], {
      exceptionPolicy: "discard",
    });
    expect(result.exceptions).toHaveLength(1);
    expect(result.removedExceptions).toHaveLength(1);
    expect(result.exceptions[0].event!.title).toBe("Past exception");
    expect(exceptions).toHaveLength(2);
  });
  test("partitions moved exceptions by original time, not displayed date", () => {
    const source = fixture();
    const before = expandSchedulerRecurrences([source], range);
    let exceptions = setSchedulerRecurrenceException([], before[0], {
      ...before[0],
      start: "2026-09-25T11:00:00",
      end: "2026-09-25T12:00:00",
    });
    exceptions = setSchedulerRecurrenceException(exceptions, before[4], {
      ...before[4],
      start: "2026-09-01T11:00:00",
      end: "2026-09-01T12:00:00",
    });
    const moved = expandSchedulerRecurrences([source], range, {
      exceptions,
    }).find((item) => item.id === before[4].id)!;
    const result = splitSchedulerRecurrence([source], exceptions, moved, {
      exceptionPolicy: "discard",
    });
    expect(result.exceptions[0].originalStart).toBe(before[0].originalStart);
    expect(result.removedExceptions[0].originalStart).toBe(
      before[4].originalStart,
    );
    expect(result.series[0].rule.count).toBe(4);
  });
  test("explicit rule replaces the tail, including termination, without changing the prefix", () => {
    const source = fixture();
    const selected = expandSchedulerRecurrences([source], range)[1];
    const result = splitSchedulerRecurrence([source], [], selected, {
      nextEvent: { ...selected, id: "new" },
      rule: { frequency: "daily", count: 2 },
    });
    expect(
      expandSchedulerRecurrences(result.series, range).map((item) =>
        schedulerDateKey(item.start!),
      ),
    ).toEqual(["2026-09-07", "2026-09-09", "2026-09-10"]);
  });
  test("supports all-day and inherited until without manufacturing extra instances", () => {
    const source: SchedulerRecurringEvent = {
      event: {
        id: "all",
        title: "All",
        allDay: true,
        start: "2026-09-07",
        end: "2026-09-09",
      },
      rule: { frequency: "daily", until: "2026-09-10" },
    };
    const before = expandSchedulerRecurrences([source], range);
    const result = splitSchedulerRecurrence([source], [], before[2], {
      nextEvent: { ...before[2], id: "new" },
    });
    const after = expandSchedulerRecurrences(result.series, range);
    expect(after.map((item) => [item.start, item.end])).toEqual(
      before.map((item) => [item.start, item.end]),
    );
  });
  test("rejects stale boundaries, ID collisions, readonly series and invalid replacement seeds", () => {
    const source = fixture();
    const selected = expandSchedulerRecurrences([source], range)[1];
    expect(() =>
      splitSchedulerRecurrence([source], [], {
        ...selected,
        originalStart: "2026-09-10T09:00:00",
      }),
    ).toThrow("not an occurrence");
    expect(() =>
      splitSchedulerRecurrence([source], [], selected, {
        nextEvent: { ...selected, id: "old" },
      }),
    ).toThrow("fresh ID");
    expect(() =>
      splitSchedulerRecurrence(
        [{ ...source, event: { ...source.event, readonly: true } }],
        [],
        selected,
      ),
    ).toThrow("readonly");
    expect(() =>
      splitSchedulerRecurrence([source], [], selected, {
        nextEvent: {
          ...selected,
          id: "new",
          start: "2026-09-10T09:00:00",
          end: "2026-09-10T10:00:00",
        },
      }),
    ).toThrow("must match");
    expect(() =>
      splitSchedulerRecurrence([source], [], selected, { maxIterations: 1 }),
    ).toThrow("limit");
  });
  test("detaches retained series, rules and exceptions from inputs", () => {
    const source = fixture();
    const before = expandSchedulerRecurrences([source], range);
    const exceptions = setSchedulerRecurrenceException(
      [],
      before[0],
      before[0],
    );
    const result = splitSchedulerRecurrence([source], exceptions, before[1]);
    result.series[0].event.resourceIds!.push("b");
    result.series[0].rule.daysOfWeek!.push(6);
    result.exceptions[0].event!.title = "Mutated";
    expect(source.event.resourceIds).toEqual(["a"]);
    expect(source.rule.daysOfWeek).toEqual([1, 3, 5]);
    expect(exceptions[0].event!.title).toBe("Original");
  });
});
