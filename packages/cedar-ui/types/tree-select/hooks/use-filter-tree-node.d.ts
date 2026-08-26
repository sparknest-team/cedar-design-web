import { TreeFieldNames, Node, TreeNodeData } from '../../tree/types';
import { FilterTreeNode } from '../types';
export default function useFilterTreeNode(props: {
    searchValue: string;
    flattenTreeData: Node[];
    filterMethod?: FilterTreeNode;
    disableFilter?: boolean;
    fieldNames: TreeFieldNames | undefined;
}): {
    isEmptyFilterResult: import("vue").ComputedRef<boolean | undefined>;
    filterTreeNode: import("vue").ComputedRef<((node: TreeNodeData) => boolean) | undefined>;
};
