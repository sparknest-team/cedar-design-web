<template>
  <c-space direction="column" style="width: 100%">
    <c-space>
      <c-button variant="outline" @click="disabled = !disabled">{{ disabled ? '启用组合' : '禁用组合' }}</c-button>
      <c-button variant="outline" @click="readonly = !readonly">{{ readonly ? '允许编辑' : '组合只读' }}</c-button>
    </c-space>
    <c-input-group variant="outline" :disabled="disabled" :readonly="readonly" :hint="false">
      <c-input-group-label>https://</c-input-group-label>
      <c-input v-model="domain" placeholder="输入域名" clearable />
      <c-input-group-label>.com</c-input-group-label>
    </c-input-group>
    <c-input-group variant="filled" :disabled="disabled" :readonly="readonly" :hint="false">
      <c-input v-model="first" placeholder="继承组合状态" clearable />
      <c-input default-value="可独立编辑" :disabled="false" :readonly="false" clearable />
    </c-input-group>
    <c-input-group size="lg" variant="outline" :disabled="disabled" :readonly="readonly" :hint="false">
      <c-input-group-label>密码</c-input-group-label>
      <c-input-password v-model="password" placeholder="密码切换继承禁用状态" clearable />
    </c-input-group>
  </c-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const disabled = ref(false)
const readonly = ref(false)
const domain = ref('example')
const first = ref('继承状态')
const password = ref('CedarMaple')
</script>
