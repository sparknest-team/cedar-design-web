import _TreeSelect from './tree-select.vue';
import { treeSelectProps } from './props';
declare const TreeSelect: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
        };
        loading: {
            type: BooleanConstructor;
        };
        error: {
            type: BooleanConstructor;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowSearch: {
            type: import("vue").PropType<boolean | {
                retainInputValue?: boolean;
            }>;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        clearable: {
            type: BooleanConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        maxTagCount: {
            type: NumberConstructor;
        };
        multiple: {
            type: BooleanConstructor;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
        };
        fieldNames: {
            type: import("vue").PropType<import("..").TreeFieldNames>;
        };
        data: {
            type: import("vue").PropType<import("..").TreeNodeData[]>;
            default: () => never[];
        };
        labelInValue: {
            type: BooleanConstructor;
        };
        treeCheckable: {
            type: BooleanConstructor;
        };
        treeCheckStrictly: {
            type: BooleanConstructor;
        };
        treeCheckedStrategy: {
            type: import("vue").PropType<"all" | "parent" | "child">;
            default: string;
        };
        treeProps: {
            type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
        };
        triggerProps: {
            type: import("vue").PropType<Partial<import("..").TriggerProps>>;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
        };
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        dropdownClassName: {
            type: import("vue").PropType<string | string[]>;
        };
        filterTreeNode: {
            type: import("vue").PropType<(searchKey: string, nodeData: import("..").TreeNodeData) => boolean>;
        };
        loadMore: {
            type: import("vue").PropType<(nodeData: import("..").TreeNodeData) => Promise<void>>;
        };
        disableFilter: {
            type: BooleanConstructor;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        fallbackOption: {
            type: import("vue").PropType<boolean | ((key: number | string) => import("..").TreeNodeData | boolean)>;
            default: boolean;
        };
        selectable: {
            type: import("vue").PropType<boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
                isLeaf: boolean;
                level: number;
            }) => boolean)>;
            default: boolean;
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
        showHeaderOnEmpty: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        showFooterOnEmpty: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        inputValue: {
            type: StringConstructor;
        };
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        onSearch?: ((searchKey: string) => any) | undefined;
        onChange?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        "onOpen-change"?: ((visible: boolean) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string) => any) | undefined;
    }>, {
        refSelectView: import("vue").Ref<any, any>;
        prefixCls: string;
        TreeSelectEmpty: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | undefined;
        selectedValue: import("vue").ComputedRef<import("./types").LabelValue[]>;
        selectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        searchValue: import("vue").ComputedRef<string>;
        panelVisible: import("vue").ComputedRef<boolean>;
        isEmpty: import("vue").ComputedRef<boolean | undefined>;
        computedFilterTreeNode: import("vue").ComputedRef<((node: import("..").TreeNodeData) => boolean) | undefined>;
        isMultiple: import("vue").ComputedRef<boolean>;
        selectViewValue: import("vue").ComputedRef<import("../_components/select-view/interface").SelectViewValue[]>;
        computedDropdownStyle: import("vue").ComputedRef<import("vue").StyleValue[]>;
        onSearchValueChange: (inputValue: string) => void;
        onSelectChange(newVal: string[]): void;
        onVisibleChange: (visible: boolean) => void;
        onInnerClear(): void;
        pickSubCompSlots: typeof import("../_utils/pick-sub-comp-slots").default;
        isSelectable: (node: import("..").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean;
        isCheckable: import("vue").ComputedRef<false | ((node: import("..").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        onBlur: () => void;
        onItemRemove(id: string): void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (value: string | number | import("./types").LabelValue | Array<string | number> | import("./types").LabelValue[] | undefined) => true;
        'update:modelValue': (value: string | number | import("./types").LabelValue | Array<string | number> | import("./types").LabelValue[] | undefined) => true;
        'update:inputValue': (inputValue: string) => true;
        'open-change': (visible: boolean) => true;
        'update:open': (visible: boolean) => true;
        search: (searchKey: string) => true;
        clear: () => true;
        inputValueChange: (inputValue: string) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        data: import("..").TreeNodeData[];
        disabled: boolean;
        open: boolean;
        scrollbar: boolean | import("..").ScrollbarProps;
        border: boolean;
        multiple: boolean;
        clearable: boolean;
        defaultOpen: boolean;
        loading: boolean;
        showHeaderOnEmpty: boolean;
        showFooterOnEmpty: boolean;
        defaultInputValue: string;
        fallbackOption: boolean | ((key: number | string) => import("..").TreeNodeData | boolean);
        selectable: boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean);
        treeCheckable: boolean;
        treeCheckStrictly: boolean;
        disableFilter: boolean;
        allowSearch: boolean | {
            retainInputValue?: boolean;
        };
        labelInValue: boolean;
        treeCheckedStrategy: "all" | "parent" | "child";
    }, true, {}, {}, {
        Trigger: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                trigger: {
                    type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                    default: string;
                };
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                popupTranslate: {
                    type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                };
                showArrow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                alignPoint: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupHoverStay: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                blurToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickOutsideToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contentClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                contentStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                arrowClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                arrowStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                popupStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                animationName: {
                    type: StringConstructor;
                    default: string;
                };
                duration: {
                    type: import("vue").PropType<number | {
                        enter: number;
                        leave: number;
                    }>;
                };
                mouseEnterDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                mouseLeaveDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                focusDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                autoFitPopupWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitPopupMinWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFixPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement>;
                };
                updateAtScroll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitTransformOrigin: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideEmpty: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                openedClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                autoFitPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderToBody: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                preventFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToCloseDistance: {
                    type: NumberConstructor;
                    default: number;
                };
            }>> & Readonly<{
                onResize?: (() => any) | undefined;
                onHide?: (() => any) | undefined;
                onShow?: (() => any) | undefined;
                "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                onOpenChange?: ((visible: boolean) => any) | undefined;
                onClickOutside?: ((event: Event) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:open': (visible: boolean) => true;
                openChange: (visible: boolean) => true;
                show: () => true;
                hide: () => true;
                clickOutside: (event: Event) => true;
                resize: () => true;
            }, import("vue").PublicProps, {
                updateAtScroll: boolean;
                scrollToClose: boolean;
                disabled: boolean;
                open: boolean;
                autoFitPosition: boolean;
                animationName: string;
                trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                defaultOpen: boolean;
                placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                popupOffset: number;
                showArrow: boolean;
                alignPoint: boolean;
                popupHoverStay: boolean;
                blurToClose: boolean;
                clickToClose: boolean;
                clickOutsideToClose: boolean;
                unmountOnClose: boolean;
                mouseEnterDelay: number;
                mouseLeaveDelay: number;
                focusDelay: number;
                autoFitPopupWidth: boolean;
                autoFitPopupMinWidth: boolean;
                autoFixPosition: boolean;
                autoFitTransformOrigin: boolean;
                hideEmpty: boolean;
                renderToBody: boolean;
                preventFocus: boolean;
                scrollToCloseDistance: number;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                trigger: {
                    type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                    default: string;
                };
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                popupTranslate: {
                    type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                };
                showArrow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                alignPoint: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupHoverStay: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                blurToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickOutsideToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contentClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                contentStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                arrowClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                arrowStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                popupStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                animationName: {
                    type: StringConstructor;
                    default: string;
                };
                duration: {
                    type: import("vue").PropType<number | {
                        enter: number;
                        leave: number;
                    }>;
                };
                mouseEnterDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                mouseLeaveDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                focusDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                autoFitPopupWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitPopupMinWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFixPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement>;
                };
                updateAtScroll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitTransformOrigin: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideEmpty: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                openedClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                autoFitPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderToBody: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                preventFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToCloseDistance: {
                    type: NumberConstructor;
                    default: number;
                };
            }>> & Readonly<{
                onResize?: (() => any) | undefined;
                onHide?: (() => any) | undefined;
                onShow?: (() => any) | undefined;
                "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                onOpenChange?: ((visible: boolean) => any) | undefined;
                onClickOutside?: ((event: Event) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                updateAtScroll: boolean;
                scrollToClose: boolean;
                disabled: boolean;
                open: boolean;
                autoFitPosition: boolean;
                animationName: string;
                trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                defaultOpen: boolean;
                placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                popupOffset: number;
                showArrow: boolean;
                alignPoint: boolean;
                popupHoverStay: boolean;
                blurToClose: boolean;
                clickToClose: boolean;
                clickOutsideToClose: boolean;
                unmountOnClose: boolean;
                mouseEnterDelay: number;
                mouseLeaveDelay: number;
                focusDelay: number;
                autoFitPopupWidth: boolean;
                autoFitPopupMinWidth: boolean;
                autoFixPosition: boolean;
                autoFitTransformOrigin: boolean;
                hideEmpty: boolean;
                renderToBody: boolean;
                preventFocus: boolean;
                scrollToCloseDistance: number;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            trigger: {
                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                default: string;
            };
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupOffset: {
                type: NumberConstructor;
                default: number;
            };
            popupTranslate: {
                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
            };
            showArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            alignPoint: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupHoverStay: {
                type: BooleanConstructor;
                default: boolean;
            };
            blurToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickOutsideToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            contentClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            contentStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            arrowClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            arrowStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            animationName: {
                type: StringConstructor;
                default: string;
            };
            duration: {
                type: import("vue").PropType<number | {
                    enter: number;
                    leave: number;
                }>;
            };
            mouseEnterDelay: {
                type: NumberConstructor;
                default: number;
            };
            mouseLeaveDelay: {
                type: NumberConstructor;
                default: number;
            };
            focusDelay: {
                type: NumberConstructor;
                default: number;
            };
            autoFitPopupWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitPopupMinWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFixPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement>;
            };
            updateAtScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitTransformOrigin: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideEmpty: {
                type: BooleanConstructor;
                default: boolean;
            };
            openedClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            autoFitPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderToBody: {
                type: BooleanConstructor;
                default: boolean;
            };
            preventFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToCloseDistance: {
                type: NumberConstructor;
                default: number;
            };
        }>> & Readonly<{
            onResize?: (() => any) | undefined;
            onHide?: (() => any) | undefined;
            onShow?: (() => any) | undefined;
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
            onClickOutside?: ((event: Event) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:open': (visible: boolean) => true;
            openChange: (visible: boolean) => true;
            show: () => true;
            hide: () => true;
            clickOutside: (event: Event) => true;
            resize: () => true;
        }, string, {
            updateAtScroll: boolean;
            scrollToClose: boolean;
            disabled: boolean;
            open: boolean;
            autoFitPosition: boolean;
            animationName: string;
            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
            defaultOpen: boolean;
            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            popupOffset: number;
            showArrow: boolean;
            alignPoint: boolean;
            popupHoverStay: boolean;
            blurToClose: boolean;
            clickToClose: boolean;
            clickOutsideToClose: boolean;
            unmountOnClose: boolean;
            mouseEnterDelay: number;
            mouseLeaveDelay: number;
            focusDelay: number;
            autoFitPopupWidth: boolean;
            autoFitPopupMinWidth: boolean;
            autoFixPosition: boolean;
            autoFitTransformOrigin: boolean;
            hideEmpty: boolean;
            renderToBody: boolean;
            preventFocus: boolean;
            scrollToCloseDistance: number;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
        SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
                required: true;
            };
            inputValue: StringConstructor;
            placeholder: StringConstructor;
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            opened: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            creatable: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterable: {
                type: BooleanConstructor;
                default: (props: import("../_utils/types").Data) => boolean;
            };
            maxTagCount: {
                type: NumberConstructor;
                default: number;
            };
            tagNowrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            retainInputValue: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            inputRef: import("vue").ComputedRef<HTMLInputElement>;
            handleFocus: (ev: FocusEvent) => void;
            handleBlur: (ev: FocusEvent) => void;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "clear" | "blur" | "remove")[], "focus" | "clear" | "blur" | "remove", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
                required: true;
            };
            inputValue: StringConstructor;
            placeholder: StringConstructor;
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            opened: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            creatable: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterable: {
                type: BooleanConstructor;
                default: (props: import("../_utils/types").Data) => boolean;
            };
            maxTagCount: {
                type: NumberConstructor;
                default: number;
            };
            tagNowrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            retainInputValue: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onFocus?: ((...args: any[]) => any) | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
            onRemove?: ((...args: any[]) => any) | undefined;
        }>, {
            error: boolean;
            disabled: boolean;
            multiple: boolean;
            variant: "filled" | "outlined" | "standard";
            clearable: boolean;
            loading: boolean;
            opened: boolean;
            retainInputValue: boolean;
            maxTagCount: number;
            tagNowrap: boolean;
            bordered: boolean;
            creatable: boolean;
            filterable: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Panel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            treeProps: {
                type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
                default: () => {};
            };
            selectedKeys: {
                type: import("vue").PropType<import("../tree/types").TreeNodeKey[]>;
            };
            showCheckable: {
                type: BooleanConstructor;
            };
            treeSlots: {
                type: import("vue").PropType<import("vue").Slots>;
                default: () => {};
            };
            scrollbar: {
                type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
                default: boolean;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            treeProps: {
                type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
                default: () => {};
            };
            selectedKeys: {
                type: import("vue").PropType<import("../tree/types").TreeNodeKey[]>;
            };
            showCheckable: {
                type: BooleanConstructor;
            };
            treeSlots: {
                type: import("vue").PropType<import("vue").Slots>;
                default: () => {};
            };
            scrollbar: {
                type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
        }>, {
            scrollbar: boolean | import("..").ScrollbarProps;
            treeProps: Partial<import("../tree/types").TreeProps>;
            showCheckable: boolean;
            treeSlots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
        }, {}, {
            Tree: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                        default: string;
                    };
                    blockNode: {
                        type: BooleanConstructor;
                    };
                    defaultExpandAll: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    multiple: {
                        type: BooleanConstructor;
                    };
                    checkable: {
                        type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean)>;
                        default: boolean;
                    };
                    selectable: {
                        type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean)>;
                        default: boolean;
                    };
                    checkStrictly: {
                        type: BooleanConstructor;
                    };
                    checkedStrategy: {
                        type: import("vue").PropType<"all" | "parent" | "child">;
                        default: string;
                    };
                    defaultSelectedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    selectedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    defaultCheckedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    checkedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    defaultExpandedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    expandedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    data: {
                        type: import("vue").PropType<import("..").TreeNodeData[]>;
                        default: () => never[];
                    };
                    fieldNames: {
                        type: import("vue").PropType<import("..").TreeFieldNames>;
                    };
                    showLine: {
                        type: BooleanConstructor;
                    };
                    loadMore: {
                        type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
                    };
                    draggable: {
                        type: BooleanConstructor;
                    };
                    allowDrop: {
                        type: import("vue").PropType<(options: {
                            dropNode: import("..").TreeNodeData;
                            dropPosition: -1 | 0 | 1;
                        }) => boolean>;
                    };
                    filterTreeNode: {
                        type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
                    };
                    searchValue: {
                        type: StringConstructor;
                        default: string;
                    };
                    virtualListProps: {
                        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                    };
                    defaultExpandSelected: {
                        type: BooleanConstructor;
                    };
                    defaultExpandChecked: {
                        type: BooleanConstructor;
                    };
                    autoExpandParent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    halfCheckedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    onlyCheckLeaf: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    animation: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    actionOnNodeClick: {
                        type: import("vue").PropType<"expand">;
                    };
                    disableSelectActionOnly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & Readonly<{
                    onDrop?: ((data: {
                        e: DragEvent;
                        dragNode: import("..").TreeNodeData;
                        dropNode: import("..").TreeNodeData;
                        dropPosition: number;
                    }) => any) | undefined;
                    onSelect?: ((selectedKeys: (string | number)[], data: {
                        selected?: boolean;
                        selectedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    onCheck?: ((checkedKeys: (string | number)[], data: {
                        checked?: boolean;
                        checkedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        halfCheckedKeys: (string | number)[];
                        halfCheckedNodes: import("..").TreeNodeData[];
                        e?: Event;
                    }) => any) | undefined;
                    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
                    onExpand?: ((expandKeys: (string | number)[], data: {
                        expanded?: boolean;
                        expandedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
                    onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
                    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                }>, {
                    classNames: import("vue").ComputedRef<(string | {
                        [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                    })[]>;
                    visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
                    treeContext: {
                        treeProps: {
                            readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                            readonly data: {
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                selectable?: boolean | undefined;
                                disabled?: boolean | undefined;
                                disableCheckbox?: boolean | undefined;
                                checkable?: boolean | undefined;
                                draggable?: boolean | undefined;
                                isLeaf?: boolean | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                                children?: any[] | undefined;
                            }[];
                            readonly multiple: boolean;
                            readonly animation: boolean;
                            readonly showLine: boolean;
                            readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                                level: number;
                                isLeaf: boolean;
                            }) => boolean);
                            readonly draggable: boolean;
                            readonly checkStrictly: boolean;
                            readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                                level: number;
                                isLeaf: boolean;
                            }) => boolean);
                            readonly onlyCheckLeaf: boolean;
                            readonly blockNode: boolean;
                            readonly defaultExpandAll: boolean;
                            readonly checkedStrategy: "all" | "parent" | "child";
                            readonly searchValue: string;
                            readonly defaultExpandSelected: boolean;
                            readonly defaultExpandChecked: boolean;
                            readonly autoExpandParent: boolean;
                            readonly disableSelectActionOnly: boolean;
                            readonly fieldNames: {
                                key?: string | undefined;
                                title?: string | undefined;
                                disabled?: string | undefined;
                                children?: string | undefined;
                                isLeaf?: string | undefined;
                                disableCheckbox?: string | undefined;
                                checkable?: string | undefined;
                                icon?: string | undefined;
                            } | undefined;
                            readonly virtualListProps: {
                                height?: (number | string) | undefined;
                                threshold?: number | undefined;
                                isStaticItemHeight?: boolean | undefined;
                                fixedSize?: boolean | undefined;
                                estimatedSize?: number | undefined;
                                buffer?: number | undefined;
                                data?: any[] | undefined;
                                itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                                component?: keyof HTMLElementTagNameMap | undefined;
                            } | undefined;
                            readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                            readonly selectedKeys: (string | number)[] | undefined;
                            readonly defaultSelectedKeys: (string | number)[] | undefined;
                            readonly expandedKeys: (string | number)[] | undefined;
                            readonly defaultExpandedKeys: (string | number)[] | undefined;
                            readonly checkedKeys: (string | number)[] | undefined;
                            readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                            readonly allowDrop: ((options: {
                                dropNode: import("..").TreeNodeData;
                                dropPosition: -1 | 0 | 1;
                            }) => boolean) | undefined;
                            readonly defaultCheckedKeys: (string | number)[] | undefined;
                            readonly halfCheckedKeys: (string | number)[] | undefined;
                            readonly actionOnNodeClick: "expand" | undefined;
                            readonly onDrop: ((data: {
                                e: DragEvent;
                                dragNode: import("..").TreeNodeData;
                                dropNode: import("..").TreeNodeData;
                                dropPosition: number;
                            }) => any) | undefined;
                            readonly onSelect: ((selectedKeys: (string | number)[], data: {
                                selected?: boolean;
                                selectedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                e?: Event;
                            }) => any) | undefined;
                            readonly onCheck: ((checkedKeys: (string | number)[], data: {
                                checked?: boolean;
                                checkedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                halfCheckedKeys: (string | number)[];
                                halfCheckedNodes: import("..").TreeNodeData[];
                                e?: Event;
                            }) => any) | undefined;
                            readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                            readonly onExpand: ((expandKeys: (string | number)[], data: {
                                expanded?: boolean;
                                expandedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                e?: Event;
                            }) => any) | undefined;
                            readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                            readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                            readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                        };
                        switcherIcon: import("vue").Slot<any> | undefined;
                        loadingIcon: import("vue").Slot<any> | undefined;
                        dragIcon: import("vue").Slot<any> | undefined;
                        nodeIcon: import("vue").Slot<any> | undefined;
                        nodeTitle: import("vue").Slot<any> | undefined;
                        nodeExtra: import("vue").Slot<any> | undefined;
                        treeData: {
                            key: import("../tree/types").TreeNodeKey;
                            treeNodeProps: {
                                selectable: boolean;
                                disabled: boolean;
                                disableCheckbox: boolean;
                                checkable: boolean;
                                draggable: boolean;
                                isLeaf: boolean;
                                isTail: boolean;
                                blockNode: boolean;
                                showLine: boolean;
                                level: number;
                                lineless: boolean[];
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                            };
                            treeNodeData: {
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                selectable?: boolean | undefined;
                                disabled?: boolean | undefined;
                                disableCheckbox?: boolean | undefined;
                                checkable?: boolean | undefined;
                                draggable?: boolean | undefined;
                                isLeaf?: boolean | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                                children?: any[] | undefined;
                            };
                            parent?: any | undefined;
                            parentKey?: import("../tree/types").TreeNodeKey | undefined;
                            pathParentKeys: import("../tree/types").TreeNodeKey[];
                            children?: any[] | undefined;
                            selectable: boolean;
                            disabled: boolean;
                            disableCheckbox: boolean;
                            checkable: boolean;
                            draggable: boolean;
                            isLeaf: boolean;
                            isTail: boolean;
                            blockNode: boolean;
                            showLine: boolean;
                            level: number;
                            lineless: boolean[];
                            title?: string | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                        }[];
                        flattenTreeData: import("../tree/types").Node[];
                        key2TreeNode: import("../tree/types").Key2TreeNode;
                        checkedKeys: import("../tree/types").TreeNodeKey[];
                        indeterminateKeys: import("../tree/types").TreeNodeKey[];
                        selectedKeys: import("../tree/types").TreeNodeKey[];
                        expandedKeys: import("../tree/types").TreeNodeKey[];
                        loadingKeys: import("../tree/types").TreeNodeKey[];
                        currentExpandKeys: import("../tree/types").TreeNodeKey[];
                        onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                        filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                        onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                        onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                        onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                        onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                        allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                        onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
                    };
                    virtualListRef: import("vue").Ref<any, any>;
                    computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
                    getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
                    internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                    internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                    internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                }, {}, {}, {
                    toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
                    scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
                    getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
                    getCheckedNodes(options?: {
                        checkedStrategy?: import("../tree/types").CheckedStrategy;
                        includeHalfChecked?: boolean;
                    }): (import("..").TreeNodeData | undefined)[];
                    getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
                    getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
                    checkAll(checked?: boolean): void;
                    checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
                    selectAll(selected?: boolean): void;
                    selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
                    expandAll(expanded?: boolean): void;
                    expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
                }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    select: (selectedKeys: (string | number)[], data: {
                        selected?: boolean;
                        selectedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => true;
                    'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
                    check: (checkedKeys: (string | number)[], data: {
                        checked?: boolean;
                        checkedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        halfCheckedKeys: (string | number)[];
                        halfCheckedNodes: import("..").TreeNodeData[];
                        e?: Event;
                    }) => true;
                    'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
                    'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
                    expand: (expandKeys: (string | number)[], data: {
                        expanded?: boolean;
                        expandedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => true;
                    'update:expandedKeys': (expandKeys: (string | number)[]) => true;
                    dragStart: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                    dragEnd: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                    dragOver: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                    dragLeave: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                    drop: (data: {
                        e: DragEvent;
                        dragNode: import("..").TreeNodeData;
                        dropNode: import("..").TreeNodeData;
                        dropPosition: number;
                    }) => true;
                }, import("vue").PublicProps, {
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    data: import("..").TreeNodeData[];
                    multiple: boolean;
                    animation: boolean;
                    showLine: boolean;
                    checkable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    draggable: boolean;
                    checkStrictly: boolean;
                    selectable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    onlyCheckLeaf: boolean;
                    blockNode: boolean;
                    defaultExpandAll: boolean;
                    checkedStrategy: "all" | "parent" | "child";
                    searchValue: string;
                    defaultExpandSelected: boolean;
                    defaultExpandChecked: boolean;
                    autoExpandParent: boolean;
                    disableSelectActionOnly: boolean;
                }, true, {}, {}, {
                    VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        height: {
                            type: (StringConstructor | NumberConstructor)[];
                            default: number;
                        };
                        data: {
                            type: import("vue").PropType<any[]>;
                            default: () => never[];
                        };
                        threshold: {
                            type: NumberConstructor;
                            default: number;
                        };
                        itemKey: {
                            type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                            default: string;
                        };
                        fixedSize: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        estimatedSize: {
                            type: NumberConstructor;
                            default: number;
                        };
                        buffer: {
                            type: NumberConstructor;
                            default: number;
                        };
                        component: {
                            type: (ObjectConstructor | StringConstructor)[];
                            default: string;
                        };
                        listAttrs: {
                            type: ObjectConstructor;
                        };
                        contentAttrs: {
                            type: ObjectConstructor;
                        };
                        paddingPosition: {
                            type: StringConstructor;
                            default: string;
                        };
                    }>, {
                        prefixCls: string;
                        containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                        frontPadding: import("vue").ComputedRef<number>;
                        currentList: import("vue").ComputedRef<any[]>;
                        behindPadding: import("vue").ComputedRef<number>;
                        onScroll: (ev: Event) => void;
                        setItemSize: (key: string | number, size: number) => void;
                        hasItemSize: (key: string | number) => boolean;
                        start: import("vue").Ref<number, number>;
                        scrollTo: (options: import("../_components/virtual-list-v2/interface").ScrollOptions) => void;
                        style: import("vue").ComputedRef<{
                            height: string;
                            overflow: string;
                        }>;
                        mergedComponent: import("vue").ComputedRef<{
                            container: string;
                            list: string;
                            content: string;
                        }>;
                        getItemKey: (item: any, index: number) => string | number;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        scroll: (ev: Event) => true;
                        reachBottom: (ev: Event) => true;
                    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        height: {
                            type: (StringConstructor | NumberConstructor)[];
                            default: number;
                        };
                        data: {
                            type: import("vue").PropType<any[]>;
                            default: () => never[];
                        };
                        threshold: {
                            type: NumberConstructor;
                            default: number;
                        };
                        itemKey: {
                            type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                            default: string;
                        };
                        fixedSize: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        estimatedSize: {
                            type: NumberConstructor;
                            default: number;
                        };
                        buffer: {
                            type: NumberConstructor;
                            default: number;
                        };
                        component: {
                            type: (ObjectConstructor | StringConstructor)[];
                            default: string;
                        };
                        listAttrs: {
                            type: ObjectConstructor;
                        };
                        contentAttrs: {
                            type: ObjectConstructor;
                        };
                        paddingPosition: {
                            type: StringConstructor;
                            default: string;
                        };
                    }>> & Readonly<{
                        onScroll?: ((ev: Event) => any) | undefined;
                        onReachBottom?: ((ev: Event) => any) | undefined;
                    }>, {
                        component: string | Record<string, any>;
                        data: any[];
                        height: string | number;
                        fixedSize: boolean;
                        estimatedSize: number;
                        buffer: number;
                        threshold: number;
                        itemKey: string | ((item: unknown) => string | number);
                        paddingPosition: string;
                    }, {}, {
                        VirtualListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                            hasItemSize: {
                                type: FunctionConstructor;
                                required: true;
                            };
                            setItemSize: {
                                type: FunctionConstructor;
                                required: true;
                            };
                        }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                            hasItemSize: {
                                type: FunctionConstructor;
                                required: true;
                            };
                            setItemSize: {
                                type: FunctionConstructor;
                                required: true;
                            };
                        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                    TreeNode: import("vue").DefineComponent<{}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {} | {
                        [x: string]: any;
                    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                        default: string;
                    };
                    blockNode: {
                        type: BooleanConstructor;
                    };
                    defaultExpandAll: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    multiple: {
                        type: BooleanConstructor;
                    };
                    checkable: {
                        type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean)>;
                        default: boolean;
                    };
                    selectable: {
                        type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean)>;
                        default: boolean;
                    };
                    checkStrictly: {
                        type: BooleanConstructor;
                    };
                    checkedStrategy: {
                        type: import("vue").PropType<"all" | "parent" | "child">;
                        default: string;
                    };
                    defaultSelectedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    selectedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    defaultCheckedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    checkedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    defaultExpandedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    expandedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    data: {
                        type: import("vue").PropType<import("..").TreeNodeData[]>;
                        default: () => never[];
                    };
                    fieldNames: {
                        type: import("vue").PropType<import("..").TreeFieldNames>;
                    };
                    showLine: {
                        type: BooleanConstructor;
                    };
                    loadMore: {
                        type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
                    };
                    draggable: {
                        type: BooleanConstructor;
                    };
                    allowDrop: {
                        type: import("vue").PropType<(options: {
                            dropNode: import("..").TreeNodeData;
                            dropPosition: -1 | 0 | 1;
                        }) => boolean>;
                    };
                    filterTreeNode: {
                        type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
                    };
                    searchValue: {
                        type: StringConstructor;
                        default: string;
                    };
                    virtualListProps: {
                        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                    };
                    defaultExpandSelected: {
                        type: BooleanConstructor;
                    };
                    defaultExpandChecked: {
                        type: BooleanConstructor;
                    };
                    autoExpandParent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    halfCheckedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    onlyCheckLeaf: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    animation: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    actionOnNodeClick: {
                        type: import("vue").PropType<"expand">;
                    };
                    disableSelectActionOnly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & Readonly<{
                    onDrop?: ((data: {
                        e: DragEvent;
                        dragNode: import("..").TreeNodeData;
                        dropNode: import("..").TreeNodeData;
                        dropPosition: number;
                    }) => any) | undefined;
                    onSelect?: ((selectedKeys: (string | number)[], data: {
                        selected?: boolean;
                        selectedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    onCheck?: ((checkedKeys: (string | number)[], data: {
                        checked?: boolean;
                        checkedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        halfCheckedKeys: (string | number)[];
                        halfCheckedNodes: import("..").TreeNodeData[];
                        e?: Event;
                    }) => any) | undefined;
                    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
                    onExpand?: ((expandKeys: (string | number)[], data: {
                        expanded?: boolean;
                        expandedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
                    onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
                    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                }>, {
                    classNames: import("vue").ComputedRef<(string | {
                        [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                    })[]>;
                    visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
                    treeContext: {
                        treeProps: {
                            readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                            readonly data: {
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                selectable?: boolean | undefined;
                                disabled?: boolean | undefined;
                                disableCheckbox?: boolean | undefined;
                                checkable?: boolean | undefined;
                                draggable?: boolean | undefined;
                                isLeaf?: boolean | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                                children?: any[] | undefined;
                            }[];
                            readonly multiple: boolean;
                            readonly animation: boolean;
                            readonly showLine: boolean;
                            readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                                level: number;
                                isLeaf: boolean;
                            }) => boolean);
                            readonly draggable: boolean;
                            readonly checkStrictly: boolean;
                            readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                                level: number;
                                isLeaf: boolean;
                            }) => boolean);
                            readonly onlyCheckLeaf: boolean;
                            readonly blockNode: boolean;
                            readonly defaultExpandAll: boolean;
                            readonly checkedStrategy: "all" | "parent" | "child";
                            readonly searchValue: string;
                            readonly defaultExpandSelected: boolean;
                            readonly defaultExpandChecked: boolean;
                            readonly autoExpandParent: boolean;
                            readonly disableSelectActionOnly: boolean;
                            readonly fieldNames: {
                                key?: string | undefined;
                                title?: string | undefined;
                                disabled?: string | undefined;
                                children?: string | undefined;
                                isLeaf?: string | undefined;
                                disableCheckbox?: string | undefined;
                                checkable?: string | undefined;
                                icon?: string | undefined;
                            } | undefined;
                            readonly virtualListProps: {
                                height?: (number | string) | undefined;
                                threshold?: number | undefined;
                                isStaticItemHeight?: boolean | undefined;
                                fixedSize?: boolean | undefined;
                                estimatedSize?: number | undefined;
                                buffer?: number | undefined;
                                data?: any[] | undefined;
                                itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                                component?: keyof HTMLElementTagNameMap | undefined;
                            } | undefined;
                            readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                            readonly selectedKeys: (string | number)[] | undefined;
                            readonly defaultSelectedKeys: (string | number)[] | undefined;
                            readonly expandedKeys: (string | number)[] | undefined;
                            readonly defaultExpandedKeys: (string | number)[] | undefined;
                            readonly checkedKeys: (string | number)[] | undefined;
                            readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                            readonly allowDrop: ((options: {
                                dropNode: import("..").TreeNodeData;
                                dropPosition: -1 | 0 | 1;
                            }) => boolean) | undefined;
                            readonly defaultCheckedKeys: (string | number)[] | undefined;
                            readonly halfCheckedKeys: (string | number)[] | undefined;
                            readonly actionOnNodeClick: "expand" | undefined;
                            readonly onDrop: ((data: {
                                e: DragEvent;
                                dragNode: import("..").TreeNodeData;
                                dropNode: import("..").TreeNodeData;
                                dropPosition: number;
                            }) => any) | undefined;
                            readonly onSelect: ((selectedKeys: (string | number)[], data: {
                                selected?: boolean;
                                selectedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                e?: Event;
                            }) => any) | undefined;
                            readonly onCheck: ((checkedKeys: (string | number)[], data: {
                                checked?: boolean;
                                checkedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                halfCheckedKeys: (string | number)[];
                                halfCheckedNodes: import("..").TreeNodeData[];
                                e?: Event;
                            }) => any) | undefined;
                            readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                            readonly onExpand: ((expandKeys: (string | number)[], data: {
                                expanded?: boolean;
                                expandedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                e?: Event;
                            }) => any) | undefined;
                            readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                            readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                            readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                        };
                        switcherIcon: import("vue").Slot<any> | undefined;
                        loadingIcon: import("vue").Slot<any> | undefined;
                        dragIcon: import("vue").Slot<any> | undefined;
                        nodeIcon: import("vue").Slot<any> | undefined;
                        nodeTitle: import("vue").Slot<any> | undefined;
                        nodeExtra: import("vue").Slot<any> | undefined;
                        treeData: {
                            key: import("../tree/types").TreeNodeKey;
                            treeNodeProps: {
                                selectable: boolean;
                                disabled: boolean;
                                disableCheckbox: boolean;
                                checkable: boolean;
                                draggable: boolean;
                                isLeaf: boolean;
                                isTail: boolean;
                                blockNode: boolean;
                                showLine: boolean;
                                level: number;
                                lineless: boolean[];
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                            };
                            treeNodeData: {
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                selectable?: boolean | undefined;
                                disabled?: boolean | undefined;
                                disableCheckbox?: boolean | undefined;
                                checkable?: boolean | undefined;
                                draggable?: boolean | undefined;
                                isLeaf?: boolean | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                                children?: any[] | undefined;
                            };
                            parent?: any | undefined;
                            parentKey?: import("../tree/types").TreeNodeKey | undefined;
                            pathParentKeys: import("../tree/types").TreeNodeKey[];
                            children?: any[] | undefined;
                            selectable: boolean;
                            disabled: boolean;
                            disableCheckbox: boolean;
                            checkable: boolean;
                            draggable: boolean;
                            isLeaf: boolean;
                            isTail: boolean;
                            blockNode: boolean;
                            showLine: boolean;
                            level: number;
                            lineless: boolean[];
                            title?: string | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                        }[];
                        flattenTreeData: import("../tree/types").Node[];
                        key2TreeNode: import("../tree/types").Key2TreeNode;
                        checkedKeys: import("../tree/types").TreeNodeKey[];
                        indeterminateKeys: import("../tree/types").TreeNodeKey[];
                        selectedKeys: import("../tree/types").TreeNodeKey[];
                        expandedKeys: import("../tree/types").TreeNodeKey[];
                        loadingKeys: import("../tree/types").TreeNodeKey[];
                        currentExpandKeys: import("../tree/types").TreeNodeKey[];
                        onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                        filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                        onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                        onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                        onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                        onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                        allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                        onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
                    };
                    virtualListRef: import("vue").Ref<any, any>;
                    computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
                    getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
                    internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                    internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                    internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                }, {}, {}, {
                    toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
                    scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
                    getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
                    getCheckedNodes(options?: {
                        checkedStrategy?: import("../tree/types").CheckedStrategy;
                        includeHalfChecked?: boolean;
                    }): (import("..").TreeNodeData | undefined)[];
                    getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
                    getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
                    checkAll(checked?: boolean): void;
                    checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
                    selectAll(selected?: boolean): void;
                    selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
                    expandAll(expanded?: boolean): void;
                    expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
                }, {
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    data: import("..").TreeNodeData[];
                    multiple: boolean;
                    animation: boolean;
                    showLine: boolean;
                    checkable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    draggable: boolean;
                    checkStrictly: boolean;
                    selectable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    onlyCheckLeaf: boolean;
                    blockNode: boolean;
                    defaultExpandAll: boolean;
                    checkedStrategy: "all" | "parent" | "child";
                    searchValue: string;
                    defaultExpandSelected: boolean;
                    defaultExpandChecked: boolean;
                    autoExpandParent: boolean;
                    disableSelectActionOnly: boolean;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                    default: string;
                };
                blockNode: {
                    type: BooleanConstructor;
                };
                defaultExpandAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                multiple: {
                    type: BooleanConstructor;
                };
                checkable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                selectable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                checkStrictly: {
                    type: BooleanConstructor;
                };
                checkedStrategy: {
                    type: import("vue").PropType<"all" | "parent" | "child">;
                    default: string;
                };
                defaultSelectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                selectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                checkedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultExpandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                expandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                data: {
                    type: import("vue").PropType<import("..").TreeNodeData[]>;
                    default: () => never[];
                };
                fieldNames: {
                    type: import("vue").PropType<import("..").TreeFieldNames>;
                };
                showLine: {
                    type: BooleanConstructor;
                };
                loadMore: {
                    type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
                };
                draggable: {
                    type: BooleanConstructor;
                };
                allowDrop: {
                    type: import("vue").PropType<(options: {
                        dropNode: import("..").TreeNodeData;
                        dropPosition: -1 | 0 | 1;
                    }) => boolean>;
                };
                filterTreeNode: {
                    type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
                };
                searchValue: {
                    type: StringConstructor;
                    default: string;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                defaultExpandSelected: {
                    type: BooleanConstructor;
                };
                defaultExpandChecked: {
                    type: BooleanConstructor;
                };
                autoExpandParent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                halfCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                onlyCheckLeaf: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                animation: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                actionOnNodeClick: {
                    type: import("vue").PropType<"expand">;
                };
                disableSelectActionOnly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onDrop?: ((data: {
                    e: DragEvent;
                    dragNode: import("..").TreeNodeData;
                    dropNode: import("..").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                onSelect?: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                onCheck?: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("..").TreeNodeData[];
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
                onExpand?: ((expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
                onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
                "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
            }>, {
                classNames: import("vue").ComputedRef<(string | {
                    [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                })[]>;
                visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
                treeContext: {
                    treeProps: {
                        readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                        readonly data: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        }[];
                        readonly multiple: boolean;
                        readonly animation: boolean;
                        readonly showLine: boolean;
                        readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly draggable: boolean;
                        readonly checkStrictly: boolean;
                        readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly onlyCheckLeaf: boolean;
                        readonly blockNode: boolean;
                        readonly defaultExpandAll: boolean;
                        readonly checkedStrategy: "all" | "parent" | "child";
                        readonly searchValue: string;
                        readonly defaultExpandSelected: boolean;
                        readonly defaultExpandChecked: boolean;
                        readonly autoExpandParent: boolean;
                        readonly disableSelectActionOnly: boolean;
                        readonly fieldNames: {
                            key?: string | undefined;
                            title?: string | undefined;
                            disabled?: string | undefined;
                            children?: string | undefined;
                            isLeaf?: string | undefined;
                            disableCheckbox?: string | undefined;
                            checkable?: string | undefined;
                            icon?: string | undefined;
                        } | undefined;
                        readonly virtualListProps: {
                            height?: (number | string) | undefined;
                            threshold?: number | undefined;
                            isStaticItemHeight?: boolean | undefined;
                            fixedSize?: boolean | undefined;
                            estimatedSize?: number | undefined;
                            buffer?: number | undefined;
                            data?: any[] | undefined;
                            itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                            component?: keyof HTMLElementTagNameMap | undefined;
                        } | undefined;
                        readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                        readonly selectedKeys: (string | number)[] | undefined;
                        readonly defaultSelectedKeys: (string | number)[] | undefined;
                        readonly expandedKeys: (string | number)[] | undefined;
                        readonly defaultExpandedKeys: (string | number)[] | undefined;
                        readonly checkedKeys: (string | number)[] | undefined;
                        readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                        readonly allowDrop: ((options: {
                            dropNode: import("..").TreeNodeData;
                            dropPosition: -1 | 0 | 1;
                        }) => boolean) | undefined;
                        readonly defaultCheckedKeys: (string | number)[] | undefined;
                        readonly halfCheckedKeys: (string | number)[] | undefined;
                        readonly actionOnNodeClick: "expand" | undefined;
                        readonly onDrop: ((data: {
                            e: DragEvent;
                            dragNode: import("..").TreeNodeData;
                            dropNode: import("..").TreeNodeData;
                            dropPosition: number;
                        }) => any) | undefined;
                        readonly onSelect: ((selectedKeys: (string | number)[], data: {
                            selected?: boolean;
                            selectedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly onCheck: ((checkedKeys: (string | number)[], data: {
                            checked?: boolean;
                            checkedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            halfCheckedKeys: (string | number)[];
                            halfCheckedNodes: import("..").TreeNodeData[];
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                        readonly onExpand: ((expandKeys: (string | number)[], data: {
                            expanded?: boolean;
                            expandedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                        readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                        readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                    };
                    switcherIcon: import("vue").Slot<any> | undefined;
                    loadingIcon: import("vue").Slot<any> | undefined;
                    dragIcon: import("vue").Slot<any> | undefined;
                    nodeIcon: import("vue").Slot<any> | undefined;
                    nodeTitle: import("vue").Slot<any> | undefined;
                    nodeExtra: import("vue").Slot<any> | undefined;
                    treeData: {
                        key: import("../tree/types").TreeNodeKey;
                        treeNodeProps: {
                            selectable: boolean;
                            disabled: boolean;
                            disableCheckbox: boolean;
                            checkable: boolean;
                            draggable: boolean;
                            isLeaf: boolean;
                            isTail: boolean;
                            blockNode: boolean;
                            showLine: boolean;
                            level: number;
                            lineless: boolean[];
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                        };
                        treeNodeData: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        };
                        parent?: any | undefined;
                        parentKey?: import("../tree/types").TreeNodeKey | undefined;
                        pathParentKeys: import("../tree/types").TreeNodeKey[];
                        children?: any[] | undefined;
                        selectable: boolean;
                        disabled: boolean;
                        disableCheckbox: boolean;
                        checkable: boolean;
                        draggable: boolean;
                        isLeaf: boolean;
                        isTail: boolean;
                        blockNode: boolean;
                        showLine: boolean;
                        level: number;
                        lineless: boolean[];
                        title?: string | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                    }[];
                    flattenTreeData: import("../tree/types").Node[];
                    key2TreeNode: import("../tree/types").Key2TreeNode;
                    checkedKeys: import("../tree/types").TreeNodeKey[];
                    indeterminateKeys: import("../tree/types").TreeNodeKey[];
                    selectedKeys: import("../tree/types").TreeNodeKey[];
                    expandedKeys: import("../tree/types").TreeNodeKey[];
                    loadingKeys: import("../tree/types").TreeNodeKey[];
                    currentExpandKeys: import("../tree/types").TreeNodeKey[];
                    onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                    filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                    onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                    onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                    allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                    onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
                };
                virtualListRef: import("vue").Ref<any, any>;
                computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
                getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
                internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
            }, {}, {}, {
                toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
                scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
                getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
                getCheckedNodes(options?: {
                    checkedStrategy?: import("../tree/types").CheckedStrategy;
                    includeHalfChecked?: boolean;
                }): (import("..").TreeNodeData | undefined)[];
                getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
                getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
                checkAll(checked?: boolean): void;
                checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
                selectAll(selected?: boolean): void;
                selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
                expandAll(expanded?: boolean): void;
                expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                select: (selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => true;
                'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
                check: (checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("..").TreeNodeData[];
                    e?: Event;
                }) => true;
                'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
                'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
                expand: (expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => true;
                'update:expandedKeys': (expandKeys: (string | number)[]) => true;
                dragStart: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragEnd: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragOver: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragLeave: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                drop: (data: {
                    e: DragEvent;
                    dragNode: import("..").TreeNodeData;
                    dropNode: import("..").TreeNodeData;
                    dropPosition: number;
                }) => true;
            }, string, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                data: import("..").TreeNodeData[];
                multiple: boolean;
                animation: boolean;
                showLine: boolean;
                checkable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                draggable: boolean;
                checkStrictly: boolean;
                selectable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                onlyCheckLeaf: boolean;
                blockNode: boolean;
                defaultExpandAll: boolean;
                checkedStrategy: "all" | "parent" | "child";
                searchValue: string;
                defaultExpandSelected: boolean;
                defaultExpandChecked: boolean;
                autoExpandParent: boolean;
                disableSelectActionOnly: boolean;
            }, {}, string, {}, {
                VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    height: {
                        type: (StringConstructor | NumberConstructor)[];
                        default: number;
                    };
                    data: {
                        type: import("vue").PropType<any[]>;
                        default: () => never[];
                    };
                    threshold: {
                        type: NumberConstructor;
                        default: number;
                    };
                    itemKey: {
                        type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                        default: string;
                    };
                    fixedSize: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    estimatedSize: {
                        type: NumberConstructor;
                        default: number;
                    };
                    buffer: {
                        type: NumberConstructor;
                        default: number;
                    };
                    component: {
                        type: (ObjectConstructor | StringConstructor)[];
                        default: string;
                    };
                    listAttrs: {
                        type: ObjectConstructor;
                    };
                    contentAttrs: {
                        type: ObjectConstructor;
                    };
                    paddingPosition: {
                        type: StringConstructor;
                        default: string;
                    };
                }>, {
                    prefixCls: string;
                    containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    frontPadding: import("vue").ComputedRef<number>;
                    currentList: import("vue").ComputedRef<any[]>;
                    behindPadding: import("vue").ComputedRef<number>;
                    onScroll: (ev: Event) => void;
                    setItemSize: (key: string | number, size: number) => void;
                    hasItemSize: (key: string | number) => boolean;
                    start: import("vue").Ref<number, number>;
                    scrollTo: (options: import("../_components/virtual-list-v2/interface").ScrollOptions) => void;
                    style: import("vue").ComputedRef<{
                        height: string;
                        overflow: string;
                    }>;
                    mergedComponent: import("vue").ComputedRef<{
                        container: string;
                        list: string;
                        content: string;
                    }>;
                    getItemKey: (item: any, index: number) => string | number;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    scroll: (ev: Event) => true;
                    reachBottom: (ev: Event) => true;
                }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    height: {
                        type: (StringConstructor | NumberConstructor)[];
                        default: number;
                    };
                    data: {
                        type: import("vue").PropType<any[]>;
                        default: () => never[];
                    };
                    threshold: {
                        type: NumberConstructor;
                        default: number;
                    };
                    itemKey: {
                        type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                        default: string;
                    };
                    fixedSize: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    estimatedSize: {
                        type: NumberConstructor;
                        default: number;
                    };
                    buffer: {
                        type: NumberConstructor;
                        default: number;
                    };
                    component: {
                        type: (ObjectConstructor | StringConstructor)[];
                        default: string;
                    };
                    listAttrs: {
                        type: ObjectConstructor;
                    };
                    contentAttrs: {
                        type: ObjectConstructor;
                    };
                    paddingPosition: {
                        type: StringConstructor;
                        default: string;
                    };
                }>> & Readonly<{
                    onScroll?: ((ev: Event) => any) | undefined;
                    onReachBottom?: ((ev: Event) => any) | undefined;
                }>, {
                    component: string | Record<string, any>;
                    data: any[];
                    height: string | number;
                    fixedSize: boolean;
                    estimatedSize: number;
                    buffer: number;
                    threshold: number;
                    itemKey: string | ((item: unknown) => string | number);
                    paddingPosition: string;
                }, {}, {
                    VirtualListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        hasItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                        setItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        hasItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                        setItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                TreeNode: import("vue").DefineComponent<{}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {} | {
                    [x: string]: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Empty: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                description: StringConstructor;
                imageUrl: StringConstructor;
                alt: {
                    type: StringConstructor;
                    default: string;
                };
                icon: StringConstructor;
                imageSize: {
                    type: import("vue").PropType<import("../empty").EmptyImageSize>;
                    default: string;
                };
                inConfigProvider: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                alt: string;
                imageSize: import("../empty").EmptyImageSize;
                inConfigProvider: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                description: StringConstructor;
                imageUrl: StringConstructor;
                alt: {
                    type: StringConstructor;
                    default: string;
                };
                icon: StringConstructor;
                imageSize: {
                    type: import("vue").PropType<import("../empty").EmptyImageSize>;
                    default: string;
                };
                inConfigProvider: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                alt: string;
                imageSize: import("../empty").EmptyImageSize;
                inConfigProvider: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            description: StringConstructor;
            imageUrl: StringConstructor;
            alt: {
                type: StringConstructor;
                default: string;
            };
            icon: StringConstructor;
            imageSize: {
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
                default: string;
            };
            inConfigProvider: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            alt: string;
            imageSize: import("../empty").EmptyImageSize;
            inConfigProvider: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
        Spin: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: NumberConstructor;
                };
                loading: BooleanConstructor;
                dot: BooleanConstructor;
                tip: StringConstructor;
                hideIcon: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                dot: boolean;
                loading: boolean;
                hideIcon: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: NumberConstructor;
                };
                loading: BooleanConstructor;
                dot: BooleanConstructor;
                tip: StringConstructor;
                hideIcon: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                dot: boolean;
                loading: boolean;
                hideIcon: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
        };
        loading: {
            type: BooleanConstructor;
        };
        error: {
            type: BooleanConstructor;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowSearch: {
            type: import("vue").PropType<boolean | {
                retainInputValue?: boolean;
            }>;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        clearable: {
            type: BooleanConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        maxTagCount: {
            type: NumberConstructor;
        };
        multiple: {
            type: BooleanConstructor;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
        };
        fieldNames: {
            type: import("vue").PropType<import("..").TreeFieldNames>;
        };
        data: {
            type: import("vue").PropType<import("..").TreeNodeData[]>;
            default: () => never[];
        };
        labelInValue: {
            type: BooleanConstructor;
        };
        treeCheckable: {
            type: BooleanConstructor;
        };
        treeCheckStrictly: {
            type: BooleanConstructor;
        };
        treeCheckedStrategy: {
            type: import("vue").PropType<"all" | "parent" | "child">;
            default: string;
        };
        treeProps: {
            type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
        };
        triggerProps: {
            type: import("vue").PropType<Partial<import("..").TriggerProps>>;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
        };
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        dropdownClassName: {
            type: import("vue").PropType<string | string[]>;
        };
        filterTreeNode: {
            type: import("vue").PropType<(searchKey: string, nodeData: import("..").TreeNodeData) => boolean>;
        };
        loadMore: {
            type: import("vue").PropType<(nodeData: import("..").TreeNodeData) => Promise<void>>;
        };
        disableFilter: {
            type: BooleanConstructor;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        fallbackOption: {
            type: import("vue").PropType<boolean | ((key: number | string) => import("..").TreeNodeData | boolean)>;
            default: boolean;
        };
        selectable: {
            type: import("vue").PropType<boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
                isLeaf: boolean;
                level: number;
            }) => boolean)>;
            default: boolean;
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
        showHeaderOnEmpty: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        showFooterOnEmpty: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        inputValue: {
            type: StringConstructor;
        };
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        onSearch?: ((searchKey: string) => any) | undefined;
        onChange?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        "onOpen-change"?: ((visible: boolean) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string) => any) | undefined;
    }>, {
        refSelectView: import("vue").Ref<any, any>;
        prefixCls: string;
        TreeSelectEmpty: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | undefined;
        selectedValue: import("vue").ComputedRef<import("./types").LabelValue[]>;
        selectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        searchValue: import("vue").ComputedRef<string>;
        panelVisible: import("vue").ComputedRef<boolean>;
        isEmpty: import("vue").ComputedRef<boolean | undefined>;
        computedFilterTreeNode: import("vue").ComputedRef<((node: import("..").TreeNodeData) => boolean) | undefined>;
        isMultiple: import("vue").ComputedRef<boolean>;
        selectViewValue: import("vue").ComputedRef<import("../_components/select-view/interface").SelectViewValue[]>;
        computedDropdownStyle: import("vue").ComputedRef<import("vue").StyleValue[]>;
        onSearchValueChange: (inputValue: string) => void;
        onSelectChange(newVal: string[]): void;
        onVisibleChange: (visible: boolean) => void;
        onInnerClear(): void;
        pickSubCompSlots: typeof import("../_utils/pick-sub-comp-slots").default;
        isSelectable: (node: import("..").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean;
        isCheckable: import("vue").ComputedRef<false | ((node: import("..").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        onBlur: () => void;
        onItemRemove(id: string): void;
    }, {}, {}, {}, {
        error: boolean;
        data: import("..").TreeNodeData[];
        disabled: boolean;
        open: boolean;
        scrollbar: boolean | import("..").ScrollbarProps;
        border: boolean;
        multiple: boolean;
        clearable: boolean;
        defaultOpen: boolean;
        loading: boolean;
        showHeaderOnEmpty: boolean;
        showFooterOnEmpty: boolean;
        defaultInputValue: string;
        fallbackOption: boolean | ((key: number | string) => import("..").TreeNodeData | boolean);
        selectable: boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean);
        treeCheckable: boolean;
        treeCheckStrictly: boolean;
        disableFilter: boolean;
        allowSearch: boolean | {
            retainInputValue?: boolean;
        };
        labelInValue: boolean;
        treeCheckedStrategy: "all" | "parent" | "child";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
    };
    loading: {
        type: BooleanConstructor;
    };
    error: {
        type: BooleanConstructor;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowSearch: {
        type: import("vue").PropType<boolean | {
            retainInputValue?: boolean;
        }>;
        default: (props: import("../_utils/types").Data) => boolean;
    };
    clearable: {
        type: BooleanConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    maxTagCount: {
        type: NumberConstructor;
    };
    multiple: {
        type: BooleanConstructor;
    };
    defaultValue: {
        type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
    };
    modelValue: {
        type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
    };
    fieldNames: {
        type: import("vue").PropType<import("..").TreeFieldNames>;
    };
    data: {
        type: import("vue").PropType<import("..").TreeNodeData[]>;
        default: () => never[];
    };
    labelInValue: {
        type: BooleanConstructor;
    };
    treeCheckable: {
        type: BooleanConstructor;
    };
    treeCheckStrictly: {
        type: BooleanConstructor;
    };
    treeCheckedStrategy: {
        type: import("vue").PropType<"all" | "parent" | "child">;
        default: string;
    };
    treeProps: {
        type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
    };
    triggerProps: {
        type: import("vue").PropType<Partial<import("..").TriggerProps>>;
    };
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
    };
    dropdownStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    dropdownClassName: {
        type: import("vue").PropType<string | string[]>;
    };
    filterTreeNode: {
        type: import("vue").PropType<(searchKey: string, nodeData: import("..").TreeNodeData) => boolean>;
    };
    loadMore: {
        type: import("vue").PropType<(nodeData: import("..").TreeNodeData) => Promise<void>>;
    };
    disableFilter: {
        type: BooleanConstructor;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
    };
    fallbackOption: {
        type: import("vue").PropType<boolean | ((key: number | string) => import("..").TreeNodeData | boolean)>;
        default: boolean;
    };
    selectable: {
        type: import("vue").PropType<boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)>;
        default: boolean;
    };
    scrollbar: {
        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
        default: boolean;
    };
    showHeaderOnEmpty: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showFooterOnEmpty: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    inputValue: {
        type: StringConstructor;
    };
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    onSearch?: ((searchKey: string) => any) | undefined;
    onChange?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    "onOpen-change"?: ((visible: boolean) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string) => any) | undefined;
}>, {
    refSelectView: import("vue").Ref<any, any>;
    prefixCls: string;
    TreeSelectEmpty: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    selectedValue: import("vue").ComputedRef<import("./types").LabelValue[]>;
    selectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    searchValue: import("vue").ComputedRef<string>;
    panelVisible: import("vue").ComputedRef<boolean>;
    isEmpty: import("vue").ComputedRef<boolean | undefined>;
    computedFilterTreeNode: import("vue").ComputedRef<((node: import("..").TreeNodeData) => boolean) | undefined>;
    isMultiple: import("vue").ComputedRef<boolean>;
    selectViewValue: import("vue").ComputedRef<import("../_components/select-view/interface").SelectViewValue[]>;
    computedDropdownStyle: import("vue").ComputedRef<import("vue").StyleValue[]>;
    onSearchValueChange: (inputValue: string) => void;
    onSelectChange(newVal: string[]): void;
    onVisibleChange: (visible: boolean) => void;
    onInnerClear(): void;
    pickSubCompSlots: typeof import("../_utils/pick-sub-comp-slots").default;
    isSelectable: (node: import("..").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean;
    isCheckable: import("vue").ComputedRef<false | ((node: import("..").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)>;
    onBlur: () => void;
    onItemRemove(id: string): void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: string | number | import("./types").LabelValue | Array<string | number> | import("./types").LabelValue[] | undefined) => true;
    'update:modelValue': (value: string | number | import("./types").LabelValue | Array<string | number> | import("./types").LabelValue[] | undefined) => true;
    'update:inputValue': (inputValue: string) => true;
    'open-change': (visible: boolean) => true;
    'update:open': (visible: boolean) => true;
    search: (searchKey: string) => true;
    clear: () => true;
    inputValueChange: (inputValue: string) => true;
}, string, {
    error: boolean;
    data: import("..").TreeNodeData[];
    disabled: boolean;
    open: boolean;
    scrollbar: boolean | import("..").ScrollbarProps;
    border: boolean;
    multiple: boolean;
    clearable: boolean;
    defaultOpen: boolean;
    loading: boolean;
    showHeaderOnEmpty: boolean;
    showFooterOnEmpty: boolean;
    defaultInputValue: string;
    fallbackOption: boolean | ((key: number | string) => import("..").TreeNodeData | boolean);
    selectable: boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean);
    treeCheckable: boolean;
    treeCheckStrictly: boolean;
    disableFilter: boolean;
    allowSearch: boolean | {
        retainInputValue?: boolean;
    };
    labelInValue: boolean;
    treeCheckedStrategy: "all" | "parent" | "child";
}, {}, string, {}, {
    Trigger: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            trigger: {
                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                default: string;
            };
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupOffset: {
                type: NumberConstructor;
                default: number;
            };
            popupTranslate: {
                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
            };
            showArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            alignPoint: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupHoverStay: {
                type: BooleanConstructor;
                default: boolean;
            };
            blurToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickOutsideToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            contentClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            contentStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            arrowClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            arrowStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            animationName: {
                type: StringConstructor;
                default: string;
            };
            duration: {
                type: import("vue").PropType<number | {
                    enter: number;
                    leave: number;
                }>;
            };
            mouseEnterDelay: {
                type: NumberConstructor;
                default: number;
            };
            mouseLeaveDelay: {
                type: NumberConstructor;
                default: number;
            };
            focusDelay: {
                type: NumberConstructor;
                default: number;
            };
            autoFitPopupWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitPopupMinWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFixPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement>;
            };
            updateAtScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitTransformOrigin: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideEmpty: {
                type: BooleanConstructor;
                default: boolean;
            };
            openedClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            autoFitPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderToBody: {
                type: BooleanConstructor;
                default: boolean;
            };
            preventFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToCloseDistance: {
                type: NumberConstructor;
                default: number;
            };
        }>> & Readonly<{
            onResize?: (() => any) | undefined;
            onHide?: (() => any) | undefined;
            onShow?: (() => any) | undefined;
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
            onClickOutside?: ((event: Event) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:open': (visible: boolean) => true;
            openChange: (visible: boolean) => true;
            show: () => true;
            hide: () => true;
            clickOutside: (event: Event) => true;
            resize: () => true;
        }, import("vue").PublicProps, {
            updateAtScroll: boolean;
            scrollToClose: boolean;
            disabled: boolean;
            open: boolean;
            autoFitPosition: boolean;
            animationName: string;
            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
            defaultOpen: boolean;
            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            popupOffset: number;
            showArrow: boolean;
            alignPoint: boolean;
            popupHoverStay: boolean;
            blurToClose: boolean;
            clickToClose: boolean;
            clickOutsideToClose: boolean;
            unmountOnClose: boolean;
            mouseEnterDelay: number;
            mouseLeaveDelay: number;
            focusDelay: number;
            autoFitPopupWidth: boolean;
            autoFitPopupMinWidth: boolean;
            autoFixPosition: boolean;
            autoFitTransformOrigin: boolean;
            hideEmpty: boolean;
            renderToBody: boolean;
            preventFocus: boolean;
            scrollToCloseDistance: number;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            trigger: {
                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                default: string;
            };
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupOffset: {
                type: NumberConstructor;
                default: number;
            };
            popupTranslate: {
                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
            };
            showArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            alignPoint: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupHoverStay: {
                type: BooleanConstructor;
                default: boolean;
            };
            blurToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickOutsideToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            contentClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            contentStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            arrowClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            arrowStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            animationName: {
                type: StringConstructor;
                default: string;
            };
            duration: {
                type: import("vue").PropType<number | {
                    enter: number;
                    leave: number;
                }>;
            };
            mouseEnterDelay: {
                type: NumberConstructor;
                default: number;
            };
            mouseLeaveDelay: {
                type: NumberConstructor;
                default: number;
            };
            focusDelay: {
                type: NumberConstructor;
                default: number;
            };
            autoFitPopupWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitPopupMinWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFixPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement>;
            };
            updateAtScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitTransformOrigin: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideEmpty: {
                type: BooleanConstructor;
                default: boolean;
            };
            openedClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            autoFitPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderToBody: {
                type: BooleanConstructor;
                default: boolean;
            };
            preventFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToCloseDistance: {
                type: NumberConstructor;
                default: number;
            };
        }>> & Readonly<{
            onResize?: (() => any) | undefined;
            onHide?: (() => any) | undefined;
            onShow?: (() => any) | undefined;
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
            onClickOutside?: ((event: Event) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            updateAtScroll: boolean;
            scrollToClose: boolean;
            disabled: boolean;
            open: boolean;
            autoFitPosition: boolean;
            animationName: string;
            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
            defaultOpen: boolean;
            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            popupOffset: number;
            showArrow: boolean;
            alignPoint: boolean;
            popupHoverStay: boolean;
            blurToClose: boolean;
            clickToClose: boolean;
            clickOutsideToClose: boolean;
            unmountOnClose: boolean;
            mouseEnterDelay: number;
            mouseLeaveDelay: number;
            focusDelay: number;
            autoFitPopupWidth: boolean;
            autoFitPopupMinWidth: boolean;
            autoFixPosition: boolean;
            autoFitTransformOrigin: boolean;
            hideEmpty: boolean;
            renderToBody: boolean;
            preventFocus: boolean;
            scrollToCloseDistance: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
            default: string;
        };
        placement: {
            type: import("vue").PropType<import("..").TriggerPosition>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        popupOffset: {
            type: NumberConstructor;
            default: number;
        };
        popupTranslate: {
            type: import("vue").PropType<import("..").TriggerPopupTranslate>;
        };
        showArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        alignPoint: {
            type: BooleanConstructor;
            default: boolean;
        };
        popupHoverStay: {
            type: BooleanConstructor;
            default: boolean;
        };
        blurToClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        clickToClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        clickOutsideToClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        unmountOnClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        contentClass: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
        contentStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        arrowClass: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
        arrowStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        animationName: {
            type: StringConstructor;
            default: string;
        };
        duration: {
            type: import("vue").PropType<number | {
                enter: number;
                leave: number;
            }>;
        };
        mouseEnterDelay: {
            type: NumberConstructor;
            default: number;
        };
        mouseLeaveDelay: {
            type: NumberConstructor;
            default: number;
        };
        focusDelay: {
            type: NumberConstructor;
            default: number;
        };
        autoFitPopupWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFitPopupMinWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFixPosition: {
            type: BooleanConstructor;
            default: boolean;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        updateAtScroll: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFitTransformOrigin: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideEmpty: {
            type: BooleanConstructor;
            default: boolean;
        };
        openedClass: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
        autoFitPosition: {
            type: BooleanConstructor;
            default: boolean;
        };
        renderToBody: {
            type: BooleanConstructor;
            default: boolean;
        };
        preventFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollToClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollToCloseDistance: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{
        onResize?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
        onShow?: (() => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
        onClickOutside?: ((event: Event) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:open': (visible: boolean) => true;
        openChange: (visible: boolean) => true;
        show: () => true;
        hide: () => true;
        clickOutside: (event: Event) => true;
        resize: () => true;
    }, string, {
        updateAtScroll: boolean;
        scrollToClose: boolean;
        disabled: boolean;
        open: boolean;
        autoFitPosition: boolean;
        animationName: string;
        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
        defaultOpen: boolean;
        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
        popupOffset: number;
        showArrow: boolean;
        alignPoint: boolean;
        popupHoverStay: boolean;
        blurToClose: boolean;
        clickToClose: boolean;
        clickOutsideToClose: boolean;
        unmountOnClose: boolean;
        mouseEnterDelay: number;
        mouseLeaveDelay: number;
        focusDelay: number;
        autoFitPopupWidth: boolean;
        autoFitPopupMinWidth: boolean;
        autoFixPosition: boolean;
        autoFitTransformOrigin: boolean;
        hideEmpty: boolean;
        renderToBody: boolean;
        preventFocus: boolean;
        scrollToCloseDistance: number;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
            required: true;
        };
        inputValue: StringConstructor;
        placeholder: StringConstructor;
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        opened: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        creatable: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: BooleanConstructor;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        retainInputValue: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        inputRef: import("vue").ComputedRef<HTMLInputElement>;
        handleFocus: (ev: FocusEvent) => void;
        handleBlur: (ev: FocusEvent) => void;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "clear" | "blur" | "remove")[], "focus" | "clear" | "blur" | "remove", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
            required: true;
        };
        inputValue: StringConstructor;
        placeholder: StringConstructor;
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        opened: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        creatable: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: BooleanConstructor;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        retainInputValue: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onFocus?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        onRemove?: ((...args: any[]) => any) | undefined;
    }>, {
        error: boolean;
        disabled: boolean;
        multiple: boolean;
        variant: "filled" | "outlined" | "standard";
        clearable: boolean;
        loading: boolean;
        opened: boolean;
        retainInputValue: boolean;
        maxTagCount: number;
        tagNowrap: boolean;
        bordered: boolean;
        creatable: boolean;
        filterable: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Panel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        treeProps: {
            type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
            default: () => {};
        };
        selectedKeys: {
            type: import("vue").PropType<import("../tree/types").TreeNodeKey[]>;
        };
        showCheckable: {
            type: BooleanConstructor;
        };
        treeSlots: {
            type: import("vue").PropType<import("vue").Slots>;
            default: () => {};
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        treeProps: {
            type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
            default: () => {};
        };
        selectedKeys: {
            type: import("vue").PropType<import("../tree/types").TreeNodeKey[]>;
        };
        showCheckable: {
            type: BooleanConstructor;
        };
        treeSlots: {
            type: import("vue").PropType<import("vue").Slots>;
            default: () => {};
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
    }>, {
        scrollbar: boolean | import("..").ScrollbarProps;
        treeProps: Partial<import("../tree/types").TreeProps>;
        showCheckable: boolean;
        treeSlots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
    }, {}, {
        Tree: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                    default: string;
                };
                blockNode: {
                    type: BooleanConstructor;
                };
                defaultExpandAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                multiple: {
                    type: BooleanConstructor;
                };
                checkable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                selectable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                checkStrictly: {
                    type: BooleanConstructor;
                };
                checkedStrategy: {
                    type: import("vue").PropType<"all" | "parent" | "child">;
                    default: string;
                };
                defaultSelectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                selectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                checkedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultExpandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                expandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                data: {
                    type: import("vue").PropType<import("..").TreeNodeData[]>;
                    default: () => never[];
                };
                fieldNames: {
                    type: import("vue").PropType<import("..").TreeFieldNames>;
                };
                showLine: {
                    type: BooleanConstructor;
                };
                loadMore: {
                    type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
                };
                draggable: {
                    type: BooleanConstructor;
                };
                allowDrop: {
                    type: import("vue").PropType<(options: {
                        dropNode: import("..").TreeNodeData;
                        dropPosition: -1 | 0 | 1;
                    }) => boolean>;
                };
                filterTreeNode: {
                    type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
                };
                searchValue: {
                    type: StringConstructor;
                    default: string;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                defaultExpandSelected: {
                    type: BooleanConstructor;
                };
                defaultExpandChecked: {
                    type: BooleanConstructor;
                };
                autoExpandParent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                halfCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                onlyCheckLeaf: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                animation: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                actionOnNodeClick: {
                    type: import("vue").PropType<"expand">;
                };
                disableSelectActionOnly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onDrop?: ((data: {
                    e: DragEvent;
                    dragNode: import("..").TreeNodeData;
                    dropNode: import("..").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                onSelect?: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                onCheck?: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("..").TreeNodeData[];
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
                onExpand?: ((expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
                onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
                "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
            }>, {
                classNames: import("vue").ComputedRef<(string | {
                    [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                })[]>;
                visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
                treeContext: {
                    treeProps: {
                        readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                        readonly data: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        }[];
                        readonly multiple: boolean;
                        readonly animation: boolean;
                        readonly showLine: boolean;
                        readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly draggable: boolean;
                        readonly checkStrictly: boolean;
                        readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly onlyCheckLeaf: boolean;
                        readonly blockNode: boolean;
                        readonly defaultExpandAll: boolean;
                        readonly checkedStrategy: "all" | "parent" | "child";
                        readonly searchValue: string;
                        readonly defaultExpandSelected: boolean;
                        readonly defaultExpandChecked: boolean;
                        readonly autoExpandParent: boolean;
                        readonly disableSelectActionOnly: boolean;
                        readonly fieldNames: {
                            key?: string | undefined;
                            title?: string | undefined;
                            disabled?: string | undefined;
                            children?: string | undefined;
                            isLeaf?: string | undefined;
                            disableCheckbox?: string | undefined;
                            checkable?: string | undefined;
                            icon?: string | undefined;
                        } | undefined;
                        readonly virtualListProps: {
                            height?: (number | string) | undefined;
                            threshold?: number | undefined;
                            isStaticItemHeight?: boolean | undefined;
                            fixedSize?: boolean | undefined;
                            estimatedSize?: number | undefined;
                            buffer?: number | undefined;
                            data?: any[] | undefined;
                            itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                            component?: keyof HTMLElementTagNameMap | undefined;
                        } | undefined;
                        readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                        readonly selectedKeys: (string | number)[] | undefined;
                        readonly defaultSelectedKeys: (string | number)[] | undefined;
                        readonly expandedKeys: (string | number)[] | undefined;
                        readonly defaultExpandedKeys: (string | number)[] | undefined;
                        readonly checkedKeys: (string | number)[] | undefined;
                        readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                        readonly allowDrop: ((options: {
                            dropNode: import("..").TreeNodeData;
                            dropPosition: -1 | 0 | 1;
                        }) => boolean) | undefined;
                        readonly defaultCheckedKeys: (string | number)[] | undefined;
                        readonly halfCheckedKeys: (string | number)[] | undefined;
                        readonly actionOnNodeClick: "expand" | undefined;
                        readonly onDrop: ((data: {
                            e: DragEvent;
                            dragNode: import("..").TreeNodeData;
                            dropNode: import("..").TreeNodeData;
                            dropPosition: number;
                        }) => any) | undefined;
                        readonly onSelect: ((selectedKeys: (string | number)[], data: {
                            selected?: boolean;
                            selectedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly onCheck: ((checkedKeys: (string | number)[], data: {
                            checked?: boolean;
                            checkedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            halfCheckedKeys: (string | number)[];
                            halfCheckedNodes: import("..").TreeNodeData[];
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                        readonly onExpand: ((expandKeys: (string | number)[], data: {
                            expanded?: boolean;
                            expandedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                        readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                        readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                    };
                    switcherIcon: import("vue").Slot<any> | undefined;
                    loadingIcon: import("vue").Slot<any> | undefined;
                    dragIcon: import("vue").Slot<any> | undefined;
                    nodeIcon: import("vue").Slot<any> | undefined;
                    nodeTitle: import("vue").Slot<any> | undefined;
                    nodeExtra: import("vue").Slot<any> | undefined;
                    treeData: {
                        key: import("../tree/types").TreeNodeKey;
                        treeNodeProps: {
                            selectable: boolean;
                            disabled: boolean;
                            disableCheckbox: boolean;
                            checkable: boolean;
                            draggable: boolean;
                            isLeaf: boolean;
                            isTail: boolean;
                            blockNode: boolean;
                            showLine: boolean;
                            level: number;
                            lineless: boolean[];
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                        };
                        treeNodeData: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        };
                        parent?: any | undefined;
                        parentKey?: import("../tree/types").TreeNodeKey | undefined;
                        pathParentKeys: import("../tree/types").TreeNodeKey[];
                        children?: any[] | undefined;
                        selectable: boolean;
                        disabled: boolean;
                        disableCheckbox: boolean;
                        checkable: boolean;
                        draggable: boolean;
                        isLeaf: boolean;
                        isTail: boolean;
                        blockNode: boolean;
                        showLine: boolean;
                        level: number;
                        lineless: boolean[];
                        title?: string | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                    }[];
                    flattenTreeData: import("../tree/types").Node[];
                    key2TreeNode: import("../tree/types").Key2TreeNode;
                    checkedKeys: import("../tree/types").TreeNodeKey[];
                    indeterminateKeys: import("../tree/types").TreeNodeKey[];
                    selectedKeys: import("../tree/types").TreeNodeKey[];
                    expandedKeys: import("../tree/types").TreeNodeKey[];
                    loadingKeys: import("../tree/types").TreeNodeKey[];
                    currentExpandKeys: import("../tree/types").TreeNodeKey[];
                    onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                    filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                    onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                    onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                    allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                    onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
                };
                virtualListRef: import("vue").Ref<any, any>;
                computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
                getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
                internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
            }, {}, {}, {
                toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
                scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
                getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
                getCheckedNodes(options?: {
                    checkedStrategy?: import("../tree/types").CheckedStrategy;
                    includeHalfChecked?: boolean;
                }): (import("..").TreeNodeData | undefined)[];
                getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
                getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
                checkAll(checked?: boolean): void;
                checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
                selectAll(selected?: boolean): void;
                selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
                expandAll(expanded?: boolean): void;
                expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                select: (selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => true;
                'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
                check: (checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("..").TreeNodeData[];
                    e?: Event;
                }) => true;
                'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
                'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
                expand: (expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => true;
                'update:expandedKeys': (expandKeys: (string | number)[]) => true;
                dragStart: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragEnd: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragOver: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragLeave: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                drop: (data: {
                    e: DragEvent;
                    dragNode: import("..").TreeNodeData;
                    dropNode: import("..").TreeNodeData;
                    dropPosition: number;
                }) => true;
            }, import("vue").PublicProps, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                data: import("..").TreeNodeData[];
                multiple: boolean;
                animation: boolean;
                showLine: boolean;
                checkable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                draggable: boolean;
                checkStrictly: boolean;
                selectable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                onlyCheckLeaf: boolean;
                blockNode: boolean;
                defaultExpandAll: boolean;
                checkedStrategy: "all" | "parent" | "child";
                searchValue: string;
                defaultExpandSelected: boolean;
                defaultExpandChecked: boolean;
                autoExpandParent: boolean;
                disableSelectActionOnly: boolean;
            }, true, {}, {}, {
                VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    height: {
                        type: (StringConstructor | NumberConstructor)[];
                        default: number;
                    };
                    data: {
                        type: import("vue").PropType<any[]>;
                        default: () => never[];
                    };
                    threshold: {
                        type: NumberConstructor;
                        default: number;
                    };
                    itemKey: {
                        type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                        default: string;
                    };
                    fixedSize: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    estimatedSize: {
                        type: NumberConstructor;
                        default: number;
                    };
                    buffer: {
                        type: NumberConstructor;
                        default: number;
                    };
                    component: {
                        type: (ObjectConstructor | StringConstructor)[];
                        default: string;
                    };
                    listAttrs: {
                        type: ObjectConstructor;
                    };
                    contentAttrs: {
                        type: ObjectConstructor;
                    };
                    paddingPosition: {
                        type: StringConstructor;
                        default: string;
                    };
                }>, {
                    prefixCls: string;
                    containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    frontPadding: import("vue").ComputedRef<number>;
                    currentList: import("vue").ComputedRef<any[]>;
                    behindPadding: import("vue").ComputedRef<number>;
                    onScroll: (ev: Event) => void;
                    setItemSize: (key: string | number, size: number) => void;
                    hasItemSize: (key: string | number) => boolean;
                    start: import("vue").Ref<number, number>;
                    scrollTo: (options: import("../_components/virtual-list-v2/interface").ScrollOptions) => void;
                    style: import("vue").ComputedRef<{
                        height: string;
                        overflow: string;
                    }>;
                    mergedComponent: import("vue").ComputedRef<{
                        container: string;
                        list: string;
                        content: string;
                    }>;
                    getItemKey: (item: any, index: number) => string | number;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    scroll: (ev: Event) => true;
                    reachBottom: (ev: Event) => true;
                }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    height: {
                        type: (StringConstructor | NumberConstructor)[];
                        default: number;
                    };
                    data: {
                        type: import("vue").PropType<any[]>;
                        default: () => never[];
                    };
                    threshold: {
                        type: NumberConstructor;
                        default: number;
                    };
                    itemKey: {
                        type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                        default: string;
                    };
                    fixedSize: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    estimatedSize: {
                        type: NumberConstructor;
                        default: number;
                    };
                    buffer: {
                        type: NumberConstructor;
                        default: number;
                    };
                    component: {
                        type: (ObjectConstructor | StringConstructor)[];
                        default: string;
                    };
                    listAttrs: {
                        type: ObjectConstructor;
                    };
                    contentAttrs: {
                        type: ObjectConstructor;
                    };
                    paddingPosition: {
                        type: StringConstructor;
                        default: string;
                    };
                }>> & Readonly<{
                    onScroll?: ((ev: Event) => any) | undefined;
                    onReachBottom?: ((ev: Event) => any) | undefined;
                }>, {
                    component: string | Record<string, any>;
                    data: any[];
                    height: string | number;
                    fixedSize: boolean;
                    estimatedSize: number;
                    buffer: number;
                    threshold: number;
                    itemKey: string | ((item: unknown) => string | number);
                    paddingPosition: string;
                }, {}, {
                    VirtualListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        hasItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                        setItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        hasItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                        setItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                TreeNode: import("vue").DefineComponent<{}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {} | {
                    [x: string]: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                    default: string;
                };
                blockNode: {
                    type: BooleanConstructor;
                };
                defaultExpandAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                multiple: {
                    type: BooleanConstructor;
                };
                checkable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                selectable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                checkStrictly: {
                    type: BooleanConstructor;
                };
                checkedStrategy: {
                    type: import("vue").PropType<"all" | "parent" | "child">;
                    default: string;
                };
                defaultSelectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                selectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                checkedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultExpandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                expandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                data: {
                    type: import("vue").PropType<import("..").TreeNodeData[]>;
                    default: () => never[];
                };
                fieldNames: {
                    type: import("vue").PropType<import("..").TreeFieldNames>;
                };
                showLine: {
                    type: BooleanConstructor;
                };
                loadMore: {
                    type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
                };
                draggable: {
                    type: BooleanConstructor;
                };
                allowDrop: {
                    type: import("vue").PropType<(options: {
                        dropNode: import("..").TreeNodeData;
                        dropPosition: -1 | 0 | 1;
                    }) => boolean>;
                };
                filterTreeNode: {
                    type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
                };
                searchValue: {
                    type: StringConstructor;
                    default: string;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                defaultExpandSelected: {
                    type: BooleanConstructor;
                };
                defaultExpandChecked: {
                    type: BooleanConstructor;
                };
                autoExpandParent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                halfCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                onlyCheckLeaf: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                animation: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                actionOnNodeClick: {
                    type: import("vue").PropType<"expand">;
                };
                disableSelectActionOnly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onDrop?: ((data: {
                    e: DragEvent;
                    dragNode: import("..").TreeNodeData;
                    dropNode: import("..").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                onSelect?: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                onCheck?: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("..").TreeNodeData[];
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
                onExpand?: ((expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
                onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
                "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
            }>, {
                classNames: import("vue").ComputedRef<(string | {
                    [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                })[]>;
                visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
                treeContext: {
                    treeProps: {
                        readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                        readonly data: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        }[];
                        readonly multiple: boolean;
                        readonly animation: boolean;
                        readonly showLine: boolean;
                        readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly draggable: boolean;
                        readonly checkStrictly: boolean;
                        readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly onlyCheckLeaf: boolean;
                        readonly blockNode: boolean;
                        readonly defaultExpandAll: boolean;
                        readonly checkedStrategy: "all" | "parent" | "child";
                        readonly searchValue: string;
                        readonly defaultExpandSelected: boolean;
                        readonly defaultExpandChecked: boolean;
                        readonly autoExpandParent: boolean;
                        readonly disableSelectActionOnly: boolean;
                        readonly fieldNames: {
                            key?: string | undefined;
                            title?: string | undefined;
                            disabled?: string | undefined;
                            children?: string | undefined;
                            isLeaf?: string | undefined;
                            disableCheckbox?: string | undefined;
                            checkable?: string | undefined;
                            icon?: string | undefined;
                        } | undefined;
                        readonly virtualListProps: {
                            height?: (number | string) | undefined;
                            threshold?: number | undefined;
                            isStaticItemHeight?: boolean | undefined;
                            fixedSize?: boolean | undefined;
                            estimatedSize?: number | undefined;
                            buffer?: number | undefined;
                            data?: any[] | undefined;
                            itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                            component?: keyof HTMLElementTagNameMap | undefined;
                        } | undefined;
                        readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                        readonly selectedKeys: (string | number)[] | undefined;
                        readonly defaultSelectedKeys: (string | number)[] | undefined;
                        readonly expandedKeys: (string | number)[] | undefined;
                        readonly defaultExpandedKeys: (string | number)[] | undefined;
                        readonly checkedKeys: (string | number)[] | undefined;
                        readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                        readonly allowDrop: ((options: {
                            dropNode: import("..").TreeNodeData;
                            dropPosition: -1 | 0 | 1;
                        }) => boolean) | undefined;
                        readonly defaultCheckedKeys: (string | number)[] | undefined;
                        readonly halfCheckedKeys: (string | number)[] | undefined;
                        readonly actionOnNodeClick: "expand" | undefined;
                        readonly onDrop: ((data: {
                            e: DragEvent;
                            dragNode: import("..").TreeNodeData;
                            dropNode: import("..").TreeNodeData;
                            dropPosition: number;
                        }) => any) | undefined;
                        readonly onSelect: ((selectedKeys: (string | number)[], data: {
                            selected?: boolean;
                            selectedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly onCheck: ((checkedKeys: (string | number)[], data: {
                            checked?: boolean;
                            checkedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            halfCheckedKeys: (string | number)[];
                            halfCheckedNodes: import("..").TreeNodeData[];
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                        readonly onExpand: ((expandKeys: (string | number)[], data: {
                            expanded?: boolean;
                            expandedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                        readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                        readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                    };
                    switcherIcon: import("vue").Slot<any> | undefined;
                    loadingIcon: import("vue").Slot<any> | undefined;
                    dragIcon: import("vue").Slot<any> | undefined;
                    nodeIcon: import("vue").Slot<any> | undefined;
                    nodeTitle: import("vue").Slot<any> | undefined;
                    nodeExtra: import("vue").Slot<any> | undefined;
                    treeData: {
                        key: import("../tree/types").TreeNodeKey;
                        treeNodeProps: {
                            selectable: boolean;
                            disabled: boolean;
                            disableCheckbox: boolean;
                            checkable: boolean;
                            draggable: boolean;
                            isLeaf: boolean;
                            isTail: boolean;
                            blockNode: boolean;
                            showLine: boolean;
                            level: number;
                            lineless: boolean[];
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                        };
                        treeNodeData: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        };
                        parent?: any | undefined;
                        parentKey?: import("../tree/types").TreeNodeKey | undefined;
                        pathParentKeys: import("../tree/types").TreeNodeKey[];
                        children?: any[] | undefined;
                        selectable: boolean;
                        disabled: boolean;
                        disableCheckbox: boolean;
                        checkable: boolean;
                        draggable: boolean;
                        isLeaf: boolean;
                        isTail: boolean;
                        blockNode: boolean;
                        showLine: boolean;
                        level: number;
                        lineless: boolean[];
                        title?: string | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                    }[];
                    flattenTreeData: import("../tree/types").Node[];
                    key2TreeNode: import("../tree/types").Key2TreeNode;
                    checkedKeys: import("../tree/types").TreeNodeKey[];
                    indeterminateKeys: import("../tree/types").TreeNodeKey[];
                    selectedKeys: import("../tree/types").TreeNodeKey[];
                    expandedKeys: import("../tree/types").TreeNodeKey[];
                    loadingKeys: import("../tree/types").TreeNodeKey[];
                    currentExpandKeys: import("../tree/types").TreeNodeKey[];
                    onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                    filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                    onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                    onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                    allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                    onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
                };
                virtualListRef: import("vue").Ref<any, any>;
                computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
                getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
                internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
            }, {}, {}, {
                toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
                scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
                getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
                getCheckedNodes(options?: {
                    checkedStrategy?: import("../tree/types").CheckedStrategy;
                    includeHalfChecked?: boolean;
                }): (import("..").TreeNodeData | undefined)[];
                getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
                getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
                checkAll(checked?: boolean): void;
                checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
                selectAll(selected?: boolean): void;
                selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
                expandAll(expanded?: boolean): void;
                expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
            }, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                data: import("..").TreeNodeData[];
                multiple: boolean;
                animation: boolean;
                showLine: boolean;
                checkable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                draggable: boolean;
                checkStrictly: boolean;
                selectable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                onlyCheckLeaf: boolean;
                blockNode: boolean;
                defaultExpandAll: boolean;
                checkedStrategy: "all" | "parent" | "child";
                searchValue: string;
                defaultExpandSelected: boolean;
                defaultExpandChecked: boolean;
                autoExpandParent: boolean;
                disableSelectActionOnly: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                default: string;
            };
            blockNode: {
                type: BooleanConstructor;
            };
            defaultExpandAll: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
            };
            checkable: {
                type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean)>;
                default: boolean;
            };
            selectable: {
                type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean)>;
                default: boolean;
            };
            checkStrictly: {
                type: BooleanConstructor;
            };
            checkedStrategy: {
                type: import("vue").PropType<"all" | "parent" | "child">;
                default: string;
            };
            defaultSelectedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            selectedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            defaultCheckedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            checkedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            defaultExpandedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            expandedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            data: {
                type: import("vue").PropType<import("..").TreeNodeData[]>;
                default: () => never[];
            };
            fieldNames: {
                type: import("vue").PropType<import("..").TreeFieldNames>;
            };
            showLine: {
                type: BooleanConstructor;
            };
            loadMore: {
                type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
            };
            draggable: {
                type: BooleanConstructor;
            };
            allowDrop: {
                type: import("vue").PropType<(options: {
                    dropNode: import("..").TreeNodeData;
                    dropPosition: -1 | 0 | 1;
                }) => boolean>;
            };
            filterTreeNode: {
                type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
            };
            searchValue: {
                type: StringConstructor;
                default: string;
            };
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
            defaultExpandSelected: {
                type: BooleanConstructor;
            };
            defaultExpandChecked: {
                type: BooleanConstructor;
            };
            autoExpandParent: {
                type: BooleanConstructor;
                default: boolean;
            };
            halfCheckedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            onlyCheckLeaf: {
                type: BooleanConstructor;
                default: boolean;
            };
            animation: {
                type: BooleanConstructor;
                default: boolean;
            };
            actionOnNodeClick: {
                type: import("vue").PropType<"expand">;
            };
            disableSelectActionOnly: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onDrop?: ((data: {
                e: DragEvent;
                dragNode: import("..").TreeNodeData;
                dropNode: import("..").TreeNodeData;
                dropPosition: number;
            }) => any) | undefined;
            onSelect?: ((selectedKeys: (string | number)[], data: {
                selected?: boolean;
                selectedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                e?: Event;
            }) => any) | undefined;
            onCheck?: ((checkedKeys: (string | number)[], data: {
                checked?: boolean;
                checkedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: import("..").TreeNodeData[];
                e?: Event;
            }) => any) | undefined;
            "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
            onExpand?: ((expandKeys: (string | number)[], data: {
                expanded?: boolean;
                expandedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                e?: Event;
            }) => any) | undefined;
            "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
            onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
            onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
            onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
            onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
            "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
            "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
        }>, {
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
            })[]>;
            visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
            treeContext: {
                treeProps: {
                    readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                    readonly data: {
                        key?: (string | number) | undefined;
                        title?: string | undefined;
                        selectable?: boolean | undefined;
                        disabled?: boolean | undefined;
                        disableCheckbox?: boolean | undefined;
                        checkable?: boolean | undefined;
                        draggable?: boolean | undefined;
                        isLeaf?: boolean | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                        children?: any[] | undefined;
                    }[];
                    readonly multiple: boolean;
                    readonly animation: boolean;
                    readonly showLine: boolean;
                    readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    readonly draggable: boolean;
                    readonly checkStrictly: boolean;
                    readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    readonly onlyCheckLeaf: boolean;
                    readonly blockNode: boolean;
                    readonly defaultExpandAll: boolean;
                    readonly checkedStrategy: "all" | "parent" | "child";
                    readonly searchValue: string;
                    readonly defaultExpandSelected: boolean;
                    readonly defaultExpandChecked: boolean;
                    readonly autoExpandParent: boolean;
                    readonly disableSelectActionOnly: boolean;
                    readonly fieldNames: {
                        key?: string | undefined;
                        title?: string | undefined;
                        disabled?: string | undefined;
                        children?: string | undefined;
                        isLeaf?: string | undefined;
                        disableCheckbox?: string | undefined;
                        checkable?: string | undefined;
                        icon?: string | undefined;
                    } | undefined;
                    readonly virtualListProps: {
                        height?: (number | string) | undefined;
                        threshold?: number | undefined;
                        isStaticItemHeight?: boolean | undefined;
                        fixedSize?: boolean | undefined;
                        estimatedSize?: number | undefined;
                        buffer?: number | undefined;
                        data?: any[] | undefined;
                        itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                        component?: keyof HTMLElementTagNameMap | undefined;
                    } | undefined;
                    readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                    readonly selectedKeys: (string | number)[] | undefined;
                    readonly defaultSelectedKeys: (string | number)[] | undefined;
                    readonly expandedKeys: (string | number)[] | undefined;
                    readonly defaultExpandedKeys: (string | number)[] | undefined;
                    readonly checkedKeys: (string | number)[] | undefined;
                    readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                    readonly allowDrop: ((options: {
                        dropNode: import("..").TreeNodeData;
                        dropPosition: -1 | 0 | 1;
                    }) => boolean) | undefined;
                    readonly defaultCheckedKeys: (string | number)[] | undefined;
                    readonly halfCheckedKeys: (string | number)[] | undefined;
                    readonly actionOnNodeClick: "expand" | undefined;
                    readonly onDrop: ((data: {
                        e: DragEvent;
                        dragNode: import("..").TreeNodeData;
                        dropNode: import("..").TreeNodeData;
                        dropPosition: number;
                    }) => any) | undefined;
                    readonly onSelect: ((selectedKeys: (string | number)[], data: {
                        selected?: boolean;
                        selectedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    readonly onCheck: ((checkedKeys: (string | number)[], data: {
                        checked?: boolean;
                        checkedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        halfCheckedKeys: (string | number)[];
                        halfCheckedNodes: import("..").TreeNodeData[];
                        e?: Event;
                    }) => any) | undefined;
                    readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                    readonly onExpand: ((expandKeys: (string | number)[], data: {
                        expanded?: boolean;
                        expandedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                    readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                    readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                };
                switcherIcon: import("vue").Slot<any> | undefined;
                loadingIcon: import("vue").Slot<any> | undefined;
                dragIcon: import("vue").Slot<any> | undefined;
                nodeIcon: import("vue").Slot<any> | undefined;
                nodeTitle: import("vue").Slot<any> | undefined;
                nodeExtra: import("vue").Slot<any> | undefined;
                treeData: {
                    key: import("../tree/types").TreeNodeKey;
                    treeNodeProps: {
                        selectable: boolean;
                        disabled: boolean;
                        disableCheckbox: boolean;
                        checkable: boolean;
                        draggable: boolean;
                        isLeaf: boolean;
                        isTail: boolean;
                        blockNode: boolean;
                        showLine: boolean;
                        level: number;
                        lineless: boolean[];
                        key?: (string | number) | undefined;
                        title?: string | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                    };
                    treeNodeData: {
                        key?: (string | number) | undefined;
                        title?: string | undefined;
                        selectable?: boolean | undefined;
                        disabled?: boolean | undefined;
                        disableCheckbox?: boolean | undefined;
                        checkable?: boolean | undefined;
                        draggable?: boolean | undefined;
                        isLeaf?: boolean | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                        children?: any[] | undefined;
                    };
                    parent?: any | undefined;
                    parentKey?: import("../tree/types").TreeNodeKey | undefined;
                    pathParentKeys: import("../tree/types").TreeNodeKey[];
                    children?: any[] | undefined;
                    selectable: boolean;
                    disabled: boolean;
                    disableCheckbox: boolean;
                    checkable: boolean;
                    draggable: boolean;
                    isLeaf: boolean;
                    isTail: boolean;
                    blockNode: boolean;
                    showLine: boolean;
                    level: number;
                    lineless: boolean[];
                    title?: string | undefined;
                    icon?: (() => import("vue").VNode) | undefined;
                    switcherIcon?: (() => import("vue").VNode) | undefined;
                    loadingIcon?: (() => import("vue").VNode) | undefined;
                    dragIcon?: (() => import("vue").VNode) | undefined;
                }[];
                flattenTreeData: import("../tree/types").Node[];
                key2TreeNode: import("../tree/types").Key2TreeNode;
                checkedKeys: import("../tree/types").TreeNodeKey[];
                indeterminateKeys: import("../tree/types").TreeNodeKey[];
                selectedKeys: import("../tree/types").TreeNodeKey[];
                expandedKeys: import("../tree/types").TreeNodeKey[];
                loadingKeys: import("../tree/types").TreeNodeKey[];
                currentExpandKeys: import("../tree/types").TreeNodeKey[];
                onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
            };
            virtualListRef: import("vue").Ref<any, any>;
            computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
            computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
            computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
            computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
            getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
            getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
            internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
            internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
            internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
            internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
            internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
            internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
        }, {}, {}, {
            toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
            scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
            getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
            getCheckedNodes(options?: {
                checkedStrategy?: import("../tree/types").CheckedStrategy;
                includeHalfChecked?: boolean;
            }): (import("..").TreeNodeData | undefined)[];
            getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
            getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
            checkAll(checked?: boolean): void;
            checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
            selectAll(selected?: boolean): void;
            selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
            expandAll(expanded?: boolean): void;
            expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            select: (selectedKeys: (string | number)[], data: {
                selected?: boolean;
                selectedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                e?: Event;
            }) => true;
            'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
            check: (checkedKeys: (string | number)[], data: {
                checked?: boolean;
                checkedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: import("..").TreeNodeData[];
                e?: Event;
            }) => true;
            'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
            'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
            expand: (expandKeys: (string | number)[], data: {
                expanded?: boolean;
                expandedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                e?: Event;
            }) => true;
            'update:expandedKeys': (expandKeys: (string | number)[]) => true;
            dragStart: (ev: DragEvent, node: import("..").TreeNodeData) => true;
            dragEnd: (ev: DragEvent, node: import("..").TreeNodeData) => true;
            dragOver: (ev: DragEvent, node: import("..").TreeNodeData) => true;
            dragLeave: (ev: DragEvent, node: import("..").TreeNodeData) => true;
            drop: (data: {
                e: DragEvent;
                dragNode: import("..").TreeNodeData;
                dropNode: import("..").TreeNodeData;
                dropPosition: number;
            }) => true;
        }, string, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            data: import("..").TreeNodeData[];
            multiple: boolean;
            animation: boolean;
            showLine: boolean;
            checkable: boolean | ((node: import("..").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            draggable: boolean;
            checkStrictly: boolean;
            selectable: boolean | ((node: import("..").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            onlyCheckLeaf: boolean;
            blockNode: boolean;
            defaultExpandAll: boolean;
            checkedStrategy: "all" | "parent" | "child";
            searchValue: string;
            defaultExpandSelected: boolean;
            defaultExpandChecked: boolean;
            autoExpandParent: boolean;
            disableSelectActionOnly: boolean;
        }, {}, string, {}, {
            VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                height: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                data: {
                    type: import("vue").PropType<any[]>;
                    default: () => never[];
                };
                threshold: {
                    type: NumberConstructor;
                    default: number;
                };
                itemKey: {
                    type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                    default: string;
                };
                fixedSize: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                estimatedSize: {
                    type: NumberConstructor;
                    default: number;
                };
                buffer: {
                    type: NumberConstructor;
                    default: number;
                };
                component: {
                    type: (ObjectConstructor | StringConstructor)[];
                    default: string;
                };
                listAttrs: {
                    type: ObjectConstructor;
                };
                contentAttrs: {
                    type: ObjectConstructor;
                };
                paddingPosition: {
                    type: StringConstructor;
                    default: string;
                };
            }>, {
                prefixCls: string;
                containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                contentRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                frontPadding: import("vue").ComputedRef<number>;
                currentList: import("vue").ComputedRef<any[]>;
                behindPadding: import("vue").ComputedRef<number>;
                onScroll: (ev: Event) => void;
                setItemSize: (key: string | number, size: number) => void;
                hasItemSize: (key: string | number) => boolean;
                start: import("vue").Ref<number, number>;
                scrollTo: (options: import("../_components/virtual-list-v2/interface").ScrollOptions) => void;
                style: import("vue").ComputedRef<{
                    height: string;
                    overflow: string;
                }>;
                mergedComponent: import("vue").ComputedRef<{
                    container: string;
                    list: string;
                    content: string;
                }>;
                getItemKey: (item: any, index: number) => string | number;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                scroll: (ev: Event) => true;
                reachBottom: (ev: Event) => true;
            }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                height: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                data: {
                    type: import("vue").PropType<any[]>;
                    default: () => never[];
                };
                threshold: {
                    type: NumberConstructor;
                    default: number;
                };
                itemKey: {
                    type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                    default: string;
                };
                fixedSize: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                estimatedSize: {
                    type: NumberConstructor;
                    default: number;
                };
                buffer: {
                    type: NumberConstructor;
                    default: number;
                };
                component: {
                    type: (ObjectConstructor | StringConstructor)[];
                    default: string;
                };
                listAttrs: {
                    type: ObjectConstructor;
                };
                contentAttrs: {
                    type: ObjectConstructor;
                };
                paddingPosition: {
                    type: StringConstructor;
                    default: string;
                };
            }>> & Readonly<{
                onScroll?: ((ev: Event) => any) | undefined;
                onReachBottom?: ((ev: Event) => any) | undefined;
            }>, {
                component: string | Record<string, any>;
                data: any[];
                height: string | number;
                fixedSize: boolean;
                estimatedSize: number;
                buffer: number;
                threshold: number;
                itemKey: string | ((item: unknown) => string | number);
                paddingPosition: string;
            }, {}, {
                VirtualListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    hasItemSize: {
                        type: FunctionConstructor;
                        required: true;
                    };
                    setItemSize: {
                        type: FunctionConstructor;
                        required: true;
                    };
                }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    hasItemSize: {
                        type: FunctionConstructor;
                        required: true;
                    };
                    setItemSize: {
                        type: FunctionConstructor;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            TreeNode: import("vue").DefineComponent<{}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {} | {
                [x: string]: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Empty: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            description: StringConstructor;
            imageUrl: StringConstructor;
            alt: {
                type: StringConstructor;
                default: string;
            };
            icon: StringConstructor;
            imageSize: {
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
                default: string;
            };
            inConfigProvider: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            alt: string;
            imageSize: import("../empty").EmptyImageSize;
            inConfigProvider: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            description: StringConstructor;
            imageUrl: StringConstructor;
            alt: {
                type: StringConstructor;
                default: string;
            };
            icon: StringConstructor;
            imageSize: {
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
                default: string;
            };
            inConfigProvider: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            alt: string;
            imageSize: import("../empty").EmptyImageSize;
            inConfigProvider: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        description: StringConstructor;
        imageUrl: StringConstructor;
        alt: {
            type: StringConstructor;
            default: string;
        };
        icon: StringConstructor;
        imageSize: {
            type: import("vue").PropType<import("../empty").EmptyImageSize>;
            default: string;
        };
        inConfigProvider: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        alt: string;
        imageSize: import("../empty").EmptyImageSize;
        inConfigProvider: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    Spin: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: NumberConstructor;
        };
        loading: BooleanConstructor;
        dot: BooleanConstructor;
        tip: StringConstructor;
        hideIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        dot: boolean;
        loading: boolean;
        hideIcon: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export type TreeSelectInstance = InstanceType<typeof _TreeSelect>;
export declare const _TreeSelectComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
        };
        loading: {
            type: BooleanConstructor;
        };
        error: {
            type: BooleanConstructor;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowSearch: {
            type: import("vue").PropType<boolean | {
                retainInputValue?: boolean;
            }>;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        clearable: {
            type: BooleanConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        maxTagCount: {
            type: NumberConstructor;
        };
        multiple: {
            type: BooleanConstructor;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
        };
        fieldNames: {
            type: import("vue").PropType<import("..").TreeFieldNames>;
        };
        data: {
            type: import("vue").PropType<import("..").TreeNodeData[]>;
            default: () => never[];
        };
        labelInValue: {
            type: BooleanConstructor;
        };
        treeCheckable: {
            type: BooleanConstructor;
        };
        treeCheckStrictly: {
            type: BooleanConstructor;
        };
        treeCheckedStrategy: {
            type: import("vue").PropType<"all" | "parent" | "child">;
            default: string;
        };
        treeProps: {
            type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
        };
        triggerProps: {
            type: import("vue").PropType<Partial<import("..").TriggerProps>>;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
        };
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        dropdownClassName: {
            type: import("vue").PropType<string | string[]>;
        };
        filterTreeNode: {
            type: import("vue").PropType<(searchKey: string, nodeData: import("..").TreeNodeData) => boolean>;
        };
        loadMore: {
            type: import("vue").PropType<(nodeData: import("..").TreeNodeData) => Promise<void>>;
        };
        disableFilter: {
            type: BooleanConstructor;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        fallbackOption: {
            type: import("vue").PropType<boolean | ((key: number | string) => import("..").TreeNodeData | boolean)>;
            default: boolean;
        };
        selectable: {
            type: import("vue").PropType<boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
                isLeaf: boolean;
                level: number;
            }) => boolean)>;
            default: boolean;
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
        showHeaderOnEmpty: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        showFooterOnEmpty: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        inputValue: {
            type: StringConstructor;
        };
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        onSearch?: ((searchKey: string) => any) | undefined;
        onChange?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        "onOpen-change"?: ((visible: boolean) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string) => any) | undefined;
    }>, {
        refSelectView: import("vue").Ref<any, any>;
        prefixCls: string;
        TreeSelectEmpty: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | undefined;
        selectedValue: import("vue").ComputedRef<import("./types").LabelValue[]>;
        selectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        searchValue: import("vue").ComputedRef<string>;
        panelVisible: import("vue").ComputedRef<boolean>;
        isEmpty: import("vue").ComputedRef<boolean | undefined>;
        computedFilterTreeNode: import("vue").ComputedRef<((node: import("..").TreeNodeData) => boolean) | undefined>;
        isMultiple: import("vue").ComputedRef<boolean>;
        selectViewValue: import("vue").ComputedRef<import("../_components/select-view/interface").SelectViewValue[]>;
        computedDropdownStyle: import("vue").ComputedRef<import("vue").StyleValue[]>;
        onSearchValueChange: (inputValue: string) => void;
        onSelectChange(newVal: string[]): void;
        onVisibleChange: (visible: boolean) => void;
        onInnerClear(): void;
        pickSubCompSlots: typeof import("../_utils/pick-sub-comp-slots").default;
        isSelectable: (node: import("..").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean;
        isCheckable: import("vue").ComputedRef<false | ((node: import("..").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        onBlur: () => void;
        onItemRemove(id: string): void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (value: string | number | import("./types").LabelValue | Array<string | number> | import("./types").LabelValue[] | undefined) => true;
        'update:modelValue': (value: string | number | import("./types").LabelValue | Array<string | number> | import("./types").LabelValue[] | undefined) => true;
        'update:inputValue': (inputValue: string) => true;
        'open-change': (visible: boolean) => true;
        'update:open': (visible: boolean) => true;
        search: (searchKey: string) => true;
        clear: () => true;
        inputValueChange: (inputValue: string) => true;
    }, import("vue").PublicProps, {
        error: boolean;
        data: import("..").TreeNodeData[];
        disabled: boolean;
        open: boolean;
        scrollbar: boolean | import("..").ScrollbarProps;
        border: boolean;
        multiple: boolean;
        clearable: boolean;
        defaultOpen: boolean;
        loading: boolean;
        showHeaderOnEmpty: boolean;
        showFooterOnEmpty: boolean;
        defaultInputValue: string;
        fallbackOption: boolean | ((key: number | string) => import("..").TreeNodeData | boolean);
        selectable: boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean);
        treeCheckable: boolean;
        treeCheckStrictly: boolean;
        disableFilter: boolean;
        allowSearch: boolean | {
            retainInputValue?: boolean;
        };
        labelInValue: boolean;
        treeCheckedStrategy: "all" | "parent" | "child";
    }, true, {}, {}, {
        Trigger: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                trigger: {
                    type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                    default: string;
                };
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                popupTranslate: {
                    type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                };
                showArrow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                alignPoint: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupHoverStay: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                blurToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickOutsideToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contentClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                contentStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                arrowClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                arrowStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                popupStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                animationName: {
                    type: StringConstructor;
                    default: string;
                };
                duration: {
                    type: import("vue").PropType<number | {
                        enter: number;
                        leave: number;
                    }>;
                };
                mouseEnterDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                mouseLeaveDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                focusDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                autoFitPopupWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitPopupMinWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFixPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement>;
                };
                updateAtScroll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitTransformOrigin: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideEmpty: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                openedClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                autoFitPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderToBody: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                preventFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToCloseDistance: {
                    type: NumberConstructor;
                    default: number;
                };
            }>> & Readonly<{
                onResize?: (() => any) | undefined;
                onHide?: (() => any) | undefined;
                onShow?: (() => any) | undefined;
                "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                onOpenChange?: ((visible: boolean) => any) | undefined;
                onClickOutside?: ((event: Event) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:open': (visible: boolean) => true;
                openChange: (visible: boolean) => true;
                show: () => true;
                hide: () => true;
                clickOutside: (event: Event) => true;
                resize: () => true;
            }, import("vue").PublicProps, {
                updateAtScroll: boolean;
                scrollToClose: boolean;
                disabled: boolean;
                open: boolean;
                autoFitPosition: boolean;
                animationName: string;
                trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                defaultOpen: boolean;
                placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                popupOffset: number;
                showArrow: boolean;
                alignPoint: boolean;
                popupHoverStay: boolean;
                blurToClose: boolean;
                clickToClose: boolean;
                clickOutsideToClose: boolean;
                unmountOnClose: boolean;
                mouseEnterDelay: number;
                mouseLeaveDelay: number;
                focusDelay: number;
                autoFitPopupWidth: boolean;
                autoFitPopupMinWidth: boolean;
                autoFixPosition: boolean;
                autoFitTransformOrigin: boolean;
                hideEmpty: boolean;
                renderToBody: boolean;
                preventFocus: boolean;
                scrollToCloseDistance: number;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                open: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                defaultOpen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                trigger: {
                    type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                    default: string;
                };
                placement: {
                    type: import("vue").PropType<import("..").TriggerPosition>;
                    default: string;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupOffset: {
                    type: NumberConstructor;
                    default: number;
                };
                popupTranslate: {
                    type: import("vue").PropType<import("..").TriggerPopupTranslate>;
                };
                showArrow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                alignPoint: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupHoverStay: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                blurToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clickOutsideToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                unmountOnClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contentClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                contentStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                arrowClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                arrowStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                popupStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                animationName: {
                    type: StringConstructor;
                    default: string;
                };
                duration: {
                    type: import("vue").PropType<number | {
                        enter: number;
                        leave: number;
                    }>;
                };
                mouseEnterDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                mouseLeaveDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                focusDelay: {
                    type: NumberConstructor;
                    default: number;
                };
                autoFitPopupWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitPopupMinWidth: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFixPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                popupContainer: {
                    type: import("vue").PropType<string | HTMLElement>;
                };
                updateAtScroll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoFitTransformOrigin: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideEmpty: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                openedClass: {
                    type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
                };
                autoFitPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderToBody: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                preventFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToCloseDistance: {
                    type: NumberConstructor;
                    default: number;
                };
            }>> & Readonly<{
                onResize?: (() => any) | undefined;
                onHide?: (() => any) | undefined;
                onShow?: (() => any) | undefined;
                "onUpdate:open"?: ((visible: boolean) => any) | undefined;
                onOpenChange?: ((visible: boolean) => any) | undefined;
                onClickOutside?: ((event: Event) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                updateAtScroll: boolean;
                scrollToClose: boolean;
                disabled: boolean;
                open: boolean;
                autoFitPosition: boolean;
                animationName: string;
                trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
                defaultOpen: boolean;
                placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
                popupOffset: number;
                showArrow: boolean;
                alignPoint: boolean;
                popupHoverStay: boolean;
                blurToClose: boolean;
                clickToClose: boolean;
                clickOutsideToClose: boolean;
                unmountOnClose: boolean;
                mouseEnterDelay: number;
                mouseLeaveDelay: number;
                focusDelay: number;
                autoFitPopupWidth: boolean;
                autoFitPopupMinWidth: boolean;
                autoFixPosition: boolean;
                autoFitTransformOrigin: boolean;
                hideEmpty: boolean;
                renderToBody: boolean;
                preventFocus: boolean;
                scrollToCloseDistance: number;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            trigger: {
                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                default: string;
            };
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupOffset: {
                type: NumberConstructor;
                default: number;
            };
            popupTranslate: {
                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
            };
            showArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            alignPoint: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupHoverStay: {
                type: BooleanConstructor;
                default: boolean;
            };
            blurToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickOutsideToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            contentClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            contentStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            arrowClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            arrowStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            animationName: {
                type: StringConstructor;
                default: string;
            };
            duration: {
                type: import("vue").PropType<number | {
                    enter: number;
                    leave: number;
                }>;
            };
            mouseEnterDelay: {
                type: NumberConstructor;
                default: number;
            };
            mouseLeaveDelay: {
                type: NumberConstructor;
                default: number;
            };
            focusDelay: {
                type: NumberConstructor;
                default: number;
            };
            autoFitPopupWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitPopupMinWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFixPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement>;
            };
            updateAtScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitTransformOrigin: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideEmpty: {
                type: BooleanConstructor;
                default: boolean;
            };
            openedClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            autoFitPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderToBody: {
                type: BooleanConstructor;
                default: boolean;
            };
            preventFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToCloseDistance: {
                type: NumberConstructor;
                default: number;
            };
        }>> & Readonly<{
            onResize?: (() => any) | undefined;
            onHide?: (() => any) | undefined;
            onShow?: (() => any) | undefined;
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
            onClickOutside?: ((event: Event) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:open': (visible: boolean) => true;
            openChange: (visible: boolean) => true;
            show: () => true;
            hide: () => true;
            clickOutside: (event: Event) => true;
            resize: () => true;
        }, string, {
            updateAtScroll: boolean;
            scrollToClose: boolean;
            disabled: boolean;
            open: boolean;
            autoFitPosition: boolean;
            animationName: string;
            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
            defaultOpen: boolean;
            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            popupOffset: number;
            showArrow: boolean;
            alignPoint: boolean;
            popupHoverStay: boolean;
            blurToClose: boolean;
            clickToClose: boolean;
            clickOutsideToClose: boolean;
            unmountOnClose: boolean;
            mouseEnterDelay: number;
            mouseLeaveDelay: number;
            focusDelay: number;
            autoFitPopupWidth: boolean;
            autoFitPopupMinWidth: boolean;
            autoFixPosition: boolean;
            autoFitTransformOrigin: boolean;
            hideEmpty: boolean;
            renderToBody: boolean;
            preventFocus: boolean;
            scrollToCloseDistance: number;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
        SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
                required: true;
            };
            inputValue: StringConstructor;
            placeholder: StringConstructor;
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            opened: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            creatable: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterable: {
                type: BooleanConstructor;
                default: (props: import("../_utils/types").Data) => boolean;
            };
            maxTagCount: {
                type: NumberConstructor;
                default: number;
            };
            tagNowrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            retainInputValue: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, {
            inputRef: import("vue").ComputedRef<HTMLInputElement>;
            handleFocus: (ev: FocusEvent) => void;
            handleBlur: (ev: FocusEvent) => void;
            render: () => import("vue/jsx-runtime").JSX.Element;
        }, {}, {}, {
            focus(): void;
            blur(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "clear" | "blur" | "remove")[], "focus" | "clear" | "blur" | "remove", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
                required: true;
            };
            inputValue: StringConstructor;
            placeholder: StringConstructor;
            variant: {
                type: import("vue").PropType<"filled" | "outlined" | "standard">;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            error: {
                type: BooleanConstructor;
                default: boolean;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            opened: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: import("vue").PropType<import("..").ComponentSize>;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            creatable: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterable: {
                type: BooleanConstructor;
                default: (props: import("../_utils/types").Data) => boolean;
            };
            maxTagCount: {
                type: NumberConstructor;
                default: number;
            };
            tagNowrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            retainInputValue: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onFocus?: ((...args: any[]) => any) | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
            onRemove?: ((...args: any[]) => any) | undefined;
        }>, {
            error: boolean;
            disabled: boolean;
            multiple: boolean;
            variant: "filled" | "outlined" | "standard";
            clearable: boolean;
            loading: boolean;
            opened: boolean;
            retainInputValue: boolean;
            maxTagCount: number;
            tagNowrap: boolean;
            bordered: boolean;
            creatable: boolean;
            filterable: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Panel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            treeProps: {
                type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
                default: () => {};
            };
            selectedKeys: {
                type: import("vue").PropType<import("../tree/types").TreeNodeKey[]>;
            };
            showCheckable: {
                type: BooleanConstructor;
            };
            treeSlots: {
                type: import("vue").PropType<import("vue").Slots>;
                default: () => {};
            };
            scrollbar: {
                type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
                default: boolean;
            };
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            treeProps: {
                type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
                default: () => {};
            };
            selectedKeys: {
                type: import("vue").PropType<import("../tree/types").TreeNodeKey[]>;
            };
            showCheckable: {
                type: BooleanConstructor;
            };
            treeSlots: {
                type: import("vue").PropType<import("vue").Slots>;
                default: () => {};
            };
            scrollbar: {
                type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
                default: boolean;
            };
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
        }>, {
            scrollbar: boolean | import("..").ScrollbarProps;
            treeProps: Partial<import("../tree/types").TreeProps>;
            showCheckable: boolean;
            treeSlots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
        }, {}, {
            Tree: import("../_utils/global-config").CedarComponentWithInstall<{
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                        default: string;
                    };
                    blockNode: {
                        type: BooleanConstructor;
                    };
                    defaultExpandAll: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    multiple: {
                        type: BooleanConstructor;
                    };
                    checkable: {
                        type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean)>;
                        default: boolean;
                    };
                    selectable: {
                        type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean)>;
                        default: boolean;
                    };
                    checkStrictly: {
                        type: BooleanConstructor;
                    };
                    checkedStrategy: {
                        type: import("vue").PropType<"all" | "parent" | "child">;
                        default: string;
                    };
                    defaultSelectedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    selectedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    defaultCheckedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    checkedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    defaultExpandedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    expandedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    data: {
                        type: import("vue").PropType<import("..").TreeNodeData[]>;
                        default: () => never[];
                    };
                    fieldNames: {
                        type: import("vue").PropType<import("..").TreeFieldNames>;
                    };
                    showLine: {
                        type: BooleanConstructor;
                    };
                    loadMore: {
                        type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
                    };
                    draggable: {
                        type: BooleanConstructor;
                    };
                    allowDrop: {
                        type: import("vue").PropType<(options: {
                            dropNode: import("..").TreeNodeData;
                            dropPosition: -1 | 0 | 1;
                        }) => boolean>;
                    };
                    filterTreeNode: {
                        type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
                    };
                    searchValue: {
                        type: StringConstructor;
                        default: string;
                    };
                    virtualListProps: {
                        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                    };
                    defaultExpandSelected: {
                        type: BooleanConstructor;
                    };
                    defaultExpandChecked: {
                        type: BooleanConstructor;
                    };
                    autoExpandParent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    halfCheckedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    onlyCheckLeaf: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    animation: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    actionOnNodeClick: {
                        type: import("vue").PropType<"expand">;
                    };
                    disableSelectActionOnly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & Readonly<{
                    onDrop?: ((data: {
                        e: DragEvent;
                        dragNode: import("..").TreeNodeData;
                        dropNode: import("..").TreeNodeData;
                        dropPosition: number;
                    }) => any) | undefined;
                    onSelect?: ((selectedKeys: (string | number)[], data: {
                        selected?: boolean;
                        selectedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    onCheck?: ((checkedKeys: (string | number)[], data: {
                        checked?: boolean;
                        checkedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        halfCheckedKeys: (string | number)[];
                        halfCheckedNodes: import("..").TreeNodeData[];
                        e?: Event;
                    }) => any) | undefined;
                    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
                    onExpand?: ((expandKeys: (string | number)[], data: {
                        expanded?: boolean;
                        expandedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
                    onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
                    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                }>, {
                    classNames: import("vue").ComputedRef<(string | {
                        [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                    })[]>;
                    visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
                    treeContext: {
                        treeProps: {
                            readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                            readonly data: {
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                selectable?: boolean | undefined;
                                disabled?: boolean | undefined;
                                disableCheckbox?: boolean | undefined;
                                checkable?: boolean | undefined;
                                draggable?: boolean | undefined;
                                isLeaf?: boolean | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                                children?: any[] | undefined;
                            }[];
                            readonly multiple: boolean;
                            readonly animation: boolean;
                            readonly showLine: boolean;
                            readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                                level: number;
                                isLeaf: boolean;
                            }) => boolean);
                            readonly draggable: boolean;
                            readonly checkStrictly: boolean;
                            readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                                level: number;
                                isLeaf: boolean;
                            }) => boolean);
                            readonly onlyCheckLeaf: boolean;
                            readonly blockNode: boolean;
                            readonly defaultExpandAll: boolean;
                            readonly checkedStrategy: "all" | "parent" | "child";
                            readonly searchValue: string;
                            readonly defaultExpandSelected: boolean;
                            readonly defaultExpandChecked: boolean;
                            readonly autoExpandParent: boolean;
                            readonly disableSelectActionOnly: boolean;
                            readonly fieldNames: {
                                key?: string | undefined;
                                title?: string | undefined;
                                disabled?: string | undefined;
                                children?: string | undefined;
                                isLeaf?: string | undefined;
                                disableCheckbox?: string | undefined;
                                checkable?: string | undefined;
                                icon?: string | undefined;
                            } | undefined;
                            readonly virtualListProps: {
                                height?: (number | string) | undefined;
                                threshold?: number | undefined;
                                isStaticItemHeight?: boolean | undefined;
                                fixedSize?: boolean | undefined;
                                estimatedSize?: number | undefined;
                                buffer?: number | undefined;
                                data?: any[] | undefined;
                                itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                                component?: keyof HTMLElementTagNameMap | undefined;
                            } | undefined;
                            readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                            readonly selectedKeys: (string | number)[] | undefined;
                            readonly defaultSelectedKeys: (string | number)[] | undefined;
                            readonly expandedKeys: (string | number)[] | undefined;
                            readonly defaultExpandedKeys: (string | number)[] | undefined;
                            readonly checkedKeys: (string | number)[] | undefined;
                            readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                            readonly allowDrop: ((options: {
                                dropNode: import("..").TreeNodeData;
                                dropPosition: -1 | 0 | 1;
                            }) => boolean) | undefined;
                            readonly defaultCheckedKeys: (string | number)[] | undefined;
                            readonly halfCheckedKeys: (string | number)[] | undefined;
                            readonly actionOnNodeClick: "expand" | undefined;
                            readonly onDrop: ((data: {
                                e: DragEvent;
                                dragNode: import("..").TreeNodeData;
                                dropNode: import("..").TreeNodeData;
                                dropPosition: number;
                            }) => any) | undefined;
                            readonly onSelect: ((selectedKeys: (string | number)[], data: {
                                selected?: boolean;
                                selectedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                e?: Event;
                            }) => any) | undefined;
                            readonly onCheck: ((checkedKeys: (string | number)[], data: {
                                checked?: boolean;
                                checkedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                halfCheckedKeys: (string | number)[];
                                halfCheckedNodes: import("..").TreeNodeData[];
                                e?: Event;
                            }) => any) | undefined;
                            readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                            readonly onExpand: ((expandKeys: (string | number)[], data: {
                                expanded?: boolean;
                                expandedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                e?: Event;
                            }) => any) | undefined;
                            readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                            readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                            readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                        };
                        switcherIcon: import("vue").Slot<any> | undefined;
                        loadingIcon: import("vue").Slot<any> | undefined;
                        dragIcon: import("vue").Slot<any> | undefined;
                        nodeIcon: import("vue").Slot<any> | undefined;
                        nodeTitle: import("vue").Slot<any> | undefined;
                        nodeExtra: import("vue").Slot<any> | undefined;
                        treeData: {
                            key: import("../tree/types").TreeNodeKey;
                            treeNodeProps: {
                                selectable: boolean;
                                disabled: boolean;
                                disableCheckbox: boolean;
                                checkable: boolean;
                                draggable: boolean;
                                isLeaf: boolean;
                                isTail: boolean;
                                blockNode: boolean;
                                showLine: boolean;
                                level: number;
                                lineless: boolean[];
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                            };
                            treeNodeData: {
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                selectable?: boolean | undefined;
                                disabled?: boolean | undefined;
                                disableCheckbox?: boolean | undefined;
                                checkable?: boolean | undefined;
                                draggable?: boolean | undefined;
                                isLeaf?: boolean | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                                children?: any[] | undefined;
                            };
                            parent?: any | undefined;
                            parentKey?: import("../tree/types").TreeNodeKey | undefined;
                            pathParentKeys: import("../tree/types").TreeNodeKey[];
                            children?: any[] | undefined;
                            selectable: boolean;
                            disabled: boolean;
                            disableCheckbox: boolean;
                            checkable: boolean;
                            draggable: boolean;
                            isLeaf: boolean;
                            isTail: boolean;
                            blockNode: boolean;
                            showLine: boolean;
                            level: number;
                            lineless: boolean[];
                            title?: string | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                        }[];
                        flattenTreeData: import("../tree/types").Node[];
                        key2TreeNode: import("../tree/types").Key2TreeNode;
                        checkedKeys: import("../tree/types").TreeNodeKey[];
                        indeterminateKeys: import("../tree/types").TreeNodeKey[];
                        selectedKeys: import("../tree/types").TreeNodeKey[];
                        expandedKeys: import("../tree/types").TreeNodeKey[];
                        loadingKeys: import("../tree/types").TreeNodeKey[];
                        currentExpandKeys: import("../tree/types").TreeNodeKey[];
                        onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                        filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                        onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                        onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                        onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                        onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                        allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                        onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
                    };
                    virtualListRef: import("vue").Ref<any, any>;
                    computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
                    getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
                    internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                    internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                    internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                }, {}, {}, {
                    toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
                    scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
                    getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
                    getCheckedNodes(options?: {
                        checkedStrategy?: import("../tree/types").CheckedStrategy;
                        includeHalfChecked?: boolean;
                    }): (import("..").TreeNodeData | undefined)[];
                    getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
                    getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
                    checkAll(checked?: boolean): void;
                    checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
                    selectAll(selected?: boolean): void;
                    selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
                    expandAll(expanded?: boolean): void;
                    expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
                }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    select: (selectedKeys: (string | number)[], data: {
                        selected?: boolean;
                        selectedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => true;
                    'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
                    check: (checkedKeys: (string | number)[], data: {
                        checked?: boolean;
                        checkedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        halfCheckedKeys: (string | number)[];
                        halfCheckedNodes: import("..").TreeNodeData[];
                        e?: Event;
                    }) => true;
                    'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
                    'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
                    expand: (expandKeys: (string | number)[], data: {
                        expanded?: boolean;
                        expandedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => true;
                    'update:expandedKeys': (expandKeys: (string | number)[]) => true;
                    dragStart: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                    dragEnd: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                    dragOver: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                    dragLeave: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                    drop: (data: {
                        e: DragEvent;
                        dragNode: import("..").TreeNodeData;
                        dropNode: import("..").TreeNodeData;
                        dropPosition: number;
                    }) => true;
                }, import("vue").PublicProps, {
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    data: import("..").TreeNodeData[];
                    multiple: boolean;
                    animation: boolean;
                    showLine: boolean;
                    checkable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    draggable: boolean;
                    checkStrictly: boolean;
                    selectable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    onlyCheckLeaf: boolean;
                    blockNode: boolean;
                    defaultExpandAll: boolean;
                    checkedStrategy: "all" | "parent" | "child";
                    searchValue: string;
                    defaultExpandSelected: boolean;
                    defaultExpandChecked: boolean;
                    autoExpandParent: boolean;
                    disableSelectActionOnly: boolean;
                }, true, {}, {}, {
                    VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        height: {
                            type: (StringConstructor | NumberConstructor)[];
                            default: number;
                        };
                        data: {
                            type: import("vue").PropType<any[]>;
                            default: () => never[];
                        };
                        threshold: {
                            type: NumberConstructor;
                            default: number;
                        };
                        itemKey: {
                            type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                            default: string;
                        };
                        fixedSize: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        estimatedSize: {
                            type: NumberConstructor;
                            default: number;
                        };
                        buffer: {
                            type: NumberConstructor;
                            default: number;
                        };
                        component: {
                            type: (ObjectConstructor | StringConstructor)[];
                            default: string;
                        };
                        listAttrs: {
                            type: ObjectConstructor;
                        };
                        contentAttrs: {
                            type: ObjectConstructor;
                        };
                        paddingPosition: {
                            type: StringConstructor;
                            default: string;
                        };
                    }>, {
                        prefixCls: string;
                        containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                        frontPadding: import("vue").ComputedRef<number>;
                        currentList: import("vue").ComputedRef<any[]>;
                        behindPadding: import("vue").ComputedRef<number>;
                        onScroll: (ev: Event) => void;
                        setItemSize: (key: string | number, size: number) => void;
                        hasItemSize: (key: string | number) => boolean;
                        start: import("vue").Ref<number, number>;
                        scrollTo: (options: import("../_components/virtual-list-v2/interface").ScrollOptions) => void;
                        style: import("vue").ComputedRef<{
                            height: string;
                            overflow: string;
                        }>;
                        mergedComponent: import("vue").ComputedRef<{
                            container: string;
                            list: string;
                            content: string;
                        }>;
                        getItemKey: (item: any, index: number) => string | number;
                    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        scroll: (ev: Event) => true;
                        reachBottom: (ev: Event) => true;
                    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        height: {
                            type: (StringConstructor | NumberConstructor)[];
                            default: number;
                        };
                        data: {
                            type: import("vue").PropType<any[]>;
                            default: () => never[];
                        };
                        threshold: {
                            type: NumberConstructor;
                            default: number;
                        };
                        itemKey: {
                            type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                            default: string;
                        };
                        fixedSize: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        estimatedSize: {
                            type: NumberConstructor;
                            default: number;
                        };
                        buffer: {
                            type: NumberConstructor;
                            default: number;
                        };
                        component: {
                            type: (ObjectConstructor | StringConstructor)[];
                            default: string;
                        };
                        listAttrs: {
                            type: ObjectConstructor;
                        };
                        contentAttrs: {
                            type: ObjectConstructor;
                        };
                        paddingPosition: {
                            type: StringConstructor;
                            default: string;
                        };
                    }>> & Readonly<{
                        onScroll?: ((ev: Event) => any) | undefined;
                        onReachBottom?: ((ev: Event) => any) | undefined;
                    }>, {
                        component: string | Record<string, any>;
                        data: any[];
                        height: string | number;
                        fixedSize: boolean;
                        estimatedSize: number;
                        buffer: number;
                        threshold: number;
                        itemKey: string | ((item: unknown) => string | number);
                        paddingPosition: string;
                    }, {}, {
                        VirtualListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                            hasItemSize: {
                                type: FunctionConstructor;
                                required: true;
                            };
                            setItemSize: {
                                type: FunctionConstructor;
                                required: true;
                            };
                        }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                            hasItemSize: {
                                type: FunctionConstructor;
                                required: true;
                            };
                            setItemSize: {
                                type: FunctionConstructor;
                                required: true;
                            };
                        }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                    TreeNode: import("vue").DefineComponent<{}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {} | {
                        [x: string]: any;
                    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, Readonly<import("vue").ExtractPropTypes<{
                    size: {
                        type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                        default: string;
                    };
                    blockNode: {
                        type: BooleanConstructor;
                    };
                    defaultExpandAll: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    multiple: {
                        type: BooleanConstructor;
                    };
                    checkable: {
                        type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean)>;
                        default: boolean;
                    };
                    selectable: {
                        type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean)>;
                        default: boolean;
                    };
                    checkStrictly: {
                        type: BooleanConstructor;
                    };
                    checkedStrategy: {
                        type: import("vue").PropType<"all" | "parent" | "child">;
                        default: string;
                    };
                    defaultSelectedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    selectedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    defaultCheckedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    checkedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    defaultExpandedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    expandedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    data: {
                        type: import("vue").PropType<import("..").TreeNodeData[]>;
                        default: () => never[];
                    };
                    fieldNames: {
                        type: import("vue").PropType<import("..").TreeFieldNames>;
                    };
                    showLine: {
                        type: BooleanConstructor;
                    };
                    loadMore: {
                        type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
                    };
                    draggable: {
                        type: BooleanConstructor;
                    };
                    allowDrop: {
                        type: import("vue").PropType<(options: {
                            dropNode: import("..").TreeNodeData;
                            dropPosition: -1 | 0 | 1;
                        }) => boolean>;
                    };
                    filterTreeNode: {
                        type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
                    };
                    searchValue: {
                        type: StringConstructor;
                        default: string;
                    };
                    virtualListProps: {
                        type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                    };
                    defaultExpandSelected: {
                        type: BooleanConstructor;
                    };
                    defaultExpandChecked: {
                        type: BooleanConstructor;
                    };
                    autoExpandParent: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    halfCheckedKeys: {
                        type: import("vue").PropType<Array<string | number>>;
                    };
                    onlyCheckLeaf: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    animation: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    actionOnNodeClick: {
                        type: import("vue").PropType<"expand">;
                    };
                    disableSelectActionOnly: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>> & Readonly<{
                    onDrop?: ((data: {
                        e: DragEvent;
                        dragNode: import("..").TreeNodeData;
                        dropNode: import("..").TreeNodeData;
                        dropPosition: number;
                    }) => any) | undefined;
                    onSelect?: ((selectedKeys: (string | number)[], data: {
                        selected?: boolean;
                        selectedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    onCheck?: ((checkedKeys: (string | number)[], data: {
                        checked?: boolean;
                        checkedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        halfCheckedKeys: (string | number)[];
                        halfCheckedNodes: import("..").TreeNodeData[];
                        e?: Event;
                    }) => any) | undefined;
                    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
                    onExpand?: ((expandKeys: (string | number)[], data: {
                        expanded?: boolean;
                        expandedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
                    onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
                    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                }>, {
                    classNames: import("vue").ComputedRef<(string | {
                        [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                    })[]>;
                    visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
                    treeContext: {
                        treeProps: {
                            readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                            readonly data: {
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                selectable?: boolean | undefined;
                                disabled?: boolean | undefined;
                                disableCheckbox?: boolean | undefined;
                                checkable?: boolean | undefined;
                                draggable?: boolean | undefined;
                                isLeaf?: boolean | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                                children?: any[] | undefined;
                            }[];
                            readonly multiple: boolean;
                            readonly animation: boolean;
                            readonly showLine: boolean;
                            readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                                level: number;
                                isLeaf: boolean;
                            }) => boolean);
                            readonly draggable: boolean;
                            readonly checkStrictly: boolean;
                            readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                                level: number;
                                isLeaf: boolean;
                            }) => boolean);
                            readonly onlyCheckLeaf: boolean;
                            readonly blockNode: boolean;
                            readonly defaultExpandAll: boolean;
                            readonly checkedStrategy: "all" | "parent" | "child";
                            readonly searchValue: string;
                            readonly defaultExpandSelected: boolean;
                            readonly defaultExpandChecked: boolean;
                            readonly autoExpandParent: boolean;
                            readonly disableSelectActionOnly: boolean;
                            readonly fieldNames: {
                                key?: string | undefined;
                                title?: string | undefined;
                                disabled?: string | undefined;
                                children?: string | undefined;
                                isLeaf?: string | undefined;
                                disableCheckbox?: string | undefined;
                                checkable?: string | undefined;
                                icon?: string | undefined;
                            } | undefined;
                            readonly virtualListProps: {
                                height?: (number | string) | undefined;
                                threshold?: number | undefined;
                                isStaticItemHeight?: boolean | undefined;
                                fixedSize?: boolean | undefined;
                                estimatedSize?: number | undefined;
                                buffer?: number | undefined;
                                data?: any[] | undefined;
                                itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                                component?: keyof HTMLElementTagNameMap | undefined;
                            } | undefined;
                            readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                            readonly selectedKeys: (string | number)[] | undefined;
                            readonly defaultSelectedKeys: (string | number)[] | undefined;
                            readonly expandedKeys: (string | number)[] | undefined;
                            readonly defaultExpandedKeys: (string | number)[] | undefined;
                            readonly checkedKeys: (string | number)[] | undefined;
                            readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                            readonly allowDrop: ((options: {
                                dropNode: import("..").TreeNodeData;
                                dropPosition: -1 | 0 | 1;
                            }) => boolean) | undefined;
                            readonly defaultCheckedKeys: (string | number)[] | undefined;
                            readonly halfCheckedKeys: (string | number)[] | undefined;
                            readonly actionOnNodeClick: "expand" | undefined;
                            readonly onDrop: ((data: {
                                e: DragEvent;
                                dragNode: import("..").TreeNodeData;
                                dropNode: import("..").TreeNodeData;
                                dropPosition: number;
                            }) => any) | undefined;
                            readonly onSelect: ((selectedKeys: (string | number)[], data: {
                                selected?: boolean;
                                selectedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                e?: Event;
                            }) => any) | undefined;
                            readonly onCheck: ((checkedKeys: (string | number)[], data: {
                                checked?: boolean;
                                checkedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                halfCheckedKeys: (string | number)[];
                                halfCheckedNodes: import("..").TreeNodeData[];
                                e?: Event;
                            }) => any) | undefined;
                            readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                            readonly onExpand: ((expandKeys: (string | number)[], data: {
                                expanded?: boolean;
                                expandedNodes: import("..").TreeNodeData[];
                                node?: import("..").TreeNodeData;
                                e?: Event;
                            }) => any) | undefined;
                            readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                            readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                            readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                            readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                        };
                        switcherIcon: import("vue").Slot<any> | undefined;
                        loadingIcon: import("vue").Slot<any> | undefined;
                        dragIcon: import("vue").Slot<any> | undefined;
                        nodeIcon: import("vue").Slot<any> | undefined;
                        nodeTitle: import("vue").Slot<any> | undefined;
                        nodeExtra: import("vue").Slot<any> | undefined;
                        treeData: {
                            key: import("../tree/types").TreeNodeKey;
                            treeNodeProps: {
                                selectable: boolean;
                                disabled: boolean;
                                disableCheckbox: boolean;
                                checkable: boolean;
                                draggable: boolean;
                                isLeaf: boolean;
                                isTail: boolean;
                                blockNode: boolean;
                                showLine: boolean;
                                level: number;
                                lineless: boolean[];
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                            };
                            treeNodeData: {
                                key?: (string | number) | undefined;
                                title?: string | undefined;
                                selectable?: boolean | undefined;
                                disabled?: boolean | undefined;
                                disableCheckbox?: boolean | undefined;
                                checkable?: boolean | undefined;
                                draggable?: boolean | undefined;
                                isLeaf?: boolean | undefined;
                                icon?: (() => import("vue").VNode) | undefined;
                                switcherIcon?: (() => import("vue").VNode) | undefined;
                                loadingIcon?: (() => import("vue").VNode) | undefined;
                                dragIcon?: (() => import("vue").VNode) | undefined;
                                children?: any[] | undefined;
                            };
                            parent?: any | undefined;
                            parentKey?: import("../tree/types").TreeNodeKey | undefined;
                            pathParentKeys: import("../tree/types").TreeNodeKey[];
                            children?: any[] | undefined;
                            selectable: boolean;
                            disabled: boolean;
                            disableCheckbox: boolean;
                            checkable: boolean;
                            draggable: boolean;
                            isLeaf: boolean;
                            isTail: boolean;
                            blockNode: boolean;
                            showLine: boolean;
                            level: number;
                            lineless: boolean[];
                            title?: string | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                        }[];
                        flattenTreeData: import("../tree/types").Node[];
                        key2TreeNode: import("../tree/types").Key2TreeNode;
                        checkedKeys: import("../tree/types").TreeNodeKey[];
                        indeterminateKeys: import("../tree/types").TreeNodeKey[];
                        selectedKeys: import("../tree/types").TreeNodeKey[];
                        expandedKeys: import("../tree/types").TreeNodeKey[];
                        loadingKeys: import("../tree/types").TreeNodeKey[];
                        currentExpandKeys: import("../tree/types").TreeNodeKey[];
                        onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                        filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                        onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                        onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                        onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                        onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                        allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                        onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                        onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
                    };
                    virtualListRef: import("vue").Ref<any, any>;
                    computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                    getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
                    getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
                    internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                    internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                    internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                    internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                }, {}, {}, {
                    toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
                    scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
                    getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
                    getCheckedNodes(options?: {
                        checkedStrategy?: import("../tree/types").CheckedStrategy;
                        includeHalfChecked?: boolean;
                    }): (import("..").TreeNodeData | undefined)[];
                    getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
                    getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
                    checkAll(checked?: boolean): void;
                    checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
                    selectAll(selected?: boolean): void;
                    selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
                    expandAll(expanded?: boolean): void;
                    expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
                }, {
                    size: "xs" | "sm" | "md" | "lg" | "xl";
                    data: import("..").TreeNodeData[];
                    multiple: boolean;
                    animation: boolean;
                    showLine: boolean;
                    checkable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    draggable: boolean;
                    checkStrictly: boolean;
                    selectable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    onlyCheckLeaf: boolean;
                    blockNode: boolean;
                    defaultExpandAll: boolean;
                    checkedStrategy: "all" | "parent" | "child";
                    searchValue: string;
                    defaultExpandSelected: boolean;
                    defaultExpandChecked: boolean;
                    autoExpandParent: boolean;
                    disableSelectActionOnly: boolean;
                }>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                    default: string;
                };
                blockNode: {
                    type: BooleanConstructor;
                };
                defaultExpandAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                multiple: {
                    type: BooleanConstructor;
                };
                checkable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                selectable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                checkStrictly: {
                    type: BooleanConstructor;
                };
                checkedStrategy: {
                    type: import("vue").PropType<"all" | "parent" | "child">;
                    default: string;
                };
                defaultSelectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                selectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                checkedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultExpandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                expandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                data: {
                    type: import("vue").PropType<import("..").TreeNodeData[]>;
                    default: () => never[];
                };
                fieldNames: {
                    type: import("vue").PropType<import("..").TreeFieldNames>;
                };
                showLine: {
                    type: BooleanConstructor;
                };
                loadMore: {
                    type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
                };
                draggable: {
                    type: BooleanConstructor;
                };
                allowDrop: {
                    type: import("vue").PropType<(options: {
                        dropNode: import("..").TreeNodeData;
                        dropPosition: -1 | 0 | 1;
                    }) => boolean>;
                };
                filterTreeNode: {
                    type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
                };
                searchValue: {
                    type: StringConstructor;
                    default: string;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                defaultExpandSelected: {
                    type: BooleanConstructor;
                };
                defaultExpandChecked: {
                    type: BooleanConstructor;
                };
                autoExpandParent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                halfCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                onlyCheckLeaf: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                animation: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                actionOnNodeClick: {
                    type: import("vue").PropType<"expand">;
                };
                disableSelectActionOnly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onDrop?: ((data: {
                    e: DragEvent;
                    dragNode: import("..").TreeNodeData;
                    dropNode: import("..").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                onSelect?: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                onCheck?: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("..").TreeNodeData[];
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
                onExpand?: ((expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
                onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
                "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
            }>, {
                classNames: import("vue").ComputedRef<(string | {
                    [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                })[]>;
                visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
                treeContext: {
                    treeProps: {
                        readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                        readonly data: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        }[];
                        readonly multiple: boolean;
                        readonly animation: boolean;
                        readonly showLine: boolean;
                        readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly draggable: boolean;
                        readonly checkStrictly: boolean;
                        readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly onlyCheckLeaf: boolean;
                        readonly blockNode: boolean;
                        readonly defaultExpandAll: boolean;
                        readonly checkedStrategy: "all" | "parent" | "child";
                        readonly searchValue: string;
                        readonly defaultExpandSelected: boolean;
                        readonly defaultExpandChecked: boolean;
                        readonly autoExpandParent: boolean;
                        readonly disableSelectActionOnly: boolean;
                        readonly fieldNames: {
                            key?: string | undefined;
                            title?: string | undefined;
                            disabled?: string | undefined;
                            children?: string | undefined;
                            isLeaf?: string | undefined;
                            disableCheckbox?: string | undefined;
                            checkable?: string | undefined;
                            icon?: string | undefined;
                        } | undefined;
                        readonly virtualListProps: {
                            height?: (number | string) | undefined;
                            threshold?: number | undefined;
                            isStaticItemHeight?: boolean | undefined;
                            fixedSize?: boolean | undefined;
                            estimatedSize?: number | undefined;
                            buffer?: number | undefined;
                            data?: any[] | undefined;
                            itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                            component?: keyof HTMLElementTagNameMap | undefined;
                        } | undefined;
                        readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                        readonly selectedKeys: (string | number)[] | undefined;
                        readonly defaultSelectedKeys: (string | number)[] | undefined;
                        readonly expandedKeys: (string | number)[] | undefined;
                        readonly defaultExpandedKeys: (string | number)[] | undefined;
                        readonly checkedKeys: (string | number)[] | undefined;
                        readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                        readonly allowDrop: ((options: {
                            dropNode: import("..").TreeNodeData;
                            dropPosition: -1 | 0 | 1;
                        }) => boolean) | undefined;
                        readonly defaultCheckedKeys: (string | number)[] | undefined;
                        readonly halfCheckedKeys: (string | number)[] | undefined;
                        readonly actionOnNodeClick: "expand" | undefined;
                        readonly onDrop: ((data: {
                            e: DragEvent;
                            dragNode: import("..").TreeNodeData;
                            dropNode: import("..").TreeNodeData;
                            dropPosition: number;
                        }) => any) | undefined;
                        readonly onSelect: ((selectedKeys: (string | number)[], data: {
                            selected?: boolean;
                            selectedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly onCheck: ((checkedKeys: (string | number)[], data: {
                            checked?: boolean;
                            checkedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            halfCheckedKeys: (string | number)[];
                            halfCheckedNodes: import("..").TreeNodeData[];
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                        readonly onExpand: ((expandKeys: (string | number)[], data: {
                            expanded?: boolean;
                            expandedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                        readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                        readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                    };
                    switcherIcon: import("vue").Slot<any> | undefined;
                    loadingIcon: import("vue").Slot<any> | undefined;
                    dragIcon: import("vue").Slot<any> | undefined;
                    nodeIcon: import("vue").Slot<any> | undefined;
                    nodeTitle: import("vue").Slot<any> | undefined;
                    nodeExtra: import("vue").Slot<any> | undefined;
                    treeData: {
                        key: import("../tree/types").TreeNodeKey;
                        treeNodeProps: {
                            selectable: boolean;
                            disabled: boolean;
                            disableCheckbox: boolean;
                            checkable: boolean;
                            draggable: boolean;
                            isLeaf: boolean;
                            isTail: boolean;
                            blockNode: boolean;
                            showLine: boolean;
                            level: number;
                            lineless: boolean[];
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                        };
                        treeNodeData: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        };
                        parent?: any | undefined;
                        parentKey?: import("../tree/types").TreeNodeKey | undefined;
                        pathParentKeys: import("../tree/types").TreeNodeKey[];
                        children?: any[] | undefined;
                        selectable: boolean;
                        disabled: boolean;
                        disableCheckbox: boolean;
                        checkable: boolean;
                        draggable: boolean;
                        isLeaf: boolean;
                        isTail: boolean;
                        blockNode: boolean;
                        showLine: boolean;
                        level: number;
                        lineless: boolean[];
                        title?: string | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                    }[];
                    flattenTreeData: import("../tree/types").Node[];
                    key2TreeNode: import("../tree/types").Key2TreeNode;
                    checkedKeys: import("../tree/types").TreeNodeKey[];
                    indeterminateKeys: import("../tree/types").TreeNodeKey[];
                    selectedKeys: import("../tree/types").TreeNodeKey[];
                    expandedKeys: import("../tree/types").TreeNodeKey[];
                    loadingKeys: import("../tree/types").TreeNodeKey[];
                    currentExpandKeys: import("../tree/types").TreeNodeKey[];
                    onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                    filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                    onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                    onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                    allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                    onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
                };
                virtualListRef: import("vue").Ref<any, any>;
                computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
                getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
                internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
            }, {}, {}, {
                toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
                scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
                getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
                getCheckedNodes(options?: {
                    checkedStrategy?: import("../tree/types").CheckedStrategy;
                    includeHalfChecked?: boolean;
                }): (import("..").TreeNodeData | undefined)[];
                getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
                getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
                checkAll(checked?: boolean): void;
                checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
                selectAll(selected?: boolean): void;
                selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
                expandAll(expanded?: boolean): void;
                expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                select: (selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => true;
                'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
                check: (checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("..").TreeNodeData[];
                    e?: Event;
                }) => true;
                'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
                'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
                expand: (expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => true;
                'update:expandedKeys': (expandKeys: (string | number)[]) => true;
                dragStart: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragEnd: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragOver: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragLeave: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                drop: (data: {
                    e: DragEvent;
                    dragNode: import("..").TreeNodeData;
                    dropNode: import("..").TreeNodeData;
                    dropPosition: number;
                }) => true;
            }, string, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                data: import("..").TreeNodeData[];
                multiple: boolean;
                animation: boolean;
                showLine: boolean;
                checkable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                draggable: boolean;
                checkStrictly: boolean;
                selectable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                onlyCheckLeaf: boolean;
                blockNode: boolean;
                defaultExpandAll: boolean;
                checkedStrategy: "all" | "parent" | "child";
                searchValue: string;
                defaultExpandSelected: boolean;
                defaultExpandChecked: boolean;
                autoExpandParent: boolean;
                disableSelectActionOnly: boolean;
            }, {}, string, {}, {
                VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    height: {
                        type: (StringConstructor | NumberConstructor)[];
                        default: number;
                    };
                    data: {
                        type: import("vue").PropType<any[]>;
                        default: () => never[];
                    };
                    threshold: {
                        type: NumberConstructor;
                        default: number;
                    };
                    itemKey: {
                        type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                        default: string;
                    };
                    fixedSize: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    estimatedSize: {
                        type: NumberConstructor;
                        default: number;
                    };
                    buffer: {
                        type: NumberConstructor;
                        default: number;
                    };
                    component: {
                        type: (ObjectConstructor | StringConstructor)[];
                        default: string;
                    };
                    listAttrs: {
                        type: ObjectConstructor;
                    };
                    contentAttrs: {
                        type: ObjectConstructor;
                    };
                    paddingPosition: {
                        type: StringConstructor;
                        default: string;
                    };
                }>, {
                    prefixCls: string;
                    containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    frontPadding: import("vue").ComputedRef<number>;
                    currentList: import("vue").ComputedRef<any[]>;
                    behindPadding: import("vue").ComputedRef<number>;
                    onScroll: (ev: Event) => void;
                    setItemSize: (key: string | number, size: number) => void;
                    hasItemSize: (key: string | number) => boolean;
                    start: import("vue").Ref<number, number>;
                    scrollTo: (options: import("../_components/virtual-list-v2/interface").ScrollOptions) => void;
                    style: import("vue").ComputedRef<{
                        height: string;
                        overflow: string;
                    }>;
                    mergedComponent: import("vue").ComputedRef<{
                        container: string;
                        list: string;
                        content: string;
                    }>;
                    getItemKey: (item: any, index: number) => string | number;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    scroll: (ev: Event) => true;
                    reachBottom: (ev: Event) => true;
                }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    height: {
                        type: (StringConstructor | NumberConstructor)[];
                        default: number;
                    };
                    data: {
                        type: import("vue").PropType<any[]>;
                        default: () => never[];
                    };
                    threshold: {
                        type: NumberConstructor;
                        default: number;
                    };
                    itemKey: {
                        type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                        default: string;
                    };
                    fixedSize: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    estimatedSize: {
                        type: NumberConstructor;
                        default: number;
                    };
                    buffer: {
                        type: NumberConstructor;
                        default: number;
                    };
                    component: {
                        type: (ObjectConstructor | StringConstructor)[];
                        default: string;
                    };
                    listAttrs: {
                        type: ObjectConstructor;
                    };
                    contentAttrs: {
                        type: ObjectConstructor;
                    };
                    paddingPosition: {
                        type: StringConstructor;
                        default: string;
                    };
                }>> & Readonly<{
                    onScroll?: ((ev: Event) => any) | undefined;
                    onReachBottom?: ((ev: Event) => any) | undefined;
                }>, {
                    component: string | Record<string, any>;
                    data: any[];
                    height: string | number;
                    fixedSize: boolean;
                    estimatedSize: number;
                    buffer: number;
                    threshold: number;
                    itemKey: string | ((item: unknown) => string | number);
                    paddingPosition: string;
                }, {}, {
                    VirtualListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        hasItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                        setItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        hasItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                        setItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                TreeNode: import("vue").DefineComponent<{}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {} | {
                    [x: string]: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Empty: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                description: StringConstructor;
                imageUrl: StringConstructor;
                alt: {
                    type: StringConstructor;
                    default: string;
                };
                icon: StringConstructor;
                imageSize: {
                    type: import("vue").PropType<import("../empty").EmptyImageSize>;
                    default: string;
                };
                inConfigProvider: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                alt: string;
                imageSize: import("../empty").EmptyImageSize;
                inConfigProvider: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                description: StringConstructor;
                imageUrl: StringConstructor;
                alt: {
                    type: StringConstructor;
                    default: string;
                };
                icon: StringConstructor;
                imageSize: {
                    type: import("vue").PropType<import("../empty").EmptyImageSize>;
                    default: string;
                };
                inConfigProvider: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                alt: string;
                imageSize: import("../empty").EmptyImageSize;
                inConfigProvider: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            description: StringConstructor;
            imageUrl: StringConstructor;
            alt: {
                type: StringConstructor;
                default: string;
            };
            icon: StringConstructor;
            imageSize: {
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
                default: string;
            };
            inConfigProvider: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            alt: string;
            imageSize: import("../empty").EmptyImageSize;
            inConfigProvider: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
        Spin: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: NumberConstructor;
                };
                loading: BooleanConstructor;
                dot: BooleanConstructor;
                tip: StringConstructor;
                hideIcon: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
                dot: boolean;
                loading: boolean;
                hideIcon: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: NumberConstructor;
                };
                loading: BooleanConstructor;
                dot: BooleanConstructor;
                tip: StringConstructor;
                hideIcon: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
                dot: boolean;
                loading: boolean;
                hideIcon: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: BooleanConstructor;
        };
        loading: {
            type: BooleanConstructor;
        };
        error: {
            type: BooleanConstructor;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowSearch: {
            type: import("vue").PropType<boolean | {
                retainInputValue?: boolean;
            }>;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        clearable: {
            type: BooleanConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        maxTagCount: {
            type: NumberConstructor;
        };
        multiple: {
            type: BooleanConstructor;
        };
        defaultValue: {
            type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
        };
        modelValue: {
            type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
        };
        fieldNames: {
            type: import("vue").PropType<import("..").TreeFieldNames>;
        };
        data: {
            type: import("vue").PropType<import("..").TreeNodeData[]>;
            default: () => never[];
        };
        labelInValue: {
            type: BooleanConstructor;
        };
        treeCheckable: {
            type: BooleanConstructor;
        };
        treeCheckStrictly: {
            type: BooleanConstructor;
        };
        treeCheckedStrategy: {
            type: import("vue").PropType<"all" | "parent" | "child">;
            default: string;
        };
        treeProps: {
            type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
        };
        triggerProps: {
            type: import("vue").PropType<Partial<import("..").TriggerProps>>;
        };
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
        };
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        dropdownClassName: {
            type: import("vue").PropType<string | string[]>;
        };
        filterTreeNode: {
            type: import("vue").PropType<(searchKey: string, nodeData: import("..").TreeNodeData) => boolean>;
        };
        loadMore: {
            type: import("vue").PropType<(nodeData: import("..").TreeNodeData) => Promise<void>>;
        };
        disableFilter: {
            type: BooleanConstructor;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        fallbackOption: {
            type: import("vue").PropType<boolean | ((key: number | string) => import("..").TreeNodeData | boolean)>;
            default: boolean;
        };
        selectable: {
            type: import("vue").PropType<boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
                isLeaf: boolean;
                level: number;
            }) => boolean)>;
            default: boolean;
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
        showHeaderOnEmpty: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        showFooterOnEmpty: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        inputValue: {
            type: StringConstructor;
        };
        defaultInputValue: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onClear?: (() => any) | undefined;
        onSearch?: ((searchKey: string) => any) | undefined;
        onChange?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        "onOpen-change"?: ((visible: boolean) => any) | undefined;
        "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
        onInputValueChange?: ((inputValue: string) => any) | undefined;
    }>, {
        refSelectView: import("vue").Ref<any, any>;
        prefixCls: string;
        TreeSelectEmpty: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | undefined;
        selectedValue: import("vue").ComputedRef<import("./types").LabelValue[]>;
        selectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
        mergedDisabled: import("vue").ComputedRef<boolean>;
        searchValue: import("vue").ComputedRef<string>;
        panelVisible: import("vue").ComputedRef<boolean>;
        isEmpty: import("vue").ComputedRef<boolean | undefined>;
        computedFilterTreeNode: import("vue").ComputedRef<((node: import("..").TreeNodeData) => boolean) | undefined>;
        isMultiple: import("vue").ComputedRef<boolean>;
        selectViewValue: import("vue").ComputedRef<import("../_components/select-view/interface").SelectViewValue[]>;
        computedDropdownStyle: import("vue").ComputedRef<import("vue").StyleValue[]>;
        onSearchValueChange: (inputValue: string) => void;
        onSelectChange(newVal: string[]): void;
        onVisibleChange: (visible: boolean) => void;
        onInnerClear(): void;
        pickSubCompSlots: typeof import("../_utils/pick-sub-comp-slots").default;
        isSelectable: (node: import("..").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean;
        isCheckable: import("vue").ComputedRef<false | ((node: import("..").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        onBlur: () => void;
        onItemRemove(id: string): void;
    }, {}, {}, {}, {
        error: boolean;
        data: import("..").TreeNodeData[];
        disabled: boolean;
        open: boolean;
        scrollbar: boolean | import("..").ScrollbarProps;
        border: boolean;
        multiple: boolean;
        clearable: boolean;
        defaultOpen: boolean;
        loading: boolean;
        showHeaderOnEmpty: boolean;
        showFooterOnEmpty: boolean;
        defaultInputValue: string;
        fallbackOption: boolean | ((key: number | string) => import("..").TreeNodeData | boolean);
        selectable: boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean);
        treeCheckable: boolean;
        treeCheckStrictly: boolean;
        disableFilter: boolean;
        allowSearch: boolean | {
            retainInputValue?: boolean;
        };
        labelInValue: boolean;
        treeCheckedStrategy: "all" | "parent" | "child";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
    };
    loading: {
        type: BooleanConstructor;
    };
    error: {
        type: BooleanConstructor;
    };
    size: {
        type: import("vue").PropType<import("..").ComponentSize>;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowSearch: {
        type: import("vue").PropType<boolean | {
            retainInputValue?: boolean;
        }>;
        default: (props: import("../_utils/types").Data) => boolean;
    };
    clearable: {
        type: BooleanConstructor;
    };
    placeholder: {
        type: StringConstructor;
    };
    maxTagCount: {
        type: NumberConstructor;
    };
    multiple: {
        type: BooleanConstructor;
    };
    defaultValue: {
        type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
    };
    modelValue: {
        type: import("vue").PropType<string | number | Array<string | number> | import("./types").LabelValue | import("./types").LabelValue[]>;
    };
    fieldNames: {
        type: import("vue").PropType<import("..").TreeFieldNames>;
    };
    data: {
        type: import("vue").PropType<import("..").TreeNodeData[]>;
        default: () => never[];
    };
    labelInValue: {
        type: BooleanConstructor;
    };
    treeCheckable: {
        type: BooleanConstructor;
    };
    treeCheckStrictly: {
        type: BooleanConstructor;
    };
    treeCheckedStrategy: {
        type: import("vue").PropType<"all" | "parent" | "child">;
        default: string;
    };
    treeProps: {
        type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
    };
    triggerProps: {
        type: import("vue").PropType<Partial<import("..").TriggerProps>>;
    };
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
    };
    dropdownStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    dropdownClassName: {
        type: import("vue").PropType<string | string[]>;
    };
    filterTreeNode: {
        type: import("vue").PropType<(searchKey: string, nodeData: import("..").TreeNodeData) => boolean>;
    };
    loadMore: {
        type: import("vue").PropType<(nodeData: import("..").TreeNodeData) => Promise<void>>;
    };
    disableFilter: {
        type: BooleanConstructor;
    };
    popupContainer: {
        type: import("vue").PropType<string | HTMLElement>;
    };
    fallbackOption: {
        type: import("vue").PropType<boolean | ((key: number | string) => import("..").TreeNodeData | boolean)>;
        default: boolean;
    };
    selectable: {
        type: import("vue").PropType<boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
            isLeaf: boolean;
            level: number;
        }) => boolean)>;
        default: boolean;
    };
    scrollbar: {
        type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
        default: boolean;
    };
    showHeaderOnEmpty: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showFooterOnEmpty: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    inputValue: {
        type: StringConstructor;
    };
    defaultInputValue: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onClear?: (() => any) | undefined;
    onSearch?: ((searchKey: string) => any) | undefined;
    onChange?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | (string | number)[] | import("./types").LabelValue | import("./types").LabelValue[] | undefined) => any) | undefined;
    "onUpdate:open"?: ((visible: boolean) => any) | undefined;
    "onOpen-change"?: ((visible: boolean) => any) | undefined;
    "onUpdate:inputValue"?: ((inputValue: string) => any) | undefined;
    onInputValueChange?: ((inputValue: string) => any) | undefined;
}>, {
    refSelectView: import("vue").Ref<any, any>;
    prefixCls: string;
    TreeSelectEmpty: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    selectedValue: import("vue").ComputedRef<import("./types").LabelValue[]>;
    selectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    searchValue: import("vue").ComputedRef<string>;
    panelVisible: import("vue").ComputedRef<boolean>;
    isEmpty: import("vue").ComputedRef<boolean | undefined>;
    computedFilterTreeNode: import("vue").ComputedRef<((node: import("..").TreeNodeData) => boolean) | undefined>;
    isMultiple: import("vue").ComputedRef<boolean>;
    selectViewValue: import("vue").ComputedRef<import("../_components/select-view/interface").SelectViewValue[]>;
    computedDropdownStyle: import("vue").ComputedRef<import("vue").StyleValue[]>;
    onSearchValueChange: (inputValue: string) => void;
    onSelectChange(newVal: string[]): void;
    onVisibleChange: (visible: boolean) => void;
    onInnerClear(): void;
    pickSubCompSlots: typeof import("../_utils/pick-sub-comp-slots").default;
    isSelectable: (node: import("..").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean;
    isCheckable: import("vue").ComputedRef<false | ((node: import("..").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean)>;
    onBlur: () => void;
    onItemRemove(id: string): void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: string | number | import("./types").LabelValue | Array<string | number> | import("./types").LabelValue[] | undefined) => true;
    'update:modelValue': (value: string | number | import("./types").LabelValue | Array<string | number> | import("./types").LabelValue[] | undefined) => true;
    'update:inputValue': (inputValue: string) => true;
    'open-change': (visible: boolean) => true;
    'update:open': (visible: boolean) => true;
    search: (searchKey: string) => true;
    clear: () => true;
    inputValueChange: (inputValue: string) => true;
}, string, {
    error: boolean;
    data: import("..").TreeNodeData[];
    disabled: boolean;
    open: boolean;
    scrollbar: boolean | import("..").ScrollbarProps;
    border: boolean;
    multiple: boolean;
    clearable: boolean;
    defaultOpen: boolean;
    loading: boolean;
    showHeaderOnEmpty: boolean;
    showFooterOnEmpty: boolean;
    defaultInputValue: string;
    fallbackOption: boolean | ((key: number | string) => import("..").TreeNodeData | boolean);
    selectable: boolean | "leaf" | ((node: import("..").TreeNodeData, info: {
        isLeaf: boolean;
        level: number;
    }) => boolean);
    treeCheckable: boolean;
    treeCheckStrictly: boolean;
    disableFilter: boolean;
    allowSearch: boolean | {
        retainInputValue?: boolean;
    };
    labelInValue: boolean;
    treeCheckedStrategy: "all" | "parent" | "child";
}, {}, string, {}, {
    Trigger: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            trigger: {
                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                default: string;
            };
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupOffset: {
                type: NumberConstructor;
                default: number;
            };
            popupTranslate: {
                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
            };
            showArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            alignPoint: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupHoverStay: {
                type: BooleanConstructor;
                default: boolean;
            };
            blurToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickOutsideToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            contentClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            contentStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            arrowClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            arrowStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            animationName: {
                type: StringConstructor;
                default: string;
            };
            duration: {
                type: import("vue").PropType<number | {
                    enter: number;
                    leave: number;
                }>;
            };
            mouseEnterDelay: {
                type: NumberConstructor;
                default: number;
            };
            mouseLeaveDelay: {
                type: NumberConstructor;
                default: number;
            };
            focusDelay: {
                type: NumberConstructor;
                default: number;
            };
            autoFitPopupWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitPopupMinWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFixPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement>;
            };
            updateAtScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitTransformOrigin: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideEmpty: {
                type: BooleanConstructor;
                default: boolean;
            };
            openedClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            autoFitPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderToBody: {
                type: BooleanConstructor;
                default: boolean;
            };
            preventFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToCloseDistance: {
                type: NumberConstructor;
                default: number;
            };
        }>> & Readonly<{
            onResize?: (() => any) | undefined;
            onHide?: (() => any) | undefined;
            onShow?: (() => any) | undefined;
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
            onClickOutside?: ((event: Event) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:open': (visible: boolean) => true;
            openChange: (visible: boolean) => true;
            show: () => true;
            hide: () => true;
            clickOutside: (event: Event) => true;
            resize: () => true;
        }, import("vue").PublicProps, {
            updateAtScroll: boolean;
            scrollToClose: boolean;
            disabled: boolean;
            open: boolean;
            autoFitPosition: boolean;
            animationName: string;
            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
            defaultOpen: boolean;
            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            popupOffset: number;
            showArrow: boolean;
            alignPoint: boolean;
            popupHoverStay: boolean;
            blurToClose: boolean;
            clickToClose: boolean;
            clickOutsideToClose: boolean;
            unmountOnClose: boolean;
            mouseEnterDelay: number;
            mouseLeaveDelay: number;
            focusDelay: number;
            autoFitPopupWidth: boolean;
            autoFitPopupMinWidth: boolean;
            autoFixPosition: boolean;
            autoFitTransformOrigin: boolean;
            hideEmpty: boolean;
            renderToBody: boolean;
            preventFocus: boolean;
            scrollToCloseDistance: number;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            open: {
                type: BooleanConstructor;
                default: undefined;
            };
            defaultOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            trigger: {
                type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
                default: string;
            };
            placement: {
                type: import("vue").PropType<import("..").TriggerPosition>;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupOffset: {
                type: NumberConstructor;
                default: number;
            };
            popupTranslate: {
                type: import("vue").PropType<import("..").TriggerPopupTranslate>;
            };
            showArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            alignPoint: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupHoverStay: {
                type: BooleanConstructor;
                default: boolean;
            };
            blurToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            clickOutsideToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmountOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            contentClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            contentStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            arrowClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            arrowStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            animationName: {
                type: StringConstructor;
                default: string;
            };
            duration: {
                type: import("vue").PropType<number | {
                    enter: number;
                    leave: number;
                }>;
            };
            mouseEnterDelay: {
                type: NumberConstructor;
                default: number;
            };
            mouseLeaveDelay: {
                type: NumberConstructor;
                default: number;
            };
            focusDelay: {
                type: NumberConstructor;
                default: number;
            };
            autoFitPopupWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitPopupMinWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFixPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            popupContainer: {
                type: import("vue").PropType<string | HTMLElement>;
            };
            updateAtScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFitTransformOrigin: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideEmpty: {
                type: BooleanConstructor;
                default: boolean;
            };
            openedClass: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
            autoFitPosition: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderToBody: {
                type: BooleanConstructor;
                default: boolean;
            };
            preventFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToClose: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToCloseDistance: {
                type: NumberConstructor;
                default: number;
            };
        }>> & Readonly<{
            onResize?: (() => any) | undefined;
            onHide?: (() => any) | undefined;
            onShow?: (() => any) | undefined;
            "onUpdate:open"?: ((visible: boolean) => any) | undefined;
            onOpenChange?: ((visible: boolean) => any) | undefined;
            onClickOutside?: ((event: Event) => any) | undefined;
        }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            updateAtScroll: boolean;
            scrollToClose: boolean;
            disabled: boolean;
            open: boolean;
            autoFitPosition: boolean;
            animationName: string;
            trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
            defaultOpen: boolean;
            placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
            popupOffset: number;
            showArrow: boolean;
            alignPoint: boolean;
            popupHoverStay: boolean;
            blurToClose: boolean;
            clickToClose: boolean;
            clickOutsideToClose: boolean;
            unmountOnClose: boolean;
            mouseEnterDelay: number;
            mouseLeaveDelay: number;
            focusDelay: number;
            autoFitPopupWidth: boolean;
            autoFitPopupMinWidth: boolean;
            autoFixPosition: boolean;
            autoFitTransformOrigin: boolean;
            hideEmpty: boolean;
            renderToBody: boolean;
            preventFocus: boolean;
            scrollToCloseDistance: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        open: {
            type: BooleanConstructor;
            default: undefined;
        };
        defaultOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: import("vue").PropType<import("..").TriggerEvent | import("..").TriggerEvent[]>;
            default: string;
        };
        placement: {
            type: import("vue").PropType<import("..").TriggerPosition>;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        popupOffset: {
            type: NumberConstructor;
            default: number;
        };
        popupTranslate: {
            type: import("vue").PropType<import("..").TriggerPopupTranslate>;
        };
        showArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        alignPoint: {
            type: BooleanConstructor;
            default: boolean;
        };
        popupHoverStay: {
            type: BooleanConstructor;
            default: boolean;
        };
        blurToClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        clickToClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        clickOutsideToClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        unmountOnClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        contentClass: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
        contentStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        arrowClass: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
        arrowStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        animationName: {
            type: StringConstructor;
            default: string;
        };
        duration: {
            type: import("vue").PropType<number | {
                enter: number;
                leave: number;
            }>;
        };
        mouseEnterDelay: {
            type: NumberConstructor;
            default: number;
        };
        mouseLeaveDelay: {
            type: NumberConstructor;
            default: number;
        };
        focusDelay: {
            type: NumberConstructor;
            default: number;
        };
        autoFitPopupWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFitPopupMinWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFixPosition: {
            type: BooleanConstructor;
            default: boolean;
        };
        popupContainer: {
            type: import("vue").PropType<string | HTMLElement>;
        };
        updateAtScroll: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFitTransformOrigin: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideEmpty: {
            type: BooleanConstructor;
            default: boolean;
        };
        openedClass: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        };
        autoFitPosition: {
            type: BooleanConstructor;
            default: boolean;
        };
        renderToBody: {
            type: BooleanConstructor;
            default: boolean;
        };
        preventFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollToClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollToCloseDistance: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{
        onResize?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
        onShow?: (() => any) | undefined;
        "onUpdate:open"?: ((visible: boolean) => any) | undefined;
        onOpenChange?: ((visible: boolean) => any) | undefined;
        onClickOutside?: ((event: Event) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:open': (visible: boolean) => true;
        openChange: (visible: boolean) => true;
        show: () => true;
        hide: () => true;
        clickOutside: (event: Event) => true;
        resize: () => true;
    }, string, {
        updateAtScroll: boolean;
        scrollToClose: boolean;
        disabled: boolean;
        open: boolean;
        autoFitPosition: boolean;
        animationName: string;
        trigger: "hover" | "click" | "focus" | "contextMenu" | ("hover" | "click" | "focus" | "contextMenu")[];
        defaultOpen: boolean;
        placement: "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb";
        popupOffset: number;
        showArrow: boolean;
        alignPoint: boolean;
        popupHoverStay: boolean;
        blurToClose: boolean;
        clickToClose: boolean;
        clickOutsideToClose: boolean;
        unmountOnClose: boolean;
        mouseEnterDelay: number;
        mouseLeaveDelay: number;
        focusDelay: number;
        autoFitPopupWidth: boolean;
        autoFitPopupMinWidth: boolean;
        autoFixPosition: boolean;
        autoFitTransformOrigin: boolean;
        hideEmpty: boolean;
        renderToBody: boolean;
        preventFocus: boolean;
        scrollToCloseDistance: number;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    SelectView: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
            required: true;
        };
        inputValue: StringConstructor;
        placeholder: StringConstructor;
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        opened: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        creatable: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: BooleanConstructor;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        retainInputValue: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        inputRef: import("vue").ComputedRef<HTMLInputElement>;
        handleFocus: (ev: FocusEvent) => void;
        handleBlur: (ev: FocusEvent) => void;
        render: () => import("vue/jsx-runtime").JSX.Element;
    }, {}, {}, {
        focus(): void;
        blur(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "clear" | "blur" | "remove")[], "focus" | "clear" | "blur" | "remove", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<import("../_components/select-view/interface").SelectViewValue[]>;
            required: true;
        };
        inputValue: StringConstructor;
        placeholder: StringConstructor;
        variant: {
            type: import("vue").PropType<"filled" | "outlined" | "standard">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        error: {
            type: BooleanConstructor;
            default: boolean;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        opened: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("..").ComponentSize>;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        creatable: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: BooleanConstructor;
            default: (props: import("../_utils/types").Data) => boolean;
        };
        maxTagCount: {
            type: NumberConstructor;
            default: number;
        };
        tagNowrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        retainInputValue: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onFocus?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        onRemove?: ((...args: any[]) => any) | undefined;
    }>, {
        error: boolean;
        disabled: boolean;
        multiple: boolean;
        variant: "filled" | "outlined" | "standard";
        clearable: boolean;
        loading: boolean;
        opened: boolean;
        retainInputValue: boolean;
        maxTagCount: number;
        tagNowrap: boolean;
        bordered: boolean;
        creatable: boolean;
        filterable: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Panel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        treeProps: {
            type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
            default: () => {};
        };
        selectedKeys: {
            type: import("vue").PropType<import("../tree/types").TreeNodeKey[]>;
        };
        showCheckable: {
            type: BooleanConstructor;
        };
        treeSlots: {
            type: import("vue").PropType<import("vue").Slots>;
            default: () => {};
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        treeProps: {
            type: import("vue").PropType<Partial<import("../tree/types").TreeProps>>;
            default: () => {};
        };
        selectedKeys: {
            type: import("vue").PropType<import("../tree/types").TreeNodeKey[]>;
        };
        showCheckable: {
            type: BooleanConstructor;
        };
        treeSlots: {
            type: import("vue").PropType<import("vue").Slots>;
            default: () => {};
        };
        scrollbar: {
            type: import("vue").PropType<boolean | import("..").ScrollbarProps>;
            default: boolean;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
    }>, {
        scrollbar: boolean | import("..").ScrollbarProps;
        treeProps: Partial<import("../tree/types").TreeProps>;
        showCheckable: boolean;
        treeSlots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
    }, {}, {
        Tree: import("../_utils/global-config").CedarComponentWithInstall<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                    default: string;
                };
                blockNode: {
                    type: BooleanConstructor;
                };
                defaultExpandAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                multiple: {
                    type: BooleanConstructor;
                };
                checkable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                selectable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                checkStrictly: {
                    type: BooleanConstructor;
                };
                checkedStrategy: {
                    type: import("vue").PropType<"all" | "parent" | "child">;
                    default: string;
                };
                defaultSelectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                selectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                checkedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultExpandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                expandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                data: {
                    type: import("vue").PropType<import("..").TreeNodeData[]>;
                    default: () => never[];
                };
                fieldNames: {
                    type: import("vue").PropType<import("..").TreeFieldNames>;
                };
                showLine: {
                    type: BooleanConstructor;
                };
                loadMore: {
                    type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
                };
                draggable: {
                    type: BooleanConstructor;
                };
                allowDrop: {
                    type: import("vue").PropType<(options: {
                        dropNode: import("..").TreeNodeData;
                        dropPosition: -1 | 0 | 1;
                    }) => boolean>;
                };
                filterTreeNode: {
                    type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
                };
                searchValue: {
                    type: StringConstructor;
                    default: string;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                defaultExpandSelected: {
                    type: BooleanConstructor;
                };
                defaultExpandChecked: {
                    type: BooleanConstructor;
                };
                autoExpandParent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                halfCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                onlyCheckLeaf: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                animation: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                actionOnNodeClick: {
                    type: import("vue").PropType<"expand">;
                };
                disableSelectActionOnly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onDrop?: ((data: {
                    e: DragEvent;
                    dragNode: import("..").TreeNodeData;
                    dropNode: import("..").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                onSelect?: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                onCheck?: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("..").TreeNodeData[];
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
                onExpand?: ((expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
                onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
                "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
            }>, {
                classNames: import("vue").ComputedRef<(string | {
                    [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                })[]>;
                visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
                treeContext: {
                    treeProps: {
                        readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                        readonly data: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        }[];
                        readonly multiple: boolean;
                        readonly animation: boolean;
                        readonly showLine: boolean;
                        readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly draggable: boolean;
                        readonly checkStrictly: boolean;
                        readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly onlyCheckLeaf: boolean;
                        readonly blockNode: boolean;
                        readonly defaultExpandAll: boolean;
                        readonly checkedStrategy: "all" | "parent" | "child";
                        readonly searchValue: string;
                        readonly defaultExpandSelected: boolean;
                        readonly defaultExpandChecked: boolean;
                        readonly autoExpandParent: boolean;
                        readonly disableSelectActionOnly: boolean;
                        readonly fieldNames: {
                            key?: string | undefined;
                            title?: string | undefined;
                            disabled?: string | undefined;
                            children?: string | undefined;
                            isLeaf?: string | undefined;
                            disableCheckbox?: string | undefined;
                            checkable?: string | undefined;
                            icon?: string | undefined;
                        } | undefined;
                        readonly virtualListProps: {
                            height?: (number | string) | undefined;
                            threshold?: number | undefined;
                            isStaticItemHeight?: boolean | undefined;
                            fixedSize?: boolean | undefined;
                            estimatedSize?: number | undefined;
                            buffer?: number | undefined;
                            data?: any[] | undefined;
                            itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                            component?: keyof HTMLElementTagNameMap | undefined;
                        } | undefined;
                        readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                        readonly selectedKeys: (string | number)[] | undefined;
                        readonly defaultSelectedKeys: (string | number)[] | undefined;
                        readonly expandedKeys: (string | number)[] | undefined;
                        readonly defaultExpandedKeys: (string | number)[] | undefined;
                        readonly checkedKeys: (string | number)[] | undefined;
                        readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                        readonly allowDrop: ((options: {
                            dropNode: import("..").TreeNodeData;
                            dropPosition: -1 | 0 | 1;
                        }) => boolean) | undefined;
                        readonly defaultCheckedKeys: (string | number)[] | undefined;
                        readonly halfCheckedKeys: (string | number)[] | undefined;
                        readonly actionOnNodeClick: "expand" | undefined;
                        readonly onDrop: ((data: {
                            e: DragEvent;
                            dragNode: import("..").TreeNodeData;
                            dropNode: import("..").TreeNodeData;
                            dropPosition: number;
                        }) => any) | undefined;
                        readonly onSelect: ((selectedKeys: (string | number)[], data: {
                            selected?: boolean;
                            selectedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly onCheck: ((checkedKeys: (string | number)[], data: {
                            checked?: boolean;
                            checkedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            halfCheckedKeys: (string | number)[];
                            halfCheckedNodes: import("..").TreeNodeData[];
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                        readonly onExpand: ((expandKeys: (string | number)[], data: {
                            expanded?: boolean;
                            expandedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                        readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                        readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                    };
                    switcherIcon: import("vue").Slot<any> | undefined;
                    loadingIcon: import("vue").Slot<any> | undefined;
                    dragIcon: import("vue").Slot<any> | undefined;
                    nodeIcon: import("vue").Slot<any> | undefined;
                    nodeTitle: import("vue").Slot<any> | undefined;
                    nodeExtra: import("vue").Slot<any> | undefined;
                    treeData: {
                        key: import("../tree/types").TreeNodeKey;
                        treeNodeProps: {
                            selectable: boolean;
                            disabled: boolean;
                            disableCheckbox: boolean;
                            checkable: boolean;
                            draggable: boolean;
                            isLeaf: boolean;
                            isTail: boolean;
                            blockNode: boolean;
                            showLine: boolean;
                            level: number;
                            lineless: boolean[];
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                        };
                        treeNodeData: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        };
                        parent?: any | undefined;
                        parentKey?: import("../tree/types").TreeNodeKey | undefined;
                        pathParentKeys: import("../tree/types").TreeNodeKey[];
                        children?: any[] | undefined;
                        selectable: boolean;
                        disabled: boolean;
                        disableCheckbox: boolean;
                        checkable: boolean;
                        draggable: boolean;
                        isLeaf: boolean;
                        isTail: boolean;
                        blockNode: boolean;
                        showLine: boolean;
                        level: number;
                        lineless: boolean[];
                        title?: string | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                    }[];
                    flattenTreeData: import("../tree/types").Node[];
                    key2TreeNode: import("../tree/types").Key2TreeNode;
                    checkedKeys: import("../tree/types").TreeNodeKey[];
                    indeterminateKeys: import("../tree/types").TreeNodeKey[];
                    selectedKeys: import("../tree/types").TreeNodeKey[];
                    expandedKeys: import("../tree/types").TreeNodeKey[];
                    loadingKeys: import("../tree/types").TreeNodeKey[];
                    currentExpandKeys: import("../tree/types").TreeNodeKey[];
                    onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                    filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                    onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                    onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                    allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                    onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
                };
                virtualListRef: import("vue").Ref<any, any>;
                computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
                getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
                internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
            }, {}, {}, {
                toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
                scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
                getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
                getCheckedNodes(options?: {
                    checkedStrategy?: import("../tree/types").CheckedStrategy;
                    includeHalfChecked?: boolean;
                }): (import("..").TreeNodeData | undefined)[];
                getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
                getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
                checkAll(checked?: boolean): void;
                checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
                selectAll(selected?: boolean): void;
                selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
                expandAll(expanded?: boolean): void;
                expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                select: (selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => true;
                'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
                check: (checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("..").TreeNodeData[];
                    e?: Event;
                }) => true;
                'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
                'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
                expand: (expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => true;
                'update:expandedKeys': (expandKeys: (string | number)[]) => true;
                dragStart: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragEnd: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragOver: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                dragLeave: (ev: DragEvent, node: import("..").TreeNodeData) => true;
                drop: (data: {
                    e: DragEvent;
                    dragNode: import("..").TreeNodeData;
                    dropNode: import("..").TreeNodeData;
                    dropPosition: number;
                }) => true;
            }, import("vue").PublicProps, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                data: import("..").TreeNodeData[];
                multiple: boolean;
                animation: boolean;
                showLine: boolean;
                checkable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                draggable: boolean;
                checkStrictly: boolean;
                selectable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                onlyCheckLeaf: boolean;
                blockNode: boolean;
                defaultExpandAll: boolean;
                checkedStrategy: "all" | "parent" | "child";
                searchValue: string;
                defaultExpandSelected: boolean;
                defaultExpandChecked: boolean;
                autoExpandParent: boolean;
                disableSelectActionOnly: boolean;
            }, true, {}, {}, {
                VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    height: {
                        type: (StringConstructor | NumberConstructor)[];
                        default: number;
                    };
                    data: {
                        type: import("vue").PropType<any[]>;
                        default: () => never[];
                    };
                    threshold: {
                        type: NumberConstructor;
                        default: number;
                    };
                    itemKey: {
                        type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                        default: string;
                    };
                    fixedSize: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    estimatedSize: {
                        type: NumberConstructor;
                        default: number;
                    };
                    buffer: {
                        type: NumberConstructor;
                        default: number;
                    };
                    component: {
                        type: (ObjectConstructor | StringConstructor)[];
                        default: string;
                    };
                    listAttrs: {
                        type: ObjectConstructor;
                    };
                    contentAttrs: {
                        type: ObjectConstructor;
                    };
                    paddingPosition: {
                        type: StringConstructor;
                        default: string;
                    };
                }>, {
                    prefixCls: string;
                    containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                    frontPadding: import("vue").ComputedRef<number>;
                    currentList: import("vue").ComputedRef<any[]>;
                    behindPadding: import("vue").ComputedRef<number>;
                    onScroll: (ev: Event) => void;
                    setItemSize: (key: string | number, size: number) => void;
                    hasItemSize: (key: string | number) => boolean;
                    start: import("vue").Ref<number, number>;
                    scrollTo: (options: import("../_components/virtual-list-v2/interface").ScrollOptions) => void;
                    style: import("vue").ComputedRef<{
                        height: string;
                        overflow: string;
                    }>;
                    mergedComponent: import("vue").ComputedRef<{
                        container: string;
                        list: string;
                        content: string;
                    }>;
                    getItemKey: (item: any, index: number) => string | number;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    scroll: (ev: Event) => true;
                    reachBottom: (ev: Event) => true;
                }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    height: {
                        type: (StringConstructor | NumberConstructor)[];
                        default: number;
                    };
                    data: {
                        type: import("vue").PropType<any[]>;
                        default: () => never[];
                    };
                    threshold: {
                        type: NumberConstructor;
                        default: number;
                    };
                    itemKey: {
                        type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                        default: string;
                    };
                    fixedSize: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    estimatedSize: {
                        type: NumberConstructor;
                        default: number;
                    };
                    buffer: {
                        type: NumberConstructor;
                        default: number;
                    };
                    component: {
                        type: (ObjectConstructor | StringConstructor)[];
                        default: string;
                    };
                    listAttrs: {
                        type: ObjectConstructor;
                    };
                    contentAttrs: {
                        type: ObjectConstructor;
                    };
                    paddingPosition: {
                        type: StringConstructor;
                        default: string;
                    };
                }>> & Readonly<{
                    onScroll?: ((ev: Event) => any) | undefined;
                    onReachBottom?: ((ev: Event) => any) | undefined;
                }>, {
                    component: string | Record<string, any>;
                    data: any[];
                    height: string | number;
                    fixedSize: boolean;
                    estimatedSize: number;
                    buffer: number;
                    threshold: number;
                    itemKey: string | ((item: unknown) => string | number);
                    paddingPosition: string;
                }, {}, {
                    VirtualListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        hasItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                        setItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        hasItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                        setItemSize: {
                            type: FunctionConstructor;
                            required: true;
                        };
                    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                TreeNode: import("vue").DefineComponent<{}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {} | {
                    [x: string]: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                size: {
                    type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                    default: string;
                };
                blockNode: {
                    type: BooleanConstructor;
                };
                defaultExpandAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                multiple: {
                    type: BooleanConstructor;
                };
                checkable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                selectable: {
                    type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean)>;
                    default: boolean;
                };
                checkStrictly: {
                    type: BooleanConstructor;
                };
                checkedStrategy: {
                    type: import("vue").PropType<"all" | "parent" | "child">;
                    default: string;
                };
                defaultSelectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                selectedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                checkedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                defaultExpandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                expandedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                data: {
                    type: import("vue").PropType<import("..").TreeNodeData[]>;
                    default: () => never[];
                };
                fieldNames: {
                    type: import("vue").PropType<import("..").TreeFieldNames>;
                };
                showLine: {
                    type: BooleanConstructor;
                };
                loadMore: {
                    type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
                };
                draggable: {
                    type: BooleanConstructor;
                };
                allowDrop: {
                    type: import("vue").PropType<(options: {
                        dropNode: import("..").TreeNodeData;
                        dropPosition: -1 | 0 | 1;
                    }) => boolean>;
                };
                filterTreeNode: {
                    type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
                };
                searchValue: {
                    type: StringConstructor;
                    default: string;
                };
                virtualListProps: {
                    type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
                };
                defaultExpandSelected: {
                    type: BooleanConstructor;
                };
                defaultExpandChecked: {
                    type: BooleanConstructor;
                };
                autoExpandParent: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                halfCheckedKeys: {
                    type: import("vue").PropType<Array<string | number>>;
                };
                onlyCheckLeaf: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                animation: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                actionOnNodeClick: {
                    type: import("vue").PropType<"expand">;
                };
                disableSelectActionOnly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>> & Readonly<{
                onDrop?: ((data: {
                    e: DragEvent;
                    dragNode: import("..").TreeNodeData;
                    dropNode: import("..").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                onSelect?: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                onCheck?: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("..").TreeNodeData[];
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
                onExpand?: ((expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("..").TreeNodeData[];
                    node?: import("..").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
                onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
                "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
            }>, {
                classNames: import("vue").ComputedRef<(string | {
                    [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                })[]>;
                visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
                treeContext: {
                    treeProps: {
                        readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                        readonly data: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        }[];
                        readonly multiple: boolean;
                        readonly animation: boolean;
                        readonly showLine: boolean;
                        readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly draggable: boolean;
                        readonly checkStrictly: boolean;
                        readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                            level: number;
                            isLeaf: boolean;
                        }) => boolean);
                        readonly onlyCheckLeaf: boolean;
                        readonly blockNode: boolean;
                        readonly defaultExpandAll: boolean;
                        readonly checkedStrategy: "all" | "parent" | "child";
                        readonly searchValue: string;
                        readonly defaultExpandSelected: boolean;
                        readonly defaultExpandChecked: boolean;
                        readonly autoExpandParent: boolean;
                        readonly disableSelectActionOnly: boolean;
                        readonly fieldNames: {
                            key?: string | undefined;
                            title?: string | undefined;
                            disabled?: string | undefined;
                            children?: string | undefined;
                            isLeaf?: string | undefined;
                            disableCheckbox?: string | undefined;
                            checkable?: string | undefined;
                            icon?: string | undefined;
                        } | undefined;
                        readonly virtualListProps: {
                            height?: (number | string) | undefined;
                            threshold?: number | undefined;
                            isStaticItemHeight?: boolean | undefined;
                            fixedSize?: boolean | undefined;
                            estimatedSize?: number | undefined;
                            buffer?: number | undefined;
                            data?: any[] | undefined;
                            itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                            component?: keyof HTMLElementTagNameMap | undefined;
                        } | undefined;
                        readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                        readonly selectedKeys: (string | number)[] | undefined;
                        readonly defaultSelectedKeys: (string | number)[] | undefined;
                        readonly expandedKeys: (string | number)[] | undefined;
                        readonly defaultExpandedKeys: (string | number)[] | undefined;
                        readonly checkedKeys: (string | number)[] | undefined;
                        readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                        readonly allowDrop: ((options: {
                            dropNode: import("..").TreeNodeData;
                            dropPosition: -1 | 0 | 1;
                        }) => boolean) | undefined;
                        readonly defaultCheckedKeys: (string | number)[] | undefined;
                        readonly halfCheckedKeys: (string | number)[] | undefined;
                        readonly actionOnNodeClick: "expand" | undefined;
                        readonly onDrop: ((data: {
                            e: DragEvent;
                            dragNode: import("..").TreeNodeData;
                            dropNode: import("..").TreeNodeData;
                            dropPosition: number;
                        }) => any) | undefined;
                        readonly onSelect: ((selectedKeys: (string | number)[], data: {
                            selected?: boolean;
                            selectedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly onCheck: ((checkedKeys: (string | number)[], data: {
                            checked?: boolean;
                            checkedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            halfCheckedKeys: (string | number)[];
                            halfCheckedNodes: import("..").TreeNodeData[];
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                        readonly onExpand: ((expandKeys: (string | number)[], data: {
                            expanded?: boolean;
                            expandedNodes: import("..").TreeNodeData[];
                            node?: import("..").TreeNodeData;
                            e?: Event;
                        }) => any) | undefined;
                        readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                        readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                        readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                        readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                    };
                    switcherIcon: import("vue").Slot<any> | undefined;
                    loadingIcon: import("vue").Slot<any> | undefined;
                    dragIcon: import("vue").Slot<any> | undefined;
                    nodeIcon: import("vue").Slot<any> | undefined;
                    nodeTitle: import("vue").Slot<any> | undefined;
                    nodeExtra: import("vue").Slot<any> | undefined;
                    treeData: {
                        key: import("../tree/types").TreeNodeKey;
                        treeNodeProps: {
                            selectable: boolean;
                            disabled: boolean;
                            disableCheckbox: boolean;
                            checkable: boolean;
                            draggable: boolean;
                            isLeaf: boolean;
                            isTail: boolean;
                            blockNode: boolean;
                            showLine: boolean;
                            level: number;
                            lineless: boolean[];
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                        };
                        treeNodeData: {
                            key?: (string | number) | undefined;
                            title?: string | undefined;
                            selectable?: boolean | undefined;
                            disabled?: boolean | undefined;
                            disableCheckbox?: boolean | undefined;
                            checkable?: boolean | undefined;
                            draggable?: boolean | undefined;
                            isLeaf?: boolean | undefined;
                            icon?: (() => import("vue").VNode) | undefined;
                            switcherIcon?: (() => import("vue").VNode) | undefined;
                            loadingIcon?: (() => import("vue").VNode) | undefined;
                            dragIcon?: (() => import("vue").VNode) | undefined;
                            children?: any[] | undefined;
                        };
                        parent?: any | undefined;
                        parentKey?: import("../tree/types").TreeNodeKey | undefined;
                        pathParentKeys: import("../tree/types").TreeNodeKey[];
                        children?: any[] | undefined;
                        selectable: boolean;
                        disabled: boolean;
                        disableCheckbox: boolean;
                        checkable: boolean;
                        draggable: boolean;
                        isLeaf: boolean;
                        isTail: boolean;
                        blockNode: boolean;
                        showLine: boolean;
                        level: number;
                        lineless: boolean[];
                        title?: string | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                    }[];
                    flattenTreeData: import("../tree/types").Node[];
                    key2TreeNode: import("../tree/types").Key2TreeNode;
                    checkedKeys: import("../tree/types").TreeNodeKey[];
                    indeterminateKeys: import("../tree/types").TreeNodeKey[];
                    selectedKeys: import("../tree/types").TreeNodeKey[];
                    expandedKeys: import("../tree/types").TreeNodeKey[];
                    loadingKeys: import("../tree/types").TreeNodeKey[];
                    currentExpandKeys: import("../tree/types").TreeNodeKey[];
                    onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                    filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                    onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                    onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                    onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                    allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                    onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                    onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
                };
                virtualListRef: import("vue").Ref<any, any>;
                computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
                getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
                getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
                internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
                internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
                internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
            }, {}, {}, {
                toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
                scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
                getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
                getCheckedNodes(options?: {
                    checkedStrategy?: import("../tree/types").CheckedStrategy;
                    includeHalfChecked?: boolean;
                }): (import("..").TreeNodeData | undefined)[];
                getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
                getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
                checkAll(checked?: boolean): void;
                checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
                selectAll(selected?: boolean): void;
                selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
                expandAll(expanded?: boolean): void;
                expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
            }, {
                size: "xs" | "sm" | "md" | "lg" | "xl";
                data: import("..").TreeNodeData[];
                multiple: boolean;
                animation: boolean;
                showLine: boolean;
                checkable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                draggable: boolean;
                checkStrictly: boolean;
                selectable: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                onlyCheckLeaf: boolean;
                blockNode: boolean;
                defaultExpandAll: boolean;
                checkedStrategy: "all" | "parent" | "child";
                searchValue: string;
                defaultExpandSelected: boolean;
                defaultExpandChecked: boolean;
                autoExpandParent: boolean;
                disableSelectActionOnly: boolean;
            }>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"xs" | "sm" | "md" | "lg" | "xl">;
                default: string;
            };
            blockNode: {
                type: BooleanConstructor;
            };
            defaultExpandAll: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
            };
            checkable: {
                type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean)>;
                default: boolean;
            };
            selectable: {
                type: import("vue").PropType<boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean)>;
                default: boolean;
            };
            checkStrictly: {
                type: BooleanConstructor;
            };
            checkedStrategy: {
                type: import("vue").PropType<"all" | "parent" | "child">;
                default: string;
            };
            defaultSelectedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            selectedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            defaultCheckedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            checkedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            defaultExpandedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            expandedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            data: {
                type: import("vue").PropType<import("..").TreeNodeData[]>;
                default: () => never[];
            };
            fieldNames: {
                type: import("vue").PropType<import("..").TreeFieldNames>;
            };
            showLine: {
                type: BooleanConstructor;
            };
            loadMore: {
                type: import("vue").PropType<(node: import("..").TreeNodeData) => Promise<void>>;
            };
            draggable: {
                type: BooleanConstructor;
            };
            allowDrop: {
                type: import("vue").PropType<(options: {
                    dropNode: import("..").TreeNodeData;
                    dropPosition: -1 | 0 | 1;
                }) => boolean>;
            };
            filterTreeNode: {
                type: import("vue").PropType<import("../tree/types").FilterTreeNode>;
            };
            searchValue: {
                type: StringConstructor;
                default: string;
            };
            virtualListProps: {
                type: import("vue").PropType<import("../_components/virtual-list-v2/interface").VirtualListProps>;
            };
            defaultExpandSelected: {
                type: BooleanConstructor;
            };
            defaultExpandChecked: {
                type: BooleanConstructor;
            };
            autoExpandParent: {
                type: BooleanConstructor;
                default: boolean;
            };
            halfCheckedKeys: {
                type: import("vue").PropType<Array<string | number>>;
            };
            onlyCheckLeaf: {
                type: BooleanConstructor;
                default: boolean;
            };
            animation: {
                type: BooleanConstructor;
                default: boolean;
            };
            actionOnNodeClick: {
                type: import("vue").PropType<"expand">;
            };
            disableSelectActionOnly: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onDrop?: ((data: {
                e: DragEvent;
                dragNode: import("..").TreeNodeData;
                dropNode: import("..").TreeNodeData;
                dropPosition: number;
            }) => any) | undefined;
            onSelect?: ((selectedKeys: (string | number)[], data: {
                selected?: boolean;
                selectedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                e?: Event;
            }) => any) | undefined;
            onCheck?: ((checkedKeys: (string | number)[], data: {
                checked?: boolean;
                checkedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: import("..").TreeNodeData[];
                e?: Event;
            }) => any) | undefined;
            "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
            onExpand?: ((expandKeys: (string | number)[], data: {
                expanded?: boolean;
                expandedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                e?: Event;
            }) => any) | undefined;
            "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
            onDragStart?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
            onDragOver?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
            onDragLeave?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
            onDragEnd?: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
            "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
            "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
        }>, {
            classNames: import("vue").ComputedRef<(string | {
                [x: string]: boolean | ((node: import("..").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
            })[]>;
            visibleTreeNodeList: import("vue").ComputedRef<import("../tree/types").Node[]>;
            treeContext: {
                treeProps: {
                    readonly size: "xs" | "sm" | "md" | "lg" | "xl";
                    readonly data: {
                        key?: (string | number) | undefined;
                        title?: string | undefined;
                        selectable?: boolean | undefined;
                        disabled?: boolean | undefined;
                        disableCheckbox?: boolean | undefined;
                        checkable?: boolean | undefined;
                        draggable?: boolean | undefined;
                        isLeaf?: boolean | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                        children?: any[] | undefined;
                    }[];
                    readonly multiple: boolean;
                    readonly animation: boolean;
                    readonly showLine: boolean;
                    readonly checkable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    readonly draggable: boolean;
                    readonly checkStrictly: boolean;
                    readonly selectable: boolean | ((node: import("..").TreeNodeData, info: {
                        level: number;
                        isLeaf: boolean;
                    }) => boolean);
                    readonly onlyCheckLeaf: boolean;
                    readonly blockNode: boolean;
                    readonly defaultExpandAll: boolean;
                    readonly checkedStrategy: "all" | "parent" | "child";
                    readonly searchValue: string;
                    readonly defaultExpandSelected: boolean;
                    readonly defaultExpandChecked: boolean;
                    readonly autoExpandParent: boolean;
                    readonly disableSelectActionOnly: boolean;
                    readonly fieldNames: {
                        key?: string | undefined;
                        title?: string | undefined;
                        disabled?: string | undefined;
                        children?: string | undefined;
                        isLeaf?: string | undefined;
                        disableCheckbox?: string | undefined;
                        checkable?: string | undefined;
                        icon?: string | undefined;
                    } | undefined;
                    readonly virtualListProps: {
                        height?: (number | string) | undefined;
                        threshold?: number | undefined;
                        isStaticItemHeight?: boolean | undefined;
                        fixedSize?: boolean | undefined;
                        estimatedSize?: number | undefined;
                        buffer?: number | undefined;
                        data?: any[] | undefined;
                        itemKey?: (string | ((item: unknown) => import("../_components/virtual-list-v2/interface").VirtualItemKey)) | undefined;
                        component?: keyof HTMLElementTagNameMap | undefined;
                    } | undefined;
                    readonly loadMore: ((node: import("..").TreeNodeData) => Promise<void>) | undefined;
                    readonly selectedKeys: (string | number)[] | undefined;
                    readonly defaultSelectedKeys: (string | number)[] | undefined;
                    readonly expandedKeys: (string | number)[] | undefined;
                    readonly defaultExpandedKeys: (string | number)[] | undefined;
                    readonly checkedKeys: (string | number)[] | undefined;
                    readonly filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                    readonly allowDrop: ((options: {
                        dropNode: import("..").TreeNodeData;
                        dropPosition: -1 | 0 | 1;
                    }) => boolean) | undefined;
                    readonly defaultCheckedKeys: (string | number)[] | undefined;
                    readonly halfCheckedKeys: (string | number)[] | undefined;
                    readonly actionOnNodeClick: "expand" | undefined;
                    readonly onDrop: ((data: {
                        e: DragEvent;
                        dragNode: import("..").TreeNodeData;
                        dropNode: import("..").TreeNodeData;
                        dropPosition: number;
                    }) => any) | undefined;
                    readonly onSelect: ((selectedKeys: (string | number)[], data: {
                        selected?: boolean;
                        selectedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    readonly onCheck: ((checkedKeys: (string | number)[], data: {
                        checked?: boolean;
                        checkedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        halfCheckedKeys: (string | number)[];
                        halfCheckedNodes: import("..").TreeNodeData[];
                        e?: Event;
                    }) => any) | undefined;
                    readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                    readonly onExpand: ((expandKeys: (string | number)[], data: {
                        expanded?: boolean;
                        expandedNodes: import("..").TreeNodeData[];
                        node?: import("..").TreeNodeData;
                        e?: Event;
                    }) => any) | undefined;
                    readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                    readonly onDragStart: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    readonly onDragOver: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    readonly onDragLeave: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    readonly onDragEnd: ((ev: DragEvent, node: import("..").TreeNodeData) => any) | undefined;
                    readonly "onUpdate:checkedKeys": ((checkedKeys: (string | number)[]) => any) | undefined;
                    readonly "onUpdate:halfCheckedKeys": ((halfCheckedKeys: (string | number)[]) => any) | undefined;
                };
                switcherIcon: import("vue").Slot<any> | undefined;
                loadingIcon: import("vue").Slot<any> | undefined;
                dragIcon: import("vue").Slot<any> | undefined;
                nodeIcon: import("vue").Slot<any> | undefined;
                nodeTitle: import("vue").Slot<any> | undefined;
                nodeExtra: import("vue").Slot<any> | undefined;
                treeData: {
                    key: import("../tree/types").TreeNodeKey;
                    treeNodeProps: {
                        selectable: boolean;
                        disabled: boolean;
                        disableCheckbox: boolean;
                        checkable: boolean;
                        draggable: boolean;
                        isLeaf: boolean;
                        isTail: boolean;
                        blockNode: boolean;
                        showLine: boolean;
                        level: number;
                        lineless: boolean[];
                        key?: (string | number) | undefined;
                        title?: string | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                    };
                    treeNodeData: {
                        key?: (string | number) | undefined;
                        title?: string | undefined;
                        selectable?: boolean | undefined;
                        disabled?: boolean | undefined;
                        disableCheckbox?: boolean | undefined;
                        checkable?: boolean | undefined;
                        draggable?: boolean | undefined;
                        isLeaf?: boolean | undefined;
                        icon?: (() => import("vue").VNode) | undefined;
                        switcherIcon?: (() => import("vue").VNode) | undefined;
                        loadingIcon?: (() => import("vue").VNode) | undefined;
                        dragIcon?: (() => import("vue").VNode) | undefined;
                        children?: any[] | undefined;
                    };
                    parent?: any | undefined;
                    parentKey?: import("../tree/types").TreeNodeKey | undefined;
                    pathParentKeys: import("../tree/types").TreeNodeKey[];
                    children?: any[] | undefined;
                    selectable: boolean;
                    disabled: boolean;
                    disableCheckbox: boolean;
                    checkable: boolean;
                    draggable: boolean;
                    isLeaf: boolean;
                    isTail: boolean;
                    blockNode: boolean;
                    showLine: boolean;
                    level: number;
                    lineless: boolean[];
                    title?: string | undefined;
                    icon?: (() => import("vue").VNode) | undefined;
                    switcherIcon?: (() => import("vue").VNode) | undefined;
                    loadingIcon?: (() => import("vue").VNode) | undefined;
                    dragIcon?: (() => import("vue").VNode) | undefined;
                }[];
                flattenTreeData: import("../tree/types").Node[];
                key2TreeNode: import("../tree/types").Key2TreeNode;
                checkedKeys: import("../tree/types").TreeNodeKey[];
                indeterminateKeys: import("../tree/types").TreeNodeKey[];
                selectedKeys: import("../tree/types").TreeNodeKey[];
                expandedKeys: import("../tree/types").TreeNodeKey[];
                loadingKeys: import("../tree/types").TreeNodeKey[];
                currentExpandKeys: import("../tree/types").TreeNodeKey[];
                onLoadMore: ((key: import("../tree/types").TreeNodeKey) => Promise<void>) | undefined;
                filterTreeNode: import("../tree/types").FilterTreeNode | undefined;
                onCheck: (checked: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                onSelect: (key: import("../tree/types").TreeNodeKey, e: Event) => void;
                onExpand: (expanded: boolean, key: import("../tree/types").TreeNodeKey, e?: Event) => void;
                onExpandEnd: (key: import("../tree/types").TreeNodeKey) => void;
                allowDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: import("../tree/types").DropPosition) => boolean;
                onDragStart: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                onDragEnd: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                onDragOver: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                onDragLeave: (key: import("../tree/types").TreeNodeKey, e: DragEvent) => void;
                onDrop: (key: import("../tree/types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
            };
            virtualListRef: import("vue").Ref<any, any>;
            computedSelectedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
            computedExpandedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
            computedCheckedKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
            computedIndeterminateKeys: import("vue").ComputedRef<import("../tree/types").TreeNodeKey[]>;
            getPublicCheckedKeys: (rawCheckedKeys: import("../tree/types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("../tree/types").TreeNodeKey[];
            getNodes: (keys: import("../tree/types").TreeNodeKey[]) => (import("..").TreeNodeData | undefined)[];
            internalCheckNodes: (keys: import("../tree/types").TreeNodeKey[], checked: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
            internalSetCheckedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
            internalSelectNodes: (keys: import("../tree/types").TreeNodeKey[], selected: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
            internalSetSelectedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
            internalExpandNodes: (keys: import("../tree/types").TreeNodeKey[], expanded: boolean, targetKey?: import("../tree/types").TreeNodeKey) => void;
            internalSetExpandedKeys: (keys: import("../tree/types").TreeNodeKey[]) => void;
        }, {}, {}, {
            toggleCheck(key: import("../tree/types").TreeNodeKey, e: Event): void;
            scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
            getSelectedNodes(): (import("..").TreeNodeData | undefined)[];
            getCheckedNodes(options?: {
                checkedStrategy?: import("../tree/types").CheckedStrategy;
                includeHalfChecked?: boolean;
            }): (import("..").TreeNodeData | undefined)[];
            getHalfCheckedNodes(): (import("..").TreeNodeData | undefined)[];
            getExpandedNodes(): (import("..").TreeNodeData | undefined)[];
            checkAll(checked?: boolean): void;
            checkNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
            selectAll(selected?: boolean): void;
            selectNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], selected?: boolean): void;
            expandAll(expanded?: boolean): void;
            expandNode(key: import("../tree/types").TreeNodeKey | import("../tree/types").TreeNodeKey[], expanded?: boolean): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            select: (selectedKeys: (string | number)[], data: {
                selected?: boolean;
                selectedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                e?: Event;
            }) => true;
            'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
            check: (checkedKeys: (string | number)[], data: {
                checked?: boolean;
                checkedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: import("..").TreeNodeData[];
                e?: Event;
            }) => true;
            'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
            'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
            expand: (expandKeys: (string | number)[], data: {
                expanded?: boolean;
                expandedNodes: import("..").TreeNodeData[];
                node?: import("..").TreeNodeData;
                e?: Event;
            }) => true;
            'update:expandedKeys': (expandKeys: (string | number)[]) => true;
            dragStart: (ev: DragEvent, node: import("..").TreeNodeData) => true;
            dragEnd: (ev: DragEvent, node: import("..").TreeNodeData) => true;
            dragOver: (ev: DragEvent, node: import("..").TreeNodeData) => true;
            dragLeave: (ev: DragEvent, node: import("..").TreeNodeData) => true;
            drop: (data: {
                e: DragEvent;
                dragNode: import("..").TreeNodeData;
                dropNode: import("..").TreeNodeData;
                dropPosition: number;
            }) => true;
        }, string, {
            size: "xs" | "sm" | "md" | "lg" | "xl";
            data: import("..").TreeNodeData[];
            multiple: boolean;
            animation: boolean;
            showLine: boolean;
            checkable: boolean | ((node: import("..").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            draggable: boolean;
            checkStrictly: boolean;
            selectable: boolean | ((node: import("..").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            onlyCheckLeaf: boolean;
            blockNode: boolean;
            defaultExpandAll: boolean;
            checkedStrategy: "all" | "parent" | "child";
            searchValue: string;
            defaultExpandSelected: boolean;
            defaultExpandChecked: boolean;
            autoExpandParent: boolean;
            disableSelectActionOnly: boolean;
        }, {}, string, {}, {
            VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                height: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                data: {
                    type: import("vue").PropType<any[]>;
                    default: () => never[];
                };
                threshold: {
                    type: NumberConstructor;
                    default: number;
                };
                itemKey: {
                    type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                    default: string;
                };
                fixedSize: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                estimatedSize: {
                    type: NumberConstructor;
                    default: number;
                };
                buffer: {
                    type: NumberConstructor;
                    default: number;
                };
                component: {
                    type: (ObjectConstructor | StringConstructor)[];
                    default: string;
                };
                listAttrs: {
                    type: ObjectConstructor;
                };
                contentAttrs: {
                    type: ObjectConstructor;
                };
                paddingPosition: {
                    type: StringConstructor;
                    default: string;
                };
            }>, {
                prefixCls: string;
                containerRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                contentRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                frontPadding: import("vue").ComputedRef<number>;
                currentList: import("vue").ComputedRef<any[]>;
                behindPadding: import("vue").ComputedRef<number>;
                onScroll: (ev: Event) => void;
                setItemSize: (key: string | number, size: number) => void;
                hasItemSize: (key: string | number) => boolean;
                start: import("vue").Ref<number, number>;
                scrollTo: (options: import("../_components/virtual-list-v2/interface").ScrollOptions) => void;
                style: import("vue").ComputedRef<{
                    height: string;
                    overflow: string;
                }>;
                mergedComponent: import("vue").ComputedRef<{
                    container: string;
                    list: string;
                    content: string;
                }>;
                getItemKey: (item: any, index: number) => string | number;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                scroll: (ev: Event) => true;
                reachBottom: (ev: Event) => true;
            }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                height: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                data: {
                    type: import("vue").PropType<any[]>;
                    default: () => never[];
                };
                threshold: {
                    type: NumberConstructor;
                    default: number;
                };
                itemKey: {
                    type: import("vue").PropType<string | ((item: unknown) => string | number)>;
                    default: string;
                };
                fixedSize: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                estimatedSize: {
                    type: NumberConstructor;
                    default: number;
                };
                buffer: {
                    type: NumberConstructor;
                    default: number;
                };
                component: {
                    type: (ObjectConstructor | StringConstructor)[];
                    default: string;
                };
                listAttrs: {
                    type: ObjectConstructor;
                };
                contentAttrs: {
                    type: ObjectConstructor;
                };
                paddingPosition: {
                    type: StringConstructor;
                    default: string;
                };
            }>> & Readonly<{
                onScroll?: ((ev: Event) => any) | undefined;
                onReachBottom?: ((ev: Event) => any) | undefined;
            }>, {
                component: string | Record<string, any>;
                data: any[];
                height: string | number;
                fixedSize: boolean;
                estimatedSize: number;
                buffer: number;
                threshold: number;
                itemKey: string | ((item: unknown) => string | number);
                paddingPosition: string;
            }, {}, {
                VirtualListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    hasItemSize: {
                        type: FunctionConstructor;
                        required: true;
                    };
                    setItemSize: {
                        type: FunctionConstructor;
                        required: true;
                    };
                }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    hasItemSize: {
                        type: FunctionConstructor;
                        required: true;
                    };
                    setItemSize: {
                        type: FunctionConstructor;
                        required: true;
                    };
                }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            TreeNode: import("vue").DefineComponent<{}, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {} | {
                [x: string]: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Empty: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            description: StringConstructor;
            imageUrl: StringConstructor;
            alt: {
                type: StringConstructor;
                default: string;
            };
            icon: StringConstructor;
            imageSize: {
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
                default: string;
            };
            inConfigProvider: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            alt: string;
            imageSize: import("../empty").EmptyImageSize;
            inConfigProvider: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            description: StringConstructor;
            imageUrl: StringConstructor;
            alt: {
                type: StringConstructor;
                default: string;
            };
            icon: StringConstructor;
            imageSize: {
                type: import("vue").PropType<import("../empty").EmptyImageSize>;
                default: string;
            };
            inConfigProvider: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            alt: string;
            imageSize: import("../empty").EmptyImageSize;
            inConfigProvider: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        description: StringConstructor;
        imageUrl: StringConstructor;
        alt: {
            type: StringConstructor;
            default: string;
        };
        icon: StringConstructor;
        imageSize: {
            type: import("vue").PropType<import("../empty").EmptyImageSize>;
            default: string;
        };
        inConfigProvider: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        alt: string;
        imageSize: import("../empty").EmptyImageSize;
        inConfigProvider: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
    Spin: import("../_utils/global-config").CedarComponentWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: NumberConstructor;
            };
            loading: BooleanConstructor;
            dot: BooleanConstructor;
            tip: StringConstructor;
            hideIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
            dot: boolean;
            loading: boolean;
            hideIcon: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: NumberConstructor;
        };
        loading: BooleanConstructor;
        dot: BooleanConstructor;
        tip: StringConstructor;
        hideIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        dot: boolean;
        loading: boolean;
        hideIcon: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps>;
export { TreeSelect };
export { treeSelectProps };
export default TreeSelect;
