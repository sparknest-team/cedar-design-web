import { PropType } from 'vue';
import type { Dayjs } from 'dayjs';
import type { Cell, DisabledDate, HeaderIcons, HeaderOperations, IsSameTime } from '../../types';
import { RenderFunc } from '../../../_components/render-function';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headerValue: {
        type: PropType<Dayjs>;
        required: true;
    };
    headerOperations: {
        type: PropType<HeaderOperations>;
        default: () => {};
    };
    headerIcons: {
        type: PropType<HeaderIcons>;
        default: () => {};
    };
    value: {
        type: PropType<Dayjs>;
    };
    disabledDate: {
        type: PropType<DisabledDate>;
    };
    rangeValues: {
        type: PropType<Array<Dayjs | undefined>>;
    };
    dateRender: {
        type: PropType<RenderFunc>;
    };
}>, {
    prefixCls: import("vue").ComputedRef<string>;
    pickerPrefixCls: string;
    headerTitle: import("vue").ComputedRef<string>;
    rows: import("vue").ComputedRef<{
        label: number;
        value: Dayjs;
        isPrev: boolean;
        isNext: boolean;
    }[][]>;
    isSameTime: IsSameTime;
    onCellClick: (cellData: Cell) => void;
    onCellMouseEnter: (cellData: Cell) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cell-mouse-enter")[], "select" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headerValue: {
        type: PropType<Dayjs>;
        required: true;
    };
    headerOperations: {
        type: PropType<HeaderOperations>;
        default: () => {};
    };
    headerIcons: {
        type: PropType<HeaderIcons>;
        default: () => {};
    };
    value: {
        type: PropType<Dayjs>;
    };
    disabledDate: {
        type: PropType<DisabledDate>;
    };
    rangeValues: {
        type: PropType<Array<Dayjs | undefined>>;
    };
    dateRender: {
        type: PropType<RenderFunc>;
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
}>, {
    headerOperations: HeaderOperations;
    headerIcons: HeaderIcons;
}, {}, {
    PanelHeader: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        prefixCls: {
            type: StringConstructor;
            required: true;
        };
        title: {
            type: StringConstructor;
            required: true;
        };
        mode: {
            type: PropType<import("../../types").Mode>;
            default: string;
        };
        value: {
            type: PropType<Dayjs>;
        };
        icons: {
            type: PropType<HeaderIcons>;
        };
        onPrev: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onSuperPrev: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onNext: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onSuperNext: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onLabelClick: {
            type: PropType<import("../header.vue").HeaderLabelClickFunc>;
        };
    }>, {
        showPrev: import("vue").ComputedRef<boolean>;
        showSuperPrev: import("vue").ComputedRef<boolean>;
        showNext: import("vue").ComputedRef<boolean>;
        showSuperNext: import("vue").ComputedRef<boolean>;
        year: import("vue").ComputedRef<string>;
        month: import("vue").ComputedRef<string>;
        getIconClassName: (show?: boolean) => (string | {
            [x: string]: boolean;
        })[];
        previousYearLabel: string;
        previousMonthLabel: string;
        nextMonthLabel: string;
        nextYearLabel: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "label-click"[], "label-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        prefixCls: {
            type: StringConstructor;
            required: true;
        };
        title: {
            type: StringConstructor;
            required: true;
        };
        mode: {
            type: PropType<import("../../types").Mode>;
            default: string;
        };
        value: {
            type: PropType<Dayjs>;
        };
        icons: {
            type: PropType<HeaderIcons>;
        };
        onPrev: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onSuperPrev: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onNext: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onSuperNext: {
            type: PropType<(payload: MouseEvent) => void>;
        };
        onLabelClick: {
            type: PropType<import("../header.vue").HeaderLabelClickFunc>;
        };
    }>> & Readonly<{
        "onLabel-click"?: ((...args: any[]) => any) | undefined;
    }>, {
        mode: import("../../types").Mode;
    }, {}, {
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
        IconRight: {
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
        IconDoubleLeft: {
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
        IconDoubleRight: {
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
        RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            renderFunc: {
                type: PropType<RenderFunc>;
                required: true;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            renderFunc: {
                type: PropType<RenderFunc>;
                required: true;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    PanelBody: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        prefixCls: {
            type: StringConstructor;
            required: true;
        };
        rows: {
            type: PropType<Cell[][]>;
            default: () => never[];
        };
        value: {
            type: PropType<Dayjs>;
        };
        disabledDate: {
            type: PropType<DisabledDate>;
        };
        isSameTime: {
            type: PropType<IsSameTime>;
            required: true;
        };
        mode: {
            type: PropType<import("../../types").Mode>;
        };
        rangeValues: {
            type: PropType<Array<Dayjs | undefined>>;
        };
        dateRender: {
            type: PropType<RenderFunc>;
        };
    }>, {
        isWeek: import("vue").ComputedRef<boolean>;
        getCellClassName: (cellData: Cell) => (string | {
            [x: string]: boolean | undefined;
        } | undefined)[];
        isCellDisabled: (cellData: Cell) => boolean;
        isCellSelected: (cellData: Cell) => boolean;
        onCellClick: (cellData: Cell) => void;
        onCellMouseEnter: (cellData: Cell) => void;
        onCellMouseLeave: (cellData: Cell) => void;
        getDateValue: typeof import("../../../_utils/date").getDateValue;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cell-click" | "cell-mouse-enter")[], "cell-click" | "cell-mouse-enter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        prefixCls: {
            type: StringConstructor;
            required: true;
        };
        rows: {
            type: PropType<Cell[][]>;
            default: () => never[];
        };
        value: {
            type: PropType<Dayjs>;
        };
        disabledDate: {
            type: PropType<DisabledDate>;
        };
        isSameTime: {
            type: PropType<IsSameTime>;
            required: true;
        };
        mode: {
            type: PropType<import("../../types").Mode>;
        };
        rangeValues: {
            type: PropType<Array<Dayjs | undefined>>;
        };
        dateRender: {
            type: PropType<RenderFunc>;
        };
    }>> & Readonly<{
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-mouse-enter"?: ((...args: any[]) => any) | undefined;
    }>, {
        rows: Cell[][];
    }, {}, {
        RenderFunction: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            renderFunc: {
                type: PropType<RenderFunc>;
                required: true;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            renderFunc: {
                type: PropType<RenderFunc>;
                required: true;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
