<template>
  <CDrawer
    :open="open"
    :title="existing ? messages.edit : messages.newEvent"
    width="var(--c-scheduler-editor-width)"
    :footer="false"
    :closable="!pending"
    :overlay-closable="!pending"
    :esc-to-close="!pending"
    @update:open="emit('update:open', $event)"
  >
    <CAlert
      v-if="errorMessage && !$slots.default"
      status="danger"
      role="alert"
      :class="n('editor-error')"
      >{{ errorMessage }}</CAlert
    >
    <slot
      :action="existing ? 'edit' : 'create'"
      :event="draft"
      :error="slotError"
      :error-message="slotErrorMessage"
      :save="save"
      :remove="remove"
      :close="close"
      :readonly="readonly"
      :pending="pending"
    >
      <CForm :model="draft" layout="vertical" @submit="save()">
        <CFormItem :label="messages.titleLabel">
          <CInput
            v-model="draft.title"
            :placeholder="messages.untitled"
            :input-attrs="{ 'aria-label': messages.titleLabel }"
            :aria-label="messages.titleLabel"
            :disabled="readonly || pending"
          />
        </CFormItem>
        <CFormItem :label="messages.description">
          <CTextarea
            v-model="draft.description"
            :aria-label="messages.description"
            :disabled="readonly || pending"
          />
        </CFormItem>
        <CFormItem
          v-if="
            resourceEnabled ||
            resources.length ||
            requestResources ||
            draft.resourceIds?.length
          "
          :label="messages.resources"
        >
          <SchedulerResourceSelect
            v-model="draft.resourceIds"
            :resources="resources"
            :store="store"
            :request="requestResources"
            :label="messages.resources"
            :messages="messages"
            :disabled="readonly || pending"
            @error="(error, context) => emit('resource-error', error, context)"
          />
        </CFormItem>
        <CFormItem>
          <CCheckbox v-model="scheduled" :disabled="readonly || pending">{{
            messages.scheduled
          }}</CCheckbox>
        </CFormItem>
        <template v-if="scheduled">
          <CFormItem
            ><CCheckbox
              v-model="draft.allDay"
              :disabled="readonly || pending"
              >{{ messages.allDay }}</CCheckbox
            ></CFormItem
          >
          <CFormItem :label="messages.start" required>
            <CDate
              v-model="start"
              :show-time="!draft.allDay"
              value-format="Date"
              :aria-label="messages.start"
              :disabled="readonly || pending"
            />
          </CFormItem>
          <CFormItem :label="messages.end" required>
            <CDate
              v-model="end"
              :show-time="!draft.allDay"
              value-format="Date"
              :aria-label="messages.end"
              :disabled="readonly || pending"
            />
          </CFormItem>
        </template>
        <CAlert
          v-if="invalid"
          status="danger"
          :class="n('editor-error')"
          role="alert"
          >{{ messages.noTitle }}</CAlert
        >
        <div :class="n('editor-actions')">
          <CButton
            v-if="existing && !readonly"
            status="danger"
            variant="text"
            :disabled="pending"
            @click="remove"
            >{{ messages.remove }}</CButton
          >
          <CButton :disabled="pending" @click="close">{{
            messages.cancel
          }}</CButton>
          <CButton
            v-if="!readonly"
            status="primary"
            html-type="submit"
            :loading="pending"
            >{{ messages.save }}</CButton
          >
        </div>
      </CForm>
    </slot>
  </CDrawer>
</template>

<script setup lang="ts">
import { computed, ref, useSlots, watch } from "vue";
import CDrawer from "../../drawer";
import CForm, { FormItem as CFormItem } from "../../form";
import CInput from "../../input";
import CTextarea from "../../textarea";
import SchedulerResourceSelect from "./scheduler-resource-select.vue";
import { useSchedulerResources } from "../use-resources";
import type { SchedulerResourceStore } from "../use-resources";
import type {
  SchedulerRequestResources,
  SchedulerResourceErrorContext,
  SchedulerEditorSlotProps,
} from "../props";
import CCheckbox from "../../checkbox";
import CDate from "../../date";
import CButton from "../../button";
import CAlert from "../../alert";
import { createNamespace } from "../../_utils/global-config";
import {
  cloneSchedulerEvent,
  schedulerDate,
  schedulerDateKey,
  validateSchedulerEvent,
  SchedulerError,
} from "../core";
import type { SchedulerEvent, SchedulerResource } from "../core";
import type { SchedulerMessages } from "../locale";

defineOptions({ name: createNamespace("scheduler-editor").name });
const { n } = createNamespace("scheduler");
const props = defineProps<{
  open: boolean;
  event: SchedulerEvent;
  existing: boolean;
  resources: SchedulerResource[];
  resourceStore?: SchedulerResourceStore;
  resourceEnabled?: boolean;
  requestResources?: SchedulerRequestResources;
  readonly: boolean;
  pending: boolean;
  messages: SchedulerMessages;
  errorMessage?: string;
  error?: SchedulerError;
}>();
const emit = defineEmits<{
  "update:open": [open: boolean];
  save: [event: SchedulerEvent];
  remove: [event: SchedulerEvent];
  "resource-error": [error: unknown, context: SchedulerResourceErrorContext];
}>();
defineSlots<{
  default(props: SchedulerEditorSlotProps): unknown;
}>();
const slots = useSlots();
const draft = ref(cloneSchedulerEvent(props.event));
const store =
  props.resourceStore ??
  useSchedulerResources(
    () => props.resources,
    () => undefined,
  );
const start = ref<Date>();
const end = ref<Date>();
const scheduled = ref(false);
const invalid = ref(false);
const slotError = computed(() =>
  invalid.value
    ? new SchedulerError("invalid-event", props.messages.noTitle)
    : props.error,
);
const slotErrorMessage = computed(() =>
  invalid.value ? props.messages.noTitle : props.errorMessage,
);
watch(
  () => [props.event, props.open],
  () => {
    // Preserve the submitted draft during the drawer's closing transition.
    if (!props.open) return;
    draft.value = cloneSchedulerEvent(props.event);
    scheduled.value = props.event.start != null;
    start.value =
      props.event.start == null ? undefined : schedulerDate(props.event.start);
    end.value =
      props.event.end == null ? undefined : schedulerDate(props.event.end);
    invalid.value = false;
  },
  { immediate: true },
);
function save(customEvent?: SchedulerEvent) {
  if (props.readonly || props.pending) return;
  try {
    const event = cloneSchedulerEvent(customEvent ?? draft.value);
    event.title = event.title.trim() || props.messages.untitled;
    if (event.id !== props.event.id) throw new Error("Draft ID cannot change");
    if (!customEvent && !slots.default) {
      event.title = event.title.trim();
      event.start =
        scheduled.value && start.value
          ? event.allDay
            ? schedulerDateKey(start.value)
            : schedulerDate(start.value).toISOString()
          : undefined;
      event.end =
        scheduled.value && end.value
          ? event.allDay
            ? schedulerDateKey(end.value)
            : schedulerDate(end.value).toISOString()
          : undefined;
      if (scheduled.value && (event.start == null || event.end == null))
        throw new Error("Missing time");
      if (!scheduled.value) event.allDay = false;
    }
    validateSchedulerEvent(event);
    invalid.value = false;
    emit("save", event);
  } catch {
    invalid.value = true;
  }
}
function remove() {
  if (props.existing && !props.readonly && !props.pending)
    emit("remove", props.event);
}
function close() {
  if (!props.pending) emit("update:open", false);
}
</script>
