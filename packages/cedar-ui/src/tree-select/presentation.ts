import { h } from "vue";
import SelectionEditor from "../_components/selected-options/SelectionEditor.vue";
import { optionValueText } from "../_components/field-presentation/option-labels";
import { withFieldPresentation } from "../_components/field-presentation/with-field-presentation";
import Base from "./TreeSelect.vue";

export default withFieldPresentation(Base, {
  editor: ({ props, attrs, value, update, emit, slots, disabled, readonly }) =>
    h(SelectionEditor, { kind: "tree-select" }, () =>
      h(
        Base,
        {
          ...attrs,
          ...props,
          modelValue: value,
          presentation: "inline",
          disabled: disabled || readonly,
          "onUpdate:modelValue": update,
          onSearch: (query: string) => emit("search", query),
          onClear: () => emit("clear"),
          "onUpdate:inputValue": (query: string) =>
            emit("update:inputValue", query),
          onInputValueChange: (query: string) =>
            emit("input-value-change", query),
        },
        slots,
      ),
    ),
  text: (value, props) =>
    optionValueText(value, {
      ...props,
      fieldNames: {
        value: props.fieldNames?.key ?? "key",
        label: props.fieldNames?.title ?? "title",
        children: props.fieldNames?.children ?? "children",
      },
    }),
});
