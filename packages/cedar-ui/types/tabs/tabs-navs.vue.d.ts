import type { TabsNavContext } from './context';
declare const _default: import("vue").DefineComponent<{}, {
    tabs: import("vue").ComputedRef<import("./types").TabData[]>;
    activeKey: import("vue").ComputedRef<string | number>;
    activeIndex: import("vue").ComputedRef<number>;
    vertical: import("vue").ComputedRef<boolean>;
    indicatorPosition: import("vue").ComputedRef<"reverse" | "normal">;
    size: import("vue").ComputedRef<string>;
    variant: import("vue").ComputedRef<import("./types").TabVariant>;
    editable: import("vue").ComputedRef<boolean>;
    animation: import("vue").ComputedRef<boolean>;
    showAddButton: import("vue").ComputedRef<boolean>;
    headerPadding: import("vue").ComputedRef<boolean>;
    scrollPosition: import("vue").ComputedRef<import("./types").ScrollPosition>;
    navCtx: TabsNavContext;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    TabsNav: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        tabs: {
            type: import("vue").PropType<import("./types").TabData[]>;
            required: true;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import("vue").PropType<import("./types").TabVariant>;
            required: true;
        };
        activeKey: {
            type: (StringConstructor | NumberConstructor)[];
        };
        activeIndex: {
            type: NumberConstructor;
            required: true;
        };
        indicatorPosition: {
            type: import("vue").PropType<"normal" | "reverse">;
            default: string;
        };
        size: {
            type: StringConstructor;
            required: true;
        };
        showAddButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        editable: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            required: true;
        };
        headerPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollPosition: {
            type: import("vue").PropType<import("./types").ScrollPosition>;
            default: string;
        };
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "delete" | "add")[], "click" | "delete" | "add", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        tabs: {
            type: import("vue").PropType<import("./types").TabData[]>;
            required: true;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        variant: {
            type: import("vue").PropType<import("./types").TabVariant>;
            required: true;
        };
        activeKey: {
            type: (StringConstructor | NumberConstructor)[];
        };
        activeIndex: {
            type: NumberConstructor;
            required: true;
        };
        indicatorPosition: {
            type: import("vue").PropType<"normal" | "reverse">;
            default: string;
        };
        size: {
            type: StringConstructor;
            required: true;
        };
        showAddButton: {
            type: BooleanConstructor;
            default: boolean;
        };
        editable: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            required: true;
        };
        headerPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollPosition: {
            type: import("vue").PropType<import("./types").ScrollPosition>;
            default: string;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onDelete?: ((...args: any[]) => any) | undefined;
        onAdd?: ((...args: any[]) => any) | undefined;
    }>, {
        vertical: boolean;
        indicatorPosition: "reverse" | "normal";
        editable: boolean;
        showAddButton: boolean;
        headerPadding: boolean;
        scrollPosition: import("./types").ScrollPosition;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
