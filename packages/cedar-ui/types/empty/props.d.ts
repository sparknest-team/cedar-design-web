import type { ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
export type EmptyImageSize = ComponentSize | number | string;
export declare const emptyProps: {
    description: StringConstructor;
    imageUrl: StringConstructor;
    alt: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    imageSize: {
        type: PropType<EmptyImageSize>;
        default: string;
    };
    inConfigProvider: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
