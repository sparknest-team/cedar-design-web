import type { ComputedRef } from 'vue';
import { ComponentSize, SemanticStatus } from '../_utils/constant';
import { ButtonVariant } from './props';
export interface ButtonGroupProvider {
    status: ComputedRef<SemanticStatus>;
    variant: ComputedRef<ButtonVariant>;
    size: ComputedRef<ComponentSize>;
    color: ComputedRef<string | undefined>;
    textColor: ComputedRef<string | undefined>;
    stacked: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
    vertical: ComputedRef<boolean>;
}
export declare const BUTTON_GROUP_BIND_BUTTON_KEY: unique symbol;
export declare function useButtons(): {
    length: import("vue").ComputedRef<number>;
    buttons: null[];
    bindButtons: (parentProvider: ButtonGroupProvider) => void;
};
export declare function useButtonGroup(): {
    index: import("vue").ComputedRef<number> | null;
    buttonGroup: Omit<ButtonGroupProvider & import("@cedarjs/use").UseChildrenBaseProvider<null>, "clear" | "childInstances" | "collect"> | null;
    bindButtonGroup: ((childProvider: null) => void) | null;
};
