import type { ExtractPropTypes, PropType } from 'vue';
import type { SemanticStatus } from '../_utils/constant';
export declare const linkUnderlines: readonly ["always", "hover", "none"];
export type LinkUnderline = (typeof linkUnderlines)[number];
export declare const linkProps: {
    href: StringConstructor;
    target: StringConstructor;
    rel: StringConstructor;
    status: {
        type: PropType<SemanticStatus>;
        default: string;
        validator: (value: unknown) => value is SemanticStatus;
    };
    underline: {
        type: PropType<LinkUnderline>;
        default: string;
        validator: (value: unknown) => value is LinkUnderline;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: BooleanConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
};
export type LinkProps = ExtractPropTypes<typeof linkProps>;
