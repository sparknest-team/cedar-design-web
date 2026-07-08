<template>
  <c-button @click="handleClick">Open Form Modal</c-button>
  <c-modal v-model:visible="visible" title="Modal Form" @cancel="handleCancel" @before-ok="handleBeforeOk">
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
  </c-modal>
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
    const handleBeforeOk = (done: any) => {
      console.log(form)
      window.setTimeout(() => {
        done()
        // prevent close
        // done(false)
      }, 3000)
    }
    const handleCancel = () => {
      visible.value = false
    }

    return {
      visible,
      form,
      handleClick,
      handleBeforeOk,
      handleCancel,
    }
  },
})
</script>
