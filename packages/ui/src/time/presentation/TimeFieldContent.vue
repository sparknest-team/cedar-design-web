<template>
  <TemporalTrigger
    v-bind="popupProps"
    :popup-class="[popupProps.popupClass, 'c-time-field-popover']"
    :open="state.open.value"
    :disabled="state.disabled.value || state.readonly.value"
    :placement="popupProps.placement || 'bottom-start'"
    @open-change="state.setOpen"
  >
    <slot>
      <PickerField
        :loading="fieldProps.loading" :loading-mode="fieldProps.loadingMode"
        v-bind="{ ...$attrs, ...state.controlProps.value }"
        ref="field"
        :aria-controls="state.open.value ? popupId : undefined"
        :class="rootClass"
        :editable="
          'inputEditable' in fieldProps && fieldProps.inputEditable !== false
        "
        @commit="state.commitText"
        @clear="state.clear"
        @click="click"
        @focus="state.focus"
        @blur="state.blur"
        @keydown="keydown"
      >
        <template v-for="name in fieldSlots" #[name]="scope"
          ><slot :name="name" v-bind="scope || {}"
        /></template>
        <template #arrow-icon="scope"
          ><slot name="suffix-icon" v-bind="scope"><IconClockCircle /></slot
        ></template>
        <template #suffix
          ><FeedbackIcon
            v-if="state.feedback.value"
            :type="state.feedback.value" /><slot name="suffix"
        /></template>
      </PickerField>
    </slot>
    <template #content>
      <div :id="popupId" role="dialog" :aria-label="locale.placeholder(false)">
        <component
          :is="range ? TimeRangePicker : TimePicker"
          v-if="state.open.value"
          v-bind="panelProps"
          :model-value="panelValue ?? undefined"
          :default-value="undefined"
          :disabled="state.disabled.value"
          :readonly="state.readonly.value"
          @select="(value) => state.select(value)"
          @confirm="(value) => state.confirm(value)"
        >
          <template v-for="name in panelSlots" #[name]="scope"
            ><slot :name="name" v-bind="scope || {}"
          /></template>
        </component>
      </div>
    </template>
  </TemporalTrigger>
</template>
<script setup lang="ts">
import { fieldEditorPanel } from "../../_components/field-presentation/context";
import { isFieldOpenClick } from "../../_components/picker-field/open-trigger";
import { computed, inject, ref, useSlots } from "vue"
import { useId } from '../../_utils/vue-compat';
import { IconClockCircle } from "@cedar-design/icons-vue";
import FeedbackIcon from "../../_components/FeedbackIcon.vue";
import PickerField from "../../_components/picker-field/PickerField.vue";
import TemporalTrigger from "../../_components/picker-field/presentation/TemporalTrigger.vue";
import { createNamespace } from "../../_utils/global-config";
import type { TimeFieldContentProps } from "../field-state";
import { timePickerProps } from "../picker/props";
import TimePicker from "../picker/TimePicker.vue";
import TimeRangePicker from "../picker/TimeRangePicker.vue";
import {
  getTimePanelPresentationProps,
  getTimePopupPresentationProps,
} from "../presentation-props";
import { useTimeFieldLocale } from "./use-field-locale";

defineOptions({
  name: createNamespace("time-field-content").name,
  inheritAttrs: false,
});
const insideFieldEditor = inject(fieldEditorPanel, false);
const props = defineProps<TimeFieldContentProps>();
const popupId = useId();
const locale = useTimeFieldLocale();
const field = ref<InstanceType<typeof PickerField>>();
const panelValue = computed(() => {
  const value = props.state.draft.value;
  return Array.isArray(value) ? value.map((part) => part ?? "") : value;
});
const popupProps = computed(() => ({
  ...getTimePopupPresentationProps(props.fieldProps.popupProps),
  popupContainer:
    props.fieldProps.popupContainer !== undefined
      ? props.fieldProps.popupContainer
      : props.fieldProps.popupProps?.popupContainer,
}));
const panelProps = computed(() => {
  const options = props.fieldProps;
  const nested = props.range
    ? "timeRangePickerProps" in options
      ? options.timeRangePickerProps
      : undefined
    : "timePickerProps" in options
      ? options.timePickerProps
      : undefined;
  return {
    ...getTimePanelPresentationProps(nested),
    ...Object.fromEntries(
      Object.keys(timePickerProps)
        .filter((key) => key in options)
        .map((key) => [key, options[key as keyof typeof options]]),
    ),
  };
});
function keydown(event: KeyboardEvent) {
  if (event.key === "Escape" && (!insideFieldEditor || props.state.open.value)) {
    props.state.cancel();
    event.stopPropagation();
  }
  if (event.key === "ArrowDown" && !props.state.open.value) {
    event.preventDefault();
    props.state.setOpen(true);
  }
}
function click(event: Event) {
  props.state.click(event);
  if (
    props.state.disabled.value ||
    props.state.readonly.value ||
    !isFieldOpenClick(event, props.fieldProps.openTriggerTarget)
  )
    return;
  field.value?.commit(event);
}
const slots = useSlots();
const fieldNames = ["prefix", "selected", "separator", "clear-icon"];
const fieldSlots = computed(() =>
  fieldNames.filter((name) => Boolean(slots[name])),
);
const panelSlots = computed(() =>
  Object.keys(slots).filter(
    (name) =>
      ![...fieldNames, "default", "suffix", "suffix-icon"].includes(name),
  ),
);
defineExpose({
  focus: (index = 0) => field.value?.focus(index),
  blur: () => field.value?.blur(),
});
</script>
