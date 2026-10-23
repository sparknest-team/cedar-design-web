# NavMenu.Item 消费者生命周期

## 依据

有效9项基线7失败／2对照。正常测量和普通卸载解绑原本通过；其他失败涵盖受控拒绝关闭时停用监听泄漏、旧resize、测量getter卸载后仍绑定、保留命令序列和焦点任务。

## 行为收口

按原owner window及binding代次解绑／重绑，停用与卸载直接清理。测量按operation和reference核对读后重入；焦点按open/close方向、配置与引用消费一次，外部当前焦点保持。激活只重绑当前打开状态，不复活旧任务。停用仍请求关闭，保留命令无效；既有API、布局与Token保持。

## 证据边界

13专项／完整NavMenu83项通过，含受控队列、stub Trigger／observer及JSDOM owner窗口探针，非原生布局或跨文档adopt。中间夹具重建options误触配置取消，稳定选项后复跑，不放宽产品取消规则。根级其他命令／注册与外部焦点仍待审。
