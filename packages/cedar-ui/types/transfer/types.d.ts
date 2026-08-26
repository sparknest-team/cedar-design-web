export type TransferValue = string | number;
export type TransferFixed = 'left' | 'right';
export type TransferTargetOperation = 'remove' | 'menu';
/** 右侧列表的完整状态。数组顺序即展示顺序。 */
export interface TransferTargetItem {
    value: TransferValue;
    /** 重命名后的标签；未设置时使用 data 中的标签。 */
    label?: string;
    /** 冻结方向。 */
    fixed?: TransferFixed;
}
export interface TransferItem {
    /**
     * @zh 选项的值
     * @en Option value
     */
    value: TransferValue;
    /**
     * @zh 选项的标签
     * @en Option label
     */
    label: string;
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled?: boolean;
    /** 源列表中的分组标题。相同分组应相邻。 */
    group?: string;
    /** 选项说明，默认通过信息图标展示。 */
    tip?: string | (() => VNodeChild);
    /** 是否为必选项；必选项不能删除。 */
    required?: boolean;
    /** 当前冻结方向；源数据通常无需设置，由右侧状态覆盖。 */
    fixed?: TransferFixed;
}
export interface TransferTargetAction {
    key: string;
    label: string;
    danger?: boolean;
    disabled?: boolean | ((item: TransferItem) => boolean);
}
export type TransferFilter = (searchValue: string, item: TransferItem, type: 'source' | 'target') => boolean;
export interface DataInfo {
    data: TransferItem[];
    allValidValues: TransferValue[];
    selected: TransferValue[];
    validSelected: TransferValue[];
}
import type { VNodeChild } from 'vue';
