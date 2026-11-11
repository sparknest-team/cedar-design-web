import { defineComponent, nextTick, provide, ref } from "vue";
import { mount, enableAutoUnmount } from "@vue/test-utils";
import { describe, test, expect, vi, afterEach } from "vitest";
import { Menu, MenuOption } from "../index";
import { menuInjectionKey } from "../context";

enableAutoUnmount(afterEach);

describe("Menu", () => {
  test("render", async () => {
    const wrapper = mount(Menu);
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("support selected value context", async () => {
    const onOptionClick = vi.fn();
    const wrapper = mount(
      defineComponent({
        setup() {
          provide(menuInjectionKey, {
            popupMaxHeight: ref(true),
            modelValue: ref("Option 1"),
            submenuTrigger: ref("hover" as const),
            onOptionClick,
          });

          return () => (
            <>
              <MenuOption label="Option 1" />
              <MenuOption label="Option 2" />
            </>
          );
        },
      }),
    );

    await nextTick();
    expect(wrapper.find(".c-menu-option-selected").text()).toBe("Option 1");

    await wrapper.findAll(".c-menu-option")[1].trigger("click");
    expect(onOptionClick.mock.calls[0][0]).toBe("Option 2");
  });

  test("provide selected value to options when using v-model", async () => {
    const wrapper = mount(Menu, {
      props: {
        modelValue: "Option 1",
      },
      global: {
        stubs: {
          "c-trigger": {
            template: '<div><slot /><slot name="content" /></div>',
          },
        },
      },
      slots: {
        content: () => [
          <MenuOption label="Option 1" />,
          <MenuOption label="Option 2" />,
        ],
      },
    });

    await nextTick();
    expect(wrapper.find(".c-menu-option-selected").text()).toBe("Option 1");
  });
});
