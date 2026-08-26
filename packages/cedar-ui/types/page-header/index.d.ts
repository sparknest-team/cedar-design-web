import _PageHeader from './page-header.vue';
declare const PageHeader: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        subtitle: StringConstructor;
        showBack: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onBack?: ((event: Event) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        handleBack: (e: Event) => void;
        ellipsis: import("vue").Ref<boolean | {
            rows?: number | undefined;
            expandable?: boolean | undefined;
            ellipsisStr?: string | undefined;
            suffix?: string | undefined;
            showTooltip?: boolean | {
                type: "tooltip" | "popover";
                props: Record<string, any>;
            } | undefined;
            css?: boolean | undefined;
        }, boolean | import("..").EllipsisConfig | {
            rows?: number | undefined;
            expandable?: boolean | undefined;
            ellipsisStr?: string | undefined;
            suffix?: string | undefined;
            showTooltip?: boolean | {
                type: "tooltip" | "popover";
                props: Record<string, any>;
            } | undefined;
            css?: boolean | undefined;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        back: (event: Event) => true;
    }, import("vue").PublicProps, {
        showBack: boolean;
    }, true, {}, {}, {
        IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        IconLeft: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
                size?: string | number | undefined;
                strokeWidth?: number | undefined;
                strokeLinecap?: "butt" | "round" | "square" | undefined;
                strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
                rotate?: number | undefined;
                spin?: boolean | undefined;
            }> & Readonly<{
                onClick?: ((event: MouseEvent) => any) | undefined;
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (event: MouseEvent) => any;
            }, import("vue").PublicProps, {
                strokeWidth: number;
                strokeLinecap: "butt" | "round" | "square";
                strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
            }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                size?: string | number | undefined;
                strokeWidth?: number | undefined;
                strokeLinecap?: "butt" | "round" | "square" | undefined;
                strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
                rotate?: number | undefined;
                spin?: boolean | undefined;
            }> & Readonly<{
                onClick?: ((event: MouseEvent) => any) | undefined;
            }>, {}, {}, {}, {}, {
                strokeWidth: number;
                strokeLinecap: "butt" | "round" | "square";
                strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, string, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
            install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
        };
        TypographyTitle: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            heading: {
                type: import("vue").PropType<import("..").TypographyHeadingLevel>;
                default: number;
                validator: (value: unknown) => value is import("..").TypographyHeadingLevel;
            };
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                validator: (value: unknown) => value is import("..").SemanticStatus;
            };
            bold: BooleanConstructor;
            mark: {
                type: import("vue").PropType<boolean | {
                    color: string;
                }>;
                default: boolean;
            };
            underline: BooleanConstructor;
            delete: BooleanConstructor;
            code: BooleanConstructor;
            disabled: BooleanConstructor;
            editable: BooleanConstructor;
            editing: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultEditing: BooleanConstructor;
            editText: StringConstructor;
            copyable: BooleanConstructor;
            copyText: StringConstructor;
            copyDelay: {
                type: NumberConstructor;
                default: number;
            };
            ellipsis: {
                type: import("vue").PropType<boolean | import("..").EllipsisConfig>;
                default: boolean;
            };
            editTooltipProps: import("vue").PropType<Record<string, unknown>>;
            copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
        }>, {
            component: import("vue").ComputedRef<keyof HTMLElementTagNameMap>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            heading: {
                type: import("vue").PropType<import("..").TypographyHeadingLevel>;
                default: number;
                validator: (value: unknown) => value is import("..").TypographyHeadingLevel;
            };
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                validator: (value: unknown) => value is import("..").SemanticStatus;
            };
            bold: BooleanConstructor;
            mark: {
                type: import("vue").PropType<boolean | {
                    color: string;
                }>;
                default: boolean;
            };
            underline: BooleanConstructor;
            delete: BooleanConstructor;
            code: BooleanConstructor;
            disabled: BooleanConstructor;
            editable: BooleanConstructor;
            editing: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultEditing: BooleanConstructor;
            editText: StringConstructor;
            copyable: BooleanConstructor;
            copyText: StringConstructor;
            copyDelay: {
                type: NumberConstructor;
                default: number;
            };
            ellipsis: {
                type: import("vue").PropType<boolean | import("..").EllipsisConfig>;
                default: boolean;
            };
            editTooltipProps: import("vue").PropType<Record<string, unknown>>;
            copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
        }>> & Readonly<{}>, {
            delete: boolean;
            bold: boolean;
            code: boolean;
            mark: boolean | {
                color: string;
            };
            disabled: boolean;
            underline: boolean;
            ellipsis: boolean | import("..").EllipsisConfig;
            editable: boolean;
            editing: boolean;
            defaultEditing: boolean;
            copyable: boolean;
            copyDelay: number;
            heading: 1 | 2 | 5 | 3 | 4 | 6;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        subtitle: StringConstructor;
        showBack: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onBack?: ((event: Event) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        handleBack: (e: Event) => void;
        ellipsis: import("vue").Ref<boolean | {
            rows?: number | undefined;
            expandable?: boolean | undefined;
            ellipsisStr?: string | undefined;
            suffix?: string | undefined;
            showTooltip?: boolean | {
                type: "tooltip" | "popover";
                props: Record<string, any>;
            } | undefined;
            css?: boolean | undefined;
        }, boolean | import("..").EllipsisConfig | {
            rows?: number | undefined;
            expandable?: boolean | undefined;
            ellipsisStr?: string | undefined;
            suffix?: string | undefined;
            showTooltip?: boolean | {
                type: "tooltip" | "popover";
                props: Record<string, any>;
            } | undefined;
            css?: boolean | undefined;
        }>;
    }, {}, {}, {}, {
        showBack: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    subtitle: StringConstructor;
    showBack: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onBack?: ((event: Event) => any) | undefined;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    handleBack: (e: Event) => void;
    ellipsis: import("vue").Ref<boolean | {
        rows?: number | undefined;
        expandable?: boolean | undefined;
        ellipsisStr?: string | undefined;
        suffix?: string | undefined;
        showTooltip?: boolean | {
            type: "tooltip" | "popover";
            props: Record<string, any>;
        } | undefined;
        css?: boolean | undefined;
    }, boolean | import("..").EllipsisConfig | {
        rows?: number | undefined;
        expandable?: boolean | undefined;
        ellipsisStr?: string | undefined;
        suffix?: string | undefined;
        showTooltip?: boolean | {
            type: "tooltip" | "popover";
            props: Record<string, any>;
        } | undefined;
        css?: boolean | undefined;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    back: (event: Event) => true;
}, string, {
    showBack: boolean;
}, {}, string, {}, {
    IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    IconLeft: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, import("vue").PublicProps, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        size?: string | number | undefined;
        strokeWidth?: number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | undefined;
        strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
        rotate?: number | undefined;
        spin?: boolean | undefined;
    }> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, string, {
        strokeWidth: number;
        strokeLinecap: "butt" | "round" | "square";
        strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
    };
    TypographyTitle: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        heading: {
            type: import("vue").PropType<import("..").TypographyHeadingLevel>;
            default: number;
            validator: (value: unknown) => value is import("..").TypographyHeadingLevel;
        };
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        bold: BooleanConstructor;
        mark: {
            type: import("vue").PropType<boolean | {
                color: string;
            }>;
            default: boolean;
        };
        underline: BooleanConstructor;
        delete: BooleanConstructor;
        code: BooleanConstructor;
        disabled: BooleanConstructor;
        editable: BooleanConstructor;
        editing: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultEditing: BooleanConstructor;
        editText: StringConstructor;
        copyable: BooleanConstructor;
        copyText: StringConstructor;
        copyDelay: {
            type: NumberConstructor;
            default: number;
        };
        ellipsis: {
            type: import("vue").PropType<boolean | import("..").EllipsisConfig>;
            default: boolean;
        };
        editTooltipProps: import("vue").PropType<Record<string, unknown>>;
        copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
    }>, {
        component: import("vue").ComputedRef<keyof HTMLElementTagNameMap>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        heading: {
            type: import("vue").PropType<import("..").TypographyHeadingLevel>;
            default: number;
            validator: (value: unknown) => value is import("..").TypographyHeadingLevel;
        };
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        bold: BooleanConstructor;
        mark: {
            type: import("vue").PropType<boolean | {
                color: string;
            }>;
            default: boolean;
        };
        underline: BooleanConstructor;
        delete: BooleanConstructor;
        code: BooleanConstructor;
        disabled: BooleanConstructor;
        editable: BooleanConstructor;
        editing: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultEditing: BooleanConstructor;
        editText: StringConstructor;
        copyable: BooleanConstructor;
        copyText: StringConstructor;
        copyDelay: {
            type: NumberConstructor;
            default: number;
        };
        ellipsis: {
            type: import("vue").PropType<boolean | import("..").EllipsisConfig>;
            default: boolean;
        };
        editTooltipProps: import("vue").PropType<Record<string, unknown>>;
        copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
    }>> & Readonly<{}>, {
        delete: boolean;
        bold: boolean;
        code: boolean;
        mark: boolean | {
            color: string;
        };
        disabled: boolean;
        underline: boolean;
        ellipsis: boolean | import("..").EllipsisConfig;
        editable: boolean;
        editing: boolean;
        defaultEditing: boolean;
        copyable: boolean;
        copyDelay: number;
        heading: 1 | 2 | 5 | 3 | 4 | 6;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type PageHeaderInstance = InstanceType<typeof _PageHeader>;
export type { PageHeaderProps } from './props';
export { pageHeaderProps } from './props';
export declare const _PageHeaderComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        subtitle: StringConstructor;
        showBack: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onBack?: ((event: Event) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        handleBack: (e: Event) => void;
        ellipsis: import("vue").Ref<boolean | {
            rows?: number | undefined;
            expandable?: boolean | undefined;
            ellipsisStr?: string | undefined;
            suffix?: string | undefined;
            showTooltip?: boolean | {
                type: "tooltip" | "popover";
                props: Record<string, any>;
            } | undefined;
            css?: boolean | undefined;
        }, boolean | import("..").EllipsisConfig | {
            rows?: number | undefined;
            expandable?: boolean | undefined;
            ellipsisStr?: string | undefined;
            suffix?: string | undefined;
            showTooltip?: boolean | {
                type: "tooltip" | "popover";
                props: Record<string, any>;
            } | undefined;
            css?: boolean | undefined;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        back: (event: Event) => true;
    }, import("vue").PublicProps, {
        showBack: boolean;
    }, true, {}, {}, {
        IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            classes: typeof import("rattail").classes;
            n: (suffix?: string) => string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            disabled: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        IconLeft: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
                size?: string | number | undefined;
                strokeWidth?: number | undefined;
                strokeLinecap?: "butt" | "round" | "square" | undefined;
                strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
                rotate?: number | undefined;
                spin?: boolean | undefined;
            }> & Readonly<{
                onClick?: ((event: MouseEvent) => any) | undefined;
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (event: MouseEvent) => any;
            }, import("vue").PublicProps, {
                strokeWidth: number;
                strokeLinecap: "butt" | "round" | "square";
                strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
            }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{
                size?: string | number | undefined;
                strokeWidth?: number | undefined;
                strokeLinecap?: "butt" | "round" | "square" | undefined;
                strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
                rotate?: number | undefined;
                spin?: boolean | undefined;
            }> & Readonly<{
                onClick?: ((event: MouseEvent) => any) | undefined;
            }>, {}, {}, {}, {}, {
                strokeWidth: number;
                strokeLinecap: "butt" | "round" | "square";
                strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, string, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
            install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
        };
        TypographyTitle: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            heading: {
                type: import("vue").PropType<import("..").TypographyHeadingLevel>;
                default: number;
                validator: (value: unknown) => value is import("..").TypographyHeadingLevel;
            };
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                validator: (value: unknown) => value is import("..").SemanticStatus;
            };
            bold: BooleanConstructor;
            mark: {
                type: import("vue").PropType<boolean | {
                    color: string;
                }>;
                default: boolean;
            };
            underline: BooleanConstructor;
            delete: BooleanConstructor;
            code: BooleanConstructor;
            disabled: BooleanConstructor;
            editable: BooleanConstructor;
            editing: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultEditing: BooleanConstructor;
            editText: StringConstructor;
            copyable: BooleanConstructor;
            copyText: StringConstructor;
            copyDelay: {
                type: NumberConstructor;
                default: number;
            };
            ellipsis: {
                type: import("vue").PropType<boolean | import("..").EllipsisConfig>;
                default: boolean;
            };
            editTooltipProps: import("vue").PropType<Record<string, unknown>>;
            copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
        }>, {
            component: import("vue").ComputedRef<keyof HTMLElementTagNameMap>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            heading: {
                type: import("vue").PropType<import("..").TypographyHeadingLevel>;
                default: number;
                validator: (value: unknown) => value is import("..").TypographyHeadingLevel;
            };
            status: {
                type: import("vue").PropType<import("..").SemanticStatus>;
                validator: (value: unknown) => value is import("..").SemanticStatus;
            };
            bold: BooleanConstructor;
            mark: {
                type: import("vue").PropType<boolean | {
                    color: string;
                }>;
                default: boolean;
            };
            underline: BooleanConstructor;
            delete: BooleanConstructor;
            code: BooleanConstructor;
            disabled: BooleanConstructor;
            editable: BooleanConstructor;
            editing: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultEditing: BooleanConstructor;
            editText: StringConstructor;
            copyable: BooleanConstructor;
            copyText: StringConstructor;
            copyDelay: {
                type: NumberConstructor;
                default: number;
            };
            ellipsis: {
                type: import("vue").PropType<boolean | import("..").EllipsisConfig>;
                default: boolean;
            };
            editTooltipProps: import("vue").PropType<Record<string, unknown>>;
            copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
        }>> & Readonly<{}>, {
            delete: boolean;
            bold: boolean;
            code: boolean;
            mark: boolean | {
                color: string;
            };
            disabled: boolean;
            underline: boolean;
            ellipsis: boolean | import("..").EllipsisConfig;
            editable: boolean;
            editing: boolean;
            defaultEditing: boolean;
            copyable: boolean;
            copyDelay: number;
            heading: 1 | 2 | 5 | 3 | 4 | 6;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        title: StringConstructor;
        subtitle: StringConstructor;
        showBack: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onBack?: ((event: Event) => any) | undefined;
    }>, {
        prefixCls: string;
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        handleBack: (e: Event) => void;
        ellipsis: import("vue").Ref<boolean | {
            rows?: number | undefined;
            expandable?: boolean | undefined;
            ellipsisStr?: string | undefined;
            suffix?: string | undefined;
            showTooltip?: boolean | {
                type: "tooltip" | "popover";
                props: Record<string, any>;
            } | undefined;
            css?: boolean | undefined;
        }, boolean | import("..").EllipsisConfig | {
            rows?: number | undefined;
            expandable?: boolean | undefined;
            ellipsisStr?: string | undefined;
            suffix?: string | undefined;
            showTooltip?: boolean | {
                type: "tooltip" | "popover";
                props: Record<string, any>;
            } | undefined;
            css?: boolean | undefined;
        }>;
    }, {}, {}, {}, {
        showBack: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    subtitle: StringConstructor;
    showBack: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onBack?: ((event: Event) => any) | undefined;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    handleBack: (e: Event) => void;
    ellipsis: import("vue").Ref<boolean | {
        rows?: number | undefined;
        expandable?: boolean | undefined;
        ellipsisStr?: string | undefined;
        suffix?: string | undefined;
        showTooltip?: boolean | {
            type: "tooltip" | "popover";
            props: Record<string, any>;
        } | undefined;
        css?: boolean | undefined;
    }, boolean | import("..").EllipsisConfig | {
        rows?: number | undefined;
        expandable?: boolean | undefined;
        ellipsisStr?: string | undefined;
        suffix?: string | undefined;
        showTooltip?: boolean | {
            type: "tooltip" | "popover";
            props: Record<string, any>;
        } | undefined;
        css?: boolean | undefined;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    back: (event: Event) => true;
}, string, {
    showBack: boolean;
}, {}, string, {}, {
    IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        classes: typeof import("rattail").classes;
        n: (suffix?: string) => string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        disabled: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    IconLeft: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, import("vue").PublicProps, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            size?: string | number | undefined;
            strokeWidth?: number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | undefined;
            strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
            rotate?: number | undefined;
            spin?: boolean | undefined;
        }> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            strokeWidth: number;
            strokeLinecap: "butt" | "round" | "square";
            strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        size?: string | number | undefined;
        strokeWidth?: number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | undefined;
        strokeLinejoin?: "round" | "bevel" | "inherit" | "miter" | undefined;
        rotate?: number | undefined;
        spin?: boolean | undefined;
    }> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, string, {
        strokeWidth: number;
        strokeLinecap: "butt" | "round" | "square";
        strokeLinejoin: "round" | "bevel" | "inherit" | "miter";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install(app: import("vue").App, options?: import("node_modules/@cedarjs/icons-vue/types/_utils/types").CedarIconOptions): void;
    };
    TypographyTitle: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        heading: {
            type: import("vue").PropType<import("..").TypographyHeadingLevel>;
            default: number;
            validator: (value: unknown) => value is import("..").TypographyHeadingLevel;
        };
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        bold: BooleanConstructor;
        mark: {
            type: import("vue").PropType<boolean | {
                color: string;
            }>;
            default: boolean;
        };
        underline: BooleanConstructor;
        delete: BooleanConstructor;
        code: BooleanConstructor;
        disabled: BooleanConstructor;
        editable: BooleanConstructor;
        editing: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultEditing: BooleanConstructor;
        editText: StringConstructor;
        copyable: BooleanConstructor;
        copyText: StringConstructor;
        copyDelay: {
            type: NumberConstructor;
            default: number;
        };
        ellipsis: {
            type: import("vue").PropType<boolean | import("..").EllipsisConfig>;
            default: boolean;
        };
        editTooltipProps: import("vue").PropType<Record<string, unknown>>;
        copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
    }>, {
        component: import("vue").ComputedRef<keyof HTMLElementTagNameMap>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        heading: {
            type: import("vue").PropType<import("..").TypographyHeadingLevel>;
            default: number;
            validator: (value: unknown) => value is import("..").TypographyHeadingLevel;
        };
        status: {
            type: import("vue").PropType<import("..").SemanticStatus>;
            validator: (value: unknown) => value is import("..").SemanticStatus;
        };
        bold: BooleanConstructor;
        mark: {
            type: import("vue").PropType<boolean | {
                color: string;
            }>;
            default: boolean;
        };
        underline: BooleanConstructor;
        delete: BooleanConstructor;
        code: BooleanConstructor;
        disabled: BooleanConstructor;
        editable: BooleanConstructor;
        editing: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultEditing: BooleanConstructor;
        editText: StringConstructor;
        copyable: BooleanConstructor;
        copyText: StringConstructor;
        copyDelay: {
            type: NumberConstructor;
            default: number;
        };
        ellipsis: {
            type: import("vue").PropType<boolean | import("..").EllipsisConfig>;
            default: boolean;
        };
        editTooltipProps: import("vue").PropType<Record<string, unknown>>;
        copyTooltipProps: import("vue").PropType<Record<string, unknown>>;
    }>> & Readonly<{}>, {
        delete: boolean;
        bold: boolean;
        code: boolean;
        mark: boolean | {
            color: string;
        };
        disabled: boolean;
        underline: boolean;
        ellipsis: boolean | import("..").EllipsisConfig;
        editable: boolean;
        editing: boolean;
        defaultEditing: boolean;
        copyable: boolean;
        copyDelay: number;
        heading: 1 | 2 | 5 | 3 | 4 | 6;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export { PageHeader };
export default PageHeader;
