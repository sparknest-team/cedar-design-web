<template>
  <c-form ref="refForm" :model="form" @submit="handleSubmit">
    <c-form-item field="name" label="Username" required>
      <c-select v-model="form.name">
        <c-optgroup label="Group-1">
          <c-option>Beijing</c-option>
          <c-option>Shanghai</c-option>
        </c-optgroup>
        <c-option>Guangzhou</c-option>
        <c-option disabled>Disabled</c-option>
      </c-select>
    </c-form-item>
    <c-form-item>
      <c-button html-type="submit">Submit</c-button>
    </c-form-item>
  </c-form>
  {{ form.name }}
</template>
<script lang="ts">
import { reactive, ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const refForm = ref<FormInstance>()
    const form = reactive({
      name: '',
      post: '',
      isRead: false,
    })
    const handleSubmit = (data: any) => {
      console.log(data)
      refForm.value?.resetFields(data)
    }

    return {
      form,
      refForm,
      handleSubmit,
    }
  },
})
</script>
