<template>
  <c-space>
    <c-input v-model="token" style="width: 200px" placeholder="请设置最新的token" />
    <c-button type="primary" @click="setToken">更新token</c-button>
  </c-space>
  <c-space direction="column" :size="40" fill>
    <div>
      <div style="margin-bottom: 10px">普通上传</div>
      <c-upload action="/" />
    </div>

    <div>
      <div style="margin-bottom: 10px">拖拽上传</div>
      <c-upload action="/" draggable :auto-upload="false" />
    </div>
  </c-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const token = ref(localStorage.getItem('token') ?? '')

    function setToken() {
      localStorage.setItem('token', token.value)
      window.location.reload()
    }

    return {
      token,
      setToken,
    }
  },
})
</script>
