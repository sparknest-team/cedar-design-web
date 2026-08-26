import type { PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { TabVariant, TabTriggerEvent, ScrollPosition } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    active: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    defaultActive: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    indicatorPosition: {
        type: PropType<"normal" | "reverse">;
        default: string;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    variant: {
        type: PropType<TabVariant>;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAddButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    justify: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideContent: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<TabTriggerEvent>;
        default: string;
    };
    scrollPosition: {
        type: PropType<ScrollPosition>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:active': (key: string | number) => true;
    /**
     * @zh 当前标签值改变时触发
     * @en Triggered when the current tag value changes
     * @property { string | number } key
     */
    change: (key: string | number) => true;
    /**
     * @zh 用户点击标签时触发
     * @en Triggered when the user clicks on the tab
     * @property { string | number } key
     */
    tabClick: (key: string | number, ev: Event) => true;
    /**
     * @zh 用户点击增加按钮时触发
     * @en Triggered when the user clicks the add button
     */
    add: (ev: Event) => true;
    /**
     * @zh 用户点击删除按钮时触发
     * @en Triggered when the user clicks the delete button
     * @property { string | number } key
     */
    delete: (key: string | number, ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    defaultActive: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    indicatorPosition: {
        type: PropType<"normal" | "reverse">;
        default: string;
    };
    size: {
        type: PropType<ComponentSize>;
    };
    variant: {
        type: PropType<TabVariant>;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAddButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    justify: {
        type: BooleanConstructor;
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideContent: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<TabTriggerEvent>;
        default: string;
    };
    scrollPosition: {
        type: PropType<ScrollPosition>;
        default: string;
    };
}>> & Readonly<{
    onDelete?: ((key: string | number, ev: Event) => any) | undefined;
    onAdd?: ((ev: Event) => any) | undefined;
    onChange?: ((key: string | number) => any) | undefined;
    "onUpdate:active"?: ((key: string | number) => any) | undefined;
    onTabClick?: ((key: string | number, ev: Event) => any) | undefined;
}>, {
    vertical: boolean;
    justify: boolean;
    active: string | number;
    variant: TabVariant;
    animation: boolean;
    trigger: TabTriggerEvent;
    indicatorPosition: "reverse" | "normal";
    destroyOnHide: boolean;
    editable: boolean;
    defaultActive: string | number;
    showAddButton: boolean;
    lazyLoad: boolean;
    headerPadding: boolean;
    autoSwitch: boolean;
    hideContent: boolean;
    scrollPosition: ScrollPosition;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
