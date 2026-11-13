import { withInstall } from '../_utils/global-config'
import _Scrollbar from './Scrollbar.vue'
import { scrollbarProps } from './props'

const Scrollbar: import('../_utils/global-config').ComponentWithInstall<typeof _Scrollbar> = withInstall(_Scrollbar, Object.assign(_Scrollbar, {
}), { components: [_Scrollbar] })

export type ScrollbarInstance = InstanceType<typeof _Scrollbar>
export type { ScrollbarProps } from './types'

export const _ScrollbarComponent: typeof Scrollbar = Scrollbar

export { Scrollbar }

export { scrollbarProps }

export default Scrollbar
