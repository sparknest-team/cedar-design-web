# Resize手势取消所有权

私有手势增加取消清理回调，先退休资源再通知。ResizeBox/Split已开始拖动遇到程序性取消、停用或卸载同样结束一次；未接受的Split手势不发开始。Table列伸缩取消时清理owner，避免KeepAlive恢复后不能再次拖动。保留公开事件名称/参数，不新增loading。Maple Table无列伸缩消费链。
