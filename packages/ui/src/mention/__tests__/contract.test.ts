import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Mention from "..";

describe("mention public contract", () => {
  it("exports a namespaced component", () => {
    expect(Mention).toBeTruthy();
    expect(Mention.name).toMatch(/^C/);
  });

  it("keeps the textarea integration contract", async () => {
    const wrapper = mount(Mention, {
      props: {
        type: "textarea",
        modelValue: "@al",
        options: ["alice"],
      },
    });
    const textarea = wrapper.get("textarea");
    const textareaComponent = wrapper.findComponent({ name: "CTextarea" });

    expect(textareaComponent.vm.textareaRef).toBe(textarea.element);

    await textarea.trigger("keydown", { key: "ArrowDown" });
    expect(wrapper.exists()).toBe(true);
  });
});
