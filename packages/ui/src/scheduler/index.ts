import { withInstall } from "../_utils/global-config";
import _Scheduler from "./Scheduler.vue";

const Scheduler: import('../_utils/global-config').ComponentWithInstall<typeof _Scheduler> = withInstall(_Scheduler);
export { Scheduler };
export { schedulerProps } from "./props";
export type {
  SchedulerProps,
  SchedulerVirtualListProps,
  SchedulerBeforeChange,
  SchedulerBeforeTransaction,
  SchedulerEventTemplate,
  SchedulerResourceQuery,
  SchedulerResourcePage,
  SchedulerRequestResources,
  SchedulerResolveResources,
  SchedulerResourceErrorContext,
  SchedulerEditorAction,
  SchedulerEditorRequest,
  SchedulerEditorSlotProps,
} from "./props";
export type { SchedulerEmits } from "./use-scheduler";
export type SchedulerInstance = InstanceType<typeof _Scheduler>;
export * from "./core";
export const _SchedulerComponent: typeof Scheduler = Scheduler;
export default Scheduler;

export { useSchedulerDataSource } from "./use-data-source";
export type {
  SchedulerEventQuery,
  SchedulerRequestEvents,
  SchedulerDataSourceOptions,
  SchedulerDataSource,
} from "./use-data-source";
