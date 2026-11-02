import { flushPromises, mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";
import Drawer from "../Drawer.vue";
test("Drawer forwards beforeClose, suppresses legacy calls, and preserves its public action events", async () => {
  const legacy = vi.fn(),
    modern = vi.fn(() => false);
  const owner = mount(Drawer, {
    props: { defaultOpen: true, beforeClose: legacy, beforeClose: modern },
  });
  try {
    (owner.vm as any).confirm();
    await flushPromises();
    expect(modern).toHaveBeenCalledTimes(1);
    expect(legacy).not.toHaveBeenCalled();
    expect(owner.emitted("confirm")).toBeUndefined();
    modern.mockReturnValue(true);
    (owner.vm as any).confirm();
    await flushPromises();
    expect(owner.emitted("confirm")).toHaveLength(1);
  } finally {
    owner.unmount();
  }
});
