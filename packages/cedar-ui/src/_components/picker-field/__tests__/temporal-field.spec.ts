import { mount } from "@vue/test-utils";
import { defineComponent, h, nextTick, markRaw } from "vue";
import { describe, expect, test, vi } from "vitest";
import TemporalField from "../../../date/DateField.vue";
import Time from "../../../time/Time.vue";
import TimeRange from "../../../time-range/TimeRange.vue";
import { formItemInjectionKey } from "../../../form/context";
import DateRangePanel from "../../../date/picker/DateRangePicker.vue";
import TimePanel from "../../../time/picker/RangePanel.vue";

const Panel = markRaw(
  defineComponent({
    props: ["modelValue"],
    emits: ["select", "confirm"],
    setup(_, { emit }) {
      return () =>
        h(
          "button",
          {
            class: "panel-commit",
            onClick: () => { emit("select", "2026-09-23"); emit("confirm", "2026-09-23"); },
          },
          "choose",
        );
    },
  }),
);
const global = {
  stubs: {
    CTrigger: { template: '<div><slot /><slot name="content" /></div>' },
  },
};

describe("Cedar temporal field owner", () => {
  test("typed times enforce the same step as the panel", async () => {
    const wrapper = mount(Time, {
      props: { format: "HH:mm", step: { minute: 30 } },
      global,
    });
    await wrapper.get("input").setValue("10:15");
    await wrapper.get("input").trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("change")).toBeUndefined();
    await wrapper.get("input").setValue("10:30");
    await wrapper.get("input").trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("change")![0][0]).toBe("10:30");
    wrapper.unmount();
  });
  test.each([false, true])(
    "typed ranges follow panel ordering, next day=%s",
    async (showNextDay) => {
      const wrapper = mount(TimeRange, {
        props: { format: "HH:mm", showNextDay, defaultValue: ["09:00", "18:00"] },
        global,
      });
      const [start, end] = wrapper.findAll("input");
      await start.setValue("19:00");
      await end.setValue("10:00");
      await end.trigger("keydown", { key: "Enter" });
      expect(wrapper.emitted("change")![0][0]).toEqual(
        showNextDay ? ["19:00", "10:00"] : ["10:00", "19:00"],
      );
      wrapper.unmount();
    },
  );
  test("moving between endpoints delays model changes and form blur until leaving the range", async () => {
    const onBlur = vi.fn();
    const onFocus = vi.fn();
    const onChange = vi.fn();
    const wrapper = mount(TimeRange, {
      props: { defaultValue: ["09:00:00", "10:00:00"] },
      global: {
        ...global,
        stubs: { ...global.stubs, DatePanel: Panel },
        provide: {
          [formItemInjectionKey as symbol]: {
            eventHandlers: { onBlur, onFocus, onChange },
          },
        },
      },
    });
    const [start, end] = wrapper.findAll("input");
    await start.trigger("focus");
    await start.setValue("11:00:00");
    await start.trigger("blur", { relatedTarget: end.element });
    await end.trigger("focus", { relatedTarget: start.element });
    expect(onBlur).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
    expect(onFocus).toHaveBeenCalledTimes(1);
    await end.setValue("12:00:00");
    await end.trigger("blur");
    expect(wrapper.emitted("change")).toHaveLength(1);
    expect(wrapper.emitted("change")![0][0]).toEqual(["11:00:00", "12:00:00"]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
  test("clicking the end input activates the end of the date panel", async () => {
    const wrapper = mount(TemporalField, {
      props: {
        range: true,
        panel: markRaw(DateRangePanel),
        fieldProps: {
          defaultOpen: true,
          modelValue: ["2026-09-22", "2026-09-24"],
        },
      },
      global,
    });
    await wrapper.findAll("input")[1].trigger("click");
    expect(wrapper.findComponent(DateRangePanel).vm.focusedIndex).toBe(1);
    expect(wrapper.emitted("change")).toBeUndefined();
    wrapper.unmount();
  });
  test("time panel and range inputs use the same active endpoint", async () => {
    const wrapper = mount(TimeRange, {
      props: { defaultOpen: true, modelValue: ["09:00:00", "10:00:00"] },
      global,
    });
    await wrapper.findAll("input")[1].trigger("click");
    expect(wrapper.findComponent(TimePanel).props("displayIndex")).toBe(1);
    await wrapper.findAll("input")[0].trigger("click");
    expect(wrapper.findComponent(TimePanel).props("displayIndex")).toBe(0);
    wrapper.unmount();
  });
  test("typed date commits once and updates uncontrolled display", async () => {
    const wrapper = mount(TemporalField, {
      props: {
        fieldProps: { defaultValue: "2026-09-22" },
      },
      global,
    });
    await wrapper.get("input").setValue("2026-09-23");
    await wrapper.get("input").trigger("keydown", { key: "Enter" });
    await wrapper.get("input").trigger("blur");
    expect(wrapper.emitted("update:modelValue")).toEqual([["2026-09-23"]]);
    expect(wrapper.emitted("change")).toHaveLength(1);
    expect(wrapper.get("input").element.value).toBe("2026-09-23");
    wrapper.unmount();
  });
  test("invalid or disabled typed dates do not change the value", async () => {
    const wrapper = mount(TemporalField, {
      props: {
        fieldProps: { disabledDate: () => true },
      },
      global,
    });
    await wrapper.get("input").setValue("2026-09-23");
    await wrapper.get("input").trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("change")).toBeUndefined();
    await wrapper.setProps({ fieldProps: {} });
    await wrapper.get("input").setValue("2026-02-31");
    await wrapper.get("input").trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("change")).toBeUndefined();
    wrapper.unmount();
  });
  test("committed panel values and form change are dispatched once", async () => {
    const onChange = vi.fn();
    const wrapper = mount(TemporalField, {
      props: {
        fieldProps: { defaultOpen: true },
      },
      global: {
        ...global,
        stubs: { ...global.stubs, DatePanel: Panel },
        provide: {
          [formItemInjectionKey as symbol]: { eventHandlers: { onChange } },
        },
      },
    });
    await wrapper.get(".panel-commit").trigger("click");
    expect(wrapper.emitted("change")?.map((args) => args[0])).toEqual(["2026-09-23"]);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(wrapper.find(".panel-commit").exists()).toBe(false);
    wrapper.unmount();
  });
  test("Escape dismisses without committing", async () => {
    const wrapper = mount(TemporalField, {
      props: {
        fieldProps: { defaultOpen: true, modelValue: "2026-09-22" },
      },
      global,
    });
    await wrapper.get("input").trigger("keydown", { key: "Escape" });
    expect(wrapper.emitted("change")).toBeUndefined();
    expect(wrapper.find(".panel-commit").exists()).toBe(false);
    wrapper.unmount();
  });
  test("an external undefined clears a previously committed value", async () => {
    const wrapper = mount(TemporalField, {
      props: {
        fieldProps: { modelValue: "2026-09-22", defaultOpen: true },
      },
      global: { ...global, stubs: { ...global.stubs, DatePanel: Panel } },
    });
    await wrapper.get(".panel-commit").trigger("click");
    await wrapper.setProps({ fieldProps: { modelValue: undefined } });
    await nextTick();
    expect(wrapper.get("input").element.value).toBe("");
    wrapper.unmount();
  });
  test("range fields preserve a disabled endpoint", async () => {
    const wrapper = mount(TemporalField, {
      props: {
        range: true,
        fieldProps: {
          modelValue: ["2026-09-22", "2026-09-23"],
          disabled: [true, false],
        },
      },
      global,
    });
    expect(wrapper.findAll("input")[0].element.disabled).toBe(true);
    await wrapper.findAll("input")[1].setValue("2026-09-24");
    await wrapper.findAll("input")[1].trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("change")?.map((args) => args[0])).toEqual([["2026-09-22", "2026-09-24"]]);
    wrapper.unmount();
  });
});
