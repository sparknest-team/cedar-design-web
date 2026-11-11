import { withInstall } from '../_utils/global-config'
import _Popover from './Popover.vue'
import { popoverProps } from './props'

const Popover = withInstall(_Popover, Object.assign(_Popover, {
}), { components: [_Popover] })

export type PopoverInstance = InstanceType<typeof _Popover>
export type { PopoverPlacement, PopoverProps, PopoverTrigger } from './props'
export { Popover, popoverProps }
export const _PopoverComponent = Popover

export default Popover
