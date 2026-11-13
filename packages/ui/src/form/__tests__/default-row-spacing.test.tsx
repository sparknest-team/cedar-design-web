import { h } from "vue";
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Form from "../Form.vue";
import FormItem from "../FormItem.vue";
import Row from "../../row/Row.vue";

test("horizontal FormItem keeps its CSS spacing instead of inheriting Row gutters", () => {
  const owner = mount(Form, {
    slots: { default: () => h(FormItem, { label: "Name" }, () => h("input")) },
  });
  try {
    expect(owner.getComponent(Row).props("gutter")).toBe(0);
    expect(
      (owner.get(".c-form-item").element as HTMLElement).style.marginBottom,
    ).toBe("");
  } finally {
    owner.unmount();
  }
});

test("explicit FormItem row gutter remains an override", () => {
  const owner = mount(Form, {
    slots: {
      default: () =>
        h(FormItem, { label: "Name", rowProps: { gutter: [12, 8] } }, () =>
          h("input"),
        ),
    },
  });
  try {
    expect(owner.getComponent(Row).props("gutter")).toEqual([12, 8]);
    expect(
      (owner.get(".c-form-item").element as HTMLElement).style.marginBottom,
    ).toBe("-4px");
  } finally {
    owner.unmount();
  }
});
