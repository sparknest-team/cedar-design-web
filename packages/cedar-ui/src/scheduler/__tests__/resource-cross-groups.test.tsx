import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import Card from "../components/SchedulerEvent.vue";
import { createSchedulerResourceRows, moveSchedulerResourceRow } from "../core";
const resources = [
  { id: "s1", label: "北站", dimensionId: "station" },
  { id: "s2", label: "南站", dimensionId: "station" },
  { id: "p1", label: "小林", dimensionId: "person", capacity: 1 },
  { id: "p2", label: "小陈", dimensionId: "person", capacity: 1 },
];
const dimensions = [
  { id: "station", label: "站" },
  { id: "person", label: "人" },
];
const event = {
  id: "a",
  title: "联合验收",
  start: "2026-09-22T09:00:00",
  end: "2026-09-22T10:00:00",
  resourceIds: ["s1", "p1", "p2"],
};
const setup = (props = {}) =>
  mount(Scheduler, {
    props: {
      resources,
      resourceDimensions: dimensions,
      resourceGroupDimensions: ["station", "person"],
      defaultDate: "2026-09-22",
      defaultMode: "resource-timeline",
      defaultScale: "hour",
      defaultValue: [event],
      ...props,
    },
  });
const row = (w: ReturnType<typeof setup>, index: number) =>
  w.findAll(".c-scheduler__timeline-row")[index];
const cell = (w: ReturnType<typeof setup>, index: number, hour = 11) =>
  row(w, index).findAll("[data-scheduler-date]")[hour];

test("cross rows include empty combinations and stable ID keys independent of labels", () => {
  const rows = createSchedulerResourceRows(resources, ["station", "person"]);
  expect(rows.map((r) => r.resourceIds)).toEqual([
    ["s1", "p1"],
    ["s1", "p2"],
    ["s2", "p1"],
    ["s2", "p2"],
  ]);
  expect(
    createSchedulerResourceRows(
      resources.map((r) => ({ ...r, label: "same" })),
      ["station", "person"],
    ).map((r) => r.key),
  ).toEqual(rows.map((r) => r.key));
  expect(createSchedulerResourceRows([], ["station", "person"])).toEqual([]);
  expect(() =>
    createSchedulerResourceRows(resources, ["station", "station"]),
  ).toThrow();
  expect(
    moveSchedulerResourceRow(
      [...event.resourceIds, "unknown"],
      rows[0],
      rows[2],
    ),
  ).toEqual(["p2", "unknown", "s2", "p1"]);
  expect(event.resourceIds).toEqual(["s1", "p1", "p2"]);
});
test("one event appears in both participant rows and filtering reduces rows without mutating data", async () => {
  const w = setup();
  try {
    expect(w.findAll(".c-scheduler__timeline-row")).toHaveLength(4);
    expect(w.findAllComponents(Card)).toHaveLength(2);
    await w.setProps({ resourceFilters: { person: ["p2"] } });
    expect(w.findAll(".c-scheduler__timeline-row")).toHaveLength(2);
    expect(w.findAllComponents(Card)).toHaveLength(1);
    expect(w.emitted("update:modelValue")).toBeUndefined();
  } finally {
    w.unmount();
  }
});
test("cross-cell creation exposes actual pair IDs, never the display key", async () => {
  const w = setup({ editable: false });
  try {
    await cell(w, 3).trigger("click");
    expect(
      (w.emitted("editor-request")![0][0] as any).event.resourceIds,
    ).toEqual(["s2", "p2"]);
    expect(w.emitted("cell-click")![0][0]).toMatchObject({
      resourceIds: ["s2", "p2"],
      resourceId: undefined,
    });
  } finally {
    w.unmount();
  }
});
test("cross-row drag updates the single event and preserves other people; undo restores it", async () => {
  const w = setup({ history: true });
  try {
    const card = row(w, 0).getComponent(Card);
    card.vm.$emit("drag-start", card.props("event"), false);
    await cell(w, 2).trigger("drop");
    await flushPromises();
    const next = w.emitted("update:modelValue")![0][0] as any[];
    expect(next).toHaveLength(1);
    expect(next[0].resourceIds).toEqual(["p2", "s2", "p1"]);
    expect(row(w, 0).findAllComponents(Card)).toHaveLength(0);
    expect(row(w, 2).findAllComponents(Card)).toHaveLength(1);
    expect(row(w, 3).findAllComponents(Card)).toHaveLength(1);
    await w.vm.undo();
    expect(row(w, 0).findAllComponents(Card)).toHaveLength(1);
  } finally {
    w.unmount();
  }
});
test("disabled parent blocks pair creation and hidden resource conflicts block drops", async () => {
  const w = setup({
    resources: resources.map((r) =>
      r.id === "s2" ? { ...r, disabled: true } : r,
    ),
    editable: false,
  });
  try {
    await cell(w, 2).trigger("click");
    expect(w.emitted("editor-request")).toBeUndefined();
  } finally {
    w.unmount();
  }
  const other = setup({
    defaultValue: [
      event,
      {
        ...event,
        id: "busy",
        start: "2026-09-22T11:00:00",
        end: "2026-09-22T12:00:00",
        resourceIds: ["s1", "p1"],
      },
    ],
  });
  try {
    const card = row(other, 0).findAllComponents(Card)[0];
    card.vm.$emit("drag-start", card.props("event"), false);
    await cell(other, 2).trigger("drop");
    await flushPromises();
    expect(other.emitted("update:modelValue")).toBeUndefined();
    expect(other.emitted("change-error")).toBeTruthy();
  } finally {
    other.unmount();
  }
});
test("dimension order reverses grouping and invalid grouping falls back to flat rows", async () => {
  const w = setup();
  try {
    await w.setProps({ resourceGroupDimensions: ["person", "station"] });
    expect(w.findAll(".c-scheduler__resource-group")[0].text()).toContain(
      "小林",
    );
    await w.setProps({ resourceGroupDimensions: ["missing", "station"] });
    expect(w.findAll(".c-scheduler__resource-group")).toHaveLength(0);
    expect(w.findAll(".c-scheduler__timeline-row")).toHaveLength(4);
  } finally {
    w.unmount();
  }
});

