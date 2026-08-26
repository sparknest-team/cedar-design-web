import { PropType } from 'vue';
import type { TreeFieldNames, TreeNodeData, FilterTreeNode, DropPosition, TreeNodeKey, CheckedStrategy, Node } from './types';
import type { VirtualListProps, ScrollIntoViewOptions } from '../_components/virtual-list-v2/interface';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
        type: PropType<boolean | ((node: TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        default: boolean;
    };
    selectable: {
        type: PropType<boolean | ((node: TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        default: boolean;
    };
    checkStrictly: {
        type: BooleanConstructor;
    };
    checkedStrategy: {
        type: PropType<"all" | "parent" | "child">;
        default: string;
    };
    defaultSelectedKeys: {
        type: PropType<Array<string | number>>;
    };
    selectedKeys: {
        type: PropType<Array<string | number>>;
    };
    defaultCheckedKeys: {
        type: PropType<Array<string | number>>;
    };
    checkedKeys: {
        type: PropType<Array<string | number>>;
    };
    defaultExpandedKeys: {
        type: PropType<Array<string | number>>;
    };
    expandedKeys: {
        type: PropType<Array<string | number>>;
    };
    data: {
        type: PropType<TreeNodeData[]>;
        default: () => never[];
    };
    fieldNames: {
        type: PropType<TreeFieldNames>;
    };
    showLine: {
        type: BooleanConstructor;
    };
    loadMore: {
        type: PropType<(node: TreeNodeData) => Promise<void>>;
    };
    draggable: {
        type: BooleanConstructor;
    };
    allowDrop: {
        type: PropType<(options: {
            dropNode: TreeNodeData;
            dropPosition: -1 | 0 | 1;
        }) => boolean>;
    };
    filterTreeNode: {
        type: PropType<FilterTreeNode>;
    };
    searchValue: {
        type: StringConstructor;
        default: string;
    };
    virtualListProps: {
        type: PropType<VirtualListProps>;
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
        type: PropType<Array<string | number>>;
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
        type: PropType<"expand">;
    };
    disableSelectActionOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    classNames: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ((node: TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean);
    })[]>;
    visibleTreeNodeList: import("vue").ComputedRef<Node[]>;
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
            readonly checkable: boolean | ((node: TreeNodeData, info: {
                level: number;
                isLeaf: boolean;
            }) => boolean);
            readonly draggable: boolean;
            readonly checkStrictly: boolean;
            readonly selectable: boolean | ((node: TreeNodeData, info: {
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
            readonly loadMore: ((node: TreeNodeData) => Promise<void>) | undefined;
            readonly selectedKeys: (string | number)[] | undefined;
            readonly defaultSelectedKeys: (string | number)[] | undefined;
            readonly expandedKeys: (string | number)[] | undefined;
            readonly defaultExpandedKeys: (string | number)[] | undefined;
            readonly checkedKeys: (string | number)[] | undefined;
            readonly filterTreeNode: FilterTreeNode | undefined;
            readonly allowDrop: ((options: {
                dropNode: TreeNodeData;
                dropPosition: -1 | 0 | 1;
            }) => boolean) | undefined;
            readonly defaultCheckedKeys: (string | number)[] | undefined;
            readonly halfCheckedKeys: (string | number)[] | undefined;
            readonly actionOnNodeClick: "expand" | undefined;
            readonly onDrop: ((data: {
                e: DragEvent;
                dragNode: TreeNodeData;
                dropNode: TreeNodeData;
                dropPosition: number;
            }) => any) | undefined;
            readonly onSelect: ((selectedKeys: (string | number)[], data: {
                selected?: boolean;
                selectedNodes: TreeNodeData[];
                node?: TreeNodeData;
                e?: Event;
            }) => any) | undefined;
            readonly onCheck: ((checkedKeys: (string | number)[], data: {
                checked?: boolean;
                checkedNodes: TreeNodeData[];
                node?: TreeNodeData;
                halfCheckedKeys: (string | number)[];
                halfCheckedNodes: TreeNodeData[];
                e?: Event;
            }) => any) | undefined;
            readonly "onUpdate:selectedKeys": ((selectedKeys: (string | number)[]) => any) | undefined;
            readonly onExpand: ((expandKeys: (string | number)[], data: {
                expanded?: boolean;
                expandedNodes: TreeNodeData[];
                node?: TreeNodeData;
                e?: Event;
            }) => any) | undefined;
            readonly "onUpdate:expandedKeys": ((expandKeys: (string | number)[]) => any) | undefined;
            readonly onDragStart: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
            readonly onDragOver: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
            readonly onDragLeave: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
            readonly onDragEnd: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
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
            key: TreeNodeKey;
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
            parentKey?: TreeNodeKey | undefined;
            pathParentKeys: TreeNodeKey[];
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
        flattenTreeData: Node[];
        key2TreeNode: import("./types").Key2TreeNode;
        checkedKeys: TreeNodeKey[];
        indeterminateKeys: TreeNodeKey[];
        selectedKeys: TreeNodeKey[];
        expandedKeys: TreeNodeKey[];
        loadingKeys: TreeNodeKey[];
        currentExpandKeys: TreeNodeKey[];
        onLoadMore: ((key: TreeNodeKey) => Promise<void>) | undefined;
        filterTreeNode: FilterTreeNode | undefined;
        onCheck: (checked: boolean, key: TreeNodeKey, e?: Event) => void;
        onSelect: (key: TreeNodeKey, e: Event) => void;
        onExpand: (expanded: boolean, key: TreeNodeKey, e?: Event) => void;
        onExpandEnd: (key: TreeNodeKey) => void;
        allowDrop: (key: TreeNodeKey, dropPosition: DropPosition) => boolean;
        onDragStart: (key: TreeNodeKey, e: DragEvent) => void;
        onDragEnd: (key: TreeNodeKey, e: DragEvent) => void;
        onDragOver: (key: TreeNodeKey, e: DragEvent) => void;
        onDragLeave: (key: TreeNodeKey, e: DragEvent) => void;
        onDrop: (key: TreeNodeKey, dropPosition: number, e: DragEvent) => void;
    };
    virtualListRef: import("vue").Ref<any, any>;
    computedSelectedKeys: import("vue").ComputedRef<TreeNodeKey[]>;
    computedExpandedKeys: import("vue").ComputedRef<TreeNodeKey[]>;
    computedCheckedKeys: import("vue").ComputedRef<TreeNodeKey[]>;
    computedIndeterminateKeys: import("vue").ComputedRef<TreeNodeKey[]>;
    getPublicCheckedKeys: (rawCheckedKeys: TreeNodeKey[], rawCheckedStrategy?: "all" | "parent" | "child") => TreeNodeKey[];
    getNodes: (keys: TreeNodeKey[]) => (TreeNodeData | undefined)[];
    internalCheckNodes: (keys: TreeNodeKey[], checked: boolean, targetKey?: TreeNodeKey) => void;
    internalSetCheckedKeys: (keys: TreeNodeKey[]) => void;
    internalSelectNodes: (keys: TreeNodeKey[], selected: boolean, targetKey?: TreeNodeKey) => void;
    internalSetSelectedKeys: (keys: TreeNodeKey[]) => void;
    internalExpandNodes: (keys: TreeNodeKey[], expanded: boolean, targetKey?: TreeNodeKey) => void;
    internalSetExpandedKeys: (keys: TreeNodeKey[]) => void;
}, {}, {}, {
    toggleCheck(key: TreeNodeKey, e: Event): void;
    /**
     * @zh 虚拟列表滚动某个元素
     * @en Virtual list scroll to an element
     * @param {{ index?: number; key?: number | string; align: 'auto' | 'top' | 'bottom'}} options
     * @public
     */
    scrollIntoView(options: ScrollIntoViewOptions): void;
    /**
     * @zh 获取选中的节点
     * @en Get selected nodes
     * @returns {TreeNodeData[]}
     * @public
     * @version 2.19.0
     */
    getSelectedNodes(): (TreeNodeData | undefined)[];
    /**
     * @zh 获取选中复选框的节点。支持传入 `checkedStrategy`，没有传则取组件的配置。
     * @en Get checked nodes. Supports passing in `checkedStrategy`, if not passed, the configuration of the component is taken.
     * @param { checkedStrategy?: 'all' | 'parent' | 'child'; includeHalfChecked?: boolean; } options
     * @returns {TreeNodeData[]}
     * @public
     * @version 2.19.0
     */
    getCheckedNodes(options?: {
        checkedStrategy?: CheckedStrategy;
        includeHalfChecked?: boolean;
    }): (TreeNodeData | undefined)[];
    /**
     * @zh 获取复选框半选的节点
     * @en Get half checked nodes
     * @returns {TreeNodeData[]}
     * @public
     * @version 2.19.0
     */
    getHalfCheckedNodes(): (TreeNodeData | undefined)[];
    /**
     * @zh 获取展开的节点
     * @en Get expanded nodes
     * @returns {TreeNodeData[]}
     * @public
     * @version 2.19.0
     */
    getExpandedNodes(): (TreeNodeData | undefined)[];
    /**
     * @zh 设置全部节点的复选框状态
     * @en Set the checkbox state of all nodes
     * @param { boolean } checked
     * @public
     * @version 2.20.0
     */
    checkAll(checked?: boolean): void;
    /**
     * @zh 设置指定节点的复选框状态
     * @en Sets the checkbox state of the specified node
     * @param { TreeNodeKey | TreeNodeKey[] } key
     * @param { boolean } checked
     * @param { boolean } onlyCheckLeaf
     * @public
     * @version 2.20.0，onlyCheckLeaf from 2.21.0
     */
    checkNode(key: TreeNodeKey | TreeNodeKey[], checked?: boolean, onlyCheckLeaf?: boolean): void;
    /**
     * @zh 设置全部节点的选中状态
     * @en Set the selected state of all nodes
     * @param { boolean } selected
     * @public
     * @version 2.20.0
     */
    selectAll(selected?: boolean): void;
    /**
     * @zh 设置指定节点的选中状态
     * @en Sets the selected state of the specified node
     * @param { TreeNodeKey | TreeNodeKey[] } key
     * @param { boolean } selected
     * @public
     * @version 2.20.0
     */
    selectNode(key: TreeNodeKey | TreeNodeKey[], selected?: boolean): void;
    /**
     * @zh 设置全部节点的展开状态
     * @en Set the expanded state of all nodes
     * @param { boolean } expanded
     * @public
     * @version 2.20.0
     */
    expandAll(expanded?: boolean): void;
    /**
     * @zh 设置指定节点的展开状态
     * @en Sets the expanded state of the specified node
     * @param { TreeNodeKey | TreeNodeKey[] } key
     * @param { boolean } expanded
     * @public
     * @version 2.20.0
     */
    expandNode(key: TreeNodeKey | TreeNodeKey[], expanded?: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 点击树节点时触发
     * @en Triggered when the tree node is clicked
     * @param {Array<string | number>} selectedKeys
     * @param {{ selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }} data
     */
    select: (selectedKeys: (string | number)[], data: {
        selected?: boolean;
        selectedNodes: TreeNodeData[];
        node?: TreeNodeData;
        e?: Event;
    }) => true;
    'update:selectedKeys': (selectedKeys: (string | number)[]) => true;
    /**
     * @zh 点击树节点复选框时触发。`halfCheckedKeys` 和 `halfCheckedNodes` 从 `2.19.0` 开始支持。
     * @en Triggered when the tree node checkbox is clicked. `halfCheckedKeys` and `halfCheckedNodes` support from `2.19.0`.
     * @param {Array<string | number>} checkedKeys
     * @param {{ checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedKeys: (string | number)[]; halfCheckedNodes: TreeNodeData[]; }} data
     */
    check: (checkedKeys: (string | number)[], data: {
        checked?: boolean;
        checkedNodes: TreeNodeData[];
        node?: TreeNodeData;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: TreeNodeData[];
        e?: Event;
    }) => true;
    'update:checkedKeys': (checkedKeys: (string | number)[]) => true;
    'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true;
    /**
     * @zh 展开/关闭
     * @en Expand/close
     * @param {Array<string | number>} expandKeys
     * @param {{ expanded?: boolean; expandNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }} data
     */
    expand: (expandKeys: (string | number)[], data: {
        expanded?: boolean;
        expandedNodes: TreeNodeData[];
        node?: TreeNodeData;
        e?: Event;
    }) => true;
    'update:expandedKeys': (expandKeys: (string | number)[]) => true;
    /**
     * @zh 节点开始拖拽
     * @en Node starts dragging
     * @param {DragEvent} ev
     * @param {TreeNodeData} node
     */
    dragStart: (ev: DragEvent, node: TreeNodeData) => true;
    /**
     * @zh 节点结束拖拽
     * @en Node end drag
     * @param {DragEvent} ev
     * @param {TreeNodeData} node
     */
    dragEnd: (ev: DragEvent, node: TreeNodeData) => true;
    /**
     * @zh 节点被拖拽至可释放目标
     * @en The node is dragged to the releasable target
     * @param {DragEvent} ev
     * @param {TreeNodeData} node
     */
    dragOver: (ev: DragEvent, node: TreeNodeData) => true;
    /**
     * @zh 节点离开可释放目标
     * @en Node leaves to release the target
     * @param {DragEvent} ev
     * @param {TreeNodeData} node
     */
    dragLeave: (ev: DragEvent, node: TreeNodeData) => true;
    /**
     * @zh 节点在可释放目标上释放
     * @en The node is released on a releasable target
     * @param {{ e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }} data
     */
    drop: (data: {
        e: DragEvent;
        dragNode: TreeNodeData;
        dropNode: TreeNodeData;
        dropPosition: number;
    }) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"xs" | "sm" | "md" | "lg" | "xl">;
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
        type: PropType<boolean | ((node: TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        default: boolean;
    };
    selectable: {
        type: PropType<boolean | ((node: TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        default: boolean;
    };
    checkStrictly: {
        type: BooleanConstructor;
    };
    checkedStrategy: {
        type: PropType<"all" | "parent" | "child">;
        default: string;
    };
    defaultSelectedKeys: {
        type: PropType<Array<string | number>>;
    };
    selectedKeys: {
        type: PropType<Array<string | number>>;
    };
    defaultCheckedKeys: {
        type: PropType<Array<string | number>>;
    };
    checkedKeys: {
        type: PropType<Array<string | number>>;
    };
    defaultExpandedKeys: {
        type: PropType<Array<string | number>>;
    };
    expandedKeys: {
        type: PropType<Array<string | number>>;
    };
    data: {
        type: PropType<TreeNodeData[]>;
        default: () => never[];
    };
    fieldNames: {
        type: PropType<TreeFieldNames>;
    };
    showLine: {
        type: BooleanConstructor;
    };
    loadMore: {
        type: PropType<(node: TreeNodeData) => Promise<void>>;
    };
    draggable: {
        type: BooleanConstructor;
    };
    allowDrop: {
        type: PropType<(options: {
            dropNode: TreeNodeData;
            dropPosition: -1 | 0 | 1;
        }) => boolean>;
    };
    filterTreeNode: {
        type: PropType<FilterTreeNode>;
    };
    searchValue: {
        type: StringConstructor;
        default: string;
    };
    virtualListProps: {
        type: PropType<VirtualListProps>;
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
        type: PropType<Array<string | number>>;
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
        type: PropType<"expand">;
    };
    disableSelectActionOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onDrop?: ((data: {
        e: DragEvent;
        dragNode: TreeNodeData;
        dropNode: TreeNodeData;
        dropPosition: number;
    }) => any) | undefined;
    onSelect?: ((selectedKeys: (string | number)[], data: {
        selected?: boolean;
        selectedNodes: TreeNodeData[];
        node?: TreeNodeData;
        e?: Event;
    }) => any) | undefined;
    onCheck?: ((checkedKeys: (string | number)[], data: {
        checked?: boolean;
        checkedNodes: TreeNodeData[];
        node?: TreeNodeData;
        halfCheckedKeys: (string | number)[];
        halfCheckedNodes: TreeNodeData[];
        e?: Event;
    }) => any) | undefined;
    "onUpdate:selectedKeys"?: ((selectedKeys: (string | number)[]) => any) | undefined;
    onExpand?: ((expandKeys: (string | number)[], data: {
        expanded?: boolean;
        expandedNodes: TreeNodeData[];
        node?: TreeNodeData;
        e?: Event;
    }) => any) | undefined;
    "onUpdate:expandedKeys"?: ((expandKeys: (string | number)[]) => any) | undefined;
    onDragStart?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    onDragOver?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    onDragLeave?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    onDragEnd?: ((ev: DragEvent, node: TreeNodeData) => any) | undefined;
    "onUpdate:checkedKeys"?: ((checkedKeys: (string | number)[]) => any) | undefined;
    "onUpdate:halfCheckedKeys"?: ((halfCheckedKeys: (string | number)[]) => any) | undefined;
}>, {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    data: TreeNodeData[];
    multiple: boolean;
    animation: boolean;
    showLine: boolean;
    checkable: boolean | ((node: TreeNodeData, info: {
        level: number;
        isLeaf: boolean;
    }) => boolean);
    draggable: boolean;
    checkStrictly: boolean;
    selectable: boolean | ((node: TreeNodeData, info: {
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
}, {}, {
    VirtualList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        data: {
            type: PropType<any[]>;
            default: () => never[];
        };
        threshold: {
            type: NumberConstructor;
            default: number;
        };
        itemKey: {
            type: PropType<string | ((item: unknown) => string | number)>;
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
            type: PropType<any[]>;
            default: () => never[];
        };
        threshold: {
            type: NumberConstructor;
            default: number;
        };
        itemKey: {
            type: PropType<string | ((item: unknown) => string | number)>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
