# 设计

纯面板将本地草稿与已提交模型分离，外部替换优先，动态禁用后必须重新校验确认。范围提交按 showNextDay 决定排序。确认不重发 select；重复提交相同值不发 change。Maple actions 插槽提供 confirm/canConfirm/value，可替换默认确认按钮。内部时间字段/日期面板与范围子面板显式 disableConfirm，由外层拥有提交事务。

滚轮复用合法候选列，按步长构造显示列，标注不在合法候选中的 disabled；hideDisabledOptions 只过滤显示，不放宽禁用规则。时钟隐藏禁用刻度但保留 index 和角度。默认确认按钮复用 Button 和现有 actions token，不添加硬编码样式或跨库依赖。
