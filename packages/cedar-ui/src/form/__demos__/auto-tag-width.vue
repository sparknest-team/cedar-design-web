<template>
  <c-form :model="form" :style="{ width: '600px' }" auto-label-width @submit="handleSubmit">
    <c-form-item field="name" label="Username">
      <c-input v-model="form.name" placeholder="please enter your username..." />
    </c-form-item>
    <c-form-item field="post" label="Post">
      <c-input v-model="form.post" placeholder="please enter your post..." />
    </c-form-item>
    <c-form-item field="isRead">
      <Checkbox v-model="form.isRead"> I have read the manual </Checkbox>
    </c-form-item>
    <c-form-item>
      <c-button html-type="submit">Submit</c-button>
    </c-form-item>
  </c-form>
  {{ form }}
</template>
<script lang="ts">
import { reactive, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const form = reactive({
      name: '',
      post: '',
      isRead: false,
    })
    const handleSubmit = (data) => {
      console.log(data)
    }

    return {
      form,
      handleSubmit,
    }
  },
})
</script>
