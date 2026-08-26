import { PropType, VNode } from 'vue';
import type { RenderFunc } from '../_components/render-function';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /** 标题 */
    title: {
        type: StringConstructor;
    };
    /** 是否允许选中  */
    selectable: {
        type: BooleanConstructor;
    };
    /** 是否禁用节点 */
    disabled: {
        type: BooleanConstructor;
    };
    /** 是否禁用checkbox   */
    disableCheckbox: {
        type: BooleanConstructor;
    };
    /** 是否显示多选框   */
    checkable: {
        type: BooleanConstructor;
    };
    /** 是否可以拖拽   */
    draggable: {
        type: BooleanConstructor;
    };
    /** 是否是叶子节点。动态加载时有效 */
    isLeaf: {
        type: BooleanConstructor;
    };
    icon: {
        type: PropType<() => VNode>;
    };
    switcherIcon: {
        type: PropType<() => VNode>;
    };
    loadingIcon: {
        type: PropType<() => VNode>;
    };
    dragIcon: {
        type: PropType<() => VNode>;
    };
    isTail: {
        type: BooleanConstructor;
    };
    blockNode: {
        type: BooleanConstructor;
    };
    showLine: {
        type: BooleanConstructor;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    lineless: {
        type: PropType<boolean[]>;
        default: () => never[];
    };
}>, {
    nodekey: import("vue").Ref<import("./types").TreeNodeKey, import("./types").TreeNodeKey>;
    refTitle: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    prefixCls: string;
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean | undefined;
    })[]>;
    titleClassNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    indeterminate: import("vue").ComputedRef<boolean | undefined>;
    checked: import("vue").ComputedRef<boolean | undefined>;
    expanded: import("vue").ComputedRef<boolean | undefined>;
    selected: import("vue").ComputedRef<boolean | undefined>;
    treeTitle: import("vue").ComputedRef<RenderFunc | undefined>;
    treeNodeData: import("vue").ComputedRef<import("./types").TreeNodeData>;
    loading: import("vue").ComputedRef<boolean | undefined>;
    treeDragIcon: import("vue").ComputedRef<import("vue").Slot | undefined>;
    treeNodeIcon: import("vue").ComputedRef<import("vue").Slot | undefined>;
    extra: import("vue").ComputedRef<RenderFunc | undefined>;
    nodeStatus: {
        loading: boolean | undefined;
        checked: boolean | undefined;
        selected: boolean | undefined;
        indeterminate: boolean | undefined;
        expanded: boolean | undefined;
        isLeaf: boolean;
    };
    onCheckboxChange(checked: boolean | (string | number | boolean)[], e: Event): void;
    onTitleClick(e: Event): void;
    onSwitcherClick: (e: Event) => void;
    onDragStart(e: DragEvent): void;
    onDragEnd(e: DragEvent): void;
    onDragOver(e: DragEvent): void;
    onDragLeave(e: DragEvent): void;
    onDrop(e: DragEvent): void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** 标题 */
    title: {
        type: StringConstructor;
    };
    /** 是否允许选中  */
    selectable: {
        type: BooleanConstructor;
    };
    /** 是否禁用节点 */
    disabled: {
        type: BooleanConstructor;
    };
    /** 是否禁用checkbox   */
    disableCheckbox: {
        type: BooleanConstructor;
    };
    /** 是否显示多选框   */
    checkable: {
        type: BooleanConstructor;
    };
    /** 是否可以拖拽   */
    draggable: {
        type: BooleanConstructor;
    };
    /** 是否是叶子节点。动态加载时有效 */
    isLeaf: {
        type: BooleanConstructor;
    };
    icon: {
        type: PropType<() => VNode>;
    };
    switcherIcon: {
        type: PropType<() => VNode>;
    };
    loadingIcon: {
        type: PropType<() => VNode>;
    };
    dragIcon: {
        type: PropType<() => VNode>;
    };
    isTail: {
        type: BooleanConstructor;
    };
    blockNode: {
        type: BooleanConstructor;
    };
    showLine: {
        type: BooleanConstructor;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    lineless: {
        type: PropType<boolean[]>;
        default: () => never[];
    };
}>> & Readonly<{}>, {
    disabled: boolean;
    showLine: boolean;
    checkable: boolean;
    draggable: boolean;
    isLeaf: boolean;
    level: number;
    selectable: boolean;
    disableCheckbox: boolean;
    isTail: boolean;
    blockNode: boolean;
    lineless: boolean[];
}, {}, {
    NodeSwitcher: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        loading: BooleanConstructor;
        showLine: BooleanConstructor;
        treeNodeData: {
            type: PropType<import("./types").TreeNodeData>;
        };
        icons: {
            type: PropType<Record<string, (() => VNode) | undefined>>;
        };
        nodeStatus: {
            type: PropType<{
                loading?: boolean;
                checked?: boolean;
                selected?: boolean;
                expanded?: boolean;
                indeterminate?: boolean;
                isLeaf?: boolean;
            }>;
        };
    }>, {
        getSwitcherIcon: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | undefined;
        getLoadingIcon: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | undefined;
        onClick(e: Event): void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        loading: BooleanConstructor;
        showLine: BooleanConstructor;
        treeNodeData: {
            type: PropType<import("./types").TreeNodeData>;
        };
        icons: {
            type: PropType<Record<string, (() => VNode) | undefined>>;
        };
        nodeStatus: {
            type: PropType<{
                loading?: boolean;
                checked?: boolean;
                selected?: boolean;
                expanded?: boolean;
                indeterminate?: boolean;
                isLeaf?: boolean;
            }>;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {
        showLine: boolean;
        loading: boolean;
    }, {}, {
        IconLoading: {
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
    Checkbox: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<boolean | import("..").CheckboxValue[]>;
                default: undefined;
            };
            defaultChecked: {
                type: BooleanConstructor;
                default: boolean;
            };
            value: PropType<import("..").CheckboxValue>;
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            indeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            uninjectGroupContext: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((value: boolean | (string | number | boolean)[], ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean | (string | number | boolean)[]) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: boolean | (string | number | boolean)[]) => true;
            change: (value: boolean | (string | number | boolean)[], ev: Event) => true;
        }, import("vue").PublicProps, {
            disabled: boolean;
            modelValue: boolean | import("..").CheckboxValue[];
            defaultChecked: boolean;
            indeterminate: boolean;
            uninjectGroupContext: boolean;
        }, true, {}, {}, {
            Check: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                prefix: {
                    type: StringConstructor;
                };
                size: {
                    type: PropType<import("..").ComponentSize>;
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
                    type: PropType<import("..").ComponentSize>;
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
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<boolean | import("..").CheckboxValue[]>;
                default: undefined;
            };
            defaultChecked: {
                type: BooleanConstructor;
                default: boolean;
            };
            value: PropType<import("..").CheckboxValue>;
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            indeterminate: {
                type: BooleanConstructor;
                default: boolean;
            };
            uninjectGroupContext: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((value: boolean | (string | number | boolean)[], ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean | (string | number | boolean)[]) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            disabled: boolean;
            modelValue: boolean | import("..").CheckboxValue[];
            defaultChecked: boolean;
            indeterminate: boolean;
            uninjectGroupContext: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: PropType<boolean | import("..").CheckboxValue[]>;
            default: undefined;
        };
        defaultChecked: {
            type: BooleanConstructor;
            default: boolean;
        };
        value: PropType<import("..").CheckboxValue>;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: boolean;
        };
        uninjectGroupContext: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((value: boolean | (string | number | boolean)[], ev: Event) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean | (string | number | boolean)[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: boolean | (string | number | boolean)[]) => true;
        change: (value: boolean | (string | number | boolean)[], ev: Event) => true;
    }, string, {
        disabled: boolean;
        modelValue: boolean | import("..").CheckboxValue[];
        defaultChecked: boolean;
        indeterminate: boolean;
        uninjectGroupContext: boolean;
    }, {}, string, {}, {
        Check: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            prefix: {
                type: StringConstructor;
            };
            size: {
                type: PropType<import("..").ComponentSize>;
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
                type: PropType<import("..").ComponentSize>;
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
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        Group: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<import("..").CheckboxValue[]>;
                default: undefined;
            };
            defaultValue: {
                type: PropType<import("..").CheckboxValue[]>;
                default: () => never[];
            };
            max: NumberConstructor;
            options: PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
            direction: {
                type: PropType<import("..").Direction>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:modelValue': (value: (string | number | boolean)[]) => true;
            change: (value: (string | number | boolean)[], ev: Event) => true;
        }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: PropType<import("..").CheckboxValue[]>;
                default: undefined;
            };
            defaultValue: {
                type: PropType<import("..").CheckboxValue[]>;
                default: () => never[];
            };
            max: NumberConstructor;
            options: PropType<Array<import("..").CheckboxValue | import("..").CheckboxOption>>;
            direction: {
                type: PropType<import("..").Direction>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((value: (string | number | boolean)[], ev: Event) => any) | undefined;
            "onUpdate:modelValue"?: ((value: (string | number | boolean)[]) => any) | undefined;
        }>, {
            disabled: boolean;
            defaultValue: import("..").CheckboxValue[];
            modelValue: import("..").CheckboxValue[];
            direction: "horizontal" | "vertical";
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }>;
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
    IconDragDotVertical: {
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
