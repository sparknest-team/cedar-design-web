<template>
  <c-space direction="column" size="lg">
    <c-verification-code v-model="value" style="width: 200px" @finish="onFinish" size="xs" />
    <c-verification-code v-model="value" style="width: 220px" @finish="onFinish" size="sm" />
    <c-verification-code v-model="value" style="width: 260px" @finish="onFinish" size="md" />
    <c-verification-code v-model="value" style="width: 300px" @finish="onFinish" size="lg" />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Message } from '@cedarjs/ui'

const value = ref('654321')
const onFinish = (value) => Message.info(`Verification code: ${value}`)
</script>
