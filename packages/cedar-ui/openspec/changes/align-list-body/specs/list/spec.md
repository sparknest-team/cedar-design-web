# Requirements

- 两端data/default/item/header/footer/empty语义一致；default优先且禁用数据虚拟化。
- size仅sm/md/lg；bordered与split独立；loading不展示空态但保留已有数据。
- maxHeight支持number|string，数字为px；scrollbar支持false/native和true/object自定义；虚拟视口使用自身滚动。
- virtualListProps不包含旧废弃isStaticItemHeight和被data覆盖的data字段；固定/动态高度、key、threshold、buffer能力保留。
- scrollIntoView使用index或key和top/bottom/auto，对非法目标不操作；真实基础实现两端修复align。
- 仅真实滚动转发一次scroll；list/listitem语义保持，虚拟列表内部content为list。
