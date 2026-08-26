import { Key2TreeNode, Node, TreeNodeKey } from '../types';
export declare function isNodeCheckable(node: Node): boolean;
export declare function getCheckedStateByCheck(options: {
    node: Node;
    checked: boolean;
    checkedKeys: TreeNodeKey[];
    indeterminateKeys: TreeNodeKey[];
    checkStrictly?: boolean;
}): TreeNodeKey[][];
export declare function getCheckedStateByInitKeys(options: {
    initCheckedKeys: TreeNodeKey[];
    key2TreeNode: Key2TreeNode;
    checkStrictly?: boolean;
    onlyCheckLeaf?: boolean;
}): TreeNodeKey[][];
