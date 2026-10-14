import { defineComponent, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import DateRange, { DateRangePicker } from "../../date-range";
import DateInput, { DatePicker } from "../index";

const Surface = defineComponent({
  template: '<div><slot /><slot name="content" /></div>',
});
const wrappers: ReturnType<typeof mount>[] = [];
afterEach(() => wrappers.splice(0).forEach((wrapper) => wrapper.unmount()));

describe("calendar week grid reactivity", () => {
  for (const field of [false, true]) {
    for (const range of [false, true]) {
      it(`aligns the actual first date with the new header (field=${field}, range=${range})`, async () => {
        const global = { stubs: { TemporalTrigger: Surface } };
        const common = {};
        const wrapper = field
          ? range
            ? mount(DateRange, {
                props: {
                  ...common,
                  modelValue: ["2025-02-12", "2025-02-15"],
                  defaultOpen: true,
                  dateRangePickerProps: { dayStartOfWeek: 1 },
                },
                global,
              })
            : mount(DateInput, {
                props: {
                  ...common,
                  modelValue: "2025-02-12",
                  defaultOpen: true,
                  datePickerProps: { dayStartOfWeek: 1 },
                },
                global,
              })
          : range
            ? mount(DateRangePicker, {
                props: {
                  ...common,
                  modelValue: ["2025-02-12", "2025-02-15"],
                  dayStartOfWeek: 1,
                },
                global,
              })
            : mount(DatePicker, {
                props: {
                  ...common,
                  modelValue: "2025-02-12",
                  dayStartOfWeek: 1,
                },
                global,
              });
        wrappers.push(wrapper);
        await nextTick();
        const offset = () =>
          wrapper
            .findAll(".c-picker-body")[0]
            .findAll(".c-picker-cell")
            .findIndex(
              (cell) =>
                cell.classes().includes("c-picker-cell-in-view") &&
                cell.text() === "1",
            );
        // 2025-02-01 is Saturday: Monday -> five leading empty cells.
        expect(offset()).toBe(5);
        for (const week of [6, 0, 1] as const) {
          await wrapper.setProps(
            field
              ? range
                ? { dateRangePickerProps: { dayStartOfWeek: week } }
                : { datePickerProps: { dayStartOfWeek: week } }
              : { dayStartOfWeek: week },
          );
          expect(offset()).toBe((6 - week + 7) % 7);
          expect(
            wrapper
              .findAll(".c-picker-body")[0]
              .findAll(".c-picker-row")[0]
              .findAll(".c-picker-cell"),
          ).toHaveLength(7);
        }
        expect(wrapper.emitted("update:modelValue")).toBeUndefined();
        expect(wrapper.emitted("change")).toBeUndefined();
        expect(wrapper.emitted("select")).toBeUndefined();
        expect(wrapper.emitted("update:pickerValue")).toBeUndefined();
      });
    }
  }
});
