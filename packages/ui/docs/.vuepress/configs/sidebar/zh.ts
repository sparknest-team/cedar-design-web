import type { SidebarArrayOptions, SidebarOptions } from "vuepress-theme-hope";
import componentReuse from "./component-reuse.json";
import catalog from "../component-navigation.json";

const reuseLabels: Record<string, { label: string }> = componentReuse;
function markReuse(items: SidebarArrayOptions): SidebarArrayOptions {
  return items.map((item) => {
    if (typeof item === "string") return item;
    const name = ("link" in item ? item.link : undefined)?.match(
      /^\/components\/([^/]+)\/$/,
    )?.[1];
    const reuse = name ? reuseLabels[name] : undefined;
    return {
      ...item,
      ...(reuse && item.text ? { text: `${item.text} [${reuse.label}]` } : {}),
      ...("children" in item && Array.isArray(item.children)
        ? { children: markReuse(item.children) }
        : {}),
    };
  });
}

export const showcaseSideBar: SidebarArrayOptions = [
  {
    text: "特色与场景",
    link: "/showcase/",
    children: [
      { text: "专栏总览", link: "/showcase/" },
      { text: "核心特点", link: "/showcase/strengths/" },
      { text: "桌面与移动", link: "/showcase/cross-platform/" },
      { text: "一致的表单体验", link: "/showcase/forms/" },
      { text: "主题与品牌", link: "/showcase/themes/" },
      { text: "异步数据选择", link: "/showcase/async-selection/" },
      { text: "加载与等待", link: "/showcase/loading/" },
      { text: "数据工作台", link: "/showcase/data-workbench/" },
      { text: "资源排期", link: "/showcase/scheduling/" },
      { text: "逐组件对照", link: "/showcase/components/" },
    ],
  },
  {
    text: "最佳实践",
    link: "/practices/",
    children: [
      { text: "页面总览", link: "/practices/" },
      { text: "团队工作台", link: "/practices/dashboard/" },
      { text: "查询列表页", link: "/practices/list/" },
      { text: "项目卡片页", link: "/practices/card/" },
      { text: "业务详情页", link: "/practices/detail/" },
      { text: "分步表单页", link: "/practices/form/" },
      { text: "结果与异常页", link: "/practices/result/" },
    ],
  },
];

export const componentSideBar: SidebarArrayOptions = markReuse([
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
        text: "空值与阅读空文案",
        link: "/guide/empty-values/",
      },
      {
        text: "受控与非受控",
        link: "/guide/controlled-uncontrolled/",
      },
      {
        text: "LLM 文档",
        link: "/guide/llms/",
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
        text: "色板 Palette",
        link: "/components/palette/",
      },
      {
        text: "颜色 Color",
        link: "/components/style/color/",
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
  ...catalog.groups.map((group) => ({
    text: group.label,
    children: catalog.components
      .filter((component) => component.group === group.id && component.id !== "theme-provider")
      .map((component) => ({ text: component.name, link: component.route })),
  })),
]);

export const zhSideBar: SidebarOptions = {
  "/showcase/": showcaseSideBar,
  "/practices/": showcaseSideBar,
  "/practices/utility-spec/": componentSideBar,
  "/practices/accessibility-spec.html": componentSideBar,
  "/practices/ai-collaboration.html": componentSideBar,
  "/practices/component-spec.html": componentSideBar,
  "/practices/token-spec.html": componentSideBar,

  "/": componentSideBar,
};
