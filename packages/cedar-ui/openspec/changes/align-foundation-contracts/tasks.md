# 基础层重构任务

- [x] 总体规划、依赖和迁移文档
- [x] useVModel/事件监听/外部点击修复与双端配对测试
- [x] Trigger state/reference 独立复制并接入实际实现
- [x] Tooltip/Popover defaultOpen 与严格受控迁移
- [x] SVG 图标直接触发 Tooltip 回归
- [x] use 包构建、DTS、Node ESM、消费者回归、源码检查
- [x] Trigger interaction/contract/interaction-props、外部 reference 与公开方法独立复制
- [x] popup-layer 接入 Trigger/Dialog/Drawer/Overlay/Popup，键盘与遮罩只作用于顶层
- [x] scroll-lock 锁计数与 KeepAlive/容器恢复；旧 hook 与 Card 等所有静态消费者迁移
- [x] 23 处直接 Trigger 引用显式默认检查；重复通知绑定、包装层透传与键盘归属修复
- [x] 两端 useVModel 泛型声明及正反类型用例
- [x] 真浏览器 26 项基础定位/SVG 检查
- [x] ESM/CJS 子路径 re-export 构建回归与实际包导入检查
- [x] Trigger geometry/resize 独立复制；包含块坐标、动态尺寸、翻转方向与滚动监听修复
- [x] 真浏览器扩展为 50 项：滚动/缩放/动态尺寸/翻转/等宽/右键点位/SSR hydration，修复两端 z-index 首帧协议
- [x] 第三批 popup/render/render-props/arrow 独立复制、缓存迁移、渲染 API/样式入口及文档同步
- [x] 双端渲染契约与真实过渡/箭头回归；取消完成事件、快速重开、保留内容验证
- [x] 整体基础契约迁移与上层接入完成；定位引擎、复杂面板保留端侧适配，详见 closure.md。

验收结果见 `design-ui/refactors/foundation-alignment/progress.md`。此处为前三批历史记录，连续收尾验收及平台保留边界见文末任务与 closure.md；不宣称全部端侧 SFC 逐行一致。

## Menu 核心第四批
- [x] 独立复制选择树与键盘控制器，迁移两端 Menu/Option/子菜单。
- [x] Cedar 补齐 options/fieldNames/multiple，保留插槽和旧 context；Maple 删除旧 Select provider 依赖。
- [x] 配对回归覆盖受控拒绝、级联、字段映射、禁用、焦点恢复和嵌套层级。
- [x] 公开类型、文档、菜单 Checkbox 样式依赖同步。
- [x] 完成本批调用链、浏览器、构建及门禁验收。

## Tooltip/Popover 主体第五批
- [x] 独立复制两端 SFC 和 Trigger wrapper，隔离外观适配。
- [x] 补齐属性、事件、公开方法与 Maple 标题/内容/颜色/尺寸适配。
- [x] 配对契约覆盖受控拒绝、生命周期、缓存、SVG、外部引用和内容覆盖。
- [x] 更新文档、公开类型与复制门禁。
- [x] 完成本批调用链、浏览器、发布产物验收。

## 连续收尾
- [x] Menu 共同渲染及所有原调用方迁移，h() 描述符引用门禁。
- [x] Modal 焦点/Tab/恢复/嵌套、触屏滚动和 KeepAlive；Popup/Overlay 共同过渡。
- [x] 选项/树/表单/输入/日期运算共同基础与真实消费者迁移。
- [x] 父子、ID、手势、观察器生命周期修复，配置与虚拟列表保留边界审计。
- [x] 最终全库测试、公开构建、DTS/SSR 与浏览器复验。


## Menu 主体全面同源
- [x] 五个 SFC、公共 props/types、递归与分层 context 同源；平台层仅原生组件/外观/参数与默认值。
- [x] 两端公开 Submenu、实例和 props 类型；缓存策略保留原默认值；现有调用方兼容。
- [x] 配对契约覆盖插槽子菜单、兄弟关闭、函数标签、文本回退、空格单次选择。
- [x] 同源门禁扩展到完整主体，递归发布导入去除中转循环。
- [x] 最终全库、调用链、类型、构建、SSR 与浏览器复验。
