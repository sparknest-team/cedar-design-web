import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import ColGroup from "../table-col-group.vue";
import type { TableColumnData } from "../types";

describe("table-col-group", () => {
  test("fixed layout: column width is set via width attribute, not style", () => {
    const dataColumns: TableColumnData[] = [
      { dataIndex: "name", title: "Name", width: 120 },
      { dataIndex: "age", title: "Age", width: 80 },
    ];
    const wrapper = mount(ColGroup, {
      props: {
        dataColumns,
        operations: [],
        tableLayout: "fixed",
        columnRealWidth: { name: 120, age: 80 },
      },
    });
    const cols = wrapper.findAll("col");
    expect(cols).toHaveLength(2);
    expect(cols[0].attributes("width")).toBe("120");
    expect(cols[1].attributes("width")).toBe("80");
    expect(cols[0].attributes("style")).toBeUndefined();
    expect(cols[1].attributes("style")).toBeUndefined();
  });

  test("fixed layout: elastic columns use computed real width", () => {
    const dataColumns: TableColumnData[] = [
      { dataIndex: "name", title: "Name", width: 120 },
      { dataIndex: "address", title: "Address", minWidth: 200 },
    ];
    const wrapper = mount(ColGroup, {
      props: {
        dataColumns,
        operations: [],
        tableLayout: "fixed",
        columnRealWidth: { name: 120, address: 300 },
      },
    });
    const cols = wrapper.findAll("col");
    expect(cols[0].attributes("width")).toBe("120");
    expect(cols[1].attributes("width")).toBe("300");
  });

  test("fixed layout: resized column uses dragged width", () => {
    const dataColumns: TableColumnData[] = [
      { dataIndex: "name", title: "Name", width: 120 },
    ];
    const wrapper = mount(ColGroup, {
      props: {
        dataColumns,
        operations: [],
        tableLayout: "fixed",
        columnWidth: { name: 96 },
      },
    });
    const cols = wrapper.findAll("col");
    expect(cols[0].attributes("width")).toBe("96");
  });

  test("fixed layout: operation columns fall back to default width", () => {
    const wrapper = mount(ColGroup, {
      props: {
        dataColumns: [],
        operations: [{ name: "selection-checkbox" }],
        tableLayout: "fixed",
      },
    });
    const cols = wrapper.findAll("col");
    expect(cols).toHaveLength(1);
    expect(cols[0].attributes("width")).toBe("40");
  });

  test("auto layout: no col rendered, content-driven", () => {
    const dataColumns: TableColumnData[] = [
      { dataIndex: "name", title: "Name", width: 120 },
      { dataIndex: "address", title: "Address", minWidth: 200 },
    ];
    const wrapper = mount(ColGroup, {
      props: {
        dataColumns,
        operations: [{ name: "selection-checkbox" }],
        tableLayout: "auto",
        columnRealWidth: { name: 999, address: 999 },
      },
    });
    expect(wrapper.find("colgroup").exists()).toBe(true);
    expect(wrapper.findAll("col")).toHaveLength(0);
  });

  test("extra column keeps its explicit width under fixed layout", () => {
    const dataColumns: TableColumnData[] = [
      {
        dataIndex: "__cedar_table_extra__",
        title: "",
        width: 28,
        fixed: "right",
      },
    ];
    const wrapper = mount(ColGroup, {
      props: {
        dataColumns,
        operations: [],
        tableLayout: "fixed",
        columnRealWidth: { __cedar_table_extra__: 28 },
      },
    });
    const cols = wrapper.findAll("col");
    expect(cols[0].attributes("width")).toBe("28");
    expect(cols[0].attributes("style")).toBeUndefined();
  });
});
