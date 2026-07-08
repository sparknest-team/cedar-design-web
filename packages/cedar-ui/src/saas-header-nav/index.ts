import type { App } from 'vue'
import _SaasHeaderNav from './saas-header-nav.vue'
import _SaasHeaderNavUserInfo from './saas-header-nav-user-info.vue'
import { getComponentPrefix } from '../_utils/global-config'
import * as saasHeaderNavConst from './saas-header-nav-const'
import * as saasUseUserInfoObj from './use-saas-header-nav-user-info'
import type { ISaasHeaderNavUserInfoAction, SaasHeaderNavUserInfoPropsType } from './use-saas-header-nav-user-info'
import type { TSaasHeaderNavObjectOrArr } from './saas-header-nav-const'

export const SaasHeaderNav = Object.assign(_SaasHeaderNav, {
  UserInfo: _SaasHeaderNavUserInfo,
  // ts的类型声明要单独export出去。常量，util函数等可以放在SaasHeaderNav这个命名空间里
  // 把变量也导出去
  ...saasHeaderNavConst,
  ...saasUseUserInfoObj,

  install: (app: App, options?: any) => {
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _SaasHeaderNavUserInfo.name, _SaasHeaderNavUserInfo)
    app.component(componentPrefix + _SaasHeaderNav.name, _SaasHeaderNav)
  },
})

export type SaasHeaderNavInstance = InstanceType<typeof _SaasHeaderNav>
export type SaasHeaderNavUserInfoInstance = InstanceType<typeof _SaasHeaderNavUserInfo>

// ts的类型声明要单独export出去。常量，util函数等可以放在SaasHeaderNav这个命名空间里
export { ISaasHeaderNavUserInfoAction, SaasHeaderNavUserInfoPropsType, TSaasHeaderNavObjectOrArr }

export { _SaasHeaderNavUserInfo as SaasHeaderNavUserInfo }

export default SaasHeaderNav
