import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { describe, test, expect, vi } from "vitest";
import { Input, InputPassword } from "../index";

describe("Input", () => {
  test('floats an associated label only when hint is enabled and focused or nonempty', async () => {
    const wrapper = mount(Input, { props: { hint: true, placeholder: '姓名', clearable: true } })
    const input = wrapper.get('input')
    const label = wrapper.get('label')
    expect(input.attributes('placeholder')).toBeUndefined()
    expect(label.attributes('for')).toBe(input.attributes('id'))
    expect(wrapper.find('.c-field-decorator--floating').exists()).toBe(false)
    await input.trigger('focus')
    expect(wrapper.find('.c-field-decorator--floating').exists()).toBe(true)
    await input.setValue('明')
    await input.trigger('blur')
    expect(wrapper.find('.c-field-decorator--floating').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  test("render", async () => {
    const wrapper = mount(Input);
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("uses outline and controlled/uncontrolled value defaults", () => {
    const wrapper = mount(Input, { props: { defaultValue: "seed" } });

    expect(wrapper.get("input").attributes()).toMatchObject({
      type: "text",
      value: "seed",
    });
    expect(wrapper.find(".c-field-decorator--variant-outline").exists()).toBe(
      true,
    );
    expect(wrapper.find('button').exists()).toBe(false);
  });

  test("normalizes number input and forwards native attributes", () => {
    const wrapper = mount(Input, {
      props: {
        type: "number",
        inputAttrs: {
          "aria-label": "Amount",
          "data-testid": "amount",
          maxlength: 1,
        },
      },
    });

    expect(wrapper.get("input").attributes()).toMatchObject({
      type: "text",
      inputmode: "decimal",
      "aria-label": "Amount",
      "data-testid": "amount",
    });
    expect(wrapper.get("input").attributes("maxlength")).toBeUndefined();
  });

  test("forwards the shared accessibility and virtual-keyboard props", () => {
    const wrapper = mount(Input, {
      props: {
        ariaLabel: "Search",
        autofocus: true,
        enterkeyhint: "search",
      },
    });

    expect(wrapper.get("input").attributes()).toMatchObject({
      "aria-label": "Search",
      autofocus: "",
      enterkeyhint: "search",
    });
  });

  test("trims on commit and keeps change before press-enter", async () => {
    const order: string[] = [];
    const wrapper = mount(Input, {
      props: {
        modelValue: " before ",
        modelModifiers: { trim: true },
        onChange: () => order.push("change"),
        onPressEnter: () => order.push("press-enter"),
        "onUpdate:modelValue": (value: string) => {
          order.push(`update:${value}`);
          return wrapper.setProps({ modelValue: value });
        },
      },
    });

    await wrapper.get("input").trigger("focus");
    await wrapper.get("input").trigger("keydown", { key: "Enter" });
    await nextTick();
    await wrapper.get("input").trigger("blur");

    expect(order).toEqual(["update:before", "change", "press-enter"]);
  });

  test("emits committed change once on blur", async () => {
    const onChange = vi.fn();
    const wrapper = mount(Input, {
      props: {
        modelValue: "",
        onChange,
        "onUpdate:modelValue": (value: string) =>
          wrapper.setProps({ modelValue: value }),
      },
    });
    const input = wrapper.get("input");

    await input.trigger("focus");
    (input.element as HTMLInputElement).value = "a";
    await input.trigger("input");
    expect(onChange).not.toHaveBeenCalled();
    await input.trigger("blur");
    await input.trigger("blur");

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("a", expect.any(Event));
  });

  test('commits IME text once when a browser sends input after compositionend', async () => {
    const onInput = vi.fn()
    const wrapper = mount(Input, { props: { onInput } })
    const input = wrapper.get('input')
    ;(input.element as HTMLInputElement).value = '中'
    await input.trigger('compositionstart')
    await input.trigger('input')
    expect(onInput).not.toHaveBeenCalled()
    await input.trigger('compositionend')
    await input.trigger('input')
    expect(onInput).toHaveBeenCalledTimes(1)
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
  })

  test('truncates over-limit input and reports the normalized value', async () => {
    const wrapper = mount(Input, { props: { maxLength: 3 } })
    await wrapper.get('input').setValue('four')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['fou'])
    expect(wrapper.emitted('input')?.[0]?.[0]).toBe('fou')
    expect((wrapper.get('input').element as HTMLInputElement).value).toBe('fou')
  })

  test("uses a native accessible button for clearing", async () => {
    const onInput = vi.fn();
    const onChange = vi.fn();
    const onClear = vi.fn();
    const wrapper = mount(Input, {
      props: {
        modelValue: "query",
        clearable: true,
        onInput,
        onChange,
        onClear,
        "onUpdate:modelValue": (value: string) =>
          wrapper.setProps({ modelValue: value }),
      },
    });
    const clear = wrapper.get('button');

    expect(clear.attributes()).toMatchObject({
      "aria-label": "清空",
      type: "button",
    });
    await clear.trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([""]);
    expect(wrapper.emitted("clear")).toHaveLength(1);
    expect(onInput).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(onClear).toHaveBeenCalledWith(expect.any(Event));
    await wrapper.get('input').trigger('blur')
    expect(onChange).toHaveBeenCalledTimes(1)
  });

  test("does not expose clearing while readonly", () => {
    const wrapper = mount(Input, {
      props: { modelValue: "fixed", readonly: true },
    });

    expect(wrapper.get("input").attributes("readonly")).toBeDefined();
    expect(wrapper.find('button').exists()).toBe(false);
  });

  test("keeps passwords hidden by default and exposes an accessible toggle", async () => {
    const wrapper = mount(InputPassword);
    const input = wrapper.get("input");
    const toggle = wrapper.get('button');

    expect(input.attributes("type")).toBe("password");
    expect(toggle.attributes()).toMatchObject({
      "aria-label": "显示密码",
      "aria-pressed": "false",
      type: "button",
    });

    await toggle.trigger("click");
    expect(input.attributes("type")).toBe("text");
    expect(wrapper.emitted("update:visibility")?.[0]).toEqual([true]);
  });
});
