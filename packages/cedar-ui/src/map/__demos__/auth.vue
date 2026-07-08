<template>
  <div>
    逆地理解析和搜索建议接口都是通过gis接口请求的，需要申请对应API的权限。
    <br />
    也可以通过geocoderHandler自己去实现的逆地理解析和搜索建议（google地图不需要），则不需要申请权限。
    <c-link @click="handleClickLink">xxx</c-link>
    <c-button @click="handleClickButton">查看权限申请流程</c-button>

    <br />
    切换地图类型，重新加载页面。
    <br />
    <c-select v-model="mapType" :style="{ width: '240px' }" placeholder="Please select ..." @change="handleChange">
      <c-option>google</c-option>
      <c-option>amaps</c-option>
      <c-option>qqmaps</c-option>
    </c-select>
    <p>如果token过期，请把test环境自己的token粘贴到输入框，点击更新token并刷新页面即可。</p>
    <Space>
      <c-input v-model="token" style="width: 200px" placeholder="请设置最新的token" />
      <c-button type="primary" @click="setToken">更新token</c-button>
    </Space>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const handleClickLink = () => {
  window.open('xxx')
}
const handleClickButton = () => {
  window.open('https://xxx.com/pe-fe-statics/cfaef6b3-85c6-41d6-b3c4-de185b5ad3a4.jpeg')
}
const mapType = ref('ampas')
function handleChange(value: string) {
  console.log('value', value)
  setMapType()
  window.location.reload()
}
function setMapType() {
  localStorage.setItem('mapType', mapType.value)
}

function init() {
  token.value = localStorage.getItem('token') || ''
  mapType.value = localStorage.getItem('mapType') || 'amaps'
}
const token = ref<string>('')

function setToken() {
  localStorage.setItem('token', token.value)
  window.location.reload()
}

onMounted(() => {
  init()
})
</script>
<style scoped></style>
