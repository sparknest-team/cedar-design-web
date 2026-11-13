# Dialog 视口高度与正文滚动

用户要求两端默认最大高度 90dvh，90vh 兼容回退，仅正文滚动，标题与按钮可见。通过 CSS token 与已有 dialogStyle 定制，不新增属性。Cedar 默认顶部偏移限制为 min(100px, 5dvh)，回退 5vh。全屏解除普通高度上限。
