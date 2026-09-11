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

import { useSchedulerDataSource } from "../types/scheduler";
import type {
  SchedulerRequestEvents,
  SchedulerDataSourceOptions,
} from "../types/scheduler";
const requestEvents: SchedulerRequestEvents = async ({
  start,
  end,
  resourceIds,
  signal,
}) => {
  const aborted: boolean = signal.aborted;
  void [start, end, resourceIds, aborted];
  return value;
};
const dataSourceOptions: SchedulerDataSourceOptions = {
  requestEvents,
  range: () => range,
};
const source = useSchedulerDataSource(dataSourceOptions);
const refreshed: Promise<boolean> = source.refresh();
source.events.value = value;
// @ts-expect-error request must return an array of Scheduler events
const invalidRequest: SchedulerRequestEvents = async () => ({ items: value });
void [refreshed, invalidRequest];

import {
  expandSchedulerRecurrences,
  setSchedulerRecurrenceException,
} from "../types/scheduler/core";
import type {
  SchedulerRecurringEvent,
  SchedulerOccurrence,
} from "../types/scheduler/core";
const recurring: SchedulerRecurringEvent = {
  event: {
    id: "series",
    title: "Weekly",
    start: "2026-09-09T09:00:00",
    end: "2026-09-09T10:00:00",
  },
  rule: { frequency: "weekly", daysOfWeek: [1, 3, 5], count: 12 },
};
const occurrences: SchedulerOccurrence[] = expandSchedulerRecurrences(
  [recurring],
  range,
);
const exceptions = setSchedulerRecurrenceException([], occurrences[0]);
const unsupportedRule: SchedulerRecurringEvent["rule"] = {
  // @ts-expect-error unsupported frequencies remain rejected
  frequency: "hourly",
};
void [exceptions, unsupportedRule];

import { splitSchedulerRecurrence } from "../types/scheduler/core";
import type {
  SchedulerRecurrenceSplitResult,
  SchedulerRecurrenceSplitOptions,
} from "../types/scheduler/core";
const splitProposal: SchedulerRecurrenceSplitResult = splitSchedulerRecurrence(
  [recurring],
  exceptions,
  occurrences[0],
  {
    nextEvent: { ...occurrences[0], id: "new-series" },
    exceptionPolicy: "discard",
  },
);
const invalidSplit: SchedulerRecurrenceSplitOptions = {
  // @ts-expect-error migration needs an explicit supported exception policy
  exceptionPolicy: "migrate",
};
void [splitProposal, invalidSplit];

const monthlyRule: SchedulerRecurringEvent["rule"] = {
  frequency: "monthly",
  dayOfMonth: 31,
  overflow: "last-day",
};
const yearlyRule: SchedulerRecurringEvent["rule"] = {
  frequency: "yearly",
  monthOfYear: 11,
  weekOfMonth: 4,
  daysOfWeek: [4],
};
const badOverflow: SchedulerRecurringEvent["rule"] = {
  frequency: "monthly",
  // @ts-expect-error overflow must be an explicit supported policy
  overflow: "roll-forward",
};
void [monthlyRule, yearlyRule, badOverflow];

import {
  isSchedulerWorkingDate,
  getSchedulerCalendarDisabledRanges,
} from "../types/scheduler/core";
import type { SchedulerBusinessCalendar } from "../types/scheduler/core";
const calendar: SchedulerBusinessCalendar = {
  overrides: [{ date: "2026-02-28", working: true }],
};
const businessRule: SchedulerRecurringEvent["rule"] = {
  frequency: "monthly",
  weekOfMonth: -1,
  businessCalendar: calendar,
};
const working: boolean = isSchedulerWorkingDate(new Date(), calendar);
const closedDates = getSchedulerCalendarDisabledRanges(calendar, range);
void [businessRule, working, closedDates];

import type { SchedulerDateWorkingHours } from "../types/scheduler/core";
const dateHours: SchedulerDateWorkingHours[] = [
  {
    date: "2026-09-12",
    intervals: [{ startMinute: 540, endMinute: 720 }],
    resourceIds: ["a"],
  },
];
const dateHoursProps: import("../types/scheduler").SchedulerProps = {
  dateWorkingHours: dateHours,
};
void dateHoursProps;

import {
  getSchedulerResourceLoad,
  getSchedulerCapacityIssues,
} from "../types/scheduler/core";
import type {
  SchedulerResourceLoad,
  SchedulerCapacityIssue,
} from "../types/scheduler/core";
const capacityResource = { id: "r", label: "Device", capacity: 2 };
const resourceLoad: SchedulerResourceLoad[] = getSchedulerResourceLoad(
  [],
  capacityResource,
  range,
);
const capacityProblems: SchedulerCapacityIssue[] = getSchedulerCapacityIssues(
  { id: "u", title: "Backlog" },
  [],
  [capacityResource],
);
void [resourceLoad, capacityProblems];

