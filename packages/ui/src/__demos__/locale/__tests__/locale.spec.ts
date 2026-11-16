import { mount, flushPromises, type VueWrapper } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { computed, nextTick, type Component, type Plugin } from "vue";
import { addI18nMessages, useLocale, cedarEnUS } from "../../../locale";
import {
  useDemoLocale,
  formatDemoDate,
  formatDemoTime,
  formatDemoNumber,
} from "..";

// Load only the real components needed by the selected scenario. Eagerly
// importing every demo made even a dictionary-only test transform the whole UI.
const plugins = {
  Form: () => import("../../../form"),
  Input: () => import("../../../input"),
  InputNumber: () => import("../../../input-number"),
  Select: () => import("../../../select"),
  Checkbox: () => import("../../../checkbox"),
  Radio: () => import("../../../radio"),
  Space: () => import("../../../space"),
  Button: () => import("../../../button"),
  Textarea: () => import("../../../textarea"),
  Table: () => import("../../../table"),
  Icon: () => import("../../../icon"),
  Switch: () => import("../../../switch"),
  Alert: () => import("../../../alert"),
  Calendar: () => import("../../../calendar"),
  Carousel: () => import("../../../carousel"),
  Steps: () => import("../../../steps"),
  Countdown: () => import("../../../countdown"),
  Row: () => import("../../../row"),
  Col: () => import("../../../col"),
};
const demos: Record<
  string,
  {
    load: () => Promise<{ default: Component }>;
    plugins: (keyof typeof plugins)[];
    zh: string;
    en: string;
  }
> = {
  inputLoading: {
    load: () => import("../../../input/__demos__/loading.vue"),
    plugins: ["Input", "Switch", "Form", "Space"],
    zh: "加载状态",
    en: "Loading",
  },
  selectLoading: {
    load: () => import("../../../select/__demos__/loading.vue"),
    plugins: ["Select", "Switch", "Form", "Space"],
    zh: "北京",
    en: "Beijing",
  },
  buttonLoading: {
    load: () => import("../../../button/__demos__/controlled-loading.vue"),
    plugins: ["Button", "Space"],
    zh: "点击保存",
    en: "Click Save to start",
  },
  alertLab: {
    load: () => import("../../../alert/__demos__/appearance-lab.vue"),
    plugins: ["Alert", "Space", "Form", "Radio"],
    zh: "选择一个对比维度",
    en: "Compare one dimension",
  },
  alertContent: {
    load: () => import("../../../alert/__demos__/content-comparison.vue"),
    plugins: ["Alert", "Row", "Col"],
    zh: "提示标题",
    en: "title",
  },
  carousel: {
    load: () => import("../../../carousel/__demos__/indicator-comparison.vue"),
    plugins: ["Carousel"],
    zh: "指示器样式",
    en: "Indicator types",
  },
  steps: {
    load: () => import("../../../steps/__demos__/types.vue"),
    plugins: ["Steps", "Form", "Radio"],
    zh: "当前步骤",
    en: "Current step",
  },
  calendar: {
    load: () => import("../../../calendar/__demos__/basic.vue"),
    plugins: ["Calendar"],
    zh: "当前选择",
    en: "Current selection",
  },
  calendarControlled: {
    load: () => import("../../../calendar/__demos__/controlled.vue"),
    plugins: ["Calendar", "Space", "Button", "Alert"],
    zh: "选择今天",
    en: "Select today",
  },
  countdown: {
    load: () => import("../../../countdown/__demos__/format-comparison.vue"),
    plugins: ["Countdown", "Space"],
    zh: "自定义格式",
    en: "format",
  },
  section: {
    load: () => import("../../../form/__demos__/section.vue"),
    plugins: ["Form", "Select", "Textarea", "Radio", "Checkbox", "Space"],
    zh: "现场处置",
    en: "Onsite handling",
  },
  layout: {
    load: () => import("../../../form/__demos__/layout.vue"),
    plugins: ["Form", "Radio", "Checkbox", "Input", "Space"],
    zh: "表单布局",
    en: "Form layout",
  },
  labelWidth: {
    load: () => import("../../../form/__demos__/label-width-comparison.vue"),
    plugins: ["Form", "Radio", "Checkbox", "Input"],
    zh: "显示额外字段",
    en: "Show extra field",
  },
  defaultValue: {
    load: () => import("../../../input/__demos__/default-value.vue"),
    plugins: ["Input", "Space", "Button"],
    zh: "重新挂载输入框",
    en: "Remount input",
  },
  quantity: {
    load: () => import("../../../input-number/__demos__/quantity-controls.vue"),
    plugins: ["InputNumber", "Space", "Checkbox", "Button"],
    zh: "数量控制与步进方向",
    en: "Quantity controls and step direction",
  },
  selection: {
    load: () => import("../../../select/__demos__/selection-data-flow.vue"),
    plugins: ["Select", "Form", "Checkbox", "Button"],
    zh: "重置两组表单和日志",
    en: "Reset both forms and logs",
  },
  columnSizing: {
    load: () => import("../../../table/__demos__/column-sizing-playground.vue"),
    plugins: ["Table", "Space", "Checkbox", "Radio"],
    zh: "充电设备巡检",
    en: "Inspect charging equipment",
  },
  lifecycle: {
    load: () => import("../../../icon/__demos__/lifecycle.vue"),
    plugins: ["Icon", "Space", "Button"],
    zh: "切换名称",
    en: "Switch name",
  },
};
const wrappers: VueWrapper[] = [];
const unresolvedWarnings: string[] = [];
async function render(name: keyof typeof demos) {
  const scenario = demos[name];
  const [module, registrations] = await Promise.all([
    scenario.load(),
    Promise.all(scenario.plugins.map((name) => plugins[name]())),
  ]);
  const wrapper = mount(module.default, {
    attachTo: document.body,
    global: {
      plugins: registrations.map((module) => module.default as Plugin),
      config: {
        warnHandler(message) {
          if (message.startsWith("Failed to resolve component:")) {
            unresolvedWarnings.push(message);
          } else {
            console.warn(message);
          }
        },
      },
    },
  });
  wrappers.push(wrapper);
  return wrapper;
}
function button(wrapper: VueWrapper, text: string) {
  const result = wrapper.findAll("button").find((item) => item.text() === text);
  expect(result, `button ${text}`).toBeTruthy();
  return result!;
}
async function language(locale: "zh-CN" | "en-US") {
  useLocale(locale);
  await nextTick();
}
addI18nMessages({ "en-US": cedarEnUS });
beforeEach(() => useLocale("zh-CN"));
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  useLocale("zh-CN");
  vi.useRealTimers();
  expect(unresolvedWarnings.splice(0)).toEqual([]);
});

