---
permalink: /guide/roadmap/
---

# Roadmap

本文档记录 Cedar Design Web 相对成熟组件库的补齐节奏，并与 Maple Design Mobile 公共 API 对齐。

## 当前阶段：P0（立刻）

| 项                         | 状态   | 说明                                                                             |
| -------------------------- | ------ | -------------------------------------------------------------------------------- |
| 公开 Roadmap               | ✅     | 本文档                                                                           |
| 一等 Dark Theme            | ✅     | `Themes` + `StyleProvider` / `ConfigProvider` + [主题定制](/themes/)             |
| 样式按需引入               | ✅     | Resolver 默认引入 CSS；组件样式与基础主题拆分                                    |
| Segmented                  | ✅     | [Segmented](/components/segmented/)                                              |
| Dropdown                   | ✅     | 已由 [Menu 下拉菜单](/components/menu/) 覆盖（Trigger + Option）；不另建别名组件 |
| Tour                       | 待开始 | 新手引导                                                                         |
| VirtualList / Table 虚拟化 | 待开始 | 公开虚拟列表能力                                                                 |
| a11y 落地                  | 待开始 | 组件文档可访问性章节 + 键盘/ARIA 测试                                            |

## 下一波：P1

- QRCode、FloatButton、Comment（验证码输入已由 VerificationCode 覆盖，不另建 InputOTP）
- SSR 使用文档、VSCode / web-types
- Playground

## 可择机：P2

- CheckTag、DynamicTags
- 更多 i18n 语言包
- Theme Editor、截图视觉回归

## 与 Maple 的关系

公共 API（如 `variant` / `size` / `Segmented` 选项结构）以 **Cedar（PC）为准**，Maple 同步对齐。跨端破坏性变更走 OpenSpec。

## 不做硬跟的部分

Naive Heatmap / Equation、Vant 电商套件等差异化组件，按业务需要再评估，不进入默认 Roadmap。
