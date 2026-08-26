import type { ExtractPropTypes, PropType } from 'vue';
import type { MessageType } from '../_utils/constant';
export declare const messageTypes: readonly ["info", "success", "warning", "error", "loading", "normal"];
export type MessageStatus = (typeof messageTypes)[number];
export declare const messageProps: {
    type: {
        type: PropType<MessageStatus>;
        default: string;
        validator: (value: MessageStatus) => boolean;
    };
    closable: BooleanConstructor;
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    resetOnUpdate: BooleanConstructor;
    resetOnHover: BooleanConstructor;
    closeButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
};
export type MessageProps = Partial<ExtractPropTypes<typeof messageProps>>;
export type { MessageType };
