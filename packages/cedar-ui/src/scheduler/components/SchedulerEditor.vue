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
      :duplicate="duplicate"
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
          v-for="dimension in resourceDimensions"
          :key="dimension.id"
          :label="dimension.label"
        >
          <SchedulerResourceSelect
            :model-value="dimensionIds(dimension.id)"
            :dimension-id="dimension.id"
            :resources="resources"
            :store="store"
            :request="requestResources"
            :label="dimension.label"
            :messages="messages"
            :disabled="readonly || pending"
            @update:model-value="setDimension(dimension.id, $event)"
            @error="(error, context) => emit('resource-error', error, context)"
          />
        </CFormItem>
        <CFormItem
          v-if="
            !resourceDimensions?.length &&
            (resourceEnabled ||
              resources.length ||
              requestResources ||
              draft.resourceIds?.length)
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
        <CFormItem
          v-if="resourceDimensions?.length && otherIds.length"
          :label="messages.otherResources"
        >
          <SchedulerResourceSelect
            :model-value="otherIds"
            :exclude-dimensions="resourceDimensions.map((d) => d.id)"
            :resources="resources"
            :store="store"
            :request="requestResources"
            :label="messages.otherResources"
            :messages="messages"
            :disabled="readonly || pending"
            @update:model-value="setOtherIds"
            @error="(error, context) => emit('resource-error', error, context)"
          />
        </CFormItem>
        <template v-if="showAssignmentDetails">
          <CFormItem
            v-for="id in draft.resourceIds"
            :key="id"
            :label="store.get(id)?.label ?? id"
          >
            <CInputNumber
              :model-value="draft.resourceDetails?.[id]?.units ?? 1"
              :min="0"
              :step="0.5"
              :aria-label="messages.assignmentUnits"
              :disabled="readonly || pending"
              @update:model-value="setDetails(id, 'units', $event)"
            />
            <CInput
              :model-value="draft.resourceDetails?.[id]?.role ?? ''"
              :placeholder="messages.assignmentRole"
              :aria-label="messages.assignmentRole"
              :disabled="readonly || pending"
              @update:model-value="setDetails(id, 'role', $event)"
            />
          </CFormItem>
        </template>
        <CFormItem
          ><CCheckbox
            v-model="draft.milestone"
            :disabled="readonly || pending"
            >{{ messages.milestone }}</CCheckbox
          ></CFormItem
        >
        <CFormItem>
          <CCheckbox v-model="scheduled" :disabled="readonly || pending">{{
            messages.scheduled
          }}</CCheckbox>
        </CFormItem>
        <template v-if="scheduled">
          <CFormItem
            ><CCheckbox
              v-model="draft.allDay"
              :disabled="readonly || pending || draft.milestone"
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
          <CFormItem v-if="!draft.milestone" :label="messages.end" required>
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
            :disabled="pending"
            @click="duplicate"
            >{{ messages.duplicate }}</CButton
          >
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
import CInputNumber from "../../input-number";
import CInput from "../../input";
import CTextarea from "../../textarea";
import SchedulerResourceSelect from "./SchedulerResourceSelect.vue";
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
  setSchedulerResourceDimension,
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
  showAssignmentDetails?: boolean;
  resourceDimensions?: import("../core").SchedulerResourceDimension[];
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
  duplicate: [];
  "resource-error": [error: unknown, context: SchedulerResourceErrorContext];
}>();
defineSlots<{
  default(props: SchedulerEditorSlotProps): unknown;
}>();
const slots = useSlots();
function setDetails(id: string, field: "units" | "role", value: unknown) {
  if (props.readonly || props.pending) return;
  if (
    field === "units" &&
    (typeof value !== "number" || !Number.isFinite(value) || value < 0)
  )
    return;
  if (field === "role" && typeof value !== "string") return;
  draft.value.resourceDetails = {
    ...draft.value.resourceDetails,
    [id]: { ...draft.value.resourceDetails?.[id], [field]: value },
  };
}
const draft = ref(cloneSchedulerEvent(props.event));
const store =
  props.resourceStore ??
  useSchedulerResources(
    () => props.resources,
    () => undefined,
  );
const dimensionIds = (id: string) =>
  (draft.value.resourceIds ?? []).filter(
    (key) => store.get(key)?.dimensionId === id,
  );
const otherIds = computed(() =>
  (draft.value.resourceIds ?? []).filter(
    (id) =>
      !props.resourceDimensions?.some(
        (d) => d.id === store.get(id)?.dimensionId,
      ),
  ),
);
function setDimension(id: string, ids: string[]) {
  if (props.readonly || props.pending) return;
  draft.value.resourceIds = setSchedulerResourceDimension(
    draft.value.resourceIds ?? [],
    id,
    ids,
    [...store.directory.value.values()],
  );
}
function setOtherIds(ids: string[]) {
  if (props.readonly || props.pending) return;
  draft.value.resourceIds = [
    ...new Set([
      ...(draft.value.resourceIds ?? []).filter(
        (id) => !otherIds.value.includes(id),
      ),
      ...ids.filter(
        (id) =>
          !props.resourceDimensions?.some(
            (d) => d.id === store.get(id)?.dimensionId,
          ),
      ),
    ]),
  ];
}
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
    if (!customEvent && !slots.default && event.milestone) {
      event.allDay = false;
      event.start =
        scheduled.value && start.value
          ? schedulerDate(start.value).toISOString()
          : undefined;
      event.end = event.start;
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
function duplicate() {
  if (props.existing && !props.readonly && !props.pending) emit("duplicate");
}
function close() {
  if (!props.pending) emit("update:open", false);
}
</script>
