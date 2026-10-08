# Checkbox / Radio 分组状态收口

两端目前受控值、子项同步和表单通知链不同。本批先独立复制状态控制器并接入现有 Group；不替换外观，不宣称整组件已同源。

补齐 Maple Group 的 defaultValue、disabled、readonly、error，Cedar Checkbox/Radio 与 Group 的 readonly。受控更新只提议、不保存被拒绝的值，外部同步不发事件。分组事件由 Group 唯一发送。Maple 既有全选/反选遵守限制并发 change；新增能力不保留兼容分支。
