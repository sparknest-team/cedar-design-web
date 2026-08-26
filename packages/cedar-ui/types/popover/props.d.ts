import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { TriggerEvent } from '../_utils/constant';
import type { ClassName } from '../_utils/types';
import type { PopoverPlacement, PopoverTrigger } from './types';
export declare const popoverProps: {
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: BooleanConstructor;
    title: StringConstructor;
    content: StringConstructor;
    trigger: {
        type: PropType<PopoverTrigger | PopoverTrigger[]>;
        default: string;
        validator: (value: PopoverTrigger | PopoverTrigger[]) => boolean;
    };
    disabled: BooleanConstructor;
    placement: {
        type: PropType<PopoverPlacement>;
        default: string;
        validator: (value: PopoverPlacement) => boolean;
    };
    contentClass: PropType<ClassName>;
    contentStyle: PropType<CSSProperties>;
    arrowClass: PropType<ClassName>;
    arrowStyle: PropType<CSSProperties>;
    popupContainer: PropType<string | HTMLElement>;
    escToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type PopoverProps = Partial<ExtractPropTypes<typeof popoverProps>>;
export type { TriggerEvent };
