import { test, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler from "../scheduler.vue";
import Input from "../../input";
import Editor from "../components/scheduler-editor.vue";
import { duplicateSchedulerEvent, SchedulerError } from "../core";
import type { SchedulerEvent } from "../core";
const event: SchedulerEvent = {
  id: "a",
  title: "Original",
  start: new Date(2026, 8, 16, 10),
  end: new Date(2026, 8, 16, 11),
  resourceIds: ["r"],
  taskId: "task",
  description: "Details",
  color: "red",
  accentColor: "orange",
  backgroundColor: "#fffbe6",
  backgroundPattern: "dots",
  metadata: { typeId: "meeting" },
};
test("copy detaches standard fields and removes recurrence identity and unknown extensions", () => {
  const source = {
    ...event,
    seriesId: "series",
    originalStart: "2026-09-16T10:00:00",
    custom: { a: 1 },
  };
  const copy = duplicateSchedulerEvent(source, "b");
  expect(copy).toMatchObject({
    id: "b",
    taskId: "task",
    title: "Original",
    description: "Details",
    color: "red",
    accentColor: "orange",
    backgroundColor: "#fffbe6",
    backgroundPattern: "dots",
    metadata: { typeId: "meeting" },
  });
  expect(copy).not.toHaveProperty("seriesId");
  expect(copy).not.toHaveProperty("originalStart");
  expect(copy).not.toHaveProperty("custom");
  copy.resourceIds!.push("other");
  copy.metadata!.typeId = "rest";
  (copy.start as Date).setFullYear(2000);
  expect(event.resourceIds).toEqual(["r"]);
  expect(event.metadata).toEqual({ typeId: "meeting" });
  expect((event.start as Date).getFullYear()).toBe(2026);
});
test("preserves all-day and unscheduled forms and requires writable source and fresh id", () => {
  expect(
    duplicateSchedulerEvent(
      {
        id: "d",
        title: "Day",
        start: "2026-09-16",
        end: "2026-09-18",
        allDay: true,
      },
      "e",
    ),
  ).toMatchObject({ start: "2026-09-16", end: "2026-09-18", allDay: true });
  expect(
    duplicateSchedulerEvent({ id: "u", title: "Backlog" }, "v").start,
  ).toBeUndefined();
  for (const id of ["", " ", "a"])
    expect(() => duplicateSchedulerEvent(event, id)).toThrow(SchedulerError);
  expect(() =>
    duplicateSchedulerEvent({ ...event, readonly: true }, "b"),
  ).toThrow();
});
test("copy creates only a draft; save uses capacity rules and history", async () => {
  const hook = vi.fn();
  const w = mount(Scheduler, {
    props: {
      defaultValue: [event],
      defaultDate: "2026-09-16",
      defaultMode: "agenda",
      resources: [{ id: "r", label: "Room", capacity: 2 }],
      history: true,
      beforeChange: hook,
    },
  });
  try {
    expect(w.vm.duplicateEvent("a")).toBe(true);
    await flushPromises();
    const editor = w.getComponent(Editor);
    expect(editor.props("existing")).toBe(false);
    expect(editor.props("event").id).not.toBe("a");
    expect(hook).not.toHaveBeenCalled();
    expect(w.emitted("update:modelValue")).toBeUndefined();
    editor.vm.$emit("save", editor.props("event"));
    await flushPromises();
    expect(w.emitted("update:modelValue")!.at(-1)![0]).toHaveLength(2);
    expect(await w.vm.undo()).toBe(true);
    expect(await w.vm.redo()).toBe(true);
    expect(w.vm.duplicateEvent("a")).toBe(true);
    await flushPromises();
    editor.vm.$emit("save", editor.props("event"));
    await flushPromises();
    expect(editor.props("open")).toBe(true);
    expect(editor.props("error")?.code).toBe("capacity");
  } finally {
    w.unmount();
    document.body.innerHTML = "";
  }
});
test("cancel does not commit and permissions reject copy commands", async () => {
  const w = mount(Scheduler, {
    props: {
      defaultValue: [event],
      defaultDate: "2026-09-16",
      defaultMode: "agenda",
    },
  });
  try {
    expect(w.vm.duplicateEvent("missing")).toBe(false);
    w.vm.duplicateEvent("a");
    await flushPromises();
    w.getComponent(Editor).vm.$emit("update:open", false);
    await flushPromises();
    expect(w.emitted("update:modelValue")).toBeUndefined();
    for (const props of [
      { readonly: true },
      { readonly: false, disabled: true },
      { disabled: false, loading: true },
      { loading: false, modelValue: [{ ...event, readonly: true }] },
    ]) {
      await w.setProps(props);
      expect(w.vm.duplicateEvent("a")).toBe(false);
    }
  } finally {
    w.unmount();
    document.body.innerHTML = "";
  }
});
test("custom editor receives independent create request and distinct ids", () => {
  const w = mount(Scheduler, {
    props: {
      defaultValue: [event],
      defaultDate: "2026-09-16",
      editable: false,
    },
  });
  try {
    w.vm.duplicateEvent("a");
    w.vm.duplicateEvent("a");
    const requests = w
      .emitted("editor-request")!
      .map(
        (x) =>
          x[0] as { action: string; source: string; event: SchedulerEvent },
      );
    expect(requests[0]).toMatchObject({
      action: "create",
      source: "duplicate",
      readonly: false,
    });
    expect(requests[0].event.id).not.toBe(requests[1].event.id);
    expect(w.findComponent(Editor).exists()).toBe(false);
  } finally {
    w.unmount();
  }
});

test("native editor duplicate action copies saved state, not unsaved draft edits", async () => {
  const w = mount(Scheduler, {
    props: {
      defaultValue: [event],
      defaultDate: "2026-09-16",
      defaultMode: "agenda",
    },
  });
  try {
    await w
      .findAll("button")
      .find((b) => b.text().includes("Original"))!
      .trigger("click");
    await flushPromises();
    const editor = w.getComponent(Editor);
    editor.getComponent(Input).vm.$emit("update:modelValue", "Unsaved title");
    await flushPromises();
    editor.vm.$emit("duplicate");
    await flushPromises();
    expect(editor.props("existing")).toBe(false);
    expect(editor.props("event").title).toBe("Original");
    expect(w.emitted("update:modelValue")).toBeUndefined();
  } finally {
    w.unmount();
    document.body.innerHTML = "";
  }
});
