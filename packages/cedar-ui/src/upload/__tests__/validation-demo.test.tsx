import { useDemoControls } from "../../../test-utils/demo-controls";
import {
  config as demoTestConfig,
  flushPromises,
  mount,
} from "@vue/test-utils";
import { afterEach, expect, test, vi } from "vitest";
import Upload from "..";
import Button from "../../button";
import Space from "../../space";
import Demo from "../__demos__/replacement-validation.vue";

useDemoControls(demoTestConfig);

vi.mock("@cedar-design/ui", () => import(".."));

const wrappers = [];
afterEach(() => wrappers.splice(0).forEach((wrapper) => wrapper.unmount()));

async function click(wrapper, label) {
  const button = wrapper
    .findAll("button")
    .find((item) => item.text() === label);
  expect(button).toBeTruthy();
  await button.trigger("click");
  await flushPromises();
}

test.each([
  [
    Demo,
    "加入小图片",
    "替换为文本",
    "替换为超大图片",
    "加入 768 KiB 图片",
    "重置队列",
  ],
])(
  "validation demo checks replacements, total size and released slots",
  async (Component, small, type, size, total, reset) => {
    const wrapper = mount(Component, {
      global: {
        components: { CUpload: Upload, CButton: Button, CSpace: Space },
      },
    });
    wrappers.push(wrapper);
    const items = () => wrapper.findAll(".c-upload__item");
    const rejected = () => wrapper.findAll("p").at(-1).text();

    await click(wrapper, small);
    expect(items()).toHaveLength(1);
    await click(wrapper, type);
    expect(items()).toHaveLength(1);
    expect(rejected()).toContain("accept");
    await click(wrapper, size);
    expect(items()).toHaveLength(1);
    expect(rejected()).toContain("max-file-size");

    await click(wrapper, reset);
    await click(wrapper, total);
    await click(wrapper, total);
    await click(wrapper, total);
    expect(items()).toHaveLength(2);
    expect(rejected()).toContain("max-total-size");

    await click(wrapper, reset);
    for (let count = 0; count < 4; count++) {
      await click(wrapper, small);
    }
    expect(items()).toHaveLength(3);
    expect(rejected()).toContain("max-files");
    await wrapper.find(".c-upload__item button").trigger("click");
    await flushPromises();
    await click(wrapper, small);
    expect(items()).toHaveLength(3);
    expect(rejected()).not.toContain("max-files");
    await click(wrapper, reset);
    expect(items()).toHaveLength(0);
  },
);
