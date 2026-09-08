<template>
  <c-form :model="form" :style="{ maxWidth: '420px' }" @submit="submitted = true">
    <c-form-item
      field="email"
      label="邮箱"
      :rules="[
        { required: true, message: '请输入邮箱' },
        { type: 'email', message: '请输入有效邮箱' },
      ]"
      :validate-trigger="['blur', 'change']"
    >
      <c-input v-model="form.email" type="email" placeholder="name@example.com" />
    </c-form-item>
    <c-button html-type="submit" status="primary">提交</c-button>
    <span v-if="submitted" class="form-demo__success">已提交</span>
  </c-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({ email: '' })
const submitted = ref(false)
</script>

<style scoped>
.form-demo__success {
  margin-left: 12px;
  color: rgb(var(--green-6));
  font-size: 13px;
}
</style>
