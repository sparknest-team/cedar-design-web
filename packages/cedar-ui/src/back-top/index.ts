import { withInstall } from '../_utils/global-config'
import _BackTop from './back-top.vue'
import { backTopProps } from './props'

const BackTop = withInstall(_BackTop, Object.assign(_BackTop, {
}), { components: [_BackTop] })

export type BackTopInstance = InstanceType<typeof _BackTop>
export type { BackTopProps } from './props'
export { BackTop, backTopProps }
export const _BackTopComponent = BackTop

export default BackTop
