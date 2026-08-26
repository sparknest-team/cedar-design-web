import _Pagination from './pagination';
import { paginationProps } from './props';
declare const Pagination: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        total: {
            type: NumberConstructor;
            required: boolean;
            validator: (value: number) => boolean;
        };
        current: NumberConstructor;
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        pageSize: NumberConstructor;
        defaultPageSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        disabled: BooleanConstructor;
        hideOnSinglePage: BooleanConstructor;
        simple: BooleanConstructor;
        showTotal: BooleanConstructor;
        showMore: BooleanConstructor;
        showJumper: BooleanConstructor;
        showPageSize: BooleanConstructor;
        pageSizeOptions: {
            type: import("vue").PropType<number[]>;
            default: () => number[];
            validator: (value: number[]) => boolean;
        };
        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
        baseSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        bufferSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        autoAdjust: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((current: number) => any) | undefined;
        "onUpdate:current"?: ((current: number) => any) | undefined;
        "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:current': (current: number) => true;
        'update:pageSize': (pageSize: number) => true;
        change: (current: number) => true;
        pageSizeChange: (pageSize: number) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        defaultCurrent: number;
        simple: boolean;
        defaultPageSize: number;
        hideOnSinglePage: boolean;
        showTotal: boolean;
        showMore: boolean;
        showJumper: boolean;
        showPageSize: boolean;
        pageSizeOptions: number[];
        baseSize: number;
        bufferSize: number;
        autoAdjust: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        total: {
            type: NumberConstructor;
            required: boolean;
            validator: (value: number) => boolean;
        };
        current: NumberConstructor;
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        pageSize: NumberConstructor;
        defaultPageSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        disabled: BooleanConstructor;
        hideOnSinglePage: BooleanConstructor;
        simple: BooleanConstructor;
        showTotal: BooleanConstructor;
        showMore: BooleanConstructor;
        showJumper: BooleanConstructor;
        showPageSize: BooleanConstructor;
        pageSizeOptions: {
            type: import("vue").PropType<number[]>;
            default: () => number[];
            validator: (value: number[]) => boolean;
        };
        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
        baseSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        bufferSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        autoAdjust: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((current: number) => any) | undefined;
        "onUpdate:current"?: ((current: number) => any) | undefined;
        "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, {
        disabled: boolean;
        defaultCurrent: number;
        simple: boolean;
        defaultPageSize: number;
        hideOnSinglePage: boolean;
        showTotal: boolean;
        showMore: boolean;
        showJumper: boolean;
        showPageSize: boolean;
        pageSizeOptions: number[];
        baseSize: number;
        bufferSize: number;
        autoAdjust: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    total: {
        type: NumberConstructor;
        required: boolean;
        validator: (value: number) => boolean;
    };
    current: NumberConstructor;
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    pageSize: NumberConstructor;
    defaultPageSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    disabled: BooleanConstructor;
    hideOnSinglePage: BooleanConstructor;
    simple: BooleanConstructor;
    showTotal: BooleanConstructor;
    showMore: BooleanConstructor;
    showJumper: BooleanConstructor;
    showPageSize: BooleanConstructor;
    pageSizeOptions: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
        validator: (value: number[]) => boolean;
    };
    pageSizeProps: import("vue").PropType<import("..").SelectProps>;
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
    activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
    baseSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    bufferSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    autoAdjust: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((current: number) => any) | undefined;
    "onUpdate:current"?: ((current: number) => any) | undefined;
    "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current': (current: number) => true;
    'update:pageSize': (pageSize: number) => true;
    change: (current: number) => true;
    pageSizeChange: (pageSize: number) => true;
}, string, {
    disabled: boolean;
    defaultCurrent: number;
    simple: boolean;
    defaultPageSize: number;
    hideOnSinglePage: boolean;
    showTotal: boolean;
    showMore: boolean;
    showJumper: boolean;
    showPageSize: boolean;
    pageSizeOptions: number[];
    baseSize: number;
    bufferSize: number;
    autoAdjust: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type PaginationInstance = InstanceType<typeof _Pagination>;
export { paginationProps };
export type { PaginationProps } from './props';
export { Pagination };
export declare const _PaginationComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        total: {
            type: NumberConstructor;
            required: boolean;
            validator: (value: number) => boolean;
        };
        current: NumberConstructor;
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        pageSize: NumberConstructor;
        defaultPageSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        disabled: BooleanConstructor;
        hideOnSinglePage: BooleanConstructor;
        simple: BooleanConstructor;
        showTotal: BooleanConstructor;
        showMore: BooleanConstructor;
        showJumper: BooleanConstructor;
        showPageSize: BooleanConstructor;
        pageSizeOptions: {
            type: import("vue").PropType<number[]>;
            default: () => number[];
            validator: (value: number[]) => boolean;
        };
        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
        baseSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        bufferSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        autoAdjust: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((current: number) => any) | undefined;
        "onUpdate:current"?: ((current: number) => any) | undefined;
        "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:current': (current: number) => true;
        'update:pageSize': (pageSize: number) => true;
        change: (current: number) => true;
        pageSizeChange: (pageSize: number) => true;
    }, import("vue").PublicProps, {
        disabled: boolean;
        defaultCurrent: number;
        simple: boolean;
        defaultPageSize: number;
        hideOnSinglePage: boolean;
        showTotal: boolean;
        showMore: boolean;
        showJumper: boolean;
        showPageSize: boolean;
        pageSizeOptions: number[];
        baseSize: number;
        bufferSize: number;
        autoAdjust: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        total: {
            type: NumberConstructor;
            required: boolean;
            validator: (value: number) => boolean;
        };
        current: NumberConstructor;
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        pageSize: NumberConstructor;
        defaultPageSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        disabled: BooleanConstructor;
        hideOnSinglePage: BooleanConstructor;
        simple: BooleanConstructor;
        showTotal: BooleanConstructor;
        showMore: BooleanConstructor;
        showJumper: BooleanConstructor;
        showPageSize: BooleanConstructor;
        pageSizeOptions: {
            type: import("vue").PropType<number[]>;
            default: () => number[];
            validator: (value: number[]) => boolean;
        };
        pageSizeProps: import("vue").PropType<import("..").SelectProps>;
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            validator: (value: import("..").ComponentSize) => boolean;
        };
        pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
        activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
        baseSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        bufferSize: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        autoAdjust: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((current: number) => any) | undefined;
        "onUpdate:current"?: ((current: number) => any) | undefined;
        "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, {
        disabled: boolean;
        defaultCurrent: number;
        simple: boolean;
        defaultPageSize: number;
        hideOnSinglePage: boolean;
        showTotal: boolean;
        showMore: boolean;
        showJumper: boolean;
        showPageSize: boolean;
        pageSizeOptions: number[];
        baseSize: number;
        bufferSize: number;
        autoAdjust: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    total: {
        type: NumberConstructor;
        required: boolean;
        validator: (value: number) => boolean;
    };
    current: NumberConstructor;
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    pageSize: NumberConstructor;
    defaultPageSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    disabled: BooleanConstructor;
    hideOnSinglePage: BooleanConstructor;
    simple: BooleanConstructor;
    showTotal: BooleanConstructor;
    showMore: BooleanConstructor;
    showJumper: BooleanConstructor;
    showPageSize: BooleanConstructor;
    pageSizeOptions: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
        validator: (value: number[]) => boolean;
    };
    pageSizeProps: import("vue").PropType<import("..").SelectProps>;
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
        validator: (value: import("..").ComponentSize) => boolean;
    };
    pageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
    activePageItemStyle: import("vue").PropType<import("vue").CSSProperties>;
    baseSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    bufferSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    autoAdjust: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((current: number) => any) | undefined;
    "onUpdate:current"?: ((current: number) => any) | undefined;
    "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current': (current: number) => true;
    'update:pageSize': (pageSize: number) => true;
    change: (current: number) => true;
    pageSizeChange: (pageSize: number) => true;
}, string, {
    disabled: boolean;
    defaultCurrent: number;
    simple: boolean;
    defaultPageSize: number;
    hideOnSinglePage: boolean;
    showTotal: boolean;
    showMore: boolean;
    showJumper: boolean;
    showPageSize: boolean;
    pageSizeOptions: number[];
    baseSize: number;
    bufferSize: number;
    autoAdjust: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export default Pagination;
