<template>
  <c-button @click="handleClick">Open Form Dialog</c-button>
  <c-dialog v-model:show="visible" title="Dialog Form" @cancel="handleCancel" @before-close="handleBeforeClose">
    <c-form :model="form">
      <c-form-item field="name" label="Name">
        <c-input v-model="form.name" />
      </c-form-item>
      <c-form-item field="post" label="Post">
        <c-select v-model="form.post">
          <c-option value="post1">Post1</c-option>
          <c-option value="post2">Post2</c-option>
          <c-option value="post3">Post3</c-option>
          <c-option value="post4">Post4</c-option>
        </c-select>
      </c-form-item>
    </c-form>
  </c-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)
    const form = reactive({
      name: '',
      post: '',
    })

    const handleClick = () => {
      visible.value = true
    }

    const handleBeforeClose = (action, done, refs) => {
      if (action !== 'confirm') {
        done()
        return
      }

      console.log(form)
      refs.confirmButtonLoading.value = true
      window.setTimeout(() => {
        refs.confirmButtonLoading.value = false
        done()
      }, 2000)
    }

    const handleCancel = () => {
      visible.value = false
    }

    return {
      visible,
      form,
      handleClick,
      handleBeforeClose,
      handleCancel,
    }
  },
})
</script>
