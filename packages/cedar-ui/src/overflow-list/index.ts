import { withInstall } from '../_utils/global-config'
import _OverflowList from './overflow-list'
import { overflowListProps } from './props'

const OverflowList = withInstall(_OverflowList, Object.assign(_OverflowList, {
}), { components: [_OverflowList] })

export type OverflowListInstance = InstanceType<typeof _OverflowList>

export const _OverflowListComponent = OverflowList

export { OverflowList }

export { overflowListProps }

export default OverflowList
