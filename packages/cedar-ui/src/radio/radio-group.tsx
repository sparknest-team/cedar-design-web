import { useRadioNavigation } from './use-radio-navigation'
import { ChoiceLabel } from '../checkbox/choice-label'
import { computed, defineComponent, provide, reactive, toRefs } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { radioGroupKey } from './context'
import { normalizeChoiceOptions } from '../checkbox/choice-options'
import { isFunction } from '../_utils/is';
import { useFormItem } from "../_hooks/use-form-item";
import { useChoiceState } from "../checkbox/choice-state";
import Radio from "./radio";
import { useSize } from "../_hooks/use-size";
import { radioGroupProps } from "./props";

const { name } = createNamespace("radio-group");

export default defineComponent({
  name,
  props: radioGroupProps,
  emits: {
    "update:modelValue": (value: import("../checkbox/choice-value-props").RadioModel) => true,
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @property { string | number | boolean } value
     */
    change: (value: import('../checkbox/choice-value-props').RadioModel, ev?: Event) => true,
  },
  /**
   * @zh radio 文案内容
   * @en radio label content
   * @slot label
   * @binding {RadioOption} data
   * @version 2.27.0
   */
  /**
   * @zh 自定义单选框
   * @en Custom radio
   * @slot radio
   * @binding {boolean} checked
   * @binding {boolean} disabled
   * @version 2.27.0
   */
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls("radio-group");
    const { size, variant, disabled, readonly, error } = toRefs(props);
    const {
      mergedDisabled,
      mergedReadonly,
      mergedSize: _mergedSize,
      mergedError,
      eventHandlers,
    } = useFormItem({
      size,
      disabled,
      readonly,
      error,
    });
    const { mergedSize } = useSize(_mergedSize);

    const { value: computedValue, commit: handleChange } = useChoiceState(
      () => props.modelValue,
      props.defaultValue,
      (value, event) => {
        emit("update:modelValue", value);
        emit("change", value, event);
        eventHandlers.value?.onChange?.(event);
      },
      () => mergedDisabled.value || mergedReadonly.value,
    );

    const navigation = useRadioNavigation(() => computedValue.value !== null);
    const options = computed(() => normalizeChoiceOptions(props.options, props.fieldNames));

    provide(
      radioGroupKey,
      reactive({
        navigation,
        value: computedValue,
        size: mergedSize,
        variant,
        disabled: mergedDisabled,
        readonly: mergedReadonly,
        error: mergedError,
        slots,
        handleChange,
      }),
    );

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}--${props.direction}`,
      props.variant === "button" && `${prefixCls}--button`,
      `${prefixCls}--size-${mergedSize.value}`,
      `${prefixCls}-size-${mergedSize.value}`,
      `${prefixCls}-direction-${props.direction}`,
      {
        [`${prefixCls}-disabled`]: mergedDisabled.value,
      },
    ]);

    const renderOptions = () => {
      return options.value.map((option) => (
        <Radio
          key={`${typeof option.value}:${String(option.value)}`}
          value={option.value}
          disabled={option.disabled}
          readonly={option.readonly}

        >
          <ChoiceLabel content={slots.label
            ? slots.label({ data: option, checked: Object.is(computedValue.value, option.value) })
            : isFunction(option.label)
              ? option.label(option, Object.is(computedValue.value, option.value))
              : option.label} />
        </Radio>
      ));
    };

    return () => (
      <span role="radiogroup" aria-label={props.ariaLabel} class={cls.value} onKeydown={navigation.keydown}>
        {props.options !== undefined ? renderOptions() : slots.default?.()}
      </span>
    );
  },
});
