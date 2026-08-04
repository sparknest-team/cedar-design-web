<template>
  <LayoutHeader
    :data-fixed="fixed"
    :data-theme="theme"
    :style="'--header-nav-height:' + headerHeight"
    class="c-saas-header-nav-wrapper"
  >
    <div class="c-saas-header-nav-left">
      <!-- 租户信息 -->
      <div class="c-saas-header-nav-left-inner">
        <template v-if="showTenantInfo">
          <!-- 租户logo -->
          <img v-if="state.tenantLogo" :src="state.tenantLogo" class="c-saas-header-nav-tenant-logo" />
          <!-- 租户名称 -->
          <div class="c-saas-header-nav-tenant-name">
            {{ state.tenantName }}
          </div>
        </template>
        <div v-if="slots['left-prefix']" class="c-saas-header-nav-left-prefix">
          <slot name="left-prefix"></slot>
        </div>
      </div>
    </div>

    <div class="c-saas-header-nav-right">
      <slot name="user-info-prefix"></slot>

      <Tooltip content="应用列表" position="bottom">
        <a v-if="showWorkbench" class="user-workbench" href="/account/workbench" target="_blank">
          <img src="https://xxx.com/pe-fe-statics/46463535-8c05-46af-84f4-db09fd2ee42d.svg" />
        </a>
      </Tooltip>

      <!-- todo 为 user-info slot 提供 userInfo 数据内容 -->
      <slot name="user-info">
        <SaasHeaderNavUserInfo
          :fetch="fetch"
          :mfeSdk="mfeSdk"
          :showAccountBasicInfo="showAccountBasicInfo"
          :showLogout="showLogout"
          :showTenantSwitch="showTenantSwitch"
          :showToMgmt="showToMgmt"
          :theme="theme"
          :userActions="userActions"
          @userSelect="emitUserSelect"
        >
          <template v-if="$slots.userDropdownContent" #dropdownContent>
            <slot name="userDropdownContent"></slot>
          </template>
        </SaasHeaderNavUserInfo>
      </slot>
    </div>
  </LayoutHeader>
</template>

<script lang="ts">
import { defineComponent, reactive, useSlots } from 'vue'
import Tooltip from '../tooltip'
import { LayoutHeader } from '../layout'
import { MenuOption } from '../menu'
import SaasHeaderNavUserInfo from './saas-header-nav-user-info.vue'
import { headerNavDefaultHeight } from './saas-header-nav-const'
import { saasHeaderNavUserInfoProps } from './use-saas-header-nav-user-info'

export default defineComponent({
  name: 'SaasHeaderNav',
  components: {
    LayoutHeader,
    MenuOption,
    Tooltip,
    SaasHeaderNavUserInfo,
  },
  props: {
    ...saasHeaderNavUserInfoProps,

    // 针对window悬浮定位
    fixed: {
      type: Boolean,
      default: true,
    },
    // header的高度，
    headerHeight: {
      type: String,
      default: headerNavDefaultHeight,
    },
    // 显示租户信息（名称+logo）
    showTenantInfo: {
      type: Boolean,
      default: true,
    },
    // 显示工作台入口
    showWorkbench: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['userSelect'],

  setup(props, ctx) {
    const slots = useSlots()
    const emit = ctx.emit
    const state = reactive({
      tenantLogo: '',
      tenantName: props.mfeSdk?.Auth?.getUserCurLessee?.()?.lesseeName || '',
    })

    function emitUserSelect(...dto: any[]) {
      emit('userSelect', ...dto)
    }

    // 获取租户自定义配置信息
    props.mfeSdk?.SaaSConf?.getCurTenantConf()?.then((conf: any) => {
      state.tenantLogo = conf?.enterpriseLogo || ''
      state.tenantName = conf?.enterpriseDisplayName || state.tenantName
    })

    return {
      state,
      slots,
      emitUserSelect,
    }
  },
})
</script>
