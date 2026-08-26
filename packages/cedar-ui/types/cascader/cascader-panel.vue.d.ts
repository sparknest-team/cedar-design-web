import { PropType } from 'vue';
import { Data } from '../_utils/types';
import { CascaderFieldNames, CascaderOption, CascaderOptionInfo } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 绑定值是否为路径
     * @en Whether the value is a path
     */
    pathMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否为多选状态（多选模式默认开启搜索）
     * @en Whether it is a multi-selection state (The search is turned on by default in the multi-select mode)
     */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
        type: PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
    };
    /**
     * @zh 默认值（非受控状态）
     * @en Default value (uncontrolled state)
     * @defaultValue '' \| undefined \| []
     */
    defaultValue: {
        type: PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        default: (props: Data) => "" | never[] | undefined;
    };
    /**
     * @zh 级联选择器的选项
     * @en Options for cascader
     */
    options: {
        type: PropType<CascaderOption[]>;
        default: () => never[];
    };
    /**
     * @zh 展开下一级的触发方式
     * @en Expand the trigger method of the next level
     */
    expandTrigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    /**
     * @zh 是否开启严格选择模式
     * @en Whether to enable strict selection mode
     */
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 数据懒加载函数，传入时开启懒加载功能
     * @en Data lazy loading function, open the lazy loading function when it is passed in
     * @version 2.13.0
     */
    loadMore: {
        type: PropType<(option: CascaderOption, done: (children?: CascaderOption[]) => void) => void>;
    };
    /**
     * @zh 自定义 `CascaderOption` 中的字段；当选项值为对象时，也用其中的 `value` 作为键属性
     * @en Customize fields in `CascaderOption`; when option value is an object, `value` is also used as the key property
     * @version 2.22.0
     */
    fieldNames: {
        type: PropType<CascaderFieldNames>;
    };
    /**
     * @zh 是否展开子菜单
     * @en whether to expand the submenu
     * @version 2.29.0
     */
    expandChild: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    optionInfos: import("vue").Ref<{
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        valueKey: string;
        level: number;
        index: number;
        value: string | number;
        label: string;
        disabled: boolean;
        selectionDisabled: boolean;
        isLeaf: boolean;
        parent?: any | undefined;
        children?: any[] | undefined;
        path: any[];
        pathValue: any[];
        totalLeafOptions?: number | undefined;
        render?: import("vue").RenderFunction | undefined;
        tagProps?: {
            closable: boolean;
            nowrap: boolean;
            variant: import("..").TagVariant;
            loading: boolean;
            defaultShow: boolean;
            checkable: boolean;
            defaultChecked: boolean;
            size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            color?: string | undefined;
            show?: boolean | undefined;
            status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
            checked?: boolean | undefined;
        } | undefined;
    }[], CascaderOptionInfo[] | {
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        valueKey: string;
        level: number;
        index: number;
        value: string | number;
        label: string;
        disabled: boolean;
        selectionDisabled: boolean;
        isLeaf: boolean;
        parent?: any | undefined;
        children?: any[] | undefined;
        path: any[];
        pathValue: any[];
        totalLeafOptions?: number | undefined;
        render?: import("vue").RenderFunction | undefined;
        tagProps?: {
            closable: boolean;
            nowrap: boolean;
            variant: import("..").TagVariant;
            loading: boolean;
            defaultShow: boolean;
            checkable: boolean;
            defaultChecked: boolean;
            size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            color?: string | undefined;
            show?: boolean | undefined;
            status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
            checked?: boolean | undefined;
        } | undefined;
    }[]>;
    filteredLeafOptions: import("vue").ComputedRef<{
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        valueKey: string;
        level: number;
        index: number;
        value: string | number;
        label: string;
        disabled: boolean;
        selectionDisabled: boolean;
        isLeaf: boolean;
        parent?: any | undefined;
        children?: any[] | undefined;
        path: any[];
        pathValue: any[];
        totalLeafOptions?: number | undefined;
        render?: import("vue").RenderFunction | undefined;
        tagProps?: {
            closable: boolean;
            nowrap: boolean;
            variant: import("..").TagVariant;
            loading: boolean;
            defaultShow: boolean;
            checkable: boolean;
            defaultChecked: boolean;
            size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
            color?: string | undefined;
            show?: boolean | undefined;
            status?: "default" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "danger" | undefined;
            checked?: boolean | undefined;
        } | undefined;
    }[]>;
    selectedPath: import("vue").Ref<string[], string[]>;
    activeKey: import("vue").Ref<string | undefined, string | undefined>;
    displayColumns: import("vue").ComputedRef<CascaderOptionInfo[][]>;
    handleKeyDown: (event: KeyboardEvent) => void;
    totalLevel: import("vue").Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
    /**
     * @zh 选中值改变时触发
     * @en Triggered when the selected value changes
     * @property {string | number | (string | number | (string | number)[])[] | undefined} value
     */
    change: (value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 绑定值是否为路径
     * @en Whether the value is a path
     */
    pathMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否为多选状态（多选模式默认开启搜索）
     * @en Whether it is a multi-selection state (The search is turned on by default in the multi-select mode)
     */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
        type: PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
    };
    /**
     * @zh 默认值（非受控状态）
     * @en Default value (uncontrolled state)
     * @defaultValue '' \| undefined \| []
     */
    defaultValue: {
        type: PropType<string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined>;
        default: (props: Data) => "" | never[] | undefined;
    };
    /**
     * @zh 级联选择器的选项
     * @en Options for cascader
     */
    options: {
        type: PropType<CascaderOption[]>;
        default: () => never[];
    };
    /**
     * @zh 展开下一级的触发方式
     * @en Expand the trigger method of the next level
     */
    expandTrigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    /**
     * @zh 是否开启严格选择模式
     * @en Whether to enable strict selection mode
     */
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 数据懒加载函数，传入时开启懒加载功能
     * @en Data lazy loading function, open the lazy loading function when it is passed in
     * @version 2.13.0
     */
    loadMore: {
        type: PropType<(option: CascaderOption, done: (children?: CascaderOption[]) => void) => void>;
    };
    /**
     * @zh 自定义 `CascaderOption` 中的字段；当选项值为对象时，也用其中的 `value` 作为键属性
     * @en Customize fields in `CascaderOption`; when option value is an object, `value` is also used as the key property
     * @version 2.22.0
     */
    fieldNames: {
        type: PropType<CascaderFieldNames>;
    };
    /**
     * @zh 是否展开子菜单
     * @en whether to expand the submenu
     * @version 2.29.0
     */
    expandChild: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined) => any) | undefined;
}>, {
    multiple: boolean;
    defaultValue: string | number | Record<string, any> | (string | number | Record<string, any> | (string | number | Record<string, any>)[])[] | undefined;
    options: CascaderOption[];
    checkStrictly: boolean;
    pathMode: boolean;
    expandTrigger: "hover" | "click";
    expandChild: boolean;
}, {}, {
    BaseCascaderPanel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        displayColumns: {
            type: PropType<CascaderOptionInfo[][]>;
            required: true;
        };
        selectedPath: {
            type: PropType<string[]>;
            required: true;
        };
        activeKey: StringConstructor;
        totalLevel: {
            type: NumberConstructor;
            required: true;
        };
        multiple: BooleanConstructor;
        checkStrictly: BooleanConstructor;
        loading: BooleanConstructor;
        dropdown: BooleanConstructor;
        virtualListProps: {
            type: PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        displayColumns: {
            type: PropType<CascaderOptionInfo[][]>;
            required: true;
        };
        selectedPath: {
            type: PropType<string[]>;
            required: true;
        };
        activeKey: StringConstructor;
        totalLevel: {
            type: NumberConstructor;
            required: true;
        };
        multiple: BooleanConstructor;
        checkStrictly: BooleanConstructor;
        loading: BooleanConstructor;
        dropdown: BooleanConstructor;
        virtualListProps: {
            type: PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
    }>> & Readonly<{}>, {
        multiple: boolean;
        loading: boolean;
        checkStrictly: boolean;
        dropdown: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
