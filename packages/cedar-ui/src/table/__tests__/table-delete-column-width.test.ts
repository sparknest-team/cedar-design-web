import { mount, VueWrapper } from "@vue/test-utils";
import { describe, test, expect, vi, beforeEach, afterAll } from "vitest";
import { nextTick } from "vue";
import Table from "../table";

// ---- 可控的 ResizeObserver mock：收集回调，手动触发 ----
vi.mock("resize-observer-polyfill", () => ({
  default: class MockResizeObserver {
    constructor(cb: (entries: unknown[]) => void) {
      (globalThis as any).__roCallbacks.push(cb);
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  },
}));
const originalCallbacks = Object.getOwnPropertyDescriptor(globalThis, "__roCallbacks");
const originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "clientWidth");
(globalThis as any).__roCallbacks = [];

afterAll(() => {
  if (originalCallbacks) Object.defineProperty(globalThis, "__roCallbacks", originalCallbacks);
  else Reflect.deleteProperty(globalThis, "__roCallbacks");
  if (originalClientWidth) Object.defineProperty(HTMLElement.prototype, "clientWidth", originalClientWidth);
  else Reflect.deleteProperty(HTMLElement.prototype, "clientWidth");
});

// jsdom 的 clientWidth 恒为 0，mock 成可调容器宽
let containerWidth = 1000;
Object.defineProperty(HTMLElement.prototype, "clientWidth", {
  configurable: true,
  get() {
    return containerWidth;
  },
});

const fireResize = () => {
  (globalThis as any).__roCallbacks.forEach((cb: (entries: unknown[]) => void) => cb([{}]));
};

// vitest 以 ssr 模式转换 tsx，@vitejs/plugin-vue-jsx 会给每个组件包一层
// useSSRContext()；jsdom 客户端挂载时注入一个假 context，避免包裹层报错
const ssrShim = {
  install(app: any) {
    app.provide(Symbol.for("v-scx"), { modules: new Set() });
  },
};

const makeColumns = (): any[] => [
  {
    title: "基本信息",
    children: [
      { dataIndex: "priority", title: "优先级", width: 120, fixed: "left" },
      { dataIndex: "name", title: "名称", minWidth: 200 },
    ],
  },
  {
    title: "状态",
    children: [{ dataIndex: "status", title: "状态", width: 120, fixed: "right" }],
  },
];

const tableWidth = (wrapper: VueWrapper) =>
  wrapper.find("table.c-table-element").attributes("style");
const colWidths = (wrapper: VueWrapper) =>
  wrapper.findAll("colgroup col").map((col) => col.attributes("width"));

const mountTable = () =>
  mount(Table, {
    props: {
      columns: makeColumns(),
      data: [{ priority: "P0", name: "任务 A", status: "进行中" }],
      pagination: false,
      extraColumn: true,
      fit: true,
    },
    global: { plugins: [ssrShim] },
  });

describe("删除列后表格宽度保持铺满容器（fit，对齐父元素 100%）", () => {
  beforeEach(() => {
    containerWidth = 1000;
  });

  test("删除定宽列：剩余弹性列吸收空间，表格宽度不变", async () => {
    const wrapper = mountTable();
    await nextTick();
    fireResize();
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    await nextTick();
    // 初始：priority 120 + name 200+532=732 + status 120 + extra 28 = 1000
    expect(tableWidth(wrapper)).toContain("width: 1000px");
    expect(colWidths(wrapper)).toEqual(["120", "732", "120", "28"]);

    // 模拟列管理删除 status：columns 整树替换
    await wrapper.setProps({
      columns: [
        {
          title: "基本信息",
          children: [
            { dataIndex: "priority", title: "优先级", width: 120, fixed: "left" },
            { dataIndex: "name", title: "名称", minWidth: 200 },
          ],
        },
      ],
    });
    await nextTick();
    await nextTick();
    // name = 200 + (1000 - 120 - 200 - 28) = 852，表格仍铺满容器
    expect(tableWidth(wrapper)).toContain("width: 1000px");
    expect(colWidths(wrapper)).toEqual(["120", "852", "28"]);
    wrapper.unmount();
  });

  test("删除唯一的弹性列：剩余定宽列按比例放大，表格宽度不变", async () => {
    const wrapper = mountTable();
    await nextTick();
    fireResize();
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    await nextTick();
    expect(tableWidth(wrapper)).toContain("width: 1000px");

    // 模拟列管理删除 name（唯一的弹性列）：仅剩显式 width 的列
    await wrapper.setProps({
      columns: [
        {
          title: "基本信息",
          children: [
            { dataIndex: "priority", title: "优先级", width: 120, fixed: "left" },
          ],
        },
        {
          title: "状态",
          children: [{ dataIndex: "status", title: "状态", width: 120, fixed: "right" }],
        },
      ],
    });
    await nextTick();
    await nextTick();
    // 120/120 按比例分剩余 1000-268=732 → 各 486；extra 钉死 28；表格仍铺满容器
    expect(tableWidth(wrapper)).toContain("width: 1000px");
    expect(colWidths(wrapper)).toEqual(["486", "486", "28"]);
    wrapper.unmount();
  });
});
