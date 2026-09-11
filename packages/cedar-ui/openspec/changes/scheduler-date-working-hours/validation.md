# 验证记录

- Scheduler Vitest：22 文件，166 测试通过，包含日期规则优先级、分段并集、跨日、多资源、维护、非法配置、异步 stale 和 demo 开关/视窗外日期。
- vue-tsc 声明检查通过。
- cedar-cli compile 构建通过；生成类型的 API contracts 检查通过。
- package:check：0 errors，0 warnings。
- 共享规范：0 errors，2 条既有 Col/Row 缺少行为测试警告。
- 浏览器 http://localhost:9992/components/scheduler/#指定日期工作时间：小陈 13:00 预约被拒，小林 13:00 预约成功；验证预约已删除。
