import { useRadioRegistration } from './use-radio-navigation'
import { useChoiceKeyboard } from '../checkbox/use-choice-keyboard';
import { useRadioControl } from '../checkbox/use-choice-control';
import {
  computed,
  defineComponent,
  ref,
  inject,
  watch,
  nextTick,
} from "vue";
import { getPrefixCls, createNamespace } from "../_utils/global-config";
import IconHover from "../_components/IconHover.vue";
import { radioGroupKey } from "./context";
import { useFormItem } from "../_hooks/use-form-item";
import { radioProps } from "./props";

const { name } = createNamespace("radio");

export default defineComponent({
  name,
  components: {
    IconHover,
  },
  props: radioProps,
  emits: {
    focus: (event: FocusEvent) => true,
    blur: (event: FocusEvent) => true,
    "update:modelValue": (value: string | number | boolean) => true,
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param { string | number | boolean } value
     * @param {Event} ev
     */
    change: (value: string | number | boolean, ev?: Event) => true,
  },
  /**
   * @zh 自定义单选框
   * @en Custom radio
   * @slot radio
   * @binding {boolean} checked
   * @binding {boolean} disabled
   * @version 2.18.0
   */
  setup(props, { emit, slots, expose }) {
    const prefixCls = getPrefixCls("radio");
    const radioGroupCtx = !props.uninjectGroupContext
      ? inject(radioGroupKey, undefined)
      : undefined;
    const {
      mergedDisabled: _mergedDisabled,
      mergedReadonly: _mergedReadonly,
      mergedError: _mergedError,
      eventHandlers,
    } = useFormItem({
      disabled: computed(() => props.disabled ?? radioGroupCtx?.disabled),
      error: computed(() => props.error ?? radioGroupCtx?.error),
      readonly: computed(() => props.readonly ?? radioGroupCtx?.readonly),
    });

    const inputRef = ref<HTMLInputElement | null>(null);

    const mergedVariant = computed(
      () => radioGroupCtx?.variant ?? props.variant,
    );
    const mergedDisabled = computed(
      () => radioGroupCtx?.disabled || _mergedDisabled.value,
    );
    const mergedReadonly = computed(() => radioGroupCtx?.readonly || _mergedReadonly.value);
    const mergedError = computed(
      () => radioGroupCtx?.error || _mergedError.value,
    );

    const { checked: computedChecked, select } = useRadioControl(
      props,
      (value, event) => {
        emit("update:modelValue", value);
        emit("change", value, event);
        eventHandlers.value?.onChange?.(event);
      },
      () => Boolean(mergedDisabled.value || mergedReadonly.value),
      radioGroupCtx ? { value: () => radioGroupCtx.value, change: radioGroupCtx.handleChange } : undefined,
    );
    const tabIndex = useRadioRegistration(radioGroupCtx?.navigation, {
      element: () => inputRef.value,
      checked: () => computedChecked.value,
      disabled: () => Boolean(mergedDisabled.value),
      readonly: () => Boolean(mergedReadonly.value),
      select,
    });
    expose({
      select,
      focus: (options?: FocusOptions) => { if (!mergedDisabled.value) inputRef.value?.focus(options); },
      blur: () => inputRef.value?.blur(),
    });
    watch(computedChecked, checked => {
      if (inputRef.value) inputRef.value.checked = checked;
    });

    const handleFocus = (ev: FocusEvent) => {
      emit('focus', ev);
      eventHandlers.value?.onFocus?.(ev);
    };

    const handleBlur = (ev: FocusEvent) => {
      keyboard.reset();
      emit('blur', ev);
      eventHandlers.value?.onBlur?.(ev);
    };

    const keyboard = useChoiceKeyboard(() => inputRef.value?.click(), () => Boolean(mergedDisabled.value || mergedReadonly.value));
    const handleClick = (ev: Event) => {
      ev.stopPropagation();
      if (mergedDisabled.value || mergedReadonly.value) ev.preventDefault();
    };

    const handleChange = (e: Event) => {
      if (mergedDisabled.value || mergedReadonly.value) {
        (e.target as HTMLInputElement).checked = computedChecked.value;
        return;
      }
      select(e);
      nextTick(() => {
        if (
          inputRef.value &&
          inputRef.value.checked !== computedChecked.value
        ) {
          inputRef.value.checked = computedChecked.value;
        }
      });
    };

    const cls = computed(() => [
      prefixCls,
      mergedVariant.value === "button" && `${prefixCls}--button`,
      computedChecked.value && `${prefixCls}--checked`,
      mergedDisabled.value && `${prefixCls}--disabled`,
      mergedError.value && `${prefixCls}--error`,
      {
        [`${prefixCls}-checked`]: computedChecked.value,
        [`${prefixCls}-disabled`]: mergedDisabled.value,
        [`${prefixCls}-error`]: mergedError.value,
      },
    ]);

    const defaultRadio = () => (
      <>
        <icon-hover
          class={`${prefixCls}-icon-hover`}
          disabled={mergedDisabled.value || computedChecked.value}
        >
          <span class={`${prefixCls}-icon`} />
        </icon-hover>
        {slots.default && (
          <span class={`${prefixCls}-label`}>{slots.default()}</span>
        )}
      </>
    );

    return () => (
      <label class={cls.value}>
        <input
          ref={inputRef}
          type="radio"
          tabindex={tabIndex.value}
          checked={computedChecked.value}
          value={props.value}
          class={`${prefixCls}-target`}
          disabled={mergedDisabled.value}
          aria-readonly={mergedReadonly.value || undefined}
          onClick={handleClick}
          onChange={handleChange}
          onKeydown={keyboard.keydown}
          onKeyup={keyboard.keyup}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {mergedVariant.value === "radio" ? (
          ((slots.radio ?? radioGroupCtx?.slots?.radio)?.({
            checked: computedChecked.value,
            disabled: mergedDisabled.value,
          }) ?? defaultRadio())
        ) : (
          <span class={`${prefixCls}__button-label`}>
            {slots.default && slots.default()}
          </span>
        )}
      </label>
    );
  },
});
