import { afterEach, describe, expect, test } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Editor from "../components/SchedulerEditor.vue";
import CInput from "../../input";
import CCheckbox from "../../checkbox";
import CForm from "../../form";
import CAlert from "../../alert";
import CDate from "../../date";
import { schedulerMessages } from "../locale";

const wrappers: ReturnType<typeof mount>[] = [];
async function setup(extra = {}, slots = {}) {
  const wrapper = mount(Editor, {
    props: {
      open: true,
      existing: true,
      event: {
        id: "e",
        title: "Original",
        start: "2026-09-09T09:00:00",
        end: "2026-09-09T10:00:00",
      },
      resources: [{ id: "a", label: "Alice" }],
      readonly: false,
      pending: false,
      messages: schedulerMessages["zh-CN"],
      ...extra,
    },
    slots,
  });
  wrappers.push(wrapper);
  await flushPromises();
  return wrapper;
}
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  document.body.innerHTML = "";
});
describe("Scheduler editor", () => {
  test("custom saves normalize whitespace titles with the active language", async () => {
    let actions: any;
    const wrapper = await setup(
      { messages: schedulerMessages["en-US"] },
      {
        default: (value: any) => {
          actions = value;
          return "Custom";
        },
      },
    );
    actions.save({ ...actions.event, title: "  " });
    expect(wrapper.emitted("save")?.[0][0]).toMatchObject({
      title: "Untitled",
    });
  });
  test("custom slot exposes create action and validation feedback without deleting drafts", async () => {
    let actions: any;
    const wrapper = await setup(
      { existing: false },
      {
        default: (value: any) => {
          actions = value;
          return "Custom";
        },
      },
    );
    expect(actions.action).toBe("create");
    actions.remove();
    expect(wrapper.emitted("remove")).toBeUndefined();
    actions.save({ ...actions.event, end: actions.event.start });
    await wrapper.vm.$nextTick();
    expect(actions.error.code).toBe("invalid-event");
    expect(actions.errorMessage).toBeTruthy();
    expect(wrapper.emitted("save")).toBeUndefined();
    actions.save({ ...actions.event, id: "different" });
    expect(wrapper.emitted("save")).toBeUndefined();
    actions.event.start = "2026-10-01T11:00:00";
    actions.event.end = "2026-10-01T12:00:00";
    actions.save();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("save")?.[0][0]).toMatchObject({
      start: "2026-10-01T11:00:00",
      end: "2026-10-01T12:00:00",
    });
    expect(actions.error).toBeUndefined();
    expect(wrapper.props("event").start).toBe("2026-09-09T09:00:00");
    actions.event.title = "Keep draft while closing";
    await wrapper.setProps({ open: false });
    expect(actions.event.title).toBe("Keep draft while closing");
  });
  test("custom slot receives commit errors and pending prevents closing", async () => {
    let actions: any;
    const wrapper = await setup(
      {},
      {
        default: (value: any) => {
          actions = value;
          return "Custom";
        },
      },
    );
    expect(actions.action).toBe("edit");
    await wrapper.setProps({ pending: true, errorMessage: "Server rejected" });
    expect(actions.pending).toBe(true);
    expect(actions.errorMessage).toBe("Server rejected");
    actions.close();
    actions.save();
    actions.remove();
    expect(wrapper.emitted("save")).toBeUndefined();
    expect(wrapper.emitted("remove")).toBeUndefined();
    expect(wrapper.emitted("update:open")).toBeUndefined();
  });
  test("Cedar controls edit and save without modifying source", async () => {
    const wrapper = await setup();
    wrapper.findComponent(CInput).vm.$emit("update:modelValue", "Changed");
    wrapper.findComponent(CForm).vm.$emit("submit");
    expect(wrapper.emitted("save")?.[0][0]).toMatchObject({ title: "Changed" });
    expect(wrapper.props("event").title).toBe("Original");
  });
  test("empty titles save as untitled", async () => {
    const wrapper = await setup();
    wrapper.findComponent(CInput).vm.$emit("update:modelValue", "");
    wrapper.findComponent(CForm).vm.$emit("submit");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("save")?.[0][0]).toMatchObject({ title: "无主题" });
    expect(wrapper.findComponent(CAlert).exists()).toBe(false);
  });
  test("unscheduling removes both dates", async () => {
    const wrapper = await setup();
    wrapper
      .findAllComponents(CCheckbox)
      .find((item) => item.text() === "设置排期")!
      .vm.$emit("update:modelValue", false);
    wrapper.findComponent(CForm).vm.$emit("submit");
    expect(wrapper.emitted("save")?.[0][0]).toMatchObject({
      start: undefined,
      end: undefined,
      allDay: false,
    });
  });
  test("all-day input uses exclusive date values", async () => {
    const wrapper = await setup();
    wrapper
      .findAllComponents(CCheckbox)
      .find((item) => item.text() === "全天")!
      .vm.$emit("update:modelValue", true);
    wrapper
      .findAllComponents(CDate)[1]
      .vm.$emit("update:modelValue", new Date(2026, 8, 10));
    wrapper.findComponent(CForm).vm.$emit("submit");
    expect(wrapper.emitted("save")?.[0][0]).toMatchObject({
      start: "2026-09-09",
      end: "2026-09-10",
      allDay: true,
    });
  });
  test("missing end remains invalid when scheduled", async () => {
    const wrapper = await setup();
    wrapper
      .findAllComponents(CDate)[1]
      .vm.$emit("update:modelValue", undefined);
    wrapper.findComponent(CForm).vm.$emit("submit");
    expect(wrapper.emitted("save")).toBeUndefined();
  });
  test("pending and readonly block direct submit events", async () => {
    for (const flag of ["readonly", "pending"]) {
      const wrapper = await setup({ [flag]: true });
      wrapper.findComponent(CForm).vm.$emit("submit");
      expect(wrapper.emitted("save")).toBeUndefined();
    }
  });
  test("error feedback is present inside the drawer", async () => {
    const wrapper = await setup({ errorMessage: "Save failed" });
    expect(wrapper.getComponent(CAlert).text()).toContain("Save failed");
  });
  test("custom editor can submit a complete event", async () => {
    let actions: any;
    const wrapper = await setup(
      {},
      {
        default: (props: any) => {
          actions = props;
          return "Custom";
        },
      },
    );
    actions.save({
      id: "e",
      title: "Custom date",
      start: "2026-10-01",
      end: "2026-10-02",
      allDay: true,
    });
    expect(wrapper.emitted("save")?.[0][0]).toMatchObject({
      start: "2026-10-01",
      allDay: true,
    });
    actions.close();
    actions.remove();
    expect(wrapper.emitted("update:open")?.[0]).toEqual([false]);
    expect(wrapper.emitted("remove")?.[0][0]).toMatchObject({ id: "e" });
  });
});
