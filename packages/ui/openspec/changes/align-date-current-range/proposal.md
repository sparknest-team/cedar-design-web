# 日期当前动作与范围顺序协议

两端独立复制今日高亮上下文、选择当前动作和范围日期/时间重排算法。showCurrent 仅高亮，showNowButton 仅单选动作；删除 showNowBtn，不保留别名。exchangeTime 仅作用于交互候选，模型、手输和快捷项保持严格顺序校验。

非目标：周/季度移动端展示、日历整体主体同源、真实浏览器视觉验收。

Cedar ConfigProvider.exchangeTime 的旧单端覆盖入口一并删除；策略统一由 DateRangePicker 配置。
