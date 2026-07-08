<template>
  <c-verification-code
    style="width: 400px"
    :length="9"
    :separator="(index) => ((index + 1) % 3 || index > 7 ? null : '-')"
    @finish="onFinish"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('654321')
const onFinish = (value) => Message.info(`Verification code: ${value}`)
</script>
