# Maple LoadingBar 调度交付

有效7项基线5失败／2对照，复现progress重复、两段render重复及computed style重入start后的旧hide／cleanup错误授权。任务待执行集合一次消费；render按原代次／消费位失效，读取样式后schedule显式传原代次。

公开API、Token及200／300／250ms现有策略保持。最终10专项／完整22项，属实际服务DOM＋受控时钟／nextTick，不是新原生浏览器／OS证据。Cedar只有共享规范同步，无LoadingBar副本。
