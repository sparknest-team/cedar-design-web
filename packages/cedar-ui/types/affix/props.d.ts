import type { ExtractPropTypes, PropType } from 'vue';
export type AffixTarget = string | HTMLElement | Window;
export declare const affixProps: {
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
    offsetBottom: NumberConstructor;
    target: PropType<AffixTarget>;
    targetContainer: PropType<AffixTarget>;
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    disabled: BooleanConstructor;
    cssMode: BooleanConstructor;
};
export type AffixProps = Partial<ExtractPropTypes<typeof affixProps>>;
