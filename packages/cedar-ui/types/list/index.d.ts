import _List from './list';
import _ListItem from './list-item';
import _ListItemMeta from './list-item-meta.vue';
import { listProps } from './props';
declare const List: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
        };
        size: {
            type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
            default: string;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        split: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        hoverable: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationProps: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
            }>>>;
        };
        gridProps: {
            type: ObjectConstructor;
        };
        maxHeight: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        bottomOffset: {
            type: NumberConstructor;
            default: number;
        };
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
    }>> & Readonly<{
        onScroll?: (() => any) | undefined;
        onReachBottom?: (() => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
        onPageChange?: ((page: number) => any) | undefined;
    }>, {
        virtualListRef: import("vue").Ref<any, any>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        scroll: () => true;
        reachBottom: () => true;
        pageChange: (page: number) => true;
        pageSizeChange: (pageSize: number) => true;
    }, import("vue").PublicProps, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        split: boolean;
        scrollbar: boolean | import("..").ScrollbarProps;
        maxHeight: string | number;
        loading: boolean;
        bottomOffset: number;
        bordered: boolean;
        hoverable: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
        };
        size: {
            type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
            default: string;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        split: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        hoverable: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationProps: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
            }>>>;
        };
        gridProps: {
            type: ObjectConstructor;
        };
        maxHeight: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        bottomOffset: {
            type: NumberConstructor;
            default: number;
        };
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
    }>> & Readonly<{
        onScroll?: (() => any) | undefined;
        onReachBottom?: (() => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
        onPageChange?: ((page: number) => any) | undefined;
    }>, {
        virtualListRef: import("vue").Ref<any, any>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
    }, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        split: boolean;
        scrollbar: boolean | import("..").ScrollbarProps;
        maxHeight: string | number;
        loading: boolean;
        bottomOffset: number;
        bordered: boolean;
        hoverable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<any[]>;
    };
    size: {
        type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    split: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationProps: {
        type: import("vue").PropType<import("..").PaginationProps>;
    };
    gridProps: {
        type: ObjectConstructor;
    };
    maxHeight: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    bottomOffset: {
        type: NumberConstructor;
        default: number;
    };
    virtualListProps: {
        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
    };
    scrollbar: {
        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
        default: boolean;
    };
}>> & Readonly<{
    onScroll?: (() => any) | undefined;
    onReachBottom?: (() => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
    onPageChange?: ((page: number) => any) | undefined;
}>, {
    virtualListRef: import("vue").Ref<any, any>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: () => true;
    reachBottom: () => true;
    pageChange: (page: number) => true;
    pageSizeChange: (pageSize: number) => true;
}, string, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    split: boolean;
    scrollbar: boolean | import("..").ScrollbarProps;
    maxHeight: string | number;
    loading: boolean;
    bottomOffset: number;
    bordered: boolean;
    hoverable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            actionLayout: {
                type: import("vue").PropType<import("..").Direction>;
                default: string;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            actionLayout: "horizontal" | "vertical";
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            actionLayout: {
                type: import("vue").PropType<import("..").Direction>;
                default: string;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            actionLayout: "horizontal" | "vertical";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        actionLayout: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        actionLayout: "horizontal" | "vertical";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Meta: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            title: StringConstructor;
            description: StringConstructor;
        }>, {
            prefixCls: string;
            hasContent: boolean;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            title: StringConstructor;
            description: StringConstructor;
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    };
}>;
export type ListInstance = InstanceType<typeof _List>;
export type ListItemInstance = InstanceType<typeof _ListItem>;
export type ListItemMetaInstance = InstanceType<typeof _ListItemMeta>;
export { _ListItem as ListItem, _ListItemMeta as ListItemMeta };
export declare const _ListComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
        };
        size: {
            type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
            default: string;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        split: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        hoverable: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationProps: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
            }>>>;
        };
        gridProps: {
            type: ObjectConstructor;
        };
        maxHeight: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        bottomOffset: {
            type: NumberConstructor;
            default: number;
        };
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
    }>> & Readonly<{
        onScroll?: (() => any) | undefined;
        onReachBottom?: (() => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
        onPageChange?: ((page: number) => any) | undefined;
    }>, {
        virtualListRef: import("vue").Ref<any, any>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        scroll: () => true;
        reachBottom: () => true;
        pageChange: (page: number) => true;
        pageSizeChange: (pageSize: number) => true;
    }, import("vue").PublicProps, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        split: boolean;
        scrollbar: boolean | import("..").ScrollbarProps;
        maxHeight: string | number;
        loading: boolean;
        bottomOffset: number;
        bordered: boolean;
        hoverable: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<any[]>;
        };
        size: {
            type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
            default: string;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        split: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        hoverable: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationProps: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
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
            }>>>;
        };
        gridProps: {
            type: ObjectConstructor;
        };
        maxHeight: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        bottomOffset: {
            type: NumberConstructor;
            default: number;
        };
        virtualListProps: {
            type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
    }>> & Readonly<{
        onScroll?: (() => any) | undefined;
        onReachBottom?: (() => any) | undefined;
        onPageSizeChange?: ((pageSize: number) => any) | undefined;
        onPageChange?: ((page: number) => any) | undefined;
    }>, {
        virtualListRef: import("vue").Ref<any, any>;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
    }, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        split: boolean;
        scrollbar: boolean | import("..").ScrollbarProps;
        maxHeight: string | number;
        loading: boolean;
        bottomOffset: number;
        bordered: boolean;
        hoverable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<any[]>;
    };
    size: {
        type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
        default: string;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    split: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationProps: {
        type: import("vue").PropType<import("..").PaginationProps>;
    };
    gridProps: {
        type: ObjectConstructor;
    };
    maxHeight: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    bottomOffset: {
        type: NumberConstructor;
        default: number;
    };
    virtualListProps: {
        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
    };
    scrollbar: {
        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
        default: boolean;
    };
}>> & Readonly<{
    onScroll?: (() => any) | undefined;
    onReachBottom?: (() => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
    onPageChange?: ((page: number) => any) | undefined;
}>, {
    virtualListRef: import("vue").Ref<any, any>;
    render: () => import("vue/jsx-runtime").JSX.Element;
}, {}, {}, {
    scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: () => true;
    reachBottom: () => true;
    pageChange: (page: number) => true;
    pageSizeChange: (pageSize: number) => true;
}, string, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    split: boolean;
    scrollbar: boolean | import("..").ScrollbarProps;
    maxHeight: string | number;
    loading: boolean;
    bottomOffset: number;
    bordered: boolean;
    hoverable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            actionLayout: {
                type: import("vue").PropType<import("..").Direction>;
                default: string;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            actionLayout: "horizontal" | "vertical";
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            actionLayout: {
                type: import("vue").PropType<import("..").Direction>;
                default: string;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            actionLayout: "horizontal" | "vertical";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        actionLayout: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        actionLayout: "horizontal" | "vertical";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Meta: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            title: StringConstructor;
            description: StringConstructor;
        }>, {
            prefixCls: string;
            hasContent: boolean;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            title: StringConstructor;
            description: StringConstructor;
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    };
}>;
export { List };
export { listProps };
export default List;
