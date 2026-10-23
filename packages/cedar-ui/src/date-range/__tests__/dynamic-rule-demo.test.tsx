import { useDemoControls } from "../../../test-utils/demo-controls";
import {
  config as demoTestConfig,
  flushPromises,
  mount,
} from "@vue/test-utils";
import { expect, test } from "vitest";
import DateRangePicker from "../DateRangePicker.vue";
import Demo from "../__demos__/entry-boundary.vue";

useDemoControls(demoTestConfig);

test("a new end-date restriction blocks the pending range without replacing the committed model", async () => {
  const wrapper = mount(Demo, {
    global: {
      components: { CDateRangePicker: DateRangePicker },
      stubs: {
        CDateRange: true,
        CButton: {
          props: ["disabled"],
          template: '<button :disabled="disabled"><slot /></button>',
        },
      },
    },
  });
  const panel = wrapper.getComponent(DateRangePicker);
  const model = () => panel.props("modelValue");
  const confirm = () =>
    wrapper
      .findAll("button")
      .find((button) => button.text() === "提交日期范围")!;
  try {
    for (const day of ["10", "20"]) {
      await panel
        .findAll("[role=button]")
        .find((cell) => cell.text() === day)!
        .trigger("click");
      await flushPromises();
    }
    expect(model()).toEqual(["2025-02-12", "2025-02-14"]);
    expect(confirm().element.disabled).toBe(false);
    await wrapper.get("input[type=checkbox]").setValue(true);
    const disabled = panel.props("disabledDate")!;
    expect(disabled(new Date(2025, 1, 20), "start")).toBe(false);
    expect(disabled(new Date(2025, 1, 20), "end")).toBe(true);
    expect(confirm().element.disabled).toBe(true);
    await confirm().trigger("click");
    expect(model()).toEqual(["2025-02-12", "2025-02-14"]);
    await wrapper.get("input[type=checkbox]").setValue(false);
    expect(confirm().element.disabled).toBe(false);
    expect(model()).toEqual(["2025-02-12", "2025-02-14"]);
    await confirm().trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2025-02-10", "2025-02-20"]);
    await wrapper.get("input[type=checkbox]").setValue(true);
    expect(confirm().element.disabled).toBe(true);
    expect(model()).toEqual(["2025-02-10", "2025-02-20"]);
    for (const day of ["10", "21"]) {
      await panel
        .findAll("[role=button]")
        .find((cell) => cell.text() === day)!
        .trigger("click");
      await flushPromises();
    }
    await confirm().trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2025-02-10", "2025-02-21"]);
  } finally {
    wrapper.unmount();
  }
});
