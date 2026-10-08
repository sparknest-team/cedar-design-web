# Watermark 独立同源改造

Cedar 与 Maple 的 Watermark 当前分别使用 Canvas 和 SVG `foreignObject` 生成背景，公开能力、默认值、异步图片处理、主题更新和防篡改行为均不一致。本变更建立一份确定的跨端契约，并在两库独立保存可自然保持一致的生成内核与生命周期逻辑；两端不共享运行时模块、实例或状态，也不为了源码逐字相同额外建立 `platform.ts` 配置层。

改造以 Cedar 已有的多行文字、图片、灰阶、重复、错列和防篡改能力为基础，吸收 Maple 的 `fullscreen`。同时重写现有 Canvas 生命周期，解决 SSR 直接访问 `window/document`、异步图片竞态、图片错误无回收、旋转裁切、主题变化依赖 Demo 手动 `resize()`、MutationObserver/KeepAlive 清理不完整等问题。

组件库尚未正式发布，本次直接迁移最终 API，不保留旧 Props、方法或插槽兼容入口。2026-09-20 已完成双端实现、源码门禁、目标测试、类型检查、库构建和文档构建，调研状态已更新为“已同源”。
