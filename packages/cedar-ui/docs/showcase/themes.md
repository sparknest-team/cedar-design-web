---
permalink: /showcase/themes/
title: 主题与品牌
---

# 主题与品牌

品牌定制要同时覆盖组件的背景、文字、边框、状态和弹层。Cedar 与 Maple 对齐主题语言，Cedar 内置默认与枫叶两套主题，并分别提供亮暗模式。

## 切换品牌与亮暗

依次切换四个主题，观察按钮、语义文字和背景。此示例会修改当前文档站的全局主题；演示后可点击“默认亮色”恢复。

<demo src="../../src/themes/__demos__/toggle.vue"></demo>

## 检查弹层与输入状态

保持当前主题，打开下方选择面板，检查选中、搜索、禁用与只读的表现。品牌切换之后，再检查表面、边框和文字是否协调。

<demo src="../../src/select/__demos__/state-lab.vue"></demo>

## 同一个页面中的局部主题

观察 StyleProvider 覆盖范围内与范围外的组件，展开源码确认主题变量如何局部传递。先修改局部，再切全局，检查两个层级的组合。

<demo src="../../src/style-provider/__demos__/basic.vue"></demo>

## 与其他实现对照什么

用相同品牌色和亮暗配置，比较全局主题、组件覆盖与局部覆盖的入口，以及弹层是否跟随主题。主题定制是比较维度，具体差异应通过同场景操作确认。

继续阅读：[主题定制](/themes/) · [Token 分层](/guide/design-tokens/) · [CSS 变量参考](/guide/design-token-reference/)

---

[返回总览，标记已体验](/showcase/) · [下一站：业务数据选择](/showcase/async-selection/)
