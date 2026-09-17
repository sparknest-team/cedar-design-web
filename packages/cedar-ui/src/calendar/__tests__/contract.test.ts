import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Calendar from "..";

describe("calendar public contract", () => {
  it("exports a namespaced component", () => {
    expect(Calendar).toBeTruthy();
    expect(Calendar.name).toMatch(/^C/);
  });

  it("keeps custom cell content selectable and exposes primitive header values", async () => {
    const wrapper = mount(Calendar, {
      props: { modelValue: new Date(2026, 8, 16) },
      slots: {
        default: ({ date }: { date: number }) => `item-${date}`,
        header: ({ year, month }: { year: number; month: number }) =>
          `${year}-${month}`,
      },
    });
    expect(wrapper.find(".c-calendar-header-value").text()).toBe("2026-9");
    const cell = wrapper
      .findAll(".c-calendar-cell-in-view")
      .find((item) => item.text().includes("item-17"))!;
    await cell.get(".c-calendar-date").trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0][0]).toEqual(
      new Date(2026, 8, 17),
    );
    wrapper.unmount();
  });
});
