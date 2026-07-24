<template>
  <Dropdown
    v-if="isShowDropdown"
    position="br"
    trigger="hover"
    id="cedarSaaSHeaderNavUserInfoDropdown"
    :class="`c-saas-header-user-info-dropdown-theme-${theme}`"
    @select="handleActionClick"
    @popup-visible-change="handleActiveStatusChange"
  >
    <div class="c-saas-header-user-info-wrapper has-actions" :data-theme="theme">
      <!-- 用户头像 -->
      <div class="c-saas-header-user-avatar">
        <img class="c-saas-header-user-avatar-img" :src="getUserAvatar()" />
      </div>

      <!-- 用户名称 -->
      <div class="c-saas-header-user-name">{{ getUserNameTxt() }}</div>

      <IconUp v-if="isActive" class="c-saas-header-user-info-arrow" />
      <IconDown v-else class="c-saas-header-user-info-arrow" />
    </div>

    <template #content>
      <!-- 用户自定义下拉框操作 -->
      <slot name="dropdownContent">
        <template v-if="!!(userActions && userActions.length)">
          <Doption v-for="(item, index) in userActions" :key="index" :value="item.value" :disabled="item.disabled">
            {{ item.name || item.value }}
          </Doption>
        </template>
      </slot>

      <Doption v-if="showAccountBasicInfo" :value="baseState.dOptionValueAccountBasicInfo"> 个人中心 </Doption>

      <Doption v-if="isShowToMgmt" :value="baseState.dOptionValueMgmt"> 进入管理后台 </Doption>

      <!-- 当配置了租户/企业切换功能，且可切换列表长度大于 1 时，才展示租户/企业切换下拉框 -->
      <Dsubmenu v-if="curShowTenantSwitch" trigger="hover" popup-container="#cedarSaaSHeaderNavUserInfoDropdown">
        切换企业
        <template #content>
          <Doption
            v-for="item of getTenantList()"
            :key="item.lesseeCode"
            :value="baseState.dOptionValueTenantSwitch + baseState.dOptionValueSplitSymbol + item.lesseeCode"
            :style="{
              color: item.lesseeCode === getCurTenantCode() ? 'rgb(var(--primary-6))' : undefined,
            }"
            >{{ item.lesseeName }}</Doption
          >
        </template>
      </Dsubmenu>

      <Doption v-if="isShowLogout" :value="baseState.dOptionValueLogout"> 退出登录 </Doption>
    </template>
  </Dropdown>

  <div v-else class="c-saas-header-user-info-wrapper" :data-theme="theme">
    <div class="c-saas-header-user-avatar">
      <img
        class="c-saas-header-user-avatar-img"
        src="https://xxx.com/pe-fe-statics/powercloud/user-avatar-default.png"
      />
    </div>

    <div class="c-saas-header-user-name">
      {{ getUserNameTxt() }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import Dropdown, { Doption, Dsubmenu } from '../dropdown'
import { IconDown, IconUp } from '../icon'
import { saasHeaderNavUserInfoProps, useSaasHeaderNavUserInfo } from './use-saas-header-nav-user-info'

export default defineComponent({
  name: 'SaasHeaderNavUserInfo',
  components: {
    Dropdown,
    Doption,
    Dsubmenu,
    IconDown,
    IconUp,
  },
  props: {
    ...saasHeaderNavUserInfoProps,
  },
  emits: ['userSelect'],
  setup(props, ctx) {
    const {
      state: baseState,
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
    } = useSaasHeaderNavUserInfo(props, ctx)

    const state = reactive({})

    const curShowTenantSwitch = computed(() => {
      return props.showTenantSwitch && getTenantList().length > 1
    })

    return {
      state,

      baseState,
      isActive,
      isShowLogout,
      isShowToMgmt,
      isShowDropdown,
      curShowTenantSwitch,
      emitUserSelect,
      getUserAvatar,
      getUserNameTxt,
      getTenantList,
      getCurTenantCode,
      handleActionClick,
      handleActiveStatusChange,
    }
  },
})
</script>
