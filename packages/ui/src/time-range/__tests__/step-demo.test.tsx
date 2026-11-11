import { useDemoControls } from "../../../test-utils/demo-controls";
import { config as demoTestConfig, mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import Demo from "../__demos__/step.vue";
import TimeRange from "../index";
import Space from "../../space";

useDemoControls(demoTestConfig);

it("12-hour step demo changes presentation without rewriting the formatted model or intervals", async () => {
  const wrapper = mount(Demo, {
    global: { components: { CTimeRange: TimeRange, CSpace: Space } },
  });
  const field = wrapper.getComponent(TimeRange);
  await wrapper.get('input[type="checkbox"]').setValue(true);
  expect(field.props("use12Hours")).toBe(true);
  expect(field.props("format")).toBe("HH:mm:ss");
  expect(field.props("step")).toEqual({ hour: 1, minute: 15, second: 10 });
  expect(field.props("modelValue")).toEqual(["09:30:00", "17:00:00"]);
  wrapper.unmount();
});
