declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    activeNames: import("vue").PropType<import("./props").CollapseName[]>;
    defaultActiveNames: {
        type: import("vue").PropType<import("./props").CollapseName[]>;
        default: () => never[];
    };
    accordion: BooleanConstructor;
    showExpandIcon: BooleanConstructor;
    expandIconPosition: {
        type: import("vue").PropType<import("./props").ExpandIconPosition>;
        default: string;
        validator: (value: import("./props").ExpandIconPosition) => boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    divider: {
        type: BooleanConstructor;
        default: boolean;
    };
    offset: BooleanConstructor;
    destroyOnHide: BooleanConstructor;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:activeNames': (activeNames: (string | number)[]) => true;
    /**
     * @zh 展开的面板发生改变时触发
     * @en Emitted when the expanded panel changes
     * @param {(string | number)[]} activeNames
     * @param {Event} ev
     */
    change: (activeNames: (string | number)[], ev: Event) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    activeNames: import("vue").PropType<import("./props").CollapseName[]>;
    defaultActiveNames: {
        type: import("vue").PropType<import("./props").CollapseName[]>;
        default: () => never[];
    };
    accordion: BooleanConstructor;
    showExpandIcon: BooleanConstructor;
    expandIconPosition: {
        type: import("vue").PropType<import("./props").ExpandIconPosition>;
        default: string;
        validator: (value: import("./props").ExpandIconPosition) => boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    divider: {
        type: BooleanConstructor;
        default: boolean;
    };
    offset: BooleanConstructor;
    destroyOnHide: BooleanConstructor;
}>> & Readonly<{
    onChange?: ((activeNames: (string | number)[], ev: Event) => any) | undefined;
    "onUpdate:activeNames"?: ((activeNames: (string | number)[]) => any) | undefined;
}>, {
    offset: boolean;
    bordered: boolean;
    divider: boolean;
    defaultActiveNames: import("./props").CollapseName[];
    accordion: boolean;
    showExpandIcon: boolean;
    expandIconPosition: "left" | "right";
    destroyOnHide: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
