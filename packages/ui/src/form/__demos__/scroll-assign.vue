<template>
  <c-space>
    <c-button @click="formRef && formRef.validate()">Submit</c-button>
    <c-button @click="formRef && formRef.resetFields()">Reset</c-button>
    <c-button @click="formRef && formRef.scrollToField('name19')">Scroll to the last field</c-button>
  </c-space>
  <c-form
    ref="formRef"
    style="width: 500px; height: 300px; margin-top: 20px; padding-right: 16px; overflow: auto"
    :model="form"
    scroll-to-error="start"
  >
    <template v-for="(fieldName, index) in fieldNames" :key="index">
      <c-form-item :field="fieldName" :label="'user' + index" :rules="[{ required: true, message: 'Name is required' }]">
        <c-input v-model="form[fieldName]" />
      </c-form-item>
    </template>
  </c-form>
</template>
<script lang="ts">
import { reactive, ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>()
    const fieldCount = 20
    const fieldNames = Array.from({ length: fieldCount }, (_, index) => `name${index}`)
    const form = reactive(
      Object.fromEntries(fieldNames.map((fieldName, index) => [fieldName, index === 7 ? '' : index.toString()])),
    )

    return {
      form,
      formRef,
      fieldCount,
      fieldNames,
    }
  },
})
</script>
