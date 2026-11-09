# Sider伸缩宽度所有权

Sider管理展开后的调整宽度，以ResizeBox受控width绑定折叠尺寸；折叠时去除手柄及占位，不重建内容。展开恢复最近调整，外部width值变化重置，transform内容随展开宽度。支持既有数字/CSS长度及0收起宽度，不扩充ResizeBox属性。
