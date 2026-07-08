// header的默认高度
export const headerNavDefaultHeight = '64px'

// 切换企业/租户
export const dOptionValueSplitSymbol = ':::'

// 个人中心 按钮的value
export const dOptionValueAccountBasicInfo = 'accountBasicInfo'
// 退出登录 按钮的value
export const dOptionValueLogout = 'logout'
// 进入管理后台 按钮的value
export const dOptionValueMgmt = 'mgmt'
// 切换企业/租户，按钮的value
export const dOptionValueTenantSwitch = 'tenantSwitch'

export type TSaasHeaderNavObjectOrArr<T> = Record<any, T> | T[] | Record<any, any>

export function returnObjWithType<EL extends string | number, Options extends TSaasHeaderNavObjectOrArr<EL>>(
  options: Options,
): Options {
  return options
}
