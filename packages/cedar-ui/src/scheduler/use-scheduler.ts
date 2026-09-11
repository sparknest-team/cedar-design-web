import { computed, ref } from "vue";
import type { ExtractPropTypes } from "vue";
import type { schedulerProps } from "./props";
import type {
  SchedulerResourceErrorContext,
  SchedulerEditorRequest,
} from "./props";
import { cloneSchedulerEvent, schedulerDate } from "./core";
import { useSchedulerTransactions } from "./use-transactions";
import type {
  SchedulerChange,
  SchedulerChangeContext,
  SchedulerEvent,
  SchedulerMode,
  SchedulerRange,
  SchedulerCell,
  SchedulerResource,
  SchedulerError,
} from "./core";

export type SchedulerEmits = {
  "rule-warning": [warnings: SchedulerError[]];
  "update:resourceFilters": [
    filters: import("./core").SchedulerResourceFilters,
  ];
  "update:resourceDimension": [dimensionId: string];
  "update:selectedKeys": [keys: string[]];
  transaction: [
    value: SchedulerEvent[],
    context: import("./core").SchedulerTransactionContext,
  ];
  "transaction-error": [
    error: unknown,
    context: import("./core").SchedulerTransactionContext,
  ];
  "update:zoom": [zoom: number];
  "update:scale": [scale: import("./core").SchedulerScale];
  "update:expandedKeys": [keys: string[]];
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
export type SchedulerEmit = <K extends keyof SchedulerEmits>(
  event: K,
  ...args: SchedulerEmits[K]
) => void;

export function useScheduler(
  props: Readonly<ExtractPropTypes<typeof schedulerProps>>,
  emit: SchedulerEmit,
  getResource: (id: string) => SchedulerResource | undefined = (id) =>
    props.resources.find((item) => item.id === id),
  getUntitled: () => string = () => "无主题",
) {
  const localValue = ref(props.defaultValue.map(cloneSchedulerEvent));
  const localMode = ref<SchedulerMode>(props.defaultMode);
  const localDate = ref(schedulerDate(props.defaultDate));
  const value = computed(() => props.modelValue ?? localValue.value);
  const mode = computed(() => props.mode ?? localMode.value);
  const date = computed(() => {
    const parsed = schedulerDate(props.date ?? localDate.value);
    return Number.isFinite(+parsed) ? parsed : new Date(2000, 0, 1);
  });
  const transactions = useSchedulerTransactions(
    props,
    emit,
    value,
    localValue,
    getResource,
    getUntitled,
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
  return {
    value,
    mode,
    date,
    ...transactions,
    setMode,
    setDate,
  };
}
