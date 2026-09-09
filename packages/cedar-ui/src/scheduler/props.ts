import type { ExtractPublicPropTypes, PropType } from "vue";
import { defineListenerProp } from "../_utils/components";
import { schedulerModes } from "./core";
import type {
  SchedulerEvent,
  SchedulerResource,
  SchedulerMode,
  SchedulerDate,
  SchedulerChangeContext,
  SchedulerError,
} from "./core";

export type SchedulerBeforeChange = (
  context: SchedulerChangeContext,
) => boolean | void | Promise<boolean | void>;
export type SchedulerEditorAction = "create" | "edit";
export type SchedulerEditorRequest = {
  event: SchedulerEvent;
  readonly: boolean;
} & (
  | { action: "create"; source: "toolbar" | "cell" | "drop" }
  | { action: "edit"; source: "event" }
);
export interface SchedulerEditorSlotProps {
  action: SchedulerEditorAction;
  event: SchedulerEvent;
  error?: SchedulerError;
  errorMessage?: string;
  readonly: boolean;
  pending: boolean;
  save: (event?: SchedulerEvent) => void;
  remove: () => void;
  close: () => void;
}
export interface SchedulerResourceQuery {
  query: string;
  cursor?: string;
  signal: AbortSignal;
}
export interface SchedulerResourcePage {
  items: SchedulerResource[];
  nextCursor?: string;
}
export type SchedulerRequestResources = (
  query: SchedulerResourceQuery,
) => SchedulerResourcePage | Promise<SchedulerResourcePage>;
export type SchedulerResolveResources = (
  ids: string[],
  context: { signal: AbortSignal },
) => SchedulerResource[] | Promise<SchedulerResource[]>;
export type SchedulerResourceErrorContext =
  | { type: "search"; query: string; cursor?: string }
  | { type: "resolve"; ids: string[] };
/** 可重复拖入的新增日程模板；duration 为正数分钟，默认 step。 */
export type SchedulerEventTemplate = Pick<
  SchedulerEvent,
  "title" | "description" | "color" | "taskId" | "resourceIds"
> & { duration?: number };
export const schedulerProps = {
  /** 日程主值；省略时使用非受控状态。 */
  modelValue: { type: Array as PropType<SchedulerEvent[]>, default: undefined },
  /** 初始日程，非受控模式使用。 */
  defaultValue: {
    type: Array as PropType<SchedulerEvent[]>,
    default: () => [],
  },
  /** 当前视图形态。 */
  mode: {
    type: String as PropType<SchedulerMode>,
    validator: (value: SchedulerMode) => schedulerModes.includes(value),
  },
  /** 默认视图形态。 */
  defaultMode: {
    type: String as PropType<SchedulerMode>,
    default: "week",
    validator: (value: SchedulerMode) => schedulerModes.includes(value),
  },
  /** 当前定位日期，使用本地日历日期。 */
  date: [Date, String, Number] as PropType<SchedulerDate>,
  /** 初始定位日期。 */
  defaultDate: {
    type: [Date, String, Number] as PropType<SchedulerDate>,
    default: () => new Date(),
  },
  /** 当前可见资源行/列及本地选项，不要求全量目录。 */
  resources: {
    type: Array as PropType<SchedulerResource[]>,
    default: () => [],
  },
  /** 资源字段显示名，如设备、会议室；默认使用语言包的“资源”。 */
  resourceLabel: String,
  /** 远程搜索及游标分页；不改变当前可见资源行/列。 */
  requestResources: Function as PropType<SchedulerRequestResources>,
  /** 按 ID 批量补全资源名称；不要求这些 ID 出现在候选列表中。 */
  resolveResources: Function as PropType<SchedulerResolveResources>,
  /** 可切换的视图。 */
  modes: {
    type: Array as PropType<SchedulerMode[]>,
    default: () => [...schedulerModes],
  },
  /** 一周起始日，0 为周日。 */
  firstDayOfWeek: {
    type: Number,
    default: 1,
    validator: (value: number) =>
      Number.isInteger(value) && value >= 0 && value <= 6,
  },
  /** 时间网格起始小时。 */
  startHour: {
    type: Number,
    default: 8,
    validator: (value: number) =>
      Number.isInteger(value) && value >= 0 && value < 24,
  },
  /** 时间网格结束小时（不含）。 */
  endHour: {
    type: Number,
    default: 20,
    validator: (value: number) =>
      Number.isInteger(value) && value > 0 && value <= 24,
  },
  /** 拖拽吸附及新建时间间隔，单位分钟。 */
  step: {
    type: Number,
    default: 30,
    validator: (value: number) =>
      Number.isInteger(value) && value > 0 && value <= 60 && 60 % value === 0,
  },
  /** 只读，允许查看和导航，禁止修改日程。 */
  readonly: { type: Boolean, default: false },
  /** 禁用组件交互。 */
  disabled: { type: Boolean, default: false },
  /** 数据加载中，禁止提交修改。 */
  loading: { type: Boolean, default: false },
  /** 显示资源筛选与未排期列表。 */
  showSidebar: { type: Boolean, default: true },
  /** 是否允许同一资源在同一时段存在多个日程。 */
  allowOverlap: { type: Boolean, default: true },
  /** 启用内置编辑抽屉；关闭后由 editor-request 接管新建与编辑。 */
  editable: { type: Boolean, default: true },
  /** 提交前异步拦截；false 取消，异常触发 change-error。 */
  beforeChange: defineListenerProp<SchedulerBeforeChange>(),
};
export type SchedulerProps = ExtractPublicPropTypes<typeof schedulerProps>;
