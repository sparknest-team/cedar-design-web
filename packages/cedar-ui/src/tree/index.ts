import { withInstall } from '../_utils/global-config'
import _Tree from './Tree.vue'
import { treeProps } from './props'

export type { TreeNodeData, TreeFieldNames, TreeNodeValue } from './types'

const Tree = withInstall(_Tree, Object.assign(_Tree, {
}), { components: [_Tree] })

export type TreeInstance = InstanceType<typeof _Tree>

export const _TreeComponent = Tree

export { Tree }

export { treeProps }

export default Tree
export type TreeProps = import('vue').ExtractPublicPropTypes<typeof import('./props').treeProps>
