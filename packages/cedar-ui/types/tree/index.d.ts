import _Tree from './tree.vue';
import { treeProps } from './props';
export type { TreeNodeData, TreeFieldNames } from './types';
declare const Tree: import("../_utils/global-config").CedarComponentWithInstall<{
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
            type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean)>;
            default: boolean;
        };
        selectable: {
            type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
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
            type: import("vue").PropType<import("./types").TreeNodeData[]>;
            default: () => never[];
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").TreeFieldNames>;
        };
        showLine: {
            type: BooleanConstructor;
        };
        loadMore: {
            type: import("vue").PropType<(node: import("./types").TreeNodeData) => Promise<void>>;
        };
        draggable: {
            type: BooleanConstructor;
        };
        allowDrop: {
            type: import("vue").PropType<(options: {
                dropNode: import("./types").TreeNodeData;
                dropPosition: -1 | 0 | 1;
            }) => boolean>;
        };
        filterTreeNode: {
            type: import("vue").PropType<import("./types").FilterTreeNode>;
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
            dragNode: import("./types").TreeNodeData;
            dropNode: import("./types").TreeNodeData;
            dropPosition: number;
        }) => any) | undefined;
        onSelect?: ((selectedKeys: (string | number)[], data: {
            selected?: boolean;
            selectedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => any) | undefined;
        onCheck?: ((checkedKeys: (string | number)[], data: {
            checked?: boolean;
            checkedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            halfCheckedKeys: (string | number)[];
            halfCheckedNodes: import("./types").TreeNodeData[];
            e?: Event;
        }) => any) | undefined;
        "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
        onExpand?: ((expandKeys: (string | number)[], data: {
            expanded?: boolean;
            expandedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => any) | undefined;
        "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
        onDragStart?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragOver?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragLeave?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragEnd?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
        "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
    }>, {
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean | ((node: import("./types").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
        })[]>;
        visibleTreeNodeList: import("vue").ComputedRef<import("./types").Node[]>;
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
                readonly checkable: boolean | ((node: import("./types").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                readonly draggable: boolean;
                readonly checkStrictly: boolean;
                readonly selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
                readonly loadMore: ((node: import("./types").TreeNodeData) => Promise<void>) | undefined;
                readonly selectedKeys: (string | number)[] | undefined;
                readonly defaultSelectedKeys: (string | number)[] | undefined;
                readonly expandedKeys: (string | number)[] | undefined;
                readonly defaultExpandedKeys: (string | number)[] | undefined;
                readonly checkedKeys: (string | number)[] | undefined;
                readonly filterTreeNode: import("./types").FilterTreeNode | undefined;
                readonly allowDrop: ((options: {
                    dropNode: import("./types").TreeNodeData;
                    dropPosition: -1 | 0 | 1;
                }) => boolean) | undefined;
                readonly defaultCheckedKeys: (string | number)[] | undefined;
                readonly halfCheckedKeys: (string | number)[] | undefined;
                readonly actionOnNodeClick: "expand" | undefined;
                readonly onDrop: ((data: {
                    e: DragEvent;
                    dragNode: import("./types").TreeNodeData;
                    dropNode: import("./types").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                readonly onSelect: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                readonly onCheck: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("./types").TreeNodeData[];
                    e?: Event;
                }) => any) | undefined;
                readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                readonly onExpand: ((expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                readonly onDragStart: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragOver: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragLeave: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragEnd: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
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
                key: import("./types").TreeNodeKey;
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
                parentKey?: import("./types").TreeNodeKey | undefined;
                pathParentKeys: import("./types").TreeNodeKey[];
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
            flattenTreeData: import("./types").Node[];
            key2TreeNode: import("./types").Key2TreeNode;
            checkedKeys: import("./types").TreeNodeKey[];
            indeterminateKeys: import("./types").TreeNodeKey[];
            selectedKeys: import("./types").TreeNodeKey[];
            expandedKeys: import("./types").TreeNodeKey[];
            loadingKeys: import("./types").TreeNodeKey[];
            currentExpandKeys: import("./types").TreeNodeKey[];
            onLoadMore: ((key: import("./types").TreeNodeKey) => Promise<void>) | undefined;
            filterTreeNode: import("./types").FilterTreeNode | undefined;
            onCheck: (checked: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
            onSelect: (key: import("./types").TreeNodeKey, e: Event) => void;
            onExpand: (expanded: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
            onExpandEnd: (key: import("./types").TreeNodeKey) => void;
            allowDrop: (key: import("./types").TreeNodeKey, dropPosition: import("./types").DropPosition) => boolean;
            onDragStart: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragEnd: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragOver: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragLeave: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDrop: (key: import("./types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
        };
        virtualListRef: import("vue").Ref<any, any>;
        computedSelectedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedExpandedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedCheckedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedIndeterminateKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        getPublicCheckedKeys: (rawCheckedKeys: import("./types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("./types").TreeNodeKey[];
        getNodes: (keys: import("./types").TreeNodeKey[]) => (import("./types").TreeNodeData | undefined)[];
        internalCheckNodes: (keys: import("./types").TreeNodeKey[], checked: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetCheckedKeys: (keys: import("./types").TreeNodeKey[]) => void;
        internalSelectNodes: (keys: import("./types").TreeNodeKey[], selected: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetSelectedKeys: (keys: import("./types").TreeNodeKey[]) => void;
        internalExpandNodes: (keys: import("./types").TreeNodeKey[], expanded: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetExpandedKeys: (keys: import("./types").TreeNodeKey[]) => void;
    }, {}, {}, {
        toggleCheck(key: import("./types").TreeNodeKey, e: Event): void;
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
        getSelectedNodes(): (import("./types").TreeNodeData | undefined)[];
        getCheckedNodes(options?: {
            checkedStrategy?: import("./types").CheckedStrategy;
            includeHalfChecked?: boolean;
        }): (import("./types").TreeNodeData | undefined)[];
        getHalfCheckedNodes(): (import("./types").TreeNodeData | undefined)[];
        getExpandedNodes(): (import("./types").TreeNodeData | undefined)[];
        checkAll(checked?: boolean): void;
        checkNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
        selectAll(selected?: boolean): void;
        selectNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], selected?: boolean): void;
        expandAll(expanded?: boolean): void;
        expandNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], expanded?: boolean): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (selectedKeys: (string | number)[], data: {
            selected?: boolean;
            selectedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => true;
        'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
        check: (checkedKeys: (string | number)[], data: {
            checked?: boolean;
            checkedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            halfCheckedKeys: (string | number)[];
            halfCheckedNodes: import("./types").TreeNodeData[];
            e?: Event;
        }) => true;
        'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
        'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
        expand: (expandKeys: (string | number)[], data: {
            expanded?: boolean;
            expandedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => true;
        'update:expandedKeys': (expandKeys: (string | number)[]) => true;
        dragStart: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
        dragEnd: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
        dragOver: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
        dragLeave: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
        drop: (data: {
            e: DragEvent;
            dragNode: import("./types").TreeNodeData;
            dropNode: import("./types").TreeNodeData;
            dropPosition: number;
        }) => true;
    }, import("vue").PublicProps, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        data: import("./types").TreeNodeData[];
        multiple: boolean;
        animation: boolean;
        showLine: boolean;
        checkable: boolean | ((node: import("./types").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean);
        draggable: boolean;
        checkStrictly: boolean;
        selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
            type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean)>;
            default: boolean;
        };
        selectable: {
            type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
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
            type: import("vue").PropType<import("./types").TreeNodeData[]>;
            default: () => never[];
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").TreeFieldNames>;
        };
        showLine: {
            type: BooleanConstructor;
        };
        loadMore: {
            type: import("vue").PropType<(node: import("./types").TreeNodeData) => Promise<void>>;
        };
        draggable: {
            type: BooleanConstructor;
        };
        allowDrop: {
            type: import("vue").PropType<(options: {
                dropNode: import("./types").TreeNodeData;
                dropPosition: -1 | 0 | 1;
            }) => boolean>;
        };
        filterTreeNode: {
            type: import("vue").PropType<import("./types").FilterTreeNode>;
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
            dragNode: import("./types").TreeNodeData;
            dropNode: import("./types").TreeNodeData;
            dropPosition: number;
        }) => any) | undefined;
        onSelect?: ((selectedKeys: (string | number)[], data: {
            selected?: boolean;
            selectedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => any) | undefined;
        onCheck?: ((checkedKeys: (string | number)[], data: {
            checked?: boolean;
            checkedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            halfCheckedKeys: (string | number)[];
            halfCheckedNodes: import("./types").TreeNodeData[];
            e?: Event;
        }) => any) | undefined;
        "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
        onExpand?: ((expandKeys: (string | number)[], data: {
            expanded?: boolean;
            expandedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => any) | undefined;
        "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
        onDragStart?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragOver?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragLeave?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragEnd?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
        "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
    }>, {
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean | ((node: import("./types").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
        })[]>;
        visibleTreeNodeList: import("vue").ComputedRef<import("./types").Node[]>;
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
                readonly checkable: boolean | ((node: import("./types").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                readonly draggable: boolean;
                readonly checkStrictly: boolean;
                readonly selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
                readonly loadMore: ((node: import("./types").TreeNodeData) => Promise<void>) | undefined;
                readonly selectedKeys: (string | number)[] | undefined;
                readonly defaultSelectedKeys: (string | number)[] | undefined;
                readonly expandedKeys: (string | number)[] | undefined;
                readonly defaultExpandedKeys: (string | number)[] | undefined;
                readonly checkedKeys: (string | number)[] | undefined;
                readonly filterTreeNode: import("./types").FilterTreeNode | undefined;
                readonly allowDrop: ((options: {
                    dropNode: import("./types").TreeNodeData;
                    dropPosition: -1 | 0 | 1;
                }) => boolean) | undefined;
                readonly defaultCheckedKeys: (string | number)[] | undefined;
                readonly halfCheckedKeys: (string | number)[] | undefined;
                readonly actionOnNodeClick: "expand" | undefined;
                readonly onDrop: ((data: {
                    e: DragEvent;
                    dragNode: import("./types").TreeNodeData;
                    dropNode: import("./types").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                readonly onSelect: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                readonly onCheck: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("./types").TreeNodeData[];
                    e?: Event;
                }) => any) | undefined;
                readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                readonly onExpand: ((expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                readonly onDragStart: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragOver: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragLeave: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragEnd: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
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
                key: import("./types").TreeNodeKey;
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
                parentKey?: import("./types").TreeNodeKey | undefined;
                pathParentKeys: import("./types").TreeNodeKey[];
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
            flattenTreeData: import("./types").Node[];
            key2TreeNode: import("./types").Key2TreeNode;
            checkedKeys: import("./types").TreeNodeKey[];
            indeterminateKeys: import("./types").TreeNodeKey[];
            selectedKeys: import("./types").TreeNodeKey[];
            expandedKeys: import("./types").TreeNodeKey[];
            loadingKeys: import("./types").TreeNodeKey[];
            currentExpandKeys: import("./types").TreeNodeKey[];
            onLoadMore: ((key: import("./types").TreeNodeKey) => Promise<void>) | undefined;
            filterTreeNode: import("./types").FilterTreeNode | undefined;
            onCheck: (checked: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
            onSelect: (key: import("./types").TreeNodeKey, e: Event) => void;
            onExpand: (expanded: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
            onExpandEnd: (key: import("./types").TreeNodeKey) => void;
            allowDrop: (key: import("./types").TreeNodeKey, dropPosition: import("./types").DropPosition) => boolean;
            onDragStart: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragEnd: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragOver: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragLeave: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDrop: (key: import("./types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
        };
        virtualListRef: import("vue").Ref<any, any>;
        computedSelectedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedExpandedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedCheckedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedIndeterminateKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        getPublicCheckedKeys: (rawCheckedKeys: import("./types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("./types").TreeNodeKey[];
        getNodes: (keys: import("./types").TreeNodeKey[]) => (import("./types").TreeNodeData | undefined)[];
        internalCheckNodes: (keys: import("./types").TreeNodeKey[], checked: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetCheckedKeys: (keys: import("./types").TreeNodeKey[]) => void;
        internalSelectNodes: (keys: import("./types").TreeNodeKey[], selected: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetSelectedKeys: (keys: import("./types").TreeNodeKey[]) => void;
        internalExpandNodes: (keys: import("./types").TreeNodeKey[], expanded: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetExpandedKeys: (keys: import("./types").TreeNodeKey[]) => void;
    }, {}, {}, {
        toggleCheck(key: import("./types").TreeNodeKey, e: Event): void;
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
        getSelectedNodes(): (import("./types").TreeNodeData | undefined)[];
        getCheckedNodes(options?: {
            checkedStrategy?: import("./types").CheckedStrategy;
            includeHalfChecked?: boolean;
        }): (import("./types").TreeNodeData | undefined)[];
        getHalfCheckedNodes(): (import("./types").TreeNodeData | undefined)[];
        getExpandedNodes(): (import("./types").TreeNodeData | undefined)[];
        checkAll(checked?: boolean): void;
        checkNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
        selectAll(selected?: boolean): void;
        selectNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], selected?: boolean): void;
        expandAll(expanded?: boolean): void;
        expandNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], expanded?: boolean): void;
    }, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        data: import("./types").TreeNodeData[];
        multiple: boolean;
        animation: boolean;
        showLine: boolean;
        checkable: boolean | ((node: import("./types").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean);
        draggable: boolean;
        checkStrictly: boolean;
        selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
        type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        default: boolean;
    };
    selectable: {
        type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
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
        type: import("vue").PropType<import("./types").TreeNodeData[]>;
        default: () => never[];
    };
    fieldNames: {
        type: import("vue").PropType<import("./types").TreeFieldNames>;
    };
    showLine: {
        type: BooleanConstructor;
    };
    loadMore: {
        type: import("vue").PropType<(node: import("./types").TreeNodeData) => Promise<void>>;
    };
    draggable: {
        type: BooleanConstructor;
    };
    allowDrop: {
        type: import("vue").PropType<(options: {
            dropNode: import("./types").TreeNodeData;
            dropPosition: -1 | 0 | 1;
        }) => boolean>;
    };
    filterTreeNode: {
        type: import("vue").PropType<import("./types").FilterTreeNode>;
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
        dragNode: import("./types").TreeNodeData;
        dropNode: import("./types").TreeNodeData;
        dropPosition: number;
    }) => any) | undefined;
    onSelect?: ((selectedKeys: (string | number)[], data: {
        selected?: boolean;
        selectedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        e?: Event;
    }) => any) | undefined;
    onCheck?: ((checkedKeys: (string | number)[], data: {
        checked?: boolean;
        checkedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: import("./types").TreeNodeData[];
        e?: Event;
    }) => any) | undefined;
    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
    onExpand?: ((expandKeys: (string | number)[], data: {
        expanded?: boolean;
        expandedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        e?: Event;
    }) => any) | undefined;
    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
    onDragStart?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
    onDragOver?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
    onDragLeave?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
    onDragEnd?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
}>, {
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ((node: import("./types").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean);
    })[]>;
    visibleTreeNodeList: import("vue").ComputedRef<import("./types").Node[]>;
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
            readonly checkable: boolean | ((node: import("./types").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            readonly draggable: boolean;
            readonly checkStrictly: boolean;
            readonly selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
            readonly loadMore: ((node: import("./types").TreeNodeData) => Promise<void>) | undefined;
            readonly selectedKeys: (string | number)[] | undefined;
            readonly defaultSelectedKeys: (string | number)[] | undefined;
            readonly expandedKeys: (string | number)[] | undefined;
            readonly defaultExpandedKeys: (string | number)[] | undefined;
            readonly checkedKeys: (string | number)[] | undefined;
            readonly filterTreeNode: import("./types").FilterTreeNode | undefined;
            readonly allowDrop: ((options: {
                dropNode: import("./types").TreeNodeData;
                dropPosition: -1 | 0 | 1;
            }) => boolean) | undefined;
            readonly defaultCheckedKeys: (string | number)[] | undefined;
            readonly halfCheckedKeys: (string | number)[] | undefined;
            readonly actionOnNodeClick: "expand" | undefined;
            readonly onDrop: ((data: {
                e: DragEvent;
                dragNode: import("./types").TreeNodeData;
                dropNode: import("./types").TreeNodeData;
                dropPosition: number;
            }) => any) | undefined;
            readonly onSelect: ((selectedKeys: (string | number)[], data: {
                selected?: boolean;
                selectedNodes: import("./types").TreeNodeData[];
                node?: import("./types").TreeNodeData;
                e?: Event;
            }) => any) | undefined;
            readonly onCheck: ((checkedKeys: (string | number)[], data: {
                checked?: boolean;
                checkedNodes: import("./types").TreeNodeData[];
                node?: import("./types").TreeNodeData;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: import("./types").TreeNodeData[];
                e?: Event;
            }) => any) | undefined;
            readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
            readonly onExpand: ((expandKeys: (string | number)[], data: {
                expanded?: boolean;
                expandedNodes: import("./types").TreeNodeData[];
                node?: import("./types").TreeNodeData;
                e?: Event;
            }) => any) | undefined;
            readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
            readonly onDragStart: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
            readonly onDragOver: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
            readonly onDragLeave: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
            readonly onDragEnd: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
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
            key: import("./types").TreeNodeKey;
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
            parentKey?: import("./types").TreeNodeKey | undefined;
            pathParentKeys: import("./types").TreeNodeKey[];
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
        flattenTreeData: import("./types").Node[];
        key2TreeNode: import("./types").Key2TreeNode;
        checkedKeys: import("./types").TreeNodeKey[];
        indeterminateKeys: import("./types").TreeNodeKey[];
        selectedKeys: import("./types").TreeNodeKey[];
        expandedKeys: import("./types").TreeNodeKey[];
        loadingKeys: import("./types").TreeNodeKey[];
        currentExpandKeys: import("./types").TreeNodeKey[];
        onLoadMore: ((key: import("./types").TreeNodeKey) => Promise<void>) | undefined;
        filterTreeNode: import("./types").FilterTreeNode | undefined;
        onCheck: (checked: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
        onSelect: (key: import("./types").TreeNodeKey, e: Event) => void;
        onExpand: (expanded: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
        onExpandEnd: (key: import("./types").TreeNodeKey) => void;
        allowDrop: (key: import("./types").TreeNodeKey, dropPosition: import("./types").DropPosition) => boolean;
        onDragStart: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
        onDragEnd: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
        onDragOver: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
        onDragLeave: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
        onDrop: (key: import("./types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
    };
    virtualListRef: import("vue").Ref<any, any>;
    computedSelectedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
    computedExpandedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
    computedCheckedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
    computedIndeterminateKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
    getPublicCheckedKeys: (rawCheckedKeys: import("./types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("./types").TreeNodeKey[];
    getNodes: (keys: import("./types").TreeNodeKey[]) => (import("./types").TreeNodeData | undefined)[];
    internalCheckNodes: (keys: import("./types").TreeNodeKey[], checked: boolean, targetKey?: import("./types").TreeNodeKey) => void;
    internalSetCheckedKeys: (keys: import("./types").TreeNodeKey[]) => void;
    internalSelectNodes: (keys: import("./types").TreeNodeKey[], selected: boolean, targetKey?: import("./types").TreeNodeKey) => void;
    internalSetSelectedKeys: (keys: import("./types").TreeNodeKey[]) => void;
    internalExpandNodes: (keys: import("./types").TreeNodeKey[], expanded: boolean, targetKey?: import("./types").TreeNodeKey) => void;
    internalSetExpandedKeys: (keys: import("./types").TreeNodeKey[]) => void;
}, {}, {}, {
    toggleCheck(key: import("./types").TreeNodeKey, e: Event): void;
    scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
    getSelectedNodes(): (import("./types").TreeNodeData | undefined)[];
    getCheckedNodes(options?: {
        checkedStrategy?: import("./types").CheckedStrategy;
        includeHalfChecked?: boolean;
    }): (import("./types").TreeNodeData | undefined)[];
    getHalfCheckedNodes(): (import("./types").TreeNodeData | undefined)[];
    getExpandedNodes(): (import("./types").TreeNodeData | undefined)[];
    checkAll(checked?: boolean): void;
    checkNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
    selectAll(selected?: boolean): void;
    selectNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], selected?: boolean): void;
    expandAll(expanded?: boolean): void;
    expandNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], expanded?: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (selectedKeys: (string | number)[], data: {
        selected?: boolean;
        selectedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        e?: Event;
    }) => true;
    'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
    check: (checkedKeys: (string | number)[], data: {
        checked?: boolean;
        checkedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: import("./types").TreeNodeData[];
        e?: Event;
    }) => true;
    'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
    'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
    expand: (expandKeys: (string | number)[], data: {
        expanded?: boolean;
        expandedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        e?: Event;
    }) => true;
    'update:expandedKeys': (expandKeys: (string | number)[]) => true;
    dragStart: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
    dragEnd: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
    dragOver: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
    dragLeave: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
    drop: (data: {
        e: DragEvent;
        dragNode: import("./types").TreeNodeData;
        dropNode: import("./types").TreeNodeData;
        dropPosition: number;
    }) => true;
}, string, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    data: import("./types").TreeNodeData[];
    multiple: boolean;
    animation: boolean;
    showLine: boolean;
    checkable: boolean | ((node: import("./types").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean);
    draggable: boolean;
    checkStrictly: boolean;
    selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
export type TreeInstance = InstanceType<typeof _Tree>;
export declare const _TreeComponent: import("../_utils/global-config").CedarComponentWithInstall<{
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
            type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean)>;
            default: boolean;
        };
        selectable: {
            type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
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
            type: import("vue").PropType<import("./types").TreeNodeData[]>;
            default: () => never[];
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").TreeFieldNames>;
        };
        showLine: {
            type: BooleanConstructor;
        };
        loadMore: {
            type: import("vue").PropType<(node: import("./types").TreeNodeData) => Promise<void>>;
        };
        draggable: {
            type: BooleanConstructor;
        };
        allowDrop: {
            type: import("vue").PropType<(options: {
                dropNode: import("./types").TreeNodeData;
                dropPosition: -1 | 0 | 1;
            }) => boolean>;
        };
        filterTreeNode: {
            type: import("vue").PropType<import("./types").FilterTreeNode>;
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
            dragNode: import("./types").TreeNodeData;
            dropNode: import("./types").TreeNodeData;
            dropPosition: number;
        }) => any) | undefined;
        onSelect?: ((selectedKeys: (string | number)[], data: {
            selected?: boolean;
            selectedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => any) | undefined;
        onCheck?: ((checkedKeys: (string | number)[], data: {
            checked?: boolean;
            checkedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            halfCheckedKeys: (string | number)[];
            halfCheckedNodes: import("./types").TreeNodeData[];
            e?: Event;
        }) => any) | undefined;
        "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
        onExpand?: ((expandKeys: (string | number)[], data: {
            expanded?: boolean;
            expandedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => any) | undefined;
        "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
        onDragStart?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragOver?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragLeave?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragEnd?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
        "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
    }>, {
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean | ((node: import("./types").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
        })[]>;
        visibleTreeNodeList: import("vue").ComputedRef<import("./types").Node[]>;
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
                readonly checkable: boolean | ((node: import("./types").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                readonly draggable: boolean;
                readonly checkStrictly: boolean;
                readonly selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
                readonly loadMore: ((node: import("./types").TreeNodeData) => Promise<void>) | undefined;
                readonly selectedKeys: (string | number)[] | undefined;
                readonly defaultSelectedKeys: (string | number)[] | undefined;
                readonly expandedKeys: (string | number)[] | undefined;
                readonly defaultExpandedKeys: (string | number)[] | undefined;
                readonly checkedKeys: (string | number)[] | undefined;
                readonly filterTreeNode: import("./types").FilterTreeNode | undefined;
                readonly allowDrop: ((options: {
                    dropNode: import("./types").TreeNodeData;
                    dropPosition: -1 | 0 | 1;
                }) => boolean) | undefined;
                readonly defaultCheckedKeys: (string | number)[] | undefined;
                readonly halfCheckedKeys: (string | number)[] | undefined;
                readonly actionOnNodeClick: "expand" | undefined;
                readonly onDrop: ((data: {
                    e: DragEvent;
                    dragNode: import("./types").TreeNodeData;
                    dropNode: import("./types").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                readonly onSelect: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                readonly onCheck: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("./types").TreeNodeData[];
                    e?: Event;
                }) => any) | undefined;
                readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                readonly onExpand: ((expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                readonly onDragStart: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragOver: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragLeave: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragEnd: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
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
                key: import("./types").TreeNodeKey;
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
                parentKey?: import("./types").TreeNodeKey | undefined;
                pathParentKeys: import("./types").TreeNodeKey[];
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
            flattenTreeData: import("./types").Node[];
            key2TreeNode: import("./types").Key2TreeNode;
            checkedKeys: import("./types").TreeNodeKey[];
            indeterminateKeys: import("./types").TreeNodeKey[];
            selectedKeys: import("./types").TreeNodeKey[];
            expandedKeys: import("./types").TreeNodeKey[];
            loadingKeys: import("./types").TreeNodeKey[];
            currentExpandKeys: import("./types").TreeNodeKey[];
            onLoadMore: ((key: import("./types").TreeNodeKey) => Promise<void>) | undefined;
            filterTreeNode: import("./types").FilterTreeNode | undefined;
            onCheck: (checked: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
            onSelect: (key: import("./types").TreeNodeKey, e: Event) => void;
            onExpand: (expanded: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
            onExpandEnd: (key: import("./types").TreeNodeKey) => void;
            allowDrop: (key: import("./types").TreeNodeKey, dropPosition: import("./types").DropPosition) => boolean;
            onDragStart: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragEnd: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragOver: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragLeave: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDrop: (key: import("./types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
        };
        virtualListRef: import("vue").Ref<any, any>;
        computedSelectedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedExpandedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedCheckedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedIndeterminateKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        getPublicCheckedKeys: (rawCheckedKeys: import("./types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("./types").TreeNodeKey[];
        getNodes: (keys: import("./types").TreeNodeKey[]) => (import("./types").TreeNodeData | undefined)[];
        internalCheckNodes: (keys: import("./types").TreeNodeKey[], checked: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetCheckedKeys: (keys: import("./types").TreeNodeKey[]) => void;
        internalSelectNodes: (keys: import("./types").TreeNodeKey[], selected: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetSelectedKeys: (keys: import("./types").TreeNodeKey[]) => void;
        internalExpandNodes: (keys: import("./types").TreeNodeKey[], expanded: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetExpandedKeys: (keys: import("./types").TreeNodeKey[]) => void;
    }, {}, {}, {
        toggleCheck(key: import("./types").TreeNodeKey, e: Event): void;
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
        getSelectedNodes(): (import("./types").TreeNodeData | undefined)[];
        getCheckedNodes(options?: {
            checkedStrategy?: import("./types").CheckedStrategy;
            includeHalfChecked?: boolean;
        }): (import("./types").TreeNodeData | undefined)[];
        getHalfCheckedNodes(): (import("./types").TreeNodeData | undefined)[];
        getExpandedNodes(): (import("./types").TreeNodeData | undefined)[];
        checkAll(checked?: boolean): void;
        checkNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
        selectAll(selected?: boolean): void;
        selectNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], selected?: boolean): void;
        expandAll(expanded?: boolean): void;
        expandNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], expanded?: boolean): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (selectedKeys: (string | number)[], data: {
            selected?: boolean;
            selectedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => true;
        'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
        check: (checkedKeys: (string | number)[], data: {
            checked?: boolean;
            checkedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            halfCheckedKeys: (string | number)[];
            halfCheckedNodes: import("./types").TreeNodeData[];
            e?: Event;
        }) => true;
        'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
        'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
        expand: (expandKeys: (string | number)[], data: {
            expanded?: boolean;
            expandedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => true;
        'update:expandedKeys': (expandKeys: (string | number)[]) => true;
        dragStart: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
        dragEnd: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
        dragOver: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
        dragLeave: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
        drop: (data: {
            e: DragEvent;
            dragNode: import("./types").TreeNodeData;
            dropNode: import("./types").TreeNodeData;
            dropPosition: number;
        }) => true;
    }, import("vue").PublicProps, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        data: import("./types").TreeNodeData[];
        multiple: boolean;
        animation: boolean;
        showLine: boolean;
        checkable: boolean | ((node: import("./types").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean);
        draggable: boolean;
        checkStrictly: boolean;
        selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
            type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean)>;
            default: boolean;
        };
        selectable: {
            type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
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
            type: import("vue").PropType<import("./types").TreeNodeData[]>;
            default: () => never[];
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").TreeFieldNames>;
        };
        showLine: {
            type: BooleanConstructor;
        };
        loadMore: {
            type: import("vue").PropType<(node: import("./types").TreeNodeData) => Promise<void>>;
        };
        draggable: {
            type: BooleanConstructor;
        };
        allowDrop: {
            type: import("vue").PropType<(options: {
                dropNode: import("./types").TreeNodeData;
                dropPosition: -1 | 0 | 1;
            }) => boolean>;
        };
        filterTreeNode: {
            type: import("vue").PropType<import("./types").FilterTreeNode>;
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
            dragNode: import("./types").TreeNodeData;
            dropNode: import("./types").TreeNodeData;
            dropPosition: number;
        }) => any) | undefined;
        onSelect?: ((selectedKeys: (string | number)[], data: {
            selected?: boolean;
            selectedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => any) | undefined;
        onCheck?: ((checkedKeys: (string | number)[], data: {
            checked?: boolean;
            checkedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            halfCheckedKeys: (string | number)[];
            halfCheckedNodes: import("./types").TreeNodeData[];
            e?: Event;
        }) => any) | undefined;
        "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
        onExpand?: ((expandKeys: (string | number)[], data: {
            expanded?: boolean;
            expandedNodes: import("./types").TreeNodeData[];
            node?: import("./types").TreeNodeData;
            e?: Event;
        }) => any) | undefined;
        "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
        onDragStart?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragOver?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragLeave?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        onDragEnd?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
        "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
        "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
    }>, {
        classNames: import("vue").ComputedRef<(string | {
            [x: string]: boolean | ((node: import("./types").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
        })[]>;
        visibleTreeNodeList: import("vue").ComputedRef<import("./types").Node[]>;
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
                readonly checkable: boolean | ((node: import("./types").TreeNodeData, info: {
                    level: number;
                    isLeaf: boolean;
                }) => boolean);
                readonly draggable: boolean;
                readonly checkStrictly: boolean;
                readonly selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
                readonly loadMore: ((node: import("./types").TreeNodeData) => Promise<void>) | undefined;
                readonly selectedKeys: (string | number)[] | undefined;
                readonly defaultSelectedKeys: (string | number)[] | undefined;
                readonly expandedKeys: (string | number)[] | undefined;
                readonly defaultExpandedKeys: (string | number)[] | undefined;
                readonly checkedKeys: (string | number)[] | undefined;
                readonly filterTreeNode: import("./types").FilterTreeNode | undefined;
                readonly allowDrop: ((options: {
                    dropNode: import("./types").TreeNodeData;
                    dropPosition: -1 | 0 | 1;
                }) => boolean) | undefined;
                readonly defaultCheckedKeys: (string | number)[] | undefined;
                readonly halfCheckedKeys: (string | number)[] | undefined;
                readonly actionOnNodeClick: "expand" | undefined;
                readonly onDrop: ((data: {
                    e: DragEvent;
                    dragNode: import("./types").TreeNodeData;
                    dropNode: import("./types").TreeNodeData;
                    dropPosition: number;
                }) => any) | undefined;
                readonly onSelect: ((selectedKeys: (string | number)[], data: {
                    selected?: boolean;
                    selectedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                readonly onCheck: ((checkedKeys: (string | number)[], data: {
                    checked?: boolean;
                    checkedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    halfCheckedKeys: (string | number)[];
                    halfCheckedNodes: import("./types").TreeNodeData[];
                    e?: Event;
                }) => any) | undefined;
                readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
                readonly onExpand: ((expandKeys: (string | number)[], data: {
                    expanded?: boolean;
                    expandedNodes: import("./types").TreeNodeData[];
                    node?: import("./types").TreeNodeData;
                    e?: Event;
                }) => any) | undefined;
                readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
                readonly onDragStart: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragOver: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragLeave: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
                readonly onDragEnd: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
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
                key: import("./types").TreeNodeKey;
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
                parentKey?: import("./types").TreeNodeKey | undefined;
                pathParentKeys: import("./types").TreeNodeKey[];
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
            flattenTreeData: import("./types").Node[];
            key2TreeNode: import("./types").Key2TreeNode;
            checkedKeys: import("./types").TreeNodeKey[];
            indeterminateKeys: import("./types").TreeNodeKey[];
            selectedKeys: import("./types").TreeNodeKey[];
            expandedKeys: import("./types").TreeNodeKey[];
            loadingKeys: import("./types").TreeNodeKey[];
            currentExpandKeys: import("./types").TreeNodeKey[];
            onLoadMore: ((key: import("./types").TreeNodeKey) => Promise<void>) | undefined;
            filterTreeNode: import("./types").FilterTreeNode | undefined;
            onCheck: (checked: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
            onSelect: (key: import("./types").TreeNodeKey, e: Event) => void;
            onExpand: (expanded: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
            onExpandEnd: (key: import("./types").TreeNodeKey) => void;
            allowDrop: (key: import("./types").TreeNodeKey, dropPosition: import("./types").DropPosition) => boolean;
            onDragStart: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragEnd: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragOver: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDragLeave: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
            onDrop: (key: import("./types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
        };
        virtualListRef: import("vue").Ref<any, any>;
        computedSelectedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedExpandedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedCheckedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        computedIndeterminateKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
        getPublicCheckedKeys: (rawCheckedKeys: import("./types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("./types").TreeNodeKey[];
        getNodes: (keys: import("./types").TreeNodeKey[]) => (import("./types").TreeNodeData | undefined)[];
        internalCheckNodes: (keys: import("./types").TreeNodeKey[], checked: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetCheckedKeys: (keys: import("./types").TreeNodeKey[]) => void;
        internalSelectNodes: (keys: import("./types").TreeNodeKey[], selected: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetSelectedKeys: (keys: import("./types").TreeNodeKey[]) => void;
        internalExpandNodes: (keys: import("./types").TreeNodeKey[], expanded: boolean, targetKey?: import("./types").TreeNodeKey) => void;
        internalSetExpandedKeys: (keys: import("./types").TreeNodeKey[]) => void;
    }, {}, {}, {
        toggleCheck(key: import("./types").TreeNodeKey, e: Event): void;
        scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
        getSelectedNodes(): (import("./types").TreeNodeData | undefined)[];
        getCheckedNodes(options?: {
            checkedStrategy?: import("./types").CheckedStrategy;
            includeHalfChecked?: boolean;
        }): (import("./types").TreeNodeData | undefined)[];
        getHalfCheckedNodes(): (import("./types").TreeNodeData | undefined)[];
        getExpandedNodes(): (import("./types").TreeNodeData | undefined)[];
        checkAll(checked?: boolean): void;
        checkNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
        selectAll(selected?: boolean): void;
        selectNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], selected?: boolean): void;
        expandAll(expanded?: boolean): void;
        expandNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], expanded?: boolean): void;
    }, {
        size: "xs" | "sm" | "md" | "lg" | "xl";
        data: import("./types").TreeNodeData[];
        multiple: boolean;
        animation: boolean;
        showLine: boolean;
        checkable: boolean | ((node: import("./types").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean);
        draggable: boolean;
        checkStrictly: boolean;
        selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
        type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        default: boolean;
    };
    selectable: {
        type: import("vue").PropType<boolean | ((node: import("./types").TreeNodeData, info: {
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
        type: import("vue").PropType<import("./types").TreeNodeData[]>;
        default: () => never[];
    };
    fieldNames: {
        type: import("vue").PropType<import("./types").TreeFieldNames>;
    };
    showLine: {
        type: BooleanConstructor;
    };
    loadMore: {
        type: import("vue").PropType<(node: import("./types").TreeNodeData) => Promise<void>>;
    };
    draggable: {
        type: BooleanConstructor;
    };
    allowDrop: {
        type: import("vue").PropType<(options: {
            dropNode: import("./types").TreeNodeData;
            dropPosition: -1 | 0 | 1;
        }) => boolean>;
    };
    filterTreeNode: {
        type: import("vue").PropType<import("./types").FilterTreeNode>;
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
        dragNode: import("./types").TreeNodeData;
        dropNode: import("./types").TreeNodeData;
        dropPosition: number;
    }) => any) | undefined;
    onSelect?: ((selectedKeys: (string | number)[], data: {
        selected?: boolean;
        selectedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        e?: Event;
    }) => any) | undefined;
    onCheck?: ((checkedKeys: (string | number)[], data: {
        checked?: boolean;
        checkedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: import("./types").TreeNodeData[];
        e?: Event;
    }) => any) | undefined;
    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
    onExpand?: ((expandKeys: (string | number)[], data: {
        expanded?: boolean;
        expandedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        e?: Event;
    }) => any) | undefined;
    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
    onDragStart?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
    onDragOver?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
    onDragLeave?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
    onDragEnd?: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
}>, {
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ((node: import("./types").TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean);
    })[]>;
    visibleTreeNodeList: import("vue").ComputedRef<import("./types").Node[]>;
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
            readonly checkable: boolean | ((node: import("./types").TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            readonly draggable: boolean;
            readonly checkStrictly: boolean;
            readonly selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
            readonly loadMore: ((node: import("./types").TreeNodeData) => Promise<void>) | undefined;
            readonly selectedKeys: (string | number)[] | undefined;
            readonly defaultSelectedKeys: (string | number)[] | undefined;
            readonly expandedKeys: (string | number)[] | undefined;
            readonly defaultExpandedKeys: (string | number)[] | undefined;
            readonly checkedKeys: (string | number)[] | undefined;
            readonly filterTreeNode: import("./types").FilterTreeNode | undefined;
            readonly allowDrop: ((options: {
                dropNode: import("./types").TreeNodeData;
                dropPosition: -1 | 0 | 1;
            }) => boolean) | undefined;
            readonly defaultCheckedKeys: (string | number)[] | undefined;
            readonly halfCheckedKeys: (string | number)[] | undefined;
            readonly actionOnNodeClick: "expand" | undefined;
            readonly onDrop: ((data: {
                e: DragEvent;
                dragNode: import("./types").TreeNodeData;
                dropNode: import("./types").TreeNodeData;
                dropPosition: number;
            }) => any) | undefined;
            readonly onSelect: ((selectedKeys: (string | number)[], data: {
                selected?: boolean;
                selectedNodes: import("./types").TreeNodeData[];
                node?: import("./types").TreeNodeData;
                e?: Event;
            }) => any) | undefined;
            readonly onCheck: ((checkedKeys: (string | number)[], data: {
                checked?: boolean;
                checkedNodes: import("./types").TreeNodeData[];
                node?: import("./types").TreeNodeData;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: import("./types").TreeNodeData[];
                e?: Event;
            }) => any) | undefined;
            readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
            readonly onExpand: ((expandKeys: (string | number)[], data: {
                expanded?: boolean;
                expandedNodes: import("./types").TreeNodeData[];
                node?: import("./types").TreeNodeData;
                e?: Event;
            }) => any) | undefined;
            readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
            readonly onDragStart: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
            readonly onDragOver: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
            readonly onDragLeave: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
            readonly onDragEnd: ((ev: DragEvent, node: import("./types").TreeNodeData) => any) | undefined;
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
            key: import("./types").TreeNodeKey;
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
            parentKey?: import("./types").TreeNodeKey | undefined;
            pathParentKeys: import("./types").TreeNodeKey[];
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
        flattenTreeData: import("./types").Node[];
        key2TreeNode: import("./types").Key2TreeNode;
        checkedKeys: import("./types").TreeNodeKey[];
        indeterminateKeys: import("./types").TreeNodeKey[];
        selectedKeys: import("./types").TreeNodeKey[];
        expandedKeys: import("./types").TreeNodeKey[];
        loadingKeys: import("./types").TreeNodeKey[];
        currentExpandKeys: import("./types").TreeNodeKey[];
        onLoadMore: ((key: import("./types").TreeNodeKey) => Promise<void>) | undefined;
        filterTreeNode: import("./types").FilterTreeNode | undefined;
        onCheck: (checked: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
        onSelect: (key: import("./types").TreeNodeKey, e: Event) => void;
        onExpand: (expanded: boolean, key: import("./types").TreeNodeKey, e?: Event) => void;
        onExpandEnd: (key: import("./types").TreeNodeKey) => void;
        allowDrop: (key: import("./types").TreeNodeKey, dropPosition: import("./types").DropPosition) => boolean;
        onDragStart: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
        onDragEnd: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
        onDragOver: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
        onDragLeave: (key: import("./types").TreeNodeKey, e: DragEvent) => void;
        onDrop: (key: import("./types").TreeNodeKey, dropPosition: number, e: DragEvent) => void;
    };
    virtualListRef: import("vue").Ref<any, any>;
    computedSelectedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
    computedExpandedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
    computedCheckedKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
    computedIndeterminateKeys: import("vue").ComputedRef<import("./types").TreeNodeKey[]>;
    getPublicCheckedKeys: (rawCheckedKeys: import("./types").TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => import("./types").TreeNodeKey[];
    getNodes: (keys: import("./types").TreeNodeKey[]) => (import("./types").TreeNodeData | undefined)[];
    internalCheckNodes: (keys: import("./types").TreeNodeKey[], checked: boolean, targetKey?: import("./types").TreeNodeKey) => void;
    internalSetCheckedKeys: (keys: import("./types").TreeNodeKey[]) => void;
    internalSelectNodes: (keys: import("./types").TreeNodeKey[], selected: boolean, targetKey?: import("./types").TreeNodeKey) => void;
    internalSetSelectedKeys: (keys: import("./types").TreeNodeKey[]) => void;
    internalExpandNodes: (keys: import("./types").TreeNodeKey[], expanded: boolean, targetKey?: import("./types").TreeNodeKey) => void;
    internalSetExpandedKeys: (keys: import("./types").TreeNodeKey[]) => void;
}, {}, {}, {
    toggleCheck(key: import("./types").TreeNodeKey, e: Event): void;
    scrollIntoView(options: import("../_components/virtual-list-v2/interface").ScrollIntoViewOptions): void;
    getSelectedNodes(): (import("./types").TreeNodeData | undefined)[];
    getCheckedNodes(options?: {
        checkedStrategy?: import("./types").CheckedStrategy;
        includeHalfChecked?: boolean;
    }): (import("./types").TreeNodeData | undefined)[];
    getHalfCheckedNodes(): (import("./types").TreeNodeData | undefined)[];
    getExpandedNodes(): (import("./types").TreeNodeData | undefined)[];
    checkAll(checked?: boolean): void;
    checkNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
    selectAll(selected?: boolean): void;
    selectNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], selected?: boolean): void;
    expandAll(expanded?: boolean): void;
    expandNode(key: import("./types").TreeNodeKey | import("./types").TreeNodeKey[], expanded?: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (selectedKeys: (string | number)[], data: {
        selected?: boolean;
        selectedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        e?: Event;
    }) => true;
    'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
    check: (checkedKeys: (string | number)[], data: {
        checked?: boolean;
        checkedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: import("./types").TreeNodeData[];
        e?: Event;
    }) => true;
    'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
    'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
    expand: (expandKeys: (string | number)[], data: {
        expanded?: boolean;
        expandedNodes: import("./types").TreeNodeData[];
        node?: import("./types").TreeNodeData;
        e?: Event;
    }) => true;
    'update:expandedKeys': (expandKeys: (string | number)[]) => true;
    dragStart: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
    dragEnd: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
    dragOver: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
    dragLeave: (ev: DragEvent, node: import("./types").TreeNodeData) => true;
    drop: (data: {
        e: DragEvent;
        dragNode: import("./types").TreeNodeData;
        dropNode: import("./types").TreeNodeData;
        dropPosition: number;
    }) => true;
}, string, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    data: import("./types").TreeNodeData[];
    multiple: boolean;
    animation: boolean;
    showLine: boolean;
    checkable: boolean | ((node: import("./types").TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean);
    draggable: boolean;
    checkStrictly: boolean;
    selectable: boolean | ((node: import("./types").TreeNodeData, info: {
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
export { Tree };
export { treeProps };
export default Tree;
