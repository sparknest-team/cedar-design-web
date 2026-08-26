import type { EllipsisConfig } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    component: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        required: boolean;
    };
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    bold: BooleanConstructor;
    mark: {
        type: import("vue").PropType<boolean | {
            color: string;
        }>;
        default: boolean;
    };
    underline: BooleanConstructor;
    delete: BooleanConstructor;
    code: BooleanConstructor;
    disabled: BooleanConstructor;
    editable: BooleanConstructor;
    editing: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultEditing: BooleanConstructor;
    editText: StringConstructor;
    copyable: BooleanConstructor;
    copyText: StringConstructor;
    copyDelay: {
        type: NumberConstructor;
        default: number;
    };
    ellipsis: {
        type: import("vue").PropType<boolean | EllipsisConfig>;
        default: boolean;
    };
    editTooltipProps: import("vue").PropType<Record<string, unknown>>;
    copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 开始编辑
     * @en Edit start
     */
    editStart: () => true;
    /**
     * @zh 编辑内容变化
     * @en Edit content change
     * @param {string} text
     */
    change: (text: string) => true;
    'update:editText': (text: string) => true;
    /**
     * @zh 编辑结束
     * @en Edit end
     */
    editEnd: () => true;
    'update:editing': (editing: boolean) => true;
    /**
     * @zh 复制
     * @en Copy
     * @param {string} text
     */
    copy: (text: string) => true;
    /**
     * @zh 省略变化事件
     * @en Ellipsis change
     * @param {boolean} isEllipsis
     */
    ellipsis: (isEllipsis: boolean) => true;
    /**
     * @zh 展开收起事件
     * @en Expand collapse event
     * @param {boolean} expanded
     */
    expand: (expanded: boolean) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    component: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        required: boolean;
    };
    status: {
        type: import("vue").PropType<import("..").SemanticStatus>;
        validator: (value: unknown) => value is import("..").SemanticStatus;
    };
    bold: BooleanConstructor;
    mark: {
        type: import("vue").PropType<boolean | {
            color: string;
        }>;
        default: boolean;
    };
    underline: BooleanConstructor;
    delete: BooleanConstructor;
    code: BooleanConstructor;
    disabled: BooleanConstructor;
    editable: BooleanConstructor;
    editing: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultEditing: BooleanConstructor;
    editText: StringConstructor;
    copyable: BooleanConstructor;
    copyText: StringConstructor;
    copyDelay: {
        type: NumberConstructor;
        default: number;
    };
    ellipsis: {
        type: import("vue").PropType<boolean | EllipsisConfig>;
        default: boolean;
    };
    editTooltipProps: import("vue").PropType<Record<string, unknown>>;
    copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
}>> & Readonly<{
    onChange?: ((text: string) => any) | undefined;
    onCopy?: ((text: string) => any) | undefined;
    onEllipsis?: ((isEllipsis: boolean) => any) | undefined;
    onExpand?: ((expanded: boolean) => any) | undefined;
    onEditStart?: (() => any) | undefined;
    "onUpdate:editText"?: ((text: string) => any) | undefined;
    onEditEnd?: (() => any) | undefined;
    "onUpdate:editing"?: ((editing: boolean) => any) | undefined;
}>, {
    delete: boolean;
    bold: boolean;
    code: boolean;
    mark: boolean | {
        color: string;
    };
    disabled: boolean;
    underline: boolean;
    ellipsis: boolean | EllipsisConfig;
    editable: boolean;
    editing: boolean;
    defaultEditing: boolean;
    copyable: boolean;
    copyDelay: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
