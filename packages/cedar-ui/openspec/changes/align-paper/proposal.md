# Paper 底层表面同源

Cedar 新增 Paper，与 Maple 独立复制维护。Paper 不提供 variant/status/内容结构；新增 bordered=false，边框与 elevation 独立。保留 Maple 已有 ripple/radius/width/height/round/inline 能力，无默认 padding，click 使用 MouseEvent。默认背景使用主题表面色，无条件 pointer 改为仅 ripple 时 pointer。
