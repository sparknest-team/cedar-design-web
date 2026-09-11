# 验证记录

2026-09-11：43 个测试文件、250 项 Scheduler 测试通过。新增叠放专项涵盖默认布局、同宽、单击与键盘激活区分、双击详情、只读、禁用、多选、并排回退以及 demo 实际挂载。vue-tsc 声明检查通过。

真实浏览器：三张重叠卡片均宽 95px，偏移 0/12/24px；点击“站点巡检”露出的标题后 z-index 0→4；双击打开正确详情后焦点转入抽屉，原卡片 z-index 恢复 0；Tab 前进到“设备维护”，该卡片 z-index 为 4。无 error 日志。暗色背景补上不透明底层，防止叠放内容互相透出。

cedar-cli compile 和 tsc 发布类型契约检查均退出 0；生成 CSS 包含 stack token、背景和 focus-within 层级规则。共享规范检查 95 个组件、0 错误，保留 Col/Row 缺少行为测试的 2 个既有警告。

最终包检查：0 errors、0 warnings。

## 2026-09-11 百分比起点

stacked-events 与 event-details-demo 两个测试文件共 8 项通过；覆盖百分比起点、右端对齐、焦点前置、只读、多选及 Popover 新增/编辑。git diff --check 通过。Vitest 退出时报告 close timed out after 1000ms，进程退出码为 0。

## 2026-09-11 静态日程与类型主题

pointer、duplicate、scheduler 三个测试文件共 40 项通过；新增覆盖只读、禁用移动状态隐藏左侧强调边框，以及背景色和斜纹主题类。真实浏览器验证四类只读日程的左边框均为 0，并分别呈现实色、斜纹、圆点和交叉纹理；拖拽镜像、复制和模板新增均保留主题字段。

自定义日程 Demo 的 Vue 类型检查通过。真实浏览器确认新增按钮打开自定义表单，表单包含日程类型、主题预览、标题、起止时间、创建后编辑权限和保存操作。

## 2026-09-11 高密度重叠与 metadata Mock

stacked-events、duplicate、scheduler 三个测试文件共 33 项通过，Vue 专项类型检查通过。真实浏览器验证 5 条重叠日程直接显示“还有 2 项”，Popover 列出完整 5 条；自定义类型 Demo 从 Mock API 加载 4 条日程，新建提交成功，请求体包含 `metadata.typeId` 和 `metadata.clientRequestId`。
