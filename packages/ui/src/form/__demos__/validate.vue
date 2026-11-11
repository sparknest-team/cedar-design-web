<template>
  <c-form ref="formRef" :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
    <c-form-item
      field="name"
      label="Username"
      :rules="[
        { required: true, message: 'name is required' },
        { minLength: 5, message: 'must be greater than 5 characters' },
      ]"
      :validate-trigger="['change', 'input']"
    >
      <c-input v-model="form.name" placeholder="please enter your username..." />
    </c-form-item>
    <c-form-item
      field="age"
      label="Age"
      :rules="[
        { required: true, message: 'age is required' },
        { type: 'number', max: 200, message: 'age is max than 200' },
      ]"
    >
      <c-input v-model="form.age" placeholder="please enter your age..." />
    </c-form-item>
    <c-form-item field="date" label="date" :rules="[{ required: true, message: 'age is required' }]">
      <c-date-picker v-model="form.date" placeholder="please enter date..." />
    </c-form-item>
    <c-form-item field="section" label="Section" :rules="[{ match: /section one/, message: 'must select one' }]">
      <c-select v-model="form.section" placeholder="Please select ..." clearable>
        <c-option value="section one">Section One</c-option>
        <c-option value="section two">Section Two</c-option>
        <c-option value="section three">Section Three</c-option>
      </c-select>
    </c-form-item>
  </c-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const handleSubmit = (data: any) => {
      console.log(data)
    }

    const form = reactive({
      size: 'md',
      name: '',
      age: undefined,
      section: '',
      province: 'haidian',
      options: [],
      date: '',
      time: '',
      radio: 'radio one',
      slider: 5,
      score: 5,
      switch: false,
      multiSelect: ['section one'],
      treeSelect: '',
    })
    const options = [
      {
        value: 'beijing',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'ChaoYang',
            children: [
              {
                value: 'datunli',
                label: 'Datunli',
              },
            ],
          },
          {
            value: 'haidian',
            label: 'Haidian',
          },
          {
            value: 'dongcheng',
            label: 'Dongcheng',
          },
          {
            value: 'xicheng',
            label: 'XiCheng',
          },
        ],
      },
      {
        value: 'shanghai',
        label: 'Shanghai',
        children: [
          {
            value: 'shanghaishi',
            label: 'Shanghai',
            children: [
              {
                value: 'huangpu',
                label: 'Huangpu',
              },
            ],
          },
        ],
      },
    ]

    return {
      form,
      options,
      handleSubmit,
    }
  },
})
</script>
