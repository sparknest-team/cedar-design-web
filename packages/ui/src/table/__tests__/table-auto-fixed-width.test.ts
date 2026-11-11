import { mount } from "@vue/test-utils";
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
const originalBoundingRect = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "getBoundingClientRect");
(globalThis as any).__roCallbacks = [];

afterAll(() => {
  if (originalCallbacks) Object.defineProperty(globalThis, "__roCallbacks", originalCallbacks);
  else Reflect.deleteProperty(globalThis, "__roCallbacks");
  if (originalClientWidth) Object.defineProperty(HTMLElement.prototype, "clientWidth", originalClientWidth);
  else Reflect.deleteProperty(HTMLElement.prototype, "clientWidth");
  if (originalBoundingRect) Object.defineProperty(HTMLElement.prototype, "getBoundingClientRect", originalBoundingRect);
  else Reflect.deleteProperty(HTMLElement.prototype, "getBoundingClientRect");
});

// jsdom 的 clientWidth 恒为 0，mock 成可调容器宽
let containerWidth = 1000;
Object.defineProperty(HTMLElement.prototype, "clientWidth", {
  configurable: true,
  get() {
    return containerWidth;
  },
});

// 模拟浏览器在 auto 布局下按内容分配的实际列宽（与引擎计算值不同）
const measuredWidths: Record<string, number> = {
  p1: 90,
  p2: 100,
  name: 560,
  status: 110,
  __cedar_table_extra__: 36,
};
Object.defineProperty(HTMLElement.prototype, "getBoundingClientRect", {
  configurable: true,
  writable: true,
  value(this: HTMLElement) {
    const key =
      this.getAttribute?.("data-column-key") ??
      this.getAttribute?.("data-operation-key");
    const width = this.hasAttribute?.("data-column-layout-key") ? 36 : (key && measuredWidths[key]) || 50;
    return {
      width,
      height: 20,
      top: 0,
      left: 0,
      right: width,
      bottom: 20,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    };
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
  { dataIndex: "p1", title: "P1", width: 120, fixed: "left" },
  { dataIndex: "p2", title: "P2", width: 120, fixed: "left" },
  { dataIndex: "name", title: "名称", minWidth: 200 },
  { dataIndex: "status", title: "状态", width: 120, fixed: "right" },
];

const settle = async () => {
  // 量宽回写 → 重渲染 → 再量（值相同不再写），预留足够的响应式刷新轮次
  await nextTick();
  await nextTick();
  await nextTick();
};

describe("table-layout=auto 下冻结列：渲染后量宽回写修正 sticky 偏移（对齐 element）", () => {
  beforeEach(() => {
    containerWidth = 1000;
  });

  test("auto：冻结偏移取测量到的真实宽度而非引擎宽度；切回 fixed 恢复引擎宽度", async () => {
    const wrapper = mount(Table, {
      props: {
        columns: makeColumns(),
        data: [{ p1: "a", p2: "b", name: "任务 A", status: "进行中" }],
        pagination: false,
        extraColumn: true,
        fit: true,
        tableLayout: "auto",
      },
      global: { plugins: [ssrShim] },
    });
    await nextTick();
    fireResize();
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    await settle();

    // auto 下 colgroup 不渲染 col（对齐 element）
    expect(wrapper.findAll("colgroup col").length).toBe(0);

    // p2 的 left 偏移 = p1 的测量宽度 90（引擎值为 120，若未回写则是 120px）
    expect(wrapper.find('th[data-column-key="p2"]').attributes("style")).toContain(
      "left: 90px",
    );
    expect(wrapper.find('td[data-column-key="p2"]').attributes("style")).toContain(
      "left: 90px",
    );
    // status 的 right 偏移 = extra 列的测量宽度 36（引擎值为 28）
    expect(
      wrapper.find('th[data-column-key="status"]').attributes("style"),
    ).toContain("right: 36px");
    expect(
      wrapper.find('td[data-column-key="status"]').attributes("style"),
    ).toContain("right: 36px");

    // 切回 fixed：引擎覆写 _realWidth，偏移恢复引擎值，col 恢复渲染
    await wrapper.setProps({ tableLayout: "fixed" });
    await settle();
    expect(wrapper.find('th[data-column-key="p2"]').attributes("style")).toContain(
      "left: 120px",
    );
    expect(
      wrapper.find('th[data-column-key="status"]').attributes("style"),
    ).toContain("right: 28px");
    expect(wrapper.findAll("colgroup col").length).toBeGreaterThan(0);

    wrapper.unmount();
  });

  test("fixed：不做量宽回写，冻结偏移始终取引擎宽度", async () => {
    const wrapper = mount(Table, {
      props: {
        columns: makeColumns(),
        data: [{ p1: "a", p2: "b", name: "任务 A", status: "进行中" }],
        pagination: false,
        extraColumn: true,
        fit: true,
        tableLayout: "fixed",
      },
      global: { plugins: [ssrShim] },
    });
    await nextTick();
    fireResize();
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    await settle();

    // getBoundingClientRect mock 虽返回 90/36，但 fixed 模式不触发回写
    expect(wrapper.find('th[data-column-key="p2"]').attributes("style")).toContain(
      "left: 120px",
    );
    expect(
      wrapper.find('th[data-column-key="status"]').attributes("style"),
    ).toContain("right: 28px");

    wrapper.unmount();
  });

  test("拖拽调宽仅 fixed 可用；fixed 拖拽后切 auto，冻结偏移取测量值而非拖拽值", async () => {
    const wrapper = mount(Table, {
      props: {
        columns: makeColumns(),
        data: [{ p1: "a", p2: "b", name: "任务 A", status: "进行中" }],
        pagination: false,
        extraColumn: true,
        fit: true,
        tableLayout: "fixed",
        columnResizable: true,
      },
      global: { plugins: [ssrShim] },
    });
    await nextTick();
    fireResize();
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    await settle();

    // fixed：渲染拖拽把手（extra 列是最后一列，无把手）→ p1/p2/name/status 共 4 个
    expect(wrapper.findAll(".c-table-column-handle").length).toBe(4);

    // 拖拽 p1 到 300px：p2 的 left 偏移跟随拖拽宽度
    await wrapper
      .find('th[data-column-key="p1"] .c-table-column-handle')
      .trigger("mousedown", { clientX: wrapper.get('th[data-column-key="p1"]').element.getBoundingClientRect().right });
    window.dispatchEvent(new MouseEvent("mousemove", { clientX: 300 }));
    window.dispatchEvent(new MouseEvent("mouseup"));
    await settle();
    expect(wrapper.find('th[data-column-key="p2"]').attributes("style")).toContain(
      "left: 300px",
    );

    // 切到 auto：把手消失；浏览器不执行 _resizeWidth(300)，
    // 冻结偏移必须取测量回写值 90，否则 sticky 错位
    await wrapper.setProps({ tableLayout: "auto" });
    await settle();
    expect(wrapper.findAll(".c-table-column-handle").length).toBe(0);
    expect(wrapper.find('th[data-column-key="p2"]').attributes("style")).toContain(
      "left: 90px",
    );

    // 切回 fixed：把手恢复，拖拽宽度仍生效（_resizeWidth 未被 auto 阶段清除）
    await wrapper.setProps({ tableLayout: "fixed" });
    await settle();
    expect(wrapper.findAll(".c-table-column-handle").length).toBe(4);
    expect(wrapper.find('th[data-column-key="p2"]').attributes("style")).toContain(
      "left: 300px",
    );

    wrapper.unmount();
  });
  test('auto layout measures same-key business and extra columns separately', async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [{ dataIndex: 'name', title: 'Name', fixed: 'right' }, { dataIndex: 'status', title: 'Status', fixed: 'right' }],
        data: [{ key: 'a', name: 'Ada', status: 'Ready' }], pagination: false,
        extraColumn: { dataIndex: 'status' }, tableLayout: 'auto',
      },
      global: { plugins: [ssrShim] },
    })
    try {
      await nextTick()
      fireResize()
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
      await settle()
      expect(wrapper.get('th[data-column-key="name"]').attributes('style')).toContain('right: 146px')
      const statusHeaders = wrapper.findAll('th[data-column-key="status"]')
      expect(statusHeaders[0].attributes('style')).toContain('right: 36px')
      expect(statusHeaders[1].attributes('style')).toContain('right: 0px')
    } finally { wrapper.unmount() }
  })

});
