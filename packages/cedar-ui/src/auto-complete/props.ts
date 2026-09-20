import type { ExtractPropTypes, PropType } from "vue";
import type { SelectFieldNames, SelectOptionGroup } from "../select/types";
import type { TriggerProps } from "../trigger";
import type { VirtualListProps } from "../_components/virtual-list-v2/interface";
import { inputProps } from "../input/props";

export interface AutoCompleteOptionData {
  value: string | number;
  label?: string;
  disabled?: boolean;
  [key: string]: unknown;
}

export type AutoCompleteOption = string | number | AutoCompleteOptionData;

export interface AutoCompleteOptionInfo {
  value: string;
  label: string;
  disabled: boolean;
  raw: AutoCompleteOptionData;
}

export type AutoCompleteFieldNames = SelectFieldNames;

export type AutoCompleteFilterOption =
  boolean | ((inputValue: string, option: AutoCompleteOptionData) => boolean);

export const autoCompleteProps = {
  modelValue: String,
  defaultValue: { type: String, default: "" },
  options: {
    type: Array as PropType<(AutoCompleteOption | SelectOptionGroup)[]>,
    default: () => [],
  },
  fieldNames: Object as PropType<AutoCompleteFieldNames>,
  filterOption: {
    type: [Boolean, Function] as PropType<AutoCompleteFilterOption>,
    default: true,
  },
  strict: { type: Boolean, default: false },
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement | null | undefined>,
  },
  triggerProps: Object as PropType<TriggerProps>,
  virtualListProps: Object as PropType<VirtualListProps>,
  variant: { ...inputProps.variant, default: "outlined" },
  size: { ...inputProps.size, default: "md" },
  clearable: inputProps.clearable,
  disabled: inputProps.disabled,
  readonly: inputProps.readonly,
  error: inputProps.error,
  placeholder: inputProps.placeholder,
  maxLength: inputProps.maxLength,
  showWordLimit: inputProps.showWordLimit,
  wordLength: inputProps.wordLength,
  wordSlice: inputProps.wordSlice,
  inputAttrs: inputProps.inputAttrs,
};

export type AutoCompleteProps = ExtractPropTypes<typeof autoCompleteProps>;
