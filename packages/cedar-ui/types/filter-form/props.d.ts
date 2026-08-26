import type { ExtractPropTypes, PropType } from 'vue';
import type { FieldRule } from '../form/types';
import type { FilterFormField, FilterFormFieldMap } from './types';
export type { FilterFormField, FilterFormFieldMap, FilterFormFieldRegistration, } from './types';
export declare const filterFormProps: {
    /**
     * 表单值（v-model）
     */
    modelValue: {
        type: PropType<Record<string, unknown>>;
        default: () => {};
    };
    /**
     * 筛选项 schema
     */
    fields: {
        type: PropType<FilterFormField[]>;
        default: () => never[];
    };
    /**
     * 字段组件注册表；key 对应 `fields[].type`，用到谁注册谁
     */
    fieldMap: {
        type: PropType<FilterFormFieldMap>;
        default: () => {};
    };
    /**
     * 字段 options 字典；`optionsFromMap` 注册项会读取 `optionsMap[field]`
     */
    optionsMap: {
        type: PropType<Record<string, unknown>>;
        default: () => {};
    };
    /**
     * 表单校验规则，透传 Form
     */
    rules: {
        type: PropType<Record<string, FieldRule | FieldRule[]>>;
    };
    /**
     * 默认是否折叠多余筛选项（可用 v-model:collapsed）
     */
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否启用展开/收起（不依赖 actions 插槽是否存在）
     */
    collapsible: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 响应式列数，透传 Grid
     */
    cols: {
        type: PropType<number | Record<string, number>>;
        default: () => {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
        };
    };
    /**
     * Grid 其余属性
     */
    gridProps: {
        type: PropType<Record<string, unknown>>;
    };
    /**
     * change 事件防抖毫秒
     */
    changeDebounce: {
        type: NumberConstructor;
        default: number;
    };
};
export type FilterFormProps = ExtractPropTypes<typeof filterFormProps>;
