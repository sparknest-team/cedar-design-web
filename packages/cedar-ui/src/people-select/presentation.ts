import { h } from "vue";
import SelectionEditor from "../_components/selected-options/SelectionEditor.vue";
import { withFieldPresentation } from "../_components/field-presentation/with-field-presentation";
import Base from "./people-select";

export default withFieldPresentation(Base, {
  text: (value, props) => props.label || value || props.defaultText || "",
  editor: ({ props, attrs, value, update, emit, slots, disabled, readonly }) =>
    h(SelectionEditor, { kind: "people-select" }, () =>
      h(
        Base,
        {
          ...attrs,
          ...props,
          modelValue: value,
          presentation: "inline",
          disabled,
          readonly,
          "onUpdate:modelValue": update,
          onClear: () => emit("clear"),
        },
        slots,
      ),
    ),
});
