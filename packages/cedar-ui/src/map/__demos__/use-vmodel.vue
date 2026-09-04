<template>
  <div v-if="fetch">
    <p>如果token过期，请把test环境自己的token粘贴到输入框，点击更新token并刷新页面即可。</p>
    <c-space>
      <c-input v-model="token" style="width: 200px" placeholder="请设置最新的token" />
      <c-button status="primary" @click="setToken">更新token</c-button>
    </c-space>
    <c-map
      v-model:modelValue="value"
      :driver="driver"
      :fetch="fetch"
      show-name
      enableGisSearch
      show-locate-me-button
      show-edit-address-button
      :map-type="mapType"
      style="height: 300px; margin-bottom: 20px"
      :valueKeyAlias="valueMap"
      :valueKeyScope="valueList"
      @change="changeHandler" />

    <c-map-select
      v-model="value"
      show-name
      enableGisSearch
      map-type="google"
      show-locate-me-button
      show-edit-address-button
      clearable
      :driver="driver"
      :mapStyle="{
        height: '300px',
      }"
      :fetch="fetch"
      :valueKeyAlias="valueMap"
      :valueKeyScope="valueList"
      @change="changeHandler" />

    <!--  <MapSelect-->
    <!--    v-model:modelValue="value"-->
    <!--    :driver="driver"-->
    <!--    is-international-->
    <!--    style="height: 400px"-->
    <!--    @change="changeHandler"-->
    <!--  ></c-map-select>-->
    <!--  <c-map
    :driver="driver"
    is-international
    style="height: 300px; margin-bottom: 20px"
  ></c-map>-->
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const token = ref<string>('')
    const mapType = ref<'amaps' | 'google' | 'qqmaps'>('amaps')
    const fetch = ref<any>()
    onMounted(() => {
      // 需要在项目中自行解决 _AMapSecurityConfig 的问题。
      ;(window as any)._AMapSecurityConfig = {
        securityJsCode: base64ToString('NDA1NTg5NTM3MTViZjA5ZDQ5ZGM2NTc2OWM0YjZjZTQ='),
      }
      // TODO: 脱敏迁移 - @maplejs/mfe-vue3 暂不可用，接入新的 Fetch 驱动后再恢复
    })

    function changeHandler(data: any) {
      console.log('changeHandler---valueValue', value.value)
      console.log('changeHandler---data', data)
    }

    function setToken() {
      localStorage.setItem('token', token.value)
    }

    function init() {
      token.value = localStorage.getItem('token') || ''
      mapType.value = (localStorage.getItem('mapType') as any) || 'amaps'
    }

    onMounted(() => {
      init()
    })
    // const value = ref({ address: '1212', lat: 39.11408, lng: 112.99787 })
    class Test {}

    const value = ref(new Test())

    const valueList = ref(['address', 'name'])
    const valueMap = ref({
      longitude: 'alilongitude',
      latitude: 'latitude',
      address: 'aliaddress',
      name: 'aliname',
      adcode: 'aliadcode',
      countryCode: 'countryCode',
      city: 'city',
    })
    setTimeout(() => {
      // value.value = { address: '44', lat: 29.11408, lng: 112.99787 }
    }, 3000)

    return { mapType, token, value, setToken, changeHandler, fetch, valueList, valueMap }
  },
})
</script>