test("controlled group collapse uses stable parent IDs and header slots receive real resources", async () => {
  const headers: string[][] = [];
  const w = mount(Scheduler, {
    props: {
      resources,
      resourceDimensions: dimensions,
      resourceGroupDimensions: ["station", "person"],
      defaultMode: "resource-timeline",
      expandedKeys: [],
    },
    slots: {
      "resource-header": (props: any) => {
        headers.push(props.resources.map((r: any) => r.id));
        return props.resource.id;
      },
    },
  });
  try {
    expect(w.findAll(".c-scheduler__timeline-row")).toHaveLength(0);
    await w.findAll(".c-scheduler__resource-group")[0].trigger("click");
    expect(w.emitted("update:expandedKeys")![0][0]).toEqual(['["s1"]']);
    expect(w.findAll(".c-scheduler__timeline-row")).toHaveLength(0);
    await w.setProps({ expandedKeys: ['["s1"]'] });
    expect(w.findAll(".c-scheduler__timeline-row")).toHaveLength(2);
    expect(headers).toContainEqual(["s1", "p1"]);
    expect(w.findAll(".c-scheduler__resource-label")[0].text()).toBe("p1");
  } finally {
    w.unmount();
  }
});

test("resize from a cross row preserves all resource assignments", async () => {
  const w = setup();
  try {
    const card = row(w, 0).getComponent(Card);
    card.vm.$emit("drag-start", card.props("event"), true);
    await cell(w, 3).trigger("drop");
    await flushPromises();
    expect(
      (w.emitted("update:modelValue")![0][0] as any[])[0].resourceIds,
    ).toEqual(event.resourceIds);
  } finally {
    w.unmount();
  }
});
