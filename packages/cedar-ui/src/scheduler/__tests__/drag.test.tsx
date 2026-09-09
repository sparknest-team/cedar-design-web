import { expect, test } from "vitest";
import { projectSchedulerDrag } from "../drag";
const event = {
  id: "e",
  title: "Event",
  start: "2026-09-09T09:00:00",
  end: "2026-09-09T10:00:00",
};
test("resize cannot invert the interval and clamps to the minimum step", () => {
  const start = projectSchedulerDrag(
    event,
    new Date("2026-09-09T12:00:00"),
    "start",
    30,
    8,
    undefined,
    undefined,
    false,
  )!;
  expect(+new Date(start.end!) - +new Date(start.start!)).toBe(30 * 60000);
  const end = projectSchedulerDrag(
    event,
    new Date("2026-09-09T08:00:00"),
    true,
    30,
    8,
    undefined,
    undefined,
    false,
  )!;
  expect(+new Date(end.end!) - +new Date(end.start!)).toBe(30 * 60000);
  expect(
    projectSchedulerDrag(
      event,
      new Date(),
      true,
      30,
      8,
      undefined,
      undefined,
      true,
    ),
  ).toBeUndefined();
  expect(event.start).toBe("2026-09-09T09:00:00");
  expect(event.end).toBe("2026-09-09T10:00:00");
});
