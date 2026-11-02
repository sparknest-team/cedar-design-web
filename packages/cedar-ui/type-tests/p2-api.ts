import type {
  AutoCompleteEmits,
  AutoCompleteSlots,
  AutoCompleteExpose,
  SelectEmits,
  SelectSlots,
  SelectExpose,
} from "@cedar-design/ui";
const search: AutoCompleteEmits["search"] = ["apple", new Event("input")];
const clear: SelectEmits["change"] = [undefined];
// @ts-expect-error Select search notifications carry text, not a numeric ID.
const invalidSearch: SelectEmits["search"] = [123];
// @ts-expect-error AutoComplete change also carries the originating event.
const invalidChange: AutoCompleteEmits["change"] = ["apple"];
const autoSlots: AutoCompleteSlots = {
  option: ({ data }) => data.label,
  footer: () => "More",
};
const selectSlots: SelectSlots = {
  label: ({ data }) => data.label,
  read: ({ text }) => text,
};
function focus(auto: AutoCompleteExpose, select: SelectExpose) {
  auto.focus();
  select.blur();
}
void [
  search,
  clear,
  invalidSearch,
  invalidChange,
  autoSlots,
  selectSlots,
  focus,
];

import type { TreeSelectProps } from "@cedar-design/ui";
const tree: TreeSelectProps = { filterable: true, retainInputValue: true };
// @ts-expect-error Renamed by explicit migration; no compatibility alias.
const oldTree: TreeSelectProps = { allowSearch: true };
void [tree, oldTree];

import type {
  AutoCompleteProps as F05AutoProps,
  SelectProps as F05SelectProps,
  CascaderProps as F05CascaderProps,
} from "@cedar-design/ui";
const sensitiveAuto: F05AutoProps = { caseSensitive: true };
const sensitiveSelect: F05SelectProps = { caseSensitive: false };
const sensitiveCascader: F05CascaderProps = { caseSensitive: true };
// @ts-expect-error Removed by explicit major migration; no strict alias.
const removedStrict: F05AutoProps = { strict: true };
// @ts-expect-error The flag is a boolean, not a string.
const badSensitive: F05SelectProps = { caseSensitive: "true" };
void [
  sensitiveAuto,
  sensitiveSelect,
  sensitiveCascader,
  removedStrict,
  badSensitive,
];
import type { PeopleSelectProps as F05PeopleProps } from "@cedar-design/ui";
const sensitivePeople: F05PeopleProps = { caseSensitive: true };
const sensitiveTree: TreeSelectProps = { caseSensitive: false };
void [sensitivePeople, sensitiveTree];

import type {
  DialogBeforeClose,
  DialogConfig,
  OptionSearchField,
} from "@cedar-design/ui";
const fields: readonly OptionSearchField[] = ["value", "label"];
const searchable: F05SelectProps = { searchFields: fields };
// @ts-expect-error Only semantic value/label fields are supported; use fieldNames for business keys.
const badFields: F05SelectProps = { searchFields: ["name"] };
const guard: DialogBeforeClose = async ({ action }, _done, { signal }) =>
  !signal.aborted && action === "confirm";
const dialogGuard: DialogConfig = { beforeClose: guard };
// @ts-expect-error New guards return decisions, not strings.
const badGuard: DialogBeforeClose = async () => "allowed";
void [searchable, badFields, dialogGuard, badGuard];

import type {
  DrawerBeforeClose,
  DrawerConfig,
  PopconfirmBeforeConfirm,
  PopconfirmProps,
} from "@cedar-design/ui";
const drawerGuard: DrawerBeforeClose = async (_payload, _done, { signal }) =>
  !signal.aborted;
const drawerConfig: DrawerConfig = {
  content: "Guarded drawer",
  beforeClose: drawerGuard,
};
const confirmationGuard: PopconfirmBeforeConfirm = async (_payload, _done, { signal }) =>
  !signal.aborted;
const popbeforeConfirms: PopconfirmProps = {
  beforeConfirm: confirmationGuard,
  beforeCancel: () => undefined,
};
const badConfirmationGuard: PopconfirmBeforeConfirm = (
  _payload, done,
) => done(true);
void [drawerConfig, popbeforeConfirms, badConfirmationGuard];

import { PeopleSelect } from '@cedar-design/ui'
import type { PeopleSelectOption, PeopleSelectProps } from '@cedar-design/ui'
const person: PeopleSelectOption = { value: 'a', label: 'Alice', avatar: '/a.png' }
const peopleServices: PeopleSelectProps = {
  options: async (query, { signal }) => signal.aborted || !query ? [] : [person],
  fallbackOption: id => ({ value: id, label: person.label }),
  renderActions: ({ person, disabled }) => disabled ? null : person.label,
}
PeopleSelect.setPropsDefaults(peopleServices)
// @ts-expect-error person identities are strings
const wrongIdentity: PeopleSelectOption = { value: 1, label: 'Alice' }
const wrongRequest: PeopleSelectProps = {
  // @ts-expect-error loaders return person arrays, not response envelopes
  options: async () => ({ records: [] }),
}
void [wrongIdentity, wrongRequest]

import type { InputProps, SelectProps } from "@cedar-design/ui";
const clearInput: InputProps = { emptyValue: () => "" };
const clearSelect: SelectProps = { emptyValue: () => undefined };
const clearMultiple: SelectProps = { multiple: true, emptyValue: () => [] };
// @ts-expect-error text fields keep their string model shape
const badTextClear: InputProps = { emptyValue: 0 };
// @ts-expect-error old unpublished clear prop is removed
const oldClearName: SelectProps = { valueOnClear: "" };
void [clearInput, clearSelect, clearMultiple, badTextClear, oldClearName];

import type { SwitchProps as NullableSwitchProps, CheckboxProps as NullableCheckboxProps, UploadProps as NullableUploadProps, SliderProps as NullableSliderProps } from '@cedar-design/ui'
const nullableInput: InputProps = { modelValue: null, emptyValue: null }
const nullableSelect: SelectProps = { modelValue: null, emptyValue: () => null }
const nullableSwitch: NullableSwitchProps = { modelValue: null, emptyValue: null, clearable: true }
const nullableCheckbox: NullableCheckboxProps = { modelValue: null, emptyValue: null, clearable: true }
const nullableUpload: NullableUploadProps = { modelValue: null, emptyValue: null }
const nullableSlider: NullableSliderProps = { modelValue: null, emptyValue: null }
// @ts-expect-error Candidate loading is an options function; there is no standalone request prop.
const separateRequest: SelectProps = { request: async () => [] }
void [nullableInput, nullableSelect, nullableSwitch, nullableCheckbox, nullableUpload, nullableSlider, separateRequest]
