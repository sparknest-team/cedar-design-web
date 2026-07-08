import { ref, reactive, computed, useSlots } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import {
  dOptionValueAccountBasicInfo,
  dOptionValueSplitSymbol,
  dOptionValueLogout,
  dOptionValueMgmt,
  dOptionValueTenantSwitch,
} from './saas-header-nav-const'

export interface ISaasHeaderNavUserInfoAction {
  name: string
  value: string | number
  disabled?: boolean
}

export interface IMfeSdkProp {
  // TODO: 脱敏迁移 - 暂时注释 @nio-pow/mfe-vue3，后续替换为公有包
  Auth: any
  Env: any
  SaaSConf: any
}

export const saasHeaderNavUserInfoProps = {
  theme: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light',
  },

  fetch: {
    type: Object as PropType<{ get: any; post: any }>,
  },
  // 是否展示 登出 按钮
  showLogout: {
    type: [Boolean, String] as PropType<boolean | 'auto'>,
    default: 'auto',
  },
  // 是否展示 进入管理后台 按钮
  showToMgmt: {
    type: [Boolean, String] as PropType<boolean | 'auto'>,
    default: 'auto',
  },
  // 显示租户/企业切换入口
  showTenantSwitch: {
    type: Boolean,
    default: true,
  },
  // 显示个人中心入口
  showAccountBasicInfo: {
    type: Boolean,
    default: false,
  },
  // 选项按钮列表。优先级低于插槽#dropdownContent
  userActions: {
    type: Array as PropType<ISaasHeaderNavUserInfoAction[]>,
    default: () => [],
  },
  mfeSdk: {
    type: Object as PropType<IMfeSdkProp>,
  },
}

export type SaasHeaderNavUserInfoPropsType = ExtractPropTypes<typeof saasHeaderNavUserInfoProps>

export function useSaasHeaderNavUserInfo(props: SaasHeaderNavUserInfoPropsType, ctx: any) {
  const emit = ctx.emit
  const slots = useSlots()
  const state = reactive({
    // 是否是对外，处于安全考虑，默认对外
    isPowerCloudSaaS: props.mfeSdk?.Env?.isPowerCloudSaaS?.() ?? true,

    // 个人中心 按钮的value
    dOptionValueAccountBasicInfo,
    // 用于分割 action 内容的符号
    dOptionValueSplitSymbol,
    // 退出登录 按钮的value
    dOptionValueLogout,
    // 进入管理后台 按钮的value
    dOptionValueMgmt,
    // 切换租户/企业
    dOptionValueTenantSwitch,
  })
  // dropdown是展开还是关闭
  const isActive = ref(false)

  // 是否展示 登出 按钮。
  const isShowLogout = computed(() => {
    if (props.showLogout === 'auto') {
      // 自动判定。对内的话默认不展示，对外默认展示
      return state.isPowerCloudSaaS
    } else {
      return !!props.showLogout
    }
  })

  // 是否展示 进入管理后台 按钮。对内的话默认不展示，对外默认展示
  const isShowToMgmt = computed(() => {
    let res = false
    if (props.showToMgmt === 'auto') {
      // 自动判定。对内的话默认不展示，对外默认展示
      res = state.isPowerCloudSaaS
    } else {
      res = !!props.showToMgmt
    }

    // 若需要显示，则同时判定下是否有权限，无权限则不展示
    if (res && !props.mfeSdk?.Auth?.hasAppPermission?.('tenant-mgmt')) {
      res = false
    }

    return res
  })

  // dropdown是否有效， 只要有一个按钮，就认为dropdown有效
  const isShowDropdown = computed(() => {
    let result = false
    // 只要有一个按钮或者一个slot，就认为dropdown有效
    if (
      slots.dropdownContent ||
      (props.userActions && props.userActions.length) ||
      isShowLogout.value ||
      isShowToMgmt.value ||
      props.showAccountBasicInfo ||
      (props.showTenantSwitch && getTenantList().length > 1)
    ) {
      result = true
    }
    return result
  })

  function emitUserSelect(...dto: any[]) {
    emit('userSelect', ...dto)
  }

  // 获取用户头像
  function getUserAvatar() {
    return (
      props.mfeSdk?.Auth?.getUserInfo()?.profileUrl ||
      'https://xxx.com/pe-fe-statics/powercloud/user-avatar-default.png'
    )
  }

  // 获取展示的用户名
  function getUserNameTxt() {
    if (props.mfeSdk?.Auth) {
      const userInfo = props.mfeSdk?.Auth.getUserInfo() || {}
      return userInfo.name || userInfo.userId || ''
    }
    return ''
  }

  // 获取当前租户/企业信息
  function getCurTenantCode() {
    return props.mfeSdk?.Auth?.getUserCurLessee()?.lesseeCode || ''
  }

  // 获取可切换的企业/租户列表
  function getTenantList() {
    return props.mfeSdk?.Auth?.getUserLessees?.() || [props.mfeSdk?.Auth?.getUserCurLessee()]
  }

  // 点击按钮
  function handleActionClick(action: string, ev: Event) {
    emitUserSelect(action, ev)

    const actions = action.split(state.dOptionValueSplitSymbol)
    if (actions[0] === state.dOptionValueLogout) {
      // 异步通知后端退出登录（此时会携带 token）
      if (props.fetch && typeof props.fetch.post === 'function') {
        props.fetch.post('/bff/v1/user/logout')
      }
      // 本地清空 token
      props.mfeSdk?.Auth?.setTokens?.({})

      // 跳转登录页面
      setTimeout(() => {
        // reload会导致fetch请求被cancel，所以延迟reload
        window.location.reload()
      }, 100)
    } else if (actions[0] === state.dOptionValueMgmt) {
      // 跳转到管理后台
      // todo 判定权限
      // window.location.href = '/platform-mgmt'
      window.open('/platform-mgmt', '_blank')
    } else if (actions[0] === state.dOptionValueTenantSwitch) {
      // 切换租户/企业
      props.mfeSdk?.Auth?.triggerLesseeChange?.(actions[1])
    } else if (actions[0] === state.dOptionValueAccountBasicInfo) {
      // 进入个人中心
      window.open('/account/basic-info', '_blank')
    }
  }

  function handleActiveStatusChange(visible: boolean) {
    isActive.value = visible
  }

  return {
    state,
    isActive,
    isShowLogout,
    isShowToMgmt,
    isShowDropdown,
    emitUserSelect,
    getUserAvatar,
    getUserNameTxt,
    getTenantList,
    getCurTenantCode,
    handleActionClick,
    handleActiveStatusChange,
  }
}
