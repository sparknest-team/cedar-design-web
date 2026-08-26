export interface SearchField {
    value: any;
    label: string;
    placeholder?: string;
}
export interface SearchProps {
    modelValue?: string;
    defaultValue?: string;
    modelField?: string;
    defaultField?: string;
    model?: any;
    selectStyle?: any;
    searchButton?: boolean;
    loading?: boolean;
    disabled?: boolean;
    variant?: 'filled' | 'outlined' | 'standard';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    buttonText?: string;
    buttonProps?: any;
    recentSearches?: string[];
    fields?: SearchField[];
    placeholder?: string;
    maxSearchHistoryCount?: number;
    clearable?: boolean;
}
