<template>
  <c-verification-code defaultValue="123" style="width: 300px" masked @finish="onFinish" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('654321')
const onFinish = (value) => Message.info(`Verification code: ${value}`)
</script>
