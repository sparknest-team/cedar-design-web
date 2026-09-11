import { test, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Demo from "../__demos__/duplicate-events.vue";
import Scheduler from "../index";
import Editor from "../components/scheduler-editor.vue";
import Button from "../../button";
import Space from "../../space";
import Alert from "../../alert";
import Checkbox from "../../checkbox";
import Tag from "../../tag";
test("demo copies all-day/backlog drafts, preserves failed draft and retries", async () => {
  const w = mount(Demo, {
    global: {
      components: Object.fromEntries(
        [Scheduler, Button, Space, Alert, Checkbox, Tag].map((c) => [
          c.name!,
          c,
        ]),
      ),
    },
  });
  const click = async (label: string) => {
    await w
      .findAll("button")
      .find((b) => b.text() === label)!
      .trigger("click");
    await flushPromises();
  };
  try {
    await click("复制全天任务");
    expect(w.getComponent(Editor).props("event")).toMatchObject({
      allDay: true,
      start: "2026-09-17",
      end: "2026-09-18",
    });
    await click("复制未排期任务");
    expect(w.getComponent(Editor).props("event").start).toBeUndefined();
    await click("复制评审会议");
    const editor = w.getComponent(Editor);
    w.getComponent(Checkbox).vm.$emit("update:modelValue", true);
    await flushPromises();
    editor.vm.$emit("save", editor.props("event"));
    await new Promise((r) => setTimeout(r, 250));
    await flushPromises();
    expect(editor.props("open")).toBe(true);
    expect(editor.props("error")?.code).toBe("rejected");
    expect(w.getComponent(Scheduler).props("modelValue")).toHaveLength(3);
    w.getComponent(Checkbox).vm.$emit("update:modelValue", false);
    await flushPromises();
    editor.vm.$emit("save", editor.props("event"));
    await new Promise((r) => setTimeout(r, 250));
    await flushPromises();
    expect(w.getComponent(Scheduler).props("modelValue")).toHaveLength(4);
  } finally {
    w.unmount();
    document.body.innerHTML = "";
  }
});
