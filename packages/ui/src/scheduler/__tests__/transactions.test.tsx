import { describe, test, expect, vi, afterEach } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import { applySchedulerTransaction } from "../core";
import type {
  SchedulerEvent,
  SchedulerChange,
  SchedulerTransactionContext,
} from "../core";
const events: SchedulerEvent[] = [
  {
    id: "a",
    title: "A",
    start: "2026-09-09T09:00:00",
    end: "2026-09-09T10:00:00",
    resourceIds: ["r"],
  },
  {
    id: "b",
    title: "B",
    start: "2026-09-09T10:00:00",
    end: "2026-09-09T11:00:00",
    resourceIds: ["r"],
  },
];
const wrappers: ReturnType<typeof mount>[] = [];
function setup(props = {}) {
  const w = mount(Scheduler, {
    props: {
      defaultValue: events,
      defaultDate: "2026-09-09",
      defaultMode: "agenda",
      history: true,
      ...props,
    },
  });
  wrappers.push(w);
  return w;
}
afterEach(() => {
  wrappers.splice(0).forEach((w) => w.unmount());
});
const remove = events.map((event) => ({ type: "remove" as const, event }));

describe("atomic transactions", () => {
  test("pure proposal leaves inputs untouched on partial failure", () => {
    const before = JSON.stringify(events);
    expect(() =>
      applySchedulerTransaction(events, [
        remove[0],
        { type: "remove", event: { id: "missing", title: "Missing" } },
      ]),
    ).toThrow();
    expect(JSON.stringify(events)).toBe(before);
    expect(() =>
      applySchedulerTransaction(events, [remove[0], remove[0]]),
    ).toThrow();
  });
  test("checks conflicts on final state, allowing a time swap", async () => {
    const w = setup({ allowOverlap: false });
    expect(
      await w.vm.transaction([
        {
          type: "move",
          event: { ...events[0], start: events[1].start, end: events[1].end },
        },
        {
          type: "move",
          event: { ...events[1], start: events[0].start, end: events[0].end },
        },
      ]),
    ).toBe(true);
    expect(w.emitted("update:modelValue")).toHaveLength(1);
    expect(await w.vm.undo()).toBe(true);
    expect(w.emitted("update:modelValue")!.at(-1)![0]).toEqual(events);
  });
  test("one readonly member rejects the entire batch before persistence", async () => {
    const hook = vi.fn();
    const w = setup({
      defaultValue: [events[0], { ...events[1], readonly: true }],
      beforeTransaction: hook,
    });
    expect(await w.vm.transaction(remove)).toBe(false);
    expect(w.emitted("update:modelValue")).toBeUndefined();
    expect(hook).not.toHaveBeenCalled();
    expect(w.vm.canUndo).toBe(false);
  });
  test("legacy per-event persistence cannot partially save a batch", async () => {
    const hook = vi.fn();
    const w = setup({ beforeChange: hook });
    expect(await w.vm.transaction(remove)).toBe(false);
    expect(hook).not.toHaveBeenCalled();
    expect(
      (w.emitted("transaction-error")![0][0] as { code: string }).code,
    ).toBe("transaction-hook-required");
  });
  test("calls the transaction hook once with detached data", async () => {
    const legacy = vi.fn();
    const hook = vi.fn((c: SchedulerTransactionContext) => {
      c.value.length = 0;
      c.changes[0].event.title = "tampered";
    });
    const w = setup({ beforeChange: legacy, beforeTransaction: hook });
    expect(
      await w.vm.transaction(
        events.map((event) => ({
          type: "update",
          event: { ...event, title: event.title + " edited" },
        })),
      ),
    ).toBe(true);
    expect(hook).toHaveBeenCalledTimes(1);
    expect(legacy).not.toHaveBeenCalled();
    expect(
      (w.emitted("update:modelValue")![0][0] as SchedulerEvent[])[0].title,
    ).toBe("A edited");
  });
  test("rejected batch does not emit value or record history", async () => {
    const w = setup({ beforeTransaction: () => false });
    expect(await w.vm.transaction(remove)).toBe(false);
    expect(w.vm.canUndo).toBe(false);
    expect(w.emitted("update:modelValue")).toBeUndefined();
  });
  test("rule failures reject all members", async () => {
    const w = setup({
      disabledRanges: [
        {
          id: "closed",
          start: "2026-09-09T12:00:00",
          end: "2026-09-09T13:00:00",
        },
      ],
    });
    const changes: SchedulerChange[] = [
      { type: "update", event: { ...events[0], title: "New" } },
      {
        type: "move",
        event: {
          ...events[1],
          start: "2026-09-09T12:00:00",
          end: "2026-09-09T13:00:00",
        },
      },
    ];
    expect(await w.vm.transaction(changes)).toBe(false);
    expect(w.emitted("update:modelValue")).toBeUndefined();
  });
});

