import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Scheduler from "../Scheduler.vue";
import CSelect from "../../select";
import { createSchedulerTimeAxis, groupSchedulerResources } from "../core";

describe("time axis", () => {
  test("uses elapsed hours and reversible coordinates", () => {
    const range = {
      start: new Date("2026-03-08T00:00:00-05:00"),
      end: new Date("2026-03-09T00:00:00-04:00"),
    };
    const axis = createSchedulerTimeAxis(range, "hour");
    expect(axis.cells).toHaveLength(23);
    expect(+axis.dateAt(axis.position(axis.cells[9].start))).toBe(
      +axis.cells[9].start,
    );
    expect(axis.cells.reduce((n, c) => n + c.width, 0)).toBeCloseTo(1);
    expect(() =>
      createSchedulerTimeAxis({ start: range.end, end: range.start }, "hour"),
    ).toThrow();
  });
  test("groups without mutating resources", () => {
    const resources = [
      { id: "a", label: "A" },
      { id: "b", label: "B" },
      { id: "c", label: "C" },
    ];
    expect(
      groupSchedulerResources(resources, (r) =>
        r.id === "b" ? "other" : "team",
      ).map((g) => g.resources.length),
    ).toEqual([2, 1]);
    expect(resources.map((r) => r.id)).toEqual(["a", "b", "c"]);
  });
});

describe("timeline options", () => {
  test("controlled scale only proposes updates; group collapse preserves data", async () => {
    const wrapper = mount(Scheduler, {
      props: {
        defaultDate: "2026-09-09",
        defaultMode: "resource-timeline",
        scale: "day",
        resources: [{ id: "a", label: "Alice" }],
        resourceGroupBy: () => "Team",
      },
    });
    try {
      const select = wrapper
        .findAllComponents(CSelect)
        .find((c) => c.props("modelValue") === "day")!;
      select.vm.$emit("update:modelValue", "hour");
      await wrapper.vm.$nextTick();
      expect(wrapper.emitted("update:scale")?.[0]).toEqual(["hour"]);
      expect(wrapper.findAll(".c-scheduler__timeline-cells > *")).toHaveLength(
        7,
      );
      await wrapper.setProps({ scale: "hour" });
      expect(wrapper.findAll(".c-scheduler__timeline-cells > *")).toHaveLength(
        24,
      );
      await wrapper.find(".c-scheduler__resource-group").trigger("click");
      expect(wrapper.findAll(".c-scheduler__timeline-row")).toHaveLength(0);
      expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    } finally {
      wrapper.unmount();
    }
  });
  test("controlled expansion remains unchanged until accepted", async () => {
    const wrapper = mount(Scheduler, {
      props: {
        defaultDate: "2026-09-09",
        defaultMode: "resource-timeline",
        expandedKeys: ["Team"],
        resources: [{ id: "a", label: "Alice" }],
        resourceGroupBy: () => "Team",
      },
    });
    try {
      await wrapper.find(".c-scheduler__resource-group").trigger("click");
      expect(wrapper.emitted("update:expandedKeys")?.[0]).toEqual([[]]);
      expect(wrapper.findAll(".c-scheduler__timeline-row")).toHaveLength(1);
      await wrapper.setProps({ expandedKeys: [] });
      expect(wrapper.findAll(".c-scheduler__timeline-row")).toHaveLength(0);
    } finally {
      wrapper.unmount();
    }
  });
});

test("hour timeline navigates one day and creates at midnight", async () => {
  const wrapper = mount(Scheduler, {
    props: {
      defaultDate: "2026-09-09",
      defaultMode: "resource-timeline",
      defaultScale: "hour",
      editable: false,
      resources: [{ id: "a", label: "Alice" }],
    },
  });
  try {
    await wrapper.find(".c-scheduler__timeline-cells > *").trigger("click");
    const request = wrapper.emitted("editor-request")?.[0][0] as {
      event: { start: string };
    };
    expect(new Date(request.event.start).getHours()).toBe(0);
    await wrapper
      .findAll(".c-scheduler__navigation button")[2]
      .trigger("click");
    const date = wrapper.emitted("update:date")?.[0][0] as Date;
    expect(date.getDate()).toBe(10);
  } finally {
    wrapper.unmount();
  }
});
