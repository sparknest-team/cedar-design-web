import { useDemoControls } from "../../../test-utils/demo-controls";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Component from "..";
import Demo from "../__demos__/live-properties.vue";

useDemoControls();

describe("paper live demo", () => {
  it("updates independent properties and restores defaults", async () => {
    const wrapper = mount(Demo, {
      global: { components: { "c-paper": Component } },
    });
    const component = wrapper.findComponent(Component);
    await wrapper.findAll("input")[0].setValue(true);
    await wrapper.findAll("input")[3].setValue(true);
    expect(component.classes()).toContain("c-paper--bordered");
    expect(
      component.classes().some((value) => value.endsWith("elevation--2")),
    ).toBe(true);
    await wrapper.findAll("input")[0].setValue(false);
    expect(component.classes()).not.toContain("c-paper--bordered");
    expect(
      component.classes().some((value) => value.endsWith("elevation--2")),
    ).toBe(true);
    await wrapper.findAll("input")[1].setValue(true);
    await wrapper.findAll("input")[2].setValue(true);
    expect(component.element.style.borderRadius).toBe("12px");
    await wrapper.findAll("input")[2].setValue(false);
    expect(component.element.style.borderRadius).toBe("");
    expect(component.classes()).toContain("c-paper--round");
    await wrapper.get("button").trigger("click");
    expect(wrapper.get('[role="status"]').text()).toBe("Surface clicks: 1");
    expect(component.attributes("role")).toBeUndefined();
    wrapper.unmount();
  });
});
