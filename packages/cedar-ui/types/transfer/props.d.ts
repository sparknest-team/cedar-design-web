import { PropType } from 'vue';
import type { TransferFilter, TransferItem, TransferTargetItem } from './types';
import type { TransferTargetAction } from './types';
export declare const transferProps: {
    /**
     * @zh 穿梭框的数据
     * @en Data of the transfer
     */
    data: {
        type: PropType<TransferItem[]>;
        default: () => never[];
    };
    /**
     * @zh 目标选择框中的值
     * @en Value in the target selection box
     * @vModel
     */
    modelValue: {
        type: PropType<TransferTargetItem[]>;
        default: undefined;
    };
    /**
     * @zh 目标选择框中默认的值（非受控状态）
     * @en The default value in the target selection box (uncontrolled state)
     */
    defaultValue: {
        type: PropType<TransferTargetItem[]>;
        default: () => never[];
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否启用虚拟滚动，适用于大数据。 */
    virtualScroll: BooleanConstructor;
    /** 是否允许拖拽调整右侧已选项顺序。 */
    targetDraggable: BooleanConstructor;
    /** 右侧操作方式：删除图标或完整操作菜单。 */
    targetOperation: {
        type: PropType<"remove" | "menu">;
        default: string;
    };
    clearText: StringConstructor;
    targetActions: {
        type: PropType<TransferTargetAction[]>;
        default: () => never[];
    };
    /**
     * @zh 是否显示搜索框
     * @en Whether to show the search input
     */
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** 是否开启源列表搜索。 */
    sourceFilterable: BooleanConstructor;
    /** 是否开启目标列表搜索。 */
    targetFilterable: BooleanConstructor;
    /** 搜索过滤函数。 */
    filter: {
        type: PropType<TransferFilter>;
        default: (value: string, item: TransferItem) => boolean;
    };
    sourceFilterPlaceholder: StringConstructor;
    targetFilterPlaceholder: StringConstructor;
    /** 是否在源列表中保留已经选中的选项。 */
    showSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    sourceTitle: StringConstructor;
    targetTitle: StringConstructor;
    /**
     * @zh 是否展示全选勾选框
     * @en Whether show select all checkbox on the header
     * @version 2.39.0
     */
    showSelectAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 源选择框和目标选择框的标题
     * @en The title of the source and target selection boxes
     */
    title: {
        type: PropType<string[]>;
        default: () => string[];
    };
    /**
     * @zh 源选择框的搜索框配置
     * @en Search box configuration for source selection box
     * @version 2.51.1
     */
    sourceSearchProps: {
        type: ObjectConstructor;
    };
    /**
     * @zh 目标选择框的搜索框配置
     * @en Search box configuration for target selection box
     * @version 2.51.1
     */
    targetSearchProps: {
        type: ObjectConstructor;
    };
};
