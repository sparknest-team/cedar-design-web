import { withInstall } from '../_utils/global-config'
import _Popover from './popover.vue'
import { popoverProps } from './props'

const Popover = withInstall(_Popover, Object.assign(_Popover, {
}), { components: [_Popover] })

export type PopoverInstance = InstanceType<typeof _Popover>
export type { PopoverProps } from './props'
export type { PopoverPlacement, PopoverTrigger } from './types'
export { Popover, popoverProps }
export const _PopoverComponent = Popover

export default Popover
