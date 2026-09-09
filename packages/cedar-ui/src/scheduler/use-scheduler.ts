import { computed, onBeforeUnmount, ref } from "vue";
import type { ExtractPropTypes } from "vue";
import type { schedulerProps } from "./props";
import type {
  SchedulerResourceErrorContext,
  SchedulerEditorRequest,
} from "./props";
import {
  applySchedulerChange,
  cloneSchedulerEvent,
  getSchedulerConflicts,
  SchedulerError,
  schedulerDate,
} from "./core";
import type {
  SchedulerChange,
  SchedulerChangeContext,
  SchedulerEvent,
  SchedulerMode,
  SchedulerRange,
  SchedulerCell,
  SchedulerResource,
} from "./core";

export type SchedulerEmits = {
  "update:modelValue": [value: SchedulerEvent[]];
  "update:mode": [mode: SchedulerMode];
  "update:date": [date: Date];
  change: [value: SchedulerEvent[], context: SchedulerChangeContext];
  "change-error": [error: unknown, context: SchedulerChange];
  "event-click": [event: SchedulerEvent];
  "cell-click": [cell: SchedulerCell];
  "range-change": [range: SchedulerRange];
  "resource-error": [error: unknown, context: SchedulerResourceErrorContext];
  "editor-request": [request: SchedulerEditorRequest];
};
type Emit = <K extends keyof SchedulerEmits>(
  event: K,
  ...args: SchedulerEmits[K]
) => void;

export function useScheduler(
  props: Readonly<ExtractPropTypes<typeof schedulerProps>>,
  emit: Emit,
  getResource: (id: string) => SchedulerResource | undefined = (id) =>
    props.resources.find((item) => item.id === id),
) {
  const localValue = ref(props.defaultValue.map(cloneSchedulerEvent));
  const localMode = ref<SchedulerMode>(props.defaultMode);
  const localDate = ref(schedulerDate(props.defaultDate));
  const pending = ref(false);
  const error = ref<SchedulerError | undefined>();
  let alive = true;
  onBeforeUnmount(() => {
    alive = false;
  });
  const value = computed(() => props.modelValue ?? localValue.value);
  const mode = computed(() => props.mode ?? localMode.value);
  const date = computed(() => {
    const parsed = schedulerDate(props.date ?? localDate.value);
    return Number.isFinite(+parsed) ? parsed : new Date(2000, 0, 1);
  });
  const locked = computed(
    () => props.readonly || props.disabled || props.loading || pending.value,
  );
  function setMode(next: SchedulerMode) {
    if (props.disabled || !props.modes.includes(next) || next === mode.value)
      return;
    if (props.mode === undefined) localMode.value = next;
    emit("update:mode", next);
  }
  function setDate(next: Date) {
    if (props.disabled || !Number.isFinite(+next) || +next === +date.value)
      return;
    if (props.date === undefined) localDate.value = new Date(next);
    emit("update:date", new Date(next));
  }
  async function commit(change: SchedulerChange): Promise<boolean> {
    if (locked.value) return false;
    error.value = undefined;
    pending.value = true;
    const snapshot = JSON.stringify(value.value);
    const overlapSnapshot = props.allowOverlap;
    try {
      const event = cloneSchedulerEvent(change.event);
      const previous = value.value.find((item) => item.id === event.id);
      const request = {
        ...change,
        event,
        previous: previous && cloneSchedulerEvent(previous),
      };
      const next = applySchedulerChange(value.value, request);
      if (
        change.type !== "remove" &&
        event.resourceIds?.some((id) => {
          return (
            getResource(id)?.disabled && !previous?.resourceIds?.includes(id)
          );
        })
      )
        throw new SchedulerError("invalid-event", "Resource is disabled");
      const conflicts =
        change.type === "remove"
          ? []
          : getSchedulerConflicts(event, value.value);
      if (!props.allowOverlap && conflicts.length)
        throw new SchedulerError("conflict", "Resource already occupied");
      const context = { ...request, value: next, conflicts };
      const hooks =
        props.beforeChange == null
          ? []
          : Array.isArray(props.beforeChange)
            ? props.beforeChange
            : [props.beforeChange];
      for (const hook of hooks) {
        // Hooks receive detached data and cannot silently mutate the proposal.
        const hookContext = {
          ...context,
          event: cloneSchedulerEvent(event),
          previous: request.previous && cloneSchedulerEvent(request.previous),
          value: next.map(cloneSchedulerEvent),
          conflicts: conflicts.map((item) => ({
            ...item,
            resourceIds: [...item.resourceIds],
          })),
        };
        if ((await hook(hookContext)) === false) return false;
      }
      if (!alive) return false;
      if (
        props.disabled ||
        props.readonly ||
        props.loading ||
        JSON.stringify(value.value) !== snapshot ||
        (change.type !== "remove" &&
          event.resourceIds?.some(
            (id) =>
              getResource(id)?.disabled && !previous?.resourceIds?.includes(id),
          )) ||
        props.allowOverlap !== overlapSnapshot
      ) {
        throw new SchedulerError(
          "stale",
          "Data changed while waiting; retry the operation",
        );
      }
      if (props.modelValue === undefined) localValue.value = next;
      emit("update:modelValue", next.map(cloneSchedulerEvent));
      emit("change", next.map(cloneSchedulerEvent), context);
      return true;
    } catch (cause) {
      if (alive) {
        error.value =
          cause instanceof SchedulerError
            ? cause
            : new SchedulerError("rejected", "Change could not be saved");
        emit("change-error", cause, change);
      }
      return false;
    } finally {
      if (alive) pending.value = false;
    }
  }
  return {
    value,
    mode,
    date,
    pending,
    error,
    locked,
    setMode,
    setDate,
    commit,
  };
}
