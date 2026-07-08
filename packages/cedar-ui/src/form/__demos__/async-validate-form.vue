<template>
  <c-form ref="formRef" :model="form" :style="{ width: '600px' }">
    <c-form-item field="name" label="Username" :rules="rules">
      <c-input v-model="form.name" placeholder="please enter your username..." />
    </c-form-item>
    <c-form-item field="post" label="Post">
      <c-input v-model="form.post" placeholder="please enter your post..." />
    </c-form-item>
    <c-form-item field="isRead">
      <Checkbox v-model="form.isRead"> I have read the manual </Checkbox>
    </c-form-item>
    <c-form-item>
      <c-button @click="handleClick">Set Status</c-button>
    </c-form-item>
  </c-form>
  {{ form }}
</template>
<script lang="ts">
import { reactive, defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const formRef = ref()
    const form = reactive({
      name: '',
      post: '',
      isRead: false,
    })
    const rules = [
      {
        validator: (value, cb) => {
          return new Promise<void>((resolve) => {
            window.setTimeout(() => {
              if (value !== 'admin') {
                cb('name must be admin')
              }
              resolve()
            }, 2000)
          })
        },
      },
    ]
    const handleClick = () => {
      formRef.value.setFields({
        name: {
          status: 'error',
          message: 'async name error',
        },
        post: {
          status: 'error',
          message: 'valid post',
        },
      })
    }

    return {
      formRef,
      form,
      rules,
      handleClick,
    }
  },
})
</script>
