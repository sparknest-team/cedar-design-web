import type { VirtualListProps } from "../_components/virtual-list-v2/interface";
export type SchedulerVirtualListProps = Pick<
  VirtualListProps,
  "height" | "estimatedSize" | "buffer"
>;
import type { ExtractPublicPropTypes, PropType } from "vue";
import { defineListenerProp } from "../_utils/components";
import { isValidSchedulerHiddenDays } from "./core/visible-days";
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
  | { action: "create"; source: "toolbar" | "cell" | "drop" | "duplicate" }
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
  duplicate: () => void;
  close: () => void;
}
export interface SchedulerResourceQuery {
  dimensionId?: string;
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
  | { type: "search"; query: string; cursor?: string; dimensionId?: string }
  | { type: "resolve"; ids: string[] };
/** 可重复拖入的新增日程模板；duration 为正数分钟，默认 step。 */
export type SchedulerEventTemplate = Pick<
  SchedulerEvent,
  | "title"
  | "description"
  | "color"
  | "accentColor"
  | "backgroundColor"
  | "backgroundPattern"
  | "metadata"
  | "taskId"
  | "resourceIds"
> & { duration?: number };
export type SchedulerBeforeTransaction = (
  context: import("./core").SchedulerTransactionContext,
) => boolean | void | Promise<boolean | void>;
export const schedulerProps = {
  /** 尚未保存的新增日程占位；仅用于视觉预览，不参与数据和校验。 */
  previewEvent: {
    type: Object as PropType<SchedulerEvent>,
    default: undefined,
  },
  /** 日程依赖关系，保存时检查前后时间与循环。 */
  dependencies: {
    type: Array as PropType<import("./core").SchedulerDependency[]>,
    default: () => [],
  },
  resourceDimensions: {
    type: Array as PropType<import("./core").SchedulerResourceDimension[]>,
    default: () => [],
  },
  resourceFilters: {
    type: Object as PropType<import("./core").SchedulerResourceFilters>,
    default: undefined,
  },
  defaultResourceFilters: {
    type: Object as PropType<import("./core").SchedulerResourceFilters>,
    default: () => ({}),
  },
  resourceDimension: { type: String, default: undefined },
  defaultResourceDimension: { type: String, default: "" },
  /** 周、月和议程的隐藏星期：0 为周日，不允许隐藏全部七天。 */
  hiddenDays: {
    type: Array as PropType<number[]>,
    default: () => [],
    validator: isValidSchedulerHiddenDays,
  },
  /** 在日、周和资源日程中显示当前本地时间。 */
  showNowIndicator: { type: Boolean, default: false },
  /** 编辑器展示每个资源的占用量与角色。 */
  showAssignmentDetails: { type: Boolean, default: false },
  /** 资源时间线显示可见日期范围内的峰值负载。 */
  showResourceLoad: { type: Boolean, default: false },
  /** 规则结果处理策略；默认阻止，allow 忽略，warn 提醒后允许。 */
  rulePolicy: {
    type: Object as PropType<import("./core").SchedulerRulePolicy>,
    default: () => ({}),
  },
  selectable: { type: Boolean, default: false },
  selectedKeys: { type: Array as PropType<string[]>, default: undefined },
  defaultSelectedKeys: { type: Array as PropType<string[]>, default: () => [] },
  history: { type: Boolean, default: false },
  historyLimit: {
    type: Number,
    default: 20,
    validator: (v: number) => Number.isInteger(v) && v > 0,
  },
  /** 统一事务保存钩子；设置后替代 beforeChange，批量操作只调用一次。 */
  beforeTransaction: defineListenerProp<SchedulerBeforeTransaction>(),
  /** 本地周工作时间；未传不限制，空数组禁止定时日程。 */
  workingHours: {
    type: Array as PropType<import("./core").SchedulerWorkingHours[]>,
    default: undefined,
  },
  /** 指定日期替换周工作时间；空 intervals 表示当天关闭。 */
  dateWorkingHours: {
    type: Array as PropType<import("./core").SchedulerDateWorkingHours[]>,
    default: () => [],
  },
  /** 半开区间；可限定资源，如设备维护、会议室停用。 */
  disabledRanges: {
    type: Array as PropType<import("./core").SchedulerDisabledRange[]>,
    default: () => [],
  },
  /** 资源时间线缩放倍数，0.5–4。 */
  zoom: { type: Number, default: undefined },
  defaultZoom: { type: Number, default: 1 },
  /** 显示资源时间线的日期分组表头。 */
  showDateHeader: { type: Boolean, default: true },
  /** 资源时间线刻度；hour 聚焦定位日，day 展示一周。 */
  scale: {
    type: String as PropType<import("./core").SchedulerScale>,
    validator: (v: string) => ["hour", "day"].includes(v),
  },
  defaultScale: {
    type: String as PropType<import("./core").SchedulerScale>,
    default: "day",
    validator: (v: string) => ["hour", "day"].includes(v),
  },
  /** 配置后启用资源时间线虚拟滚动；省略保持完整渲染。 */
  virtualListProps: {
    type: Object as PropType<SchedulerVirtualListProps>,
    default: undefined,
  },
  /** 资源时间线交叉分组，按维度顺序组合；至少两个不同维度。 */
  resourceGroupDimensions: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  /** 按稳定分组键组织时间线资源，空字符串表示未分组。 */
  resourceGroupBy: Function as PropType<
    (resource: SchedulerResource) => string
  >,
  expandedKeys: { type: Array as PropType<string[]>, default: undefined },
  /** 省略时默认展开所有分组。 */
  defaultExpandedKeys: {
    type: Array as PropType<string[]>,
    default: undefined,
  },
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
  /** 时间网格首次显示时滚动到该分钟；后续不覆盖用户位置。 */
  initialScrollMinute: {
    type: Number,
    default: undefined,
    validator: (value: number) =>
      Number.isInteger(value) && value >= 0 && value < 1440,
  },
  /** 拖拽吸附及新建时间间隔，单位分钟。 */
  /** 时间格分钟数；省略回退 step。 */
  slotDuration: { type: Number, default: undefined },
  /** 指针吸附分钟数；省略回退 step。 */
  snapDuration: { type: Number, default: undefined },
  /** 新建日程默认分钟数；省略回退 step。 */
  defaultDuration: { type: Number, default: undefined },
  /** 在日、周和资源日程空白格拖选创建。 */
  dragToCreate: { type: Boolean, default: false },
  /** 月视图每日直接展示数量；省略为 3，超出部分通过 Popover 查看。 */
  monthEventLimit: { type: Number, default: undefined },
  /** 时间网格单个重叠组直接展示数量；省略不收敛。 */
  overlapEventLimit: {
    type: Number,
    default: undefined,
    validator: (value: number) => Number.isInteger(value) && value > 0,
  },
  step: {
    type: Number,
    default: 30,
    validator: (value: number) =>
      Number.isInteger(value) && value > 0 && value <= 60 && 60 % value === 0,
  },
  /** 时间网格重叠布局；省略时周视图叠放，其余视图并排。 */
  eventLayout: {
    type: String as PropType<"stack" | "columns">,
    default: undefined,
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
