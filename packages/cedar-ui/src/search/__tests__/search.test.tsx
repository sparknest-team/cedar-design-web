import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import { Search } from "../index";

describe("Search", () => {
  test("renders the shared defaults", async () => {
    const wrapper = mount(Search);
    await nextTick();

    expect(wrapper.find(".c-field-decorator--variant-outlined").exists()).toBe(
      true,
    );
    expect(wrapper.find(".c-field-decorator__clear-btn").exists()).toBe(false);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("separates live input from committed change", async () => {
    const order: string[] = [];
    const wrapper = mount(Search, {
      props: {
        defaultValue: "draft",
        "onUpdate:modelValue": () => order.push("update"),
        onInput: () => order.push("input"),
        onChange: () => order.push("change"),
      },
    });
    const input = wrapper.get("input.c-input__inner");

    (input.element as HTMLInputElement).focus();
    await input.trigger("focus");
    await input.setValue("keyword");
    expect(order).toEqual(["update", "input"]);

    await input.trigger("blur");
    expect(order).toEqual(["update", "input", "change"]);
    await input.trigger("blur");
    expect(order).toEqual(["update", "input", "change"]);
  });

  test("clears without edit or search side effects", async () => {
    const wrapper = mount(Search, {
      props: { defaultValue: "keyword", clearable: true },
      attachTo: document.body,
    });
    const input = wrapper.get("input.c-input__inner");
    (input.element as HTMLInputElement).focus();
    await input.trigger("focus");
    await wrapper.get(".c-field-decorator__clear-btn").trigger("mousedown");
    await wrapper.get(".c-field-decorator__clear-btn").trigger("click");

    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([""]);
    expect(wrapper.emitted("clear")?.[0]?.[0]).toBeInstanceOf(Event);
    expect(wrapper.emitted("input")).toBeUndefined();
    expect(wrapper.emitted("change")).toBeUndefined();
    expect(wrapper.emitted("search")).toBeUndefined();
    expect(document.activeElement).toBe(input.element);
  });

  test("submits once on Enter without actively blurring", async () => {
    const wrapper = mount(Search, {
      props: {
        defaultValue: " keyword ",
        recentSearches: ["keyword", "other"],
      },
      attachTo: document.body,
    });
    const input = wrapper.get("input.c-input__inner");
    (input.element as HTMLInputElement).focus();
    await input.trigger("focus");
    await input.trigger("keydown", { key: "Enter" });

    expect(wrapper.emitted("search")).toHaveLength(1);
    expect(wrapper.emitted("search")?.[0]?.[0]).toEqual({
      modelField: undefined,
      modelValue: " keyword ",
      model: undefined,
      recentSearches: ["keyword", "other"],
    });
    expect(document.activeElement).toBe(input.element);
  });

  test("blocks search while loading or readonly", async () => {
    const wrapper = mount(Search, {
      props: { defaultValue: "keyword", searchButton: true, loading: true },
    });
    const input = wrapper.get("input.c-input__inner");

    await input.trigger("keydown", { key: "Enter" });
    await wrapper.get(".c-search__btn").trigger("click");
    expect(wrapper.emitted("search")).toBeUndefined();

    await wrapper.setProps({ loading: false, readonly: true });
    await input.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("search")).toBeUndefined();
  });

  test("updates the field model once per logical edit", async () => {
    const model: Record<string, unknown> = {};
    const wrapper = mount(Search, {
      props: {
        model,
        defaultField: "name",
        fields: [
          { value: "id", label: "设备 ID" },
          { value: "name", label: "设备名称" },
        ],
      },
    });

    await wrapper.get("input.c-input__inner").setValue("设备 A");

    expect(model).toEqual({ id: undefined, name: "设备 A" });
    expect(wrapper.emitted("update:model")).toHaveLength(1);
    expect(wrapper.emitted("input")?.[0]?.[0]).toBe("设备 A");
  });

  test("changes field, clears once, and refocuses input", async () => {
    const model: Record<string, unknown> = { name: "设备 A" };
    const wrapper = mount(Search, {
      props: {
        model,
        defaultValue: "设备 A",
        defaultField: "name",
        fields: [
          { value: "id", label: "设备 ID", placeholder: "输入 ID" },
          { value: "name", label: "设备名称" },
        ],
      },
      attachTo: document.body,
    });
    const event = new Event("change");

    wrapper.findComponent({ name: "CSelect" }).vm.$emit("change", "id", event);
    await nextTick();

    expect(wrapper.emitted("update:modelField")?.[0]).toEqual(["id"]);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([""]);
    expect(wrapper.emitted("update:model")).toHaveLength(1);
    expect(wrapper.emitted("change")?.[0]).toEqual(["", event]);
    expect(document.activeElement).toBe(
      wrapper.get("input.c-input__inner").element,
    );
  });

  test("selects history without filtering and searches immediately", async () => {
    const wrapper = mount(Search, {
      props: { recentSearches: ["设备 A", "设备 B", "项目 C"] },
    });
    const input = wrapper.get("input.c-input__inner");
    await input.trigger("focus");
    await input.setValue("任意内容");
    await nextTick();

    expect(wrapper.findAll(".c-menu-option")).toHaveLength(3);
    await wrapper.get(".c-menu-option").trigger("click");
    await nextTick();

    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["设备 A"]);
    expect(wrapper.emitted("search")).toHaveLength(1);
    expect(wrapper.emitted("search")?.[0]?.[0]).toMatchObject({
      modelValue: "设备 A",
    });
  });

  test("exposes focus and blur methods", async () => {
    const wrapper = mount(Search, { attachTo: document.body });
    const input = wrapper.get("input.c-input__inner");

    wrapper.vm.focus();
    await nextTick();
    expect(document.activeElement).toBe(input.element);

    wrapper.vm.blur();
    await nextTick();
    expect(document.activeElement).not.toBe(input.element);
  });
});
