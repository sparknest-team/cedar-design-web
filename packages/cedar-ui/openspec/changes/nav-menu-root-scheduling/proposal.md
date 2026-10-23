# NavMenu 根级测量与焦点结算

## 依据

修正夹具BEM选择器后取得8项有效基线：6失败、2正常对照。停用保留resize、跨激活旧测量、几何getter卸载后访问和三类焦点操作均复现。

## 设计

afterRender按配置／生命周期代次并消费一次；激活只排当前测量／roving状态。resize保存operation与原root／measure身份，在几何读取后复核。根级focus拒绝不可用实例，selection与显式focus替代旧返回焦点。无新API／Token、不变更共用ResizeObserver或独立移动组件。

## 边界

13专项采用受控nextTick与stub节点／观察器、JSDOM几何；真实既有NavMenu组合另回归。不外推节点级enter／Escape、独立Item或真实浏览器布局时序；这些保持下一阶段。
