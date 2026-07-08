<template>
  <c-space direction="column">
    <c-radio-group type="button" v-model="format">
      <c-radio v-for="item in formatList" :value="item">{{ item }}</c-radio>
    </c-radio-group>
    <c-color-picker defaultValue="#00BEBE" :format="format" showText />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const format = ref('hex')
const formatList = ['hex', 'rgb']
</script>
