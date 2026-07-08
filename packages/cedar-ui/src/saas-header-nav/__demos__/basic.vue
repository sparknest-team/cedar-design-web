<template>
  <p>输入 SaaS 平台 dev 环境 access_token，点击「应用」按钮，可预览真实数据 demo 效果</p>
  <c-space :size="10" style="flex-wrap: wrap">
    <c-input v-model="state.accessToken" placeholder="请输入" style="width: 400px; margin-bottom: 10px" />
    <c-button style="margin-bottom: 10px" @click="handleApplyAcessToken">应用</c-button>
  </c-space>

  <br /><br /><br />

  <c-space :size="30" direction="column" style="width: 100%">
    <div>
      <p>常规案例</p>
      <c-saas-header-nav
        v-if="state.showDemo"
        :fetch="state.fetchBackend"
        :fixed="false"
        :mfeSdk="{
          Auth: state.Auth,
          Env: state.Env,
          SaaSConf: state.SaaSConf,
        }"
        show-account-basic-info
        show-logout
        show-tenant-info
        show-tenant-switch
        show-to-mgmt
        show-workbench />
    </div>

    <div>
      <p>手动切换 dark 深色模式</p>
      <c-saas-header-nav
        v-if="state.showDemo"
        :fetch="state.fetchBackend"
        :fixed="false"
        :mfeSdk="{
          Auth: state.Auth,
          Env: state.Env,
          SaaSConf: state.SaaSConf,
        }"
        show-account-basic-info
        show-logout
        show-tenant-info
        show-tenant-switch
        show-to-mgmt
        show-workbench
        theme="dark" />
    </div>

    <div>
      <p>右侧用户信息下拉菜单内预置操作配置</p>

      <c-space :size="15" direction="column" style="width: 100%">
        <c-saas-header-nav
          v-if="state.showDemo"
          :fetch="state.fetchBackend"
          :fixed="false"
          :mfeSdk="{
            Auth: state.Auth,
            Env: state.Env,
            SaaSConf: state.SaaSConf,
          }"
          show-logout
          show-tenant-switch
          show-to-mgmt />

        <c-saas-header-nav
          v-if="state.showDemo"
          :fetch="state.fetchBackend"
          :fixed="false"
          :mfeSdk="{
            Auth: state.Auth,
            Env: state.Env,
            SaaSConf: state.SaaSConf,
          }"
          :show-logout="false"
          :show-tenant-switch="false"
          :show-to-mgmt="false" />
      </c-space>
    </div>

    <div>
      <p>隐藏租户/企业信息</p>
      <c-saas-header-nav
        v-if="state.showDemo"
        :fetch="state.fetchBackend"
        :fixed="false"
        :mfeSdk="{
          Auth: state.Auth,
          Env: state.Env,
          SaaSConf: state.SaaSConf,
        }"
        :showTenantInfo="false" />
    </div>

    <div>
      <p>自定义左侧内容</p>
      <c-saas-header-nav
        v-if="state.showDemo"
        :fetch="state.fetchBackend"
        :fixed="false"
        :mfeSdk="{
          Auth: state.Auth,
          Env: state.Env,
          SaaSConf: state.SaaSConf,
        }"
      >
        <template #left-prefix>
          <c-input :style="{ width: '120px' }" clearable placeholder="请输入1"></c-input>
        </template>
      </c-saas-header-nav>
    </div>

    <div>
      <p>自定义右侧内容</p>

      <c-space :size="15" direction="column" style="width: 100%">
        <c-saas-header-nav
          v-if="state.showDemo"
          :fetch="state.fetchBackend"
          :fixed="false"
          :mfeSdk="{
            Auth: state.Auth,
            Env: state.Env,
            SaaSConf: state.SaaSConf,
          }"
        >
          <template #user-info>
            <div>自定义内容提到用户信息板块</div>
          </template>
        </c-saas-header-nav>

        <c-saas-header-nav
          v-if="state.showDemo"
          :fetch="state.fetchBackend"
          :fixed="false"
          :mfeSdk="{
            Auth: state.Auth,
            Env: state.Env,
            SaaSConf: state.SaaSConf,
          }"
          show-workbench
        >
          <template #user-info-prefix>
            <div style="margin-right: 24px">自定义内容</div>
          </template>
        </c-saas-header-nav>
      </c-space>
    </div>
  </c-space>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
const STORAGE_KEY = '__SAAS-HEADER-NAV-TEMP-ACCESS-TOKEN__'

const state = reactive({
  accessToken: '',
  showDemo: true,
  genFetch: null as any,
  globalConfig: null as any,

  Auth: null as any,
  Env: null as any,
  SaaSConf: null as any,
  fetchBackend: null as any,
})

const handleApplyAcessToken = () => {
  localStorage.setItem(STORAGE_KEY, state.accessToken)
  window.location.reload()
}

const refreshDemo = () => {
  state.Auth.config.userInfoApiPath = '/solar/cam/v1/user/info'
  state.fetchBackend = state.genFetch('xxx.com/pe/cloud', {
    openLoginInterceptor: false,
    needAuth: true,
    commonParams: {},
    headers: {
      Authorization: `Bearer ${state.accessToken}`,
    },
  })
  state.globalConfig.fetch = state.fetchBackend

  state.Auth.updateUserAuth().then((res: any) => {
    state.showDemo = false
    window.setTimeout(() => (state.showDemo = true))
  })
}

// 此处为demo调试用内容
onMounted(() => {
  state.accessToken = localStorage.getItem(STORAGE_KEY) || ''
  // eslint-disable-next-line
  // @ts-ignore
  // TODO: 脱敏迁移 - 暂时注释 @nio-pow/mfe-vue3
  // import('@nio-pow/mfe-vue3').then(({ Auth, Env, SaaSConf, Fetch, globalConfig }) => {
    state.Auth = Auth
    state.Env = Env
    state.SaaSConf = SaaSConf
    state.genFetch = Fetch.genFetch
    state.globalConfig = globalConfig

    refreshDemo()
  })
})
// 以上为demo调试用内容，实际项目不用参考
</script>

<style lang="scss" scoped></style>
