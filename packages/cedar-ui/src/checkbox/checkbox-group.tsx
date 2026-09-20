import {
  computed,
  defineComponent,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import { getPrefixCls, createNamespace } from "../_utils/global-config";
import { checkboxGroupKey } from "./context";
import { useFormItem } from "../_hooks/use-form-item";
import { CheckboxOption } from "./types";
import Checkbox from "./checkbox";
import { isFunction, isNumber, isString, isArray } from "../_utils/is";
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
    change: (value: (string | number | boolean)[], ev: Event) => true,
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
  setup(props, { emit, slots }) {
    const { disabled, error } = toRefs(props);
    const prefixCls = getPrefixCls("checkbox-group");
    const { mergedDisabled, mergedError, eventHandlers } = useFormItem({
      disabled,
      error,
    });

    const _value = ref(props.defaultValue);
    const computedValue = computed(() =>
      isArray(props.modelValue) ? props.modelValue : _value.value,
    );
    const isMaxed = computed(() =>
      props.max === undefined ? false : computedValue.value.length >= props.max,
    );

    const options = computed((): CheckboxOption[] => {
      return (props.options ?? []).map((option): CheckboxOption => {
        if (isString(option) || isNumber(option)) {
          return {
            label: option,
            value: option,
          } as CheckboxOption;
        }
        return option as CheckboxOption;
      });
    });

    const handleChange = (
      value: Array<string | number | boolean>,
      e: Event,
    ) => {
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, e);
      eventHandlers.value?.onChange?.(e);
    };

    provide(
      checkboxGroupKey,
      reactive({
        computedValue,
        disabled: mergedDisabled,
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

    watch(
      () => props.modelValue,
      (curValue) => {
        if (isArray(curValue)) {
          _value.value = [...curValue];
        } else {
          _value.value = [];
        }
      },
    );

    const renderOptions = () => {
      return options.value.map((option) => {
        const checked = computedValue.value.includes(option.value);
        return (
          <Checkbox
            key={option.value}
            value={option.value}
            disabled={option.disabled || (!checked && isMaxed.value)}
            indeterminate={option.indeterminate}
            modelValue={checked}
          >
            {slots.label
              ? slots.label({ data: option })
              : isFunction(option.label)
                ? option.label()
                : option.label}
          </Checkbox>
        );
      });
    };

    return () => (
      <span class={cls.value}>
        {options.value.length > 0 ? renderOptions() : slots.default?.()}
      </span>
    );
  },
});
