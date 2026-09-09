# Design

保留已有 TSX 渲染以处理 Fragment、注释节点与分隔插槽，不引入无关 DOM 变更。Props 复用 ComponentSize；SpaceDirection 保持 row/column，不误用代表 horizontal/vertical 的旧 Direction；预设间距 xs/sm/md/lg/xl 的 [row,column] 为 [4,4]/[8,6]/[12,8]/[16,12]/[24,16] px。主题仍可覆盖 token，但 Maple 内置主题使用同一组值。扩展独立配对测试及 token 一致性检查，同步中英文 API 与菜单实际生成配置。
