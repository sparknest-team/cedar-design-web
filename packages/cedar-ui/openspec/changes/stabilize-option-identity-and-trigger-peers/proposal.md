# 稳定选项身份与同级触发器切换

Tree 公开 value/label 不新增 key 别名，保留 Node.key=value 与虚拟列表缓存映射。双端 Menu 从 index key 改为稳定业务身份，避免重排复用错误项。共享 Trigger 外部点击处理允许关闭被已打开的同级触发器遮住的旧浮层，同时保留父子包含与层叠保护。FloatingPanel 主值按最新决定恢复 modelValue/defaultValue/update:modelValue，保留 height-change 通知。Menu 公开 active 暂保留，明确叶子选中 / 分支后代选中及 MenuOption 视觉强调的区别。
