# 时间格式基础层收口

修复 Cedar 默认 format 压过 use12Hours，以及方括号文字被错误识别为时间列的问题。先完成独立复制的格式基础层，不在本变更中宣称 Maple 公开格式 API 和模型值契约已迁移。

非目标：本轮不删除 Maple format=ampm/24hr 和 useSeconds；它们属于下一次完整迁移，不能混入新旧 API 兼容分支。