describe("demo locales", () => {
  it("uses the global language for every example", () => {
    const copy = useDemoLocale("quantityControls"),
      other = useDemoLocale("quantityControls");
    expect(copy.value.waiting(null)).toBe("等待提交 空值");
    useLocale("en-US");
    expect(copy.value.waiting(0)).toBe("Waiting to commit 0");
    expect(other.value.waiting(0)).toBe("Waiting to commit 0");
  });
  it.each(Object.keys(demos))(
    "renders both languages for %s",
    async (name) => {
      const wrapper = await render(name);
      expect(wrapper.text()).toContain(demos[name].zh);
      await language("en-US");
      expect(wrapper.text()).toContain(demos[name].en);
      expect(wrapper.text()).not.toContain(demos[name].zh);
      await language("zh-CN");
      expect(wrapper.text()).toContain(demos[name].zh);
    },
    120_000,
  );
  it("formats dates and numbers reactively using the header language", () => {
    const date = new Date(2026, 8, 9, 13, 5);
    const result = computed(() => [
      formatDemoDate(date, { month: "long", weekday: "long" }),
      formatDemoTime(date),
      formatDemoNumber(1234.5),
    ]);
    const chinese = result.value;
    useLocale("en-US");
    expect(result.value).toEqual([
      date.toLocaleDateString("en-US", { month: "long", weekday: "long" }),
      date.toLocaleTimeString("en-US"),
      (1234.5).toLocaleString("en-US"),
    ]);
    expect(result.value[0]).not.toBe(chinese[0]);
  });
  it("keeps typed text and allows further editing and remount after a round trip", async () => {
    const wrapper = await render("defaultValue");
    const input = wrapper.findAll("input")[0];
    await input.setValue("user edited text");
    await language("en-US");
    expect((input.element as HTMLInputElement).value).toBe("user edited text");
    await input.setValue("edited in English");
    await language("zh-CN");
    expect((input.element as HTMLInputElement).value).toBe("edited in English");
    expect(wrapper.text()).toContain("最近一次用户更新");
    await language("en-US");
    await button(wrapper, "Remount input").trigger("click");
    expect(
      (wrapper.findAll("input")[0].element as HTMLInputElement).value,
    ).toBe("A: initial text");
  }, 120_000);
  it("keeps selected values and event counts while allowing another selection", async () => {
    const wrapper = await render("selection");
    const SelectField = (await plugins.Select()).default;
    const field = wrapper.findAllComponents(SelectField)[0];
    const input = field.get("input");
    await input.trigger("keydown", { key: "Enter" });
    await flushPromises();
    await input.trigger("keydown", { key: "Enter" });
    await flushPromises();
    expect(field.props("modelValue")).toBe("hangzhou");
    const counts = field.emitted("update:modelValue")?.length;
    await language("en-US");
    expect(field.props("modelValue")).toBe("hangzhou");
    expect(field.text()).toContain("Hangzhou");
    expect(field.emitted("update:modelValue")?.length).toBe(counts);
    await input.trigger("keydown", { key: "Enter" });
    await input.trigger("keydown", { key: "ArrowDown" });
    await input.trigger("keydown", { key: "Enter" });
    await flushPromises();
    expect(field.props("modelValue")).toBe("shanghai");
    await language("zh-CN");
    expect(field.text()).toContain("上海");
    expect(field.emitted("update:modelValue")?.length).toBe((counts ?? 0) + 1);
  }, 120_000);

  it("finishes an in-flight save and permits failure recovery in the other language", async () => {
    const wrapper = await render("buttonLoading");
    const Button = (await plugins.Button()).default;
    vi.useFakeTimers();
    await button(wrapper, "保存").trigger("click");
    expect(wrapper.findAllComponents(Button)[0].props("loading")).toBe(true);
    await language("en-US");
    expect(wrapper.findAllComponents(Button)[0].props("loading")).toBe(true);
    await vi.advanceTimersByTimeAsync(800);
    expect(wrapper.text()).toContain("Saved");
    expect(wrapper.findAllComponents(Button)[0].props("loading")).toBe(false);
    await button(wrapper, "Failure recovery").trigger("click");
    await language("zh-CN");
    await vi.advanceTimersByTimeAsync(800);
    expect(wrapper.text()).toContain("模拟请求失败");
    expect(wrapper.findAllComponents(Button)[1].props("loading")).toBe(false);
    await button(wrapper, "保存").trigger("click");
    await vi.advanceTimersByTimeAsync(800);
    expect(wrapper.text()).toContain("保存完成");
  }, 120_000);

  it("keeps step selection and supports more clicks in both languages", async () => {
    const wrapper = await render("steps");
    const steps = wrapper.findAll(".c-steps");
    await steps[0].findAll(".c-steps-item")[2].trigger("click");
    await language("en-US");
    for (const group of wrapper.findAll(".c-steps"))
      expect(group.findAll(".c-steps-item")[2].classes()).toContain(
        "c-steps-item-active",
      );
    await wrapper
      .findAll(".c-steps")[1]
      .findAll(".c-steps-item")[0]
      .trigger("click");
    await language("zh-CN");
    for (const group of wrapper.findAll(".c-steps"))
      expect(group.findAll(".c-steps-item")[0].classes()).toContain(
        "c-steps-item-active",
      );
  }, 120_000);
  it("keeps a pending quantity proposal and approves it after changing language", async () => {
    const wrapper = await render("quantity");
    const NumberField = (await plugins.InputNumber()).default;
    const field = wrapper.findAllComponents(NumberField)[1];
    await field.get("input").trigger("keydown", { key: "ArrowUp" });
    expect(wrapper.text()).toContain("等待提交 3");
    await language("en-US");
    expect(wrapper.text()).toContain("Waiting to commit 3");
    expect(field.props("modelValue")).toBe(2);
    await button(wrapper, "Approve").trigger("click");
    await flushPromises();
    expect(field.props("modelValue")).toBe(3);
    expect(wrapper.text()).toContain("Approved");
    await language("zh-CN");
    expect(wrapper.text()).toContain("已允许");
    expect(field.props("modelValue")).toBe(3);
  }, 120_000);
  it("rejects, cancels and restores quantity controls across language changes", async () => {
    const wrapper = await render("quantity");
    const NumberField = (await plugins.InputNumber()).default;
    const field = wrapper.findAllComponents(NumberField)[1];
    await field.get("input").trigger("keydown", { key: "ArrowUp" });
    await language("en-US");
    await button(wrapper, "Reject").trigger("click");
    await flushPromises();
    expect(field.props("modelValue")).toBe(2);
    await language("zh-CN");
    expect(wrapper.text()).toContain("已拒绝");
    await field.get("input").trigger("keydown", { key: "ArrowUp" });
    await language("en-US");
    await button(wrapper, "Disable").trigger("click");
    await flushPromises();
    expect(wrapper.text()).toContain("Cancelled; old result ignored");
    expect(field.props("modelValue")).toBe(2);
    await button(wrapper, "Enable").trigger("click");
    await field.get("input").trigger("keydown", { key: "ArrowUp" });
    await button(wrapper, "Approve").trigger("click");
    await flushPromises();
    expect(field.props("modelValue")).toBe(3);
  }, 120_000);
  it("recovers from a failed quantity proposal without publishing the failed value", async () => {
    const wrapper = await render("quantity");
    const NumberField = (await plugins.InputNumber()).default;
    const field = wrapper.findAllComponents(NumberField)[1];
    await language("en-US");
    await field.get("input").trigger("keydown", { key: "ArrowUp" });
    await language("zh-CN");
    await button(wrapper, "模拟失败").trigger("click");
    await flushPromises();
    expect(field.props("modelValue")).toBe(2);
    expect(field.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.text()).toContain("请求失败，保留原值");
    await language("en-US");
    expect(wrapper.text()).toContain("Request failed; value preserved");
    await field.get("input").trigger("keydown", { key: "ArrowUp" });
    await button(wrapper, "Approve").trigger("click");
    await flushPromises();
    expect(field.props("modelValue")).toBe(3);
    expect(field.emitted("update:modelValue")).toHaveLength(1);
  }, 120_000);
});
