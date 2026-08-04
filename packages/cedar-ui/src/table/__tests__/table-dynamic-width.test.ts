import { mount } from "@vue/test-utils";
import { describe, test, expect, vi, beforeEach } from "vitest";
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
(globalThis as any).__roCallbacks = [];

// jsdom 的 clientWidth 恒为 0，mock 成可调容器宽
let containerWidth = 1000;
Object.defineProperty(HTMLElement.prototype, "clientWidth", {
  configurable: true,
  get() {
    return containerWidth;
  },
});

const fireResize = () => {
  (globalThis as any).__roCallbacks.forEach((cb: (entries: unknown[]) => void) =>
    cb([{}]),
  );
};

describe("table dynamic width (对齐 element：根节点 100%，表格宽度按父容器动态计算)", () => {
  beforeEach(() => {
    containerWidth = 1000;
  });

  test("table 像素宽跟随父容器，flex 列吸收剩余空间", async () => {
    const wrapper = mount(Table, {
      props: {
        columns: [
          { dataIndex: "name", title: "Name", width: 120 },
          { dataIndex: "address", title: "Address" },
        ],
        data: [{ name: "Tom", address: "No. 189, Grove St" }],
        pagination: false,
      },
      global: {
        plugins: [
          // vitest 以 ssr 模式转换 tsx，@vitejs/plugin-vue-jsx 会给每个组件包一层
          // useSSRContext()；jsdom 客户端挂载时注入一个假 context，避免包裹层报错
          {
            install(app: any) {
              app.provide(Symbol.for("v-scx"), { modules: new Set() });
            },
          },
        ],
      },
    });
    await nextTick();
    fireResize();
    await nextTick();

    const tableEl = wrapper.find("table.c-table-element");
    expect(tableEl.exists()).toBe(true);
    // 容器 1000：name 120 + flex address 880 → bodyWidth 1000
    expect(tableEl.attributes("style")).toContain("width: 1000px");

    // 父容器缩小到 600 → 动态重算
    containerWidth = 600;
    fireResize();
    await nextTick();
    expect(wrapper.find("table.c-table-element").attributes("style")).toContain(
      "width: 600px",
    );

    // 父容器小于最小列宽之和 → 保持最小宽并开启横向滚动
    containerWidth = 150;
    fireResize();
    await nextTick();
    expect(wrapper.find("table.c-table-element").attributes("style")).toContain(
      "width: 200px",
    );

    wrapper.unmount();
  });

  test("分组表头：全部列显式 width 时按比例放大撑满容器（extra 列钉死），minWidth 列作为弹性列撑满", async () => {
    const ssrShim = {
      install(app: any) {
        app.provide(Symbol.for("v-scx"), { modules: new Set() });
      },
    };
    const data = [{ priority: "P0", name: "任务 A", status: "进行中" }];

    // 1) 全部显式 width：列宽之和不足容器 → 按显式宽度比例放大撑满
    //    （删除最后一根弹性列后表格不应缩小；element 此处会缩小，为有意偏离）
    const exact = mount(Table, {
      props: {
        columns: [
          {
            title: "基本信息",
            children: [
              { dataIndex: "priority", title: "优先级", width: 120, fixed: "left" },
              { dataIndex: "name", title: "名称", width: 200 },
            ],
          },
          {
            title: "状态",
            children: [{ dataIndex: "status", title: "状态", width: 120, fixed: "right" }],
          },
        ],
        data,
        pagination: false,
        extraColumn: true,
        fit: true,
      },
      global: { plugins: [ssrShim] },
    });
    await nextTick();
    fireResize();
    await nextTick();
    // 120/200/120 按比例分剩余 1000-468=532 → 265/441/266，extra 钉死 28
    expect(exact.find("table.c-table-element").attributes("style")).toContain(
      "width: 1000px",
    );
    const exactColWidths = exact
      .findAll("colgroup col")
      .map((col) => col.attributes("width"));
    expect(exactColWidths).toEqual(["265", "441", "266", "28"]);
    exact.unmount();

    // 2) name 改为 minWidth：弹性列吸收剩余空间 → 撑满容器
    const flex = mount(Table, {
      props: {
        columns: [
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
        ],
        data,
        pagination: false,
        extraColumn: true,
        fit: true,
      },
      global: { plugins: [ssrShim] },
    });
    await nextTick();
    fireResize();
    await nextTick();
    expect(flex.find("table.c-table-element").attributes("style")).toContain(
      "width: 1000px",
    );
    const colWidths = flex.findAll("colgroup col").map((col) => col.attributes("width"));
    // name = 200 + (1000 - 468) = 732，定宽列与 extra 保持不动
    expect(colWidths).toEqual(["120", "732", "120", "28"]);
    flex.unmount();
  });

  test("fit=false：fixed 布局下表格仍铺满父容器，剩余空间按各列基础宽度比例放大", async () => {
    const ssrShim = {
      install(app: any) {
        app.provide(Symbol.for("v-scx"), { modules: new Set() });
      },
    };
    // name 只设 minWidth：fit=false 时不走弹性列分配，与定宽列一起按比例放大
    const wrapper = mount(Table, {
      props: {
        columns: [
          { dataIndex: "priority", title: "优先级", width: 120, fixed: "left" },
          { dataIndex: "name", title: "名称", minWidth: 200 },
          { dataIndex: "status", title: "状态", width: 120, fixed: "right" },
        ],
        data: [{ priority: "P0", name: "任务 A", status: "进行中" }],
        pagination: false,
        extraColumn: true,
        fit: false,
        tableLayout: "fixed",
      },
      global: { plugins: [ssrShim] },
    });
    await nextTick();
    fireResize();
    await nextTick();

    // 120/200/120 按比例分剩余 1000-468=532 → 265/441/266，extra 钉死 28，
    // 表格铺满父容器（element 此处会缩为 468px，cedar 按业务要求不缩）
    expect(wrapper.find("table.c-table-element").attributes("style")).toContain(
      "width: 1000px",
    );
    const colWidths = wrapper
      .findAll("colgroup col")
      .map((col) => col.attributes("width"));
    expect(colWidths).toEqual(["265", "441", "266", "28"]);

    // 容器小于列宽之和 → 不压缩，保持列宽之和并开启横向滚动
    containerWidth = 400;
    fireResize();
    await nextTick();
    expect(wrapper.find("table.c-table-element").attributes("style")).toContain(
      "width: 468px",
    );

    wrapper.unmount();
  });
});