import { duplicateSchedulerEvent } from "../types/scheduler/core";
const copiedEvent = duplicateSchedulerEvent(
  { id: "original", title: "Task" },
  "copy",
);
declare const duplicateInstance: import("../types/scheduler").SchedulerInstance;
const draftOpened: boolean = duplicateInstance.duplicateEvent(copiedEvent.id);
void draftOpened;

import { getSchedulerNowPosition } from "../types/scheduler/core";
const nowPosition: number | undefined = getSchedulerNowPosition(
  new Date(),
  new Date(),
  8,
  20,
);
const nowProps: import("../types/scheduler").SchedulerProps = {
  showNowIndicator: true,
};
void [nowPosition, nowProps];

import { getSchedulerVisibleDays } from "../types/scheduler/core";
const visibleDates: Date[] = getSchedulerVisibleDays(range, [0, 6]);
const hiddenProps: import("../types/scheduler").SchedulerProps = {
  hiddenDays: [0, 6],
};
void [visibleDates, hiddenProps];

import {
  filterSchedulerEventsByResources,
  setSchedulerResourceDimension,
} from "../types/scheduler/core";
import type {
  SchedulerResourceDimension,
  SchedulerResourceFilters,
} from "../types/scheduler/core";
const dimensionDefinitions: SchedulerResourceDimension[] = [
  { id: "station", label: "站" },
];
const dimensionFilter: SchedulerResourceFilters = { station: ["s1"] };
const dimensionProps: import("../types/scheduler").SchedulerProps = {
  resourceDimensions: dimensionDefinitions,
  resourceFilters: dimensionFilter,
  resourceDimension: "station",
  defaultResourceFilters: {},
  defaultResourceDimension: "station",
};
const dimensionMatches = filterSchedulerEventsByResources(
  [],
  [{ id: "s1", label: "北站", dimensionId: "station" }],
  dimensionFilter,
);
const dimensionIds = setSchedulerResourceDimension(
  [],
  "station",
  ["s1"],
  [{ id: "s1", label: "北站", dimensionId: "station" }],
);
void [dimensionProps, dimensionMatches, dimensionIds];

import {
  createSchedulerResourceRows,
  moveSchedulerResourceRow,
} from "../types/scheduler/core";
import type {
  SchedulerResourceRow,
  SchedulerCell,
} from "../types/scheduler/core";
const crossProps: import("../types/scheduler").SchedulerProps = {
  resourceGroupDimensions: ["station", "person"],
};
const crossRows: SchedulerResourceRow[] = createSchedulerResourceRows(
  [],
  ["station", "person"],
);
const crossCell: SchedulerCell = {
  date: new Date(),
  resourceIds: ["s1", "p1"],
};
void [crossProps, crossRows, crossCell, moveSchedulerResourceRow];

const virtualConfig: import("../types/scheduler").SchedulerVirtualListProps = {
  height: 480,
  buffer: 10,
  estimatedSize: 80,
};
const virtualSchedulerProps: import("../types/scheduler").SchedulerProps = {
  virtualListProps: virtualConfig,
};
void virtualSchedulerProps;

const completionProps: import('../types/scheduler').SchedulerProps = {
 slotDuration:60,snapDuration:15,defaultDuration:45,dragToCreate:true,monthEventLimit:2,
 zoom:2,defaultZoom:1,showDateHeader:true,showResourceLoad:true,showAssignmentDetails:true,
 dependencies:[{id:'edge',fromId:'a',toId:'b',type:'finish-to-start',lag:15}],rulePolicy:{capacity:'warn'},
};
const detailedEvent: import('../types/scheduler/core').SchedulerEvent = {
 id:'details',title:'Assignment',resourceIds:['person'],resourceDetails:{person:{units:.5,role:'owner'}},
};
const milestoneEvent: import('../types/scheduler/core').SchedulerEvent = {id:'point',title:'Milestone',milestone:true,start:'2026-09-22T09:00:00Z',end:'2026-09-22T09:00:00Z'};
import {expandSchedulerRRule,exportSchedulerICalendar,createSchedulerMemoryProvider} from '../types/scheduler/adapters';
void [completionProps,detailedEvent,milestoneEvent,expandSchedulerRRule,exportSchedulerICalendar,createSchedulerMemoryProvider];

const stackedSchedulerProps: import("../types/scheduler").SchedulerProps = { eventLayout: "stack" };
void stackedSchedulerProps;
