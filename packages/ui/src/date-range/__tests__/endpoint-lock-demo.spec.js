import { useDemoControls } from "../../../test-utils/demo-controls";
import { flushPromises, mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import DateRangePicker from "../DateRangePicker.vue";
import Demo from "../__demos__/picker/endpoint-lock.vue";

useDemoControls();

test("double locks allow external synchronization but keep interaction disabled until unlocking", async () => {
  const wrapper = mount(Demo, {
    global: { components: { CDateRangePicker: DateRangePicker } },
  });
  const model = () => JSON.parse(wrapper.get("output").text());
  const button = (text) =>
    wrapper.findAll("button").find((item) => item.text() === text);
  const date = (text) =>
    wrapper.findAll("[role=button]").find((item) => item.text() === text);
  try {
    await wrapper.findAll("input")[1].setValue(true);
    await button("外部改为18~22").trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-18", "2026-09-22"]);
    expect(button("确定").element.disabled).toBe(true);
    expect(date("16").attributes("aria-disabled")).toBe("true");
    expect(date("16").attributes("tabindex")).toBe("-1");
    await wrapper.findAll("input")[0].setValue(false);
    expect(model()).toEqual(["2026-09-18", "2026-09-22"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：0；确认次数：0",
    );
    await date("16").trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-18", "2026-09-22"]);
    await button("确定").trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-16", "2026-09-22"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：1；确认次数：1",
    );
  } finally {
    wrapper.unmount();
  }
});

test("external model replacement discards a pending draft and updates the locked baseline", async () => {
  const wrapper = mount(Demo, {
    global: { components: { CDateRangePicker: DateRangePicker } },
  });
  const model = () => JSON.parse(wrapper.get("output").text());
  const choose = async (text) => {
    await wrapper
      .findAll("[role=button]")
      .find((button) => button.text() === text)
      .trigger("click");
    await flushPromises();
  };
  try {
    await choose("20");
    expect(model()).toEqual(["2026-09-10", "2026-09-15"]);
    await wrapper
      .findAll("button")
      .find((button) => button.text() === "外部改为18~22")
      .trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-18", "2026-09-22"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：1；确认次数：0",
    );
    await choose("24");
    expect(model()).toEqual(["2026-09-18", "2026-09-22"]);
    await wrapper
      .findAll("button")
      .find((button) => button.text() === "确定")
      .trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-18", "2026-09-24"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：2；确认次数：1",
    );
  } finally {
    wrapper.unmount();
  }
});

test("locking a changed draft endpoint blocks confirmation until it is unlocked", async () => {
  const wrapper = mount(Demo, {
    global: { components: { CDateRangePicker: DateRangePicker } },
  });
  const model = () => JSON.parse(wrapper.get("output").text());
  const confirm = () =>
    wrapper.findAll("button").find((button) => button.text() === "确定");
  try {
    await wrapper
      .findAll("[role=button]")
      .find((button) => button.text() === "20")
      .trigger("click");
    await flushPromises();
    await wrapper.findAll("input")[1].setValue(true);
    await wrapper.findAll("input")[0].setValue(false);
    expect(confirm().element.disabled).toBe(true);
    expect(model()).toEqual(["2026-09-10", "2026-09-15"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：1；确认次数：0",
    );
    await wrapper.findAll("input")[1].setValue(false);
    expect(confirm().element.disabled).toBe(false);
    expect(model()).toEqual(["2026-09-10", "2026-09-15"]);
    await confirm().trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-10", "2026-09-20"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：1；确认次数：1",
    );
  } finally {
    wrapper.unmount();
  }
});

test("rejected inverted locked candidates do not poison the next valid transaction", async () => {
  const wrapper = mount(Demo, {
    global: { components: { CDateRangePicker: DateRangePicker } },
  });
  const model = () => JSON.parse(wrapper.get("output").text());
  const choose = async (text) => {
    await wrapper
      .findAll("[role=button]")
      .find((button) => button.text() === text)
      .trigger("click");
    await flushPromises();
  };
  const confirm = async () => {
    await wrapper
      .findAll("button")
      .find((button) => button.text() === "确定")
      .trigger("click");
    await flushPromises();
  };
  try {
    await choose("5");
    expect(model()).toEqual(["2026-09-10", "2026-09-15"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：0；确认次数：0",
    );
    await choose("20");
    await confirm();
    expect(model()).toEqual(["2026-09-10", "2026-09-20"]);
    await wrapper.findAll("input")[1].setValue(true);
    await wrapper.findAll("input")[0].setValue(false);
    await choose("25");
    expect(model()).toEqual(["2026-09-10", "2026-09-20"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：1；确认次数：1",
    );
    await choose("12");
    await confirm();
    expect(model()).toEqual(["2026-09-12", "2026-09-20"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：2；确认次数：2",
    );
  } finally {
    wrapper.unmount();
  }
});

test("endpoint-lock Demo preserves locked dates, defers model updates and exposes double-lock disabled cells", async () => {
  const wrapper = mount(Demo, {
    global: { components: { CDateRangePicker: DateRangePicker } },
  });
  const model = () => JSON.parse(wrapper.get("output").text());
  const date = (text) =>
    wrapper.findAll("[role=button]").find((button) => button.text() === text);
  const confirm = () =>
    wrapper.findAll("button").find((button) => button.text() === "确定");
  try {
    await date("20").trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-10", "2026-09-15"]);
    await confirm().trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-10", "2026-09-20"]);
    await wrapper.findAll("input")[1].setValue(true);
    await wrapper.findAll("input")[0].setValue(false);
    await date("12").trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-10", "2026-09-20"]);
    await confirm().trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-12", "2026-09-20"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：2；确认次数：2",
    );
    await wrapper.findAll("input")[0].setValue(true);
    expect(confirm().element.disabled).toBe(true);
    expect(date("14").attributes("aria-disabled")).toBe("true");
    expect(date("14").attributes("tabindex")).toBe("-1");
    await date("14").trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-12", "2026-09-20"]);
    expect(wrapper.get("[role=status]").text()).toBe(
      "选择次数：2；确认次数：2",
    );
    await wrapper.findAll("input")[1].setValue(false);
    await date("21").trigger("click");
    await confirm().trigger("click");
    await flushPromises();
    expect(model()).toEqual(["2026-09-12", "2026-09-21"]);
  } finally {
    wrapper.unmount();
  }
});
