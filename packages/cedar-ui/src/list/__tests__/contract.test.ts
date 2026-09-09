import { h } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import List, { ListItem, listProps } from "..";

describe("list public contract", () => {
  it("exports a namespaced component", () => {
    expect(List).toBeTruthy();
    expect(List.name).toMatch(/^C/);
    expect(ListItem.name).toMatch(/^C/);
  });

  it("only exposes the display-list API", () => {
    expect(Object.keys(listProps)).toEqual([
      "data",
      "size",
      "bordered",
      "split",
      "loading",
      "maxHeight",
      "virtualListProps",
      "scrollbar",
    ]);
    expect(List.emits).toEqual({ scroll: expect.any(Function) });
    expect(List.emits).not.toHaveProperty("reach-bottom");
  });

  it.each(["sm", "md", "lg"] as const)("renders the %s size", (size) => {
    const wrapper = mount(List, { props: { size } });
    expect(wrapper.find(".c-list").classes()).toContain(`c-list-${size}`);
  });

  it("keeps bordered and split independent", () => {
    const wrapper = mount(List, { props: { bordered: false, split: true } });
    expect(wrapper.find(".c-list").classes()).not.toContain("c-list-bordered");
    expect(wrapper.find(".c-list").classes()).toContain("c-list-split");
  });

  it("renders data through item with the correct index", () => {
    const item = vi.fn(({ item, index }) => h("span", `${index}:${item}`));
    const wrapper = mount(List, {
      props: { data: ["a", "b"] },
      slots: { item },
    });
    expect(item).toHaveBeenCalledTimes(2);
    expect(wrapper.text()).toContain("0:a");
    expect(wrapper.text()).toContain("1:b");
  });

  it("gives default content priority over data and item", () => {
    const item = vi.fn();
    const wrapper = mount(List, {
      props: { data: ["data"] },
      slots: {
        default: () => h(ListItem, null, () => "default content"),
        item,
      },
    });
    expect(wrapper.text()).toContain("default content");
    expect(item).not.toHaveBeenCalled();
  });

  it("keeps default priority when virtualListProps is set", () => {
    const item = vi.fn();
    const wrapper = mount(List, {
      props: {
        data: [{ id: 1 }],
        virtualListProps: { height: 100, itemKey: "id" },
      },
      slots: {
        default: () => h(ListItem, null, () => "manual virtual content"),
        item,
      },
    });
    expect(wrapper.text()).toContain("manual virtual content");
    expect(wrapper.find(".c-list-virtual").exists()).toBe(false);
    expect(item).not.toHaveBeenCalled();
  });

  it("renders header, content and footer in order", () => {
    const wrapper = mount(List, {
      slots: {
        header: () => "header",
        default: () => h(ListItem, null, () => "content"),
        footer: () => "footer",
      },
    });
    expect(wrapper.text()).toMatch(/header.*content.*footer/);
  });

  it("does not render empty while loading without content", () => {
    const empty = vi.fn(() => h("span", "empty"));
    const wrapper = mount(List, { props: { loading: true }, slots: { empty } });
    expect(empty).not.toHaveBeenCalled();
    expect(wrapper.text()).not.toContain("empty");
    expect(wrapper.find(".c-list-loading .c-loading__content-overlay").exists()).toBe(true);
  });

  it("renders empty only when content and data are absent", () => {
    const wrapper = mount(List, { slots: { empty: () => "empty state" } });
    expect(wrapper.text()).toContain("empty state");
  });

  it("preserves maxHeight, scroll and scrollIntoView", async () => {
    const wrapper = mount(List, {
      props: { maxHeight: 240, scrollbar: false },
      slots: { default: () => h(ListItem, null, () => "item") },
    });
    const list = wrapper.find(".c-list");
    expect(list.attributes("style")).toContain("max-height: 240px");
    await list.trigger("scroll");
    expect(wrapper.emitted("scroll")).toHaveLength(1);

    const scrollTo = vi.fn();
    (wrapper.vm as any).virtualListRef = { scrollTo };
    (wrapper.vm as any).scrollIntoView({ index: 1, align: "top" });
    expect(scrollTo).toHaveBeenCalledWith({ index: 1, align: "top" });
  });
});

describe("list-item", () => {
  it("renders prefix, main and suffix", () => {
    const wrapper = mount(List, {
      slots: {
        default: () =>
          h(ListItem, null, {
            prefix: () => "left",
            default: () => "body",
            suffix: () => "right",
          }),
      },
    });

    expect(wrapper.find(".c-list-item__prefix").text()).toBe("left");
    expect(wrapper.find(".c-list-item__main").text()).toBe("body");
    expect(wrapper.find(".c-list-item__suffix").text()).toBe("right");
  });

  it("omits prefix and suffix when unused", () => {
    const wrapper = mount(List, {
      slots: {
        default: () => h(ListItem, null, { default: () => "only body" }),
      },
    });

    expect(wrapper.find(".c-list-item__prefix").exists()).toBe(false);
    expect(wrapper.find(".c-list-item__suffix").exists()).toBe(false);
    expect(wrapper.find(".c-list-item__main").text()).toBe("only body");
  });
});
