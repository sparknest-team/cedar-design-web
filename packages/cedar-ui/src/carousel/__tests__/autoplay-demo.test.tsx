import { useDemoControls } from "../../../test-utils/demo-controls";
import {
  config as demoTestConfig,
  flushPromises,
  mount,
} from "@vue/test-utils";
import { expect, test, vi } from "vitest";
import Carousel, { CarouselItem } from "..";
import Demo from "../__demos__/autoplay.vue";

useDemoControls(demoTestConfig);

test("actual autoplay demo updates its model, stops on toggle and clears timers on unmount", async () => {
  vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });
  const wrapper = mount(Demo, {
    global: {
      components: { CCarousel: Carousel, CCarouselItem: CarouselItem },
    },
  });
  try {
    await flushPromises();
    const carousel = wrapper.findComponent(Carousel);
    expect(carousel.props("modelValue")).toBe(1);
    vi.advanceTimersByTime(2100);
    await flushPromises();
    expect(carousel.props("modelValue")).toBe(2);
    await wrapper.find("input[type=checkbox]").setValue(false);
    const stopped = wrapper.get("p[role=status]").text();
    expect(carousel.props("autoPlay")).toBe(false);
    vi.advanceTimersByTime(5000);
    await flushPromises();
    expect(carousel.props("modelValue")).toBe(2);
    expect(wrapper.get("p[role=status]").text()).toBe(stopped);
    await wrapper.find("input[type=checkbox]").setValue(true);
    vi.advanceTimersByTime(2100);
    await flushPromises();
    expect(carousel.props("modelValue")).toBe(3);
    wrapper.unmount();
    expect(vi.getTimerCount()).toBe(0);
  } finally {
    wrapper.unmount();
    vi.useRealTimers();
  }
});
