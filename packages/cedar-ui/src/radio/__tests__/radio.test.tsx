import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { Radio } from "../index";

describe("Radio", () => {
  test("render", async () => {
    const wrapper = mount(Radio);
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders the error state", () => {
    const wrapper = mount(Radio, { props: { error: true } });
    expect(wrapper.classes()).toContain("c-radio-error");
  });
});
