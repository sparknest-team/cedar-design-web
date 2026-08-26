import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { ButtonProps } from '../button';
import type { MessageType, TriggerPosition } from '../_utils/constant';
import type { ClassName } from '../_utils/types';
export type PopconfirmBeforeOk = (done: (closed?: boolean) => void) => void | boolean | Promise<void | boolean>;
export declare const popconfirmProps: {
    content: StringConstructor;
    placement: {
        type: PropType<TriggerPosition>;
        default: string;
        validator: (value: TriggerPosition) => boolean;
    };
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: BooleanConstructor;
    type: {
        type: PropType<MessageType>;
        default: string;
        validator: (value: MessageType) => boolean;
    };
    okText: StringConstructor;
    cancelText: StringConstructor;
    okLoading: BooleanConstructor;
    okButtonProps: PropType<ButtonProps>;
    cancelButtonProps: PropType<ButtonProps>;
    contentClass: PropType<ClassName>;
    contentStyle: PropType<CSSProperties>;
    arrowClass: PropType<ClassName>;
    arrowStyle: PropType<CSSProperties>;
    popupContainer: PropType<string | HTMLElement>;
    beforeOk: PropType<PopconfirmBeforeOk>;
    beforeCancel: PropType<() => boolean>;
};
export type PopconfirmProps = Partial<ExtractPropTypes<typeof popconfirmProps>>;
