# Grid 与 Row/Col 职责分离

按用户要求删除 Grid.Row/Grid.Col、Grid 入口对 Row/Col 及其 Props/类型的转导出、GridRowInstance/GridColInstance，安装 Grid 仅安装 Grid/GridItem。Row/Col 独立入口和独立 Demo 保持。Grid.Item 保留。两端同步迁移使用方、测试与文档，不保留兼容别名。
