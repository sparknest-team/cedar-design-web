const labels: Record<string, string> = {
  "平台选择与兼容性": "Platforms and compatibility",
  "AI 快速开始": "AI quick start",
  "MCP 接入与故障排查": "MCP setup and troubleshooting",
  "CLI 与方案获取": "CLI and solution access",
  "Skill 与团队规则": "Skills and team rules",
  "工具和内容参考": "Tools and content reference",
  "更新与迁移": "Updates and migration",
  "开始使用": "Getting started",
  "AI 与工具": "AI and tools",
  "安装与快速开始": "Installation and quick start",
  "全部能力与场景": "All features and scenarios",
  "体系特色": "System features",
  "业务场景": "Business scenarios",

  页面总览: "Page templates",
  团队工作台: "Team workspace",
  查询列表页: "Query list",
  项目卡片页: "Project cards",
  业务详情页: "Business detail",
  分步表单页: "Step form",
  结果与异常页: "Results and recovery",

  核心特点: "Core features",
  基础与操作: "General and actions",
  布局与容器: "Layout and containers",
  导航与定位: "Navigation and location",
  文本与数值输入: "Text and number entry",
  选项与人员选择: "Options and people",
  日期时间与颜色: "Date, time and color",
  表单与文件: "Forms and files",
  数据与内容展示: "Data and content",
  业务与资源: "Business and resources",
  反馈与浮层: "Feedback and overlays",
  配置与交互基础: "Configuration and interaction",

  特色与场景: "Features and scenarios",
  专栏总览: "Overview",
  桌面与移动: "Desktop and mobile",
  一致的表单体验: "Consistent forms",
  主题与品牌: "Themes and branding",
  异步数据选择: "Async selection",
  加载与等待: "Loading and waiting",
  数据工作台: "Data workbench",
  资源排期: "Resource scheduling",
  逐组件对照: "Component comparisons",

  空值与阅读空文案: "Empty values and reading placeholders",
  受控与非受控: "Controlled and uncontrolled",
  "LLM 文档": "LLM documentation",
  最佳实践: "Best practices",
  卡片页面: "Card page",
  列表页面: "List page",
  详情页面: "Detail page",
  "原子化 CSS": "Atomic CSS",
  常用写法: "Common patterns",
  "Utility 规范": "Utility guidelines",
  "Design Token 与 CSS 变量分层": "Design tokens and CSS variable layers",
  开发指南: "Guide",
  跨端复用标记说明: "Cross-platform reuse",
  快速上手: "Quick start",
  快速开始: "Quick start",
  按需引入: "Import on demand",
  配置与约定: "Configuration and conventions",
  默认值与全局配置: "Defaults and global configuration",
  工程与工具: "Engineering and tools",
  国际化: "Internationalization",
  变更记录: "Changelog",
  样式: "Styles",
  主题定制: "Theming",
  通用: "General",
  通用组件: "General",
  布局: "Layout",
  导航: "Navigation",
  数据输入: "Data entry",
  数据展示: "Data display",
  反馈: "Feedback",
  指令: "Directives",
  其他: "Other",
  指令与其它: "Directives and utilities",
  "色板 Palette": "Palette",
  "颜色 Color": "Color",
  组件: "Components",
};
export function translateNavigation(items: any): any {
  if (Array.isArray(items)) return items.map(translateNavigation);
  if (typeof items === "string")
    return items.startsWith("/") &&
      !items.startsWith("/en/") &&
      !items.startsWith("//")
      ? `/en${items}`
      : items;
  if (!items || typeof items !== "object") return items;
  const result = { ...items };
  if (result.text) {
    const raw = result.text.replace(/ \[.*?\]$/, "");
    const status = result.text.match(/\[(.*?)\]/)?.[1];
    const statuses: Record<string, string> = {
      已同源: "Shared",
      逻辑同源: "Shared logic",
      逻辑待同源: "Logic pending",
      待适配: "Pending",
      独立: "Independent",
    };
    result.text =
      labels[raw] ?? raw.match(/[A-Za-z][A-Za-z0-9 /-]*/)?.[0]?.trim() ?? raw;
    if (status) result.text += ` [${statuses[status] ?? status}]`;
  }
  if (
    result.link?.startsWith("/") &&
    !result.link.startsWith("/en/") &&
    !result.link.startsWith("//")
  )
    result.link = `/en${result.link}`;
  if (result.children) result.children = translateNavigation(result.children);
  return result;
}
