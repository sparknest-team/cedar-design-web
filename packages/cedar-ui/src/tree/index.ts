import { withInstall } from '../_utils/global-config'
import _Tree from './tree.vue'
import { treeProps } from './props'

export type { TreeNodeData, TreeFieldNames } from './types'

const Tree = withInstall(_Tree, Object.assign(_Tree, {
}), { components: [_Tree] })

export type TreeInstance = InstanceType<typeof _Tree>

export const _TreeComponent = Tree

export { Tree }

export { treeProps }

export default Tree
