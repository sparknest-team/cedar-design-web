import type {
  SchedulerProps,
  SchedulerInstance,
  SchedulerBeforeChange,
  SchedulerEvent,
} from "@cedarjs/ui";
import {
  getSchedulerRange,
  applySchedulerChange,
} from "../types/scheduler/core";

const value: SchedulerEvent[] = [
  { id: "event", title: "Review", resourceIds: ["alice", "bob"] },
];
const beforeChange: SchedulerBeforeChange = async ({ value, conflicts }) =>
  value.length > 0 && conflicts.length === 0;
const props: SchedulerProps = {
  modelValue: value,
  mode: "resource-day",
  resources: [{ id: "alice", label: "Alice" }],
  beforeChange,
};
// @ts-expect-error view forms use Cedar mode, not an unsupported view value
const wrongMode: SchedulerProps = { mode: "timeline" };
const wrongResource: SchedulerProps = {
  // @ts-expect-error resource options require label
  resources: [{ id: "alice", name: "Alice" }],
};
// @ts-expect-error callbacks must resolve to boolean or void
const wrongHook: SchedulerBeforeChange = async () => "accept";
declare const instance: SchedulerInstance;
const result: Promise<boolean> = instance.change({
  type: "create",
  event: { id: "new", title: "New" },
});
instance.goToDate(new Date());
instance.$emit("update:mode", "week");
// @ts-expect-error named model only accepts SchedulerMode
instance.$emit("update:mode", "year");
const range = getSchedulerRange("2026-09-09", "week");
const next = applySchedulerChange(value, { type: "remove", event: value[0] });
void [props, wrongMode, wrongResource, wrongHook, result, range, next];
