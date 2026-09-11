# 验证记录

- Scheduler Vitest：24 文件，180 项测试通过。
- vue-tsc 声明检查、cedar-cli compile 构建、生成 API 类型 contracts 检查通过。
- package:check：0 errors，0 warnings。
- 共享规范：0 errors，2 条既有 Col/Row 缺少行为测试警告。
- 浏览器：容量 2 拦截第三单，容量 3 保存并显示 3/3，降低为 1 显示 3/1 超额，已重置示例。
- 测试覆盖并发扫描边界、候选替换、多资源、无排期/全天、非法容量、批量原子性、撤销与异步 stale。
