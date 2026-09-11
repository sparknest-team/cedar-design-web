import { test, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler from "../scheduler.vue";
import Editor from "../components/scheduler-editor.vue";
import Picker from "../components/scheduler-resource-select.vue";
import Card from "../components/scheduler-event.vue";
import Grid from "../components/scheduler-time-grid.vue";
import Select from "../../select";
import Form from "../../form";
import {
  filterSchedulerEventsByResources as filter,
  setSchedulerResourceDimension as assign,
} from "../core";
import type { SchedulerResource } from "../core";
const dimensions = [
  { id: "station", label: "站" },
  { id: "person", label: "人" },
];
const resources: SchedulerResource[] = [
  { id: "s1", label: "北站", dimensionId: "station", capacity: 2 },
  { id: "s2", label: "南站", dimensionId: "station", capacity: 2 },
  { id: "p1", label: "小林", dimensionId: "person", capacity: 1 },
  { id: "p2", label: "小陈", dimensionId: "person", capacity: 1 },
];
const events = [
  {
    id: "a",
    title: "A",
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T10:00:00",
    resourceIds: ["s1", "p1"],
  },
  {
    id: "b",
    title: "B",
    start: "2026-09-22T10:00:00",
    end: "2026-09-22T11:00:00",
    resourceIds: ["s2", "p2"],
  },
  {
    id: "c",
    title: "C",
    start: "2026-09-22T14:00:00",
    end: "2026-09-22T15:00:00",
    resourceIds: ["s1", "p1", "p2"],
  },
];
const setup = (props = {}) =>
  mount(Scheduler, {
    props: {
      defaultDate: "2026-09-22",
      defaultMode: "agenda",
      defaultValue: events,
      resources,
      resourceDimensions: dimensions,
      ...props,
    },
  });
test("OR within dimensions, AND between dimensions, no duplicate events and unresolved filters fail closed", () => {
  expect(
    filter(events, resources, { station: ["s1", "s2"], person: ["p2"] }).map(
      (e) => e.id,
    ),
  ).toEqual(["b", "c"]);
  expect(
    filter(events, resources, { station: ["s1"], person: ["p2"] }).map(
      (e) => e.id,
    ),
  ).toEqual(["c"]);
  expect(filter(events, resources, { station: [], person: [] })).toEqual(
    events,
  );
  expect(filter(events, resources, { station: ["p1"] })).toEqual([]);
  expect(filter(events, [], { person: ["p1"] })).toEqual([]);
});
test("changing people preserves stations and unresolved IDs without mutating input", () => {
  const ids = ["s1", "p1", "unknown"];
  expect(assign(ids, "person", ["p2", "p2"], resources)).toEqual([
    "s1",
    "unknown",
    "p2",
  ]);
  expect(assign(ids, "person", [], resources)).toEqual(["s1", "unknown"]);
  expect(ids).toEqual(["s1", "p1", "unknown"]);
  expect(() => assign(ids, "person", ["s2"], resources)).toThrow();
});
test("controlled filters emit detached proposals and wait for parent acceptance", async () => {
  const filters = { station: ["s1"], person: ["p1"] };
  const w = setup({ resourceFilters: filters });
  try {
    expect(w.findAllComponents(Card).map((c) => c.props("event").id)).toEqual([
      "a",
      "c",
    ]);
    w.findAllComponents(Picker)
      .find((p) => p.props("dimensionId") === "person")!
      .vm.$emit("update:modelValue", ["p2"]);
    await flushPromises();
    expect(w.findAllComponents(Card).map((c) => c.props("event").id)).toEqual([
      "a",
      "c",
    ]);
    const next = w.emitted("update:resourceFilters")![0][0] as typeof filters;
    expect(next).toEqual({ station: ["s1"], person: ["p2"] });
    expect(filters.person).toEqual(["p1"]);
    await w.setProps({ resourceFilters: next });
    expect(w.findAllComponents(Card).map((c) => c.props("event").id)).toEqual([
      "c",
    ]);
    expect(w.emitted("update:modelValue")).toBeUndefined();
  } finally {
    w.unmount();
  }
});
test("uncontrolled dimension filters combine and changing axis does not remove associations", async () => {
  const w = setup({
    defaultMode: "resource-day",
    defaultResourceDimension: "station",
    defaultResourceFilters: { person: ["p2"] },
  });
  try {
    expect(
      w
        .getComponent(Grid)
        .props("columns")
        .map((c) => c.resource?.id),
    ).toEqual(["s1", "s2"]);
    expect(
      w
        .getComponent(Grid)
        .props("events")
        .map((e) => e.id),
    ).toEqual(["b", "c"]);
    const axis = w
      .findAllComponents(Select)
      .find((s) => s.props("options")?.some((o: any) => o.value === "person"))!;
    axis.vm.$emit("update:modelValue", "person");
    await flushPromises();
    expect(
      w
        .getComponent(Grid)
        .props("columns")
        .map((c) => c.resource?.id),
    ).toEqual(["p2"]);
    expect(w.getComponent(Grid).props("events")[1].resourceIds).toEqual([
      "s1",
      "p1",
      "p2",
    ]);
  } finally {
    w.unmount();
  }
});
test("editor changes a dimension while keeping other and unresolved resource IDs", async () => {
  const w = setup({
    defaultValue: [{ ...events[0], resourceIds: ["s1", "p1", "unknown"] }],
  });
  try {
    w.getComponent(Card).vm.$emit(
      "select",
      w.getComponent(Card).props("event"),
    );
    await flushPromises();
    const editor = w.getComponent(Editor);
    const pickers = editor.findAllComponents(Picker);
    expect(
      pickers
        .find((p) => p.props("dimensionId") === "station")!
        .props("modelValue"),
    ).toEqual(["s1"]);
    const people = pickers.find((p) => p.props("dimensionId") === "person")!;
    expect(
      people
        .getComponent(Select)
        .props("options")!
        .map((o: any) => o.value),
    ).toEqual(["p1", "p2"]);
    people.vm.$emit("update:modelValue", ["p2"]);
    await flushPromises();
    editor.getComponent(Form).vm.$emit("submit");
    await flushPromises();
    expect(
      (w.emitted("update:modelValue")![0][0] as typeof events)[0].resourceIds,
    ).toEqual(["s1", "unknown", "p2"]);
  } finally {
    w.unmount();
    document.body.innerHTML = "";
  }
});
test("dimension filters do not hide capacity conflicts from commit", async () => {
  const w = setup({ defaultResourceFilters: { station: ["s2"] } });
  try {
    expect(
      await w.vm.change({
        type: "create",
        event: { ...events[0], id: "new", resourceIds: ["s2", "p1"] },
      }),
    ).toBe(false);
    expect(w.emitted("update:modelValue")).toBeUndefined();
  } finally {
    w.unmount();
  }
});
test("remote pickers send dimension and filter out other-dimension suggestions", async () => {
  const request = vi.fn(
    async (_query: import("../props").SchedulerResourceQuery) => ({
      items: resources,
    }),
  );
  const w = setup({ requestResources: request });
  try {
    const picker = w
      .findAllComponents(Picker)
      .find((p) => p.props("dimensionId") === "person")!;
    picker.getComponent(Select).vm.$emit("open-change", true);
    await flushPromises();
    expect(request.mock.calls[0][0]).toMatchObject({ dimensionId: "person" });
    expect(
      picker
        .getComponent(Select)
        .props("options")!
        .map((o: any) => o.value),
    ).toEqual(["p1", "p2"]);
  } finally {
    w.unmount();
  }
});
test("resource drag changes only the displayed dimension and refuses cross-dimension drop", async () => {
  const w = setup({ defaultMode: "resource-day" });
  try {
    const grid = w.getComponent(Grid);
    grid.vm.$emit("drag-start", grid.props("events")[0], false, "s1");
    grid.vm.$emit("drop", new Date(2026, 8, 22, 9), "p2", false);
    await flushPromises();
    expect(w.emitted("update:modelValue")).toBeUndefined();
    grid.vm.$emit("drag-start", grid.props("events")[0], false, "s1");
    grid.vm.$emit("drop", new Date(2026, 8, 22, 9), "s2", false);
    await flushPromises();
    expect(
      (w.emitted("update:modelValue")![0][0] as typeof events)[0].resourceIds,
    ).toEqual(["p1", "s2"]);
  } finally {
    w.unmount();
  }
});

test("hydrated dimension metadata activates matching without modifying assignments", async () => {
  let resolve!: (items: SchedulerResource[]) => void;
  const w = setup({
    defaultValue: [{ ...events[0], resourceIds: ["s1", "remote"] }],
    defaultResourceFilters: { person: ["remote"] },
    resolveResources: () =>
      new Promise<SchedulerResource[]>((r) => {
        resolve = r;
      }),
  });
  try {
    expect(w.findAllComponents(Card)).toHaveLength(0);
    resolve([{ id: "remote", label: "远程人员", dimensionId: "person" }]);
    await flushPromises();
    expect(w.getComponent(Card).props("event").resourceIds).toEqual([
      "s1",
      "remote",
    ]);
    expect(w.emitted("update:modelValue")).toBeUndefined();
  } finally {
    w.unmount();
  }
});
