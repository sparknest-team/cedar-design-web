import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { TriggerPosition } from '../_utils/constant';
import type { ClassName } from '../_utils/types';
export declare const tooltipProps: {
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: BooleanConstructor;
    content: StringConstructor;
    placement: {
        type: PropType<TriggerPosition>;
        default: string;
        validator: (value: TriggerPosition) => boolean;
    };
    xs: BooleanConstructor;
    backgroundColor: StringConstructor;
    contentClass: PropType<ClassName>;
    contentStyle: PropType<CSSProperties>;
    arrowClass: PropType<ClassName>;
    arrowStyle: PropType<CSSProperties>;
    popupContainer: PropType<string | HTMLElement>;
};
export type TooltipProps = Partial<ExtractPropTypes<typeof tooltipProps>>;
