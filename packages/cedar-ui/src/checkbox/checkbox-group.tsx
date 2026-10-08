import { useCheckboxGroupMethods } from './use-checkbox-group-methods'
import { ChoiceLabel } from '../checkbox/choice-label'
import { computed, defineComponent, provide, reactive } from 'vue'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { checkboxGroupKey } from './context'
import { useChoiceForm } from './use-choice-form'
import { useChoiceState, choiceLimit } from './choice-state'
import { normalizeChoiceOptions } from './choice-options'
import Checkbox from './checkbox'
import { isFunction } from '../_utils/is';
import { checkboxGroupProps } from "./props";

const { name } = createNamespace("checkbox-group");

export default defineComponent({
  name,
  props: checkboxGroupProps,
  emits: {
    "update:modelValue": (value: (string | number | boolean)[]) => true,
    /**
     * @zh 值改变时触发
     * @en Trigger when the value changes
     * @param {(string | number | boolean)[]} value
     * @param {Event} ev
     */
    change: (value: (string | number | boolean)[], ev?: Event) => true,
  },
  /**
   * @zh checkbox 文案内容
   * @en checkbox label content
   * @slot label
   * @binding {CheckboxOption} data
   * @version 2.27.0
   */
  /**
   * @zh 自定义复选框
   * @en Custom checkbox
   * @slot checkbox
   * @binding {boolean} checked
   * @binding {boolean} disabled
   * @version 2.27.0
   */
  setup(props, { emit, slots, expose }) {
    const prefixCls = getPrefixCls("checkbox-group");
    const { mergedDisabled, mergedReadonly, mergedError, eventHandlers } = useChoiceForm(props);
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
    const isMaxed = computed(() =>
      computedValue.value.length >= choiceLimit(props.max),
    );

    const options = computed(() => normalizeChoiceOptions(props.options, props.fieldNames));

    const { register: registerChoice, methods } = useCheckboxGroupMethods(
      () => computedValue.value,
      handleChange,
      () => mergedDisabled.value || mergedReadonly.value,
      () => props.max,
    );
    expose(methods);

    provide(
      checkboxGroupKey,
      reactive({
        registerChoice,
        computedValue,
        disabled: mergedDisabled,
        readonly: mergedReadonly,
        error: mergedError,
        isMaxed,
        slots,
        handleChange,
      }),
    );

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-direction-${props.direction}`,
    ]);

    const renderOptions = () => {
      return options.value.map((option) => {
        const checked = computedValue.value.includes(option.value);
        return (
          <Checkbox
            key={`${typeof option.value}:${String(option.value)}`}
            value={option.value}
            disabled={option.disabled}
            readonly={option.readonly}
            indeterminate={option.indeterminate}

          >
            <ChoiceLabel content={slots.label
              ? slots.label({ data: option, checked: checked })
              : isFunction(option.label)
                ? option.label(option, checked)
                : option.label} />
          </Checkbox>
        );
      });
    };

    return () => (
      <span class={cls.value}>
        {props.options !== undefined ? renderOptions() : slots.default?.()}
      </span>
    );
  },
});
