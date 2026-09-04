<template>
  <c-form ref="formRef" :model="form" style="width: 300px">
    <c-form-item
      field="code"
      label="code"
      :rules="[
        { required: true, message: 'Verification code is required' },
        { minLength: 6, message: 'Verification code is incomplete' },
        { match: /^\d+$/, message: 'Must be numeric' },
      ]"
    >
      <c-verification-code v-model="form.code" style="width: 300px" @finish="onFinish" />
    </c-form-item>
    <c-form-item>
      <c-button style="width: 60px" status="primary" size="lg" htmlType="submit">Submit</c-button>
    </c-form-item>
  </c-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Message } from '@cedarjs/ui'

const value = ref('654321')
const formRef = ref(null)
const form = ref({
  code: '',
})
const onFinish = (value) => Message.info(`Verification code: ${value}`)
</script>
