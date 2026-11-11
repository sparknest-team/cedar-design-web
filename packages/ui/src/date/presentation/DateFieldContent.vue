<template>
  <TemporalTrigger
    v-bind="popupProps"
    :popup-class="[fieldProps.popupProps?.popupClass, 'c-date-field-popover']"
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
          ><slot name="suffix-icon" v-bind="scope"><IconCalendar /></slot
        ></template>
        <template #suffix
          ><FeedbackIcon
            v-if="state.feedback.value"
            :type="state.feedback.value" /><slot name="suffix"
        /></template>
      </PickerField>
    </slot>
    <template #content>
      <div
        :id="popupId"
        class="c-date-field-panel"
        :class="{
          'c-date-field-panel--range': range,
          'c-date-field-panel--week': fieldProps.type === 'week',
          'c-date-field-panel--time': !range && panelProps.showTime,
        }"
        role="dialog"
        :aria-label="locale.placeholder(false)"
      >
        <component
          :is="DatePanel"
          v-if="state.open.value"
          :options="panelProps"
          :range="range"
          @select="(value) => state.select(value)"
          @update:picker-value="emit('update:pickerValue', $event)"
          @picker-value-change="
            (value, dates, texts) =>
              emit('picker-value-change', value, dates, texts)
          "
          @select-shortcut="emit('select-shortcut', $event)"
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
import { computed, inject, ref, useId, useSlots } from "vue";
import { IconCalendar } from "@cedar-design/icons-vue";
import FeedbackIcon from "../../_components/FeedbackIcon.vue";
import PickerField from "../../_components/picker-field/PickerField.vue";
import TemporalTrigger from "../../_components/picker-field/presentation/TemporalTrigger.vue";
import { createNamespace } from "../../_utils/global-config";
import type { DateFieldContentProps } from "../field-state";
import { useDateFieldLocale } from "./use-field-locale";
import DatePanel from "../DatePanel.vue";
import { datePresentationOptions } from "../presentation-options";
import { dateFieldPanelOptions } from "../field-panel-options";

defineOptions({
  name: createNamespace("date-field-content").name,
  inheritAttrs: false,
});
const insideFieldEditor = inject(fieldEditorPanel, false);
const props = defineProps<DateFieldContentProps>();
const emit = defineEmits([
  "update:pickerValue",
  "picker-value-change",
  "select-shortcut",
]);
const popupId = useId();
const locale = useDateFieldLocale();
const field = ref<InstanceType<typeof PickerField>>();
const popupProps = computed(() => ({
  placement: "bottom-start" as const,
  ...datePresentationOptions(props.fieldProps.popupProps),
  popupContainer:
    props.fieldProps.popupContainer !== undefined
      ? props.fieldProps.popupContainer
      : props.fieldProps.popupProps?.popupContainer,
}));
const panelProps = computed(() => ({
  ...dateFieldPanelOptions(props.fieldProps, props.range),
  modelValue: props.state.draft.value,
  defaultValue: undefined,
  disabled: props.range
    ? props.state.disabledParts.value
    : props.state.disabled.value,
  readonly: props.state.readonly.value,
}));
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
