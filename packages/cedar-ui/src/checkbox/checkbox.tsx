import { useChoiceRegistration } from './use-checkbox-group-methods'
import { useChoiceKeyboard } from '../checkbox/use-choice-keyboard';
import { useCheckboxControl } from '../checkbox/use-choice-control';
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  ref,
  watch,
} from "vue";
import { getPrefixCls, createNamespace } from "../_utils/global-config";
import IconHover from "../_components/IconHover.vue";
import Check from "./icon-check";
import { checkboxGroupKey } from "./context";
import { useFormItem } from "../_hooks/use-form-item";
import { checkboxProps } from "./props";

const { name } = createNamespace("checkbox");

export default defineComponent({
  name,
  components: {
    Check,
    IconHover,
  },
  props: checkboxProps,
  emits: {
    focus: (event: FocusEvent) => true,
    blur: (event: FocusEvent) => true,
    "update:modelValue": (value: boolean | (string | number | boolean)[]) =>
      true,
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param { boolean | (string | number | boolean)[] } value
     * @param {Event} ev
     */
    change: (value: boolean | (string | number | boolean)[], ev?: Event) => true,
  },
  /**
   * @zh 自定义复选框
   * @en Custom checkbox
   * @slot checkbox
   * @binding {boolean} checked
   * @binding {boolean} disabled
   * @version 2.18.0
   */
  setup(props, { emit, slots, expose }) {
    const prefixCls = getPrefixCls("checkbox");
    const checkboxRef = ref<HTMLInputElement>();
    const checkboxGroupCtx = !props.uninjectGroupContext
      ? inject(checkboxGroupKey, undefined)
      : undefined;
    const {
      mergedDisabled: _mergedDisabled,
      mergedReadonly: _mergedReadonly,
      mergedError: _mergedError,
      eventHandlers,
    } = useFormItem({
      disabled: computed(() => props.disabled ?? checkboxGroupCtx?.disabled),
      error: computed(() => props.error ?? checkboxGroupCtx?.error),
      readonly: computed(() => props.readonly ?? checkboxGroupCtx?.readonly),
    });

    const mergedDisabled = computed(
      () =>
        checkboxGroupCtx?.disabled ||
        _mergedDisabled?.value ||
        (!computedChecked.value && checkboxGroupCtx?.isMaxed),
    );
    const mergedReadonly = computed(() => checkboxGroupCtx?.readonly || _mergedReadonly.value);
    const mergedError = computed(
      () => checkboxGroupCtx?.error || _mergedError.value,
    );

    const { checked: computedChecked, toggle } = useCheckboxControl(
      props,
      (value, event) => {
        emit("update:modelValue", value);
        emit("change", value, event);
        eventHandlers.value?.onChange?.(event);
      },
      () => Boolean(mergedDisabled.value || mergedReadonly.value),
      checkboxGroupCtx ? { value: () => checkboxGroupCtx.computedValue, change: checkboxGroupCtx.handleChange } : undefined,
    );
    useChoiceRegistration(checkboxGroupCtx?.registerChoice, {
      value: () => props.value,
      disabled: () => Boolean(checkboxGroupCtx?.disabled || _mergedDisabled.value),
      readonly: () => Boolean(mergedReadonly.value),
      element: () => checkboxRef.value,
    });
    expose({
      toggle,
      focus: (options?: FocusOptions) => { if (!mergedDisabled.value) checkboxRef.value?.focus(options); },
      blur: () => checkboxRef.value?.blur(),
    });
    const keyboard = useChoiceKeyboard(() => checkboxRef.value?.click(), () => Boolean(mergedDisabled.value || mergedReadonly.value));
    const handleClick = (ev: Event) => {
      ev.stopPropagation();
      if (mergedDisabled.value || mergedReadonly.value) ev.preventDefault();
    };

    const handleChange = (e: Event) => {
      if (mergedDisabled.value || mergedReadonly.value) {
        (e.target as HTMLInputElement).checked = computedChecked.value;
        return;
      }
      toggle((e.target as HTMLInputElement).checked, e);
      nextTick(() => {
        if (
          checkboxRef.value &&
          checkboxRef.value.checked !== computedChecked.value
        ) {
          checkboxRef.value.checked = computedChecked.value;
        }
      });
    };

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-checked`]: computedChecked.value,
        [`${prefixCls}-indeterminate`]: props.indeterminate,
        [`${prefixCls}-disabled`]: mergedDisabled.value,
        [`${prefixCls}-error`]: mergedError.value,
      },
    ]);

    const handleFocus = (ev: FocusEvent) => {
      emit('focus', ev);
      eventHandlers.value?.onFocus?.(ev);
    };

    const handleBlur = (ev: FocusEvent) => {
      keyboard.reset();
      emit('blur', ev);
      eventHandlers.value?.onBlur?.(ev);
    };

    watch(computedChecked, (checked) => {
      if (checkboxRef.value) checkboxRef.value.checked = checked;
    });
    return () => (
      <label aria-disabled={mergedDisabled.value} class={cls.value}>
        <input
          ref={checkboxRef}
          type="checkbox"
          checked={computedChecked.value}
          indeterminate={props.indeterminate}
          aria-checked={props.indeterminate ? "mixed" : computedChecked.value}
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
        {(slots.checkbox ?? checkboxGroupCtx?.slots?.checkbox)?.({
          checked: computedChecked.value,
          disabled: mergedDisabled.value,
        }) ?? (
          <IconHover
            class={`${prefixCls}-icon-hover`}
            disabled={mergedDisabled.value || computedChecked.value}
          >
            <div class={`${prefixCls}-icon`}>
              {computedChecked.value && (
                <Check class={`${prefixCls}-icon-check`} />
              )}
            </div>
          </IconHover>
        )}
        {slots.default && (
          <span class={`${prefixCls}-label`}>{slots.default()}</span>
        )}
      </label>
    );
  },
});
