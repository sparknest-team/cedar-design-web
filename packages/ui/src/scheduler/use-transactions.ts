import { computed, onActivated, onDeactivated, onBeforeUnmount, ref, watch } from "vue";
import type { ComputedRef, Ref, ExtractPropTypes } from "vue";
import type { schedulerProps } from "./props";
import type { SchedulerEmit } from "./use-scheduler";
import {
  applySchedulerTransaction,
  diffSchedulerEvents,
  cloneSchedulerEvent,
  getSchedulerConflicts,
  getSchedulerAvailabilityIssues,
  getSchedulerCapacityIssues,
  getSchedulerDependencyIssues,
  SchedulerError,
} from "./core";
import type {
  SchedulerEvent,
  SchedulerChange,
  SchedulerResource,
  SchedulerTransactionContext,
  SchedulerTransactionAction,
} from "./core";
const copy = (events: readonly SchedulerEvent[]) =>
  events.map(cloneSchedulerEvent);
const fingerprint = (events: readonly SchedulerEvent[]) =>
  JSON.stringify(copy(events));
type RecordEntry = { before: SchedulerEvent[]; after: SchedulerEvent[] };

export function useSchedulerTransactions(
  props: Readonly<ExtractPropTypes<typeof schedulerProps>>,
  emit: SchedulerEmit,
  value: ComputedRef<SchedulerEvent[]>,
  localValue: Ref<SchedulerEvent[]>,
  getResource: (id: string) => SchedulerResource | undefined,
  getUntitled: () => string,
) {
  const warnings = ref<SchedulerError[]>([]);
  const pending = ref(false),
    error = ref<SchedulerError>();
  const undoStack = ref<RecordEntry[]>([]),
    redoStack = ref<RecordEntry[]>([]);
  let alive = true;
  let operation = 0;
  const retire = () => { operation++; pending.value = false; awaiting = undefined; };
  let dataRevision = 0;
  let baseline = fingerprint(value.value);
  let awaiting: { expected: string; accept: () => void } | undefined;
  onDeactivated(() => { alive = false; retire(); });
  onActivated(() => { alive = true; });
  onBeforeUnmount(() => {
    retire();
    alive = false;
    awaiting = undefined;
  });
  const locked = computed(
    () => props.readonly || props.disabled || pending.value,
  );
  const limit = () =>
    Number.isInteger(props.historyLimit) && props.historyLimit > 0
      ? props.historyLimit
      : 20;
  function clearHistory() {
    undoStack.value = [];
    redoStack.value = [];
    awaiting = undefined;
  }
  function acceptValue(current: string) {
    if (awaiting?.expected === current) {
      const accept = awaiting.accept;
      awaiting = undefined;
      baseline = current;
      accept();
    } else if (current !== baseline) {
      clearHistory();
      baseline = current;
    }
  }
  watch(
    value,
    (events) => {
      dataRevision++;
      acceptValue(fingerprint(events));
    },
    {
      deep: true,
      flush: "sync",
    },
  );
  watch(
    () => props.history,
    () => clearHistory(),
  );
  watch(
    () => props.historyLimit,
    () => {
      undoStack.value = undoStack.value.slice(-limit());
      redoStack.value = redoStack.value.slice(-limit());
    },
  );
  const canUndo = computed(
    () =>
      !!props.history && !locked.value && !awaiting && !!undoStack.value.length,
  );
  const canRedo = computed(
    () =>
      !!props.history && !locked.value && !awaiting && !!redoStack.value.length,
  );
  const detach = (
    context: SchedulerTransactionContext,
  ): SchedulerTransactionContext => ({
    action: context.action,
    previousValue: copy(context.previousValue),
    value: copy(context.value),
    changes: context.changes.map((c) => ({
      ...c,
      event: cloneSchedulerEvent(c.event),
      previous: c.previous && cloneSchedulerEvent(c.previous),
      value: copy(c.value),
      conflicts: c.conflicts.map((x) => ({
        ...x,
        resourceIds: [...x.resourceIds],
      })),
    })),
  });
  async function run(
    input: readonly SchedulerChange[],
    action: SchedulerTransactionAction = "change",
    record?: RecordEntry,
  ): Promise<boolean> {
    if (!alive || locked.value) return false;
    const ticket = ++operation;
    pending.value = true;
    warnings.value = [];
    error.value = undefined;
    awaiting = undefined;
    const revision = dataRevision;
    const before = copy(value.value),
      snapshot = fingerprint(before);
    const rules = JSON.stringify([
      props.dependencies,
      props.rulePolicy,
      props.allowOverlap,
      props.workingHours,
      props.dateWorkingHours,
      props.disabledRanges,
    ]);
    let context: SchedulerTransactionContext = {
      action,
      previousValue: before,
      value: before,
      changes: [],
    };
    try {
      const changes = input.map((c) => ({
        ...c,
        event: cloneSchedulerEvent(c.event),
        previous: before.find((e) => e.id === c.event.id),
      }));
      for (const c of changes)
        if (c.type !== "remove")
          c.event.title = c.event.title.trim() || getUntitled();
      context.changes = changes.map((c) => ({
        ...c,
        value: copy(before),
        conflicts: [],
      }));
      let next = applySchedulerTransaction(before, changes);
      if (record) {
        const target = action === "undo" ? record.before : record.after;
        const byId = new Map(next.map((e) => [e.id, e]));
        next = target.map((e) => byId.get(e.id)!);
      }
      const resourceIds = [
        ...new Set(
          changes
            .filter((c) => c.type !== "remove")
            .flatMap((c) => c.event.resourceIds ?? []),
        ),
      ].sort();
      const capacities = () =>
        JSON.stringify(
          resourceIds.map((id) => [id, getResource(id)?.capacity]),
        );
      const capacitySnapshot = capacities();
      const capacityResources = resourceIds
        .map((id) => getResource(id))
        .filter((r): r is SchedulerResource => !!r);
      const resourceBlocked = () =>
        changes.some(
          (c) =>
            c.type !== "remove" &&
            c.event.resourceIds?.some(
              (id) =>
                getResource(id)?.disabled &&
                !c.previous?.resourceIds?.includes(id),
            ),
        );
      if (resourceBlocked())
        throw new SchedulerError("invalid-event", "Resource is disabled");
      context = {
        action,
        previousValue: before,
        value: next,
        changes: changes.map((c) => ({
          ...c,
          value: next,
          conflicts:
            c.type === "remove" ? [] : getSchedulerConflicts(c.event, next),
        })),
      };
      if (getSchedulerDependencyIssues(next, props.dependencies).length)
        throw new SchedulerError(
          "dependency",
          "Dependency order is invalid or cyclic",
        );
      const notices: SchedulerError[] = [];
      const handle = (issue: SchedulerError) => {
        const policy =
          props.rulePolicy[
            issue.code as "capacity" | "unavailable" | "conflict"
          ];
        // Invalid availability configuration must never be downgraded.
        if (issue.issues?.some((item) => item.code === "invalid-config"))
          throw issue;
        if (policy === "allow") return;
        if (policy === "warn") {
          notices.push(issue);
          return;
        }
        throw issue;
      };
      for (const c of context.changes) {
        if (!props.allowOverlap && c.conflicts.length)
          handle(new SchedulerError("conflict", "Resource already occupied"));
        if (c.type !== "remove") {
          const capacityIssues = getSchedulerCapacityIssues(
            c.event,
            next,
            capacityResources,
          );
          if (capacityIssues.length)
            handle(
              new SchedulerError(
                "capacity",
                "Resource capacity exceeded",
                undefined,
                capacityIssues,
              ),
            );
          const issues = getSchedulerAvailabilityIssues(c.event, props);
          if (issues.length)
            handle(
              new SchedulerError(
                "unavailable",
                "Outside resource availability",
                issues,
              ),
            );
        }
      }
      if (props.beforeTransaction) {
        const hooks = Array.isArray(props.beforeTransaction)
          ? props.beforeTransaction
          : [props.beforeTransaction];
        for (const hook of hooks)
          if ((await hook(detach(context))) === false) return false;
      } else if (props.beforeChange) {
        if (changes.length !== 1)
          throw new SchedulerError(
            "transaction-hook-required",
            "Batch persistence requires beforeTransaction",
          );
        const hooks = Array.isArray(props.beforeChange)
          ? props.beforeChange
          : [props.beforeChange];
        for (const hook of hooks)
          if ((await hook(detach(context).changes[0])) === false) return false;
      }
      if (!alive || ticket !== operation) return false;
      if (
        props.readonly ||
        props.disabled ||
        dataRevision !== revision ||
        rules !==
          JSON.stringify([
            props.dependencies,
            props.rulePolicy,
            props.allowOverlap,
            props.workingHours,
            props.dateWorkingHours,
            props.disabledRanges,
          ]) ||
        capacities() !== capacitySnapshot ||
        resourceBlocked()
      )
        throw new SchedulerError(
          "stale",
          "Data or rules changed while waiting",
        );
      if (props.history && fingerprint(next) !== snapshot) {
        const entry = { before: copy(before), after: copy(next) };
        awaiting = {
          expected: fingerprint(next),
          accept: () => {
            if (!props.history) return;
            if (action === "undo") {
              undoStack.value.pop();
              redoStack.value = [...redoStack.value, record!].slice(-limit());
            } else if (action === "redo") {
              redoStack.value.pop();
              undoStack.value = [...undoStack.value, record!].slice(-limit());
            } else {
              undoStack.value = [...undoStack.value, entry].slice(-limit());
              redoStack.value = [];
            }
          },
        };
      }
      if (props.modelValue === undefined) {
        localValue.value = copy(next);
        acceptValue(fingerprint(localValue.value));
      }
      warnings.value = notices;
      if (notices.length) emit("rule-warning", notices);
      emit("update:modelValue", copy(next));
      if (changes.length === 1)
        emit("change", copy(next), detach(context).changes[0]);
      emit("transaction", copy(next), detach(context));
      return true;
    } catch (cause) {
      if (alive && ticket === operation) {
        error.value =
          cause instanceof SchedulerError
            ? cause
            : new SchedulerError("rejected", "Change could not be saved");
        if (input.length === 1) emit("change-error", cause, input[0]);
        emit("transaction-error", cause, detach(context));
      }
      return false;
    } finally {
      if (alive && ticket === operation) pending.value = false;
    }
  }
  async function undo() {
    if (!canUndo.value) return false;
    const record = undoStack.value[undoStack.value.length - 1];
    return run(diffSchedulerEvents(value.value, record.before), "undo", record);
  }
  async function redo() {
    if (!canRedo.value) return false;
    const record = redoStack.value[redoStack.value.length - 1];
    return run(diffSchedulerEvents(value.value, record.after), "redo", record);
  }
  return {
    pending,
    warnings,
    error,
    locked,
    commit: (change: SchedulerChange) => run([change]),
    transaction: (changes: SchedulerChange[]) => run(changes),
    undo,
    redo,
    canUndo,
    canRedo,
    clearHistory,
  };
}
