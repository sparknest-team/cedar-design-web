import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize, SemanticStatus } from '../_utils/constant';
import type { TagColor, TagVariant } from './types';
export declare const tagVariants: readonly ["default", "outline"];
export declare const tagProps: {
    color: PropType<TagColor | string>;
    size: PropType<ComponentSize>;
    status: PropType<SemanticStatus>;
    variant: {
        type: PropType<TagVariant>;
        default: string;
        validator: (value: unknown) => value is TagVariant;
    };
    show: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: {
        type: BooleanConstructor;
        default: boolean;
    };
    checked: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    nowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type TagProps = ExtractPropTypes<typeof tagProps>;
