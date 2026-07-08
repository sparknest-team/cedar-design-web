<template>
  <c-form :model="form">
    <c-row :gutter="16">
      <c-col :span="8">
        <c-form-item field="value1" label="Value 1" label-col-flex="100px">
          <c-input v-model="form.value1" placeholder="please enter..." />
        </c-form-item>
      </c-col>
      <c-col :span="8">
        <c-form-item field="value2" label="Value 2" label-col-flex="80px">
          <c-input v-model="form.value2" placeholder="please enter..." />
        </c-form-item>
      </c-col>
      <c-col :span="8">
        <c-form-item field="value3" label="Value 3" label-col-flex="80px">
          <c-input v-model="form.value3" placeholder="please enter..." />
        </c-form-item>
      </c-col>
    </c-row>
    <c-row :gutter="16">
      <c-col :span="16">
        <c-form-item field="value4" label="Value 4" label-col-flex="100px">
          <c-input v-model="form.value4" placeholder="please enter..." />
        </c-form-item>
      </c-col>
      <c-col :span="8">
        <c-form-item field="value5" label="Value 5" label-col-flex="80px">
          <c-input v-model="form.value5" placeholder="please enter..." />
        </c-form-item>
      </c-col>
    </c-row>
  </c-form>
  {{ form }}
</template>
<script lang="ts">
import { reactive, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const form = reactive({
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
    })

    return {
      form,
    }
  },
})
</script>
