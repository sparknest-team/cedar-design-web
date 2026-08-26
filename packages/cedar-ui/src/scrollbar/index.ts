import { withInstall } from '../_utils/global-config'
import _Scrollbar from './scrollbar.vue'
import { scrollbarProps } from './props'

const Scrollbar = withInstall(_Scrollbar, Object.assign(_Scrollbar, {
}), { components: [_Scrollbar] })

export type ScrollbarInstance = InstanceType<typeof _Scrollbar>
export type { ScrollbarProps } from './types'

export const _ScrollbarComponent = Scrollbar

export { Scrollbar }

export { scrollbarProps }

export default Scrollbar
