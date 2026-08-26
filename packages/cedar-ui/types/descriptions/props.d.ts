import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize, TextAlign } from '../_utils/constant';
import type { ResponsiveValue } from '../grid';
import type { DescData, DescLayout } from './types';
export type DescriptionsAlign = TextAlign | {
    label?: TextAlign;
    value?: TextAlign;
};
export declare const descriptionsProps: {
    data: {
        type: PropType<DescData[]>;
        default: () => never[];
    };
    column: {
        type: PropType<number | ResponsiveValue>;
        default: number;
        validator: (value: number | ResponsiveValue) => boolean;
    };
    title: StringConstructor;
    layout: {
        type: PropType<DescLayout>;
        default: string;
        validator: (value: DescLayout) => boolean;
    };
    align: {
        type: PropType<DescriptionsAlign>;
        default: string;
    };
    size: {
        type: PropType<ComponentSize>;
        validator: (value: ComponentSize) => boolean;
    };
    bordered: BooleanConstructor;
    labelStyle: PropType<CSSProperties>;
    valueStyle: PropType<CSSProperties>;
    tableLayout: {
        type: PropType<"auto" | "fixed">;
        default: string;
        validator: (value: string) => boolean;
    };
    ariaLabel: StringConstructor;
};
export declare const descriptionsItemProps: {
    span: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    label: StringConstructor;
};
export type DescriptionsProps = Partial<ExtractPropTypes<typeof descriptionsProps>>;
export type DescriptionsItemProps = Partial<ExtractPropTypes<typeof descriptionsItemProps>>;
