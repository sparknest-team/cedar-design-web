# 待同源组件独立复制改造

## 范围

Space、Divider、Alert、Tag、CountTo、Countdown、Statistic、Skeleton（含 Line/Shape）、Steps（含 Step）、PageHeader、Icon。

## 约束

两库各自维护完整源码，不抽公共核心，不跨库导入，不共享实例或响应式状态。统一主体、公共 Props 与配对测试；本地安装入口、图标资源、主题 token 和配置上下文允许显式平台适配。保留现有公开能力，不借复制删除功能。Space 既有默认换行差异保留在平台适配并明确记录。

## 验证

先执行原有组件测试建立基线，再验证配对行为、受控状态、动态插槽、计时清理及 SSR；源码检查只读。每组验收后才能标为已同源。
