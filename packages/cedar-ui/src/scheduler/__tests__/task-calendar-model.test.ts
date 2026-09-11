import { expect, test } from "vitest";
import {
  taskCalendarEnd,
  toTaskCalendarEvent,
  type TaskCalendarOrder,
} from "../__demos__/task-calendar-model";

const order: TaskCalendarOrder = {
  id: "order-1",
  kind: "work",
  status: "planned",
  personId: "person:lin",
  plannedStart: "2026-09-22T09:00:00",
  plannedEnd: "2026-09-22T10:30:00",
  tasks: [
    {
      id: "task-1",
      title: "月检",
      deviceId: "device:a",
      skill: "inspection",
      standardMinutes: 60,
    },
    {
      id: "task-2",
      title: "清洁",
      deviceId: "device:a",
      skill: "cleaning",
      standardMinutes: 30,
    },
  ],
  punchRecords: [],
  color: "#1677ff",
};

test("one business order becomes one event with person and unique devices", () => {
  const event = toTaskCalendarEvent(order);
  expect(event).toMatchObject({
    id: "order-1",
    title: "月检、清洁",
    resourceIds: ["person:lin", "device:a"],
    readonly: false,
    metadata: {
      attendanceOrderId: "order-1",
      taskIds: ["task-1", "task-2"],
      typeId: "work",
      status: "planned",
    },
  });
  expect(event).not.toHaveProperty("tasks");
  expect(event).not.toHaveProperty("punchRecords");
});

test("closed orders show actual time and rest remains a business-side visual mapping", () => {
  const closed = toTaskCalendarEvent({
    ...order,
    status: "closed",
    actualStart: "2026-09-22T09:12:00",
    actualEnd: "2026-09-22T10:41:00",
  });
  expect(closed).toMatchObject({
    start: "2026-09-22T09:12:00",
    end: "2026-09-22T10:41:00",
    readonly: true,
  });

  const rest = toTaskCalendarEvent({
    ...order,
    kind: "rest",
    tasks: [],
  });
  expect(rest).toMatchObject({
    title: "休息",
    readonly: true,
    backgroundPattern: "diagonal-stripes",
    metadata: { typeId: "rest" },
  });
});

test("business code calculates an order end from task standard durations", () => {
  expect(+taskCalendarEnd(order.plannedStart, order.tasks)).toBe(
    +new Date(order.plannedStart) + 90 * 60_000,
  );
});
