import { h } from "vue"
import SelectionEditor from "../_components/selected-options/SelectionEditor.vue"
import { optionValueText } from "../_components/field-presentation/option-labels"
import { withFieldPresentation } from "../_components/field-presentation/with-field-presentation"
import Base from "./TreeSelect.vue"

const Presented: typeof Base = withFieldPresentation(Base, {
  selectionConfirmation: 'update',
  pauseSelectionWhileLoading: true,
  editor: ({ props, attrs, value, update, emit, slots, disabled, readonly }) =>
    h(SelectionEditor, { kind: "tree-select" }, () =>
      h(
        Base,
        {
          ...attrs,
          ...props,
          modelValue: value,
          editMode: "direct",
          disabled: disabled || readonly,
          "onUpdate:modelValue": update,
          onKeydown: (event: KeyboardEvent) => emit("keydown", event),
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
        value: props.fieldNames?.value ?? "value",
        label: props.fieldNames?.label ?? "label",
        children: props.fieldNames?.children ?? "children",
      },
    }),
});

export default Presented
