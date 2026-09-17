# Tabs 同源与跨端 API 统一

## 问题
Cedar 的五组件组合与 Maple 的导航/轮播组合不兼容；Maple 的 trigger、lazyLoad、destroyOnHide 未接入完整逻辑。需要统一状态、结构、事件与可访问性，保留两端视觉密度。

## 决策
以 Cedar 的 Tabs / TabsNavs / TabNav / TabsItems / TabItem 组合为公共入口，两端使用同一实现（仅 platform.ts、导入路径、注册入口和 token 默认值不同）。保留 active/defaultActive 与 key 标识、六种 variant、编辑事件；增加统一 swipeable、activationMode、scrollButtons。默认行为一致，移动触控尺寸由 token 与 pointer 媒体查询控制。

Maple 旧 Tab/name、独立 TabsItems 轮播 API 及 fixedBottom/sticky 等移至组合用法，删除旧入口，提供迁移文档并按 major 发布；这次明确的跨端 API 统一作为破坏性迁移，不静默发布 patch。
