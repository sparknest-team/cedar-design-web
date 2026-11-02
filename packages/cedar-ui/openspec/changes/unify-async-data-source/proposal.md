# 人员选择与异步数据边界

用户已确认 PeopleSelect 使用 options + search，统一复用的初始化函数放在共用 composable；特殊加载协议保留，后续其他 API 改造逐项确认。两端新增同源 useAsyncData，PeopleSelect 仅 Cedar 有。保留数组属性，不扩大成函数/Promise 联合类型。此次决议取代 P1/P2 中 PeopleSelect.fetch 的暂行方案，不改变其他 P1 修复。

PeopleSelect 移除已发布 fetch/urlType，按用户指定方向记录为下个 major；其余表单和主值协议继续保留。Maple Table 仍是插槽布局组件，不补造 data API。无发布/提交操作。
