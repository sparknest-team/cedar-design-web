import { flushPromises, mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import { PeopleSelect } from "../index";
import Select from "../../select";

describe("PeopleSelect", () => {
  test("render", async () => {
    const wrapper = mount(PeopleSelect);
    try {
      await flushPromises();
      expect(wrapper.findComponent(Select).props("loading")).toBe(false);
      expect(wrapper.html()).toMatchSnapshot();
    } finally {
      wrapper.unmount();
    }
  });
});
