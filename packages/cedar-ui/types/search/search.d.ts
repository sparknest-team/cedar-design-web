import { PropType, StyleValue } from 'vue';
import { ButtonProps } from '../button';
import type { ComponentSize } from '../_utils/constant';
import { SelectOptionData } from '../select';
import type { SearchResult } from './result';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: StringConstructor;
    searchButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
    };
    variant: {
        type: PropType<"filled" | "outlined" | "standard">;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    buttonText: {
        type: StringConstructor;
    };
    buttonProps: {
        type: PropType<ButtonProps>;
    };
    recentSearches: {
        type: PropType<string[]>;
        default: () => never[];
    };
    fields: {
        type: PropType<SelectOptionData[]>;
        default: () => never[];
    };
    selectStyle: {
        type: PropType<StyleValue>;
    };
    defaultField: {
        type: StringConstructor;
    };
    modelField: {
        type: StringConstructor;
    };
    model: {
        type: PropType<Record<string, any>>;
    };
    maxSearchHistoryCount: {
        type: NumberConstructor;
        default: number;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    inputRef: import("vue").Ref<any, any>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    focus(): void;
    blur(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    search: (data: SearchResult, ev: MouseEvent | KeyboardEvent | Event) => true;
    change: (value: string, ev?: Event) => true;
    'update:modelValue': (value: string) => true;
    'update:modelField': (value: string) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    defaultValue: StringConstructor;
    searchButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
    };
    variant: {
        type: PropType<"filled" | "outlined" | "standard">;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    buttonText: {
        type: StringConstructor;
    };
    buttonProps: {
        type: PropType<ButtonProps>;
    };
    recentSearches: {
        type: PropType<string[]>;
        default: () => never[];
    };
    fields: {
        type: PropType<SelectOptionData[]>;
        default: () => never[];
    };
    selectStyle: {
        type: PropType<StyleValue>;
    };
    defaultField: {
        type: StringConstructor;
    };
    modelField: {
        type: StringConstructor;
    };
    model: {
        type: PropType<Record<string, any>>;
    };
    maxSearchHistoryCount: {
        type: NumberConstructor;
        default: number;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSearch?: ((data: SearchResult, ev: Event | MouseEvent | KeyboardEvent) => any) | undefined;
    onChange?: ((value: string, ev?: Event | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    "onUpdate:modelField"?: ((value: string) => any) | undefined;
}>, {
    disabled: boolean;
    clearable: boolean;
    loading: boolean;
    fields: SelectOptionData[];
    searchButton: boolean;
    recentSearches: string[];
    maxSearchHistoryCount: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
