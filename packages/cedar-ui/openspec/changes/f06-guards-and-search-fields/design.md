# 规则

## 搜索

searchFields 为 readonly ('label'|'value')[]，默认 ['label']；caseSensitive 默认 false。字段通过 fieldNames 映射，多字段 OR；空查询不改变原有空查询处理，空字段数组对非空查询无匹配。Cascader 保留路径匹配维度。自定义过滤优先、原始查询参数不变；远程绕过协议不变。对象值不做通用深层搜索。

TreeSelect 旧默认可用 searchFields=['value']、caseSensitive=true 恢复，记录 major 迁移。

## 新操作守卫

- Dialog/Drawer: closeGuard(action, {signal,event})。
- Popconfirm: confirmGuard({signal,event}) / cancelGuard({signal,event})。
- 对应新守卫存在只执行新守卫；旧钩子不会再调用。不使用 function.length/async 检测。
- false 拒绝；true/void 放行；throw/reject 拒绝并发 guard-error(error,action)，清理 pending 后允许重试。
- 新守卫等待期间忽略重复操作；外部关闭、公开 close()、卸载、更换守卫、外部按钮禁用取消等待并 abort signal。即便异步函数忽略 signal，迟到结果也不能提交或产生动作事件。
- 外部强制 open=false/close() 不经过用户守卫，不补发 confirm/cancel；受控 open 仍由父级更新。
- Dialog/Drawer 旧 beforeClose(action,done,refs) 只有 done 放行，void/Promise<void> 不放行。done 幂等；未 done 可再次尝试，后一次使旧 done 失效。异常/拒绝恢复 refs，已 done 后的迟到异常不回滚。
- Popconfirm 旧 beforeConfirm(done) 保留同步 boolean、done(boolean)、Promise<boolean|void>，首个完成信号获胜；同步 void 等待 done。旧 beforeCancel 仍按 boolean，undefined 拒绝；仅旧协议时取消仍可打断旧确认。不能把旧 void 一律改成放行。

## 其他回调

Switch.beforeChange、共享 beforeCommit、Scheduler 的事务守卫已是返回值/Promise，保留参数和既有行为。Cascader.loadMore(option,done(children)) 两端、Table.loadMore(record,done(children)) Cedar 是数据回填协议，保留。Tree.loadMore 为 Promise<void>，Upload 还有文件转换/进度协议、Form 还有校验回调，它们不改成布尔守卫，也不添加第二种 done 重载。
