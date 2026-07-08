<template>
  <c-space>
    <c-input v-model="token" style="width: 200px" placeholder="请设置最新的token" />
    <Button type="primary" @click="setToken">更新token</Button>
  </c-space>
  <c-space v-if="fetch" direction="column" fill>
    <c-people-select
      v-model="value"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      clearable
      :fetch="fetch"
      @change="change" />
    <c-people-select
      v-model="value"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      clearable
      :fetch="fetch"
      is-label
      @change="change" />
  </c-space>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  setup() {
    const token = ref<string>('')
    const fetch = ref<any>()
    onMounted(() => {
      // eslint-disable-next-line
      // @ts-ignore
      // TODO: 脱敏迁移 - 暂时注释 @nio-pow/mfe-vue3
      // import('@nio-pow/mfe-vue3').then(({ Fetch }) => {
        fetch.value = Fetch.genFetch('powerpro-api-test.xxxx.com', {
          headers: {
            Authorization: 'Bearer ' + token.value,
          },
          needAuth: true,
          openLoginInterceptor: false,
          commonParams: {
            appId: '100360',
            appVer: '1.0.1',
          },
        })
      })
    })

    function change(v: any) {
      console.log(v)
    }

    function setToken() {
      localStorage.setItem('token', token.value)
    }

    function init() {
      token.value = localStorage.getItem('token') || ''
    }

    onMounted(() => {
      init()
    })

    const value = ref('shuai.meng')
    return {
      value,
      fetch,
      token,
      change,
      setToken,
    }
  },
})
</script>
