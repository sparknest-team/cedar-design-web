export interface SearchField {
  value: any
  label: string
  placeholder?: string
}

export interface SearchProps {
  searchField?: string
  defaultField?: string
  searchText?: string
  model?: any
  selectStyle?: any
  // 搜索字段可选项
  fields?: SearchField[]
  placeholder?: string
  // 开启搜索历史记录
  enableSearchHistory?: boolean
  // 搜索历史记录记录的数量
  searchHistoryMaxCount?: number
  searchHistoryKey?: string
}
