import type { ExtractPropTypes, PropType } from 'vue';
import type { MessageType } from '../_utils/constant';
export declare const notificationProps: {
    type: {
        type: PropType<MessageType>;
        default: string;
        validator: (value: MessageType) => boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: BooleanConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    resetOnUpdate: BooleanConstructor;
    closeButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
};
export type NotificationProps = Partial<ExtractPropTypes<typeof notificationProps>>;
