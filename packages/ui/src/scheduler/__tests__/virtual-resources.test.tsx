import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import VirtualList from "../../_components/virtual-list-v2";
import Card from "../components/SchedulerEvent.vue";
const resources = Array.from({ length: 1000 }, (_, i) => ({
  id: `r${i}`,
  label: `Resource ${i}`,
}));
const setup = (extra = {}) =>
  mount(Scheduler, {
    props: {
      resources,
      defaultMode: "resource-timeline",
      defaultDate: "2026-09-22",
      defaultScale: "hour",
      virtualListProps: { height: 480, buffer: 10, estimatedSize: 80 },
      editable: false,
      ...extra,
    },
  });
test("large timeline mounts a bounded window and scrolled cells create on actual resources", async () => {
  const w = setup();
  try {
    expect(w.findAll(".c-scheduler__timeline-row").length).toBeLessThanOrEqual(
      30,
    );
    const list = w.getComponent(VirtualList);
    list.vm.scrollTo({ index: 900 });
    await flushPromises();
    const target = w.find('[data-scheduler-resource="r900"]');
    expect(target.exists()).toBe(true);
    await target.trigger("click");
    expect(
      (w.emitted("editor-request")![0][0] as any).event.resourceIds,
    ).toEqual(["r900"]);
    expect(w.findAll(".c-scheduler__timeline-row").length).toBeLessThanOrEqual(
      30,
    );
  } finally {
    w.unmount();
  }
});
test("window changes preserve drag targets and data changes reset stale size caches", async () => {
  const event = {
    id: "task",
    title: "Task",
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T10:00:00",
    resourceIds: ["r40"],
  };
  const w = setup({
    resources: resources.slice(0, 80),
    defaultValue: [event],
    history: true,
  });
  try {
    w.getComponent(VirtualList).vm.scrollTo({ index: 40 });
    await flushPromises();
    const card = w.getComponent(Card);
    card.vm.$emit("drag-start", card.props("event"), false);
    await w.find('[data-scheduler-resource="r41"]').trigger("drop");
    await flushPromises();
    expect(
      (w.emitted("update:modelValue")![0][0] as any[])[0].resourceIds,
    ).toEqual(["r41"]);
    expect(w.find('[data-scheduler-resource="r40"]').exists()).toBe(true);
    await w.setProps({ resources: resources.slice(0, 2) });
    expect(w.findAll(".c-scheduler__timeline-row")).toHaveLength(2);
  } finally {
    w.unmount();
  }
});
test("cross grouping virtual cells use pairs and group collapse updates the window", async () => {
  const w = setup({
    resources: [
      ...resources.map((r) => ({ ...r, dimensionId: "station" })),
      { id: "p", label: "Person", dimensionId: "person" },
    ],
    resourceDimensions: [
      { id: "station", label: "Station" },
      { id: "person", label: "Person" },
    ],
    resourceGroupDimensions: ["station", "person"],
  });
  try {
    w.getComponent(VirtualList).vm.scrollTo({ index: 1800 });
    await flushPromises();
    const target = w
      .findAll("[data-scheduler-resource]")
      .find((c) => c.attributes("data-scheduler-resource") === '["r900","p"]')!;
    await target.trigger("click");
    expect(
      (w.emitted("editor-request")![0][0] as any).event.resourceIds,
    ).toEqual(["r900", "p"]);
    await w.setProps({ expandedKeys: [] });
    expect(w.findAll(".c-scheduler__timeline-row")).toHaveLength(0);
    expect(
      w.findAll(".c-scheduler__resource-group").length,
    ).toBeLessThanOrEqual(30);
  } finally {
    w.unmount();
  }
});
test("omitting virtualListProps preserves full rendering", () => {
  const w = setup({
    resources: resources.slice(0, 40),
    virtualListProps: undefined,
  });
  try {
    expect(w.findComponent(VirtualList).exists()).toBe(false);
    expect(w.findAll(".c-scheduler__timeline-row")).toHaveLength(40);
  } finally {
    w.unmount();
  }
});
