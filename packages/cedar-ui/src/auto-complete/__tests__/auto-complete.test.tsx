import { nextTick } from "vue";
import { DOMWrapper, enableAutoUnmount, mount } from "@vue/test-utils";
import { afterEach, describe, expect, test, vi } from "vitest";
import { AutoComplete } from "../index";

enableAutoUnmount(afterEach);

const mountAutoComplete = (mountOptions: Record<string, any> = {}) =>
  mount(AutoComplete, {
    attachTo: document.body,
    ...mountOptions,
    props: {
      shouldOpen: () => true,
      ...(mountOptions.props ?? {}),
    },
  } as any);

const getOptions = (input: DOMWrapper<HTMLInputElement>) => {
  const listbox = document.getElementById(input.attributes("aria-controls"));
  return Array.from(listbox?.querySelectorAll('[role="option"]') ?? []).map(
    (element) => new DOMWrapper(element),
  );
};

const options = [
  { value: 1, label: "Alpha" },
  { value: "beta", label: "Beta" },
  { value: "disabled", label: "Disabled", disabled: true },
];

describe("AutoComplete", () => {
  test("renders shared defaults and editable combobox semantics", () => {
    const wrapper = mountAutoComplete({
      props: { options, inputAttrs: { "aria-label": "City" } },
    });
    const input = wrapper.get("input.c-input__inner");

    expect(wrapper.find(".c-field-decorator--variant-outlined").exists()).toBe(
      true,
    );
    expect(wrapper.find(".c-field-decorator__clear-btn").exists()).toBe(false);
    expect(input.attributes()).toMatchObject({
      role: "combobox",
      "aria-label": "City",
      "aria-autocomplete": "list",
      "aria-expanded": "false",
      autocomplete: "off",
    });
    expect(input.attributes("aria-controls")).toContain(
      "c-auto-complete-listbox-",
    );
  });

  test("separates live input and search from committed change", async () => {
    const order: string[] = [];
    const wrapper = mountAutoComplete({
      props: {
        defaultValue: "draft",
        options,
        "onUpdate:modelValue": () => order.push("update"),
        onInput: () => order.push("input"),
        onSearch: () => order.push("search"),
        onChange: () => order.push("change"),
      },
    });
    const input = wrapper.get("input.c-input__inner");

    await input.trigger("focus");
    await input.setValue("Alpha");
    expect(order).toEqual(["update", "input", "search"]);

    await input.trigger("blur");
    expect(order).toEqual(["update", "input", "search", "change"]);
    await input.trigger("blur");
    expect(order).toEqual(["update", "input", "search", "change"]);
  });

  test("opens on empty focus and applies built-in filtering", async () => {
    const wrapper = mountAutoComplete({ props: { options } });
    const input = wrapper.get("input.c-input__inner");

    await input.trigger("focus");
    await nextTick();
    expect(input.attributes("aria-expanded")).toBe("true");
    expect(getOptions(input)).toHaveLength(3);

    await input.setValue("ALP");
    await nextTick();
    expect(getOptions(input)).toHaveLength(1);
    expect(getOptions(input)[0].text()).toContain("Alpha");
  });

  test("supports strict, disabled, and custom filtering", async () => {
    const wrapper = mountAutoComplete({
      props: { options, strict: true },
    });
    const input = wrapper.get("input.c-input__inner");

    await input.trigger("focus");
    await input.setValue("ALP");
    await nextTick();
    expect(input.attributes("aria-expanded")).toBe("false");

    await wrapper.setProps({
      filterOption: (_value, option) => option.value === "beta",
    });
    await nextTick();
    expect(input.attributes("aria-expanded")).toBe("true");
    expect(getOptions(input)[0].text()).toContain("Beta");

    await wrapper.setProps({ filterOption: false });
    await nextTick();
    expect(getOptions(input)).toHaveLength(3);
  });

  test("selects a normalized value in canonical order without input side effects", async () => {
    const order: string[] = [];
    const wrapper = mountAutoComplete({
      props: {
        options,
        "onUpdate:modelValue": () => order.push("update"),
        onSelect: () => order.push("select"),
        onChange: () => order.push("change"),
        onInput: () => order.push("input"),
        onSearch: () => order.push("search"),
      },
      attachTo: document.body,
    });
    const input = wrapper.get("input.c-input__inner");
    (input.element as HTMLInputElement).focus();
    await nextTick();

    await getOptions(input)[0].trigger("click");
    await nextTick();

    expect(order).toEqual(["update", "select", "change"]);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["1"]);
    expect(wrapper.emitted("select")?.[0]?.[0]).toBe("1");
    expect(wrapper.emitted("select")?.[0]?.[1]).toMatchObject({
      value: "1",
      label: "Alpha",
      disabled: false,
    });
    expect(input.attributes("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(input.element);
    wrapper.unmount();
  });

  test("emits select for the same value without duplicate update or change", async () => {
    const wrapper = mountAutoComplete({
      props: { defaultValue: "beta", options },
    });
    const input = wrapper.get("input.c-input__inner");

    await input.trigger("focus");
    await nextTick();
    await getOptions(input)[0].trigger("click");

    expect(wrapper.emitted("select")).toHaveLength(1);
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.emitted("change")).toBeUndefined();
  });

  test("clears with the activation event and no edit or commit side effects", async () => {
    const wrapper = mountAutoComplete({
      props: { defaultValue: "Alpha", options, clearable: true },
      attachTo: document.body,
    });
    const input = wrapper.get("input.c-input__inner");
    (input.element as HTMLInputElement).focus();
    await nextTick();
    const clear = wrapper.get(".c-field-decorator__clear-btn");

    await clear.trigger("mousedown");
    await clear.trigger("click");
    await nextTick();

    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([""]);
    expect(wrapper.emitted("clear")?.[0]?.[0]).toBeInstanceOf(Event);
    expect(wrapper.emitted("input")).toBeUndefined();
    expect(wrapper.emitted("search")).toBeUndefined();
    expect(wrapper.emitted("change")).toBeUndefined();
    expect(wrapper.emitted("select")).toBeUndefined();
    expect(input.attributes("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(input.element);
    wrapper.unmount();
  });

  test("navigates options with input focus and keeps native Tab behavior", async () => {
    const wrapper = mountAutoComplete({
      props: { options },
      attachTo: document.body,
    });
    const input = wrapper.get("input.c-input__inner");
    (input.element as HTMLInputElement).focus();
    await nextTick();

    await input.trigger("keydown", { key: "ArrowDown" });
    const activeId = input.attributes("aria-activedescendant");
    expect(activeId).toBeTruthy();
    const activeOption = getOptions(input)
      .find((option) => option.attributes("id") === activeId);
    expect(activeOption?.attributes("aria-selected")).toBe("true");

    const tabEvent = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true,
    });
    input.element.dispatchEvent(tabEvent);
    await nextTick();
    expect(tabEvent.defaultPrevented).toBe(false);
    expect(input.attributes("aria-expanded")).toBe("false");

    await input.trigger("blur");
    await input.trigger("focus");
    await input.trigger("keydown", { key: "Escape" });
    expect(input.attributes("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(input.element);
    wrapper.unmount();
  });

  test("blocks popup and editing actions while readonly", async () => {
    const onSearch = vi.fn();
    const wrapper = mountAutoComplete({
      props: {
        defaultValue: "Alpha",
        options,
        readonly: true,
        clearable: true,
        onSearch,
      },
    });
    const input = wrapper.get("input.c-input__inner");

    expect(input.attributes("readonly")).toBeDefined();
    expect(wrapper.find(".c-field-decorator__clear-btn").exists()).toBe(false);
    await input.trigger("focus");
    await input.trigger("keydown", { key: "ArrowDown" });
    expect(input.attributes("aria-expanded")).toBe("false");
    expect(onSearch).not.toHaveBeenCalled();
  });

  test("provides normalized option data and footer slots", async () => {
    const wrapper = mountAutoComplete({
      props: { options },
      slots: {
        option: ({ data }) => `${data.label}:${data.value}`,
        footer: () => "Footer",
      },
    });

    await wrapper.get("input.c-input__inner").trigger("focus");
    await nextTick();
    expect(getOptions(wrapper.get("input.c-input__inner"))[0].text()).toContain(
      "Alpha:1",
    );
    expect(document.body.textContent).toContain("Footer");
  });

  test("exposes focus and blur methods", async () => {
    const wrapper = mountAutoComplete({ attachTo: document.body });
    const input = wrapper.get("input.c-input__inner");

    wrapper.vm.focus();
    await nextTick();
    expect(document.activeElement).toBe(input.element);

    wrapper.vm.blur();
    await nextTick();
    expect(document.activeElement).not.toBe(input.element);
    wrapper.unmount();
  });
});
