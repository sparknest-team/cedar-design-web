import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import Editor from "../components/SchedulerEditor.vue";
import Card from "../components/SchedulerEvent.vue";
import InputNumber from "../../input-number";
import Form from "../../form";
import {
  getSchedulerResourceLoad,
  getSchedulerResourceSummary,
  cloneSchedulerEvent,
  moveSchedulerEvent,
  validateSchedulerEvent,
} from "../core";
import { createSchedulerTaskEvents } from "../__demos__/task-assignments";
const resource = { id: "r", label: "R", capacity: 1 };
const event = {
  id: "a",
  title: "A",
  start: "2026-09-22T09:00:00",
  end: "2026-09-22T10:00:00",
  resourceIds: ["r"],
  resourceDetails: { r: { units: 0.5, role: "owner" } },
};
test("fractional assignment load, detached details, and reassignment retain units", () => {
  expect(
    getSchedulerResourceLoad([event, { ...event, id: "b" }], resource)[0],
  ).toMatchObject({ load: 1, exceeded: false });
  expect(
    getSchedulerResourceLoad(
      [event, { ...event, id: "b" }, { ...event, id: "c" }],
      resource,
    )[0],
  ).toMatchObject({ load: 1.5, exceeded: true });
  const copy = cloneSchedulerEvent(event);
  copy.resourceDetails!.r.units = 3;
  expect(event.resourceDetails.r.units).toBe(0.5);
  const moved = moveSchedulerEvent(
    event,
    new Date("2026-09-23T09:00:00"),
    "r",
    "other",
  );
  expect(moved.resourceDetails!.other.units).toBe(0.5);
  expect(moved.resourceDetails!.r).toBeUndefined();
  expect(() =>
    validateSchedulerEvent({ ...event, resourceDetails: { r: { units: -1 } } }),
  ).toThrow();
});
test("capacity warning allows atomic save and emits a notice; block remains default", async () => {
  const w = mount(Scheduler, {
    props: {
      resources: [resource],
      defaultValue: [event, { ...event, id: "b" }],
    },
  });
  try {
    expect(
      await w.vm.change({ type: "create", event: { ...event, id: "c" } }),
    ).toBe(false);
    await w.setProps({ rulePolicy: { capacity: "warn" } });
    expect(
      await w.vm.change({ type: "create", event: { ...event, id: "c" } }),
    ).toBe(true);
    expect(w.emitted("rule-warning")).toHaveLength(1);
    expect(w.text()).toContain("容量");
  } finally {
    w.unmount();
  }
});
test("assignment editor updates units through the normal save chain", async () => {
  const w = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-22",
      defaultMode: "agenda",
      resources: [resource],
      defaultValue: [event],
      showAssignmentDetails: true,
    },
  });
  try {
    const card = w.getComponent(Card);
    card.vm.$emit("select", card.props("event"));
    await flushPromises();
    w.getComponent(Editor)
      .getComponent(InputNumber)
      .vm.$emit("update:modelValue", 0.75);
    await flushPromises();
    w.getComponent(Editor).getComponent(Form).vm.$emit("submit");
    await flushPromises();
    expect(
      (w.emitted("update:modelValue")![0][0] as any[])[0].resourceDetails.r
        .units,
    ).toBe(0.75);
  } finally {
    w.unmount();
    document.body.innerHTML = "";
  }
});

test("independent task blocks retain identity and summarize weighted time", () => {
  const assignments = [
    { ...event, id: "morning" },
    {
      ...event,
      id: "afternoon",
      start: "2026-09-22T13:00:00",
      end: "2026-09-22T14:00:00",
    },
  ];
  const events = createSchedulerTaskEvents(
    { id: "task", title: "Inspection" },
    assignments,
  );
  expect(new Set(events.map((e) => e.id)).size).toBe(2);
  expect(events.every((e) => e.metadata?.taskId === "task")).toBe(true);
  events[0].resourceDetails!.r.units = 1;
  expect(assignments[0].resourceDetails.r.units).toBe(0.5);
  expect(
    getSchedulerResourceSummary(events, resource, {
      start: new Date("2026-09-22T09:00:00"),
      end: new Date("2026-09-22T15:00:00"),
    }),
  ).toMatchObject({ peakLoad: 1, unitMinutes: 90, utilization: 25 });
  expect(() =>
    createSchedulerTaskEvents({ id: "task", title: "Inspection" }, [
      assignments[0],
      assignments[0],
    ]),
  ).toThrow();
});
