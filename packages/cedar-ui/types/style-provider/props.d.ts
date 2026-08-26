import type { PropType } from 'vue';
import type { StyleVars } from '../_utils/maple/elements';
export declare const styleProviderProps: {
    styleVars: {
        type: PropType<StyleVars>;
        default: () => {};
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
};
export type StyleProviderProps = {
    styleVars?: StyleVars;
    tag?: string;
};
