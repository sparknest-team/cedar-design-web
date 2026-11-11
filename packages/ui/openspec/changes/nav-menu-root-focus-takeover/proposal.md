# NavMenu 根级焦点接管

新增3项有效基线中2项失败／1正常折叠归位通过。排队时捕获原root、document与焦点，执行时外部连接控件接管则不归位。折叠查询后复核；保留显式focus及body正常归位，不改变公开API／Token。

最终根级16专项、完整NavMenu86项通过。受控nextTick、stub节点／observer与JSDOM不替代原生浏览器验收。其余保留命令／注册身份仍待独立审查。
