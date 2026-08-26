import _GridRow from './grid-row.vue';
import _GridCol from './grid-col.vue';
import _Grid from './grid.vue';
import _GridItem from './grid-item.vue';
import { gridProps } from './props';
declare const Grid: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        cols: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        rowGap: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        colGap: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        collapsed: {
            type: BooleanConstructor;
            default: boolean;
        };
        collapsedRows: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {
        classNames: import("vue").ComputedRef<string[]>;
        style: import("vue").ComputedRef<{
            gap: string;
            'grid-template-columns': string;
        }[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        rowGap: number | import("./types").ResponsiveValue;
        cols: number | import("./types").ResponsiveValue;
        collapsed: boolean;
        collapsedRows: number;
        colGap: number | import("./types").ResponsiveValue;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        cols: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        rowGap: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        colGap: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        collapsed: {
            type: BooleanConstructor;
            default: boolean;
        };
        collapsedRows: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {
        classNames: import("vue").ComputedRef<string[]>;
        style: import("vue").ComputedRef<{
            gap: string;
            'grid-template-columns': string;
        }[]>;
    }, {}, {}, {}, {
        rowGap: number | import("./types").ResponsiveValue;
        cols: number | import("./types").ResponsiveValue;
        collapsed: boolean;
        collapsedRows: number;
        colGap: number | import("./types").ResponsiveValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    cols: {
        type: import("vue").PropType<number | import("./types").ResponsiveValue>;
        default: number;
    };
    rowGap: {
        type: import("vue").PropType<number | import("./types").ResponsiveValue>;
        default: number;
    };
    colGap: {
        type: import("vue").PropType<number | import("./types").ResponsiveValue>;
        default: number;
    };
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsedRows: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    classNames: import("vue").ComputedRef<string[]>;
    style: import("vue").ComputedRef<{
        gap: string;
        'grid-template-columns': string;
    }[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    rowGap: number | import("./types").ResponsiveValue;
    cols: number | import("./types").ResponsiveValue;
    collapsed: boolean;
    collapsedRows: number;
    colGap: number | import("./types").ResponsiveValue;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Row: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        gutter: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue | [number | import("./types").ResponsiveValue, number | import("./types").ResponsiveValue]>;
            default: number;
        };
        justify: {
            type: import("vue").PropType<"start" | "center" | "end" | "space-around" | "space-between">;
            default: string;
        };
        align: {
            type: import("vue").PropType<"start" | "center" | "end" | "stretch">;
            default: string;
        };
        div: {
            type: BooleanConstructor;
        };
        wrap: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean | "center" | "space-around" | "space-between" | "stretch" | "end" | "start";
        }>;
        styles: import("vue").ComputedRef<{
            marginTop?: string;
            marginBottom?: string;
            marginLeft?: string;
            marginRight?: string;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        gutter: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue | [number | import("./types").ResponsiveValue, number | import("./types").ResponsiveValue]>;
            default: number;
        };
        justify: {
            type: import("vue").PropType<"start" | "center" | "end" | "space-around" | "space-between">;
            default: string;
        };
        align: {
            type: import("vue").PropType<"start" | "center" | "end" | "stretch">;
            default: string;
        };
        div: {
            type: BooleanConstructor;
        };
        wrap: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        div: boolean;
        wrap: boolean;
        justify: "center" | "space-around" | "space-between" | "end" | "start";
        align: "center" | "stretch" | "end" | "start";
        gutter: number | import("./types").ResponsiveValue | [number | import("./types").ResponsiveValue, number | import("./types").ResponsiveValue];
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Col: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            default: number;
        };
        offset: {
            type: NumberConstructor;
        };
        order: {
            type: NumberConstructor;
        };
        xs: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        sm: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        md: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        lg: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        xl: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        xxl: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        flex: {
            type: import("vue").PropType<number | string | "initial" | "auto" | "none">;
        };
    }>, {
        visible: import("vue").ComputedRef<boolean>;
        classNames: import("vue").ComputedRef<string | {
            [x: string]: number | boolean | undefined;
        }>;
        styles: import("vue").ComputedRef<{
            flex?: import("./types").FlexType;
            paddingLeft?: string;
            paddingRight?: string;
            paddingTop?: string;
            paddingBottom?: string;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            default: number;
        };
        offset: {
            type: NumberConstructor;
        };
        order: {
            type: NumberConstructor;
        };
        xs: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        sm: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        md: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        lg: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        xl: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        xxl: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        flex: {
            type: import("vue").PropType<number | string | "initial" | "auto" | "none">;
        };
    }>> & Readonly<{}>, {
        span: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        span: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        offset: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        suffix: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classNames: import("vue").ComputedRef<string[]>;
        style: import("vue").ComputedRef<({
            'margin-left': string;
        } | {
            'margin-left'?: undefined;
        } | {
            'grid-column': string;
            display?: undefined;
        } | {
            display: string;
            'grid-column'?: undefined;
        })[]>;
        domRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
        overflow: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        offset: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        suffix: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        span: number | import("./types").ResponsiveValue;
        suffix: boolean;
        offset: number | import("./types").ResponsiveValue;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type GridRowInstance = InstanceType<typeof _GridRow>;
export type GridColInstance = InstanceType<typeof _GridCol>;
export type GridInstance = InstanceType<typeof _Grid>;
export type GridItemInstance = InstanceType<typeof _GridItem>;
export type { ResponsiveValue, RowProps, ColProps, GridProps, GridItemProps } from './types';
export { _GridRow as Row, _GridCol as Col, _GridItem as GridItem };
export declare const _GridComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        cols: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        rowGap: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        colGap: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        collapsed: {
            type: BooleanConstructor;
            default: boolean;
        };
        collapsedRows: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {
        classNames: import("vue").ComputedRef<string[]>;
        style: import("vue").ComputedRef<{
            gap: string;
            'grid-template-columns': string;
        }[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        rowGap: number | import("./types").ResponsiveValue;
        cols: number | import("./types").ResponsiveValue;
        collapsed: boolean;
        collapsedRows: number;
        colGap: number | import("./types").ResponsiveValue;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        cols: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        rowGap: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        colGap: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        collapsed: {
            type: BooleanConstructor;
            default: boolean;
        };
        collapsedRows: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{}>, {
        classNames: import("vue").ComputedRef<string[]>;
        style: import("vue").ComputedRef<{
            gap: string;
            'grid-template-columns': string;
        }[]>;
    }, {}, {}, {}, {
        rowGap: number | import("./types").ResponsiveValue;
        cols: number | import("./types").ResponsiveValue;
        collapsed: boolean;
        collapsedRows: number;
        colGap: number | import("./types").ResponsiveValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    cols: {
        type: import("vue").PropType<number | import("./types").ResponsiveValue>;
        default: number;
    };
    rowGap: {
        type: import("vue").PropType<number | import("./types").ResponsiveValue>;
        default: number;
    };
    colGap: {
        type: import("vue").PropType<number | import("./types").ResponsiveValue>;
        default: number;
    };
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsedRows: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    classNames: import("vue").ComputedRef<string[]>;
    style: import("vue").ComputedRef<{
        gap: string;
        'grid-template-columns': string;
    }[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    rowGap: number | import("./types").ResponsiveValue;
    cols: number | import("./types").ResponsiveValue;
    collapsed: boolean;
    collapsedRows: number;
    colGap: number | import("./types").ResponsiveValue;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Row: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        gutter: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue | [number | import("./types").ResponsiveValue, number | import("./types").ResponsiveValue]>;
            default: number;
        };
        justify: {
            type: import("vue").PropType<"start" | "center" | "end" | "space-around" | "space-between">;
            default: string;
        };
        align: {
            type: import("vue").PropType<"start" | "center" | "end" | "stretch">;
            default: string;
        };
        div: {
            type: BooleanConstructor;
        };
        wrap: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classNames: import("vue").ComputedRef<{
            [x: string]: boolean | "center" | "space-around" | "space-between" | "stretch" | "end" | "start";
        }>;
        styles: import("vue").ComputedRef<{
            marginTop?: string;
            marginBottom?: string;
            marginLeft?: string;
            marginRight?: string;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        gutter: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue | [number | import("./types").ResponsiveValue, number | import("./types").ResponsiveValue]>;
            default: number;
        };
        justify: {
            type: import("vue").PropType<"start" | "center" | "end" | "space-around" | "space-between">;
            default: string;
        };
        align: {
            type: import("vue").PropType<"start" | "center" | "end" | "stretch">;
            default: string;
        };
        div: {
            type: BooleanConstructor;
        };
        wrap: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        div: boolean;
        wrap: boolean;
        justify: "center" | "space-around" | "space-between" | "end" | "start";
        align: "center" | "stretch" | "end" | "start";
        gutter: number | import("./types").ResponsiveValue | [number | import("./types").ResponsiveValue, number | import("./types").ResponsiveValue];
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Col: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            default: number;
        };
        offset: {
            type: NumberConstructor;
        };
        order: {
            type: NumberConstructor;
        };
        xs: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        sm: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        md: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        lg: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        xl: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        xxl: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        flex: {
            type: import("vue").PropType<number | string | "initial" | "auto" | "none">;
        };
    }>, {
        visible: import("vue").ComputedRef<boolean>;
        classNames: import("vue").ComputedRef<string | {
            [x: string]: number | boolean | undefined;
        }>;
        styles: import("vue").ComputedRef<{
            flex?: import("./types").FlexType;
            paddingLeft?: string;
            paddingRight?: string;
            paddingTop?: string;
            paddingBottom?: string;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            default: number;
        };
        offset: {
            type: NumberConstructor;
        };
        order: {
            type: NumberConstructor;
        };
        xs: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        sm: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        md: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        lg: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        xl: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        xxl: {
            type: import("vue").PropType<number | {
                [key: string]: any;
            }>;
        };
        flex: {
            type: import("vue").PropType<number | string | "initial" | "auto" | "none">;
        };
    }>> & Readonly<{}>, {
        span: number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Item: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        span: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        offset: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        suffix: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classNames: import("vue").ComputedRef<string[]>;
        style: import("vue").ComputedRef<({
            'margin-left': string;
        } | {
            'margin-left'?: undefined;
        } | {
            'grid-column': string;
            display?: undefined;
        } | {
            display: string;
            'grid-column'?: undefined;
        })[]>;
        domRef: import("vue").Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
        overflow: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        offset: {
            type: import("vue").PropType<number | import("./types").ResponsiveValue>;
            default: number;
        };
        suffix: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        span: number | import("./types").ResponsiveValue;
        suffix: boolean;
        offset: number | import("./types").ResponsiveValue;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { Grid };
export { gridProps };
export default Grid;
