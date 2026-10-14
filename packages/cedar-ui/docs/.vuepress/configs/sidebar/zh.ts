import type { SidebarArrayOptions, SidebarOptions } from "vuepress-theme-hope";
import componentReuse from "./component-reuse.json";

const reuseLabels: Record<string, { label: string }> = componentReuse;
function markReuse(items: SidebarArrayOptions): SidebarArrayOptions {
  return items.map((item) => {
    if (typeof item === "string") return item;
    const name = ("link" in item ? item.link : undefined)?.match(/^\/components\/([^/]+)\/$/)?.[1];
    const reuse = name ? reuseLabels[name] : undefined;
    return {
      ...item,
      ...(reuse && item.text ? { text: `${item.text} [${reuse.label}]` } : {}),
      ...("children" in item && Array.isArray(item.children) ? { children: markReuse(item.children) } : {}),
    };
  });
}

export const zhSideBar: SidebarOptions = {
  "/": markReuse([
    {
      text: "开发指南",
      link: "/guide/quickstart/",
      children: [
        {
          text: "跨端复用标记说明",
          link: "/guide/component-reuse/",
        },
        {
          text: "快速上手",
          link: "/guide/quickstart/",
        },
        {
          text: "国际化",
          link: "/guide/i18n/",
        },
        {
          text: "Roadmap",
          link: "/guide/roadmap/",
        },
        {
          text: "更新日志",
          link: "/changelog/",
        },
      ],
    },
    {
      text: "样式",
      link: "/themes/",
      children: [
        {
          text: "Design Token 与 CSS 变量分层",
          link: "/guide/design-tokens/",
        },
        {
          text: "组件 CSS 变量参考",
          link: "/guide/design-token-reference/",
        },
        {
          text: "主题定制",
          link: "/themes/",
        },
        {
          text: "StyleProvider",
          link: "/components/style-provider/",
        },
        {
          text: "色板 Palette",
          link: "/components/palette/",
        },
        {
          text: "颜色 Color",
          link: "/components/color/",
        },
        {
          text: "总览 Utilities",
          link: "/components/style/utilities/",
        },
        {
          text: "海拔 Elevation",
          link: "/components/style/elevation/",
        },
        {
          text: "字体排版 Typography",
          link: "/components/style/typography/",
        },
        {
          text: "原子化 CSS",
          link: "/components/style/atomic-css/",
        },
        {
          text: "常用写法",
          link: "/components/style/atomic-usage/",
        },
        {
          text: "Utility 规范",
          link: "/practices/utility-spec/",
        },
      ],
    },
    {
      text: "最佳实践",
      link: "/practices/card/",
      children: [
        {
          text: "卡片页面",
          link: "/practices/card/",
        },
        {
          text: "列表页面",
          link: "/practices/list/",
        },
        {
          text: "详情页面",
          link: "/practices/detail/",
        },
        {
          text: "Description",
          link: "/practices/description/",
        },
      ],
    },
    {
      text: "通用组件",
      link: "/components/button/",
      children: [
        {
          text: "Button 按钮",
          link: "/components/button/",
        },
        {
          text: "Icon 图标",
          link: "/components/icon/",
        },
        {
          text: "Link 链接",
          link: "/components/link/",
        },
        {
          text: "Typography 排版",
          link: "/components/typography/",
        },
      ],
    },
    {
      text: "布局",
      children: [
        {
          text: "Row 行",
          link: "/components/row/",
        },
        {
          text: "Col 列",
          link: "/components/col/",
        },
        {
          text: "Grid 栅格",
          link: "/components/grid/",
        },
        {
          text: "Layout 布局",
          link: "/components/layout/",
        },
        {
          text: "Space 间距",
          link: "/components/space/",
        },
        {
          text: "Divider 分割线",
          link: "/components/divider/",
        },
      ],
    },
    {
      text: "导航",
      children: [
        {
          text: "Breadcrumb 面包屑",
          link: "/components/breadcrumb/",
        },
        {
          text: "NavMenu 导航菜单",
          link: "/components/nav-menu/",
        },
        {
          text: "DropdownMenu 下拉命令菜单",
          link: "/components/dropdown-menu/",
        },
        {
          text: "SplitButton 分裂按钮",
          link: "/components/split-button/",
        },
        {
          text: "PageHeader 页头",
          link: "/components/page-header/",
        },
        {
          text: "Pagination 分页",
          link: "/components/pagination/",
        },
        {
          text: "Steps 步骤条",
          link: "/components/steps/",
        },
      ],
    },
    {
      text: "数据输入",
      children: [
        {
          text: "Form 表单",
          link: "/components/form/",
        },
        {
          text: "FilterForm 表单筛选器",
          link: "/components/filter-form/",
        },
        {
          text: "Input 输入框",
          link: "/components/input/",
        },
        {
          text: "Textarea 文本域",
          link: "/components/textarea/",
        },
        {
          text: "InputNumber 数字输入框",
          link: "/components/input-number/",
        },
        {
          text: "InputTag 标签输入框",
          link: "/components/input-tag/",
        },
        {
          text: "VerificationCode 验证码输入",
          link: "/components/verification-code/",
        },
        {
          text: "AutoComplete 自动补全",
          link: "/components/auto-complete/",
        },
        {
          text: "Search 搜索框",
          link: "/components/search/",
        },
        {
          text: "Mention 提及",
          link: "/components/mention/",
        },
        {
          text: "Select 下拉框",
          link: "/components/select/",
        },
        {
          text: "TableColumnManager 表格列管理",
          link: "/components/table-column-manager/",
        },
        {
          text: "Cascader 级联选择",
          link: "/components/cascader/",
        },
        {
          text: "Transfer 数据穿梭框",
          link: "/components/transfer/",
        },
        {
          text: "PeopleSelect 人员选择",
          link: "/components/people-select/",
        },
        {
          text: "Map 地图",
          link: "/components/map/",
        },
        {
          text: "Checkbox 复选框",
          link: "/components/checkbox/",
        },
        {
          text: "Radio 单选框",
          link: "/components/radio/",
        },
        {
          text: "Segmented 分段控制器",
          link: "/components/segmented/",
        },
        {
          text: "Switch 开关",
          link: "/components/switch/",
        },
        {
          text: "Slider 滑块",
          link: "/components/slider/",
        },
        {
          text: "Rate 评分",
          link: "/components/rate/",
        },
        {
          text: "Color 颜色字段",
          link: "/components/color-field/",
        },
        {
          text: "ColorPicker 颜色面板",
          link: "/components/color-picker/",
        },
        {
          text: "Date 日期字段",
          link: "/components/date/",
        },
        {
          text: "DateRange 日期范围字段",
          link: "/components/date-range/",
        },
        {
          text: "DatePicker 日期面板",
          link: "/components/date-picker/",
        },
        {
          text: "DateRangePicker 日期范围面板",
          link: "/components/date-range-picker/",
        },
        {
          text: "Time 时间字段",
          link: "/components/time/",
        },
        {
          text: "TimeRange 时间范围字段",
          link: "/components/time-range/",
        },
        {
          text: "TimePicker 时间面板",
          link: "/components/time-picker/",
        },
        {
          text: "TimeRangePicker 时间范围面板",
          link: "/components/time-range-picker/",
        },
        {
          text: "Upload 上传",
          link: "/components/upload/",
        },
      ],
    },
    {
      text: "数据展示",
      children: [
        {
          text: "Avatar 头像",
          link: "/components/avatar/",
        },
        {
          text: "Badge 徽标数",
          link: "/components/badge/",
        },
        {
          text: "Tag 标签",
          link: "/components/tag/",
        },
        {
          text: "Ellipsis 文本省略",
          link: "/components/ellipsis/",
        },
        {
          text: "Empty 空状态",
          link: "/components/empty/",
        },
        {
          text: "Image 图片",
          link: "/components/image/",
        },
        {
          text: "Tabs 标签页",
          link: "/components/tabs/",
        },
        {
          text: "Collapse 折叠面板",
          link: "/components/collapse/",
        },
        {
          text: "List 列表",
          link: "/components/list/",
        },
        {
          text: "InfiniteScroll 无限滚动",
          link: "/components/infinite-scroll/",
        },
        {
          text: "Carousel 图片轮播",
          link: "/components/carousel/",
        },
        {
          text: "Paper 基础表面",
          link: "/components/paper/",
        },
        {
          text: "Card 卡片",
          link: "/components/card/",
        },
        {
          text: "Calendar 日历",
          link: "/components/calendar/",
        },
        {
          text: "Scheduler 日程调度",
          link: "/components/scheduler/",
        },
        {
          text: "Descriptions 描述列表",
          link: "/components/descriptions/",
        },
        {
          text: "Table 表格",
          link: "/components/table/",
        },
        {
          text: "Tree 树",
          link: "/components/tree/",
        },
        {
          text: "Timeline 时间轴",
          link: "/components/timeline/",
        },
        {
          text: "Statistic 数值展示",
          link: "/components/statistic/",
        },
        {
          text: "CountTo 数字动画",
          link: "/components/count-to/",
        },
        {
          text: "Countdown 倒计时",
          link: "/components/countdown/",
        },
        {
          text: "Popover 气泡卡片",
          link: "/components/popover/",
        },
        {
          text: "Tooltip 文字气泡",
          link: "/components/tooltip/",
        },
      ],
    },
    {
      text: "反馈",
      children: [
        {
          text: "Alert 警告提示",
          link: "/components/alert/",
        },
        {
          text: "Message 消息",
          link: "/components/message/",
        },
        {
          text: "Notification 通知提醒框",
          link: "/components/notification/",
        },
        {
          text: "Overlay 背景层",
          link: "/components/overlay/",
        },
        {
          text: "Dialog 对话框",
          link: "/components/dialog/",
        },
        {
          text: "Drawer 抽屉",
          link: "/components/drawer/",
        },
        {
          text: "Popconfirm 气泡确认框",
          link: "/components/popconfirm/",
        },
        {
          text: "Loading 加载",
          link: "/components/loading/",
        },
        {
          text: "Skeleton 骨架屏",
          link: "/components/skeleton/",
        },
        {
          text: "Progress 进度条",
          link: "/components/progress/",
        },
        {
          text: "ProgressGroup 分段进度条",
          link: "/components/progress-group/",
        },
        {
          text: "Result 结果",
          link: "/components/result/",
        },
      ],
    },
    {
      text: "其他",
      children: [
        {
          text: "Affix 固钉",
          link: "/components/affix/",
        },
        {
          text: "Anchor 锚点",
          link: "/components/anchor/",
        },
        {
          text: "BackTop 返回顶部",
          link: "/components/back-top/",
        },
        {
          text: "Watermark 水印",
          link: "/components/watermark/",
        },
        {
          text: "Ripple 水波指令",
          link: "/components/ripple/",
        },
        {
          text: "Scrollbar 滚动条",
          link: "/components/scrollbar/",
        },
        {
          text: "ResizeBox 伸缩框",
          link: "/components/resize-box/",
        },
        {
          text: "Split 面板分割",
          link: "/components/split/",
        },
        {
          text: "OverflowList 折叠列表",
          link: "/components/overflow-list/",
        },
      ],
    },
  ]),
};
