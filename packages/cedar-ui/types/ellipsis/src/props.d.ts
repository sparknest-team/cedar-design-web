import { type ExtractPropTypes, type PropType } from 'vue';
import { tooltipProps } from '../../tooltip';
import { type ExtractPublicPropTypes } from '../../_utils/components';
export type EllipsisExpandTrigger = 'click';
export declare const ellipsisProps: {
    expand: BooleanConstructor;
    expandTrigger: PropType<EllipsisExpandTrigger>;
    lineClamp: (StringConstructor | NumberConstructor)[];
    tooltip: {
        type: PropType<ExtractPublicPropTypes<typeof tooltipProps> | boolean>;
        default: boolean;
    };
};
export type EllipsisProps = ExtractPropTypes<typeof ellipsisProps>;
