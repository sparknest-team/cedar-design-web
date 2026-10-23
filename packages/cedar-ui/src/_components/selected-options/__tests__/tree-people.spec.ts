import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import TreeSelect from "../../../tree-select";
import PeopleSelect from "../../../people-select";
import SelectMenu from "../../../select/SelectMenu";

const Surface = { template: '<div><slot/><slot name="content"/></div>' };
const global = {
  stubs: {
    Trigger: Surface,
    CTrigger: Surface,
    Dialog: Surface,
    CDialog: Surface,
    teleport: true,
  },
};
for (const presentation of ["click"] as const) {
  describe(`${presentation} option editors`, () => {
    it("reuses the tree field and its removable tags before confirming", async () => {
      const wrapper = mount(TreeSelect, {
        props: {
          presentation,
          defaultOpen: true,
          multiple: true,
          treeCheckable: true,
          modelValue: ["shanghai"],
          allowSearch: true,
          data: [
            {
              key: "east",
              title: "华东",
              children: [
                { key: "shanghai", title: "上海" },
                { key: "hangzhou", title: "杭州" },
              ],
            },
          ],
          treeProps: { defaultExpandAll: true },
        },
        global,
      });
      try {
        await wrapper.get("[aria-haspopup=dialog]").trigger("click");
        await flushPromises();
        const editor = wrapper.get(".c-field-presentation__body");
        expect(editor.find(".c-tree-select-trigger").exists()).toBe(true);
        expect(editor.findAll("input:not([type=checkbox])")).toHaveLength(1);
        await editor.get('[role="button"][aria-label="IconClose"]').trigger("click");
        await flushPromises();
        expect(wrapper.emitted("update:modelValue")).toBeUndefined();
        await wrapper
          .get(".c-field-presentation__footer button")
          .trigger("click");
        await flushPromises();
        expect(wrapper.emitted("update:modelValue")?.[0][0]).toEqual([]);
      } finally {
        wrapper.unmount();
      }
    });
    it("loads and selects people through the original field before confirming", async () => {
      const records = () => [
        { user_id: "lin", display_name: "林晓" },
        { user_id: "chen", display_name: "陈晨" },
      ];
      const fetch = {
        post: async () => ({
          resultCode: "success",
          data: { result_list: records() },
        }),
        get: async () => ({ resultCode: "success", data: { list: records() } }),
      };
      const wrapper = mount(PeopleSelect, {
        props: { presentation, defaultOpen: true, fetch },
        global,
      });
      try {
        await wrapper.get("[aria-haspopup=dialog]").trigger("click");
        await flushPromises();
        await flushPromises();
        const editor = wrapper.get(".c-field-presentation__body");
        expect(editor.find(".c-select-trigger").exists()).toBe(false);
        expect(editor.findAll("input")).toHaveLength(1);
        wrapper.getComponent(SelectMenu).props("controller").handleOpenChange(true);
        await flushPromises();
        await editor
          .findAll("[role=option]")
          .find((option) => option.text().includes("陈晨"))!
          .trigger("click");
        await flushPromises();
        expect(wrapper.emitted("update:modelValue")).toBeUndefined();
        await wrapper
          .get(".c-field-presentation__footer button")
          .trigger("click");
        await flushPromises();
        expect(wrapper.emitted("update:modelValue")?.[0][0]).toBe("chen");
      } finally {
        wrapper.unmount();
      }
    });
  });
}

it("keeps the latest people search when responses arrive out of order", async () => {
  const requests: { name?: string; resolve: (value: unknown) => void }[] = [];
  const fetch = {
    post: (_url: string, { params }: any) =>
      new Promise((resolve) => requests.push({ name: params.name, resolve })),
    get: async () => ({ resultCode: "success", data: { list: [] } }),
  };
  const wrapper = mount(PeopleSelect, {
    props: { presentation: "click", fetch },
    attrs: { searchDelay: 0 },
    global,
  });
  const response = (id: string, name: string) => ({
    resultCode: "success",
    data: { result_list: [{ user_id: id, display_name: name }] },
  });
  try {
    await wrapper.get("[aria-haspopup=dialog]").trigger("click");
    await flushPromises();
    requests[0].resolve(response("lin", "林晓"));
    await flushPromises();
    await wrapper.get("input").setValue("a");
    await flushPromises();
    await wrapper.get("input").setValue("ab");
    await flushPromises();
    requests
      .find((request) => request.name === "ab")!
      .resolve(response("chen", "陈晨"));
    await flushPromises();
    requests
      .find((request) => request.name === "a")!
      .resolve(response("lin", "林晓"));
    await flushPromises();
    expect(wrapper.get("[role=option]").text()).toContain("陈晨");
    expect(wrapper.findAll("[role=option]")).toHaveLength(1);
  } finally {
    wrapper.unmount();
  }
});

it("clears removable tree selections while retaining disabled selections", async () => {
  const wrapper = mount(TreeSelect, {
    props: {
      presentation: "click",
      multiple: true,
      clearable: true,
      modelValue: ["open", "locked"],
      data: [
        { key: "open", title: "可修改" },
        { key: "locked", title: "不可修改", disabled: true },
      ],
    },
    global,
  });
  try {
    await wrapper.get("[aria-haspopup=dialog]").trigger("click");
    await flushPromises();
    wrapper.getComponent((TreeSelect as any).__fieldControl).vm.onInnerClear();
    await flushPromises();
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    await wrapper.get(".c-field-presentation__footer button").trigger("click");
    await flushPromises();
    expect(wrapper.emitted("update:modelValue")?.[0][0]).toEqual(["locked"]);
  } finally {
    wrapper.unmount();
  }
});
