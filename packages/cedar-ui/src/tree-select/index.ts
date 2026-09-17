import { withInstall } from '../_utils/global-config'
import _TreeSelect from './TreeSelect.vue'
import { treeSelectProps } from './props'

const TreeSelect = withInstall(_TreeSelect, Object.assign(_TreeSelect, {
}), { components: [_TreeSelect] })

export type TreeSelectInstance = InstanceType<typeof _TreeSelect>

export const _TreeSelectComponent = TreeSelect

export { TreeSelect }

export { treeSelectProps }

export default TreeSelect
export type TreeSelectProps = import('vue').ExtractPublicPropTypes<typeof import('./props').treeSelectProps>