describe("history and controlled ownership", () => {
  test("undo and redo preserve deleted event order and clear redo on new changes", async () => {
    const w = setup();
    expect(await w.vm.transaction(remove)).toBe(true);
    expect(w.vm.canUndo).toBe(true);
    expect(await w.vm.undo()).toBe(true);
    expect(w.emitted("update:modelValue")!.at(-1)![0]).toEqual(events);
    expect(w.vm.canRedo).toBe(true);
    expect(await w.vm.redo()).toBe(true);
    expect(w.emitted("update:modelValue")!.at(-1)![0]).toEqual([]);
    await w.vm.undo();
    await w.vm.change({
      type: "update",
      event: { ...events[0], title: "Changed" },
    });
    expect(w.vm.canRedo).toBe(false);
  });
  test("undo uses current rules and does not pop failed entries", async () => {
    const w = setup();
    await w.vm.transaction(remove);
    await w.setProps({ workingHours: [] });
    expect(await w.vm.undo()).toBe(false);
    expect(w.vm.canUndo).toBe(true);
    expect(w.vm.canRedo).toBe(false);
    await w.setProps({ workingHours: undefined });
    expect(await w.vm.undo()).toBe(true);
  });
  test("waits for parent acceptance and invalidates history on external edits", async () => {
    const w = setup({ modelValue: events });
    await w.vm.transaction(remove);
    expect(w.vm.canUndo).toBe(false);
    await w.setProps({ modelValue: [] });
    expect(w.vm.canUndo).toBe(true);
    await w.setProps({ modelValue: [{ id: "external", title: "Other" }] });
    expect(w.vm.canUndo).toBe(false);
    expect(w.vm.canRedo).toBe(false);
  });
  test("limits history and clears it when disabled", async () => {
    const w = setup({ historyLimit: 1 });
    await w.vm.change({ type: "update", event: { ...events[0], title: "1" } });
    await w.vm.change({ type: "update", event: { ...events[0], title: "2" } });
    expect(await w.vm.undo()).toBe(true);
    expect(await w.vm.undo()).toBe(false);
    await w.setProps({ history: false });
    expect(w.vm.canRedo).toBe(false);
  });
  test("pending operation blocks duplicate commands and stale async changes", async () => {
    let release!: () => void;
    const w = setup({
      beforeTransaction: () =>
        new Promise<void>((r) => {
          release = r;
        }),
    });
    const pending = w.vm.transaction(remove);
    expect(await w.vm.transaction(remove)).toBe(false);
    await w.setProps({ readonly: true });
    release();
    expect(await pending).toBe(false);
    expect(w.emitted("update:modelValue")).toBeUndefined();
  });
  test("undo persistence is a compensating transaction", async () => {
    const actions: string[] = [];
    const w = setup({
      beforeTransaction: (c: SchedulerTransactionContext) => {
        actions.push(c.action);
      },
    });
    await w.vm.transaction(remove);
    await w.vm.undo();
    await w.vm.redo();
    expect(actions).toEqual(["change", "undo", "redo"]);
  });
});

describe("selection", () => {
  test("selecting shared projections uses one event ID and avoids opening the editor", async () => {
    const w = setup({
      selectable: true,
      defaultMode: "resource-day",
      resources: [
        { id: "r", label: "R" },
        { id: "s", label: "S" },
      ],
      defaultValue: [{ ...events[0], resourceIds: ["r", "s"] }],
    });
    await w
      .find('.c-scheduler__batch-toolbar input[type="checkbox"]')
      .setValue(true);
    await w.findAll(".c-scheduler__event-button")[0].trigger("click");
    expect(w.emitted("update:selectedKeys")!.at(-1)).toEqual([["a"]]);
    expect(w.findAll('[aria-pressed="true"]')).toHaveLength(2);
    expect(w.find('[role="dialog"]').exists()).toBe(false);
    await w.findAll(".c-scheduler__event-button")[1].trigger("click");
    expect(w.emitted("update:selectedKeys")!.at(-1)).toEqual([[]]);
  });
  test("controlled selection only proposes the next value", async () => {
    const w = setup({ selectable: true, selectedKeys: [] });
    await w
      .find('.c-scheduler__batch-toolbar input[type="checkbox"]')
      .setValue(true);
    await w.findAll(".c-scheduler__event-button")[0].trigger("click");
    await flushPromises();
    expect(w.findAll('[aria-pressed="true"]')).toHaveLength(0);
    await w.setProps({ selectedKeys: ["a"] });
    expect(w.findAll('[aria-pressed="true"]')).toHaveLength(1);
  });
});
