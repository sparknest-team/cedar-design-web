import type { Component } from 'vue';
/** 筛选项 schema */
export interface FilterFormField {
    /** `fieldMap` 的 key，或直接传入 Vue 组件 */
    type: string | Component;
    /** 表单字段路径，对齐 FormItem.field */
    field: string;
    label?: string;
    visible?: boolean;
    /** 为 false 时输入过程不触发 change（blur / enter 仍会） */
    autoEmitChange?: boolean;
    gridItemProps?: Record<string, unknown>;
    formItemProps?: Record<string, unknown>;
    /** 透传给字段组件的 props */
    props?: Record<string, unknown>;
}
export interface FilterFormFieldRegistration {
    component: Component;
    /**
     * 触发表单值同步的事件。
     * Input / Textarea 用 `update:modelValue`；Select / Date 等一般用 `change`。
     * @default 'change'
     */
    valueEvent?: 'change' | 'update:modelValue';
    /**
     * 为 true 时，若字段未传 options，则从 `optionsMap[field]` 注入。
     * @default false
     */
    optionsFromMap?: boolean;
    /** 合并进字段组件的默认 props（字段 props 优先） */
    defaultProps?: Record<string, unknown>;
}
export type FilterFormFieldMap = Record<string, Component | FilterFormFieldRegistration>;
export declare function normalizeFieldRegistration(entry: Component | FilterFormFieldRegistration | undefined): FilterFormFieldRegistration | undefined;
