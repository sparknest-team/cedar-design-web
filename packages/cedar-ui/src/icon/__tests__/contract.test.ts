import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import IconComponent from "..";

describe("icon public contract", () => {
  it("exports a namespaced component", () => {
    expect(IconComponent).toBeTruthy();
    expect(IconComponent.name).toMatch(/^C/);
  });

  it("resolves name from explicitly registered application components", () => {
    const IconCheckCircleFill = defineComponent({
      template: '<svg class="registered-icon" />',
    });
    const wrapper = mount(IconComponent, {
      props: { name: "check-circle-fill" },
      global: { components: { IconCheckCircleFill } },
    });

    expect(wrapper.find("svg.registered-icon").exists()).toBe(true);
  });
});
