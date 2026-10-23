# NavMenu 节点焦点续体

## 依据

原8项有效基线5失败／3对照。正常enter、禁用及卸载原本通过。生命周期／代次修复后，另在无焦点归属检查的中间实现验证外部焦点接管2项均失败；单独记录，不冒充原始10项基线。

## 设计

enter／Escape按节点焦点代次、活动状态、当前配置和reference／Trigger身份交付，关闭／停用／卸载失效，激活仅接收新命令。enter在展开回调和查询目标后重检；Escape消费一次。实际ownerDocument中其他连接控件已接管焦点则放弃旧请求。保持Trigger hover延迟及既有公开API／CSS变量，无新Token。

## 边界

12专项使用真实NavNode／KeepAlive、stub Trigger持久面板、受控nextTick和JSDOM焦点；完整NavMenu70项包含真实既有组合。不认证原生键盘、所有焦点迁移或跨文档adopt。独立Item、根级其他保留命令／注册及外部焦点仍待审，不提前归档整族。
