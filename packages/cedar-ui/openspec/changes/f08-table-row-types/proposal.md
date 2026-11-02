# F08-A Table 行与列的可选类型关联

用户要求逐项制定并实施；本轮仅 Table。新增主动选用的 TypedTableConfig<Row>、TypedTableColumn<Row> 等类型及 defineTableConfig<Row> 入口，将行数据与列路径、渲染、排序、筛选、分组子列及行回调关联。原 TableData/TableColumnData/TableProps、组件实现和运行行为保留。Maple Table 仅为原生表格展示容器，不新增 data/columns API。

兼容风险：仅新入口采用准确类型和显式 rowKey；旧宽类型继续可用。自动合计行可能不是 Row，故新入口不承诺 summary=true 可产生 Row；可提供返回完整 Row 的自定义合计，或继续使用原组件配置。
