import type { ExtractPropTypes, PropType } from 'vue';
export type CollapseName = string | number;
export declare const expandIconPositions: readonly ["left", "right"];
export type ExpandIconPosition = (typeof expandIconPositions)[number];
export declare const collapseProps: {
    activeNames: PropType<CollapseName[]>;
    defaultActiveNames: {
        type: PropType<CollapseName[]>;
        default: () => never[];
    };
    accordion: BooleanConstructor;
    showExpandIcon: BooleanConstructor;
    expandIconPosition: {
        type: PropType<ExpandIconPosition>;
        default: string;
        validator: (value: ExpandIconPosition) => boolean;
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
};
export declare const collapseItemProps: {
    name: {
        type: PropType<CollapseName>;
        required: boolean;
    };
    title: StringConstructor;
    disabled: BooleanConstructor;
    showExpandIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnHide: BooleanConstructor;
};
export type CollapseProps = Partial<ExtractPropTypes<typeof collapseProps>>;
export type CollapseItemProps = Partial<ExtractPropTypes<typeof collapseItemProps>> & {
    name: CollapseName;
};
