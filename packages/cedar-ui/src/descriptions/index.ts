import { withInstall } from '../_utils/global-config'
import _Descriptions from './descriptions'
import _DescriptionsItem from './DescriptionsItem.vue'
import { descriptionsItemProps, descriptionsProps } from './props'

const Descriptions = withInstall(_Descriptions, Object.assign(_Descriptions, {
  DescriptionsItem: _DescriptionsItem,
}), { components: [_Descriptions, _DescriptionsItem] })

export type DescriptionsInstance = InstanceType<typeof _Descriptions>
export type DescriptionsItemInstance = InstanceType<typeof _DescriptionsItem>
export type { DescriptionsAlign, DescriptionsItemProps, DescriptionsProps } from './props'

export type { DescData } from './types'
export { Descriptions, descriptionsItemProps, descriptionsProps }
export const _DescriptionsComponent = Descriptions
export const _DescriptionsItemComponent = _DescriptionsItem

export { _DescriptionsItem as DescriptionsItem }

export default Descriptions
