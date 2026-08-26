import type { PropType } from 'vue';
import type { FilterTreeNode, TreeFieldNames, TreeNodeData } from './types';
import type { VirtualListProps } from '../_components/virtual-list-v2/interface';
export declare const treeProps: {
    /**
     * @zh 尺寸
     * @en Size
     */
    size: {
        type: PropType<"xs" | "sm" | "md" | "lg" | "xl">;
        default: string;
    };
    /**
     * @zh 节点是否占据一行
     * @en Whether the node occupies a row
     */
    blockNode: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否默认展开父节点
     * @en Whether to expand the parent node by default
     */
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否支持多选
     * @en Whether to support multiple selection
     */
    multiple: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否在节点前添加复选框，从 `2.27.0` 开始支持函数格式
     * @en Whether to add a checkbox before the node, function format is supported since `2.27.0`
     */
    checkable: {
        type: PropType<boolean | ((node: TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        default: boolean;
    };
    /**
     * @zh 是否支持选择，从 `2.27.0` 开始支持函数格式
     * @en Whether to support selection, function format is supported since `2.27.0`
     * */
    selectable: {
        type: PropType<boolean | ((node: TreeNodeData, info: {
            level: number;
            isLeaf: boolean;
        }) => boolean)>;
        default: boolean;
    };
    /**
     * @zh 是否取消父子节点关联
     * @en Whether to cancel the parent-child node association
     * */
    checkStrictly: {
        type: BooleanConstructor;
    };
    /**
     * @zh 定制回填方式 <br/> all: 返回所有选中的节点  <br/> parent: 父子节点都选中时只返回父节点 <br/> child: 只返回子节点
     * @en Customized backfill method <br/> all: return all selected nodes <br/> parent: return only parent node when both parent and child nodes are selected <br/> child: return only child nodes
     * */
    checkedStrategy: {
        type: PropType<"all" | "parent" | "child">;
        default: string;
    };
    /**
     * @zh 默认选中的树节点
     * @en Tree node selected by default
     * */
    defaultSelectedKeys: {
        type: PropType<Array<string | number>>;
    };
    /**
     * @zh 选中的树节点
     * @en Selected tree node
     * @vModel
     */
    selectedKeys: {
        type: PropType<Array<string | number>>;
    };
    /**
     * @zh 默认选中复选框的树节点
     * @en Tree node with checkbox selected by default
     * */
    defaultCheckedKeys: {
        type: PropType<Array<string | number>>;
    };
    /**
     * @zh 选中复选框的树节点
     * @en Tree node with check box selected
     * @vModel
     */
    checkedKeys: {
        type: PropType<Array<string | number>>;
    };
    /**
     * @zh 默认展开的节点
     * @en Nodes expanded by default
     * */
    defaultExpandedKeys: {
        type: PropType<Array<string | number>>;
    };
    /**
     * @zh 展开的节点
     * @en Expanded node
     * @vModel
     */
    expandedKeys: {
        type: PropType<Array<string | number>>;
    };
    /**
     * @zh 传入`data`,生成对应的树结构
     * @en Pass in `data` to generate the corresponding tree structure
     * */
    data: {
        type: PropType<TreeNodeData[]>;
        default: () => never[];
    };
    /**
     * @zh 指定节点数据中的字段名
     * @en Specify the field name in the node data
     * */
    fieldNames: {
        type: PropType<TreeFieldNames>;
    };
    /**
     * @zh 是否展示连接线
     * @en Whether to display the connection line
     * */
    showLine: {
        type: BooleanConstructor;
    };
    /**
     * @zh 异步加载数据的回调，返回一个 `Promise`
     * @en A callback for loading data asynchronously, returning a `Promise`
     * */
    loadMore: {
        type: PropType<(node: TreeNodeData) => Promise<void>>;
    };
    /**
     * @zh 是否可以拖拽
     * @en Whether it can be dragged
     * */
    draggable: {
        type: BooleanConstructor;
    };
    /**
     * @zh 拖拽时是否允许在某节点上释放
     * @en Whether to allow release on a node when dragging
     * */
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
    /**
     * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动，[VirtualListProps](#VirtualListProps)
     * @en Pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#VirtualListProps)
     */
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
    /**
     * @zh 是否默认展开已选中节点的父节点
     * @en Whether to expand the parent node of the selected node by default
     * @version 2.9.0
     */
    defaultExpandSelected: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否默认展开已选中复选框节点的父节点
     * @en Whether to expand the parent node of the checked node by default
     * @version 2.9.0
     */
    defaultExpandChecked: {
        type: BooleanConstructor;
    };
    /**
     * @zh 是否自动展开已展开节点的父节点
     * @en Whether to automatically expand the parent node of the expanded node
     * @version 2.9.0
     */
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 半选状态的节点.仅在 checkable 且 checkStrictly 时生效
     * @en The keys of half checked. Only valid when checkable and checkStrictly
     * @version 2.19.0
     * @vModel
     */
    halfCheckedKeys: {
        type: PropType<Array<string | number>>;
    };
    /**
     * @zh 开启后 checkedKeys 只处理叶子节点，父节点状态由子节点决定（仅在 checkable 且 checkStrictly 为 false 时生效）
     * @en When enabled, checkedKeys is only for checked leaf nodes, and the status of the parent node is determined by the child node.(Only valid when checkable and checkStrictly is false)
     * @version 2.21.0
     */
    onlyCheckLeaf: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否开启展开时的过渡动效
     * @en Whether to enable expand transition animation
     * @version 2.21.0
     */
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 点击节点的时候触发的动作
     * @en The action triggered when the node is clicked
     * @version 2.27.0
     */
    actionOnNodeClick: {
        type: PropType<"expand">;
    };
    disableSelectActionOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
};
