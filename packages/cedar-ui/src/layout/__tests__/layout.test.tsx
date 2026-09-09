import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { describe, test, expect, beforeAll, afterAll, vi } from "vitest";
import { Layout, LayoutSider, LayoutContent } from "../index";

describe("Layout", () => {
  test("render", async () => {
    const wrapper = mount(Layout);
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("Layout sider regressions", () => {
  const originalMatchMedia = window.matchMedia;
  beforeAll(() => {
    window.matchMedia = vi.fn().mockImplementation((media: string) => ({
      media,
      matches: false,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });
  afterAll(() => {
    window.matchMedia = originalMatchMedia;
  });
  test("keeps uncontrolled collapsed width, class and slot state aligned", async () => {
    const wrapper = mount(LayoutSider, {
      props: { collapsible: true, defaultCollapsed: true },
      slots: { trigger: ({ collapsed }) => String(collapsed) },
    });
    expect(wrapper.classes()).toContain("c-layout-sider-collapsed");
    expect(wrapper.attributes("style")).toContain("width: 48px");
    expect(wrapper.find(".c-layout-sider-trigger").text()).toBe("true");
    await wrapper.find(".c-layout-sider-trigger").trigger("click");
    expect(wrapper.classes()).not.toContain("c-layout-sider-collapsed");
    expect(wrapper.attributes("style")).toContain("width: 200px");
    expect(wrapper.emitted("collapse")).toEqual([[false, "clickTrigger"]]);
    wrapper.unmount();
  });

  test("waits for the parent in controlled mode", async () => {
    const wrapper = mount(LayoutSider, {
      props: { collapsible: true, collapsed: false },
    });
    await wrapper.find(".c-layout-sider-trigger").trigger("click");
    expect(wrapper.emitted("update:collapsed")).toEqual([[true]]);
    expect(wrapper.classes()).not.toContain("c-layout-sider-collapsed");
    await wrapper.setProps({ collapsed: true });
    expect(wrapper.classes()).toContain("c-layout-sider-collapsed");
    wrapper.unmount();
  });

  test("renders the actual resize component and drag handle", () => {
    const wrapper = mount(LayoutSider, {
      props: { resizeDirections: ["right"] },
    });
    expect(wrapper.find(".c-resizebox-direction-right").exists()).toBe(true);
    wrapper.unmount();
  });
  test("keeps zero-width recovery outside inert content and supports right transform", () => {
    const wrapper = mount(LayoutSider, {
      props: {
        defaultCollapsed: true,
        collapsedWidth: 0,
        collapsible: true,
        placement: "right",
        collapseMode: "transform",
        width: "240px",
        bordered: true,
      },
    });
    expect(wrapper.classes()).toContain("c-layout-sider--zero");
    expect(wrapper.classes()).toContain("c-layout-sider--right");
    expect(
      wrapper.find(".c-layout-sider-children").attributes("style"),
    ).toContain("width: 240px");
    expect(
      wrapper.find(".c-layout-sider__viewport").attributes("inert"),
    ).toBeDefined();
    const trigger = wrapper.find("button");
    expect(trigger.attributes("aria-expanded")).toBe("false");
    expect(trigger.element.closest("[inert]")).toBeNull();
    wrapper.unmount();
  });

  test("forwards scrollTo overloads and native scroll events", async () => {
    const wrapper = mount(LayoutContent, { props: { scrollable: true } });
    const scrollTo = vi.fn();
    wrapper.element.scrollTo = scrollTo;
    wrapper.vm.scrollTo({ top: 120, behavior: "smooth" });
    wrapper.vm.scrollTo(0, 30);
    expect(scrollTo.mock.calls).toEqual([
      [{ top: 120, behavior: "smooth" }],
      [0, 30],
    ]);
    await wrapper.trigger("scroll");
    expect(wrapper.emitted("scroll")).toHaveLength(1);
    wrapper.unmount();
  });
});
