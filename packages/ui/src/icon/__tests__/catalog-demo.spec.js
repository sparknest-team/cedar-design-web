import { useDemoControls } from "../../../test-utils/demo-controls";
import { defineComponent } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import { afterEach, expect, test, vi } from "vitest";
import Demo from "../__demos__/catalog.vue";
import { Message } from "../../message";

useDemoControls();

vi.mock("../../message", () => ({
  Message: { success: vi.fn(), error: vi.fn() },
}));
const Input = defineComponent({
  props: { modelValue: String, clearable: Boolean },
  emits: ["update:modelValue"],
  template:
    '<input :value="modelValue" @input="$emit(\'update:modelValue\', $event.target.value)" />',
});
const originalClipboard = Object.getOwnPropertyDescriptor(
  navigator,
  "clipboard",
);
afterEach(() => {
  if (originalClipboard)
    Object.defineProperty(navigator, "clipboard", originalClipboard);
  else delete navigator.clipboard;
  vi.clearAllMocks();
});

test("catalog normalizes search and keeps copy handlers after filtered nodes are recreated", async () => {
  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText },
  });
  const owner = mount(Demo, {
    global: {
      components: { CInput: Input },
      stubs: { CIconSearch: true },
      directives: { ripple: {} },
    },
  });
  expect(owner.findComponent(Input).props("clearable")).toBe(true);
  await owner.find("input").setValue("does-not-exist");
  expect(owner.findAll("button")).toHaveLength(0);
  await owner.find("input").setValue(" ARROW ");
  expect(owner.findAll("button").length).toBeGreaterThan(0);
  const button = owner
    .findAll("button")
    .find((item) => item.text() === "arrow-down");
  await button.trigger("click");
  await flushPromises();
  expect(writeText).toHaveBeenCalledWith("<c-icon-arrow-down />");
  expect(Message.success).toHaveBeenCalledWith("已复制 <c-icon-arrow-down />");
  writeText.mockRejectedValueOnce(new Error("denied"));
  await button.trigger("click");
  await flushPromises();
  expect(Message.error).toHaveBeenCalledWith(
    "复制失败，请检查浏览器剪贴板权限",
  );
  owner.unmount();
});
