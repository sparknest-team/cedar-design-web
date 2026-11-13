import { withInstall } from '../_utils/global-config'
import _Tree from './Tree.vue'
import { treeProps } from './props'

export type { TreeNodeData, TreeFieldNames, TreeNodeValue, FilterTreeNode, CheckedStrategy, CheckableType, SelectableType, LoadMore, DropPosition } from './types'

const Tree: import('../_utils/global-config').ComponentWithInstall<typeof _Tree> = withInstall(_Tree, Object.assign(_Tree, {
}), { components: [_Tree] })

export type TreeInstance = InstanceType<typeof _Tree>

export const _TreeComponent: typeof Tree = Tree

export { Tree }

export { treeProps }

export default Tree
export type TreeProps = import('../_utils/public-props').CompatiblePublicProps<typeof import('./props').treeProps>
