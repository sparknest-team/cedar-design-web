import type { ExtractPropTypes, PropType } from 'vue';
export declare const dividerProps: {
    sizeX: {
        type: PropType<number | string | Array<number | string>>;
    };
    sizeY: {
        type: PropType<number | string | Array<number | string>>;
        default: () => string;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: () => string;
    };
    textAlign: {
        type: PropType<"start" | "center" | "end">;
        default: string;
    };
    description: StringConstructor;
    type: {
        type: PropType<"dashed" | "dotted" | "solid" | "double">;
        default: () => string;
    };
    hairline: BooleanConstructor;
    thickness: NumberConstructor;
    color: StringConstructor;
    opacity: NumberConstructor;
};
export type DividerProps = ExtractPropTypes<typeof dividerProps>;
