import type { SidebarConfig } from "@vuepress/theme-default";

export const zhSideBar: SidebarConfig = {
  "/": [
    {
      text: "开发指南",
      link: "/guide/start/",
      children: [
        {
          text: "快速上手",
          link: "/guide/start/",
        },
        {
          text: "国际化",
          link: "/guide/i18n/",
        },
        {
          text: "更新日志",
          link: "/changelog/",
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
      text: "样式",
      link: "/components/palette/",
      children: [
        {
          text: "色板 Palette",
          link: "/components/palette/",
        },
        {
          text: "颜色 Color",
          link: "/components/color/",
        },
        {
          text: "圆角 Border radius",
          link: "/components/style/border-radius/",
        },
        {
          text: "阴影 Box shadow",
          link: "/components/style/box-shadow/",
        },
        {
          text: "显示类型 Display",
          link: "/components/style/display/",
        },
        {
          text: "弹性布局 Flex",
          link: "/components/style/flex/",
        },
        {
          text: "定位 Position",
          link: "/components/style/position/",
        },
        {
          text: "尺寸 Size",
          link: "/components/style/size/",
        },
        {
          text: "溢出 Overflow",
          link: "/components/style/overflow/",
        },
        {
          text: "字体排版 Typography",
          link: "/components/style/typography/",
        },
        {
          text: "边距 Spacing",
          link: "/components/style/spacing/",
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
      text: "数据展示",
      children: [
        {
          text: "Badge 徽标数",
          link: "/components/badge/",
        },
        {
          text: "Calendar 日历",
          link: "/components/calendar/",
        },
        {
          text: "Card 卡片",
          link: "/components/card/",
        },
        {
          text: "Carousel 图片轮播",
          link: "/components/carousel/",
        },
        {
          text: "Collapse 折叠面板",
          link: "/components/collapse/",
        },
        {
          text: "Comment 评论",
          link: "/components/comment/",
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
          text: "ImagePreview 图片预览",
          link: "/components/image-preview/",
        },
        {
          text: "List 列表",
          link: "/components/list/",
        },
        {
          text: "Popover 气泡卡片",
          link: "/components/popover/",
        },
        {
          text: "Table 表格",
          link: "/components/table/",
        },
        {
          text: "Tabs 标签页",
          link: "/components/tabs/",
        },
        {
          text: "Descriptions 描述列表",
          link: "/components/descriptions/",
        },
        {
          text: "Tag 标签",
          link: "/components/tag/",
        },
        {
          text: "Timeline 时间轴",
          link: "/components/timeline/",
        },
        {
          text: "Tooltip 文字气泡",
          link: "/components/tooltip/",
        },
        {
          text: "Tree 树",
          link: "/components/tree/",
        },
        {
          text: "Statistic 数值展示",
          link: "/components/statistic/",
        },
        {
          text: "DragContainer 拖拽容器",
          link: "/components/drag-container/",
        },
      ],
    },
    {
      text: "数据输入",
      children: [
        {
          text: "AutoComplete 自动补全",
          link: "/components/auto-complete/",
        },
        {
          text: "Cascader 级联选择",
          link: "/components/cascader/",
        },
        {
          text: "Checkbox 复选框",
          link: "/components/checkbox/",
        },
        {
          text: "ColorPicker 颜色选择器",
          link: "/components/color-picker/",
        },
        {
          text: "Datepicker 日期选择器",
          link: "/components/date-picker/",
        },
        {
          text: "Form 表单",
          link: "/components/form/",
        },
        {
          text: "Input 输入框",
          link: "/components/input/",
        },
        {
          text: "InputNumber 数字输入框",
          link: "/components/input-number/",
        },
        {
          text: "VerificationCode 验证码输入",
          link: "/components/verification-code/",
        },
        {
          text: "InputTag 标签输入框",
          link: "/components/input-tag/",
        },
        {
          text: "Mention 提及",
          link: "/components/mention/",
        },
        {
          text: "LayoutForm 布局表单",
          link: "/components/layout-form/",
        },
        {
          text: "FilterForm 表单筛选器",
          link: "/components/filter-form/",
        },
        {
          text: "Map 地图",
          link: "/components/map/",
        },
        {
          text: "PeopleSelect 人员选择",
          link: "/components/people-select/",
        },
        {
          text: "Radio 单选框",
          link: "/components/radio/",
        },
        {
          text: "Rate 评分",
          link: "/components/rate/",
        },
        {
          text: "Search 搜索框",
          link: "/components/search/",
        },
        {
          text: "Select 下拉框",
          link: "/components/select/",
        },
        {
          text: "SelectTransfer 选择穿梭框",
          link: "/components/select-transfer/",
        },
        {
          text: "SelectPanel 选择面板",
          link: "/components/select-panel/",
        },
        {
          text: "Switch 开关",
          link: "/components/switch/",
        },
        {
          text: "Textarea 文本域",
          link: "/components/textarea/",
        },
        {
          text: "TimePicker 时间选择器",
          link: "/components/time-picker/",
        },
        {
          text: "Transfer 数据穿梭框",
          link: "/components/transfer/",
        },
        {
          text: "Upload 上传",
          link: "/components/upload/",
        },
      ],
    },
    {
      text: "反馈",
      children: [
        {
          text: "抽屉 Drawer",
          link: "/components/drawer/",
        },
        {
          text: "警告提示 Alert",
          link: "/components/alert/",
        },
        {
          text: "Message 消息",
          link: "/components/message/",
        },
        {
          text: "Modal 对话框",
          link: "/components/modal/",
        },
        {
          text: "Notification 通知提醒框",
          link: "/components/notification/",
        },
        {
          text: "Popconfirm 气泡确认框",
          link: "/components/popconfirm/",
        },
        {
          text: "Spin 加载中",
          link: "/components/spin/",
        },
        {
          text: "Loading 指令",
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
          text: "Result 结果",
          link: "/components/result/",
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
          text: "Menu 菜单",
          link: "/components/menu/",
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
        {
          text: "Dropdown 下拉菜单",
          link: "/components/dropdown/",
        },
      ],
    },
    {
      text: "业务组件",
      children: [
        {
          text: "SaasHeaderNav 头部导航",
          link: "/components/saas-header-nav/",
        },
        {
          text: "SaasPage 页面布局",
          link: "/components/saas-page/",
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
        {
          text: "Scrollbar 滚动条",
          link: "/components/scrollbar/",
        },
        {
          text: "Watermark 水印",
          link: "/components/watermark/",
        },
      ],
    },
  ],
};
