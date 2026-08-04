export interface SearchField {
  value: any
  label: string
  placeholder?: string
}

export interface SearchProps {
  modelValue?: string
  defaultValue?: string
  searchField?: string
  modelField?: string
  defaultField?: string
  searchText?: string
  model?: any
  selectStyle?: any
  searchButton?: boolean
  loading?: boolean
  disabled?: boolean
  variant?: 'outline' | 'default'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  buttonText?: string
  buttonProps?: any
  recentSearches?: string[]
  // 搜索字段可选项
  fields?: SearchField[]
  placeholder?: string
  maxSearchHistoryCount?: number
  clearable?: boolean
}
