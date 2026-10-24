---
"@cedar-design/cli": patch
"@cedar-design/ui": patch
---

修复完整构建生成器错误排除 FieldDecorator 导致全量安装器缺少该组件的问题；保留入口生成的回归检查。为文档生产构建配置显式 Node 堆内存，并将时间范围文档对齐现行的端点不交换校验。
