import { createApp, defineComponent, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { Loading, vLoading } from "../index";

describe("Loading", () => {
  test("registers only the namespaced loading directive", () => {
    const app = createApp({}).use(Loading);
    expect(app.directive("c-loading")).toBe(vLoading);
    expect(app.directive("loading")).toBeUndefined();
  });

  test("render", async () => {
    const wrapper = mount(Loading);
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders a loading overlay around content", () => {
    const wrapper = mount(Loading, {
      props: { loading: true, tip: "Loading" },
      slots: { default: "<div>content</div>" },
    });
    expect(wrapper.find(".c-loading__content--active").exists()).toBe(true);
    expect(wrapper.find(".c-loading__content-overlay").exists()).toBe(true);
    expect(wrapper.text()).toContain("Loading");
  });

  test("supports a custom icon and hidden-icon text state", async () => {
    const wrapper = mount(Loading, {
      props: { tip: "Loading" },
      slots: { icon: "Custom indicator" },
    });
    expect(wrapper.get(".c-loading__indicator").text()).toBe(
      "Custom indicator",
    );

    await wrapper.setProps({ hideIcon: true });
    expect(wrapper.find(".c-loading__indicator").exists()).toBe(false);
    expect(wrapper.get(".c-loading__tip").text()).toBe("Loading");
  });

  test("exposes loading accessibility state", () => {
    const standalone = mount(Loading);
    expect(standalone.attributes("role")).toBe("status");
    expect(standalone.attributes("aria-live")).toBe("polite");

    const wrapped = mount(Loading, {
      props: { loading: true },
      slots: { default: "Content" },
    });
    expect(wrapped.attributes("aria-busy")).toBe("true");
  });

  test("v-c-loading renders the built-in component in the target", async () => {
    const Host = defineComponent({
      directives: { "c-loading": vLoading },
      data: () => ({ active: true }),
      template: '<div v-c-loading="active"><span>content</span></div>',
    });
    const wrapper = mount(Host);

    expect(wrapper.find(".c-loading-directive .c-loading").exists()).toBe(true);
    expect(
      wrapper.find(".c-loading-directive .c-loading__content--active").exists(),
    ).toBe(true);
    expect(
      wrapper.find(".c-loading-directive .c-loading__inside").exists(),
    ).toBe(true);
    expect(wrapper.find(".c-loading-directive").element.parentElement).toBe(
      wrapper.element,
    );

    await wrapper.setData({ active: false });
    await nextTick();
    expect(wrapper.find(".c-loading-directive").exists()).toBe(false);
  });

  test("renders all Maple-compatible loading types and sizes", () => {
    for (const type of [
      "circle",
      "wave",
      "cube",
      "rect",
      "disappear",
    ] as const) {
      const wrapper = mount(Loading, { props: { type, size: "sm" } });
      expect(wrapper.find(`.c-loading__${type}`).exists()).toBe(true);
      if (type === "circle") {
        expect(wrapper.find(".c-loading__circle-block--sm").exists()).toBe(
          true,
        );
      } else {
        expect(wrapper.find(`.c-loading__${type}--sm`).exists()).toBe(true);
      }
      wrapper.unmount();
    }
  });

  test("supports a custom circle radius", () => {
    const wrapper = mount(Loading, {
      props: { type: "circle", radius: 20 },
    });
    expect(
      wrapper.find(".c-loading__circle-block").attributes("style"),
    ).toContain("width: 40px; height: 40px;");
  });

  test("supports a numeric size", () => {
    const wrapper = mount(Loading, { props: { size: 20 } });
    expect(
      wrapper.find(".c-loading__circle-block").attributes("style"),
    ).toContain("width: 20px; height: 20px;");
  });

  test("v-c-loading supports an options object with loading and tip", async () => {
    const Host = defineComponent({
      directives: { "c-loading": vLoading },
      data: () => ({
        options: { loading: true, tip: "Loading...", type: "wave" },
      }),
      template: '<div v-c-loading="options"><span>content</span></div>',
    });
    const wrapper = mount(Host);

    expect(wrapper.find(".c-loading__tip").text()).toBe("Loading...");
    expect(wrapper.findAll(".c-loading__wave-item")).toHaveLength(5);

    await wrapper.setData({
      options: { loading: false, tip: "Loading...", type: "wave" },
    });
    await nextTick();
    expect(wrapper.find(".c-loading-directive").exists()).toBe(false);
  });

  test("v-c-loading mounts fullscreen and cleans document state", () => {
    const Host = defineComponent({
      directives: { "c-loading": vLoading },
      template: '<div v-c-loading="{ loading: true, fullscreen: true }" />',
    });
    const wrapper = mount(Host, { attachTo: document.body });
    expect(
      document.body.querySelector(".c-loading-directive--fullscreen"),
    ).not.toBeNull();
    expect(document.body.classList.contains("c-loading-parent--hidden")).toBe(
      true,
    );
    wrapper.unmount();
    expect(
      document.body.querySelector(".c-loading-directive--fullscreen"),
    ).toBeNull();
    expect(document.body.classList.contains("c-loading-parent--hidden")).toBe(
      false,
    );
  });
});

test("directive updates and clears the overlay background token", async () => {
  const Host = defineComponent({
    directives: { "c-loading": vLoading },
    data: () => ({ options: { loading: true, background: "blue" } }),
    template: '<div v-c-loading="options">content</div>',
  });
  const wrapper = mount(Host);
  const overlay = wrapper.find(".c-loading-directive").element;
  expect(overlay.style.getPropertyValue("--c-loading-overlay-background")).toBe(
    "blue",
  );
  await wrapper.setData({ options: { loading: true, background: "red" } });
  expect(overlay.style.getPropertyValue("--c-loading-overlay-background")).toBe(
    "red",
  );
  await wrapper.setData({ options: { loading: true, background: "" } });
  expect(overlay.style.getPropertyValue("--c-loading-overlay-background")).toBe(
    "",
  );
  wrapper.unmount();
});
