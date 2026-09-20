import { computed, defineComponent, ref, toRefs, watch } from "vue";
import NP from "number-precision";
import { getPrefixCls, createNamespace } from "../_utils/global-config";
import { isNumber, isUndefined } from "../_utils/is";
import { IconUp } from "@cedarjs/icons-vue/icon-up";
import { IconDown } from "@cedarjs/icons-vue/icon-down";
import { IconPlus } from "@cedarjs/icons-vue/icon-plus";
import { IconMinus } from "@cedarjs/icons-vue/icon-minus";
import CedarInput from "../input";
import CedarDivider from "../divider";
import { useFormItem } from "../_hooks/use-form-item";
import { useSize } from "../_hooks/use-size";
import { getKeyDownHandler, KEYBOARD_KEY } from "../_utils/keyboard";
import { inputNumberProps } from "./props";
import { useI18n } from "../locale";

type StepMethods = "minus" | "plus";

const FIRST_DELAY = 800;
const SPEED = 150;

NP.enableBoundaryChecking(false);

const { name, n, classes } = createNamespace("input-number");

export default defineComponent({
  name,
  props: inputNumberProps,

  emits: {
    "update:modelValue": (value: number | undefined) => true,
    /**
     * @zh 值发生改变时触发
     * @en Triggered when the value changes
     * @param { number | undefined } value
     * @param {Event} ev
     */
    change: (value: number | undefined, ev: Event) => true,
    /**
     * @zh 输入框获取焦点时触发
     * @en Triggered when the input gets focus
     * @param {FocusEvent} ev
     */
    focus: (ev: FocusEvent) => true,
    /**
     * @zh 输入框失去焦点时触发
     * @en Triggered when the input box loses focus
     * @param {FocusEvent} ev
     */
    blur: (ev: FocusEvent) => true,
    /**
     * @zh 用户点击清除按钮时触发
     * @en Triggered when the user clicks the clear button
     * @param {Event} ev
     * @version 2.23.0
     */
    clear: (ev: Event) => true,
    /**
     * @zh 输入时触发
     * @en Triggered on input
     * @param { number | undefined } value
     * @param {string} inputValue
     * @param {Event} ev
     * @version 2.27.0
     */
    input: (value: number | undefined, inputValue: string, ev: Event) => true,
    /**
     * @zh 按下键盘时触发
     * @en Triggered on keydown
     * @param {MouseEvent} ev
     * @version 2.56.0
     */
    keydown: (ev: KeyboardEvent) => true,
  },
  /**
   * @zh 前缀
   * @en Prefix
   * @slot prefix
   */
  /**
   * @zh 后缀
   * @en Suffix
   * @slot suffix
   */
  /**
   * @zh 前置标签
   * @en Prepend
   * @slot prepend
   */
  /**
   * @zh 后置标签
   * @en Append
   * @slot append
   */
  /**
   * @zh 数值增加图标
   * @en IconPlus
   * @slot plus
   */
  /**
   * @zh 数值减少图标
   * @en IconMinus
   * @slot minus
   */
  setup(props, { emit, slots }) {
    const { t } = useI18n();
    const { size, disabled } = toRefs(props);
    const prefixCls = getPrefixCls("input-number");
    const inputRef = ref<HTMLInputElement>();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      eventHandlers,
    } = useFormItem({
      size,
      disabled,
    });
    const { mergedSize } = useSize(_mergedSize);
    const mergedPrecision = computed(() => {
      if (isNumber(props.precision)) {
        const decimal = `${props.step}`.split(".")[1];
        const stepPrecision = (decimal && decimal.length) || 0;
        return Math.max(stepPrecision, props.precision);
      }
      return undefined;
    });

    const getStringValue = (number: number | undefined) => {
      if (!isNumber(number)) {
        return "";
      }

      const numString = isNumber(mergedPrecision.value)
        ? number.toFixed(mergedPrecision.value)
        : String(number);
      return props.formatter?.(numString) ?? numString;
    };

    const isIntermediateValue = (value: string) =>
      value === "" ||
      value === "-" ||
      value === "." ||
      value === "-." ||
      /^-?\d+\.$/.test(value);

    const getValueNumber = (value: string) => {
      const parsedValue = props.parser?.(value) ?? value;
      if (isIntermediateValue(parsedValue)) {
        return undefined;
      }

      const number = Number(parsedValue);
      return Number.isFinite(number) ? number : undefined;
    };

    // inner input value to display
    const _value = ref(getStringValue(props.modelValue ?? props.defaultValue));

    const valueNumber = computed(() => getValueNumber(_value.value));
    let lastCommittedValue = valueNumber.value;

    const isMin = ref(
      isNumber(valueNumber.value) && valueNumber.value <= props.min,
    );
    const isMax = ref(
      isNumber(valueNumber.value) && valueNumber.value >= props.max,
    );

    // 步长重复定时器
    let repeatTimer = 0;

    const clearRepeatTimer = () => {
      if (repeatTimer) {
        window.clearTimeout(repeatTimer);
        repeatTimer = 0;
      }
    };

    const getLegalValue = (value: number | undefined): number | undefined => {
      if (isUndefined(value)) {
        return undefined;
      }

      if (isNumber(props.min) && value < props.min) {
        value = props.min;
      }

      if (isNumber(props.max) && value > props.max) {
        value = props.max;
      }

      return isNumber(mergedPrecision.value)
        ? NP.round(value, mergedPrecision.value)
        : value;
    };

    const updateNumberStatus = (number: number | undefined) => {
      let _isMin = false;
      let _isMax = false;
      if (isNumber(number)) {
        if (number <= props.min) {
          _isMin = true;
        }
        if (number >= props.max) {
          _isMax = true;
        }
      }
      if (isMax.value !== _isMax) {
        isMax.value = _isMax;
      }
      if (isMin.value !== _isMin) {
        isMin.value = _isMin;
      }
    };

    const commitValue = (ev: Event, emitChange = true) => {
      const finalValue = getLegalValue(valueNumber.value);
      const stringValue = getStringValue(finalValue);
      const valueChanged = !Object.is(finalValue, lastCommittedValue);

      if (
        valueChanged ||
        !Object.is(finalValue, valueNumber.value) ||
        _value.value !== stringValue
      ) {
        _value.value = stringValue;
        emit("update:modelValue", finalValue);
      }
      updateNumberStatus(finalValue);
      lastCommittedValue = finalValue;

      if (emitChange && valueChanged) {
        emit("change", finalValue, ev);
      }
    };

    const handleExceedRange = () => {
      commitValue(new Event("range"), false);
    };

    watch(
      () => [props.max, props.min],
      () => {
        handleExceedRange();
        updateNumberStatus(valueNumber.value);
      },
    );

    const nextStep = (method: StepMethods, event: Event) => {
      if (
        mergedDisabled.value ||
        (method === "plus" && isMax.value) ||
        (method === "minus" && isMin.value)
      ) {
        return;
      }

      let nextValue: number | undefined;
      if (isNumber(valueNumber.value)) {
        nextValue = getLegalValue(NP[method](valueNumber.value, props.step));
      } else {
        nextValue = props.min === -Infinity ? 0 : props.min;
      }

      const valueChanged = !Object.is(nextValue, lastCommittedValue);
      _value.value = getStringValue(nextValue);
      updateNumberStatus(nextValue);
      if (valueChanged) {
        lastCommittedValue = nextValue;
        emit("update:modelValue", nextValue);
        emit("change", nextValue, event);
      }
    };

    const handleStepButton = (
      event: Event,
      method: StepMethods,
      needRepeat = false,
    ) => {
      event.preventDefault();

      if (props.readonly) return;

      inputRef.value?.focus();

      nextStep(method, event);

      // 长按时持续触发
      if (needRepeat) {
        repeatTimer = window.setTimeout(
          () => (event.target as HTMLElement).dispatchEvent(event),
          repeatTimer ? SPEED : FIRST_DELAY,
        );
      }
    };

    const handleInput = (value: string, ev: Event) => {
      value = value.trim().replace(/。/g, ".");
      value = props.parser?.(value) ?? value;
      const intermediate = isIntermediateValue(value);
      const number = getValueNumber(value);

      if (intermediate || isNumber(number)) {
        _value.value = props.formatter?.(value) ?? value;
        updateNumberStatus(valueNumber.value);

        emit("input", valueNumber.value, _value.value, ev);
        if (props.modelEvent === "input" && (value === "" || !intermediate)) {
          emit("update:modelValue", number);
        }
      }
    };

    const handleFocus = (ev: FocusEvent) => {
      emit("focus", ev);
    };

    const handleChange = (_value: string, ev: Event) => {
      commitValue(ev);
    };

    const handleBlur = (ev: FocusEvent) => {
      emit("blur", ev);
    };

    const handleClear = (ev: Event) => {
      _value.value = "";
      updateNumberStatus(undefined);
      lastCommittedValue = undefined;
      emit("update:modelValue", undefined);
      eventHandlers.value?.onChange?.(ev);
      emit("clear", ev);
    };

    const keyDownHandler = getKeyDownHandler(
      new Map([
        [
          KEYBOARD_KEY.ARROW_UP,
          (ev: Event) => {
            ev.preventDefault();
            !props.readonly && nextStep("plus", ev);
          },
        ],
        [
          KEYBOARD_KEY.ARROW_DOWN,
          (ev: Event) => {
            ev.preventDefault();
            !props.readonly && nextStep("minus", ev);
          },
        ],
      ]),
    );

    const onKeyDown = (event: KeyboardEvent) => {
      emit("keydown", event);
      if (!event.defaultPrevented) {
        keyDownHandler(event);
      }
    };

    watch(
      () => props.modelValue,
      (value: number | undefined) => {
        if (value !== valueNumber.value) {
          // TODO: verify number
          _value.value = getStringValue(value);
          updateNumberStatus(value);
          lastCommittedValue = value;
        }
      },
    );

    const renderSuffix = () => {
      if (props.readonly) {
        return null;
      }
      return (
        <>
          {slots.suffix && (
            <div class={`${prefixCls}-suffix`}>{slots.suffix?.()}</div>
          )}
          <div class={`${prefixCls}-step`}>
            <CedarDivider
              class={`${prefixCls}-step-divider-vertical`}
              orientation="vertical"
              sizeY="0"
            />
            <div class={`${prefixCls}-step-buttons`}>
              <button
                class={[
                  `${prefixCls}-step-button`,
                  {
                    [`${prefixCls}-step-button-disabled`]:
                      mergedDisabled.value || isMax.value,
                  },
                ]}
                type="button"
                tabindex="-1"
                disabled={mergedDisabled.value || isMax.value}
                aria-label={t("common.increase")}
                onMousedown={(e) => handleStepButton(e, "plus", true)}
                onMouseup={clearRepeatTimer}
                onMouseleave={clearRepeatTimer}
              >
                {slots.plus ? slots.plus?.() : <IconUp />}
              </button>
              <CedarDivider
                class={`${prefixCls}-step-divider-horizontal`}
                sizeY="0"
              />
              <button
                class={[
                  `${prefixCls}-step-button`,
                  {
                    [`${prefixCls}-step-button-disabled`]:
                      mergedDisabled.value || isMin.value,
                  },
                ]}
                type="button"
                tabindex="-1"
                disabled={mergedDisabled.value || isMin.value}
                aria-label={t("common.decrease")}
                onMousedown={(e) => handleStepButton(e, "minus", true)}
                onMouseup={clearRepeatTimer}
                onMouseleave={clearRepeatTimer}
              >
                {slots.minus ? slots.minus?.() : <IconDown />}
              </button>
            </div>
          </div>
        </>
      );
    };
    const cls = computed(() =>
      classes(n(), n(`--mode-${props.mode}`), [
        props.readonly,
        n("--readonly"),
      ]),
    );

    const renderPrependButton = () => {
      return (
        <>
          <button
            tabindex="-1"
            class={`${prefixCls}-step-button`}
            disabled={mergedDisabled.value || isMin.value}
            aria-label={t("common.decrease")}
            onMousedown={(ev: MouseEvent) =>
              handleStepButton(ev, "minus", true)
            }
            onMouseup={clearRepeatTimer}
            onMouseleave={clearRepeatTimer}
          >
            {slots.minus ? slots.minus?.() : <IconMinus />}
          </button>
          {slots.prefix && (
            <div class={`${prefixCls}-prefix`}>{slots.prefix?.()}</div>
          )}
        </>
      );
    };

    const renderAppendButton = () => {
      return (
        <>
          {slots.suffix && (
            <div class={`${prefixCls}-suffix`}>{slots.suffix?.()}</div>
          )}
          <button
            tabindex="-1"
            class={`${prefixCls}-step-button`}
            disabled={mergedDisabled.value || isMax.value}
            aria-label={t("common.increase")}
            onMousedown={(ev: MouseEvent) => handleStepButton(ev, "plus", true)}
            onMouseup={clearRepeatTimer}
            onMouseleave={clearRepeatTimer}
          >
            {slots.plus ? slots.plus?.() : <IconPlus />}
          </button>
        </>
      );
    };

    const render = () => {
      const _slots =
        props.mode === "embed"
          ? {
              prefix: slots.prefix,
              suffix: renderSuffix,
            }
          : props.mode === "button"
            ? {
                prefix: renderPrependButton,
                suffix: renderAppendButton,
              }
            : {
                prefix: slots.prefix,
                suffix: slots.suffix,
              };

      return (
        <div class={cls.value}>
          {slots.prepend && (
            <div class={`${prefixCls}-addon ${prefixCls}-prepend`}>
              {slots.prepend()}
            </div>
          )}
          <CedarInput
            key={`__cedar__${props.mode}`}
            v-slots={{ ..._slots, "clear-icon": slots["clear-icon"] }}
            ref={inputRef}
            type="text"
            clearable={props.clearable}
            size={mergedSize.value}
            modelValue={_value.value}
            placeholder={props.placeholder}
            disabled={mergedDisabled.value}
            readonly={props.readonly}
            error={props.error}
            inputAttrs={{
              role: "spinbutton",
              ...(Number.isFinite(props.max)
                ? { "aria-valuemax": props.max }
                : {}),
              ...(Number.isFinite(props.min)
                ? { "aria-valuemin": props.min }
                : {}),
              ...(isNumber(valueNumber.value)
                ? { "aria-valuenow": valueNumber.value }
                : {}),
              ...props.inputAttrs,
            }}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClear={handleClear}
            onChange={handleChange}
            onKeydown={onKeyDown}
          />
          {slots.append && (
            <div class={`${prefixCls}-addon ${prefixCls}-append`}>
              {slots.append()}
            </div>
          )}
        </div>
      );
    };

    return {
      inputRef,
      render,
    };
  },
  methods: {
    /**
     * @zh 使输入框获取焦点
     * @en Make the input box focus
     * @public
     */
    focus() {
      (this.inputRef as HTMLInputElement)?.focus();
    },
    /**
     * @zh 使输入框失去焦点
     * @en Make the input box lose focus
     * @public
     */
    blur() {
      (this.inputRef as HTMLInputElement)?.blur();
    },
  },
  render() {
    return this.render();
  },
});
